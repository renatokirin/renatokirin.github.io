const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));



let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-120px"; // hides the navbar
  } else {
    navbar.style.top = "0"; // shows the navbar
  }
  lastScrollTop = scrollTop;
});

function scrollToIntro() {
  const element = document.getElementById("intro-scroll");
  element.scrollIntoView({ behavior: "smooth" });
}

function scrollToProjects() {
  const element = document.getElementById("projects-scroll");
  element.scrollIntoView({ behavior: "smooth" });
}

function scrollToContact() {
  const element = document.getElementById("contact-scroll");
  element.scrollIntoView({ behavior: "smooth" });
}