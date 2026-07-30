/* Projects page — category filter.
   Progressive enhancement: the cards live in the HTML, this only toggles a class.
   `.in` is forced on every card that comes back into view, because a card hidden
   while script.js's IntersectionObserver ran would otherwise stay at opacity 0. */
(function projectFilter() {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;

  const empty = document.getElementById('projectsEmpty');
  const chips = Array.from(document.querySelectorAll('.filters .chip'));
  const cards = Array.from(grid.querySelectorAll('.proj'));

  function apply(filter) {
    let visible = 0;
    cards.forEach((card) => {
      const cats = (card.dataset.cat || '').split(/\s+/);
      const show = filter === 'all' || cats.includes(filter);
      card.classList.toggle('is-hidden', !show);
      if (show) { card.classList.add('in'); visible++; }
    });
    if (empty) empty.hidden = visible > 0;
  }

  chips.forEach((chip) =>
    chip.addEventListener('click', () => {
      chips.forEach((c) => {
        const on = c === chip;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-pressed', String(on));
      });
      apply(chip.dataset.filter);
    })
  );
})();
