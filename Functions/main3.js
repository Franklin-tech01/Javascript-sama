// // returning value

const calcArea = function(radius){
    let area = 3.14 * radius**2

    // console.log(area)
    return area
}

const area = calcArea(5)

console.log(area)

// const area = radius => 3.14 *  radius**2 

// console.log(area(5));

const greet = () =>  {
    return ' hello, world '
}

const result = greet();

console.log(result)

function popUp(messaage) {
    alert(messaage);
}