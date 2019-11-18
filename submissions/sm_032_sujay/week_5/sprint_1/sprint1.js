
function calcTotal()
{
    var total=0
    total= science.value + math.value + english.value + history.value + gegraphy.value
    document.getElementById('total').innerHTML= total
    //console.log(total)  

}

function calcAvg()
{
   var avg=0
   
}

function resetAll()
{
    document.getElementById('scores').value= " "
    document.getElementById('student').value= " "

    document.getElementById('science').value= " "
    document.getElementById('math').value= " "
    document.getElementById('english').value= " "
    document.getElementById('history').value= " "
    document.getElementById('geography').value= " "

    document.getElementById('studName').value= " "
    document.getElementById('grade').value= " "
  


}


