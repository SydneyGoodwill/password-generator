// Assignment Code
var generateBtn = document.querySelector("#generate");

// console.log(generateBtn)

function generatePassword() {
  // code to be ran
  console.log('generatePassword is running');
}

// Write password to the #password input
function writePassword() {
  console.log('writePassword is running')
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
