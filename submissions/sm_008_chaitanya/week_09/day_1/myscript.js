var engineering = [{ name: 'chathan', job_title: 'comminication', salary: 30000 }, { name: 'yaswanth', job_title: 'Electronics', salary: 40000 }, { name: 'venkat', job_title: 'comminication', salary: 50000 }]
var design = [{ name: 'raj', job_title: 'designer', salary: 10000 }, { name: 'sarath', job_title: 'painter', salary: 15000 }, { name: 'kamal', job_title: 'creator', salary: 20000 }]
var sales = [{ name: 'ravi', job_title: 'salesHr', salary: 10000 }, { name: 'raju', job_title: 'specialist', salary: 15000 }, { name: 'vimal', job_title: 'bda', salary: 20000 }]
var hr = [{ name: 'sarma', job_title: 'Head Hr', salary: 10000 }]
var marketing = [{ name: 'Janaki', job_title: 'General Manager', salary: 60000 }, { name: 'Sri Vatsava', job_title: 'Regional Manager', salary: 45000 }]
function employee_details() {
    var tbl = document.getElementById("tab")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = "Name"
    var col2 = document.createElement('td')
    col2.innerHTML = "Job title"
    var col3 = document.createElement('td')
    col3.innerHTML = "Salary"
    var col4 = document.createElement('td')
    col4.innerHTML = "Department"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
    // row.style.border="1px solid black"  
    var tbl = document.getElementById("tab")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = document.getElementById("name").value
    var col2 = document.createElement('td')
    col2.innerHTML = document.getElementById("job_title").value
    var col3 = document.createElement('td')
    col3.innerHTML = document.getElementById("salary").value
    var col4 = document.createElement('td')
    col4.innerHTML = document.getElementById("dept").value
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
}
function reset_data() {
    document.getElementById("name").value = ""
    document.getElementById("job_title").value = ""
    document.getElementById("salary").value = ""
    document.getElementById("dept").value = ""
}
function engg_details() {
    var tbl = document.getElementById("dept_wise_engg")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Name'
    var col2 = document.createElement('td')
    col2.innerHTML = "Job Title"
    var col3 = document.createElement('td')
    col3.innerHTML = "Salary"
    var col4 = document.createElement('td')
    col4.innerHTML = "Department"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
    var tbl = document.getElementById("dept_wise_engg")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'chathan'
    var col2 = document.createElement('td')
    col2.innerHTML = "Electronics"
    var col3 = document.createElement('td')
    col3.innerHTML = 60000
    var col4 = document.createElement('td')
    col4.innerHTML = "Engineering"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
    var tbl = document.getElementById("dept_wise_engg")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Srinu'
    var col2 = document.createElement('td')
    col2.innerHTML = "Communication"
    var col3 = document.createElement('td')
    col3.innerHTML = 40000
    var col4 = document.createElement('td')
    col4.innerHTML = "Engineering"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
    var tbl = document.getElementById("dept_wise_engg")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Sarath'
    var col2 = document.createElement('td')
    col2.innerHTML = "Chief Manager"
    var col3 = document.createElement('td')
    col3.innerHTML = 100000
    var col4 = document.createElement('td')
    col4.innerHTML = "Engineering"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
}
function design_details() {
    var tbl = document.getElementById("dept_wise_des")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Name'
    var col2 = document.createElement('td')
    col2.innerHTML = "Job Title"
    var col3 = document.createElement('td')
    col3.innerHTML = "Salary"
    var col4 = document.createElement('td')
    col4.innerHTML = "Department"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
    var tbl = document.getElementById("dept_wise_des")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Rohit'
    var col2 = document.createElement('td')
    col2.innerHTML = "Manager"
    var col3 = document.createElement('td')
    col3.innerHTML = 60000
    var col4 = document.createElement('td')
    col4.innerHTML = "Design"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
    var tbl = document.getElementById("dept_wise_des")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Sagar'
    var col2 = document.createElement('td')
    col2.innerHTML = "Chief_Designer"
    var col3 = document.createElement('td')
    col3.innerHTML = 80000
    var col4 = document.createElement('td')
    col4.innerHTML = "Design"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
    var tbl = document.getElementById("dept_wise_des")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'venkat'
    var col2 = document.createElement('td')
    col2.innerHTML = "Genaral Manager"
    var col3 = document.createElement('td')
    col3.innerHTML = 100000
    var col4 = document.createElement('td')
    col4.innerHTML = "Design"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
}
function sales_details() {
    var tbl = document.getElementById("dept_wise_sales")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Name'
    var col2 = document.createElement('td')
    col2.innerHTML = "Job Title"
    var col3 = document.createElement('td')
    col3.innerHTML = "Salary"
    var col4 = document.createElement('td')
    col4.innerHTML = "Department"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
    var tbl = document.getElementById("dept_wise_sales")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Kamala'
    var col2 = document.createElement('td')
    col2.innerHTML = "BDA"
    var col3 = document.createElement('td')
    col3.innerHTML = 60000
    var col4 = document.createElement('td')
    col4.innerHTML = "Design"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
    var tbl = document.getElementById("dept_wise_sales")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Padma'
    var col2 = document.createElement('td')
    col2.innerHTML = "product Specialist"
    var col3 = document.createElement('td')
    col3.innerHTML = 80000
    var col4 = document.createElement('td')
    col4.innerHTML = "Design"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
}
function sales_details() {
    var tbl = document.getElementById("dept_wise_sales")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Name'
    var col2 = document.createElement('td')
    col2.innerHTML = "Job Title"
    var col3 = document.createElement('td')
    col3.innerHTML = "Salary"
    var col4 = document.createElement('td')
    col4.innerHTML = "Department"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
    var tbl = document.getElementById("dept_wise_sales")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Kamala'
    var col2 = document.createElement('td')
    col2.innerHTML = "BDA"
    var col3 = document.createElement('td')
    col3.innerHTML = 60000
    var col4 = document.createElement('td')
    col4.innerHTML = "Sales"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
    var tbl = document.getElementById("dept_wise_sales")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Padma'
    var col2 = document.createElement('td')
    col2.innerHTML = "product Specialist"
    var col3 = document.createElement('td')
    col3.innerHTML = 80000
    var col4 = document.createElement('td')
    col4.innerHTML = "Sales"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
}
function hr_details() {
    var tbl = document.getElementById("dept_wise_hr")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Name'
    var col2 = document.createElement('td')
    col2.innerHTML = "Job Title"
    var col3 = document.createElement('td')
    col3.innerHTML = "Salary"
    var col4 = document.createElement('td')
    col4.innerHTML = "Department"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
    var tbl = document.getElementById("dept_wise_hr")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Sarma'
    var col2 = document.createElement('td')
    col2.innerHTML = "Head HR"
    var col3 = document.createElement('td')
    col3.innerHTML = 60000
    var col4 = document.createElement('td')
    col4.innerHTML = "HR"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
}
function marketing_details() {
    var tbl = document.getElementById("dept_wise_mark")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Name'
    var col2 = document.createElement('td')
    col2.innerHTML = "Job Title"
    var col3 = document.createElement('td')
    col3.innerHTML = "Salary"
    var col4 = document.createElement('td')
    col4.innerHTML = "Department"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
    var tbl = document.getElementById("dept_wise_mark")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Janaki'
    var col2 = document.createElement('td')
    col2.innerHTML = "Marketing Manager"
    var col3 = document.createElement('td')
    col3.innerHTML = 60000
    var col4 = document.createElement('td')
    col4.innerHTML = "Marketing"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
    var tbl = document.getElementById("dept_wise_mark")
    var row = document.createElement('tr')
    var col1 = document.createElement('td')
    col1.innerHTML = 'Sri Vatsava'
    var col2 = document.createElement('td')
    col2.innerHTML = "Regional Manager"
    var col3 = document.createElement('td')
    col3.innerHTML = 40000
    var col4 = document.createElement('td')
    col4.innerHTML = "Marketing"
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    tbl.appendChild(row)
}

