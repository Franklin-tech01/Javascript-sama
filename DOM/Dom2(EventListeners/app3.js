// DOM manipulation

  
// Event Delegation

/* It allows users to append a SINGLE event listener to a parent element that adds it to all of its
present AND future descendant that matchs a selector */


document.querySelector('#sports').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + ' is clicked')

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightGrey'
    }
}) 

const sports = document.querySelector('#sports')
const newSports = document.createElement('li')

newSports.innerText = 'Wrestling'
newSports.setAttribute('id', 'Wrestling')

sports.appendChild(newSports)