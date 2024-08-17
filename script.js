const toggler = document.querySelector('.toggler');
const navLinks = document.querySelector('.nav-links');

toggler.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});