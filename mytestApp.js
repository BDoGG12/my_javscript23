"use strict";

// let inputString = document.querySelector();
// console.log("test app");
// console.log(inputString);

function submit_press() {
  var myValue = document.getElementById("input");
  var outputValue = document.getElementById("output");
  var inputArr = myValue.value.split("");
  const results = inputArr.filter(
    (vowel) =>
      vowel === "e" ||
      vowel === "a" ||
      vowel === "o" ||
      vowel === "i" ||
      vowel === "u"
  );
  console.log(results);
  outputValue.value = results;
}
