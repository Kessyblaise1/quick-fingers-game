const pauseButton = document.querySelector(".pause")
const resumeButton = document.querySelector(".resume")
const pauseScreen = document.querySelector(".pause_screen")

const counter = document.querySelector(".counter")
let index = 3
counter.textContent = index

let countdownTimer = setTimeout(() => {
  counter.textContent = index- 1
}, 1000);

const pause = () => {
  pauseScreen.style.display = "flex"
}

const resume = () => {

  pauseScreen.style.display = "none"
}

pauseButton.addEventListener("click", pause)
resumeButton.addEventListener("click", resume)