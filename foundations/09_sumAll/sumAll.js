const sumAll = function(low, high) {
  // Validate arguments
  errorReturn = "ERROR";
  if (!Number.isInteger(low) || low < 0) {
    return errorReturn;
  }
  if (!Number.isInteger(high) || high < 0) {
    return errorReturn;
  }

  let aux = low;
  low = Math.min(low, high);
  high = Math.max(aux, high);
  
  let sumOfIntegers = 0;
  for (i = low; i <= high; i++) {
    sumOfIntegers += i;
  }
  return sumOfIntegers;
};

// Do not edit below this line
module.exports = sumAll;
