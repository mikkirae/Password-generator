// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
​
var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
​
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
​
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

Const passwordText= document.getElementById ("password");
Const length = document.getElementById("length");
Const incNumbers = document.getElementById("numbers");
Const incSymbols = document.getElementById("Symdols");
Const generateBtn = document.getElementById("generate");




}

return password:
  passwordText.value = password;

}

// Add event listener to generate buttonfunction clickHandler(event) {
  const btn = document.querySelector('.btn');
btn.addEventListener('click', function(event){
   console.log('Button Clicked');
});
  
generateBtn.addEventListener("click", generatePassword);
generatePassword();
