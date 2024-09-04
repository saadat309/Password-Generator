let randomPassword = document.getElementById("random-password");
randomPassword.textContent = "";
let randomButton = document.getElementById("random-button");

let characters = {
  upperCase: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  lowerCase: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  symbols: [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "=",
    "-",
    "{",
    "}",
    "[",
    "]",
    "|",
    ";",
    "<",
    ">",
    ",",
    ".",
    "?",
    "/",
    "~",
  ],
};

let itemsToPick = {
  upperCase: 2,
  lowerCase: 4,
  numbers: 3,
  symbols: 1,
};

function buttonClicked() {
  randomButton.classList.remove("random-button");

  randomButton.classList.add("button-clicked");
}

function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateRandomPassword() {
  buttonClicked();

  let selectedItems = []; // Clear previous items

  for (let key in characters) {
    if (itemsToPick.hasOwnProperty(key)) {
      // Check if key exists in itemsToPick
      let currentArray = characters[key];
      let numberOfItems = itemsToPick[key];

      // Ensure numberOfItems does not exceed the length of the array
      numberOfItems = Math.min(numberOfItems, currentArray.length);

      for (let j = 0; j < numberOfItems; j++) {
        let randomIndex = Math.floor(Math.random() * currentArray.length);
        let randomItem = currentArray[randomIndex];
        selectedItems.push(randomItem);
      }
    }
  }

  fisherYatesShuffle(selectedItems);

  // Update the textContent with the shuffled items
  randomPassword.textContent = selectedItems.join(""); // Join array into a string

  randomButton.addEventListener("click", generateRandomPassword);
}

//NOTE: Custom Function

let customPassword = document.getElementById("custom-password");
let customButton = document.getElementById("custom-button");

function secondButtonClicked() {
  customButton.classList.remove("custom-button");

  customButton.classList.add("button-clicked");
}

function generateCustomPassword() {
  secondButtonClicked();

  let passwordLength = parseInt(document.getElementById("length").value);
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  let charactersPool = [];

  if (includeUppercase) {
    for (let i = 0; i < characters.upperCase.length; i++) {
      charactersPool[charactersPool.length] = characters.upperCase[i];
    }
  }
  if (includeLowercase) {
    for (let i = 0; i < characters.lowerCase.length; i++) {
      charactersPool[charactersPool.length] = characters.lowerCase[i];
    }
  }
  if (includeNumbers) {
    for (let i = 0; i < characters.numbers.length; i++) {
      charactersPool[charactersPool.length] = characters.numbers[i];
    }
  }
  if (includeSymbols) {
    for (let i = 0; i < characters.symbols.length; i++) {
      charactersPool[charactersPool.length] = characters.symbols[i];
    }
  }

  let randomString = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * charactersPool.length);

    randomString += charactersPool[randomIndex];
  }

  if (passwordLength > 3) {
    customPassword.textContent = randomString;
  } else {
    alert("Password length must be greater than 3 characters.");
  }
}

//NOTE: Click functions

function firstTextClicked() {
  randomPassword.classList.remove("random-password");

  randomPassword.classList.add("text-clicked");
}

randomPassword.addEventListener("click", async function () {
  firstTextClicked();
  let text = this.textContent;

  try {
    await navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  } catch (err) {
    alert("Failed to copy text.");
  }
});

function secondTextClicked() {
  customPassword.classList.remove("custom-password");

  customPassword.classList.add("text-clicked");
}

customPassword.addEventListener("click", async function () {
  secondTextClicked();
  let text = this.textContent;

  try {
    await navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  } catch (err) {
    alert("Failed to copy text.");
  }
});
