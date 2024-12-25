let randomNumbers = document.getElementById("randomNumbers");
let updateButton = document.getElementById("updateButton");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomNumbers() {
  let result = "";
  const number = 4;
  for (let i = 0; i < number; i++) {
    result += getRandomInt(0, 9);
  }
  randomNumbers.textContent = result;
}
RandomNumbers();

updateButton.addEventListener("click", RandomNumbers);
