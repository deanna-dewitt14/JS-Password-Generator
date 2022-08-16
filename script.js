// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("hey! you clicked the button")

  //1. Prompt the user for the password criteria
  //     a. Password Length 8 < 128
  //     b. lowercase, uppercase, numbers, special characters
  const numbers = [1,2,3,4,5,6,7,8,9,0];
  const symboles = ["@", "#", "$", "&"]
  const characterCodes = Array.from(Array(26).map( (_, i)=> i + 97);
  const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
  const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase())
  //2. Validate the input
  //3. generate password based on criteria. 


  //4. Display generated password on the page. 
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
