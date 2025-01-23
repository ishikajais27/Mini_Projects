let pass = document.getElementById("pass-word");
let copied = document.getElementById("copy");
copied.addEventListener("click",copyPassword);
document.getElementById("btn").addEventListener("click", generatePassword);
let randomPass = [
    "fRd5TgHj1K",
    "8sN3bRm4Gx",
    "hJ7cYtEz2Q",
    "5dVfC6gHjM",
    "xT3rAk7lPq",
    "9pL5mJ4kZs",
    "2gFn5b7hRd",
    "cZ4sM8s2Df",
    "6hNb3rTk5Y",
    "1Lw7hJ5nDs",
    "xE3nB9sQcR",
    "gH2fT9jNl",
    "wE6zV3gDd",
    "4sFj8lGz2X",
    "cR5mP7zGvW",
    "bQ6dS9hYtZ",
    "3kS5dF9hRj",
    "zX2cD8fJg",
    "dE4jK7mPzT",
    "9hN4sP8wCq"
];

function getRandomOne() {
   return  Math.floor(Math.random() * randomPass.length);

}
function generatePassword() {
    let i= getRandomOne();
    pass.value = randomPass[i];
}
function copyPassword(){
    pass.select();
    pass.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(pass.value);
    alert("Copied the text: " + pass.value);
  }
