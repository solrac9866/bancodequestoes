/* Gerador de Avaliações – 4º bimestre */
(function () {
  'use strict';
  const BANCO = window.BANCO;
  const N_QUESTOES = 10;
  const LETRAS = ['A', 'B', 'C', 'D'];
  const $ = (id) => document.getElementById(id);

  const estado = {
    ano: 6,
    disc: 'Ciências',
    marcadas: new Set(),
    prova: [],          // [{q, alts:[{t, ok}], letraOk}]
    imgsCarregadas: {}, // ano -> Promise
  };

  /* ------------------------------------------------------------ util */
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const lerLS = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const gravarLS = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* sem armazenamento */ } };
  let toastT;
  function toast(msg) {
    const t = $('toast'); t.textContent = msg; t.classList.add('on');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 3200);
  }
  const disciplinas = (ano) => [...new Set(BANCO.hab.filter((h) => h.ano === ano).map((h) => h.disc))];
  const habsAtuais = () => BANCO.hab.filter((h) => h.ano === estado.ano && h.disc === estado.disc);
  const qDaHab = (id) => BANCO.q.filter((q) => q.hab === id);

  /* ------------------------------------------------- carregar imagens */
  const slug = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  function carregarImagens(ano, disc) {
    const chave = ano + '_' + slug(disc);
    if (estado.imgsCarregadas[chave]) return estado.imgsCarregadas[chave];
    estado.imgsCarregadas[chave] = new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = 'data/imgs/' + chave + '.js';
      s.onload = () => res(); s.onerror = () => { delete estado.imgsCarregadas[chave]; rej(new Error('imagens')); };
      document.head.appendChild(s);
    });
    return estado.imgsCarregadas[chave];
  }
  const DIM = {};
  function medirImagens() {
    const nomes = Object.keys(window.IMAGENS || {}).filter((n) => !DIM[n]);
    return Promise.all(nomes.map((n) => new Promise((res) => {
      const im = new Image();
      im.onload = () => { DIM[n] = [im.naturalWidth, im.naturalHeight]; res(); };
      im.onerror = () => res();
      im.src = window.IMAGENS[n];
    })));
  }

  /* ----------------------------------------------------- painel esq. */
  function montarDisciplinas() {
    const seg = $('segDisc'); seg.innerHTML = '';
    const lista = disciplinas(estado.ano);
    if (!lista.includes(estado.disc)) estado.disc = lista[0];
    lista.forEach((d) => {
      const b = document.createElement('button'); b.type = 'button'; b.textContent = d;
      b.className = d === estado.disc ? 'on' : '';
      b.onclick = () => { estado.disc = d; estado.marcadas.clear(); montarDisciplinas(); montarHabilidades(); preencherDisc(); };
      seg.appendChild(b);
    });
  }
  function preencherDisc() {
    const campo = $('fDisc');
    if (!campo.dataset.manual) campo.value = estado.disc;
  }
  function montarHabilidades() {
    const cont = $('listaHab'); cont.innerHTML = '';
    habsAtuais().forEach((h) => {
      const n = qDaHab(h.id).length;
      const lab = document.createElement('label');
      lab.className = 'hab' + (estado.marcadas.has(h.id) ? ' on' : '');
      lab.innerHTML =
        '<input type="checkbox" ' + (estado.marcadas.has(h.id) ? 'checked' : '') + '>' +
        '<div><div class="t">' + esc(h.tit) + '</div>' +
        '<div class="m">' + (h.cod ? '<b>' + esc(h.cod) + '</b> · ' : '') + esc(h.aulas) + ' · <b>' + n + ' questões</b></div>' +
        '<div class="d">' + esc(h.desc) + '</div></div>';
      lab.querySelector('input').onchange = (e) => {
        if (e.target.checked) estado.marcadas.add(h.id); else estado.marcadas.delete(h.id);
        lab.classList.toggle('on', e.target.checked); atualizarAviso();
      };
      cont.appendChild(lab);
    });
    atualizarAviso();
  }
  function totalSelecionado() {
    let t = 0; estado.marcadas.forEach((id) => { t += qDaHab(id).length; }); return t;
  }
  function atualizarAviso() {
    const av = $('avisoHab'); const t = totalSelecionado();
    if (!estado.marcadas.size) { av.className = 'aviso'; av.textContent = 'Marque ao menos uma habilidade.'; }
    else if (t < N_QUESTOES) { av.className = 'aviso erro'; av.textContent = 'As habilidades marcadas têm só ' + t + ' questões. Marque mais uma habilidade para chegar a 10.'; }
    else { av.className = 'aviso'; av.textContent = t + ' questões disponíveis nas habilidades marcadas.'; }
  }

  /* ------------------------------------------------------- sorteio */
  function embaralharAlts(q) {
    const itens = q.alts.map((t, i) => ({ t, ok: i === 0 }));
    const emb = shuffle(itens);
    return { q, alts: emb, letraOk: LETRAS[emb.findIndex((a) => a.ok)] };
  }
  function sortear() {
    const ids = [...estado.marcadas];
    const porHab = ids.map((id) => shuffle(qDaHab(id)));
    const escolhidas = []; const usadasImg = {}; const stems = new Set();
    // distribui por rodízio entre as habilidades; tenta repetir cada imagem o mínimo possível (1x, depois 2x, depois sem limite)
    for (const lim of [1, 2, 99]) {
      let avancou = true;
      while (escolhidas.length < N_QUESTOES && avancou) {
        avancou = false;
        for (const fila of porHab) {
          if (escolhidas.length >= N_QUESTOES) break;
          const idx = fila.findIndex((q) => !stems.has(q.stem) && (!q.img || (usadasImg[q.img] || 0) < lim));
          if (idx >= 0) { const [q] = fila.splice(idx, 1); escolhidas.push(q); stems.add(q.stem); if (q.img) usadasImg[q.img] = (usadasImg[q.img] || 0) + 1; avancou = true; }
        }
      }
      if (escolhidas.length >= N_QUESTOES) break;
    }
    // 2) se faltou, relaxa a regra de imagens
    if (escolhidas.length < N_QUESTOES) {
      for (const fila of porHab) for (const q of fila) {
        if (escolhidas.length >= N_QUESTOES) break;
        if (!stems.has(q.stem)) { escolhidas.push(q); stems.add(q.stem); }
      }
    }
    // mantém as questões da mesma habilidade próximas (ordem do conteúdo), mas embaralha dentro do grupo
    const ordemHab = ids;
    escolhidas.sort((a, b) => ordemHab.indexOf(a.hab) - ordemHab.indexOf(b.hab) || (a.aula - b.aula));
    return escolhidas.map(embaralharAlts);
  }

  /* ---------------------------------------------------- renderizar */
  function valor(id) { return $(id).value.trim(); }
  function htmlCab() {
    const linha = (rot, v) => '<div class="c"><span class="l">' + rot + '</span><span class="v">' + esc(v) + '</span></div>';
    return '<div class="cab">' +
      '<div class="cab-esc">' + esc(valor('fEscola')) + '</div>' +
      '<div class="cab-tit">' + esc(valor('fTitulo') || 'Avaliação') + '</div>' +
      '<div class="cab-lin">' +
        '<div class="c" style="flex:3"><span class="l">Aluno(a):</span><span class="v"></span></div>' +
        '<div class="c" style="flex:.7"><span class="l">Nº:</span><span class="v"></span></div>' +
        '<div class="c" style="flex:1.1"><span class="l">Turma:</span><span class="v">' + esc(valor('fTurma')) + '</span></div>' +
        '<div class="c" style="flex:1.1"><span class="l">Data:</span><span class="v">' + esc(valor('fData')) + '</span></div>' +
      '</div>' +
      '<div class="cab-lin">' +
        '<div class="c" style="flex:2"><span class="l">Disciplina:</span><span class="v">' + esc(valor('fDisc')) + '</span></div>' +
        '<div class="c" style="flex:2.6"><span class="l">Professor(a):</span><span class="v">' + esc(valor('fProf')) + '</span></div>' +
        '<div class="c" style="flex:.9"><span class="l">Nota:</span><span class="v"></span></div>' +
      '</div></div>';
  }
  function tamanhoImg(nome, cw, fs, ih) {
    const d = DIM[nome]; if (!d) return '';
    const maxW = cw - 1.5 * fs - 2; // largura útil (descontando o recuo e a borda)
    const sc = Math.min(maxW / d[0], ih / d[1]);
    return ' style="width:' + Math.round(d[0] * sc) + 'px;height:' + Math.round(d[1] * sc) + 'px;max-width:none;max-height:none"';
  }
  function htmlQuestao(item, i, cw, fs, ih) {
    const q = item.q;
    const curtas = item.alts.every((a) => a.t.length <= 20);
    const img = q.img && window.IMAGENS && window.IMAGENS[q.img];
    return '<div class="q" data-i="' + i + '">' +
      '<button type="button" class="troca" data-troca="' + i + '" title="Trocar esta questão">↻ trocar</button>' +
      '<div class="q-top"><span class="q-num">' + (i + 1) + '.</span><span class="q-stem">' + esc(q.stem) + '</span></div>' +
      (q.texto ? '<div class="q-texto">' + esc(q.texto) + '</div>' : '') +
      (img ? '<div class="q-fig"><img src="' + img + '" alt=""' + tamanhoImg(q.img, cw, fs, ih) + '></div>' : '') +
      '<div class="alts' + (curtas ? ' duas' : '') + '">' +
      item.alts.map((a, k) => '<div class="alt"><b>' + LETRAS[k] + ')</b><span>' + esc(a.t) + '</span></div>').join('') +
      '</div></div>';
  }
  function renderFolha() {
    const folha = $('folha');
    if (!estado.prova.length) {
      folha.innerHTML = htmlCab() + '<div class="vazio">Marque as habilidades e clique em<br><b>Gerar nova prova</b></div>';
      folha.style.setProperty('--fs', '10.5px'); folha.style.setProperty('--imgh', '110px');
      escalar(); return;
    }
    folha.innerHTML = htmlCab() + '<div class="cols" id="cols"><div class="col" id="c1"></div><div class="col" id="c2"></div></div>' +
      '<div class="rod">Questões elaboradas a partir do Material do Estudante – 4º bimestre (Vol. 4), SEDUC-SP. Figuras reproduzidas do material.</div>';
    ajustar();
    escalar();
  }

  /* Distribui as 10 questões em 2 colunas e reduz fonte/imagens até caber na folha */
  function ajustar() {
    const folha = $('folha'); const c1 = $('c1'); const c2 = $('c2'); const cols = $('cols');
        const passos = [[11, 150], [10.8, 135], [10.6, 122], [10.4, 112], [10, 100], [9.6, 92], [9.2, 84], [8.8, 76], [8.5, 68], [8.2, 60], [8, 52], [7.8, 44], [7.6, 36]];
    let ok = false;
    for (const [fs, ih] of passos) {
      folha.style.setProperty('--fs', fs + 'px'); folha.style.setProperty('--imgh', ih + 'px');
      const cw = c1.clientWidth || 360;
      const htmls = estado.prova.map((it, i) => htmlQuestao(it, i, cw, fs, ih));
      // mede cada questão na largura de uma coluna
      c1.innerHTML = htmls.join(''); c2.innerHTML = '';
      c1.style.justifyContent = 'flex-start';
      const alturas = [...c1.children].map((el) => el.getBoundingClientRect().height / escalaAtual());
      // melhor ponto de corte (ordem preservada)
      let melhor = 5, menor = Infinity;
      for (let k = 4; k <= 6; k++) {
        const a = alturas.slice(0, k).reduce((s, x) => s + x, 0);
        const b = alturas.slice(k).reduce((s, x) => s + x, 0);
        const m = Math.max(a, b);
        if (m < menor) { menor = m; melhor = k; }
      }
      c1.innerHTML = htmls.slice(0, melhor).join(''); c2.innerHTML = htmls.slice(melhor).join('');
      c1.style.justifyContent = c2.style.justifyContent = 'space-between';
      const disp = cols.clientHeight;
      const h1 = [...c1.children].reduce((s, el) => s + el.offsetHeight, 0);
      const h2 = [...c2.children].reduce((s, el) => s + el.offsetHeight, 0);
      if (Math.max(h1, h2) <= disp - 4) { ok = true; break; }
    }
    if (!ok) toast('Atenção: as questões escolhidas ficaram muito longas; use ↻ trocar em alguma delas.');
    folha.querySelectorAll('[data-troca]').forEach((b) => { b.onclick = () => trocar(+b.dataset.troca); });
  }
  function escalaAtual() { return parseFloat($('folha').dataset.escala || '1'); }
  function escalar() {
    const wrap = $('folhaWrap'); const folha = $('folha'); const previa = $('previa');
    const larg = previa.clientWidth - parseFloat(getComputedStyle(previa).paddingLeft) * 2;
    const s = Math.min(1, larg / 794);
    folha.dataset.escala = s; folha.style.transform = 'scale(' + s + ')';
    wrap.style.width = 794 * s + 'px'; wrap.style.height = 1123 * s + 'px';
  }

  /* ------------------------------------------------------- ações */
  async function gerar() {
    if (!estado.marcadas.size) { toast('Marque ao menos uma habilidade.'); return; }
    if (totalSelecionado() < N_QUESTOES) { toast('Faltam questões: marque mais uma habilidade para chegar a 10.'); return; }
    $('status').textContent = 'Carregando imagens do livro…';
    try { await carregarImagens(estado.ano, estado.disc); await medirImagens(); } catch (e) { toast('Não foi possível carregar as imagens (data/imgs/).'); }
    estado.prova = sortear();
    renderFolha();
    ['btnPdf', 'btnGab', 'btnPrint'].forEach((id) => { $(id).disabled = false; });
    $('status').textContent = '10 questões geradas · ' + estado.disc + ' · ' + estado.ano + 'º ano. Passe o mouse sobre uma questão para trocá-la.';
    if (window.innerWidth <= 900) $('previa').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function trocar(i) {
    const atual = estado.prova[i].q;
    const emUso = new Set(estado.prova.map((p) => p.q.stem));
    const ids = [...estado.marcadas];
    let cands = BANCO.q.filter((q) => ids.includes(q.hab) && !emUso.has(q.stem));
    const mesma = cands.filter((q) => q.hab === atual.hab);
    if (mesma.length) cands = mesma;
    if (!cands.length) { toast('Não há outra questão disponível nas habilidades marcadas.'); return; }
    const novo = cands[Math.floor(Math.random() * cands.length)];
    estado.prova[i] = embaralharAlts(novo);
    renderFolha();
  }

  function nomeArquivo(sufixo) {
    const base = [estado.disc, estado.ano + 'ano', valor('fTurma')].filter(Boolean).join('_')
      .normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-zA-Z0-9_-]+/g, '-');
    return 'prova_' + base + sufixo + '.pdf';
  }
  async function baixarPdf() {
    if (!estado.prova.length) return;
    const btn = $('btnPdf'); const rot = btn.textContent; btn.disabled = true; btn.textContent = 'Gerando PDF…';
    const folha = $('folha'); const transf = folha.style.transform;
    document.body.classList.add('exportando');
    folha.style.transform = 'none';
    try {
      const canvas = await window.html2canvas(folha, { scale: 3, backgroundColor: '#ffffff', useCORS: true, logging: false, width: 794, height: 1123, windowWidth: 1400 });
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true });
      pdf.addImage(canvas.toDataURL('image/jpeg', 0.93), 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
      pdf.save(nomeArquivo(''));
      toast('PDF gerado.');
    } catch (e) {
      console.error(e); toast('Não foi possível gerar o PDF. Tente o botão Imprimir e escolha “Salvar como PDF”.');
    } finally {
      folha.style.transform = transf; document.body.classList.remove('exportando');
      btn.disabled = false; btn.textContent = rot;
    }
  }
  function baixarGabarito() {
    if (!estado.prova.length) return;
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ unit: 'mm', format: 'a4' });
    let y = 20;
    pdf.setFont('helvetica', 'bold'); pdf.setFontSize(16);
    pdf.text('Gabarito', 20, y); y += 7;
    pdf.setFont('helvetica', 'normal'); pdf.setFontSize(11);
    const info = [valor('fEscola'), valor('fTitulo'), [valor('fDisc'), valor('fTurma'), valor('fProf')].filter(Boolean).join(' · ')].filter(Boolean);
    info.forEach((l) => { pdf.text(l, 20, y); y += 5.5; });
    y += 4;
    estado.prova.forEach((it, i) => {
      pdf.setFont('helvetica', 'bold'); pdf.text((i + 1) + '. ' + it.letraOk, 20, y);
      pdf.setFont('helvetica', 'normal');
      const certo = it.alts.find((a) => a.ok).t;
      const lin = pdf.splitTextToSize(certo, 150);
      pdf.text(lin, 36, y); y += 5.2 * lin.length + 2.5;
      if (y > 275) { pdf.addPage(); y = 20; }
    });
    pdf.save(nomeArquivo('_gabarito'));
  }
  function imprimir() { if (estado.prova.length) { escalar(); window.print(); } }

  /* ------------------------------------------------------ inicialização */
  function init() {
    // campos do cabeçalho
    ['fEscola', 'fTurma', 'fData', 'fDisc', 'fProf', 'fTitulo'].forEach((id) => {
      const el = $(id); const salvo = lerLS('ger_' + id);
      if (salvo !== null && id !== 'fData' && id !== 'fDisc') el.value = salvo;
      el.addEventListener('input', () => {
        if (id === 'fDisc') el.dataset.manual = el.value ? '1' : '';
        if (id !== 'fData') gravarLS('ger_' + id, el.value);
        renderFolhaSemSortear();
      });
    });
    // série
    const anos = [...new Set(BANCO.hab.map((h) => h.ano))].sort((a, b) => a - b);
    if (!anos.includes(estado.ano)) estado.ano = anos[0];
    const segAno = $('segAno'); segAno.innerHTML = '';
    anos.forEach((a) => {
      const b = document.createElement('button'); b.type = 'button'; b.dataset.ano = a; b.textContent = a + 'º ano';
      b.className = a === estado.ano ? 'on' : '';
      b.onclick = () => {
        estado.ano = a; estado.marcadas.clear();
        segAno.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
        montarDisciplinas(); montarHabilidades(); preencherDisc();
      };
      segAno.appendChild(b);
    });
    $('btnTodas').onclick = () => { habsAtuais().forEach((h) => estado.marcadas.add(h.id)); montarHabilidades(); };
    $('btnNenhuma').onclick = () => { estado.marcadas.clear(); montarHabilidades(); };
    $('btnGerar').onclick = gerar;
    $('btnPdf').onclick = baixarPdf;
    $('btnGab').onclick = baixarGabarito;
    $('btnPrint').onclick = imprimir;
    window.addEventListener('resize', escalar);
    montarDisciplinas(); montarHabilidades(); preencherDisc();
    renderFolha();
  }
  // Atualiza só o cabeçalho quando o usuário digita (mantém as questões)
  function renderFolhaSemSortear() {
    const cab = $('folha').querySelector('.cab');
    if (!cab) return;
    const tmp = document.createElement('div'); tmp.innerHTML = htmlCab();
    cab.replaceWith(tmp.firstChild);
    if (estado.prova.length) { ajustar(); }
  }
  init();
  window.__ger = { estado, gerar, ajustar, renderFolha };
})();
