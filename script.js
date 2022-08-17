// Assignment Code
var generateBtn = document.querySelector("#generate");

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
function getPrompts(){
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters")); //NaN

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { //hoping this will all be false
    alert("Character length has to be a number, 8 - 128 digits. Please try again.");
    return false;
  }
  if (confirm("Would you like lowercase letters in your passwords?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharacterArr);
  }
  return true;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
