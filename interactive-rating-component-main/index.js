const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you")
const submitbutton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")


submitbutton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display="none"
})


rateAgain.addEventListener("click", () => {
   thanksContainer.classList.add("hidden")
    mainContainer.style.display="block"
})


rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
    
});