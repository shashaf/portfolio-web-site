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

document.addEventListener("scroll", function () {
  const details = document.querySelector('.Details');
  const header = document.querySelector('header');
  const headerBottom = header.getBoundingClientRect().bottom;

  if (headerBottom < 700) {
    details.classList.add('hidden');
  } else {
    details.classList.remove('hidden');
  }
});

const aboutButton = document.querySelector('.about-button');

aboutButton.addEventListener('click', () => {
  if (aboutButton.classList.contains('open')) {
    aboutButton.classList.remove('open');
    aboutButton.classList.add('close');
  } else {
    aboutButton.classList.remove('close');
    aboutButton.classList.add('open');
  }
});

document.querySelector('.portfolio-button').addEventListener('click', function () {
  this.classList.toggle('open');
  this.classList.toggle('close');
});

const contactsButton = document.querySelector('.contacts-button');

contactsButton.addEventListener('click', () => {
  if (contactsButton.classList.contains('open')) {
    contactsButton.classList.remove('open');
    contactsButton.classList.add('close');
  } else {
    contactsButton.classList.remove('close');
    contactsButton.classList.add('open');
  }
});

function copyEmail(event) {
  event.stopPropagation(); // <- предотвращает сворачивание

  const email = document.getElementById("emailText").textContent;
  navigator.clipboard.writeText(email).then(() => {
    const notice = document.getElementById("copyNotice");
    notice.style.opacity = 1;
    setTimeout(() => {
      notice.style.opacity = 0;
    }, 1500);
  }).catch(err => {
    console.error("Ошибка копирования: ", err);
  });
}
