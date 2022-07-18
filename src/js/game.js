// ======================================================================={  NODE ELEMENTS  }=========================================================================
const pauseButton = document.querySelector(".pause")
const resumeButton = document.querySelector(".resume")
const pauseScreen = document.querySelector(".pause_screen")
let optionsContainer = document.querySelector(".selections")

const counter = document.querySelector(".counter")
let index = 3
counter.textContent = index

// ======================================================================={  COUNTDOWN TIMER  }=========================================================================
let countdownTimer = setTimeout(() => {
  counter.textContent = index- 1
}, 1000);



// ======================================================================={  PAUSE FUNCTIONALITY  }=========================================================================
const pause = () => {
  pauseScreen.style.display = "flex"
}



// ======================================================================={  RESUME FUNCTIONALITY  }=========================================================================
const resume = () => {
  pauseScreen.style.display = "none"
}

pauseButton.addEventListener("click", pause)
resumeButton.addEventListener("click", resume)


// ======================================================================={  NEXT LOGO  }=========================================================================
let opt = logos[0].options
console.log(opt)