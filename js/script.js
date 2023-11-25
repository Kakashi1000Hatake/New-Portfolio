var tl = gsap.timeline();

// Sticky nav bar
const landing = document.querySelector(".landing");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0.9,
  }
);
observer.observe(landing);

// responsive Nav Bar

let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector("#navigation nav");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Light and dark mode

const changestylesheet = document.querySelector("#mode");
const stylesheet = document.querySelector("#stylesheet");

changestylesheet.addEventListener("click", () => {
  const currentstylesheet = stylesheet.getAttribute("href");

  if (currentstylesheet == "./css/style.css") {
    stylesheet.setAttribute("href", "./css/styleDark.css");
  } else {
    stylesheet.setAttribute("href", "./css/style.css");
  }
});

// Auto typer

// for auto typing
var typed = new Typed(".autoType", {
  strings: ["Web Developer", "Sleeping", "Playing", "Doing Noting"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// project slider

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});

tl.from(".show .back", {
  opacity: 0,
  scale: 0,
  duration: 0.7,
  stagger: 0.3,
});

tl.to(".show .back", {
  y: -30,
  duration: 0.5,
  repeat: 5,
  yoyo: true,
});

// Contact Form Pop Up

let popbtn = document.querySelector(".popBtn");
let popUp = document.querySelector(".popup");
let close = document.querySelector(".close");

popbtn.addEventListener("click", () => {
  popUp.classList.add("openPop");
});

close.addEventListener("click", () => {
  popUp.classList.remove("openPop");
});
