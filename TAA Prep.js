// input: 2D array
// output: array of objects where the key is color and value is its association
// summary: takes in the 2D array and stores the nested array as key pair object values in a new array
// plan: create empty array and object, loop through array to get the nested array into the object as key pair values

const colorAssociation = (array) => {
  var n = array.length;
  var newArr = [];

  // loop through array
  for (var i = 0; i < n; i++) {
    var myObj = {};
    var nest = array[i];
    myObj[nest[0]] = nest[1];
    newArr.push(myObj);
  }
  console.log(newArr);
  return newArr;
};

var colors = [
  ["white", "goodness"],
  ["blue", "tranquility"],
];

const assertArrayEquals = (actual, expected, testName) => {
  let actualString = JSON.stringify(actual);
  let expectedString = JSON.stringify(expected);
  let isLengthEqual = actualString.length === expectedString.length;
  var n = actualString.length;

  for (var i = 0; i < n; i++) {
    if (isLengthEqual && actualString[i] === expectedString[i]) {
      return "passed";
    }
  }
  return `Failed [${testName}]. Expected ${expectedString} but got ${actualString}.`;
};

var expectedColor = [{ white: "goodness" }, { blue: "tranquility" }];
var actualColor = colorAssociation(colors);
var testResult = assertArrayEquals(actualColor, expectedColor, "Color Test");
console.log(testResult);

// input: object
// output: object of customers
// takes an object, checks if the customer has a minimum amount of orders at the minimum price
// plan: create a new object that filters out the price less than the minimum price in the object's key array

let customersObj = {
  Batman: [22, 30, 11, 17, 15, 52, 27, 12],
  "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
};

const pizzaPoints = (obj, minOrder, minPrice) => {
  var newObj = {};
  var customers = [];
  for (var key in obj) {
    // filter out the price lower than minimum price
    if (Array.isArray(obj[key])) {
      newObj[key] = obj[key].filter((element) => element >= minPrice);
    }
  }
  for (var key in newObj) {
    if (newObj[key].length >= minOrder) {
      customers.push(key);
    }
  }
  return customers;
};

var actualPizza = pizzaPoints(customersObj, 5, 100);
console.log(actualPizza);

// input: array of objects with questions, choices, and corAnswer as keys
// output: the new key value should be null
// takes the array of objects, initializes a new property userAnswer as null
// plan: add the property in the object

const addPropertyQuestion = (arr) => {
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    var obj = arr[i];
    obj["usersAnswer"] = null;
  }
  return arr;
};

var questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];

var questionProperty = addPropertyQuestion(questions);
console.log(questionProperty);

// input: integer
// output: string array
// takes the integer and checks if it is divisible by 3 and 5

var fizzBuzz = function (n) {
  var strArr = [];
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      strArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      strArr.push("Fizz");
    } else if (i % 5 === 0) {
      strArr.push("Buzz");
    } else {
      strArr.push(`${i}`);
    }
  }
  return strArr;
};

var fizzSample = 5;
console.log(fizzBuzz(15));

// input: array
// output: count of good pairs if nums[i] === nums[j] and i < j
// summary: takes the array, compairs the values and indexes to check if it counts as a good pair
// plan: loop through the array twice to check if there are good pairs
var numIdenticalPairs = function (nums) {
  var n = nums.length;
  var count = 0;

  // loop through array
  for (var i = 0; i < n; i++) {
    // nest loop the array
    for (var j = 0; j < n; j++) {
      // check if num at i index is less than j index and the value at num[i] is the same as value at num[j]
      if (nums[i] === nums[j] && i < j) {
        // increment the count by one if it is true
        count++;
      }
    }
  }
  return count;
};

var numSample = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(numSample));

// input: array of objects
// output: object with state and count
// summary: takes the array of objects, checks if the object has the state property present, returns object
// plan: create a new object with state and count, check in the array of objects if state is present;

function count(addresses) {
  // TODO: Add your code here
  var count = {
    state: "",
    count: 0,
  };

  var n = addresses.length;
  for (var i = 0; i < n; i++) {
    if (addresses[i]["state"] === undefined) {
      return "Needs to have a state";
    }
    count["state"] = addresses[i]["state"];
    count["count"]++;
  }

  return count;
}

var sampleAddress = [
  {
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "AK",
  },
];
console.log(count(sampleAddress));

/*
    Is one string a rotated version of another?
  
  For example:
  String 1: 'hello world'
  String 2: 'orldhello w'
  
  Extra hint: (click the drop down to ROT7 to see hint)
  If you double the string, you'll be to trivially find another string inside it using regular String methods.
  
  Doubled string: 'hello worldhello world'
  Search w/in it: '       orldhello w    '
  */

// input: string
// output: new string
// summary: takes the string, takes portions of the second word and add to the first word
// plan: substring the second word

var rotateWord = (str) => {
  var strArr = str.split(" ");
  var n = strArr.length;
  var newWord = "";

  // loop through array
  for (var i = 0; i < n; i++) {
    if (i === n - 1) {
      var firstChunk = strArr[i].substring(0, 1);
      var secondChunk = strArr[i].substring(1);
      newWord += `${secondChunk}${strArr[0]} ${firstChunk}`;
    }
  }
  return newWord;
};

var testWord = "hello world";
console.log("world".substring(0, 1));
console.log(rotateWord(testWord));

var employeeSample = [
  [
    ["firstName", "Joe"],
    ["lastName", "Blow"],
    ["age", 42],
    ["role", "clerk"],
  ],
];
console.log(employeeSample[0][0][0]);

// input: an array where its nested array has arrays as elements
// output: array of objects
// summary: taking the most nested elements and turns them to key pair object values and returns array of objects
// plan: While doing the loop, create an empty object to store the nested pairs
function transformEmployeeData(employeeData) {
  // your code here

  var n = employeeData.length;
  var newArr = [];
  for (var i = 0; i < n; i++) {
    // get the first nest
    var obj = {};
    var firstNest = employeeData[i];
    var firstLength = firstNest.length;
    for (var j = 0; j < firstLength; j++) {
      obj[firstNest[j][0]] = firstNest[j][1];
    }
    newArr.push(obj);
  }
  return newArr;
}

console.log(transformEmployeeData(employeeSample));

function findShortestElement(arr) {
  // your code here
  if (arr.length === 0) {
    return "";
  }
  var smallest = arr[0];
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    if (arr[i].length < smallest.length) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(findShortestElement(["four", "three", "two", "can"]));

function getLargestElement(arr) {
  // your code here
  return Math.max(...arr);
}

var output = getLargestElement([5, 2, 8, 3]);
console.log(15 % 4); // --> 8;

function doubleLoop() {
  for (let i = 1; i < 5; i *= 2) {
    for (let j = 20; j > 16; j -= 2) {
      console.log(i + j);
    }
  }
}
console.log(doubleLoop());
function sayMyName() {
  let firstName = "ben";
  let middlename = "trong";
  let lastName = "do";
  let middleInitial = middlename.charAt(0);
  return console.log(firstName + middleInitial + lastName);
}
console.log(sayMyName());

var leetTranslator = (str) => {
  let translated = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "o") {
      translated += "0";
    } else if (str.charAt(i) === "e") {
      translated += "3";
    } else {
      translated += str.charAt(i);
    }
  }
  return translated;
};

console.log(leetTranslator("Leet"));

// input: array of arrays
// output: sum of averages
// summary: takes array of arrays, sums up the elements per array and calculates average. Lastly, calculate the total average
// create empty sum variable, add each element, divide it by the length of array, add it to sum of array

const sumAverage = (arr) => {
  var n = arr.length;
  var sumAvg = 0;

  for (var i = 0; i < n; i++) {
    // inner array
    var nest = arr[i];
    var nestLength = nest.length;
    var sum = 0;
    for (var j = 0; j < nestLength; j++) {
      sum += nest[j];
    }
    var avg = sum / nestLength;
    sumAvg += avg;
  }
  return Math.floor(sumAvg);
};

var sampleSumAvg = [
  [3, 4, 1, 3, 5, 1, 4],
  [21, 54, 33, 21, 77],
];
var actualSumAvg = sumAverage(sampleSumAvg);
var expectedSumAvg = 44;

const assertEquals = (actual, expected, testName) => {
  if (actual === expected) {
    return "passed";
  }
  return `Failed [${testName}]. Expected "${expected}" but got "${actual}"`;
};

console.log(assertEquals(actualSumAvg, expectedSumAvg, "Sum Avg Test"));
console.log(actualSumAvg);
console.log(expectedSumAvg);

// input: object
// output: calculated votes on display

const getVoteCount = (obj) => {
  return obj["upvotes"] - obj["downvotes"];
};

var voteObj = {
  upvotes: 13,
  downvotes: 0,
};
var actualVote = getVoteCount(voteObj);
var expectedVote = 13;

console.log(assertEquals(actualVote, expectedVote, "vote test"));

// input: object and number
// output: vodka name
// summary: searches through the object for the value that matches the vodka bottle and returns the name of that bottle
// plan: check if the key has the index of the name Rammstein and if the number matches

const getVodkaBottle = (obj, num) => {
  var vodkaName = "";
  var vodkaObjOnly = {};
  for (var key in obj) {
    if (key.indexOf("Rammstein") > -1) {
      vodkaObjOnly[key] = obj[key];
    }
    console.log(key);
  }
  for (var key in vodkaObjOnly) {
    if (vodkaObjOnly[key] === num) {
      vodkaName = key;
    }
  }
  return vodkaName;
};

var vodkaBottles = { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 };
var expectedVodka = "Rammstein A";
var actualVodka = getVodkaBottle(vodkaBottles, 100);
var vodkaResult = assertEquals(actualVodka, expectedVodka, "Vodka Test");
console.log(vodkaResult);

// input: object with key arrays
// output: array of students who passed
// summary: taking object of students and stores the name of those who passed all their test at 100%
// create an empty to store the 100% passing rate of students

const whoPassed = (obj) => {
  var passingStudents = [];
  for (var key in obj) {
    var keyArr = obj[key];
    console.log(keyArr[0][1]);
  }
  return passingStudents;
};

const studentTestSample = {
  John: ["5/5", "50/50", "10/10", "10/10"],
  Sarah: ["4/8", "50/57", "7/10", "10/18"],
  Adam: ["8/10", "22/25", "3/5", "5/5"],
  Barry: ["3/3", "20/20"],
};

const actualPassing = whoPassed(studentTestSample);
const expectedPassing = ["Barry", "John"];
var studentResult = assertArrayEquals(
  actualPassing,
  expectedPassing,
  "Students Who Passed"
);
console.log(studentResult);

// input: array of fruits
// output: a string where the fruits are sliced in half, sorted alphabetically, and combined as one string
// summary: taking each element to be sliced in half, stores the chunks in a new array, sorts them
// plan: divide the length of each word in half

const fruitSalad = (arr) => {
  var n = arr.length;
  var slicedFruit = [];

  for (var i = 0; i < n; i++) {
    var wordLength = arr[i].length;
    var midWord = Math.ceil(wordLength / 2);
    var firstSlice = arr[i].slice(0, midWord);
    var secondSlice = arr[i].slice(midWord);
    slicedFruit.push(firstSlice);
    slicedFruit.push(secondSlice);
  }
  console.log(slicedFruit);
  slicedFruit.sort();
  return slicedFruit.join("");
};

var fruitSaldArr = ["rasberries", "mango"];
var fruitLength = fruitSaldArr[0].length;
var midWord = Math.floor((fruitLength - 1) / 2);
console.log(fruitSaldArr[0].substring(0, midWord));
console.log(fruitSalad(fruitSaldArr));

// input: string
// output: string without the letters a, b, c
// summary: checks if the string contains letters a, b, and c and replaces them with a space
// plan: use indexOf to check if the letters are present

const removeABC = (str) => {
  var n = str.length;
  if (str.indexOf("a") < 0 && str.indexOf("b") < 0 && str.indexOf("c") < 0) {
    return null;
  }
  var newStr = "";
  for (var i = 0; i < n; i++) {
    if (str[i] === "a" || str[i] === "b" || str[i] === "c") {
      continue;
    }
    newStr += str[i];
  }
  return newStr;
};

console.log(removeABC("This might be a bit hard"));

// input: array
// output: boolean
// summary: compares the last item in array to the preceding items to check if it matches
// plan: slice the array from beginning to end, join the sliced array together and compare it to the last item

const matchLastItem = (arr) => {
  var n = arr.length;
  var slicedCopy = arr.slice(0, n - 1);

  return slicedCopy.join("") === arr[n - 1];
};

var matchSample = [1, 1, 1, "11"];
var matchResult = matchLastItem(matchSample);
console.log(matchResult);

// input: full string and partial string
// output: time it takes to write the remaining characters
const timeToFinish = (full, part) => {
  var fullArr = full.split(" ");
  var partArr = part.split(" ");
  var remainingLength = fullArr.length - partArr.length;
  var remainingCharArr = fullArr.slice(-remainingLength);
  console.log(remainingCharArr);
  var timePerChar = 0.5;
  var charCount = 0;
  for (var i = 0; i < remainingCharArr.length; i++) {
    var wordLength = remainingCharArr[i].length;
    console.log(wordLength);
    charCount += wordLength;
  }
  return timePerChar * charCount;
};

var fullWord = "As a result, my point is still valid.";
var partWord = "As a result, my";
console.log(timeToFinish(fullWord, partWord));

// input: string
// output: boolean
// summary: counts the x and o's in the string, checks if those two letters have the same amount, returns boolean
// plan: create empty count variables for x's and o's, loop through string to check if letter is equal to x or o, increment the count variables
const XO = (str) => {
  str = str.toLowerCase();
  var xCount = 0;
  var oCount = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      xCount++;
    } else if (str[i] === "o") {
      oCount++;
    }
  }
  console.log(xCount);
  console.log(oCount);
  return xCount === oCount;
};

var xoSample = "zpzpzpp";
var xoResult = XO(xoSample);
console.log(xoResult);

// input: array of strings
// output: array of counts
// summary: searches through the array the characters that contain symbol for vegetarian skewer and non-vegetarian skewer
// plan: create empty variable counts, empty array, and loop through array of strings, check if each element has the symbol

const bbqSkewers = (arr) => {
  var vegSkewCount = 0;
  var nonvegSkewCount = 0;
  var n = arr.length;

  // loop through array
  for (var i = 0; i < n; i++) {
    // get current element string length
    if (arr[i].includes("-o")) {
      vegSkewCount++;
    }
    if (arr[i].includes("-x")) {
      nonvegSkewCount++;
    }
  }
  return [vegSkewCount, nonvegSkewCount];
};

var bbqSkewSample = [
  "--oooo-ooo--",
  "--xx--x--xx--",
  "--o---o--oo--",
  "--xx--x--ox--",
  "--xx--x--ox--",
];

const bbqSkewResult = bbqSkewers(bbqSkewSample);
console.log(bbqSkewResult);

// input: name
// output: reversed name
// summary: takes the original name, replaces it with the last name going first and first name going last
// plan: split the name into array, and use the reverse method to flip the elements
const nameShuffler = (name) => {
  var nameArr = name.split(" ");
  nameArr.reverse();

  return nameArr.join(" ");
};

var nameSample = "ben Do";
const nameShuffleResult = nameShuffler(nameSample);
console.log(nameShuffleResult);

// input: array,  and the element value to be removed
// output: the array with remaining values
// summary: checks if the array has the value to be removed and returns a new array with remaining values
// plan: create an empty array variable, loop through the array to check if the element is equal to the listed value, and exclude it from the new array

const arrayDiff = (a, b) => {
  var n = a.length;
  var newArr = [];
  if (b.length === 0) {
    return a;
  }

  // loop through array
  for (var i = 0; i < n; i++) {
    if (a[i] !== b[i]) {
      newArr.push(a[i]);
    }
  }
  return newArr;
};

var sampleArrDiff = [1, 2, 2];
const sampleArrDiffResult = arrayDiff(sampleArrDiff, [2]);
console.log(sampleArrDiffResult);

// input: object
// output: a string with facts about the city
// summary: takes the properties from the object and writes facts about it using the key values in a sentence
// plan: use the keys in the object to write as a string interpolation for the sentence

const cityFacts = (obj) => {
  return `${obj["name"]} has a population of ${obj["population"]} and is situated in ${obj["continent"]}`;
};

var citySample = {
  name: "Paris",
  population: "2,140,526",
  continent: "Europe",
};

console.log(cityFacts(citySample));

// input: string
// output: boolean
// summary: check if the given string has spaces and return the appropriate boolean value
// plan: use indexOf to check for spaces

const hasSpaces = (str) => {
  if (str.indexOf(" ") > -1) {
    return true;
  }
  return false;
};

var spaceSample = "";
console.log(hasSpaces(spaceSample));

const ascDesNone = (arr, order) => {
  if (order === "Asc") {
    arr.sort(function (a, b) {
      return a - b;
    });
  } else if (order === "Des") {
    arr.sort(function (a, b) {
      return b - a;
    });
  } else if (order === "None") {
    arr;
  }
  return arr;
};

var sortArrSample = [1, 2, 3, 4];
var sortResult = ascDesNone(sortArrSample, "None");
console.log(sortResult);

// input: array of numbers
// output: maximum sum of 5 elements from the array
// summary: takes the array, sorts it in descending order to get the max sum of 5 elements
// plan: use sort to sort in descending order
const maxTotal = (arr) => {
  arr.sort(function (a, b) {
    return b - a;
  });
  var sum = 0;
  for (var i = 0; i < 5; i++) {
    sum += arr[i];
  }
  return sum;
};

var maxSample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(maxTotal(maxSample));

// input: number
// output: sum from a single number
// summary: adds up to the number starting from 1
// plan: create an empty sum variable to add to the number coming from loop

const addUp = (num) => {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

var addupSample = 600;
var actualAddUp = addUp(addupSample);
var expectedAddUp = 180300;
const addUpTestRes = assertEquals(actualAddUp, expectedAddUp, "Add Up Test");
console.log(addUpTestRes);

var numberStr = "1 2 3 -5";
var numbStrArr = numberStr.split(" ");
console.log(Number(numbStrArr[3]));

// input: array of numbers
// output: array of even numbers
// summary: take the array and filter out non even numbers
// plan: loop through array to check if index and elements are both even

const getOnlyEvens = (numArr) => {
  var n = numArr.length;
  var evenOnly = [];
  for (var i = 0; i < n; i++) {
    if (i % 2 === 0 && numArr[i] % 2 === 0) {
      evenOnly.push(numArr[i]);
    }
  }
  return evenOnly;
};

var sampleEvens = [1, 3, 2, 6, 4, 8];
console.log(getOnlyEvens(sampleEvens));

// input: object
// output: array of arrays
// summary: takes the key pair values and converts to array of arrays
// plan: use Object.entries to turn them into arrays

const toArray = (obj) => {
  return Object.entries(obj);
};

var sampleToArray = { a: 1, b: 2 };
var actualToArray = toArray(sampleToArray);
var expectedToArray = [
  ["a", 1],
  ["b", 2],
];
var toArrayTest = assertArrayEquals(
  actualToArray,
  expectedToArray,
  "To Array Test"
);
console.log(toArrayTest);

// input: object
// output: inverted object
// summary: takes the key and the value and switches place for the output
// plan: Create new empty object, loop through the object to assign the value as key in the new object and vice versa

const invert = (obj) => {
  var newObj = {};
  for (var key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
};

var sampleInvert = { z: "q", w: "f" };
console.log(invert(sampleInvert));

// input: string with vowels in it
// output: string without vowels
// summary: takes in the orignal string and filters out the vowels for the new string
// plan: create an empty string variable, loop through string to check if it equals the vowels, and add the remaining characters to new string

const shortcut = (word) => {
  var n = word.length;
  var newStr = "";
  // loop through string
  for (var i = 0; i < n; i++) {
    // if string equals these vowels
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "o" ||
      word[i] === "i" ||
      word[i] === "u"
    ) {
      // continue
      continue;
    }
    // otherwise
    // add remaining characters to new string
    newStr += word[i];
  }
  return newStr;
};

var sampleShortcut = "codewars";
var expectedShortcut = "cdwrs";
var actualShortcut = shortcut(sampleShortcut);
var shortcutTest = assertEquals(
  actualShortcut,
  expectedShortcut,
  "Shortcut Test"
);
console.log(shortcutTest);

// input: string of word
// output: string of parentheses
// summary: takes the word, counts the occurences of each letter, and replaces them with either right or left parentheses
// plan: create an object where the key is the character and the value is the count, create an empty string variable, and loop through object to check if the occurence of each character is 1

const duplicateEncoder = (word) => {
  var n = word.length;
  var letterObj = {};

  // loop through word
  for (var i = 0; i < n; i++) {
    if (letterObj[word[i]] === undefined) {
      letterObj[word[i]] = 1;
    } else {
      letterObj[word[i]]++;
    }
  }

  // loop through object
  var newStr = "";
  for (var key in letterObj) {
    if (letterObj[key] === 1) {
      newStr += "(";
    } else if (letterObj[key] > 1) {
      newStr += ")";
    }
  }
  console.log(letterObj);
  return newStr;
};

var dupEncSample = "recede";
var expectedDupEnc = "()()()";
var actualDupEnc = duplicateEncoder(dupEncSample);
var dupEncTest = assertEquals(
  actualDupEnc,
  expectedDupEnc,
  "Duplicate Encoder Test"
);
console.log(dupEncTest);

const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

// input: String of name
// output: String that tells you how good the name is
// summary: takes the name, checks the score of each letter, and totals up the score evaluate how good the name is
// plan: loop through the scores object, loop through the input to check if it is equal to key, and sum it up

const nameScore = (name) => {
  var n = name.length;
  var scoreTotal = 0;
  for (var key in scores) {
    for (var i = 0; i < n; i++) {
      if (name[i] === key) {
        scoreTotal += scores[key];
      }
    }
  }

  if (scoreTotal <= 60) {
    return "NOT TOO GOOD";
  } else if (scoreTotal >= 61 && scoreTotal <= 300) {
    return "PRETTY GOOD";
  } else if (scoreTotal >= 301 && scoreTotal <= 599) {
    return "VERY GOOD";
  } else {
    return "THE BEST";
  }
};

var nameScoreSample = "MUBASHIR";
var expectedScore = "THE BEST";
var actualScore = nameScore(nameScoreSample);
var scoreTest = assertEquals(actualScore, expectedScore, "Name Score Test");
console.log(scoreTest);
