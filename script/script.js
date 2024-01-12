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



// Connects the variables to their HTML elements 
// checked returns a value 0 for unchecked and 1 for checked
  let number = document.getElementById("numbers").checked;
  let symbol = document.getElementById("symbols").checked;
  let upper = document.getElementById("upperCase").checked;
  let lower = document.getElementById("lowerCase").checked;

  // if all variables are unchecked alert user to check at least one box
  if (number + symbol + upper + lower === 0) {
    alert("No box checked. Please check at least one box.");
    return;
  }
  // Write password to the #password input
  let passwordText = document.querySelector("#password");

  let length = document.getElementById("length");

  let password = "";
  // while loop that stops once password length is equal to the length value
  while(password.length < length.value) {
    // randomly selects functions in the typeOfFunction array
    let selectingFunction = typeOfFunction[Math.floor(Math.random() * typeOfFunction.length)];
    // puts only checked functions in variable
    let isChecked = document.getElementById(selectingFunction.name).checked;
    // only checked checkboxes will be added to the password
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