$("#employeeDataSubmitBtn").click(() => {
    let name = $("#name").val()
    let company = $("#company").val()
    let salary = $("#salary").val()
    let position = $("#position").val()
    let logo = $("#logo").val()  //we are taking given inputs by .val()

    var newEmployee = {
        Name: name,
        Company: company,
        Salary: salary,
        Designation: position,
        CompanyLogo: logo
    }
    // updateData(newEmployee)  //without this you cannot add new employees.
    console.log(newEmployee)
    $("#name").val("")  //we are setting input value as empty by .val("") -given dbl semicolans inside it.
    $("#company").val("")
    $("#salary").val("")
    $("#position").val("")
    $("#logo").val("")
})

getData = () => {
    let data = localStorage.getItem('employees') || "Add Something.!.Empty here."
    let parseData = JSON.parse(data)
    return parseData
}
setData = (s) => {
    let str = JSON.stringify(s)
    localStorage.setItem("employees", str)
}
updateData = (u) => {
    let data = getData()
    data.arr.push(u)
    setData(data)
    console.log(data)
}

$("#showAllEmployeesBtn").click(() => {
    let data = getData()
    console.log(data.arr.length + " this is employees count")
    $("#employeeDetailEnterDiv").hide()
    dataToCards(data.arr)

    companiesList(data.arr)

    let perPageVal = 5
    let noOfButtons = Math.ceil(data.arr.length / perPageVal)
    console.log("no of buttons are " + noOfButtons)
    for (b = 1; b <= noOfButtons; b++) {
        let btn = `<button class="pageBtn m-2" onclick="showBtnNo(${b})">${b}</button>`
        $("#buttonsDiv").append(btn)
    }
    $(".pageBtn").on("click", function () {
        $(this).css("background-color", "lime");
    })
})

function showBtnNo(n) {
    let data = getData()
    let perPageVal = 5
    console.log(n + " btn pressed")
    var arr = []
    let start = (n - 1) * perPageVal
    let end
    if ((start + perPageVal) >= data.arr.length) end = data.arr.length
    else end = start + perPageVal
    for (k = start; k < end; k++) {
        arr.push(data.arr[k])
    }
    dataToCards(arr)
}

function dataToCards(array) {
    $("#cardsDiv").html("")
    array.forEach(eachObj => {
        let card = `<div class="card p-1 border border-warning m-2" style="width: 14rem;">
                        <img src="${eachObj.CompanyLogo}" height="100px" class="card-img-top"">
                        <div class="card-body">
                            <h5 class="card-title">${eachObj.Name}</h5>
                            <h6 class="card-subtitle mb-2 text-warning">${eachObj.Designation}</h6>
                            <p class="card-text">Company : ${eachObj.Company}</p>
                            <pclass="card-text">Salary :${eachObj.Salary}</p>
                        </div>
                    </div>`
        $("#cardsDiv").append(card)
    })
}

function companiesList(array) {
    console.log("companies list is ")
    let companies = []
    array.forEach(obj => {
        companies.push(obj.Company)
    })

    let diffCompanies= rmDuplicates(companies)
    console.log(companies,diffCompanies)
    diffCompanies.forEach(each => {
        $("#companySelect").append(`<option value="${each}">${each}</option>`)
    })
}
rmDuplicates= (arr) => {
    arr= arr.sort()
    let stack= [arr[0]]
    for(i= 1; i< arr.length; i++) {
        if(arr[i] != arr[i-1]) stack.push(arr[i])        
    }
    console.log("diff companies ",stack)
    return stack
}

$("#companySelect").change(() => {
    let selectedCompany = $("#companySelect").val()
    console.log(selectedCompany)
    let data = getData()
    function selectedCompanyEmployeeSOnly(obj) {
        console.log(obj)
        return obj.Company == selectedCompany
    }
    var selectedCompanyEmployeeArr = data.arr.filter(selectedCompanyEmployeeSOnly)
    console.log(selectedCompanyEmployeeArr, "selectedCompanyEmployeeArr is")
    dataToCards(selectedCompanyEmployeeArr)
})

$("#sortSelect").change(() => {
    var sortType = $("#sortSelect").val()
    console.log(sortType, " is sort type")
    let data = getData()
    let salaries = []
    let objArr= data.arr
    objArr.forEach(obj => {
        salaries.push( Number(obj.Salary) )
    })
    console.log(salaries, "salaries arr")
    let descendingArr  = sortingFunction(salaries, objArr)
    let ascendingArr = sortingFunction(salaries, objArr).reverse()

    if (sortType == "increasing") {
        console.log(ascendingArr, sortType)
        dataToCards(ascendingArr)

    }
    else {
        console.log(descendingArr, sortType)
        console.log(descendingArr.reverse()," this is reverse order") 
        // idon't know why but without above console its showing only ascending order for both.
        dataToCards(descendingArr)                          
    }
})

sortingFunction = (arr1,array) => {
    let l= arr1.length
    for (j = 0; j < l - 1; j++) {
        for (k = 0; k < l - j - 1; k++) {
            if (arr1[k] < arr1[k + 1]) {
                val = arr1[k]
                arr1[k] = arr1[k + 1]
                arr1[k + 1] = val

                value = array[k]
                array[k] = array[k + 1]
                array[k + 1] = value
            }
        }
    }
    console.log("sortingFun output =",arr1,array)
    return array
}



// const employees = {    // dont uncoment it then the entire data you filled till now will we
//     arr: []         // erased and replaced with newly entered one employee data.
// }
// setData(employees)