const name = 'frank'

// functions

const greet = () => 'hello';

let resultOne = greet();

console.log(resultOne)

// methods

let resultTwo = name.toUpperCase();
console.log(resultTwo)

// section two 

// call backs & foreach

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};


myFunc((value) => {

    console.log(value)

});


let people = ['mario', 'lulgi', 'ryu', 'shaun', 'chun-li'];

people.forEach(function(person, index){
console.log(person, index)
});

console.log(['mary'])
console.log(people)

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);