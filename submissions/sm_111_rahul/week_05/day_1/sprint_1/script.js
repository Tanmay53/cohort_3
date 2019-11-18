function getRecord(){
    
    var name = document.getElementById('name').value
    var grade = document.getElementById('grade').value
    var science = document.getElementById('science').value
    var maths = document.getElementById('maths').value
    var history = document.getElementById('history').value
    var english = document.getElementById('english').value
    var geography = document.getElementById('geography').value
    var record = {
        Name: name,
        Grade: grade,
        Science: science,
        Maths: maths,
        History:history,
        English:english,
        Geography:geography
    }
    recordData.push(record);
    event.preventDefault();
}
recordData = [];
sum = 0;
avg =0;

   console.log(recordData)
    function selectStu(){
        var divs =  document.getElementById('result2') 
        var element =""
        var nameStu = document.getElementById('selectName').value
        recordData.forEach(function(val){
            if(val.Name == nameStu){
              for(key in val){
                // element += val"[key] + "\n" +"<br>"
                element += key +":   "+ val[key] + "<br>"
              }
            
            }
           
        })


        // sum +=  parseInt(recordData.English) +
        // parseInt(recordData.Geography) +
        // parseInt(recordData.History)+
        // parseInt(val.Maths)+
        // parseInt(val.Science)
        // avg = sum /5;

        divs.innerHTML = element;
        // console.log(avg,sum);
    }

    function selectFilter() {
        var table1  = document.getElementById('detailsOfStu')
        var grade = document.getElementById('filterStudent').value
       newArray = recordData.filter(function(val){
            if(Number(grade) == val.Grade){
                return val
            
                }
            }
        )
      
       newArray.forEach(function (ele){
           {
              var trs = document.createElement('tr')
               for(key in ele){
                  var tds = document.createElement('td')
                  tds.innerHTML = key + '<br>'+ ele[key];
                  tds.style.backgroundColor = 'green';
                 
                  trs.appendChild(tds)
               }
               table1.appendChild(trs);
            //    sum = sum + parsInt(ele.Science) + parseInt(ele.Maths) + parseInt(ele.History) + parseInt(ele.English) + parseInt(ele.Geography);
           }

       })
     

     console.log(sum);
        console.log(newArray);
        event.preventDefault();

        // divs.innerHTML = num;
    }   
    
 

