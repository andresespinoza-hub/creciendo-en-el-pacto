// ═══════════════════════════════════════════
// CRECIENDO EN EL PACTO — app.js v2
// Vista Hoy · Export para Claude · E/D/C
// ═══════════════════════════════════════════

// ── STORAGE ──
const S = {
  get: (k, d) => { try { const v = localStorage.getItem('cp_' + k); return v ? JSON.parse(v) : d; } catch(e) { return d; } },
  set: (k, v) => { try { localStorage.setItem('cp_' + k, JSON.stringify(v)); } catch(e) {} }
};

let logs     = S.get('logs', {});
let progress = S.get('prog', {});
let portfolio= S.get('port', []);
let rNotes   = S.get('rn', {});
let hoyWeek  = S.get('hoy_week', 1);   // semana activa en vista Hoy
let hoyDay   = S.get('hoy_day', 'martes'); // día activo en vista Hoy

const TC = { 1:'#D4641A', 2:'#3A7A4E', 3:'#9B3322', 4:'#5B3F8C' };

// ── MOBILE SIDEBAR ──
function openSidebar()  { document.querySelector('.sb').classList.add('open');    document.querySelector('.sb-overlay').classList.add('open'); }
function closeSidebar() { document.querySelector('.sb').classList.remove('open'); document.querySelector('.sb-overlay').classList.remove('open'); }

// ── NAVEGACIÓN ──
function nav(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.sb-item').forEach(i => i.classList.remove('active'));
  const view = document.getElementById('view-' + id);
  if (view) view.classList.add('active');
  const T = { hoy:'Hoy', inicio:'Resumen', plan:'Planificación · 38 semanas', prog:'Progreso E/D/C', port:'Portafolio', inf:'Informes' };
  document.getElementById('topbar-title').textContent = T[id] || id;
  document.querySelectorAll('.sb-item').forEach(i => {
    if (i.getAttribute('onclick') && i.getAttribute('onclick').includes(`'${id}'`))
      i.classList.add('active');
  });
  closeSidebar();
  if (id === 'hoy')    buildHoy();
  if (id === 'inicio') buildInicio();
  if (id === 'plan')   buildPlan();
  if (id === 'prog')   buildProg();
  if (id === 'port')   buildPort();
  if (id === 'inf')    buildInf(1);
}

// ═══════════════════════════════════════════
// VISTA HOY
// ═══════════════════════════════════════════
function buildHoy() {
  const w = WEEKS.find(x => x.n === hoyWeek) || WEEKS[0];
  const wd = WSDATA[w.n];
  const tc = TC[w.t];
  const pct = Math.round((w.n / 38) * 100);

  // Tabs disponibles según la semana
  const hasFm = !!wd;

  let tabDefs = [];
  if (hasFm) tabDefs.push({ key:'fm',        label:'📚 Para mamá', cls:'tab-fm' });
  if (wd && wd.martes)      tabDefs.push({ key:'martes',    label:'Martes',    cls:'' });
  if (wd && wd.miercoles)   tabDefs.push({ key:'miercoles', label:'Miércoles', cls:'' });
  if (wd && wd.jueves)      tabDefs.push({ key:'jueves',    label:'Jueves',    cls:'' });
  if (wd && wd.viernes)     tabDefs.push({ key:'viernes',   label:'Viernes',   cls:'' });
  tabDefs.push({ key:'reg', label:'✏️ Registro', cls:'tab-reg' });

  // Si el día activo no existe para esta semana, volver a martes o fm
  if (!tabDefs.find(t => t.key === hoyDay)) {
    hoyDay = tabDefs[0]?.key || 'martes';
  }

  // Versículo: extraer del contenido si hay, o usar el de la semana
  const verseMap = {
    1: '"Antes que te formase en el vientre te conocí." — Jeremías 1:5',
    2: '"En el principio creó Dios los cielos y la tierra." — Génesis 1:1',
    3: '"Hagamos al hombre a nuestra imagen." — Génesis 1:26',
    4: '"Pondré enemistad entre ti y la mujer." — Génesis 3:15',
  };
  const verse = verseMap[w.n] || w.focus || '';

  // Ficha link
  const fichaNum = String(w.n).padStart(2,'0');
  const fichaLink = w.n <= 4
    ? `<a href="fichas/semana-${fichaNum}.html" target="_blank" class="ficha-link">📋 Ficha imprimible S${w.n}</a>`
    : '';

  let html = `
  <div class="hoy-header">
    <div class="hoy-week-row">
      <span class="week-badge" style="background:${tc}">Semana ${w.n} · T${w.t}</span>
      <span style="font-size:.78rem;color:var(--muted)">${w.d}</span>
      <div class="week-nav">
        <button class="week-nav-btn" onclick="changeWeek(-1)" title="Semana anterior">◀</button>
        <span class="week-nav-lbl">${w.n}/38</span>
        <button class="week-nav-btn" onclick="changeWeek(1)" title="Semana siguiente">▶</button>
      </div>
    </div>
    <div class="hoy-theme">${w.tema}</div>
    <div class="hoy-dates">${w.u !== '—' ? 'Unidad ' + w.u + ' · ' : ''}${w.type !== 'activa' ? typeLbl(w.type) + ' · ' : ''}Avance del año: ${pct}%</div>
    ${verse ? `<div class="hoy-verse">${verse}</div>` : ''}
  </div>`;

  // Tabs
  html += `<div class="day-tabs">`;
  tabDefs.forEach(t => {
    html += `<button class="day-tab ${t.cls}${hoyDay === t.key ? ' active' : ''}"
      onclick="switchHoyDay('${t.key}',this)">${t.label}</button>`;
  });
  html += `</div>`;

  // Paneles
  tabDefs.forEach(t => {
    const isActive = hoyDay === t.key;
    html += `<div id="hdp-${t.key}" class="day-panel${isActive ? ' active' : ''}">`;

    if (t.key === 'reg') {
      if (fichaLink) html += fichaLink;
      html += buildReg(w.n);
    } else if (wd && wd[t.key]) {
      // Export bar for instructional days
      const dayLabel = { fm:'formación mamá', cat:'catecismo CMeW', martes:'martes', miercoles:'miércoles', jueves:'jueves', viernes:'viernes' }[t.key] || t.key;
      html += `<div class="export-bar">
        <span class="export-bar-text">🤖 Copia este día para Claude y pídele material para Elisabeth</span>
        <button class="btn btn-claude btn-sm" onclick="exportDay(${w.n},'${t.key}','${dayLabel}')">Copiar para Claude</button>
      </div>`;
      html += wd[t.key];
    } else {
      html += `<div class="strip s-gold" style="margin:.5rem 0">
        <strong>${typeLbl(w.type)}</strong> — ${w.focus || 'Contenido en desarrollo.'}
      </div>`;
    }

    html += `</div>`;
  });

  document.getElementById('hoy-content').innerHTML = html;
}

function typeLbl(t) {
  return { activa:'Instrucción', repaso:'Repaso', colchon:'Colchón', navidad:'Navidad', cierre:'Cierre', eval:'Evaluación' }[t] || t;
}

function changeWeek(delta) {
  const idx = WEEKS.findIndex(w => w.n === hoyWeek);
  const next = WEEKS[idx + delta];
  if (!next) return;
  hoyWeek = next.n;
  S.set('hoy_week', hoyWeek);
  // Reset al primer tab disponible
  const wd = WSDATA[next.n];
  hoyDay = wd ? 'fm' : 'reg';
  S.set('hoy_day', hoyDay);
  buildHoy();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchHoyDay(key, btn) {
  hoyDay = key;
  S.set('hoy_day', hoyDay);
  document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('[id^="hdp-"]').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('hdp-' + key);
  if (panel) panel.classList.add('active');
}

// ── Exportar día para Claude ──
function exportDay(weekN, dayKey, dayLabel) {
  const w = WEEKS.find(x => x.n === weekN);
  const wd = WSDATA[weekN];
  if (!wd || !wd[dayKey]) { showToast('Sin contenido para exportar'); return; }

  const rawHtml = wd[dayKey];
  const plainText = htmlToPlain(rawHtml);

  const header = [
    `CRECIENDO EN EL PACTO — Semana ${weekN}: ${dayLabel.toUpperCase()}`,
    `${w.d} · ${w.tema}`,
    `Unidad: ${w.u} · Trimestre ${w.t}`,
    `═══════════════════════════════════════`,
    ``
  ].join('\n');

  const footer = [
    ``,
    `═══════════════════════════════════════`,
    `Contexto: Elisabeth, 6 años, educación en casa, Bogotá.`,
    `Marco: teología reformada pactual. Método Charlotte Mason + Singapur + narración.`,
    `Alumna: por encima del nivel diagnóstico en lectura y matemáticas.`,
    ``,
    `Posibles solicitudes a Claude:`,
    `• "Genera una ficha de trabajo para Elisabeth con estas actividades"`,
    `• "Crea preguntas de comprensión adicionales"`,
    `• "Adapta el problema de matemáticas con objetos del hogar"`,
    `• "Escribe un cuento breve que ilustre el tema bíblico de hoy"`
  ].join('\n');

  openModal(`S${weekN} · ${dayLabel} — Copiar para Claude`, header + plainText + footer);
}

// ── Exportar semana completa para Claude ──
function exportWeek(weekN) {
  const w = WEEKS.find(x => x.n === weekN);
  const wd = WSDATA[weekN];

  let txt = `CRECIENDO EN EL PACTO — SEMANA ${weekN} COMPLETA\n`;
  txt += `${w.d} · ${w.tema}\n`;
  txt += `${'═'.repeat(45)}\n\n`;

  const days = ['fm','martes','miercoles','jueves','viernes'];
  const labels = { fm:'FORMACIÓN MAMÁ', martes:'MARTES', miercoles:'MIÉRCOLES', jueves:'JUEVES', viernes:'VIERNES' };
  days.forEach(d => {
    if (wd && wd[d]) {
      txt += `\n── ${labels[d]} ──\n`;
      txt += htmlToPlain(wd[d]) + '\n';
    }
  });

  txt += `\n${'═'.repeat(45)}\n`;
  txt += `Alumna: Elisabeth, 6 años · Bogotá · educación reformada pactual.\n`;
  txt += `Nivel: por encima del diagnóstico en lectura y matemáticas.`;

  openModal(`Semana ${weekN} completa — Copiar para Claude`, txt);
}

// ── Convertir HTML → texto plano legible ──
function htmlToPlain(html) {
  const el = document.createElement('div');
  el.innerHTML = html;

  // Marcar bloques estructurales con saltos
  el.querySelectorAll('.act-ttl, .fm-title, .aper-lbl, .sl, .say-lbl, .desafio-lbl, .fo-lbl').forEach(n => {
    n.prepend(document.createTextNode('\n▸ '));
    n.append(document.createTextNode('\n'));
  });
  el.querySelectorAll('.act-block, .fm-block, .aper, .say, .desafio, .s-navy, .strip').forEach(n => {
    n.prepend(document.createTextNode('\n'));
    n.append(document.createTextNode('\n'));
  });
  el.querySelectorAll('.cq').forEach(n => {
    n.prepend(document.createTextNode('P: '));
    n.append(document.createTextNode('\n'));
  });
  el.querySelectorAll('.ca').forEach(n => {
    n.prepend(document.createTextNode('R: '));
    n.append(document.createTextNode('\n'));
  });
  el.querySelectorAll('p, div.say-txt, div.desafio p').forEach(n => {
    n.append(document.createTextNode('\n'));
  });
  el.querySelectorAll('h4').forEach(n => {
    n.prepend(document.createTextNode('\n### '));
    n.append(document.createTextNode('\n'));
  });
  el.querySelectorAll('.edc-tag').forEach(n => {
    n.prepend(document.createTextNode('['));
    n.append(document.createTextNode('] '));
  });
  el.querySelectorAll('.chip').forEach(n => {
    n.prepend(document.createTextNode('· '));
    n.append(document.createTextNode(' '));
  });
  el.querySelectorAll('.edc-row, .chips, .reg-section').forEach(n => n.remove());

  // Limpiar: colapsar espacios/saltos excesivos
  let text = el.innerText || el.textContent || '';
  text = text.replace(/\n{3,}/g, '\n\n').trim();
  return text;
}

// ═══════════════════════════════════════════
// INICIO — Dashboard
// ═══════════════════════════════════════════
function buildInicio() {
  const areas = Object.keys(COMPS);
  document.getElementById('prog-overview').innerHTML = areas.map(a => {
    const c = COMPS[a].list;
    let sum = 0, cnt = 0;
    c.forEach(x => {
      const v = progress[a + '|' + x];
      if (v === 'E') { sum += 1; cnt++; }
      else if (v === 'D') { sum += 2; cnt++; }
      else if (v === 'C') { sum += 3; cnt++; }
    });
    const pct = cnt > 0 ? Math.round(((sum / cnt) - 1) / 2 * 100) : 0;
    return `<div class="prog-wrap">
      <div class="prog-lbl"><span>${a}</span><span style="color:var(--muted)">${pct}%</span></div>
      <div class="prog-bar"><div class="prog-fill" style="width:${pct}%;background:${TC[1]}"></div></div>
    </div>`;
  }).join('');

  document.getElementById('proximas').innerHTML = WEEKS.slice(0, 5).map(w => `
    <div class="prox-item">
      <div class="prox-badge" style="background:${TC[w.t]}">S${w.n}</div>
      <div>
        <div class="prox-title">${w.tema}</div>
        <div class="prox-date">${w.d}</div>
      </div>
    </div>`).join('');

  // Update stat week
  const sw = document.getElementById('stat-semana');
  const sp = document.getElementById('stat-pct');
  const ss = document.getElementById('stat-pct-s');
  if (sw) sw.textContent = hoyWeek;
  if (sp) sp.textContent = Math.round((hoyWeek / 38) * 100) + '%';
  if (ss) ss.textContent = `Semana ${hoyWeek} de 38`;
}

// ═══════════════════════════════════════════
// PLANIFICACIÓN
// ═══════════════════════════════════════════
function buildPlan() {
  const TI = {
    1: { dates:'19 mayo – 7 agosto 2026',    arc:'Mi historia · Creación · Patriarcas (U0–U2)' },
    2: { dates:'10 agosto – 30 octubre 2026', arc:'Éxodo · Ley · Tierra · Samuel (U3)' },
    3: { dates:'2 nov 2026 – 22 ene 2027',   arc:'Reyes · Profetas · Adviento · Navidad (U4)' },
    4: { dates:'25 ene – 5 feb 2027',         arc:'Cristo · Colombia · Evaluación (U5–U6)' }
  };
  let html = '';
  [1,2,3,4].forEach(t => {
    const tw = WEEKS.filter(w => w.t === t);
    const ti = TI[t];
    html += `<div class="trim-block">
      <div class="trim-hd">
        <div class="trim-badge" style="background:${TC[t]}">T${t}</div>
        <div class="trim-info">
          <h2 style="color:${TC[t]}">Trimestre ${t} — ${tw.length} semanas</h2>
          <p>${ti.dates}</p>
          <em>${ti.arc}</em>
        </div>
      </div>`;
    tw.forEach(w => {
      const log = logs[w.n] || {};
      const filled = log.e && log.e.length > 5;
      const hasGuide = !!WSDATA[w.n];
      html += `<div class="sem-item ${w.type}${filled ? ' has-log' : ''}" id="sem-${w.n}">
        <div class="sem-hd" onclick="togSem(${w.n})">
          <div class="sem-n" style="background:${TC[w.t]}">${w.n}</div>
          <div class="sem-info">
            <div class="sem-title">${w.tema}</div>
            <div class="sem-meta">${w.d} &nbsp;·&nbsp; ${w.u !== '—' ? 'U: '+w.u : typeLbl(w.type)}</div>
          </div>
          <div class="sem-badges">
            ${filled   ? '<span class="pill pill-done">Registrada</span>' : ''}
            ${hasGuide ? '<span class="pill pill-guide">Guía</span>' : ''}
            ${w.n <= 4 ? '<span class="pill pill-new">Ficha</span>' : ''}
          </div>
          <span class="sem-arrow">▾</span>
        </div>
        <div class="sem-body">${buildSemBody(w)}</div>
      </div>`;
    });
    html += '</div>';
  });
  document.getElementById('plan-content').innerHTML = html;
}

function buildSemBody(w) {
  const wd = WSDATA[w.n];
  const fichaNum = String(w.n).padStart(2,'0');
  const fichaLink = w.n <= 4
    ? `<a href="fichas/semana-${fichaNum}.html" target="_blank" class="ficha-link">📋 Ficha de Elisabeth S${w.n}</a>`
    : '';

  if (wd) {
    const tabs = ['Para mamá','Martes','Miércoles','Jueves','Viernes','✏️ Registro'];
    const keys = ['fm','martes','miercoles','jueves','viernes','reg'];

    let tabHtml = '<div class="day-tabs">';
    tabs.forEach((t, i) => {
      const cls = keys[i]==='fm'?'tab-fm':keys[i]==='reg'?'tab-reg':'';
      tabHtml += `<button class="day-tab ${cls}${i===0?' active':''}" onclick="dayTab(${w.n},'${keys[i]}',this)">${t}</button>`;
    });
    tabHtml += '</div>';

    let panHtml = '';
    keys.forEach((k, i) => {
      panHtml += `<div id="dp-${w.n}-${k}" class="day-panel${i===0?' active':''}">`;
      if (k === 'reg') {
        if (fichaLink) panHtml += fichaLink;
        panHtml += buildReg(w.n);
      } else if (k !== 'reg' && wd[k]) {
        const dayLabelMap = { fm:'formación mamá', martes:'martes', miercoles:'miércoles', jueves:'jueves', viernes:'viernes' };
        panHtml += `<div class="export-bar">
          <span class="export-bar-text">🤖 Copia para Claude y pídele material para Elisabeth</span>
          <button class="btn btn-claude btn-xs" onclick="exportDay(${w.n},'${k}','${dayLabelMap[k]}')">Copiar para Claude</button>
          ${k==='fm'?`<button class="btn btn-outline btn-xs" onclick="exportWeek(${w.n})">Semana completa</button>`:''}
        </div>`;
        panHtml += wd[k];
      } else {
        panHtml += `<div class="strip s-gold" style="margin:.5rem 0"><strong>${typeLbl(w.type)}</strong> — ${w.focus}</div>`;
      }
      panHtml += '</div>';
    });
    return tabHtml + panHtml;
  }

  return `<div class="day-tabs">
    <button class="day-tab active" onclick="dayTab(${w.n},'plan',this)">Plan</button>
    <button class="day-tab tab-reg" onclick="dayTab(${w.n},'reg',this)">✏️ Registro</button>
  </div>
  <div id="dp-${w.n}-plan" class="day-panel active">
    <div class="strip s-sage" style="margin:.5rem 0"><strong>${w.u!=='—'?'Unidad '+w.u:'—'}</strong> · ${w.focus}</div>
    <p style="font-size:.84rem;color:var(--muted);font-style:italic;margin-top:.5rem">Guía detallada disponible cuando se genere.</p>
  </div>
  <div id="dp-${w.n}-reg" class="day-panel">${buildReg(w.n, fichaLink)}</div>`;
}

function togSem(n) { document.getElementById('sem-'+n).classList.toggle('open'); }

function dayTab(s, d, btn) {
  document.querySelectorAll(`[id^="dp-${s}-"]`).forEach(p => p.classList.remove('active'));
  btn.parentElement.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const el = document.getElementById(`dp-${s}-${d}`);
  if (el) el.classList.add('active');
}

// ── Registro semanal ──
function buildReg(n) {
  const log = logs[n] || {};
  return `<div class="reg-section">
    <div class="reg-title">✏️ Registro de la semana ${n}</div>
    <div class="reg-grid">
      <div class="reg-field"><label>Lectoescritura</label><textarea id="rl${n}a" placeholder="¿Leyó con comprensión? ¿Escritura propia fluida?">${log.a||''}</textarea></div>
      <div class="reg-field"><label>Matemáticas</label><textarea id="rl${n}b" placeholder="¿Ordinales consolidados? ¿Suma con comprensión?">${log.b||''}</textarea></div>
      <div class="reg-field"><label>Historia / Catecismo</label><textarea id="rl${n}c" placeholder="¿Narró con secuencia? ¿Catecismo con comprensión?">${log.c||''}</textarea></div>
      <div class="reg-field"><label>Arte / Ciencias</label><textarea id="rl${n}d" placeholder="¿Diario de naturaleza? ¿Observación directa?">${log.d||''}</textarea></div>
      <div class="reg-field full"><label>Observación general</label><textarea id="rl${n}e" rows="3" style="min-height:75px" placeholder="¿Qué funcionó? ¿Qué ajustar? ¿Ritmo sostenible?">${log.e||''}</textarea></div>
      <div class="reg-field"><label>Niveles E/D/C</label><textarea id="rl${n}f" placeholder="Lectura: __ · Escritura: __ · Mate: __ · Historia: __">${log.f||''}</textarea></div>
      <div class="reg-field"><label>Pendientes S. siguiente</label><textarea id="rl${n}g" placeholder="¿Qué no se terminó? ¿Cambio de ruta necesario?">${log.g||''}</textarea></div>
    </div>
    <div class="reg-foot">
      <span class="saved-note" id="sn${n}">${log.saved ? 'Guardado: '+log.saved : 'Sin guardar'}</span>
      <div style="display:flex;gap:.5rem">
        <button class="btn btn-outline btn-sm" onclick="exportRev(${n})">📤 Exportar</button>
        <button class="btn btn-sage btn-sm" onclick="saveLog(${n})">💾 Guardar</button>
      </div>
    </div>
  </div>`;
}

function saveLog(n) {
  const g = id => { const el = document.getElementById(id); return el ? el.value : ''; };
  logs[n] = {
    a:g(`rl${n}a`), b:g(`rl${n}b`), c:g(`rl${n}c`), d:g(`rl${n}d`),
    e:g(`rl${n}e`), f:g(`rl${n}f`), g:g(`rl${n}g`),
    saved: new Date().toLocaleDateString('es-CO')
  };
  S.set('logs', logs);
  const note = document.getElementById('sn'+n);
  if (note) note.textContent = 'Guardado: ' + logs[n].saved;
  const sem = document.getElementById('sem-'+n);
  if (sem && logs[n].e) sem.classList.add('has-log');
  showToast('Semana ' + n + ' guardada ✓');
}

// ═══════════════════════════════════════════
// PROGRESO E/D/C
// ═══════════════════════════════════════════
function buildProg() {
  document.getElementById('prog-areas').innerHTML = Object.keys(COMPS).map(a => {
    const { ico, list } = COMPS[a];
    return `<div class="pa">
      <div class="pa-hd"><span>${ico}</span><h3>${a}</h3></div>
      <div class="pa-bd">${list.map(c => {
        const key = a+'|'+c;
        const val = progress[key] || '';
        return `<div class="comp">
          <div class="comp-name">${c}</div>
          <div class="edc-btns">${['E','D','C'].map(l =>
            `<div class="edc-btn ${l}${val===l?' on':''}" onclick="setProg('${key}','${l}',this)">${l}</div>`
          ).join('')}</div>
        </div>`;
      }).join('')}</div>
    </div>`;
  }).join('');
}

function setProg(key, val, el) {
  el.parentElement.querySelectorAll('.edc-btn').forEach(b => b.classList.remove('on'));
  if (progress[key] === val) { delete progress[key]; }
  else { el.classList.add('on'); progress[key] = val; }
  S.set('prog', progress);
  showToast('Guardado ✓');
}

// ═══════════════════════════════════════════
// PORTAFOLIO
// ═══════════════════════════════════════════
function buildPort() {
  const sel = document.getElementById('port-sem-sel');
  if (sel && !sel.options.length) {
    sel.innerHTML = WEEKS.map(w =>
      `<option value="${w.n}">S${w.n} · ${w.d.substring(0,14)} · ${w.tema.substring(0,26)}…</option>`
    ).join('');
  }
  const list = document.getElementById('port-list');
  if (!portfolio.length) {
    list.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--muted);font-style:italic">Sin entradas. Añade la primera evidencia.</div>`;
    return;
  }
  list.innerHTML = portfolio.slice().reverse().map((e, ri) => {
    const i = portfolio.length - 1 - ri;
    const w = WEEKS.find(x => x.n === e.week);
    return `<div class="port-entry">
      <div class="pe-hd">
        <div>
          <div class="pe-week">Semana ${e.week} — ${w ? w.tema : ''}</div>
          <div class="pe-date">${e.date}</div>
        </div>
        <button onclick="delPort(${i})" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:1.1rem">✕</button>
      </div>
      <div class="pe-fields">
        <div class="pe-field"><label>Evidencia</label><textarea onblur="updPort(${i},'e',this.value)">${e.e||''}</textarea></div>
        <div class="pe-field"><label>Observación</label><textarea onblur="updPort(${i},'obs',this.value)">${e.obs||''}</textarea></div>
        <div class="pe-field full"><label>Audio / nota</label><textarea rows="1" style="min-height:36px" onblur="updPort(${i},'audio',this.value)" placeholder="nombre.mp3 o nota">${e.audio||''}</textarea></div>
      </div>
    </div>`;
  }).join('');
}

function addPortEntry() {
  const n = parseInt(document.getElementById('port-sem-sel').value);
  portfolio.push({ week:n, date:new Date().toLocaleDateString('es-CO'), e:'', obs:'', audio:'' });
  S.set('port', portfolio);
  buildPort();
  showToast('Entrada añadida ✓');
}
function updPort(i, f, v) { if (portfolio[i]) { portfolio[i][f] = v; S.set('port', portfolio); } }
function delPort(i) { if (confirm('¿Eliminar esta entrada?')) { portfolio.splice(i,1); S.set('port',portfolio); buildPort(); } }

// ═══════════════════════════════════════════
// INFORMES
// ═══════════════════════════════════════════
function showInf(t, btn) {
  document.querySelectorAll('.t-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  buildInf(t);
}

function buildInf(t) {
  const TD = { 1:'19 mayo – 7 agosto 2026', 2:'10 agosto – 30 octubre 2026', 3:'2 nov 2026 – 22 ene 2027', 4:'25 ene – 5 feb 2027' };
  const areas = Object.keys(COMPS);
  const tw = WEEKS.filter(w => w.t === t);
  const portT = portfolio.filter(p => { const w = WEEKS.find(x => x.n === p.week); return w && w.t === t; });
  const weekLogs = tw.filter(w => logs[w.n] && logs[w.n].e);
  const rqKey = 'rq_t' + t;
  const rqD = rNotes[rqKey] || {};
  const QS = [
    { k:'avance',     q:'¿En qué áreas avanzó de E→D o D→C?' },
    { k:'estancado',  q:'¿Qué área está estancada o retrocediendo?' },
    { k:'asombro',    q:'¿Qué generó más deleite en Elisabeth?' },
    { k:'sostenible', q:'¿El ritmo fue sostenible para la madre-educadora?' },
    { k:'ansiedad',   q:'¿Hubo señales de ansiedad formativa o barniz cristiano?' },
    { k:'iglesia',    q:'¿La educación extiende la iglesia o la sustituye?' }
  ];

  document.getElementById('inf-body').innerHTML = `
    <div style="margin-bottom:1.5rem">
      <div style="font-family:var(--serif);font-size:1.4rem;color:var(--ink)">Informe Trimestre ${t}</div>
      <div style="font-size:.81rem;color:var(--muted)">${TD[t]} · Elisabeth Espinoza · 2026–2027</div>
    </div>
    <div class="inf-sec"><h3>Progreso por competencias</h3>
      <table class="inf-tbl">
        <tr><th>Área</th><th>Competencia</th><th>Nivel</th></tr>
        ${areas.map(a => COMPS[a].list.map((c, i) => {
          const v = progress[a+'|'+c] || '—';
          return `<tr>${i===0?`<td rowspan="${COMPS[a].list.length}" style="font-weight:700">${a}</td>`:''}
            <td>${c}</td>
            <td>${v!=='—'?`<span class="bdg-${v}">${v}</span>`:`<span style="color:var(--muted)">—</span>`}</td></tr>`;
        }).join('')).join('')}
      </table>
    </div>
    ${weekLogs.length?`<div class="inf-sec"><h3>Notas semanales</h3>
      <table class="inf-tbl"><tr><th>Sem.</th><th>Tema</th><th>Observación</th></tr>
        ${weekLogs.map(w=>`<tr><td>S${w.n}</td><td>${w.tema}</td><td>${logs[w.n].e||''}</td></tr>`).join('')}
      </table></div>`:''}
    ${portT.length?`<div class="inf-sec"><h3>Portafolio del trimestre (${portT.length} entradas)</h3>
      <table class="inf-tbl"><tr><th>Sem.</th><th>Evidencia</th><th>Observación</th></tr>
        ${portT.map(p=>`<tr><td>S${p.week}</td><td>${p.e||'—'}</td><td>${p.obs||'—'}</td></tr>`).join('')}
      </table></div>`:''}
    <div class="inf-sec"><h3>Revisión trimestral</h3>
      <div class="rev-q">${QS.map(q=>`
        <div class="rq">
          <label>${q.q}</label>
          <textarea rows="3" onblur="saveRN('${rqKey}','${q.k}',this.value)">${rqD[q.k]||''}</textarea>
        </div>`).join('')}
      </div>
    </div>
    <div class="exp-box">
      <h4>📤 Exportar informe T${t} para revisión pedagógica</h4>
      <p>Genera texto completo para obtener retroalimentación pedagógica reformada.</p>
      <button class="btn btn-gold" onclick="exportInfT(${t})">Generar texto de revisión</button>
    </div>
    <div style="margin-top:1.5rem;padding-top:.8rem;border-top:1px solid var(--border);font-size:.72rem;color:var(--muted);font-style:italic">
      Creciendo en el Pacto · Familia Espinoza · Bogotá · 2026–2027 · "Los medios son responsabilidad del padre. Los frutos son soberanía de Dios."
    </div>`;
}

function saveRN(k, f, v) {
  if (!rNotes[k]) rNotes[k] = {};
  rNotes[k][f] = v;
  S.set('rn', rNotes);
}

function exportRev(n) {
  const w = WEEKS.find(x => x.n === n);
  const log = logs[n] || {};
  const txt = `REGISTRO SEMANAL — SEMANA ${n}
${w?.d} · ${w?.tema}
${'='.repeat(50)}
LECTOESCRITURA: ${log.a||'(sin registrar)'}
MATEMÁTICAS: ${log.b||'(sin registrar)'}
HISTORIA / CATECISMO: ${log.c||'(sin registrar)'}
ARTE / CIENCIAS: ${log.d||'(sin registrar)'}
OBSERVACIÓN GENERAL: ${log.e||'(sin registrar)'}
NIVELES E/D/C: ${log.f||'(sin registrar)'}
PENDIENTES: ${log.g||'(sin registrar)'}
Guardado: ${log.saved||'—'}
${'='.repeat(50)}
Marco: educación cristiana reformada y pactual.`;
  openModal('Semana ' + n + ' — Exportar registro', txt);
}

function exportInfT(t) {
  const TD = { 1:'19 mayo – 7 agosto 2026', 2:'10 agosto – 30 octubre 2026', 3:'2 nov 2026 – 22 ene 2027', 4:'25 ene – 5 feb 2027' };
  const rqKey = 'rq_t' + t;
  const rqD = rNotes[rqKey] || {};
  const areas = Object.keys(COMPS);
  let txt = `INFORME TRIMESTRAL — T${t}\n${TD[t]}\n\nPROGRESO:\n`;
  areas.forEach(a => {
    txt += `\n${a}:\n`;
    COMPS[a].list.forEach(c => { txt += `  ${c}: ${progress[a+'|'+c]||'—'}\n`; });
  });
  const tw = WEEKS.filter(w => w.t===t).filter(w => logs[w.n] && logs[w.n].e);
  if (tw.length) { txt += '\nNOTAS SEMANALES:\n'; tw.forEach(w => { txt += `\nS${w.n} — ${w.tema}:\n${logs[w.n].e}\n`; }); }
  const Qs = [['avance','¿Avanzó?'],['estancado','¿Estancado?'],['asombro','¿Deleite?'],['sostenible','¿Sostenible?'],['ansiedad','¿Ansiedad?'],['iglesia','¿Iglesia?']];
  txt += '\nREVISIÓN:\n';
  Qs.forEach(([k, q]) => { if (rqD[k]) txt += `\n${q}\n${rqD[k]}\n`; });
  txt += '\n======\nMarco: educación cristiana reformada y pactual — Creciendo en el Pacto.';
  openModal(`Informe T${t} — Texto de revisión`, txt);
}

// ═══════════════════════════════════════════
// MODAL / UTILS
// ═══════════════════════════════════════════
function openModal(title, text) {
  document.getElementById('modal-body').innerHTML = `
    <h3>${title}</h3>
    <p style="font-size:.82rem;color:var(--muted);margin-bottom:.85rem">Copia este texto y pégalo en Claude.ai</p>
    <pre class="exp-text">${escHtml(text)}</pre>
    <div style="display:flex;gap:.6rem;margin-top:.85rem">
      <button class="btn btn-claude" onclick="copyText(${JSON.stringify(text)})">📋 Copiar todo</button>
      <button class="btn btn-outline" onclick="closeModal()">Cerrar</button>
    </div>`;
  document.getElementById('modal-ov').classList.add('open');
}
function escHtml(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function copyText(t) {
  navigator.clipboard.writeText(t)
    .then(() => showToast('¡Copiado! Pégalo en Claude.ai ✓'))
    .catch(() => {
      const ta = document.createElement('textarea');
      ta.value = t; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
      showToast('¡Copiado! Pégalo en Claude.ai ✓');
    });
}
function closeModal() { document.getElementById('modal-ov').classList.remove('open'); }

// Copia el prompt del bloque .prompt-claude más cercano sin abrir modal
function copyPromptInline(btn) {
  const card = btn.closest('.prompt-claude');
  if (!card) return;
  const body = card.querySelector('.prompt-claude-body');
  if (!body) return;
  const text = body.innerText || body.textContent || '';
  navigator.clipboard.writeText(text.trim())
    .then(() => {
      const orig = btn.textContent;
      btn.textContent = '✓ Copiado';
      setTimeout(() => { btn.textContent = orig; }, 1800);
      showToast('¡Prompt copiado! Pégalo en Claude.ai ✓');
    })
    .catch(() => {
      const ta = document.createElement('textarea');
      ta.value = text.trim(); document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
      showToast('¡Prompt copiado! Pégalo en Claude.ai ✓');
    });
}

function saveAll() {
  WEEKS.forEach(w => {
    const fs = ['a','b','c','d','e','f','g'];
    const prev = logs[w.n] || {};
    const anyNew = fs.some(f => {
      const el = document.getElementById(`rl${w.n}${f}`);
      return el && el.value.trim() && el.value !== (prev[f]||'');
    });
    if (anyNew) {
      const g = f => { const el = document.getElementById(`rl${w.n}${f}`); return el ? el.value : ''; };
      logs[w.n] = { a:g('a'),b:g('b'),c:g('c'),d:g('d'),e:g('e'),f:g('f'),g:g('g'), saved:new Date().toLocaleDateString('es-CO') };
      const nt = document.getElementById('sn'+w.n);
      if (nt) nt.textContent = 'Guardado: ' + logs[w.n].saved;
    }
  });
  S.set('logs', logs); S.set('prog', progress); S.set('port', portfolio); S.set('rn', rNotes);
  showToast('Todo guardado ✓');
}

function printView() { showToast('Preparando…'); setTimeout(() => window.print(), 350); }

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  buildHoy();
  document.addEventListener('keydown', e => { if (e.key==='Escape') closeModal(); });
  document.querySelector('.sb-overlay').addEventListener('click', closeSidebar);
});
