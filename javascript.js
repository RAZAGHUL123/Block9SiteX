const scrollImages = document.querySelector('.scroll-images');
const images = document.querySelectorAll('.scroll-images img');
let width = 0;
images.forEach(image => {
  width += image.clientWidth;
});
scrollImages.style.width = `${width}px`;

let scrollPosition = 0;
setInterval(() => {
  scrollPosition++;
  scrollImages.style.transform = `translateX(-${scrollPosition}px)`;
  if (scrollPosition >= images[0].clientWidth) {
    scrollImages.appendChild(images[0]);
    scrollPosition = 0;
  }
}, 10);
