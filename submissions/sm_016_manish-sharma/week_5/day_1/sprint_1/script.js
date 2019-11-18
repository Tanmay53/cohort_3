function entry() {
    var name = document.getElementById("name").value
    var grade = document.getElementById('grade').value
    var subject = document.getElementById('subject').value
    var marks = document.getElementById('marks').value

    var hr1 = document.getElementById("hr1");
    var hr2 = document.getElementById("hr2");
    var hr3 = document.getElementById("hr3");
    var hr4 = document.getElementById("hr4");

    var nameentry = document.createElement('div')
    var gradeentry = document.createElement('div')
    var subjectentry = document.createElement('div')
    var marksentry = document.createElement('div')

    var top1 = document.getElementsByClassName("top1")
    var top2 = document.getElementsByClassName("top2")
    var top3 = document.getElementsByClassName("top3")
    var top4 = document.getElementsByClassName("top4")

    top1[0].insertBefore(nameentry, hr1)
    nameentry.textContent = name

    top2[0].insertBefore(gradeentry, hr2)
    gradeentry.textContent = grade

    top3[0].insertBefore(subjectentry, hr3)
    subjectentry.textContent = subject

    top4[0].insertBefore(marksentry, hr4)
    marksentry.textContent = marks

    var marksAll = document.querySelectorAll(".top4 > div")
    document.getElementsByClassName("bottom2")[0].textContent = totalMarks(marksAll)

    document.getElementsByClassName("bottom4")[0].textContent = avgMarks(marksAll)
}

function totalMarks(p) {

    var sums = 0
    for (var i = 1; i < p.length; i++) {
        sums = sums + Number(p[i].textContent)
    }
    return sums
}

function avgMarks(p) {
    var num = (totalMarks(p)) / (p.length - 1)
    num = num.toFixed(2)
    return num
}

function sortImp() {
    var nameNum = document.querySelectorAll(".top1 div")
    var gradeNum = document.querySelectorAll(".top2 div")
    var subjectNum = document.querySelectorAll(".top3 div")
    var marksNum = document.querySelectorAll(".top4 div")


    var grade21 = document.getElementsByClassName("grade21")
    if (grade21[0].value != gradeNum.textContent) {
        nameNum[i].innerHTML = ""
        gradeNum[i].innerHTML = ""
        subjectNum[i].innerHTML = ""
        marksNum[i].innerHTML = ""
    }


}
