// math objects

console.log(Math);
console.log(Math.PI);
console.log(Math.E)

const area = 7.7;
console.log(Math.round(area));//round up the number
console.log(Math.floor(area));//floors the number
console.log(Math.ceil(area));//rounds up the number but to the top e.g 5.1 => 6
console.log(Math.trunc(area));//returns the integer part of a number removes the decimal


// Random Numbers

const randomNums = Math.random();

console.log(randomNums);
console.log(Math.round(randomNums * 100))