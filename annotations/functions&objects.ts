// Like variables, functions can be annotated or inferred

// Annotations will tell Typescript what type of arg and
// type of return value a function will have

// Inferrence for funcs only works for the return value in TS


// Function with type annotation for return value and inputs
const logNumber1: (i: number) => void = (i:number) => {
  console.log(i);
};

//  This example shows the func taking in two params
// with type number and a return value of type  number
const add = (a: number, b: number): number => {
  return a + b;
};


// Below, the two examples show a return value dictated
// by an annotation and withou one
// The difference is the inferred return can be a wildcard
// if not handled in the func definitition with annotations
const add1 = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  a - b;
}

// Some ways to declare funcs with annotations
// Anonymous funcs  have a var beforehand
function divide(a: number, b: number): number {
  return a / b;
}

const multiple = function(a: number, b: number): number {
  return a*b;
};

// Annonymouse func with void return type
const logger = (message: string): void => {
  console.log(message);
};

// Error throws can use the never return type
// which indicates we're exiting the process early
// This is a rare case to use never, usually we'd return
// some message as a warning
const throwError = (message: string): never => {
  throw new Error(message);
};

const throwError1 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message
};


// Here we can see a func definition with annotations and
// using it with the todaysWeather object
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: {date: Date, weather: string}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWeather);

// We can deconstruct the func definition inputs to make
// properties more easily accessible
// Here we remove 'forecast' and minimize the func to the two desired params
// before the annotations
const todaysWeather1 = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather1 = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
};

logWeather1(todaysWeather1);