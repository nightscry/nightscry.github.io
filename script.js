['navLogo', 'heroLogo', 'footLogo'].forEach((id) => {
  const el = document.getElementById(id);
  if (el && window.NightSCRYLogo) el.innerHTML = window.NightSCRYLogo(id);
});

const yearEl = document.getElementById('yr');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach((a) =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', scrollY > 24);
});

const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
  { threshold: 0.15 }
);
document.querySelectorAll('.section, .card, .op, .timeline li').forEach((el) => {
  el.classList.add('reveal');
  io.observe(el);
});

const statIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    let n = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const t = setInterval(() => {
      n += step;
      if (n >= target) { n = target; clearInterval(t); }
      el.textContent = n;
    }, 18);
    statIO.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll('.hero-stats b').forEach((b) => statIO.observe(b));

document.getElementById('engageForm')?.addEventListener('submit', (e) => {
  e.preventDefault();

  const TEAM_EMAIL = 'nightscry.team@outlook.com';

  const org   = document.getElementById('org').value.trim();
  const email = document.getElementById('email').value.trim();
  const scope = document.getElementById('scope').value;
  const brief = document.getElementById('brief').value.trim();

  const subject = encodeURIComponent(`[Engagement] ${scope} — ${org}`);
  const body = encodeURIComponent(
    `Organization: ${org}\n` +
    `Contact email: ${email}\n` +
    `Engagement type: ${scope}\n\n` +
    `Brief:\n${brief}\n`
  );

  window.location.href = `mailto:${TEAM_EMAIL}?subject=${subject}&body=${body}`;

  const note = document.getElementById('formNote');
  note.hidden = false;
  e.target.reset();
});

(function matrix() {
  const c = document.getElementById('matrix');
  if (!c) return;
  const ctx = c.getContext('2d');
  const chars = '01x0Aa{}<>/$#01ﾊﾐﾋ7F3'.split('');
  let cols, drops, fontSize;

  function resize() {
    c.width = innerWidth;
    c.height = innerHeight;
    fontSize = innerWidth < 640 ? 12 : 15;
    cols = Math.floor(c.width / fontSize);
    drops = Array(cols).fill(0).map(() => Math.random() * -50);
  }
  resize();
  addEventListener('resize', resize);

  const STEP_MS = 130;
  let last = 0;
  function draw(now) {
    requestAnimationFrame(draw);
    if (now - last < STEP_MS) return;
    last = now;

    ctx.fillStyle = 'rgba(4,3,9,0.10)';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.font = fontSize + 'px JetBrains Mono, monospace';
    for (let i = 0; i < cols; i++) {
      const ch = chars[(Math.random() * chars.length) | 0];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      ctx.fillStyle = Math.random() > 0.97 ? 'rgba(216,180,254,0.9)' : 'rgba(124,58,237,0.45)';
      ctx.fillText(ch, x, y);
      if (y > c.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) requestAnimationFrame(draw);
})();

/* ── easter egg: a mini cross of Jesus that reveals itself inside the pupil ──
   auto-flashes at random intervals; also on 5 quick clicks of the eye. */
(function crossEgg() {
  const hero = document.getElementById('heroLogo');
  if (!hero) return;
  const eye = hero.querySelector('.ns-eye');
  if (!eye) return;

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let hideT = null;

  function flash(ms) {
    eye.classList.remove('ns-reveal-cross');
    void eye.offsetWidth;            // restart the animation
    eye.classList.add('ns-reveal-cross');
    clearTimeout(hideT);
    hideT = setTimeout(() => eye.classList.remove('ns-reveal-cross'), ms);
  }

  // reveal once shortly after load
  setTimeout(() => flash(2800), 700);

  // auto: peek out every ~25–65s for a couple of seconds
  if (!reduce) {
    (function loop() {
      const wait = 25000 + Math.random() * 40000;
      setTimeout(() => { flash(2600); loop(); }, wait);
    })();
  }

  // bonus: 5 quick clicks on the eye
  eye.style.cursor = 'pointer';
  let clicks = 0, tapT = null;
  eye.addEventListener('click', (e) => {
    e.stopPropagation();
    clicks++;
    clearTimeout(tapT);
    tapT = setTimeout(() => (clicks = 0), 1500);
    if (clicks >= 5) { clicks = 0; flash(5000); }
  });
})();

/* ── easter egg: random mini crosses drift in as the user scrolls ── */
(function scrollCrossEgg() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false, lastY = scrollY, lastSpawn = 0;
  const CROSS = `<svg viewBox="0 0 60 100" fill="#f5e6c8" aria-hidden="true">
      <rect x="25" y="6"  width="10" height="88" rx="3"/>
      <rect x="6"  y="28" width="48" height="10" rx="3"/></svg>`;

  function spawn() {
    const el = document.createElement('div');
    el.className = 'ns-scroll-cross';
    el.innerHTML = CROSS;
    const size = 14 + Math.random() * 24;
    el.style.left = (5 + Math.random() * 90) + 'vw';
    el.style.top  = (12 + Math.random() * 76) + 'vh';
    el.style.width = size + 'px';
    el.style.setProperty('--drift', (Math.random() * 40 - 20) + 'px');
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('go'));
    setTimeout(() => el.classList.add('out'), 2000);
    setTimeout(() => el.remove(), 2700);
  }

  addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const now = performance.now();
      if (Math.abs(scrollY - lastY) > 130 && now - lastSpawn > 2500 && Math.random() > 0.8) {
        spawn(); lastSpawn = now;
      }
      lastY = scrollY;
      ticking = false;
    });
  }, { passive: true });
})();
