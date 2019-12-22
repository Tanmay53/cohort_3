var data
window.addEventListener('load',function(){
    console.log('loading')
    var xhr = new XMLHttpRequest()
    xhr.open('GET','http://localhost:8000/students')
    xhr.send()
    xhr.onload = function(){
        data = JSON.parse(xhr.response);
        $("#firstNameVal,#lastNaneVal,#emailVal").val("")
        showData (data)
        // console.log(data)
    }
})

// $('#displayTable').hide()
function showData (d){
    $('#studentTable').empty()
    for(var i = 0; i < d.length; i++){
        var tr = document.createElement('tr');
        $('#studentTable').append(tr)
        var id = document.createElement('td');
        var fname = document.createElement('td');
        var lname = document.createElement('td');
        var email = document.createElement('td');
        var gender = document.createElement('td');
        var english = document.createElement('td');
        var maths = document.createElement('td');
        var science = document.createElement('td');
        var total = document.createElement('td');
        var del = document.createElement('td');

        var btnDel = document.createElement('button');
        btnDel.innerHTML = "Delete"
        del.append(btnDel);
        btnDel.setAttribute('class',"btn btn-secondary");

        btnDel.addEventListener('click',function(){
            this.parentElement.parentElement.remove();
        })

        id.innerHTML = d[i]["id"];
        fname.innerHTML = d[i]["first_name"];
        lname.innerHTML = d[i]["last_name"];
        email.innerHTML = d[i]["email"];
        gender.innerHTML = d[i]["gender"]
        english.innerHTML = d[i]["english"]
        maths.innerHTML = d[i]["maths"]
        science.innerHTML = d[i]["science"]
        var sum = Number(d[i]["english"])+Number(d[i]["maths"])+Number(d[i]["science"])
        total.innerHTML = sum;
        data[i].totalMarks = sum;
        tr.append(id, fname, lname, email, gender, english, maths, science, total, del);  
    }
}

// Pagination
$("#pageQuant").change(function(){
    var page = $("#pageQuant").val();
    var pageData = []
    for(var i = 0; i < Number(page); i++){
        if(data[i]["id"] <= page){
            pageData.push(data[i])
        }
    }
    console.log(pageData)
    $('#displayTable').show()
    showData (pageData);
})

// Search By First Name Last Name and By Email 
$("#firstNameVal,#lastNaneVal,#emailVal").keyup(function(){
    var fname = $("#firstNameVal").val();
    var lname = $("#lastNaneVal").val();
    var email = $("#emailVal").val();
    var pageData = []
    for(var i = 0; i < data.length; i++){
        if(data[i]["first_name"].toLowerCase() == fname.toLowerCase()){
            // $("#lastNaneVal,#emailVal").val("")
            pageData.push(data[i])
        }
        else if(data[i]["last_name"].toLowerCase() == lname.toLowerCase()){
            // $("#firstNameVal,#emailVal").val("")
            pageData.push(data[i])
        }
        else if(data[i]["email"].toLowerCase() == email){
            // $("#firstNameVal,#lastNaneVal").val("")
            pageData.push(data[i])
        }
    }
    console.log(pageData)
    $('#displayTable').show()
    showData (pageData);
})

$("#gen").change(function(){
    var gen = $("#gen").val();
    console.log(eng);
    var pageGen 
    pageGen = data.filter((user) => (user["gender"] == gen))
    // var pageGen = data.filter(function(g){
    //     console.log(g.gender)
    //     return g.gender == gen;
    // })
    console.log(pageGen)
    $('#displayTable').show()
    showData (pageGen);
})

// English Mark Sort
$("#eng").change(function(){
    var eng = $("#eng").val();
    console.log(eng);
    var pageGen 
    if(eng == "low")
        pageGen = data.sort((a,b) => (a["english"] - b["english"]));
    else
        pageGen = data.sort((a,b) => (b["english"] - a["english"]));
    console.log(pageGen)
    $('#displayTable').show()
    showData (pageGen);
})

// Math marks Sort
$("#math").change(function(){
    var math = $("#math").val();
    console.log(math);
    var pageGen 
    if(math == "low")
        pageGen = data.sort((a,b) => (a["maths"] - b["maths"]));
    else
        pageGen = data.sort((a,b) => (b["maths"] - a["maths"]));
    console.log(pageGen)
    $('#displayTable').show()
    showData (pageGen);
})

// Science marks Sort
$("#sci").change(function(){
    var sci = $("#sci").val();
    console.log(sci);
    var pageGen 
    if(sci == "low")
        pageGen = data.sort((a,b) => (a["science"] - b["science"]));
    else
        pageGen = data.sort((a,b) => (b["science"] - a["science"]));
    console.log(pageGen)
    $('#displayTable').show()
    showData (pageGen);
})

// Science Total Marks Sort
$("#tMarks").change(function(){
    console.log("ciohfewj  "+data )
    var tMarks = $("#tMarks").val();
    console.log(tMarks);
    var pageGen 
    if(tMarks == "low")
        pageGen = data.sort((a,b) => (a["totalMarks"] - b["totalMarks"]));
    else
        pageGen = data.sort((a,b) => (b["totalMarks"] - a["totalMarks"]));
    console.log(pageGen)
    $('#displayTable').show()
    showData (pageGen);
})