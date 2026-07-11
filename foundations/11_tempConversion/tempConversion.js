const convertToCelsius = function(fTemp) {
  let result = Number(((fTemp - 32) * (5/9)).toFixed(1));
  console.log("initial result: " + result);

  if (result % 0.1 == 0) {
    result = Number(result.toFixed());
  }

  return result;
};

const convertToFahrenheit = function(cTemp) {
  let result = Number((cTemp * (9/5) + 32).toFixed(1));
  console.log("initial result: " + result);

  if (result % 0.1 == 0) {
    result = Number(result.toFixed());
  }

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
