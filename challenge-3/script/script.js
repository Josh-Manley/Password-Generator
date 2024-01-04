// Assignment code here
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789"
let symbols = "!@#$%^&*()_+~\`|}{[]:;?><,./-="

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

  if (number + symbol + upper + lower ===0) {
    alert("No box checked. Please check at least one box.");
    return;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", );


