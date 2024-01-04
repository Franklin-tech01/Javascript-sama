 // template string
 const title = 'Best reads of 2023';
 const author = 'Franklin';
 const likes = 30;

 // concatenation way
 let results = "the blog called " + title + " by " + author + " has " + likes + " likes<br>";
 document.write(results)

 // template string way
 let result = ` the blog called ${title}  by ${author} has ${likes} likes <br>`
 document.write(result)

 // creating html  templates

 let html = `
  
 <h2>${title}</h2>
 <p>${author}</p>
 <span> This blog has ${likes} likes.</span>
 
 `;
 console.log(html);
 document.write(html);