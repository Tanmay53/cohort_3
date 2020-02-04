var current_score = ''
var all_scores = []
var max_score = {
    name: "Masai",
    score: 100
}

var min_score = {
    name: "School",
    score: 10
}

function key_press(num) {
    console.log("key press" + num);
    current_score = current_score + num
    document.getElementById('curr_score').innerHTML = current_score
}

function enter_press() {
    console.log("Enter")
    var name = document.getElementById('name').value
    var score = parseInt(current_score)
    var new_game = {
        name: name,
        score: score
    }

    document.getElementById('curr_score').innerHTML = "#"
    document.getElementById('name').value = ""
    current_score = ""
    process_score(new_game)
    update_min_max(new_game)
    console.log(new_game)
}

function process_score(new_game) {
    var tbl = document.getElementById("scores")
    var row = document.createElement('tr')

    var col1 = document.createElement('td')
    col1.textContent = new_game.name
    var col2 = document.createElement('td')
    col2.textContent = new_game.score;

    row.appendChild(col1)
    row.appendChild(col2)
    tbl.appendChild(row)
}

function update_min_max(new_game) {
    console.log(new_game.score)
    if (new_game.score > max_score.score) {
        console.log("update max")
        max_score.score = new_game.score
        max_score.name = new_game.name
        document.getElementById('max-score').textContent = new_game.score
        document.getElementById('max-name').textContent = new_game.name
    }
    else if (new_game.score < min_score.score) {
        console.log("update min")
        min_score.score = new_game.score
        min_score.name = new_game.name
        document.getElementById('min-score').textContent = new_game.score
        document.getElementById('min-name').textContent = new_game.name


    }
}