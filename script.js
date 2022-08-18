//Requirements for password criteria
//  Password Length 8 < 128
//  lowercase, uppercase, numbers, special characters
var characterLength = 8;
var choiceArr = [];
var selectedChoices = [];
var passwordText = document.querySelector("#password"); // Target Password field
var generateBtn = document.querySelector("#generate"); // Target Button
var specialCharacterArr = ['!', '@', '#', '$', '%', '&', '*', '-', '+', '=', '?'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

// Add event listener to generate button
generateBtn.addEventListener("click", sendPrompts);

// Prompt User and Initialize Password Generator and Validator Loop
function sendPrompts() {
  var correctPrompts = getPrompts(); //returns true or false
  
  if (correctPrompts) {
    generatePassword();
  } else {
    passwordText.value = "";
  }
}

// Generate password based on criteria. 
function generatePassword() {
  var password = "";

  for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr [randomIndex];
    }
    //Send to validation
    vadidatePassword(password); 
  }

  //Validate the input
function vadidatePassword(generatedPassword) {
  var elementFound = false;
  var tempSelectedChoices = [...selectedChoices];

  if(tempSelectedChoices.find(element => element == 'lowercase')) {
    elementFound = false;
    lowerCaseArr.forEach(element => {
      if(generatedPassword.includes(element) && elementFound == false) {
        tempSelectedChoices.splice(tempSelectedChoices.indexOf("lowercase"),1);
        elementFound = true;
      }
    });
  }
  if(tempSelectedChoices.find(element => element == "uppercase")) {
    elementFound = false;
    upperCaseArr.forEach(element => {
      if(generatedPassword.includes(element) && elementFound == false) {
        
        tempSelectedChoices.splice(tempSelectedChoices.indexOf("uppercase"),1);
        elementFound = true;
      }
    });
  }
  if(tempSelectedChoices.find(element => element == "numbers")) {
    elementFound = false;
    numberArr.forEach(element => {
      if(generatedPassword.includes(element) && elementFound == false) {
        tempSelectedChoices.splice(tempSelectedChoices.indexOf("numbers"),1);
        elementFound = true;
      }
    });
  }
  if(tempSelectedChoices.find(element => element == "special")) {
    elementFound = false;
    specialCharacterArr.forEach(element => {
      if(generatedPassword.includes(element) && elementFound == false) {
        tempSelectedChoices.splice(tempSelectedChoices.indexOf("special"),1);
        elementFound = true;
      }
    });
  }
  if(tempSelectedChoices.length != 0){
    generatePassword();
  } else {
    passwordText.value = generatedPassword;
  }
}

function getPrompts(){
  choiceArr = [];
  selectedChoices = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters")); //NaN
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { //hoping this will all be false
    alert("Character length has to be a number, 8 - 128 digits. Please try again.");
    return false;
  }
  if (confirm("Would you like lowercase letters in your passwords?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
    selectedChoices.push("lowercase");
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
    selectedChoices.push("uppercase");
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
    selectedChoices.push("numbers");
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharacterArr);
    selectedChoices.push("special");
  }
  return true;
}