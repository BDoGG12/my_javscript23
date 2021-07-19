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

// input: array of objects
// output: name of the wine
// summary: takes the array of objects, filter out the cheapest wine of them all, and looks for the next cheapest to be the second cheapest
// plan: find the first minimum to filter out, and store the rest of the elements of object to a new array

const chosenWine = (wines) => {
  if (wines.length === 0) {
    return null;
  }

  var n = wines.length;
  var cheapest = wines[0]["price"];
  var newWines = [];
  for (var i = 0; i < n; i++) {
    if (wines[i]["price"] < cheapest) {
      cheapest = wines[i]["price"];
      console.log(wines[i]["name"]);
    }
    newWines.push(wines[i]);
  }
  return newWines;
};
