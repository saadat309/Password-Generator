document.addEventListener("DOMContentLoaded", function () {
  let randomPassword = document.getElementById("random-password");
  randomPassword.textContent = "";
  let customPassword = document.getElementById("custom-password");

  let randomButton = document.getElementById("random-button");
  let customButton = document.getElementById("custom-button");

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

  function upperCaseReturn() {
    let result = "";
    for (let i = 0; i < 2; i++) {
      let randomIndex = Math.floor(Math.random() * characters.upperCase.length);
      result += characters.upperCase[randomIndex];
    }
    return result;
  }
  console.log(upperCaseReturn());

  function lowerCaseReturn() {
    let result = "";
    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * characters.lowerCase.length);
      result += characters.lowerCase[randomIndex];
    }
    return result;
  }
  console.log(lowerCaseReturn());

  function numbersReturn() {
    let result = "";
    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * characters.numbers.length);
      result += characters.numbers[randomIndex];
    }
    return result;
  }
  console.log(numbersReturn());

  function symbolsReturn() {
    let result = "";
    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * characters.symbols.length);
      result += characters.symbols[randomIndex];
    }
    return result;
  }
  console.log(symbolsReturn());

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
      randomPassword.title = "copied to clipboard";
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
      customPassword.title = "copied to clipboard";
    } catch (err) {
      alert("Failed to copy text.");
    }
  });
});
