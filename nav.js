// Mobile menu. Without JavaScript the nav stays visible (see the .js rules in styles.css).
(function () {
  var header = document.querySelector('.site-header');
  var button = header && header.querySelector('.nav-toggle');
  var nav = header && header.querySelector('nav');
  if (!button || !nav) return;

  function setOpen(open) {
    header.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });
  // Picking a link, including an in-page anchor, closes the menu.
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });
  // Tapping outside the header closes it.
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) setOpen(false);
  });
})();
