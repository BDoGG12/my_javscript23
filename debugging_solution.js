function concatMe(name) {
    return `${name}, hello`;
  }

  var person = 'Josh'
  console.log('basic1: ', concatMe(person));

  function restOfStr(str, char) {
      console.log(str.indexOf(char));
    return str.slice(str.indexOf(char));
  }
  
  var str1 = 'hello';
  var char1 = 'e';
  console.log('basic2: ', restOfStr(str1, char1)); //==> 'ello' 

  function replaceChar(str, char) {
    return str.replace(str.charAt(0), 'm');
  }
  
  var testStr = 'jellow';
  var testChar = 'm';

  console.log('basic3: ', replaceChar(testStr, testChar)); // ==> 'mellow'

  function combineStr(str1, str2, index) {
    var beginning = str1.slice(index);
    console.log(beginning);
    var end = str2.slice(0, index + 1);
    console.log(end);
    console.log(index);
    console.log(beginning + end);
    return beginning + end;    
  }
  
  console.log('basic4a: ', combineStr('telemed', 'icinemedia', 4)); //==> 'medicine'

  function doubleChar(str) {
    // var answer = [];
    // for(var i = 0; i < str.length; i ++){
    //   answer.push(str[i]);
    //   answer.push(str[i]);
    // }
    // return answer.join('');
    
    return str.split('').map(c => c + c).join('');
  }
  
  console.log(doubleChar("Hello World!")); //==> HHeelllloo  WWoorrlldd!!"

  function addProperty(obj, key, val) {
      console.log(obj);
      console.log(key);
      console.log(val);
    if (obj[key] === undefined) {
      obj[key] = val;
    } else {
        console.log('It is already defined');
    }
    console.log(obj);
    return obj;
  }

  function assertObj(actual, expected) {
    var length = Object.keys(actual).length === Object.keys(expected).length;
    if (length === false) {
      return 'failed';
    }
    for (var key in actual) {
      if (actual[key] !== expected[key]) {
        return 'failed'
      }
    }
    return 'passed';
  }

  var testObj1 = {
    a: 'bee',
    c: 'deli',
    f: 'guard',
  }

  var accessArr = [
    {key1: 'Hello'},
    {key2: 'Thoughts'},
    {weird: 'these clothes'},
    {time: 'get a watch'},
  ];
  
  
function findIndex(arr, key){
    var index = 0;
    for (var i = 0; i < arr.length; i ++) {
      if (arr[i][key]) {
          index = i;
        break;
      }
      
    }
    return index;
  }
  
  console.log('basic 7: ', findIndex(accessArr, 'weird')); //==> 2

  var objOfStr = {
    key1: 'My ',
    key2: 'You ',
    key3: 'dog ',
    key4: 'are ',
    key5: 'loves ',
    key6: 'a ',
    key7: 'bones.',
    key8: 'wonderful person.',
  }
  
  var arrOfKeys1 = ['key1', 'key2', 'key3', 'key4', 'key5', 'key6', 'key7', 'key8'];
  
  var arrOfKeys2 = ['key2', 'key1', 'key4', 'key3', 'key6', 'key5', 'key8', 'key7'];
  
  function findValues(obj, arr) {
    var str = '';
    for (var i = 0; i < arr.length; i+=2) {
      str += obj[arr[i]];
    }
    return str;
  }
  
  console.log('basic 8a: ', findValues(objOfStr, arrOfKeys1)); //==> 'My dog loves bones.'
  console.log('basic 8b: ', findValues(objOfStr, arrOfKeys2)); //==> 'You are a wonderful person.'

  var wordArr = [
    'aim',
    'tail',
    'series',
    'kitten',
    'fruit',
    'paper',
  ]
  
  function indexes(arr, char) {
    var indexOfChar = [];
    
    for (var i = 0; i < arr.length; i ++) {
        var ind = arr[i].indexOf(char);
        console.log(ind);
      if (ind !== -1) {
        indexOfChar.push(ind);
      } else {
        indexOfChar.push('none');
      }
    }
    console.log(indexOfChar);
    return indexOfChar;
  }

actualInd1 = indexes(wordArr, 'a');
console.log(actualInd1);
expectedInd1 = [0, 1, 'none', 'none', 'none', 1];

console.log('basic 9a: ', assertArrEquals(actualInd1, expectedInd1));

function assertArrEquals(actual, expected) {
    if (actual.length !== expected.length) {
      return 'failed';
    }
    for (var i = 0; i < actual.length; i ++) {
      if (actual[i] !== expected[i]) {
        return 'failed';
      }
    }
    return 'passed';
  }

  function evenOddTransform(arr, n) {
	for (var i = 0; i < arr.length; i++) {
		for (var y = 0; y < n; y ++) {
			if ((arr[i] % 2 !==0)) {
				arr[i] += 2;
			} else {
				arr[i] -= 2;
			}
		}
	}
	return arr;
}

console.log('evendOddTransform1: ', evenOddTransform([0, 0, 0], 10)); //==> [-20, -20, -20]

function removeMiddle(str) {

    if (!str.length % 2 || str.length < 4) {
      return 'invalid input'
    }
  //angels
    var first = (str.length)/2 - 1;
    var second = str.lengh/2;
  
    var resStr = '';
  
    for  (var i = 0; i < str.length; i ++) {
      if (i !== first && i !== second) {
        console.log('str[i]', str[i], i)
        resStr += str[i];
      }
      // if (i !== second) {
      //   resStr += str[i]
      // }
    }
  
    return resStr;
  }
  
  console.log('intermediate 1a: ', removeMiddle('angels')); // ==> 'anls';

  function removeMiddle(str) {

    if (str.length % 2 !== 0 || str.length < 4) {
      return 'invalid input'
    }
  //angels
    var first = (str.length/2) - 1;
    var second = str.length/2;
  
    var resStr = '';
  
    for  (var i = 0; i < str.length; i ++) {
      if (i !== first && i !== second) {
        console.log('str[i]', str[i], i)
        resStr += str[i];
      }
      // if (i !== second) {
      //   resStr += str[i]
      // }
    }
  
    return resStr;
  }
  
  console.log('intermediate 1a: ', removeMiddle('angels')); // ==> 'anls';

  console.log('intermediate 1b:', removeMiddle('hotel')); //==> 'invalid input'

  console.log('intermediate 1c: ', removeMiddle('at')); //  ==> 'invalid input'

 

  var stoneSkips = [{stone1: 1}, {stone2: 1}, {stone1: 'plop' }, {stone2: 2}, {stone2: 'plop'}];

var stoneSkips2 = [{stone1:'plop'}, {stone2:'plop'}];

var stoneSkips3 =  [{stone1: 1}, {stone2: 1}, {stone2: 2}, {stone2: 'plop'},{stone1: 2}, {stone1: 3}, {stone1: 'plop'}];

function skippingStones(arr) {

    if (arr.length <= 2) {
      return ['tie', 0];
    }
  
    var countSkips = 0;
    var stone = 'stone1';
  
    for (var i = 0; i < arr.length; i ++) {
      if (arr[i].stone1 && arr[i].stone1 !== 'plop') {
        stone = 'stone1';
        countSkips = arr[i].stone1;
      } else if (arr[i].stone2 && arr[i].stone2 !== 'plop') {
        stone = 'stone2';
        countSkips = arr[i].stone2;
      } 
    }
    console.log([stone, countSkips]);
    return [stone, countSkips];
  }
  


var actualStones = skippingStones(stoneSkips);
console.log(actualStones);
var expectedStones = ['stone2', 2];

var actualStones2 = skippingStones(stoneSkips2);
var expectedStones2 = ['tie', 0];

var actualStones3 = skippingStones(stoneSkips3);
var expectedStones3 = ['stone1', 3];

//*The assert function works! Don't need to debug it */
var assertStones = function (actual, expected) {
  return JSON.stringify(actual) === JSON.stringify(expected);
}

console.log('intermediat 2a: ', assertStones(actualStones, expectedStones));

console.log('intermediat 2b: ', assertStones(actualStones2, expectedStones2));

console.log('intermediate 2c: ', assertStones(actualStones3, expectedStones3));

function countBoomerangs(arr) {
	let count = 0;
	for (let i = 0; i < arr.length ; i++) {
		if (arr[i] === arr[i + 2] && arr[i + 1] !== arr[i]) {
			count ++;
		}
	}
    console.log(count);
	return count;
}

var assertEqual = function(actual, expected) {
  if(actual === expected) {
    return 'passed';
  } else {
    return 'failed';
  }
}

var actual1 = countBoomerangs([9, 5, 9, 5, 1, 1, 1]);
console.log(actual1);
var expected1 = 2;

var actual2 = countBoomerangs([5, 6, 6, 7, 6, 3, 9]);
var expected2 = 1;

console.log('assert1: ', assertEqual(actual1, expected1));
console.log('assert2: ', assertEqual(actual2, expected2));

function oldest(people) {
	var oldest;
    var maxAge = 0;
	for (var key in people) {
		if (people[key] > maxAge) {
            maxAge = people[key];
            oldest = key;
        }
	}
    console.log(oldest);
	return oldest;
}

var ex1 = {
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29
};  // ➞ "Emma"

var ex2 = {
  Max: 9,
  Josh: 13,
  Sam: 48,
  Anne: 33
} // ➞ "Sam"


// //////assertFunction
var assertOldest = function(actual, expected) {
  if(actual === expected) {
    return 'passed';
  } else {
    return 'failed';
  }
}

///////running the tests
console.log('assertOldest1: ', assertOldest(oldest({
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29,
}), 'Emma'));

console.log('assertOldest1: ', assertOldest(oldest({
  Max: 9,
  Josh: 13,
  Sam: 48,
  Anne: 33,
}), 'Sam'));



console.log(oldest({
    Max: 9,
    Josh: 13,
    Sam: 48,
    Anne: 33,
  }));