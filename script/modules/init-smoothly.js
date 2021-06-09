export default function initSmoothly() {
  const elements = document.querySelectorAll('[data-anime = "smooth"]');
  elements.forEach(element => {
    element.classList.add('active');
  });
}