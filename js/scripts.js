window.onscroll = () => {
  const navbar = document.querySelector(".navbar");
  const offsetHader = navbar.offsetTop;

  if (window.scrollY > offsetHader) {
    navbar.classList.add("navbar-blur");
    navbar.classList.remove("navbar-primary");
  } else {
    navbar.classList.add("navbar-primary");
    navbar.classList.remove("navbar-blur");
  }
};

// Icons
const discover = document.querySelector(".discover");

discover.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-heart")) {
    e.target.classList.toggle("liked");
    if (e.target.classList.contains("liked")) {
      e.target.classList.replace("fa-regular", "fa-solid");
    } else {
      e.target.classList.replace("fa-solid", "fa-regular");
    }
  }
});

const navs = document.querySelectorAll(".nav-item");
const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

navs.forEach((nav) => {
  nav.addEventListener("click", () => {
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
  });
});
