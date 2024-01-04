// primitive value

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

// refernce value

const userOne = {name: 'franklin', age: 19}
const userTwo = userOne;

console.log(userOne, userTwo)

userOne.age = 20;
console.log(userOne, userTwo)
