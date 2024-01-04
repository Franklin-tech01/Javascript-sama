let welcomeEl = document.getElementById("welcome-el")

let name = "Franklin"
let greeting = "Welcome back!"

welcomeEl.innerText = greeting + name

function addEmoji(){
    // let emogi = "👋"
    let  welcome =greeting + name + ("👋")
    welcomeEl.innerText = welcome

}

addEmoji()

// welcomeEl.innerText += "👋"