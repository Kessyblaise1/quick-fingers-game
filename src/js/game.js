// ======================================================================={  NODE ELEMENTS  }=========================================================================
const pauseButton = document.querySelector(".pause");
const resumeButton = document.querySelector(".resume");
const pauseScreen = document.querySelector(".pause_screen");
const image = document.querySelector(".logo_image");
const startButton = document.querySelector(".start");
const welcome = document.querySelector(".start_screen");          // WELCOME SCREEN
const endScreen = document.querySelector('.completed')
const finalScore = document.querySelector('.final_score')
const output = document.createElement('span')                     // TINY FLOATING SCORE BASED ON INPUT
const hilighter = document.createElement('span')
hilighter.classList.add('hilighter')
let optionsContainer = document.querySelector(".selections");
let gameTimer = document.querySelector(".game_timer");
let resumeCounter = document.querySelector(".resume_counter");



let currentScore = document.querySelector(".current_score span");

const counter = document.querySelector(".counter");
let startValue = 3;
counter.textContent = startValue;

let score = 0;
let finalValue = logos.length;

let id = 0;


// ==============================================================={  OUTPUT STYLE CODE  }=========================================================================
output.style.position = 'absolute'
const checkInput = (target) => {
  hilighter.style.visibility = 'visible'
  hilighter.textContent = '+0'
  document.body.appendChild(hilighter)
  setInterval(() => {
    hilighter.style.transform = `translate(-50%, -60px )`
  }, 300);
  setTimeout(() => {
    hilighter.style.transform = `translate(-50%, 0px )`
    document.body.removeChild(hilighter)
  }, 1000);
}


// ==============================================================={  PAUSE AND RESUME FUNCTIONALITY  }=========================================================================
const pause = () => {
  pauseScreen.style.display = "flex";
  optionsContainer.style.display = 'none'
};


const resume = () => {
  startTimer(3)
  optionsContainer.style.display = 'flex'
  pauseScreen.style.display = "none";
};

pauseButton.addEventListener("click", pause)
resumeButton.addEventListener("click", resume)



// ======================================================================={  A KEEPER }=========================================================================


function renderGame(id) {
  welcome.remove();
  image.setAttribute("src", logos[id].logo);
  image.setAttribute("alt", logos[id].companyName + " logo");
  optionsContainer.innerHTML = logos[id].options
    .map((opt) => `<button class="option btn">${opt}</button>`)
    .join("");
  currentScore.textContent = score;
}



// SELECTING THE OPTIONS  ////////////////////////////////////////
const updateScore = () => {
  score += 5
}



// ======================================================================={  OPTION CLICK / NEXT LOGO }=========================================================================
startButton.addEventListener("click", startGame);

function startGame() {
  startTimer(3);
  renderGame(id);
}

const startTimer = (index) => {
  counter.textContent = index
  resumeCounter.style.display = "flex";
  let countdownTimer = setInterval(() => {
    counter.textContent = index -= 1;
    if (index <= 0) {
      clearInterval(countdownTimer);
      resumeCounter.style.display = "none";
    }
    const options = document.querySelectorAll(".option");
    options.forEach((opt) => opt.setAttribute("disabled", "true"));
  }, 1000);
  let timeOut = setTimeout(() => {
    const options = document.querySelectorAll(".option");
    options.forEach((opt) => opt.removeAttribute("disabled"));
  }, 3000);
  renderGame(id)
}



const endGame = () => {
  endScreen.style.visibility = 'visible'
  finalScore.textContent = score
  updateScore()
}


optionsContainer.addEventListener("click", function (e) {
  if(e.target.matches('button')){
    e.target.textContent == logos[id].companyName ? updateScore() : null
    e.target.matches("button") && id != finalValue - 1 ? renderGame((id += 1)) : endGame()
  }else{
    null
  }
  checkInput(e.target)
  console.log(e.target.getBoundingClientRect())
});
