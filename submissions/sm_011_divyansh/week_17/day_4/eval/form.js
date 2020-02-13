var Data = [];
$(document).ready(function () {
    $('.display').hide();
    $('#submit').click(function (e) {
        e.preventDefault();

        let EmployeeName = $('#EmployeeName').val().trim();
        let CompanyName = $('#CompanyName').val().trim();
        let Salary = $('#Salary').val().trim();
        let Designation = $('#Designation').val().trim();
        if (EmployeeName == "" || CompanyName == "" || Salary == "" || Designation == "") {
            alert("please fill all the feilds")
        }
        else {
            let user = new User(EmployeeName, CompanyName, Salary, Designation);
            Data.push(user);
            alert("Employee Data Created")
            // $("#form").hide()
            $('input').val('');
            createTable(Data);
            $('.display').show();
        }
    })
})

function User(EmployeeName, CompanyName, Salary, Designation) {
    this.EmployeeName = EmployeeName;
    this.CompanyName = CompanyName;
    this.Salary = Salary;
    this.Designation = Designation;

}

function createTable(array) {
    $('.table tbody').empty();
    for (let i = 0; i < array.length; i++) {
        if (array[i] != "") {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            $(td1).text(array[i].EmployeeName);
            $(tr).append(td1);
            let td2 = document.createElement('td');
            $(td2).text(array[i].CompanyName);
            $(tr).append(td2);
            let td3 = document.createElement('td');
            $(td3).text(array[i].Salary);
            $(tr).append(td3);
            let td4 = document.createElement('td');
            $(td4).text(array[i].Designation);
            $(tr).append(td4);
            $('.table tbody').append(tr);
        }
    }
}
$('#sort').click(function () {
    let arr = Data.sort(function (a, b) {
        return a.Salary - b.Salary;
    });
    createTable(arr)
})
$('#reverse').click(function () {
    let arr = Data.reverse(function (a, b) {
        return a.Salary - b.Salary;
    });
    createTable(arr)
})