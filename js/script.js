var tl = gsap.timeline();

// Preloader

let loader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  loader.style.display = "none";
});

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

// Contact us form submit

const form = document.querySelector(".form");

function feedback() {
  const name = document.querySelector("#name");
  const mail = document.querySelector("#email");
  const number = document.querySelector("#number");
  const msg = document.querySelector("#message");

  const bodyMsg = `Full Name : ${name.value}, <br/> Email : ${mail.value}, <br/> Number : ${number.value}, <br/> Message : ${msg.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "harshsipehp@gmail.com",
    Password: "9972A0BF74B1A7E0ED9CAD1644C7E320BF96",
    To: "harshsipehp@gmail.com",
    From: "harshsipehp@gmail.com",
    Subject: "Portfolio Feedback",
    Body: bodyMsg,
  }).then((message) => alert("Thank You For The Feedback"));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  feedback();
});
