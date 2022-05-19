// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("What is the desired length of your password?");
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var num = "1234567890";
  var spec = "!@#$%^&*()";
  var chars = "";
  // adds or doesnt add to list of characters that will be randomized
  if (passwordLength >= 8 && passwordLength <= 128){
    if(confirm("Uppercase characters?") == true){
      chars = chars.concat(upper);
    }
    if(confirm("Lowercase characters?") == true){
      chars = chars.concat(lower);
    }
    if(confirm("Numeric characters?") == true){
      chars = chars.concat(num);
    }
    if(confirm("Special characters?") == true){
      chars = chars.concat(spec);
    }
  }
  else {
    return null;
  }
  
  //generate password for as long as password length
  for(var x = 0; x < passwordLength; x++){
    var passRand = Math.floor(Math.floor(Math.random() * chars.length));
    password += chars.substring(passRand, passRand +1);
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
