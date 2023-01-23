// Menu bars in responsive
const bar = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".nav__menu");
const barIcon = document.querySelector(".menu-bar > i");

bar.addEventListener("click", function () {
  if (barIcon.classList.contains("bi-list")) {
    barIcon.classList.remove("bi-list");
    barIcon.classList.add("bi-x-lg");
    navMenu.classList.add("active");
  } else {
    barIcon.classList.add("bi-list");
    barIcon.classList.remove("bi-x-lg");
    navMenu.classList.remove("active");
  }
});

const a = document.querySelectorAll("nav li a");
a.forEach((item) => {
  item.addEventListener("click", function () {
    navMenu.classList.remove("active");
    barIcon.classList.add("bi-list");
    barIcon.classList.remove("bi-x-lg");
  });
});
