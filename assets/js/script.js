// Assignment code here
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["!", "(", ")", "-", ".", "?", "[", "]", "_", "~", ";", ":", "@", "#", "$", "%", "^", "&", "*", "=", "+"];
var combined = [];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
  var lengthSelect = window.prompt("Please enter desired length for password. Must be between 8-128.")
  if (!lengthSelect) {
    return;
  } else if (lengthSelect < 8 || lengthSelect > 128) {
    window.alert("Must enter a value between 8-128.")
    return;
  };

  var upperSelect = window.confirm("Include uppercase letters? Press okay for yes or cancel for no.");

  var numSelect = window.confirm("Include numbers? Press Okay for yes or Cancel for no.");

  var specialSelect = window.confirm("Include special characters? Ex: ?!,.&#^");

  if (upperSelect && numSelect && specialSelect) {
    combined = combined.concat(lower, upper, numeric, specialChar);
  };

  console.log(combined);

};



// How to return error msg if not between 8-128?



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

