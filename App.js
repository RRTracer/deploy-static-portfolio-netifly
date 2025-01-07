const nav = document.querySelector("nav");
const menu = document.querySelector(".navigation");
const linkNav = document.querySelectorAll(".navigation a");
const darkMode = document.querySelector("#dark-mode");
const section = document.querySelectorAll("section");
const btnMenu = document.querySelector("#menu");
const nameForm = document.querySelector("#name");
const first_name = document.querySelector("#first_name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const btnForm = document.querySelector("#btnForm");

btnMenu.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  btnMenu.classList.toggle("bg-x");
  if (window.scrollY == 0) {
    nav.classList.toggle("active");
  }
});

emailjs.init("45KsSy1hrLSPzET9e"); // account public key

const sendMail = (emailValue, nameValue, first_nameValue, msgValue) => {
  let param = {
    emailValue: emailValue,
    nameValue: nameValue,
    first_nameValue: first_nameValue,
    msgValue: msgValue,
  };
  const servicesId = "service_1x5hyeh"; // email services
  const templatesId = "template_mcf9i5v"; // templates id

  emailjs
    .send(servicesId, templatesId, param)
    .then((res) => {
      alert(
        "Thanks for your message, I'm trying to answer as fast as possible!"
      );
    })
    .catch((err) => {
      console.error("Error sending email:", err);
      alert("There was an error sending your message. Please try again later.");
    });
};

btnForm.addEventListener("click", (e) => {
  const emailValue = email.value;
  const msgValue = message.value;
  const nameValue = nameForm.value;
  const first_nameValue = first_name.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue.trim() == 0) {
    alert("1 -Please fill all of the form before pushing send button .");
    return;
  }
  if (msgValue.trim() == 0) {
    alert("2 - Please fill all of the form before pushing send button .");
    return;
  }
  if (first_nameValue.trim() == 0) {
    alert("3 -Please fill all of the form before pushing send button .");
    return;
  }
  if (nameValue.trim() == 0) {
    alert("4- Please fill all of the form before pushing send button .");
    return;
  }
  if (!emailRegex.test(emailValue)) {
    alert("Please enter a real Email .");
    return;
  }
  alert("0 erreur");
  sendMail(emailValue, nameValue, first_nameValue, msgValue);
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
        document
          .querySelector(`.navigation a[href*='${id}']`)
          .classList.add("active");
      });
    }
  });
};

window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: "1000",
  reset: true,
});

sr.reveal(
  ".home-content, .home-img, .who-img, .who-me, .services-box, .menu-box, .contact-form, .btn, .section-heading",
  { interval: 100 }
);
