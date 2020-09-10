// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

// describe("addThemUp", () => {
//   test("returns the sum of two number arguments", () => {
//     expect(addThemUp(5, 7)).toEqual(12)
//     expect(addThemUp(8, 2)).toEqual(10)
//     expect(addThemUp(10, 15)).toEqual(25)
//     expect(addThemUp("banana")).toEqual("Please input a number")
//   })
// })

// --------------------1b) See the test fail. THEN write the code to make the test pass.

describe("addThemUp", () => {
  test("returns the sum of two number arguments", () => {
    expect(addThemUp(5, 7)).toEqual(12)
    expect(addThemUp(8, 2)).toEqual(10)
    expect(addThemUp(10, 15)).toEqual(25)
    expect(addThemUp("banana")).toEqual("Please input a number")
  })
})

const addThemUp = (num1, num2) => {
  if(typeof num1 === "number" && typeof num2 === "number"){
    return num1 + num2;
  }
  else {
    return `Please input a number`;
  }
}

// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

// describe("triangleArea", () => {
//   test("takes the base and the height of a triange and returns the area", () => {
//     expect(triangleArea(3, 4)).toEqual(6)
//     expect(triangleArea(6, 9)).toEqual(27)
//     expect(triangleArea(12, 16)).toEqual(96)
//     expect(triangleArea("banana")).toEqual("Please input a base and height")
//   })
// })

// --------------------2b) See the test fail. THEN write the code to make the test pass.

describe("triangleArea", () => {
  test("takes the base and the height of a triange and returns the area", () => {
    expect(triangleArea(3, 4)).toEqual(6)
    expect(triangleArea(6, 9)).toEqual(27)
    expect(triangleArea(12, 16)).toEqual(96)
    expect(triangleArea("banana")).toEqual("Please input a base and height")
  })
})

const triangleArea = (num1, num2) => {
  if(typeof num1 === "number" && typeof num2 === "number"){
    return num1 * num2 / 2;
  }
  else {
    return `Please input a base and height`;
  }
}
