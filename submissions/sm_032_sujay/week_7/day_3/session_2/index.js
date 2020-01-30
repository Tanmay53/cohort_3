var data
var students
    window.addEventListener('load',function(){
        console.log('loading')
        var xhr = new XMLHttpRequest()
        xhr.open('GET','http://localhost:8000/students')
        xhr.onload = function(){
            data = xhr.response
            console.log(data)
            
        }
        xhr.send()
    })

    function show(){
            var res = JSON.parse(data)
            console.log(res)
            console.log(res[0].id)
            console.log(res.length)
            
            var tBody=document.getElementById("tBody")       
            
            // tBody.appendChild(tRow)         
           
            for(var i =0 ; i < res.length ; i++)
            {
                var tRow=document.createElement("tr")

                var tCol1 = document.createElement("td")
                tCol1.textContent = res[i].id
                tRow.appendChild(tCol1) 
                var tCol2 = document.createElement("td")
                tCol2.textContent = res[i].first_name
                tRow.appendChild(tCol2) 
                var tCol3 = document.createElement("td")
                tCol3.textContent = res[i].last_name
                tRow.appendChild(tCol3) 
                var tCol4 = document.createElement("td")
                tCol4.textContent = res[i].email
                tRow.appendChild(tCol4) 
                var tCol5 = document.createElement("td")
                tCol5.textContent = res[i].gender
                tRow.appendChild(tCol5) 
                var tCol6 = document.createElement("td")
                tCol6.textContent = res[i].english
                tRow.appendChild(tCol6) 
                var tCol7 = document.createElement("td")
                tCol7.textContent = res[i].maths
                tRow.appendChild(tCol7) 
                var tCol8 = document.createElement("td")
                tCol8.textContent = res[i].science
                tRow.appendChild(tCol8) 

                var tCol9 = document.createElement("td")
                tCol9.textContent = Number(res[i].english) + Number(res[i].maths)+ Number(res[i].science)
                tRow.appendChild(tCol9)
                

    //at the end append the whole row to table 
              tBody.appendChild(tRow)
              console.log("row ready")
           }


    }

    function sortData(input)
    {   
        var res = JSON.parse(data)
            console.log(res)
        var sortData = res
        switch(input)
        {
            case 'ascF': {
                sortData= res.sort((a,b) =>{
                    return a.first_name > b.first_name ? 1: -1
                })
            }break

            case 'descF': {
                sortData= res.sort((a,b) =>{
                    return a.first_name < b.first_name ? 1: -1
                })
            }break

            case 'ascL': {
                sortData= res.sort((a,b) =>{
                    return a.last_name > b.last_name ? 1: -1
                })
            }break

            case 'descL' : {
                sortData= res.sort((a,b) =>{
                    return a.last_name < b.last_name ? 1: -1
                })
            }break

            case 'ascE': {
                sortData= res.sort((a,b) =>{
                    return a.email > b.email ? 1: -1
                })
            }break

            case 'ascM' : {
                sortData= res.sort((a,b) =>{
                    return (Number(a.english) + Number(a.maths) + Number(a.science))  > (Number(b.english) + Number(b.maths) + Number(b.science)) ? 1: -1
                })

            }break

            case 'descM' : {
                sortData= res.sort((a,b) =>{
                    return (Number(a.english) + Number(a.maths) + Number(a.science))  < (Number(b.english) + Number(b.maths) + Number(b.science)) ? 1: -1
                })

            }break

            case 'all' : 
            break
        }
        display(sortData)

    } 

    function display(sortData)
    {
        
        var tBody=document.getElementById("tBody")       
            tBody.innerHTML=""
            // tBody.appendChild(tRow)         
           
            for(var i =0 ; i < sortData.length ; i++)
            {
                var tRow=document.createElement("tr")

                var tCol1 = document.createElement("td")
                tCol1.textContent = sortData[i].id
                tRow.appendChild(tCol1) 
                var tCol2 = document.createElement("td")
                tCol2.textContent = sortData[i].first_name
                tRow.appendChild(tCol2) 
                var tCol3 = document.createElement("td")
                tCol3.textContent = sortData[i].last_name
                tRow.appendChild(tCol3) 
                var tCol4 = document.createElement("td")
                tCol4.textContent = sortData[i].email
                tRow.appendChild(tCol4) 
                var tCol5 = document.createElement("td")
                tCol5.textContent = sortData[i].gender
                tRow.appendChild(tCol5) 
                var tCol6 = document.createElement("td")
                tCol6.textContent = sortData[i].english
                tRow.appendChild(tCol6) 
                var tCol7 = document.createElement("td")
                tCol7.textContent = sortData[i].maths
                tRow.appendChild(tCol7) 
                var tCol8 = document.createElement("td")
                tCol8.textContent = sortData[i].science
                tRow.appendChild(tCol8) 

                var tCol9 = document.createElement("td")
                tCol9.textContent = Number(sortData[i].english) + Number(sortData[i].maths)+ Number(sortData[i].science)
                tRow.appendChild(tCol9)
                

    //at the end append the whole row to table 
              tBody.appendChild(tRow)
              console.log("row ready")
           }
    }

    //incomplete. yet to do.
    function search()
    {
        var ip = document.getElementById("ipsrch").value

        display(ip)

    }