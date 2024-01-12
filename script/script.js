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
}

// Get references to the #generate element
let generateBtn = document.getElementById("generate");

// Add event listener to generate button
  generateBtn.addEventListener("click", generatePassword);