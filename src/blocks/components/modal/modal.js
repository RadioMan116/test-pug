const buttonOpen = document.querySelector(".main-button");
const modal = document.querySelector(".modal");
const buttonClose = document.querySelector(".button-cancel");
const buttonSend = document.querySelector(".button-submit");
const checkbox = document.querySelector(".checkbox-input");
buttonOpen.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.classList.add("active");
});
buttonClose.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("active");
    document.body.classList.remove("active");
});
buttonSend.addEventListener("click", (e) => {
    e.preventDefault();
});
checkbox.addEventListener("change", ()=> {
    if(checkbox.checked){
        buttonSend.removeAttribute("disabled"); 
    } else {
        buttonSend.setAttribute("disabled", "true");
    }
});