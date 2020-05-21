let guessField = document.querySelector(".guessField");
let wrongOrCorrect = document.querySelector(".wrongOrCorrect");
let lowOrHigh = document.querySelector(".lowOrHigh");
let guessSubmit = document.querySelector(".guessSubmit");
let clickCount = 0;
let stepCountMessage = document.createElement("p");
let resultParas = document.querySelector(".resultParas");
let newGame = document.querySelector(".newGameButton");
let guesses = document.querySelector(".guesses");


let min = 0;
let max = 100;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let result = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  console.log("загаданное число: " + result); // проверка на правильность работы функций
  return result;
}
let randomInt = getRandomIntInclusive(min, max);

function newGameStart() {
    clickCount = 0;
    guessSubmit.disabled = false;
    newGame.classList.remove("show");
    lowOrHigh.classList.remove("show");
    resultParas.classList.remove("show");
     wrongOrCorrect.classList.remove("show");
        wrongOrCorrect.textContent = "Не угадали!";
    randomInt = getRandomIntInclusive(min, max);
    guesses.textContent = "Предыдущие предположения: ";
};


function checkNumber() {
  let guessNumber = guessField.value;
  if (clickCount > 0 && clickCount < 10) {
    guesses.textContent +=  ", " + guessNumber;
  }
  if (clickCount <= 0) {
    guesses.textContent +=  " " + guessNumber;
  }
  
  guesses.classList.add("show");
    if (guessNumber > randomInt) {
    lowOrHigh.textContent = "Слишком большое число";
    wrongOrCorrect.classList.add("show");
    lowOrHigh.classList.add("show");
  }
  if (guessNumber < randomInt) {
    wrongOrCorrect.classList.add("show");
    lowOrHigh.textContent = "Слишком маленькое число";
    lowOrHigh.classList.add("show");

  } else if (guessNumber == randomInt) {
    wrongOrCorrect.style.backgroundColor = "green";
    wrongOrCorrect.textContent = "Ура! Правильно!";
    lowOrHigh.classList.remove("show");
    wrongOrCorrect.classList.add("show");
    stepCountMessage.innerHTML = "Количество шагов к победе: " + clickCount;
    resultParas.append(stepCountMessage);
    guessSubmit.disabled = true;
    newGame.classList.add("show");
  }
};


function clickCounter() {
  clickCount++;
  if (clickCount >10) {
    wrongOrCorrect.textContent = "Попытки закончились, вы проиграли";
    guessSubmit.disabled = true;
    newGame.classList.add("show");
  }
  console.log("clickCount: " + clickCount);
};

guessSubmit.addEventListener("click", checkNumber);
guessSubmit.addEventListener("click", clickCounter);
newGame.addEventListener("click", newGameStart);
// console.log("clickCount: " + clickCount);
