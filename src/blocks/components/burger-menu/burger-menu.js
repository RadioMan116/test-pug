const buttonOpen = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");
const buttonClose = document.querySelector(".button-close");
buttonOpen.addEventListener("click", () => {
    burgerMenu.classList.add("active");
});
buttonClose.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
});