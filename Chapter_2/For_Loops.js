// for loops 

// for (let i = 0; i < 5; i++) {
//    console.log("In Loop:", i) 
//    document.write("<br>In Loop:", i) 
// }

// console.log("Loop finished")

const names = ["Franklin", "Christabel", "Destiny"]

for (let i = 0; i < names.length; i++) {
    console.log(i)
    console.log(names[i])
    let html = `<div>${names[i]}</div>` ;
    console.log(html)
}