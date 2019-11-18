var studentArr=[]
function submitData()
{
event.preventDefault()
var name=document.getElementById('name').value
var std=document.getElementById('std').value
var science=document.getElementById('science').value
var math=document.getElementById('math').value
var english=document.getElementById('english').value
var history=document.getElementById('history').value
var geography=document.getElementById('geography').value
var total=parseInt(science)+parseInt(math)+parseInt(english)+parseInt(history)+parseInt(geography)
var avg=total/5
var studentObj={
    Name:name,
    STD:std,
    Science:science,
    Math:math,
    English:english,
    History:history,
    Geography:geography,
    Average:avg,
    Total:total
}
studentArr.push(studentObj)
}
function addDetail(){
   var showdata=document.getElementById('selectmenu').value
   var showName=document.getElementById('single')
   var show=''
  studentArr.forEach(function(ele){if(showdata==ele.STD)
       {
           for(key in ele){
            show=show+key+':'+ele[key]+'<br>'
           }
       }
   })
   showName.innerHTML=show
}