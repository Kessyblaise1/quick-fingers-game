const pauseButton = document.querySelector(".pause")
const resumeButton = document.querySelector(".resume")
const pauseScreen = document.querySelector(".pause_screen")




const pause = () => {
  pauseScreen.style.display = "flex"
}

const resume = () => {
  pauseScreen.style.display = "none"
}

pauseButton.addEventListener("click", pause)
resumeButton.addEventListener("click", resume)