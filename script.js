['navLogo', 'heroLogo', 'footLogo'].forEach((id) => {
  const el = document.getElementById(id);
  if (el && window.NightSCRYLogo) el.innerHTML = window.NightSCRYLogo(id);
});

document.getElementById('yr').textContent = new Date().getFullYear();

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
