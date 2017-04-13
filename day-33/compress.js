var compress = (input) => {
    let output = "";
    let chars = input.split("");

    var lastChar  = chars[0];
    var charCount = 0;

    for (let i = 0; i < chars.length; i++) {
        var currentChar = chars[i];

        if (currentChar === lastChar) {
            charCount += 1;
        } else {
            if (charCount < 2) {
                output += lastChar;
            } else {
                output += lastChar;
                output += charCount;
            }
            charCount = 0;
        }

        if (i === chars.length - 1) {

        }

        lastChar = currentChar;
    }
    if (charCount > 0) {
        output += lastChar + (charCount);
    }
    return output;
}

function compress(string) {
  let arr = string.split('')
  let count = 0;
  let a = arr[0];
  let finalArr = [];
  arr.forEach((letter, index) => {
    if (sameCharacter(letter, a)) {
      count += 1
    } else {
      finalArray.push(amountToPush(count, a));
      a = letter;
      count = 1
    }
    if (endOfString(index, arr)) {
      finalArr.push(amountToPush(count, a));
    }
  });
  return finalArr.join('');
}

const amountToPush = (count, a) => {
  if (count === 1) {
    return a;
  } else {
    return (a + count);
  }
}

const sameCharacter = (letter, a) => {
  return letter === a;
}

const endOfString = (index, array) => {
  return index == array.length -1
}
/****
*  Compression (RLE)
*  - Either split the string into an array or get the length of the string
*  - Loop over the string one character at a time
*  - Comparing the current character against the previous character
*  - We need to maintain reference to the counter and the last character
*  - if the last character is the same as the current character then we inc the counter
*  - if the last character doesn't match, add the current char to the output string
*  - if they don't match reset the count to 0
*/

console.log( t = compress("aaa"), t == "a3")
console.log( t = compress("abc"), t == "abc")
console.log( t = compress("aaaabbb"), t == "a4b3")
console.log( t = compress("aaaabbbaaaaaaaaaacccccccccdededededeeeee"), t == "a4b3a10c9dedededede5")
