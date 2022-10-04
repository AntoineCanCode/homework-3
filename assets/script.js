// Assignment Code
//var generateBtn = document.querySelector("#generate")
var generateBtn = document.getElementById("generate")
function generatePassword() {
  var length = prompt("How many characters would you like your password to be?")
  // if (length < 8 || length > 128 || Number.isInteger(length) == false) {
    if (length < 8 || length > 128 || isNaN(length)) {
    alert("Invalid. Please choose a number between 8 and 128 characters.")
    generatePassword()
    }
  var lowercase = confirm("Would you like to add lowercase letters in your password?")
    if (lowercase == true)
  //Add lowercase to password pot
  var uppercase = confirm("Would you like to add uppercase letters in your password?")
  //Add uppercase
  var specialCharacters = confirm("Would you like to add special characters?")
  // Add special
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
