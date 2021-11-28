
// Fade in elements

const callback = function (entries) {

  entries.forEach((entry) => {
    // console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});



// Fade out "scroll down" arrow
const target = document.querySelector('#theTarget');
const arrrow = document.getElementById("scroll-arrow")

document.addEventListener('scroll', () => {
  if (window.scrollY >= target.getBoundingClientRect().top) {
    // console.log('I have been reached');
    scroll-arrrow.classList.add("animate-fadeOut");
    scroll-arrrow.classList.add("opacity-0");
  }
})