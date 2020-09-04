// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const boilPoint = (num) => {
  if(typeof num === "number"){
    if(num < 212){
      return `${ num } is below boiling point`;
    }
    else if(num > 212){
      return `${ num } is above boiling point`;
    }
    else if(num === 212){
      return `${ num } is above boiling point`;
    }
  }
  else {
    return `Please input a number`;
  }
}

var temp1 = 35
var temp2 = 350
var temp3 = 212

//Tests
console.log( boilPoint(temp1));
console.log(boilPoint(temp2));
console.log(boilPoint(temp3));
console.log(boilPoint("banana"), "\n");


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

const multBy5 = (array) => {
let newArr = []
  for(let i = 0; i < array.length; i++){
    newArr.push(array[i] * 5);
  }
  return newArr
}

var myNumbers1 = [3, 7, 0, 6, -9]

// Test
console.log(multBy5(myNumbers1), "\n");

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

const map5 = (array) => {
  return array.map(value => value * 5);
}

var myNumbers2 = [8, -7, 0, 6, 2]

// Test
console.log(map5(myNumbers2), "\n");

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

const byeVowels = (string) => {
  let newArr = string.split("")
  let filteredArr = newArr.filter(value => {
    return value.toLowerCase() !== "a" && value.toLowerCase() !== "e" && value.toLowerCase() !== "i" && value.toLowerCase() !== "o" && value.toLowerCase() !== "u"
  })
  return filteredArr.join("")
}

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// Tests
console.log(byeVowels(stringWithVowels1));
console.log(byeVowels(stringWithVowels2), "\n");

// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

const betterByeVowels = (string) => {
  if(typeof string === "string"){
    return string.replace(/[aeiou]/ig, "")
  }
  else {
    return `${ string } is not a string`
  }
}

var notAString1 = true
var notAString2 = 42

//Tests
console.log(betterByeVowels(stringWithVowels1));
console.log(betterByeVowels(stringWithVowels2));
console.log(betterByeVowels(notAString1));
console.log(betterByeVowels(notAString2), "\n");

// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

const onlyCats = (array) => {
  return array.filter(value => value.animal === "cat")
}

var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }]

// Test
console.log(onlyCats(toonimals), "\n");

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

const nonCats = (array) => {
  let filteredArr = array.filter(value => value.animal !== "cat")
  return filteredArr.map(value => value.name)
}

//Test
console.log(nonCats(toonimals), "\n");
