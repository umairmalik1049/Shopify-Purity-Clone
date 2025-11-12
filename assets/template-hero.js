const slides = document.querySelectorAll('.slide');
const bars = document.querySelectorAll('.bar');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 0;
const slideDuration = 5000; // 5 seconds
let interval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    bars[i].classList.toggle('active', i === index);
    bars[i].querySelector('span').style.width = '0%';
    bars[i].querySelector('span').style.animation = 'none';
  });

  void bars[index].offsetWidth; // trigger reflow
  bars[index].querySelector('span').style.animation = `fillBar ${slideDuration / 1000}s linear forwards`;
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

function startCarousel() {
  interval = setInterval(nextSlide, slideDuration);
}

function resetCarousel() {
  clearInterval(interval);
  startCarousel();
}

next.addEventListener('click', () => {
  nextSlide();
  resetCarousel();
});

prev.addEventListener('click', () => {
  prevSlide();
  resetCarousel();
});

showSlide(current);
startCarousel();
