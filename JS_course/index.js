 let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

//1. create a function, named save()which logsout the count when it's called
function save() {
    let save = count + " - "
    saveEL.textContent += save
    countEl.innerText = 0
    count = 0
    console.log(count)
}  