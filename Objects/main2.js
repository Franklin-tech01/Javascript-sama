// adding methods to our objects

const user = {
    name: 'Franklin',
    age: 19,
    email: 'franklinmike2021@gmail.com',
    location: 'Localhost:3000',
    // blog: ['why react is better than vue', 'why you need to use github as a tech bro'],
    blog: [
        {
            title: 'why react is better than vue',
            likes: 30
        },
    
        {
            title: 'why you need to use github as a tech bro',
            likes: 50
        }
    ],
    // creating a method inside an object
    login: function () {
        console.log("user is loggedin")
    },
    logout: function () {
        console.log("User is logged out")
    },
    logBlogs: function () {
        //   console.log(this.blog)
        console.log(`${user.name} has written these blogs:`)
        this.blog.forEach(blogs => {
            console.log(blogs.title, blogs.likes,"💖")
        });
    }
};

// console.log(user) 
// user.login();
// user.logout();
user.logBlogs();

// using objects as arrays 

const blogx = [
    {
        title: 'why react is better than vue',
        likes: 30
    },

    {
        title: 'why you need to use github as a tech bro',
        likes: 50
    }
    
]

function chkblog(name){
    console.log(`${name}`)
}

// console.log(blogx.title)
chkblog(blogx)