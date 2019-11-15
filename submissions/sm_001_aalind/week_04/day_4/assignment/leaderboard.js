var finalInputValue = 0;

function deleteVal() {
    finalInputValue = Math.floor(finalInputValue/10);
    if(finalInputValue != 0) {
        document.getElementById("scoreBox").textContent = finalInputValue;
    } else {
        document.getElementById("scoreBox").textContent = "#";
    }
}

function enterInput() {
    if(String(finalInputValue).length <= 11) {
        var scoreBox = document.getElementById("scoreBox");
        finalInputValue = finalInputValue*10 + Number(this.textContent);
        scoreBox.textContent = finalInputValue;
    } else {
        alert("Sorry! Value too large!")
    }
}

function submitInput() {
    var minScore = document.getElementById("minScore");
    var maxScore = document.getElementById("maxScore");
    var scoreBoxStr = document.getElementById("scoreBox").textContent;

    if(scoreBoxStr.indexOf("#") !== -1) {
        alert("Please enter some value!");
    } else {
        if(finalInputValue < minScore.textContent) {
            minScore.textContent = finalInputValue;
        } else if(finalInputValue > maxScore.textContent) {
            maxScore.textContent = finalInputValue;
        }
    }
    finalInputValue = 0;
    document.getElementById("scoreBox").textContent = "#";
}

var numDivs = document.getElementsByClassName('numDiv');

for(var i = 0; i < numDivs.length-1; i++) {
    numDivs[i].addEventListener("click", enterInput);
}
