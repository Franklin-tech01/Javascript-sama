// Object Literals

const user = {
    name: 'Franklin',
    age: 19,
    email: 'franklinmike2021@gmail.com',
    location: 'Localhost:3000',
    blog: ['why react is better than vue', 'why you need to use github as a tech bro']
};

console.log(typeof(user))
console.log(user)

console.log(user.name)
console.log(user['email'])

const key = 'blog'
console.log(user[key])