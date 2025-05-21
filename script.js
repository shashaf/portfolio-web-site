const buttons = document.querySelectorAll('.menu-button');
const sections = document.querySelectorAll('.collapsible');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;
    sections.forEach(section => {
      if (section.id === target) {
        section.classList.toggle('active');
      } else {
        section.classList.remove('active');
      }
    });
  });
});

document.getElementById('toggle-theme').addEventListener('click', () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
});
