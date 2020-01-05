let perPage = 25
let activePage = 1
let select

var dataBase = []
    var data
    window.addEventListener('load',function(){
        console.log('loading')
        var xhr = new XMLHttpRequest()
        xhr.open('GET','http://localhost:8000/students')
        xhr.onload = function(){
            data = JSON.parse(xhr.response)
            // console.log(data);
            dataBase = data;
            console.log(dataBase);
            // createTable(dataBase)
            data.forEach(ele => {
                let total = ele.english + ele.maths + ele.science
                ele.totalMarks = total
                // console.log(ele)
            });
        }
        xhr.send()
    })

// function to append data in a table dynamically//
function createTable(arr)
{
    arr.forEach(function(ele){
    let tr = document.createElement("tr");
    
    for(key in ele)
    {
        let td = document.createElement("td");
        td.textContent = ele[key];
        tr.appendChild(td);
    }
    
    var tBody = document.getElementById("tBody");
    tBody.appendChild(tr)
 })
}

// function to display data//
function displayData()
{
     
    createTable(dataBase)
}

var btnDisplay = document.getElementById("btnDisplay")
btnDisplay.addEventListener("click", displayData);

// function for pagination//
function pagination(page)
{
    let total = dataBase.length
    let pageCount = Math.ceil(total/perPage)
    let pages = document.getElementById("pages")
    pages.innerHTML = ""

    for(let i=0; i<pageCount; i++)
    {
        let li = document.createElement("li")
        if(i === page-1)
        {
            li.setAttribute("class", "page-item active")
        }
        else
        {
            li.setAttribute("class", "page-item")
        }
        li.setAttribute("onclick", `changePage(${i+1})`)
        let a = document.createElement("a")
        a.setAttribute("class", "page-link")
        a.setAttribute("href", `#${i+1}`)
        a.textContent = i+1
        li.append(a)
        pages.append(li)  
    }
    // alert(page)
    changePage(1)
}

function loadData(page)
{
    //  activePage = 1
    //set the data according to page//
    //let page = activePage
    let low = (page-1)*perPage
    let high = page*perPage
    pageData = dataBase.filter((a,i)=>i>=low&&i<high)
    console.log(pageData)
    fillPage(pageData);

}

function changePage(newPage)
{
    // alert(activePage)
    // alert(newPage)
    loadData(newPage)
    let liActive = document.querySelector(`#pages li:nth-child(${activePage})`)
    liActive.setAttribute("class", "page-item")
    activePage = newPage
    let liNew = document.querySelector(`#pages li:nth-child(${activePage})`)
    liNew.setAttribute("class", "page-item active")
}

function fillPage(arr)
{
    // alert('Hello')
    var tBody = document.getElementById("tBody");
    tBody.innerHTML = ""
    createTable(arr)    
}

window.addEventListener("load", () => {
    select = document.getElementById("selectPage")
    select.addEventListener("change", () => {
        perPage = Number(select.value)
        // alert(activePage)
        pagination(activePage)
        // pagination(newPage)
    })
})

// let table = document.getElementById("table")
// let thead = document.getElementById("tHead")
let tr1 = document.getElementById("tr")
let th = document.createElement("th")
th.textContent = "Total Marks"
th.setAttribute("scope", "col")
th.setAttribute("id", "totalMarks")
tr1.appendChild(th);
// thead.appendChild(tr);
// thead.setAttribute("class", "thead-dark")
// table.appendChild(thead)

function sortObjArr(arr, key)
{
    arr.sort(function(a,b)
    {
        var keyA = a[key].toUpperCase() // ignore upper and lowercase
        var keyB = b[key].toUpperCase() // ignore upper and lowercase
        console.log(keyA,keyB)
        if(keyA < keyB)
        {
            return -1
        }
        else if(keyA > keyB)
        {
            return 1
        }
        else
        {
            return 0
        }
    })
}

function sortByFname()
{
    let tBody = document.getElementById("tBody");
    tBody.innerHTML = ""
    sortObjArr(dataBase, "first_name")
    createTable(dataBase)
}

function sortByLname()
{
    let tBody = document.getElementById("tBody");
    tBody.innerHTML = ""
    sortObjArr(dataBase, "last_name")
    createTable(dataBase)
}

function sortByEmail()
{
    let tBody = document.getElementById("tBody");
    tBody.innerHTML = ""
    sortObjArr(dataBase, "email");
    createTable(dataBase);
}

function sortByGender(arr, value)
{
  let genderArr =  arr.filter(ele => {
        if(ele.gender === value)
        {
            // console.log(ele)
            return ele
        }
        else if(value === "all")
        {
            return ele
        }
    })
    // console.log(genderArr)
    createTable(genderArr)
}


$("#selectGender").change(function(){
    let selectGender = document.getElementById("selectGender").value
    let tBody = document.getElementById("tBody");
    tBody.innerHTML = ""
    sortByGender(dataBase, selectGender);
    // createTable(dataBase);
    // console.log(dataBase)
})

function sortBySubjectAsc(arr, key)
{
    arr.sort((a,b) => {
        return a[key] - b[key]
    }) 
}

function sortBySubjectDsc(arr, key)
{
    arr.sort((a,b) => {
        return b[key] - a[key]
    }) 
}

// sort by math marks
function sortByMathAsc()
{
    let tBody = document.getElementById("tBody");
    tBody.innerHTML = ""
    sortBySubjectAsc(dataBase, "maths")
    // sortBySubjectDsc(dataBase, "maths")
    createTable(dataBase)
}

function sortByMathDsc()
{
    let tBody = document.getElementById("tBody");
    tBody.innerHTML = ""
    sortBySubjectDsc(dataBase, "maths")
    createTable(dataBase)
}

let totalMarks = document.getElementById("totalMarks")
totalMarks.onclick = function sortByTotalAsc()
{
    let tBody = document.getElementById("tBody");
    tBody.innerHTML = ""
    sortBySubjectAsc(dataBase, "totalMarks")
    createTable(dataBase)
}

totalMarks.ondblclick = function sortByTotalDsc()
{
    let tBody = document.getElementById("tBody");
    tBody.innerHTML = ""
    sortBySubjectDsc(dataBase, "totalMarks")
    createTable(dataBase)
}


let btnSearch = document.getElementById("btnSearch")
$(document).on("click","#btnSearch", function(){
    let inputBox = document.getElementById("inputBox")
    let arr = []
    dataBase.forEach(ele =>{
        if(inputBox.value === ele.first_name)
        { 
           arr.push(ele)
        }
        else if(inputBox.value === ele.last_name)
        { 
           arr.push(ele)
        }
        else if(inputBox.value === ele.email)
        { 
           arr.push(ele)
        }
    })
    let tBody = document.getElementById("tBody");
    tBody.innerHTML = ""
    createTable(arr)
})

// let btnSearch = document.getElementById("btnSearch")
// $(document).on("click","#btnSearch", function(){
//     let inputBox = document.getElementById("inputBox")
//     let arr = []
//     dataBase.forEach(ele =>{
//         if(ele.first_name.toLowerCase().includes(inputBox.value.toLowerCase()))
//         { 
//            arr.push(ele)
//         }
        
//     })
//     let tBody = document.getElementById("tBody");
//     tBody.innerHTML = ""
//     createTable(arr)
// })
