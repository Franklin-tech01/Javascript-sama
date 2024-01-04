// dom manipulation

// creating elements

const ul = document.querySelector('ul')
const li = document.createElement('li')

// adding elements

ul.append(li) //adds li into ul

// Modifying the texts

li.innerText = 'one piece';


//  Modifying Attribute and classes


// attributes
li.setAttribute('id','main-heading');
li.removeAttribute('id');

// getting Attribute in javascript

const title = document.querySelector('#main-heading');

console.log(title.getAttribute('id'));

// classes

li.classList.remove('list-items')

console.log(li.classList.contains('list-items'))

// Remove Elements

li.remove();