var query = $('#search')
$('#go').on('click', search)
function search() {
    $('#page li').remove()
    $.ajax({
        method: "GET",
        url: 'https://indreed.herokuapp.com/api/jobs?q=' + query.val(),
    })
        .done(function (res) {
            console.log(res)
            var len = res.length / 10
            for (i=1; i<len+1; i++) {
                $('#page').append('<li class="page-item"><a class="page-link bg-primary text-white" href="#">' + i + '</a></li>')
            }
            $('#tb > tr').remove()
            for (j=0; j<10; j++) {
                    var tr= document.createElement('tr')
                    tb.appendChild(tr)
                    str=''
                    for (key in res[j]) {
                        var td= document.createElement('td')
                        tr.appendChild(td)
                        td.textContent= res[j][key]
                        }
                }
            
            $('.page-link').click(function(){
            $('#tb > tr').remove()
            var c= Number($(this).text())
            var c2= 1+((c-1)*10)
                for (j=c2; j<(c*10); j++) {
                    var tr= document.createElement('tr')
                    tb.appendChild(tr)
                    str=''
                    for (key in res[j-1]) {
                        var td= document.createElement('td')
                        tr.appendChild(td)
                        td.textContent= res[j-1][key]
                        }
                }
            })

        })
}


