// code to make make people leave the room based on how high or low thier IQ is

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


getRandomNumber(100, 400)


const users = [
    {
        name: 'utibe',
        iq: getRandomNumber(100, 400)
    },
    {
        name: 'daniel',
        iq: getRandomNumber(100, 400)
    },
    {
        name: 'femi',
        iq: getRandomNumber(100, 400)
    }
]



function leaveRoom() {
    users.sort((a, b) => a.iq - b.iq);

    for (const user of users) {
        console.log(user.name, 'Left the Room', user.iq)
    }
}

leaveRoom();


        // const sortedUsers = copy_users.sort((a, b) => a.iq - b.iq);
    // const copy_users = users.slice();