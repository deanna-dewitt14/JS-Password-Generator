// Assignment Code
var generateBtn = document.querySelector("#generate");

function getPrompts(){
  characterLength = prompt ("How many characters do you want your password to be? (8 - 128 characters"))
}
 
function generatePassword() {
  console.log("hey! you clicked the button")

  //1. Prompt the user for the password criteria
  //     a. Password Length 8 < 128
  //     b. lowercase, uppercase, numbers, special characters
  var characterLength = 8;
  var choiceArr = [];

  var specialCharacterArr = ['!', '@', '#', '$', '%', '&', '*', '-', '+', '=', '?',];
  var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
  var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
  var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
 
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
