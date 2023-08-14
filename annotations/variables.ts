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
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x:10, y: 20};