const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");
const slider = document.querySelector(".slider");

arrowRight.addEventListener("click",()=>{
 slider.style.transform = `translateX(-500px)`
})
