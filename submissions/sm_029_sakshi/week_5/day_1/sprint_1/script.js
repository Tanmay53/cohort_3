function showTotal()
{
 var mathss=document.getElementById("math1").value
var sciencee=document.getElementById("science1").value
var englishh=document.getElementById("english1").value
var historyy=document.getElementById("history1").value
var geographyy=document.getElementById("geography1").value
var totalll=mathss-(-sciencee)-(-englishh)-(-historyy)-(-geographyy)
document.getElementById("total").value=totalll
}
function showAvg()
{
   
    var mathss=document.getElementById("math1").value
    var sciencee=document.getElementById("science1").value
    var englishh=document.getElementById("english1").value
    var historyy=document.getElementById("history1").value
    var geographyy=document.getElementById("geography1").value
    var totalll=mathss-(-sciencee)-(-englishh)-(-historyy)-(-geographyy)
    var avggg=totalll/5
    document.getElementById("avg").value=avggg
}
