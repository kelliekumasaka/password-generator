// Defined necessary global variables and arrays
var generateBtn = document.querySelector("#generate");
var userNumber, smallAlphabet, bigAlphabet, numbers, specialAlphabet;
var userInput = [];
var numeric = ["1", "2","3","4","5","6","7","8","9","0" ];
var lowercase = ["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','>',"=",'?','@','[',']','^','_','`','{','}',"|","~"];
var ask =true;
var randomItems = [];
var passwordText = document.querySelector("#password");
userNumber = 0;

// Write password to the #password input
function writePassword() {
  getPasswordLength();
  for (let i = 0; i < userNumber; i++){
    randomItems.push (userInput[Math.floor(Math.random() * userInput.length)])
  }
  var stringItems = randomItems.join("");
  passwordText.value = stringItems;
}

// Loop to ask the user for which characters to use
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

// Confirm that user wants a password
function getPasswordLength() {
  ask=true
  // Loop to ask how long the password should be and to work out any edge cases
  while (ask){
    userNumber = prompt("How many characters in password? Enter a number between 8 and 128");
    if (userNumber === null){
      alert("Goodbye!!");
      return;
    }else if(userNumber < 128 && userNumber > 8){
      ask=false;
      getUserInputs();
    }else if (userNumber >= 128 || userNumber <= 8){
      alert("Please enter a valid number");
    }else if (userNumber = "a") {
      alert("Please enter a valid number")
    }
  }  
}

// Clears previously entered arrays
function clearPassword(){
  userInput.length=0;
  randomItems.length=0;
}

// Add event listeners to generate button
generateBtn.addEventListener("click", writePassword)
generateBtn.addEventListener("click", clearPassword)
