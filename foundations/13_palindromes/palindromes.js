const palindromes = function (input) {
  reverse = "";

  lettersOnly = "";
  for (let j = 0; j < input.length; j++) {
    const code = input.charCodeAt(j);
    if ((code > 47 && code < 58) ||  // numeric (0-9)
    (code > 64 && code < 91) ||  // upper alpha (A-Z)
    (code > 96 && code < 123) ) { // lower alpha (a-z)
      lettersOnly += input.charAt(j);
    }
  }

  for (let i = input.length - 1; i > -1; i--) {
    const code = input.charCodeAt(i);
    if ((code > 47 && code < 58) ||  // numeric (0-9)
    (code > 64 && code < 91) ||  // upper alpha (A-Z)
    (code > 96 && code < 123) ) { // lower alpha (a-z)
      reverse += input.charAt(i);
    }
  }

  console.log("reverse (lowercase): " + `${reverse.toLowerCase()}`);

  return reverse.toLowerCase() === lettersOnly.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
