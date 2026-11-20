/* Projects page — category filter + single-project deep link.
   Progressive enhancement: the cards live in the HTML, this only toggles a class.
   `.in` is forced on every card that comes back into view, because a card hidden
   while script.js's IntersectionObserver ran would otherwise stay at opacity 0.

   portfolio.html#<card-id> shows only that card (a targeted link to one piece of
   research); any filter chip, or the "all projects" button, goes back to the grid. */
(function projects() {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;

  const empty = document.getElementById('projectsEmpty');
  const showAll = document.getElementById('showAllProjects');
  const chips = Array.from(document.querySelectorAll('.filters .chip'));
  const cards = Array.from(grid.querySelectorAll('.proj'));

  function setChip(active) {
    chips.forEach((c) => {
      const on = c === active;
      c.classList.toggle('is-active', on);
      c.setAttribute('aria-pressed', String(on));
    });
  }

  function show(predicate) {
    let visible = 0;
    cards.forEach((card) => {
      const on = predicate(card);
      card.classList.toggle('is-hidden', !on);
      if (on) { card.classList.add('in'); visible++; }
    });
    if (empty) empty.hidden = visible > 0;
  }

  function applyFilter(filter) {
    if (showAll) showAll.hidden = true;
    show((card) => filter === 'all' || (card.dataset.cat || '').split(/\s+/).includes(filter));
  }

  function clearHash() {
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  }

  // Returns true when the hash names a project card and only that card is shown.
  function applyHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    const target = id && cards.find((c) => c.id === id);
    if (!target) return false;
    setChip(null);
    show((card) => card === target);
    if (showAll) showAll.hidden = false;
    return true;
  }

  chips.forEach((chip) =>
    chip.addEventListener('click', () => {
      clearHash();
      setChip(chip);
      applyFilter(chip.dataset.filter);
    })
  );

  showAll?.addEventListener('click', () => {
    clearHash();
    setChip(chips.find((c) => c.dataset.filter === 'all'));
    applyFilter('all');
  });

  window.addEventListener('hashchange', () => {
    if (!applyHash()) {
      setChip(chips.find((c) => c.dataset.filter === 'all'));
      applyFilter('all');
    }
  });

  applyHash();
})();
