const reverseString = function(input) {
  reversed = ""
  for (i = input.length - 1; i > -1; i--) {
    reversed += input.charAt(i);
  }

  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
