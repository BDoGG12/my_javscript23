function backwords(str) {
  var reverseStr = "";
  var n = str.length;
  for (var i = n - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}

console.log("olleh"); //=> 'hello'

function everyOther(str) {
  var newWord = "";
  var n = str.length;

  for (var i = 0; i < n; i += 2) {
    newWord += str[i];
  }

  // returns string
  return newWord;
}

console.log(everyOther("shwoitmj"));

function flip(str) {
  var n = str.length;
  var strArr = str.split("");
  var newWordArr = [];

  // loop through string
  for (var i = 0; i < n; i += 2) {
    newWordArr[i] = strArr[i + 1];
    newWordArr[i + 1] = strArr[i];
  }

  // return string
  return newWordArr.join("");
}

console.log(flip("ejllo")); //=> 'jello';

function getEveryThird(str) {
  var n = str.length;
  var newWord = "";

  // looping through string backwards
  for (var i = n - 1; i >= 0; i -= 3) {
    newWord += str[i];
  }

  // returns string
  return newWord;
}

console.log(getEveryThird("drteghlsdbiomweusfj")); //=> 'jumbled'
console.log(getEveryThird("oerwtyt")); //=> 'two'

function everyOtherSwitch(str) {
  var n = str.length;
  var newWordArr = [];

  // looping through string
  for (var i = 0; i < n; i += 4) {
    if (i === n - 1) {
      newWordArr[i] = str[i];
    }
    newWordArr[i] = str[i + 2];
    newWordArr[i + 1] = str[i];
  }

  return newWordArr.join("");
}

console.log(everyOtherSwitch("odhysprle")); //=> 'horse'
console.log(everyOtherSwitch("idmrhagjyst")); //=> 'mighty'

function replaceFirstLetter(word, char) {
  return word.replace(word.charAt(0), char);
}

console.log(replaceFirstLetter("word", "f")); //=> ford

function firstLastUppercase(str) {
  var n = str.length;
  var newWord = "";

  // loop through string
  for (var i = 0; i < n; i++) {
    if (i === 0) {
      newWord += str[i].toUpperCase();
    } else if (i === n - 1) {
      newWord += str[i].toUpperCase();
    } else {
      newWord += str[i];
    }
  }
  return newWord;
}

console.log(firstLastUppercase("world")); //=> 'WorlD'

function isSwitched(word, target) {
  var newWord = "";
  var n = word.length;
  var lowCaseWord = word.toLowerCase();

  // loop through word
  for (var i = 0; i < n; i++) {
    if (i === n - 1) {
      newWord += lowCaseWord[i].replace(lowCaseWord[i], lowCaseWord[0]);
    } else if (i === 0) {
      newWord += lowCaseWord[i].replace(lowCaseWord[0], lowCaseWord[n - 1]);
    } else {
      newWord += lowCaseWord[i];
    }
  }

  console.log(newWord);

  // return expression
  return newWord === target.toLowerCase();
}

console.log(isSwitched("yungrh", "hungry")); // => true
console.log(isSwitched("laugh", "laugh")); // => false
console.log(isSwitched("sigth", "sight")); // => false
console.log(isSwitched("eakM", "mAke")); //=> true

function replaceWithSymbol(str, char, sym) {
  var newWord = "";
  var lowCaseStr = str.toLowerCase();

  // loop through string
  for (var i = 0; i < lowCaseStr.length; i++) {
    if (lowCaseStr[i] === char) {
      newWord += lowCaseStr[i].replace(char, sym);
    } else {
      newWord += lowCaseStr[i];
    }
  }

  // return word with replaced characters
  return newWord;
}

console.log(replaceWithSymbol("three", "e", "#")); //=> thr##
console.log(replaceWithSymbol("very precious stones", " ", "%")); //=> 'very%precious%stones'
console.log(replaceWithSymbol("Total tally", "t", "&")); // ==> '&o&al &ally'

function sliceChunk(str, start, end) {
  return str.slice(start, end);
}

console.log("sliceChunk:", sliceChunk("cows in the field", 5, 11) === "in the"); //=> 'in the'

function atIndex(str, ind, targetStr) {
    var sliced = str.slice(ind);
    console.log(sliced);

    for (var i = 0; i < targetStr.length; i++) {
        if (sliced[i] === targetStr[i]) {
            return true;
        } else {
            return false;
        }
    }
  }

console.log("atIndex:", atIndex("We would love to go!", 9, "love")); //=> true
console.log("atIndex", atIndex("We would love to go!", 10, "go")); //=> false
