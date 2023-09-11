var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["!", "(", ")", "-", ".", "?", "[", "]", "_", "~", ";", ":", "@", "#", "$", "%", "^", "&", "*", "=", "+"];
var combined = [];
var generateBtn = document.querySelector("#generate");
var copyButton = document.querySelector(".card-body");

var buttonPress = function () {
  var lengthSelect = window.prompt("Please enter desired length for password. Must be between 8-128.")
  if (!lengthSelect) {
    return;
  } else if (lengthSelect < 8 || lengthSelect > 128) {
    window.alert("Must enter a value between 8-128.")
    return;
  };

  var upperSelect = window.confirm("Include uppercase letters? Press okay for 'yes' or cancel for 'no'.");

  var numSelect = window.confirm("Include numbers? Press okay for 'yes' or cancel for 'no'.");

  var specialSelect = window.confirm("Include special characters? Ex: ?!,&#^. Press okay for 'yes' or cancel for 'no'.");

  window.alert("Click text area to copy generated password to clipboard!");

  if (upperSelect && numSelect && specialSelect) {
    combined = combined.concat(lower, upper, numeric, specialChar);
  } else if (upperSelect && numSelect && !specialSelect) {
    combined = combined.concat(lower, upper, numeric);
  } else if (upperSelect && !numSelect && specialSelect) {
    combined = combined.concat(lower, upper, specialChar);
  } else if (!upperSelect && numSelect && specialSelect) {
    combined = combined.concat(lower, numeric, specialChar);
  } else if (upperSelect && !numSelect && !specialSelect) {
    combined = combined.concat(lower, upper);
  } else if (!upperSelect && !numSelect && specialSelect) {
    combined = combined.concat(lower, specialChar);
  } else if (!upperSelect && numSelect && !specialSelect) {
    combined = combined.concat(lower, numeric);
  } else {
    combined = combined.concat(lower);
  };

  function genPassword(lengthSelect) {
    var combinedStr = combined.join("");
    var choices = combinedStr;
    var result = '';
    var counter = 0;
    while (counter < lengthSelect) {
      result += choices.charAt(Math.floor(Math.random() * choices.length));
      counter += 1;
    }

    var password = result;
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  };

  genPassword(lengthSelect);
};

var copyPress = function() {
  document.querySelector("#password").select();
  document.execCommand('copy');
};

generateBtn.addEventListener("click", buttonPress);

copyButton.addEventListener("click", copyPress);

