const  apples: number = 5;
// in this example, the apples const is being 
// annotated with number primitive and given 5 as the value

// const apples: number = true would give an error because number is its own primitive

let oranges = 3;

oranges = 'hello world';
// in this example, oranges is again annotated with number but using the 'let' keyword
// allows us to change its value
// again, trying to assign a new value that does not  alignn with the original primitive
// will give an error

// null and undefined examples
let nothing: null = null;
let nothingElse: undefined = undefined;

// built in objects
let past: Date = new Date();

// Array assignment with type anotated for the array
let colors: string[] = ['red', 'green', 'blue'];
let truths: boolean[] = [true, true, false];
const logNumber = (i: number) =>  {
  console.log(i);
};
};
let car: Car = new Car();

// Object literal, the prop types are dictated at the initial declaration
// in this example, the x and y prop must be of type number
let point: {x: number; y: number} = {
  x: 10,
  y: 20
};

// Function
const logNumber = (i: number) =>  {
  console.log(i);
};

// Function with type annotation for return value and inputs
const logNumber1: (i: number) => void = (i:number) => {
  console.log(i);
};

// When to use annotations
// 1) Functions that return the 'any' type
// JSON.parse returns type any due to not knowing but what will come
// back in a response
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x:10, y: 20};

// Let's  fix up the above example with an annotation
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y:  number}= JSON.parse(json);
console.log(coordinates); // {x:10, y: 20};
// const.blahblahblah will throw an error due to tthe x & y prop annotations

// When to use annotations
// 2) When we declare a var but initialize it later
let words = ['red', 'blue', 'green']
let foundWord: boolean;


for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// When to use annotations
// 3) Variable whose type cannot be inferred correctly
// The pipe symbol can give an or conditional to the var if needed
// This is not same as using || in loops
let numbers = [-10, 1, 11]
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  };
};

