const bill = (product, tax) => {

    let total = 0;
    for (let i = 0; i < product.length; i++) {
        total += product[i] + product[i] * tax;
    }
    return total;
}

console.log(bill([10, 15, 30], [0.2]))


// function fillCity() {
//     var cityName;
//     var zipEntered = document.getElementById("zip").value;
//     switch (zipEntered) {
//         case "60608":
//             cityName = "Chicago";
//             break;
//         case "68114":
//             cityName = "Omaha";
//             break
//         case "53212":
//             cityName = "Milwaukee";
//         default:
//             break;
//     }
//     document.getElementById("city").value = cityName;
// }
function greet(who) {
    console.log(`hello ${who}`)
}

greet("UB")
console.log("bye")