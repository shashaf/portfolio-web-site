document.getElementById('toggle-theme').addEventListener('click', () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
});

const slider = document.getElementById('gallerySlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = slider.querySelectorAll('img');
let currentIndex = 0;
let autoSlideTimer = null;

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentIndex = index;
  slider.style.transform = `translateX(${-index * 100}%)`;
}

function startAutoSlide() {
  stopAutoSlide();
  autoSlideTimer = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 4000);
}

function stopAutoSlide() {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
  }
}

prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
  startAutoSlide();
});

nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
  startAutoSlide();
});

// Запуск автоперелистывания при загрузке
startAutoSlide();
