// else if statement
// 2 logical operators = OR || and AND &&
const password = 'p@ss'

if (password.length >= 12 && password.includes("@")) {
    console.log("That password is mighty strong")
} else if (password.length >= 8 || password.includes("@")) {
    console.log("That password is long enough")
} else {
    console.log("password is not long enough")
}
