const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const windowBottom = window.scrollY + window.innerHeight;

    if (sectionTop <= windowBottom && sectionTop + sectionHeight >= window.scrollY) {
      section.classList.add('in-view');
    } else {
      section.classList.remove('in-view');
    }
  });
});
