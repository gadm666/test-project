// change nav bar style when scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scrolled", scrollY > 0);
});

/*make a conatct btn */

const textButton = document.querySelectorAll(".contact__btn");

textButton.forEach((textButton) => {
  let text = textButton.querySelector("p");

  text.innerHTML = text.innerHTML
    .split("")
    .map(
      (chracter, index) =>
        `<span style = "transform: rotate(${
          index * 12
        }deg)"> ${chracter} </span>`
    )
    .join("");
});

// nav responsive

const nav = document.querySelector(".nav__linkes");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");

openNavBtn.addEventListener("click", () => {
  nav.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
});

closeNavBtn.addEventListener("click", function closeNav() {
  nav.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
});

nav.querySelectorAll("li a").forEach((navlink) => {
  navlink.addEventListener("click", () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 800) {
      nav.style.display = "none";
      openNavBtn.style.display = "inline-block";
      closeNavBtn.style.display = "none";
    }
  });
});
