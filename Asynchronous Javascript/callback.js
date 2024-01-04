// const posts = [
//     {title : 'Post One', body: ' This is post one'},
//     {title : 'Post Two', body: ' This is post two'}
// ];

const btn = document.getElementById("btn");
btn.addEventListener("click", getPosts);

function getPosts(e) {
  e.preventDefault();
  fetch("post.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let output = " ";
      data.forEach(function (post, index) {
        output += `
                <ul>
                  <li>${index}${post.title}</li>
                  <li>${post.body}</li>
                </ul>
                `;
      });
      console.log(output);
      document.getElementById("post").innerHTML = output;
    });
}

// function creatPost(post, callback ){
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// creatPost({title: 'Post Three', body: 'This is post three'}, getPosts);
