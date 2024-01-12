// Assignment code here

function generatePassword() {

  // An object holding all the password character criteria.
  const characters = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
  }

// Empty array of pushed functions that choose random characters from characters object
let typeOfFunction = [];

//  Prompt that lets user enter password length
let numberSelect = prompt("Choose password length (between 8 and 128 characters).");

// Confirm that lets user choose if they want uppercase characters
// If "OK" is selected then pushes function to type of function array
let confirmUpperCase = confirm('Include uppercase characters');
if (confirmUpperCase) {
  typeOfFunction.push(() => characters.upperCase[Math.floor(Math.random() * characters.upperCase.length)]);
}
// Confirm that lets user choose if they want lowercase characters
// If "OK" is selected then pushes function to type of function array
let confirmLowerCase = confirm('Include lowercase characters');
if (confirmLowerCase) {
  typeOfFunction.push(() => characters.lowerCase[Math.floor(Math.random() * characters.lowerCase.length)]);
}
// Confirm that lets user choose if they want number characters
// If "OK" is selected then pushes function to type of function array
let confirmNumbers = confirm('Include numbers');
  if (confirmNumbers) {
    typeOfFunction.push(() => characters.numbers[Math.floor(Math.random() * characters.numbers.length)]);
  }
  // Confirm that lets user choose if they want symbol characters
  // If "OK" is selected then pushes function to type of function array
  let confirmSymbols = confirm('Include symbols');
  if (confirmSymbols) {
    typeOfFunction.push(() => characters.symbols[Math.floor(Math.random() * characters.symbols.length)]);
  }
  // Alert that pops up if specified criteria isnt met in number select prompt
  if (isNaN(numberSelect) || numberSelect < 8 || numberSelect > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  // Alert that pops up if user doesnt select any password character criteria
  if (typeOfFunction.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }

  // Loop that randomly selects functions in "typeOfFunction" array
  // and adds the characters to password
  let password = "";
  while (password.length < numberSelect) {
    let selectingFunction = typeOfFunction[Math.floor(Math.random() * typeOfFunction.length)];
    password += selectingFunction();
  }

  return password;
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
generateBtn.addEventListener("click", writePassword);