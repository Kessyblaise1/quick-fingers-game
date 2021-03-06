// ======================================================================={  NODE ELEMENTS  }=========================================================================
const pauseButton = document.querySelector(".pause")
const resumeButton = document.querySelector(".resume")
const pauseScreen = document.querySelector(".pause_screen")
let optionsContainer = document.querySelector(".selections")
const image = document.querySelector('.logo_image')
let scoreContainer = document.querySelector(".score")
const startButton = document.querySelector(".start")
const welcome = document.querySelector('.start_screen')

let currentScore = document.querySelector(".current_score span")

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


// ======================================================================={  A KEEPER }=========================================================================
let score = 0
scoreContainer.textContent = score
let finalValue = logos.length

let id = 0

function renderGame(id) {
  welcome.remove()
  image.setAttribute('src', logos[id].logo)
  image.setAttribute('alt', logos[id].companyName + " logo")
  optionsContainer.innerHTML = logos[id].options.map(opt => `<button class="option btn">${opt}</button>`).join("")
  scoreContainer.textContent = score
  currentScore.textContent = score
}

// renderGame(id)

// SELECTING THE OPTIONS  ////////////////////////////////////////
optionsContainer.addEventListener('click', function(e) {
  e.target.textContent == logos[id].companyName ? score += 5 : console.log('not working')
  e.target.matches('button') && id != finalValue -1 ? renderGame(id += 1) : null
})

// ======================================================================={  OPTION CLICK / NEXT LOGO }=========================================================================
startButton.addEventListener('click', startGame)

function startGame() {
  renderGame(id)
}