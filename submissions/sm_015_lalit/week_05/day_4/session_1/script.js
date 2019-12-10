
customerArr=[]
function Customer(firstName,lastName,birthDate,balance,accNum,sAccHold){
    this.First_Name = firstName
    this.Last_Name = lastName
    this.date_of_Birth = birthDate
    this.balance=balance
    this.Account_Num=accNum
    this.Shared_account=sAccHold.split(",")
    this.displayDetails = function () {
            customerData=""
            for (key in this){
                if (key=="displayDetails"){
                    continue
                }
                else{
                    keyData=key+":"+this[key]
                }
                
                customerData=customerData+keyData+"\n"
                
            }
            console.log(customerData)
            return customerData
            
    }

}
function addCustomer(){
var firstNameIn=document.getElementById("inputFname").value
var lastNameIn= document.getElementById("inputLname").value
var birthDateIn=document.getElementById("inputDOB").value
var balanceIn=document.getElementById("inputBal").value
var accNumIn=document.getElementById("inputAnum").value
var sAccHoldIn=document.getElementById("inputSharedAH").value
var addCustomer = new Customer(firstNameIn,lastNameIn,birthDateIn,balanceIn,accNumIn,sAccHoldIn)
customerArr.push(addCustomer)
console.log(customerArr)
}

// function createStructure(fNamex,lNamex,dObx,balX,accNumx,sAccHx){
// tRow=document.createElement("tr")
// tRow.setAttribute("class","parentRow")
// displayContainer.appendChild(tRow)
// fName=document.createElement("td")
// fName.textContent=fNamex
// tRow.appendChild(fName)
// lName=document.createElement("td")
// lName.textContent=lNamex
// tRow.appendChild(lName)
// doB=document.createElement("td")
// doB.textContent=dObx
// tRow.appendChild(doB)
// balance=document.createElement("td")
// balance.textContent=balX
// tRow.appendChild(balance)
// accNum=document.createElement("td")
// accNum.textContent=accNumx
// tRow.appendChild(accNum)
// sAccH=document.createElement("td")
// sAccH.textContent=sAccHx
// tRow.appendChild(sAccH)

// }
// var del=document.getElementsByClassName("parentRow")

function printAll(){
    var parent=document.getElementById("displayContainer")
    for (i=0;i<customerArr.length;i++){
    textPlace=document.createElement("p")
    textPlace.textContent=customerArr[i].displayDetails()
    parent.appendChild(textPlace)
    
    }
    // for (k=0;k<del.length;k++){
    //     del[k].remove()
    // }
    // for (i=0;i<customerArr.length;i++){
    //     createStructure(customerArr[i].fName,customerArr[i].lName,customerArr[i].dBirth,customerArr[i].bal,customerArr[i].aNum,customerArr[i].sAcc)
    // }
}