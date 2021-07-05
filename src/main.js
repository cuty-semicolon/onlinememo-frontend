const modal = document.getElementById("mymodal");
// const modal = document.getElementsByClassName("modal")[0];
const loginmodal = () => {
    modal.style.display = "flex";
}
window.addEventListener("click", (e) => {
    if(e.target == modal){
        modal.style.display = "none";
    }
})
document.getElementsByClassName("signup")[0].addEventListener("click", () => {
    window.location.href = "signup.html";
})