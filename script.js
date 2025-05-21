document.querySelectorAll('nav button').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.target;
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('toggle-theme').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
});
