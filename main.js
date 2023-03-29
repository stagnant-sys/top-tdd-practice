function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverse(str) {
  return str.split('').reverse().join('');
}

const calculator = {
  add: function add (a, b) {
    return a + b;
  },
  subtract: function subtract (a, b) {
    return a - b;
  },
  divide: function divide (a, b) {
    return a / b;
  },
  multiply: function multiply (a, b) {
    return a * b;
  },
};

function convertToCharCode (str) {
  let charCodeArray = [];
  for (let i = 0; i < str.length; i++) {
    charCodeArray.push(str.charCodeAt(i));
  }
  return charCodeArray;
}

function shiftCharCode(str, n) {
  n = +n;
  for (let i = 0; i < str.length; i++) {
    // Majuscules
    if (str[i] >= 65 && str[i] <= 90) {
      if (n > 0 && str[i] + n > 90) { // Dépasse le 'Z'
        str[i] = 65 + (n - (91 - str[i]));
      } else if (n < 0 && str[i] + n < 65) { // Dépasse le 'A'
        str[i] = 91 - (-n - (str[i] - 65));
      } else {
        str[i] += n;
      }
    }
    // Minuscules
    else if (str[i] >= 97 && str[i] <= 122) {
      if (n > 0 && str[i] + n > 122) { // Dépasse le 'z'
        str[i] = 97 + (n - (123 - str[i]));
      } else if (n < 0 && str[i] + n < 97) {
        str[i] = 123 - (-n - (str[i] - 97));
      } else {
        str[i] += n;
      }
    }
  } 
  return str;
}

function convertFromCharCode(str) {
  let decodedArray = [];
  for (let i = 0; i < str.length; i++) {
    decodedArray.push(String.fromCharCode(str[i]));
  }
  return decodedArray.join('');
}

function caesarCipher (str, n) {
  const codedStr = convertToCharCode(str);
  const shiftedStr = shiftCharCode(codedStr, n);
  return convertFromCharCode(shiftedStr);
}
  
function calculateMin (arr) {
  let minVal = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minVal)
      minVal = arr[i];
  }
  return minVal;
}

function calculateMax (arr) {
  let maxVal = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxVal)
      maxVal = arr[i];
  }
  return maxVal;
}

function analyseArray(arr) {
  return {
    average: arr.reduce((prev, curr) => prev + curr, 0) / arr.length,
  
    min: calculateMin(arr),

    max: calculateMax(arr),

    length: arr.length,
  };
}

// split string in array, get charCode for each character
// shift character code
// join array

export { capitalize, reverse, calculator, caesarCipher, analyseArray };