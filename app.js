/* ============================================================
   CONFIG — replace with your actual values
   ============================================================ */
const CONFIG = {
  WEBHOOK_URL: 'https://christian-rojas.app.n8n.cloud/webhook/microlearning-generate',
  SUPABASE_URL: 'https://jzovrgpjgwlyxpwfhefg.supabase.co',
  SUPABASE_ANON: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6b3ZyZ3BqZ3dseXhwd2ZoZWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzMxMjYsImV4cCI6MjA5NzIwOTEyNn0.EK5AsxvzZ25u5luUCVwA3_LbcWcuZ-hlGM38HVR-BZc',
};

/* ============================================================
   GAGNÉ EVENT LABELS
   ============================================================ */
const GAGNE_LABELS = {
  gancho:              { num: '01', name: 'Attention hook' },
  objetivo:            { num: '02', name: 'Learning objective' },
  conocimientos_previos: { num: '03', name: 'Prior knowledge' },
  contenido:           { num: '04', name: 'Content presentation' },
  guia:                { num: '05', name: 'Learning guidance' },
  practica:            { num: '06', name: 'Practice activity' },
  feedback:            { num: '07', name: 'Feedback' },
  evaluacion:          { num: '08', name: 'Assessment' },
  cierre:              { num: '09', name: 'Retention & transfer' },
};

/* ============================================================
   STATE
   ============================================================ */
let timerInterval = null;
let timerStart = null;

/* ============================================================
   DOM HELPERS
   ============================================================ */
const $ = (id) => document.getElementById(id);
const show = (id) => { const el = $(id); if (el) el.style.display = ''; };
const hide = (id) => { const el = $(id); if (el) el.style.display = 'none'; };

function scrollToSection(id) {
  const el = $(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================================
   THEME TOGGLE
   ============================================================ */
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

$('themeToggle').addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ============================================================
   NAV: CTA → show form
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
const STEPS = ['step-webhook', 'step-supabase-create', 'step-agent', 'step-gagne', 'step-complete'];

function resetPipeline() {
  STEPS.forEach(id => {
    const el = $(id);
    el.classList.remove('active', 'done');
  });
}

function activateStep(index) {
  STEPS.forEach((id, i) => {
    const el = $(id);
    if (i < index) {
      el.classList.remove('active');
      el.classList.add('done');
    } else if (i === index) {
      el.classList.remove('done');
      el.classList.add('active');
    } else {
      el.classList.remove('active', 'done');
    }
  });
}

function startTimer() {
  timerStart = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = ((Date.now() - timerStart) / 1000).toFixed(1);
    $('timerNum').textContent = elapsed;
  }, 100);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  const elapsed = ((Date.now() - timerStart) / 1000).toFixed(1);
  $('timerNum').textContent = elapsed;
  return elapsed;
}

/* ============================================================
   FORM SUBMIT
   ============================================================ */
$('scriptForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    topic: form.topic.value.trim(),
    audience_level: form.audience_level.value,
    learning_objective: form.learning_objective.value.trim(),
    communication_tone: form.communication_tone.value,
    script_language: form.script_language.value.trim(),
  };

  // Basic validation
  const missingField = Object.entries(data).find(([, v]) => !v);
  if (missingField) {
    alert('Please fill in all fields before generating.');
    return;
  }

  const submitBtn = $('submitBtn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Generating…';

  // Show progress
  hide('formSection');
  show('progressSection');
  scrollToSection('progressSection');
  resetPipeline();
  startTimer();

  // Simulate pipeline steps while waiting
  activateStep(0); // webhook received
  await delay(600);
  activateStep(1); // supabase create
  await delay(800);
  activateStep(2); // agent running

  try {
    const response = await fetch(CONFIG.WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const result = await response.json();
    const elapsed = stopTimer();

    activateStep(3); // gagne structure
    await delay(500);
    activateStep(4); // complete
    await delay(600);

    // Parse script_content
    let scriptData;
    try {
      scriptData = typeof result.script_content === 'string'
        ? JSON.parse(result.script_content)
        : result.script_content;
    } catch {
      throw new Error('Could not parse script content from response.');
    }

    // Render output
    renderOutput(scriptData, result, elapsed);

    hide('progressSection');
    show('outputSection');
    scrollToSection('outputSection');

    // Refresh gallery
    loadGallery();

  } catch (err) {
    stopTimer();
    console.error(err);
    hide('progressSection');
    show('formSection');
    alert(`Something went wrong: ${err.message}. Please try again.`);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Generate script →';
  }
});

/* ============================================================
   RENDER OUTPUT
   ============================================================ */
function renderOutput(scriptData, record, elapsed) {
  // Title
  const title = scriptData.preview_title || record.topic || 'Generated Script';
  $('outputTitle').textContent = title;

  // Time badge
  const seconds = record.generation_seconds
    ? parseFloat(record.generation_seconds).toFixed(1)
    : elapsed;
  $('outputTime').textContent = `${seconds}s to generate`;

  // Gagné events grid
  const grid = $('gagneGrid');
  grid.innerHTML = '';

  Object.entries(GAGNE_LABELS).forEach(([key, meta]) => {
    const content = scriptData[key];
    if (!content) return;

    const div = document.createElement('div');
    div.className = 'gagne-event';
    div.innerHTML = `
      <div class="gagne-event-header">
        <span class="gagne-num">${meta.num}</span>
        <span class="gagne-name">${meta.name}</span>
      </div>
      <div class="gagne-content">${escapeHtml(content)}</div>
    `;
    grid.appendChild(div);
  });
}

/* ============================================================
   LOAD GALLERY FROM SUPABASE
   ============================================================ */
async function loadGallery() {
  const grid = $('galleryGrid');
  grid.innerHTML = '<div class="gallery-loading">Loading scripts…</div>';

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

    if (!res.ok) throw new Error(`Supabase error ${res.status}`);
    const records = await res.json();

    if (!records.length) {
      grid.innerHTML = '<div class="gallery-empty">No scripts yet — generate the first one above.</div>';
      return;
    }

    grid.innerHTML = '';
    records.forEach(record => {
      let scriptData = {};
      try {
        scriptData = typeof record.script_content === 'string'
          ? JSON.parse(record.script_content)
          : (record.script_content || {});
      } catch { /* show card without script data */ }

      const card = document.createElement('div');
      card.className = 'gallery-card';

      const title = scriptData.preview_title || record.topic || 'Untitled script';
      const summary = scriptData.preview_summary || '';
      const hook = scriptData.preview_hook || '';
      const seconds = record.generation_seconds
        ? `${parseFloat(record.generation_seconds).toFixed(1)}s`
        : null;

      card.innerHTML = `
        <div class="gallery-card-title">${escapeHtml(title)}</div>
        ${summary ? `<div class="gallery-card-summary">${escapeHtml(summary)}</div>` : ''}
        ${hook ? `<div class="gallery-card-hook">"${escapeHtml(hook)}"</div>` : ''}
        <div class="gallery-card-meta">
          ${record.audience_level ? `<span class="gallery-tag">${escapeHtml(record.audience_level)}</span>` : ''}
          ${record.communication_tone ? `<span class="gallery-tag">${escapeHtml(record.communication_tone)}</span>` : ''}
          ${scriptData.gagne_coverage ? `<span class="gallery-tag">${escapeHtml(scriptData.gagne_coverage)}</span>` : ''}
          ${seconds ? `<span class="gallery-tag gallery-tag--time">${seconds}</span>` : ''}
        </div>
      `;

      // Click to expand — show full script in output section
      card.addEventListener('click', () => {
        renderOutput(scriptData, record, seconds || '—');
        show('outputSection');
        hide('formSection');
        hide('progressSection');
        scrollToSection('outputSection');
      });

      grid.appendChild(card);
    });

  } catch (err) {
    console.error(err);
    grid.innerHTML = '<div class="gallery-empty">Could not load gallery. Check Supabase configuration.</div>';
  }
}

/* ============================================================
   UTILS
   ============================================================ */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
loadGallery();
