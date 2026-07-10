const removeFromArray = function(array, ...params) {
  result = array;
  for (i = 0; i < params.length; i++) {
    result = result.filter(res => res !== params[i]);
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
