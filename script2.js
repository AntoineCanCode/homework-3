function generatePassword() {
    var length = 0;
    while (8 > length && length > 128) {
     
      length = parseInt(length)
    }
    
    var password = getPassword2()
    return password;
  }
  function getPassword2(length, lowercase, uppercase, numeric, special) {
    var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+"]
    var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
    currentLength = 0
    password = ""
  
    while (currentLength >= length) {
  
      if (lowercase === true) {
        for (var i = 0; i < 26; i++) {
  
          if (currentLength < length) {
            password = password + lowerCaseLetters[i]
            currentLength = currentLength + 1
          }
          if (currentLength >= length) { break }
        }
      }
      if (uppercase === true) {
        for (var i = 0; i < 26; i++) {
          if (currentLength < length) {
            password = password + upperCaseLetter[i];
            currentLength = currentLength + 1
          }
          if (currentLength >= length) { break }
        }
      }
      if (numeric === true) {
        for (var i = 0; i < 10; i++) {
          if (currentLength < length) {
            password = password + i
            currentLength = currentLength + 1
          }
          if (currentLength >= length) { break }
        }
      }
      if (special === true) {
        for (var i = 0; i < 11; i++) {
          if (currentLength < length) {
            password = password + specialCharacters[i];
            currentLength = currentLength + 1
          }
          if (currentLength >= length) { break }
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
  