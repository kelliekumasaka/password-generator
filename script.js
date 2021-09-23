// Assignment Code
var generateBtn = document.querySelector("#generate");
var userNumber, smallAlphabet, bigAlphabet, numbers, specialAlphabet, numberError, characterError, underlineNine, password;
var userInput = [];
var numeric = ["1", "2","3","4","5","6","7","8","9","0" ];
var lowercase = ["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>',"=",'?','@','[',']','^','_','`','{','}',"|","~"];
userNumber = 0;
var ask =true;
var randomItems = [];

// Write password to the #password input
function writePassword() {
  getPasswordLength();

  for (let i = 0; i < userNumber; i++){
    randomItems.push (userInput [Math.floor(Math.random() * userInput.length)]);
    // console.log(randomItems);
    // randomItems.push("#password")
  }
  console.log(randomItems)
  var stringItems = randomItems.join("");
  var passwordText = document.querySelector("#password");
  passwordText.value = stringItems;
}

function getUserInputs() {
  ask=true
  while (ask){
    smallAlphabet = confirm("Would you like to include lowercase letters?");
    bigAlphabet = confirm("Would you like to include uppercase letters?");
    numbers = confirm("Would you like to include numbers?");
    specialAlphabet = confirm("Would you like to include special characters?");
    if(!smallAlphabet && !bigAlphabet && !numbers && !specialAlphabet){
      alert("Please select at least one")
    }else{
      if(smallAlphabet) {
        userInput = userInput.concat(lowercase)
      }
      if(bigAlphabet) {
        userInput = userInput.concat(uppercase)
      }
      if(numbers) {
        userInput = userInput.concat(numeric)
      }
      if(specialAlphabet) {
        userInput = userInput.concat(specialCharacters)
      }
      ask=false
    }
  }
}


function getPasswordLength() {
  ask=true
  while (ask){
    userNumber = prompt("How many characters in password? Enter a number between 8 and 128");
    if (userNumber < 128 && userNumber > 8){
      ask=false;
      getUserInputs();
    }else if (userNumber > 128 || userNumber < 8 || userNumber == "string"){
      alert("Please enter a valid number");
    }else{
      alert("Goodbye")
      ask=false;
    }

  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// console.log driven development

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// 🚩TODO: write the generatePassword function

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// 🚩TODO: ask the user how many characters they want in password --> use a prompt which will be set to a var --> console.log(passwordlength) --> make sure the info is correct --> IF number is not between 8 and 128, THEN alert and start over --> 8+ or 128-


// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// 🚩TODO: write a series of 4 confirms --> set these to be a var --> to check if the user wants --> clo each variable from confirm
// 🚩TODO: write 4 arrays, one for lowercase, uppercase, numeric, and special characters
// 🚩TODO: check that the prompts true or false --> using above var for this --> and add associated arrays to a "holding array" upperConfirm --> true --> uppercase array --> add to holding array clo this


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// 🚩TODO: check that we have at lease one of the types


// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// 🚩TODO: take our holding array and randomize the characters --> adding to a second array
// 🚩TODO: take the randomized characters and select the amount that the user has chosen for the password length --> add these to a "return array" --> for loop the length for this will be the user password length clo this 3rd array to make sure that its the right length


// WHEN the password is generated
// THEN the password is either displayed written to the page
// 🚩TODO: take our return array and use array methods to convert to a string --> have a var for this and return string clo this