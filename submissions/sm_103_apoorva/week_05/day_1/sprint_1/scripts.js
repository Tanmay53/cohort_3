var total=0
function submitData()
{
    var name=document.getElementById("name").value
    var grade=document.getElementById("standard").value
    var science=document.getElementById("science").value
    var maths=document.getElementById("Maths").value
    var english=document.getElementById("english").value
    var history=document.getElementById("history").value
    var geography=document.getElementById("geography").value
    var obj={
        Name:name,
        Grade: grade,
        Science:science,
        Maths:maths,
        English:english,
        History:history,
        Geography:geography,
    }
}
