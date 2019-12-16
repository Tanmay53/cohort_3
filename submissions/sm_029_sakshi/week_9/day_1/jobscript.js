// ==================this will empty the table everytime==========================
function jobbbb()
{
    document.getElementById("tbody").innerHTML=" "
    jobbb()
}

// ===================API for serched job ===========================================
function jobbb()
{
  
    var char=document.getElementById('jobdata').value;
alert(char)
console.log(char)
    var xhr=new XMLHttpRequest();
    var url='https://indreed.herokuapp.com/api/jobs/?q='+char;
    console.log(url);
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function () {
    if (xhr.status == 200) {
        var data = JSON.parse(xhr.response);
        console.log(data)
        jobserch(data)
    }
    else {
        console.log("Error Code is:" + xhr.status);
    }
}

}
            
// =======================create abd append table=========================================
function jobserch(data)
{
    for(var i=0;i<data.length;i++)
                         {
                             var tablee=document.getElementById("tbody")
                             var row=document.createElement("tr")

                             var col0=document.createElement("td")
                             col0.textContent=i
                             row.appendChild(col0)
                             tablee.appendChild(row)

                             var col1=document.createElement("td")
                             col1.textContent=data[i]["title"]
                             row.appendChild(col1)
                             tablee.appendChild(row)

                    
                             
                             var col2=document.createElement("td")
                             col2.textContent=data[i]["company"]
                             row.appendChild(col2)
                             tablee.appendChild(row)

                            // tablee.innerHTML=" "

                             
}
}

function page1()
{
    document.getElementById("tbody").innerHTML=" "

      
    var xhr = new XMLHttpRequest()
                xhr.open('GET', 'https://indreed.herokuapp.com/api/jobs/?l=Lagos')
                xhr.send()
                xhr.onload = function() {
                    if(xhr.status == 200) {
                        data = JSON.parse(xhr.response) 
  
        console.log(data)
        jobserch(data)
    }
    else {
        console.log("Error Code is:" + xhr.status);
    }
}
}


function page2()
{
    document.getElementById("tbody").innerHTML=" "

      
    var xhr = new XMLHttpRequest()
                xhr.open('GET', 'https://indreed.herokuapp.com/api/jobs/?l=Lagos&max=5')
                xhr.send()
                xhr.onload = function() {
                    if(xhr.status == 200) {
                        data = JSON.parse(xhr.response) 
  
        console.log(data)
        jobserch(data)
    }
    else {
        console.log("Error Code is:" + xhr.status);
    }
}
}