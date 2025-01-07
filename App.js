const nav = document.querySelector("nav");
const menu = document.querySelector(".navigation");
const linkNav = document.querySelectorAll(".navigation a");
const darkMode = document.querySelector("#dark-mode");
const section = document.querySelectorAll("section");
const btnMenu = document.querySelector("#menu");

btnMenu.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  btnMenu.classList.toggle("bg-x");
  if (window.scrollY == 0) {
    nav.classList.toggle("active");
  }
});

linkNav.forEach((link) => [
  link.addEventListener("click", (e) => {
    menu.classList.remove("active");
    btnMenu.classList.remove("bx-x");
  }),
]);

window.addEventListener("scroll", (e) => {
  menu.classList.remove("active");
  btnMenu.classList.remove("bx-x");
});

window.addEventListener("scroll", (e) => {
  nav.classList.toggle("active", window.scrollY > 0);
});

const scrollActive = () => {
  section.forEach((sections) => {
    let top = window.scrollY;
    let offset = sections.offsetTop - 100;
    let height = sections.offsetHeight;
    let id = sections.getAttribute("id");

    if (top >= offset && top < offset + height) {
      linkNav.forEach((links) => {
        links.classList.remove("active");
        document.querySelector(`.navigation a[href*='${id}']`).classList.add("active");
      });
    }
  });
};

window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
  origin:'top',
  distance: '40px',
  duration: '1000',
  reset: true
})

sr.reveal('.home-content, .home-img, .who-img, .who-me, .services-box, .menu-box, .contact-form, .btn, .section-heading',{interval: 100})