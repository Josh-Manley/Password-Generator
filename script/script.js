// Assignment code here

function generatePassword() {
  const characters = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
  }

// Array of functions that choose random characters from characters.keys
let typeOfFunction = [];

let numberSelect = prompt("Choose password length (between 8 and 128 characters).");

let confirmUpperCase = confirm('Include uppercase characters');
if (confirmUpperCase) {
  typeOfFunction.push(() => characters.upperCase[Math.floor(Math.random() * characters.upperCase.length)]);
}

let confirmLowerCase = confirm('Include lowercase characters');
if (confirmLowerCase) {
  typeOfFunction.push(() => characters.lowerCase[Math.floor(Math.random() * characters.lowerCase.length)]);
}

let confirmNumbers = confirm('Include numbers');
  if (confirmNumbers) {
    typeOfFunction.push(() => characters.numbers[Math.floor(Math.random() * characters.numbers.length)]);
  }

  let confirmSymbols = confirm('Include symbols');
  if (confirmSymbols) {
    typeOfFunction.push(() => characters.symbols[Math.floor(Math.random() * characters.symbols.length)]);
  }

  if (isNaN(numberSelect) || numberSelect < 8 || numberSelect > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  if (typeOfFunction.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }
}

// Get references to the #generate element
let generateBtn = document.getElementById("generate");

// Add event listener to generate button
  generateBtn.addEventListener("click", generatePassword);