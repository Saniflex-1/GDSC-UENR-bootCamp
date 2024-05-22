let burGer = document.querySelector(".humber");
let allNav = document.querySelector(".header");

burGer.addEventListener("click", () => {
  // document.body.style.backgroundColor= 'olive';

  allNav.classList.toggle("header-active");
});

let allLink = document.querySelector(".all-link");
let appLink = document.querySelector(".app-link");
let webLink = document.querySelector(".web-link");
let cardLink = document.querySelector(".card-link");
let popIn = document.querySelector(".pop");

let All = document.getElementById("Alls");
let App = document.querySelector(".app");
let Web = document.getElementById("Web");
let Card = document.getElementById("Card");

appLink.addEventListener("click", () => {
  Web.style.display = "none";
  Card.style.display = "none";
  document.body.style.backgroundColor = "olive";
});

const arrowUp = document.querySelector(".arrowjet");

function showArrowTop() {
  if (this.scrollY > this.innerHeight / 4) {
    arrowUp.classList.add("showjet");
  } else {
    arrowUp.classList.remove("showjet");
  }
}

window.addEventListener("scroll", showArrowTop);
