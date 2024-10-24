const passwordForm = document.querySelector(".form");

passwordForm.addEventListener("change", (e) => {
  e.preventDefault();
  generatePassword();
});

passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  generatePassword();
});

function generatePassword() {
  const passwordOutput = passwordForm.querySelector(
    'input[name="passwordInput"]'
  );

  const containsAlphabet = passwordForm.querySelector(
    'input[name="alphabet"]'
  ).checked;
  const containsNumbers = passwordForm.querySelector(
    'input[name="numbers"]'
  ).checked;
  const containsSpecialCharacters = passwordForm.querySelector(
    'input[name="specialCharacters"]'
  ).checked;
  const passwordLength = passwordForm.querySelector(
    'input[name="passwordLength"]'
  ).value;

  // Log the values to the console

  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let passwordString = "";

  if (containsAlphabet) {
    passwordString = alphabets;
  }

  if (!containsAlphabet && !containsNumbers && !containsSpecialCharacters) {
    passwordString = alphabets;
  }

  if (containsNumbers && !containsSpecialCharacters) {
    passwordString += numbers;
  }

  if (containsSpecialCharacters && !containsNumbers) {
    passwordString += specialCharacters;
  }

  if (containsSpecialCharacters && containsNumbers) {
    passwordString += specialCharacters + numbers;
  }
  let finalPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    let stringIndex = Math.floor(Math.random() * passwordString.length);
    finalPassword += passwordString.charAt(stringIndex);
  }

  passwordOutput.value = finalPassword;
}

function copyText () {
    const copyItem = document.querySelector(".copy")
    const passwordOutput = passwordForm.querySelector(
        'input[name="passwordInput"]'
      );
    copyItem.addEventListener("click", () => {
        navigator.clipboard.writeText(passwordOutput.value)
        alert('password is' + passwordOutput.value)
    })
}

copyText()
