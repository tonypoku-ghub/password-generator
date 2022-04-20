// Assignment Code
var generateBtn = document.querySelector("#generate");
var saveBtn = document.querySelector("#save");

// Write password to the #password input
function writePassword() {
  //prompt user for criteria
  // var pwd_length = document.querySelector(".password_length");
  var characterType = document.querySelector(".all_criteria");

  var modal = document.querySelector(".modal");
  modal.style.display = "flex";

  // if (pwd_length.style.display === "none" || pwd_length.style.display === "") {
  pwd_length.style.display = "flex";
  characterType.style.display = "block";
  // }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Save the user criteria to an object
function saveCriteria() {
  //prompt user for criteria
  // var pwd_length = document.querySelector(".password_length");
  var characterType = document.querySelector(".all_criteria");

  var modal = document.querySelector(".modal");
  modal.style.display = "flex";

  // if (pwd_length.style.display === "none" || pwd_length.style.display === "") {
  pwd_length.style.display = "flex";
  characterType.style.display = "block";
  // }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate and save buttons
generateBtn.addEventListener("click", writePassword);
saveBtn.addEventListener("click", saveCriteria);

// Generate password to be displayed

//object to hold user options
pwd_options = {
  pwd_length: 0,
};

function generatePassword() {
  updateOptions();
  return "boohoo";
}

//update pwd_options object with selected data
function updateOptions() {
  //passworld length
  var pwd_length_dom = document.querySelector("#pwd_length");
  pwd_options.pwd_length =
    pwd_length_dom.options[pwd_length_dom.selectedIndex].value;
}
