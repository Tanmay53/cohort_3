// $("#formSubmit").click(function(){
//     local()
// })

// var arr=[]
// function local(){
//     var details=localStorage.getItem('data')
//     var empName=$("#empName").val()
//     var cmpName=$("#cmpName").val()
//     var salary=$("#salary").val()
//     var designation=$("#designation").val()
//     var cmpLogo=$("#logo").val()

//     var localarr=[]
//     var dataObj={
//         empName:empName,
//         cmpName:cmpName,
//         salary:salary,
//         designation:designation,
//         cmpLogo:cmpLogo,
//     }

//     dataObj=JSON.stringify(dataObj)
//     localarr.push(dataObj)
//     arr.push(localarr)
//     localStorage.setItem('data',arr)  
// }

$("#formSubmit").click(function () {
    var obj = {
        arr: [{ empname: 'chaitanya', compname: 'IBM', salary: 500000, designation: 'SDE1', logo: 'https://www.cbronline.com/wp-content/uploads/2016/07/ibm.png' },
        { empname: 'Srinu', compname: 'Infosys', salary: 800000, designation: 'SDE1', logo: 'https://www.logotaglines.com/wp-content/uploads/2016/08/Infosys-Logo-1280x720.png' },
        { empname: 'Puneeth', compname: 'Google', salary: 900000, designation: 'SDE1', logo: 'https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg' },
        { empname: 'sarma', compname: 'Infosys', salary: 500000, designation: 'SDE1', logo: 'https://www.logotaglines.com/wp-content/uploads/2016/08/Infosys-Logo-1280x720.png' },
        { empname: 'venkat', compname: 'vignan', salary: 500000, designation: 'SDE1', logo: 'https://www.logotaglines.com/wp-content/uploads/2016/08/Infosys-Logo-1280x720.png' }
        ]
    }
    populatePages(obj)
})

function populatePages(obj) {

    var body = document.querySelector('body')
    var tablediv = document.getElementById('container')
    body.append(tablediv)

    for (var i = 0; i < obj['arr'].length; i++) {
        var card = document.createElement('div')
        card.setAttribute('class', 'card')
        var row = document.createElement('div')
        row.setAttribute('class', 'row')
        var col1 = document.createElement('div')
        col1.setAttribute('class', 'col-4')

        var image = document.createElement('image')
        image.setAttribute('src', obj['arr'][i]['logo'])
        col1.append(image)

        var col2 = document.createElement('div')
        col2.setAttribute('class', 'col-6')

    }
}

$("#user_sort").click(function () {
    if ($("#user_sort").val() == "asc") {
        var n = obj['arr'].length
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < n - i - 1; j++) {
                if (obj['arr'][j]["empname"] > obj['arr'][j + 1]["empname"]) {
                    var temp = obj['arr'][j]
                    obj['arr'][j] = obj['arr'][j + 1]
                    obj['arr'][j + 1] = temp
                }
            }
        }
        populatePages(obj)
    }
    else if ($("#user_sort").val() == "dec") {
        var n = obj['arr'].length
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < n - i - 1; j++) {
                if (obj['arr'][j]["empname"] < obj['arr'][j + 1]["empname"]) {
                    var temp = obj['arr'][j]
                    obj['arr'][j] = obj['arr'][j + 1]
                    obj['arr'][j + 1] = temp
                }
            }
        }
        populatePages(obj)
    }
});