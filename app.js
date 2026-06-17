/* ============================================================
   CONFIG
   ============================================================ */
const CONFIG = {
  WEBHOOK_URL:   'https://christian-rojas.app.n8n.cloud/webhook/microlearning-generate',
  SUPABASE_URL:  'https://jzovrgpjgwlyxpwfhefg.supabase.co',
  SUPABASE_ANON: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6b3ZyZ3BqZ3dseXhwd2ZoZWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzMxMjYsImV4cCI6MjA5NzIwOTEyNn0.EK5AsxvzZ25u5luUCVwA3_LbcWcuZ-hlGM38HVR-BZc',
};

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const I18N = {
  en: {
    'hero.eyebrow':   'Case Study 01',
    'hero.titleEm':   'Content Factory',
    'hero.desc':      'An autonomous pedagogical agent that transforms raw topic data into structured video scripts — built on Gagné\'s 9 Events of Instruction, orchestrated with n8n and Google Gemini.',
    'hero.stat1':     'less production time',
    'hero.stat2':     'Gagné events covered',
    'hero.stat3':     'stylistic consistency',
    'hero.cta':       'Generate a script →',
    'arch.form':      'Instructional Form',
    'arch.validator': 'Gagné Validator',
    'arch.output':    'Script Output',
    'form.eyebrow':   'Step 1 of 1',
    'form.title':     'Define your learning context',
    'form.subtitle':  'These inputs are not a generic form — each dimension directly shapes the pedagogical structure of the generated script.',
    'form.topicLabel':        'Central topic',
    'form.topicHint':         'The core concept the learner must understand. Be specific — "phishing attacks" over "cybersecurity".',
    'form.topicPlaceholder':  'e.g. Emotional Intelligence in the workplace',
    'form.audienceLabel':     'Audience expertise level',
    'form.audienceHint':      'Determines cognitive load calibration and the complexity of examples used throughout the script.',
    'form.beginner':          'Beginner',
    'form.beginnerDesc':      'No prior knowledge assumed',
    'form.intermediate':      'Intermediate',
    'form.intermediateDesc':  'Familiar with the domain',
    'form.expert':            'Expert',
    'form.expertDesc':        'Deep practitioner knowledge',
    'form.objectiveLabel':    'Learning objective',
    'form.objectiveHint':     'Write it as a behavioral outcome using a Bloom\'s verb — this becomes the Gagné Event 2 anchor of the script.',
    'form.objectivePlaceholder': 'e.g. Identify the 3 most common phishing techniques',
    'form.toneLabel':         'Communication tone',
    'form.toneHint':          'Shapes sentence structure, vocabulary register, and the emotional arc of the narrative.',
    'form.professional':      'Professional',
    'form.professionalDesc':  'Formal, authoritative',
    'form.casual':            'Close / Casual',
    'form.casualDesc':        'Conversational, warm',
    'form.inspirational':     'Inspirational',
    'form.inspirationalDesc': 'Motivational, energetic',
    'form.technical':         'Technical',
    'form.technicalDesc':     'Precise, data-driven',
    'form.langLabel':         'Script language',
    'form.langHint':          'The entire output — including Gagné section headers and visual cues — will be generated in this language.',
    'form.langPlaceholder':   'e.g. Spanish, English, Portuguese',
    'form.cancel':            'Cancel',
    'form.submit':            'Generate script →',
    'form.submitting':        'Generating…',
    'form.validationError':   'Please fill in all fields before generating.',
    'form.errorMsg':          'Something went wrong. Please try again.',
    'progress.title':         'Orchestrating your script',
    'progress.subtitle':      'Watch the pipeline execute in real time.',
    'progress.step1':         'Webhook received',
    'progress.step1desc':     'Form data dispatched to n8n',
    'progress.step2':         'Session registered',
    'progress.step2desc':     'Record created in Supabase',
    'progress.step3':         'Pedagogical agent running',
    'progress.step3desc':     'AI Agent processing with Gemini',
    'progress.step4':         'Applying Gagné structure',
    'progress.step4desc':     '9 Events of Instruction mapped',
    'progress.step5':         'Script complete',
    'progress.step5desc':     'Output saved and ready',
    'progress.timer':         'seconds elapsed',
    'output.eyebrow':         'Generated script',
    'output.gagneBadge':      '9/9 Gagné Events',
    'output.newScript':       'Generate another →',
    'output.viewGallery':     'View gallery →',
    'gallery.eyebrow':        'Script gallery',
    'gallery.title':          'Previously generated scripts',
    'gallery.subtitle':       'Each script was produced by the same orchestration pipeline — demonstrating consistent output at scale.',
    'gallery.loading':        'Loading scripts from Supabase…',
    'gallery.empty':          'No scripts yet — generate the first one above.',
    'gallery.error':          'Could not load gallery. Check Supabase configuration.',
    'footer.credit':          'Built by Christian Rojas · Learning Architect',
    'gagne.01': 'Attention hook',
    'gagne.02': 'Learning objective',
    'gagne.03': 'Prior knowledge',
    'gagne.04': 'Content presentation',
    'gagne.05': 'Learning guidance',
    'gagne.06': 'Practice activity',
    'gagne.07': 'Feedback',
    'gagne.08': 'Assessment',
    'gagne.09': 'Retention & transfer',
  },
  es: {
    'hero.eyebrow':   'Caso de Estudio 01',
    'hero.titleEm':   'Fábrica de Contenido',
    'hero.desc':      'Un agente pedagógico autónomo que transforma datos temáticos en guiones de video estructurados — construido sobre los 9 Eventos de Instrucción de Gagné, orquestado con n8n y Google Gemini.',
    'hero.stat1':     'menos tiempo de producción',
    'hero.stat2':     'eventos de Gagné cubiertos',
    'hero.stat3':     'consistencia estilística',
    'hero.cta':       'Generar un guion →',
    'arch.form':      'Formulario Instruccional',
    'arch.validator': 'Validador Gagné',
    'arch.output':    'Guion Generado',
    'form.eyebrow':   'Paso 1 de 1',
    'form.title':     'Define tu contexto de aprendizaje',
    'form.subtitle':  'Estos campos no son un formulario genérico — cada dimensión moldea directamente la estructura pedagógica del guion generado.',
    'form.topicLabel':        'Tema central',
    'form.topicHint':         'El concepto clave que el aprendiz debe entender. Sé específico — "ataques de phishing" en lugar de "ciberseguridad".',
    'form.topicPlaceholder':  'Ej: Inteligencia Emocional en el trabajo',
    'form.audienceLabel':     'Nivel de expertise de la audiencia',
    'form.audienceHint':      'Determina la calibración de la carga cognitiva y la complejidad de los ejemplos usados en el guion.',
    'form.beginner':          'Principiante',
    'form.beginnerDesc':      'Sin conocimiento previo',
    'form.intermediate':      'Intermedio',
    'form.intermediateDesc':  'Familiarizado con el dominio',
    'form.expert':            'Experto',
    'form.expertDesc':        'Conocimiento profundo del área',
    'form.objectiveLabel':    'Objetivo de aprendizaje',
    'form.objectiveHint':     'Escríbelo como resultado conductual con un verbo de Bloom — se convierte en el ancla del Evento 2 de Gagné.',
    'form.objectivePlaceholder': 'Ej: Identificar las 3 amenazas de phishing más comunes',
    'form.toneLabel':         'Tono comunicacional',
    'form.toneHint':          'Moldea la estructura de las oraciones, el registro del vocabulario y el arco emocional de la narrativa.',
    'form.professional':      'Profesional',
    'form.professionalDesc':  'Formal, autoritativo',
    'form.casual':            'Cercano / Casual',
    'form.casualDesc':        'Conversacional, cálido',
    'form.inspirational':     'Inspiracional',
    'form.inspirationalDesc': 'Motivacional, enérgico',
    'form.technical':         'Técnico',
    'form.technicalDesc':     'Preciso, orientado a datos',
    'form.langLabel':         'Idioma del guion',
    'form.langHint':          'Todo el output — incluyendo los títulos de sección de Gagné y las sugerencias visuales — se generará en este idioma.',
    'form.langPlaceholder':   'Ej: Español, Inglés, Portugués',
    'form.cancel':            'Cancelar',
    'form.submit':            'Generar guion →',
    'form.submitting':        'Generando…',
    'form.validationError':   'Por favor completa todos los campos antes de generar.',
    'form.errorMsg':          'Algo salió mal. Por favor intenta de nuevo.',
    'progress.title':         'Orquestando tu guion',
    'progress.subtitle':      'Observa el pipeline ejecutándose en tiempo real.',
    'progress.step1':         'Webhook recibido',
    'progress.step1desc':     'Datos del formulario enviados a n8n',
    'progress.step2':         'Sesión registrada',
    'progress.step2desc':     'Registro creado en Supabase',
    'progress.step3':         'Agente pedagógico en ejecución',
    'progress.step3desc':     'AI Agent procesando con Gemini',
    'progress.step4':         'Aplicando estructura de Gagné',
    'progress.step4desc':     '9 Eventos de Instrucción mapeados',
    'progress.step5':         'Guion completo',
    'progress.step5desc':     'Output guardado y listo',
    'progress.timer':         'segundos transcurridos',
    'output.eyebrow':         'Guion generado',
    'output.gagneBadge':      '9/9 Eventos de Gagné',
    'output.newScript':       'Generar otro →',
    'output.viewGallery':     'Ver galería →',
    'gallery.eyebrow':        'Galería de guiones',
    'gallery.title':          'Guiones generados anteriormente',
    'gallery.subtitle':       'Cada guion fue producido por el mismo pipeline de orquestación — demostrando output consistente a escala.',
    'gallery.loading':        'Cargando guiones desde Supabase…',
    'gallery.empty':          'Aún no hay guiones — genera el primero arriba.',
    'gallery.error':          'No se pudo cargar la galería. Verifica la configuración de Supabase.',
    'footer.credit':          'Construido por Christian Rojas · Learning Architect',
    'gagne.01': 'Gancho de atención',
    'gagne.02': 'Objetivo de aprendizaje',
    'gagne.03': 'Conocimientos previos',
    'gagne.04': 'Presentación del contenido',
    'gagne.05': 'Guía de aprendizaje',
    'gagne.06': 'Actividad de práctica',
    'gagne.07': 'Retroalimentación',
    'gagne.08': 'Evaluación',
    'gagne.09': 'Retención y transferencia',
  },
};

/* ============================================================
   GAGNÉ EVENT KEYS
   ============================================================ */
const GAGNE_KEYS = [
  { key: 'gancho',               num: '01' },
  { key: 'objetivo',             num: '02' },
  { key: 'conocimientos_previos',num: '03' },
  { key: 'contenido',            num: '04' },
  { key: 'guia',                 num: '05' },
  { key: 'practica',             num: '06' },
  { key: 'feedback',             num: '07' },
  { key: 'evaluacion',           num: '08' },
  { key: 'cierre',               num: '09' },
];

/* ============================================================
   STATE
   ============================================================ */
let currentLang = localStorage.getItem('lang') || 'en';
let timerInterval = null;
let timerStart = null;

/* ============================================================
   DOM HELPERS
   ============================================================ */
const $  = (id) => document.getElementById(id);
const show = (id) => { const el = $(id); if (el) el.style.display = ''; };
const hide = (id) => { const el = $(id); if (el) el.style.display = 'none'; };
const t = (key) => I18N[currentLang][key] || I18N['en'][key] || key;

function scrollToSection(id) {
  const el = $(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================================
   I18N ENGINE
   ============================================================ */
function applyTranslations() {
  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });

  // Update html lang attribute
  document.documentElement.setAttribute('lang', currentLang);

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.getAttribute('data-lang');
    localStorage.setItem('lang', currentLang);
    applyTranslations();
  });
});

/* ============================================================
   THEME TOGGLE
   ============================================================ */
const html = document.documentElement;
html.setAttribute('data-theme', localStorage.getItem('theme') || 'light');

$('themeToggle').addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ============================================================
   NAV ACTIONS
   ============================================================ */
$('ctaBtn').addEventListener('click', () => {
  show('formSection');
  hide('outputSection');
  scrollToSection('formSection');
});

$('cancelBtn').addEventListener('click', () => {
  hide('formSection');
  scrollToSection('hero');
});

$('newScriptBtn').addEventListener('click', () => {
  hide('outputSection');
  show('formSection');
  $('scriptForm').reset();
  scrollToSection('formSection');
});

$('viewGalleryBtn').addEventListener('click', () => {
  scrollToSection('gallerySection');
});

/* ============================================================
   PIPELINE HELPERS
   ============================================================ */
const STEPS = ['step-webhook','step-supabase-create','step-agent','step-gagne','step-complete'];

function resetPipeline() {
  STEPS.forEach(id => $(id).classList.remove('active','done'));
}

function activateStep(index) {
  STEPS.forEach((id, i) => {
    const el = $(id);
    el.classList.remove('active','done');
    if (i < index)       el.classList.add('done');
    else if (i === index) el.classList.add('active');
  });
}

function startTimer() {
  timerStart = Date.now();
  timerInterval = setInterval(() => {
    $('timerNum').textContent = ((Date.now() - timerStart) / 1000).toFixed(1);
  }, 100);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  const elapsed = ((Date.now() - timerStart) / 1000).toFixed(1);
  $('timerNum').textContent = elapsed;
  return elapsed;
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

/* ============================================================
   FORM SUBMIT
   ============================================================ */
$('scriptForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;

  const data = {
    topic:               form.topic.value.trim(),
    audience_level:      form.audience_level.value,
    learning_objective:  form.learning_objective.value.trim(),
    communication_tone:  form.communication_tone.value,
    script_language:     form.script_language.value.trim(),
  };

  if (Object.values(data).some(v => !v)) {
    alert(t('form.validationError'));
    return;
  }

  const submitBtn = $('submitBtn');
  submitBtn.disabled = true;
  submitBtn.textContent = t('form.submitting');

  hide('formSection');
  show('progressSection');
  scrollToSection('progressSection');
  resetPipeline();
  startTimer();

  activateStep(0);
  await delay(600);
  activateStep(1);
  await delay(800);
  activateStep(2);

  try {
    const response = await fetch(CONFIG.WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const result = await response.json();
    const elapsed = stopTimer();

    activateStep(3);
    await delay(500);
    activateStep(4);
    await delay(600);

    let scriptData;
    try {
      scriptData = typeof result.script_content === 'string'
        ? JSON.parse(result.script_content)
        : result.script_content;
    } catch {
      throw new Error('Could not parse script content.');
    }

    renderOutput(scriptData, result, elapsed);
    hide('progressSection');
    show('outputSection');
    scrollToSection('outputSection');
    loadGallery();

  } catch (err) {
    stopTimer();
    console.error(err);
    hide('progressSection');
    show('formSection');
    alert(`${t('form.errorMsg')}\n${err.message}`);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = t('form.submit');
  }
});

/* ============================================================
   RENDER OUTPUT
   ============================================================ */
function renderOutput(scriptData, record, elapsed) {
  $('outputTitle').textContent = scriptData.preview_title || record.topic || '—';

  const seconds = record.generation_seconds
    ? parseFloat(record.generation_seconds).toFixed(1)
    : elapsed;
  $('outputTime').textContent = `${seconds}s`;

  const grid = $('gagneGrid');
  grid.innerHTML = '';

  GAGNE_KEYS.forEach(({ key, num }) => {
    const content = scriptData[key];
    if (!content) return;
    const div = document.createElement('div');
    div.className = 'gagne-event';
    div.innerHTML = `
      <div class="gagne-event-header">
        <span class="gagne-num">${num}</span>
        <span class="gagne-name">${t('gagne.' + num)}</span>
      </div>
      <div class="gagne-content">${escapeHtml(content)}</div>
    `;
    grid.appendChild(div);
  });
}

/* ============================================================
   GALLERY
   ============================================================ */
async function loadGallery() {
  const grid = $('galleryGrid');
  grid.innerHTML = `<div class="gallery-loading">${t('gallery.loading')}</div>`;

  try {
    const res = await fetch(
      `${CONFIG.SUPABASE_URL}/rest/v1/script_generations?status=eq.completed&order=created_at.desc&limit=12`,
      {
        headers: {
          'apikey': CONFIG.SUPABASE_ANON,
          'Authorization': `Bearer ${CONFIG.SUPABASE_ANON}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!res.ok) throw new Error(`${res.status}`);
    const records = await res.json();

    if (!records.length) {
      grid.innerHTML = `<div class="gallery-empty">${t('gallery.empty')}</div>`;
      return;
    }

    grid.innerHTML = '';
    records.forEach(record => {
      let sd = {};
      try { sd = JSON.parse(record.script_content || '{}'); } catch { /**/ }

      const title   = sd.preview_title   || record.topic || 'Untitled';
      const summary = sd.preview_summary || '';
      const hook    = sd.preview_hook    || '';
      const seconds = record.generation_seconds
        ? `${parseFloat(record.generation_seconds).toFixed(1)}s`
        : null;

      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.innerHTML = `
        <div class="gallery-card-title">${escapeHtml(title)}</div>
        ${summary ? `<div class="gallery-card-summary">${escapeHtml(summary)}</div>` : ''}
        ${hook    ? `<div class="gallery-card-hook">"${escapeHtml(hook)}"</div>` : ''}
        <div class="gallery-card-meta">
          ${record.audience_level     ? `<span class="gallery-tag">${escapeHtml(record.audience_level)}</span>` : ''}
          ${record.communication_tone ? `<span class="gallery-tag">${escapeHtml(record.communication_tone)}</span>` : ''}
          ${sd.gagne_coverage         ? `<span class="gallery-tag">${escapeHtml(sd.gagne_coverage)}</span>` : ''}
          ${seconds                   ? `<span class="gallery-tag gallery-tag--time">${seconds}</span>` : ''}
        </div>
      `;

      card.addEventListener('click', () => {
        renderOutput(sd, record, seconds || '—');
        show('outputSection');
        hide('formSection');
        hide('progressSection');
        scrollToSection('outputSection');
      });

      grid.appendChild(card);
    });

  } catch (err) {
    console.error(err);
    grid.innerHTML = `<div class="gallery-empty">${t('gallery.error')}</div>`;
  }
}

/* ============================================================
   UTILS
   ============================================================ */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ============================================================
   INIT
   ============================================================ */
applyTranslations();
loadGallery();
