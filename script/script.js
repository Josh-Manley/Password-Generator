// Assignment code here
const types = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
}


const typeOfFunction = [
  function upperCase() {
    return types.upperCase[Math.floor(Math.random() * types.upperCase.length)];
  },

  function lowerCase() {
    return types.lowerCase[Math.floor(Math.random() * types.lowerCase.length)];
  },

  function numbers() {
    return types.numbers[Math.floor(Math.random() * types.numbers.length)];
  },

  function symbols() {
    return types.symbols[Math.floor(Math.random() * types.symbols.length)];
  }
];

function generatePassword() {

  let number = document.getElementById("numbers").checked;
  let symbol = document.getElementById("symbols").checked;
  let upper = document.getElementById("upperCase").checked;
  let lower = document.getElementById("lowerCase").checked;

  if (number + symbol + upper + lower === 0) {
    alert("No box checked. Please check at least one box.");
    return;
  }
  // Write password to the #password input
  let passwordText = document.querySelector("#password");

  let length = document.getElementById("length");

  let password = "";

  while(password.length < length.value) {
    let selectingFunction = typeOfFunction[Math.floor(Math.random() * typeOfFunction.length)];
    let isChecked = document.getElementById(selectingFunction.name).checked;
    if (isChecked) {
      password += selectingFunction();
    }
  }
  passwordText.innerHTML = password;
}

// Get references to the #generate element
let generateBtn = document.getElementById("generate");

// Add event listener to generate button
  generateBtn.addEventListener("click", generatePassword);