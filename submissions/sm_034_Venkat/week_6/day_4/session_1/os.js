$("#submit").click(function () {
    var os = document.getElementById('osSelect').value;
    $.ajax({
        url: "http://localhost:8080/codenames/" + os
    })
        .done(function (output) {
            alert("Done.!")
            // console.log(output.length,typeof(output))
            var obj= JSON.parse(output)
            console.log(obj)
            var codenames= obj.codenames
            
            var body = document.querySelector('body')
            var h2 = document.createElement('h2')
            h2.textContent = 'OS Name is ' + os;
            body.append(h2)

            var table = document.createElement('table')
            var trHead = document.createElement('tr')

            var th1 = document.createElement('th')
            th1.textContent = "Version Name"
            th1.style.border = "1px solid"
            trHead.append(th1)
            var th2 = document.createElement('th')
            th2.textContent = "Number"
            th2.style.border = "1px solid"
            trHead.append(th2)
            table.append(trHead)

            for (i = 0; i < codenames.length; i++) {
                var tr = document.createElement('tr')

                var td1 = document.createElement('td')
                td1.textContent = codenames[i].name
                td1.style.border = "1px solid"
                tr.append(td1)

                var td2 = document.createElement('td')
                td2.textContent = codenames[i].version
                td2.style.border = "1px solid"
                tr.append(td2)

                table.append(tr)
            }
            table.style.border = "1px solid blue"
            table.style.textAlign = "center"
            body.append(table)
        })
})