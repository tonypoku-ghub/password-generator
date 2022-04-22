// Assignment Code
var generateBtn = document.querySelector("#generate");

var saveBtn = document.querySelector("#save-criteria");

var closeBtn = document.querySelector("#close");

var modal = document.querySelector(".modal");

// Add event listener to generate and save buttons
generateBtn.addEventListener("click", openModal);

saveBtn.addEventListener("click", saveCriteria);

closeBtn.addEventListener("click", closeModal);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Save the user criteria to an object
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

  pwd_options.print();

  //validate character type selection
  if (!pwd_options.isCharTypeSelected()) {
    alert("At least one character type should be selected");

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
    console.log("pwd_length = " + pwd_options.pwd_length);
    console.log("lowercase = " + pwd_options.lowercase);
    console.log("uppercase = " + pwd_options.uppercase);
    console.log("numeric = " + pwd_options.numeric);
    console.log("symbol = " + pwd_options.symbol);
  },
  randomChar: function (chars) {
    var result = chars.charAt(Math.floor(Math.random() * chars.length));

    return result;
  },
  isCharTypeSelected: function () {
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

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
}

function openModal() {
  modal.style.display = "flex";
}
