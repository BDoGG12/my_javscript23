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
    var sliced = str.slice(1);
    console.log(str.replace(str.charAt(0), 'm'));
    return res;
  }
  
  var testStr = 'jellow';
  var testChar = 'm';

  console.log('basic3: ', replaceChar(testStr, testChar)); // ==> 'mellow'
