var user = {
    name: 'Ram',
    skill: 'Gamepad'
}

function newUser(x,y) {
    x.skill = x.skill+"," + y
    console.log(x)
}
newUser(user,'sudoku')