// break and continue js

let scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    console.log('your score is', scores[i]);

    if (scores[i] === 0) {
        break
    }

    if (scores[i] === 100) {
        console.log("Hello")
        break
    }
}