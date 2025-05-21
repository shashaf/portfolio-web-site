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

document.addEventListener("DOMContentLoaded", function () {
  const marquee = document.getElementById("marquee");
  const text = marquee.querySelector(".marquee-text");

  // Клонируем текст, чтобы создать непрерывную строку
  const clone = text.cloneNode(true);
  marquee.appendChild(clone);

  let speed = 3; // скорость пикселей в кадр
  let position = 0;

  function animate() {
    position -= speed;
    if (Math.abs(position) >= text.offsetWidth) {
      position = 0; // сбрасываем позицию — бесшовная склейка
    }
    marquee.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
