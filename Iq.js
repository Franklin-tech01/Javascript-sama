// code to make make people leave the room based on how high or low thier IQ is



const users = [
    {
        name: 'utibe',
        iq: 245
    },
    {
        name: 'daniel',
        iq: 321
    },
    {
        name: 'femi',
        iq: 212
    }
]



function leaveRoom() {
    const copy_users = users.slice();
    const sortedUsers = copy_users.sort((a, b) => a.iq - b.iq);

    for (const user of sortedUsers){
        console.log(user.name, 'Left the Room')
    }    
}

leaveRoom();