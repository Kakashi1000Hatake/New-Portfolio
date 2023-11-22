// Sticky nav bar
const landing = document.querySelector(".landing");
const toTop = document.querySelector(".to-Top");
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
