// Grab elements
const input = document.getElementById("encoder-input-box");
const output = document.getElementById("encoded-output-box");
const dropdown = document.getElementById("cypher-selection-dropdown");
const submitBtn = document.getElementById("submit-btn");  // give your button this id

// The cypher functions live here 
function rot13(text) {
  return text.replace(/[a-zA-Z]/g, function(char) {
    const base = char >= 'a' ? 97 : 65;
    return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
  });
}

function atbash(text) {
  return text.split('').map(char => {
    const lower = char.toLowerCase();
    const upper = char.toUpperCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const index = alphabet.indexOf(lower);
    if (index === -1) return char;
    const encoded = alphabet[25 - index];
    return char === upper ? encoded.toUpperCase() : encoded;
  }).join('');
}



// The dispatcher — reads which cipher is selected and calls the right function
function encode() {
  const message = input.value;
  const selected = dropdown.value;

  if (selected === "ROT13") {
    output.value = rot13(message);
  }

  if (selected === "Atbash") {
    output.value = atbash(message)
  }

}

// Wire the button to the dispatcher
submitBtn.addEventListener("click", encode);
