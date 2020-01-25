var score = " "     //consider an empty string to add the present score
function press(num) {
    score = score + num
    document.getElementById("disp_score").innerHTML = score;
}

function leaderboard() {
    var current_score = Number(score)
    var min_score = document.getElementById("min").innerHTML
    var max_score = document.getElementById("max").innerHTML
    if (current_score < min_score) {
        document.getElementById("min").innerHTML = current_score
    }
    else if (current_score > max_score) {
        document.getElementById("max").innerHTML = current_score
    }
    document.getElementById("disp_score").innerHTML = "#"
    score = " "
}