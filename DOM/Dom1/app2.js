// dom manipulation


// styling elements

const title = document.querySelector("#main-heading");

title.style.color = "yellow";

console.log(title);

function changeColor() {
  const change = document.getElementById("list");
    
  change.style.color = "red";
}

const listItems = document.querySelectorAll('.list-items');

console.log(listItems)


// loop through the array of list items to get  the font applied for inline lements

for (let i = 0; i  < listItems.length; i++) {
  listItems[i].style.fontSize = '1.4rem'
}


changeColor()