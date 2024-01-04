const ul = document.querySelector(".people");

const people = ['mario', 'lulgi', 'ryu', 'shaun', 'chun-li'];


let html = ``;

people.forEach(function (person) {
    // create Html template
    html += `<li style="color: purple">${person}</li>`
});

console.log(html);
ul .innerHTML = html;