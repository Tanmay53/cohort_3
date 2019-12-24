var input= $('.inputs')
$('#cont2').hide()
var dataArr=[]
$('#submit').click(function(){
    for(let i=2;i<5;i++){
        if($($(input)[i]).val()=='' || $($(input)[7]).val()==''){
            alert('please fill all the mandatory details')
            return
        }
    }
    var obj={
        fname: $($(input)[0]).val() || 'First-name',
        lname: $($(input)[1]).val() || 'Last-name',
        username: $($(input)[2]).val(),
        password:$($(input)[3]).val(),
        email: $($(input)[4]).val(),
        address: $($(input)[5]).val() || 'address',
        phone: $($(input)[6]).val() || 'phone number',
        type: $($(input)[7]).val()
    }
    dataArr.push(obj)
    // console.log(dataArr)
   
    $('#select > option').remove()
    for(let i=0;i<dataArr.length;i++){
                $('#select').append(`<option>${dataArr[i].fname}</option>`)
            }
    $('#cont2').show()        
})

$('#select').change(function(){
    $('#cont1 > h5').remove()
    var user= dataArr.filter(function(e){
        return e.fname == $('#select').val()
    })
    if(user[0].type=='User'){
        $('#cont1').append(`<h5>Welcome ${user[0].fname} ${user[0].lname} to the Masai group</h5>
                        <h5>Don't worry, we won't spam you.</h5>
                        <h5>Your email id ${user[0].email} is secured with us. </h5>`)
    }
    else if(user[0].type=='Admin'){
        $('#cont1').append(`<h5>Hello ${user[0].fname} ${user[0].lname}. Welcome back</h5>
                        <h5>We've sent the details of your previous logs to ${user[0].email}</h5>`)
    }
})

$('#category').change(function(){
    $('#tb > tr').remove()
    if($('#category').val()=='All'){
        for(let i=0;i<dataArr.length;i++){
            $('#tb').append(`<tr><td>${dataArr[i].fname}</td><td>${dataArr[i].lname}</td><td>${dataArr[i].username}</td><td>${dataArr[i].password}</td><td>${dataArr[i].email}</td><td>${dataArr[i].address}</td><td>${dataArr[i].phone}</td><td>${dataArr[i].type}</td><td><div class='del btn btn-dark'>Delete</div><td></tr>`)
        }
        $('#sort').on('change',()=>sorting(dataArr)) 
    }
    else if($('#category').val()=='User'){
        var Arr= dataArr.filter((e)=> e.type=='User')
        for(let i=0;i<Arr.length;i++){
            $('#tb').append(`<tr><td>${Arr[i].fname}</td><td>${Arr[i].lname}</td><td>${Arr[i].username}</td><td>${Arr[i].password}</td><td>${Arr[i].email}</td><td>${Arr[i].address}</td><td>${Arr[i].phone}</td><td>${Arr[i].type}</td><td><div class='del btn btn-dark'>Delete</div><td></tr>`)
        }
        $('#sort').on('change',()=>sorting(Arr))    
    }
    else if($('#category').val()=='Admin'){
        var Arr2= dataArr.filter((e)=> e.type=='Admin')
        for(let i=0;i<Arr2.length;i++){
            $('#tb').append(`<tr><td>${Arr2[i].fname}</td><td>${Arr2[i].lname}</td><td>${Arr2[i].username}</td><td>${Arr2[i].password}</td><td>${Arr2[i].email}</td><td>${Arr2[i].address}</td><td>${Arr2[i].phone}</td><td>${Arr2[i].type}</td><td><div class='del btn btn-dark'>Delete</div><td></tr>`)
        }
        $('#sort').on('change',()=>sorting(Arr2))  
    }

    $('.del').click(function(){
        $(this).parent().parent().remove()
    })
})

function sorting(array){
    $('#tb > tr').remove()
    if($('#sort').val()=='Ascending'){
        array.sort(function(a, b) {
            let x = a.fname.toLowerCase()
            let y = b.fname.toLowerCase()
            if(x < y) { return -1 }
            if(x > y) { return 1 }
            return 0
        })
        for(let i=0;i<array.length;i++){
            $('#tb').append(`<tr><td>${array[i].fname}</td><td>${array[i].lname}</td><td>${array[i].username}</td><td>${array[i].password}</td><td>${array[i].email}</td><td>${array[i].address}</td><td>${array[i].phone}</td><td>${array[i].type}</td><td><div class='del btn btn-dark'>Delete</div><td></tr>`)
        }
    }
    else if($('#sort').val()=='Descending'){
        array.sort(function(a, b) {
            let x = a.fname.toLowerCase()
            let y = b.fname.toLowerCase()
            if(x < y) { return -1 }
            if(x > y) { return 1 }
            return 0
        })
        array.reverse()
        for(let i=0;i<array.length;i++){
            $('#tb').append(`<tr><td>${array[i].fname}</td><td>${array[i].lname}</td><td>${array[i].username}</td><td>${array[i].password}</td><td>${array[i].email}</td><td>${array[i].address}</td><td>${array[i].phone}</td><td>${array[i].type}</td><td><div class='del btn btn-dark'>Delete</div><td></tr>`)
        }
    }
}
