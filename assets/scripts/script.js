// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomChar(chars) {
  const index = Math.trunc(chars.length * Math.random());
  return chars[index];
}

function generatePassword() {

  const passwordLength = parseInt(prompt("Desired amount of characters between 8 and 128"));
  if (isNaN(passwordLength)) {
    alert("Invalid. Use Numbers only.");
    return "";
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length invalid. Must use between 8 and 128 characters.");
  }
  else {
    const wantSymbols = confirm("Would you like to use symbols in your password?");
    const wantNumbers = confirm("Would you like to use numbers in your password?");
    const wantUppercase = confirm("Would you like to use uppercase letters in your password?");
    const wantLowercase = confirm("Would you like to use lowercase letters in your password?");

    var password = "";

    while (password.length < parseInt(passwordLength)) {

      if (wantSymbols) {
        password += getRandomChar("+=_-)(*&^%$#@!");
        if (password.length === passowordLength) {
          return password;
        }
      }
      if (wantNumbers) {
        password += getRandomChar("0123456789");
        if (password.length === passwordLength) {
          return password;
        }
      }
      if (wantUppercase) {
       password += getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        if (password.length === passwordLength) {
          return password;
       }
      }
      if (wantLowercase) {
        password += getRandomChar("abcdefghijklmnopqrstuvwxyz");
        if (password.length === passwordLength) {
          return password;
       }
      }
    }
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
