const leapYears = function(year) {
  // If the year is divisible by 4
  if (year % 4 == 0) {
    // If the year is divisible by 100 AND not divisible by 400
    if (year % 100 == 0 && year % 400 != 0) {
      // return false
      return false;
    }
    
    // return true
    return true;
  }
  
  // return false in all other cases
  return false;
};

// Do not edit below this line
module.exports = leapYears;
