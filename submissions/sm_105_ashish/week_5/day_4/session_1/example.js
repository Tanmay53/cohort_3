var custArr=[]
var btn=document.getElementById("btn")   
//creating constructor for storing customers input. 
function Customer(fName,lName,dob,balance,accountno,shareHolders){
    this['First Name'] = fName,
    this['Last Name']= lName,
    this['Date of Birth']=dob,
    this['Balance']=balance,
    this['Account no']=accountno,
    this['Share Account Holders']=shareHolders    
}
//creating function to get data from input box in constructor and pushing it into empty array.
function addCustomer(){
    event.preventDefault()
    var fn=document.getElementById("firstName").value
    var ln=document.getElementById("lastName").value
    var db=document.getElementById("dateOfBirth").value
    var blnc=document.getElementById("balance").value
    var acc=document.getElementById("accountNo").value
    var sah=document.getElementById("shareAccountHolders").value.split(',')
    var newcustomer=new Customer(fn,ln,db,blnc,acc,sah)
    custArr.push(newcustomer)
    console.log(custArr) 
}
//creating form reset function to empty the input box after submitting value
function formReset(){
    document.getElementById("firstName").value=''
    document.getElementById("lastName").value=''
    document.getElementById("dateOfBirth").value=''
    document.getElementById("balance").value=''
    document.getElementById("accountNo").value=''
    document.getElementById("shareAccountHolders").value=''
}
//adding eventlistener to the button
btn.addEventListener('click',function(){
    addCustomer()
    formReset()
})
var btna=document.getElementById("btn2")
Customer.getData =function getData(){
    var str=''
    custArr.forEach(function(ele){
        
        for(key in ele){

            str=str+key+':'+ele[key]+"\n"
            var print=document.getElementById('displayContainer')
            var word=document.createElement('p')
            word.innerHTML=str
            print.appendChild(word)
            str=''
        }
    })
    
    
    console.log(str)
    custArr=[]
}

btna.addEventListener("click",Customer.getData)



