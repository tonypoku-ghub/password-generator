// Assignment Code
var generateBtn = document.querySelector("#generate");

var saveBtn = document.querySelector("#save-criteria");

// Used to x out of the modal
var closeBtn = document.querySelector("#close");

// Prompts the user for password criteria
var modal = document.querySelector(".modal");

// Add event listener to generate and save buttons
generateBtn.addEventListener("click", openModal);

// Add event listener to save user selection
saveBtn.addEventListener("click", saveCriteria);

// Add event listener to close the modal
closeBtn.addEventListener("click", closeModal);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Save the user criteria to an pwd_options object
function saveCriteria() {
  var pwd_length_dom = document.querySelector("#pwd_length");
  pwd_options.pwd_length =
    pwd_length_dom.options[pwd_length_dom.selectedIndex].value;

  var lowercase_dom = document.querySelector("#lowercase");
  pwd_options.lowercase = lowercase_dom.checked;

  var uppercase_dom = document.querySelector("#uppercase");
  pwd_options.uppercase = uppercase_dom.checked;

  var numeric_dom = document.querySelector("#numeric");
  pwd_options.numeric = numeric_dom.checked;

  var symbol_dom = document.querySelector("#symbol");
  pwd_options.symbol = symbol_dom.checked;

  // Print selection to console log
  pwd_options.print();

  // Validate character type selection. Must select at least one text criteria
  // No need to validate password length, since a dropdown is used to limit choices
  if (!pwd_options.isCharTypeSelected()) {
    alert("At least one character type should be selected");

    //Keep modal open if validation fails
    openModal();

    return;
  }

  writePassword();
  closeModal();
}

//object to hold user options
pwd_options = {
  pwd_length: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  symbols: false,
  print: function () {
    // Friendly print function for debugging
    console.log("pwd_length = " + pwd_options.pwd_length);
    console.log("lowercase = " + pwd_options.lowercase);
    console.log("uppercase = " + pwd_options.uppercase);
    console.log("numeric = " + pwd_options.numeric);
    console.log("symbol = " + pwd_options.symbol);
  },
  randomChar: function (chars) {
    // Generate random char from a given string of chars
    var result = chars.charAt(Math.floor(Math.random() * chars.length));

    return result;
  },
  isCharTypeSelected: function () {
    // Validates selection of character type
    return this.lowercase || this.uppercase || this.numeric || this.symbol;
  },
};

// Generate password to be displayed
function generatePassword() {
  var numericList = "0123456789";
  var lowercaseList = "abcdefghiklmnopqrstuvwxyz";
  var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
  var symbolList = "~!@#$%^&*()_-+={[}]|:;<,>.?/";

  var password;

  for (var password = ""; password.length < pwd_options.pwd_length; ) {
    if (pwd_options.lowercase) {
      password += pwd_options.randomChar(lowercaseList);
    }

    if (pwd_options.uppercase) {
      password += pwd_options.randomChar(uppercaseList);
    }

    if (pwd_options.numeric) {
      password += pwd_options.randomChar(numericList);
    }

    if (pwd_options.symbol) {
      password += pwd_options.randomChar(symbolList);
    }
  }

  return password;
}

// Close the modal
function closeModal() {
  modal.style.display = "none";
}

// Open the modal
function openModal() {
  modal.style.display = "flex";
}
