

// items
var gItems = {
  dairy: ["Milk", "Curd", "Cheese", "Paneer", "Butter"], 
  dairyPrice: [22, 15, 25, 66, 30],
  fruits: ["Apple", "Mango", "Guava", "Orange", "Grape"],
  fruitsPrice: [55, 44, 32, 66, 52],
  vegetables: ["Tomato", "Cucumber", "Cauliflower", "Onion", "Potato"],
  vegetablesPrice: [20, 30, 40, 25, 100, 10],
  pulses: ["Chana", "Moong", "Pigeon pea"],
  pulsesPrice: [30, 40, 45, 35],
  snacks: ["Pancake", "Bhujia", "Samosa", "Chips"],
  snacksPrice: [25, 15, 20, 10]

}
// Add Eployee List
// addElist.addEventListener(click, takeInput)
// // addElist.addEventListener(click, )
// var addEmployee = document.getElementById("addElist")
// var added = []
// // function eList(name, jobTitle, Salary, Department){
// //         this.name = name,
// //         this.jobTitle = jobTitle,
// //         this.Salary = Salary,
// //         this.Department = Department
// // }
// function takeInput(){
//         var data1 = name.value
//         var data2 = job.value
//         var data3 = salary.value
//         var data3 = department.value
//         var emp = newEmp(data1, data2, data3, data4)
//         added.push(emp)
// }
// function eList(){
//         document.getElementById("test").innerHTML = added
// }



function show(){
  
  var gProduct = document.getElementById("Grocery").value
  
  var button = document.createElement('button')
  button.innerHTML = '<button>add<button'
  
  // Grid view after search
  if(gProduct == "DAIRY"){
        //Header
document.getElementById("item1").innerHTML = "Dairy Items"
document.getElementById("item1").style.color = "orange" 
document.getElementById("item1").style.background = "white"
document.getElementById("item2").style.color = "green"
document.getElementById("item2").style.background = "white"
document.getElementById("item3").style.color = "orange"
document.getElementById("item3").style.background = "white" 
        //Item list
document.getElementById("item4").innerHTML = gItems.dairy[0]
document.getElementById("item5").innerHTML
document.getElementById("item6").innerHTML = gItems.dairyPrice[0]
// document.getElementById("item6").appendChild(button)
document.getElementById("item7").innerHTML = gItems.dairy[1]
document.getElementById("item8").innerHTML 
document.getElementById("item9").innerHTML = gItems.dairyPrice[1]
document.getElementById("item10").innerHTML = gItems.dairy[2]
document.getElementById("item11").innerHTML
document.getElementById("item12").innerHTML = gItems.dairyPrice[2]
document.getElementById("item13").innerHTML = gItems.dairy[3]
document.getElementById("item14").innerHTML
document.getElementById("item15").innerHTML = gItems.dairyPrice[3]
document.getElementById("item16").innerHTML = gItems.dairy[4]
document.getElementById("item17").innerHTML
document.getElementById("item18").innerHTML = gItems.dairyPrice[4]
}
else if(gProduct == "FRUITS"){
          //Header
  document.getElementById("item1").innerHTML = "Fresh Fruits"
  document.getElementById("item1").style.color = "red" 
  document.getElementById("item1").style.background = "white"
  document.getElementById("item2").style.color = "green"
  document.getElementById("item2").style.background = "white"
  document.getElementById("item3").style.color = "orange"
  document.getElementById("item3").style.background = "white" 
          //Item List
  document.getElementById("item4").innerHTML = gItems.fruits[0]
  document.getElementById("item5").innerHTML
  document.getElementById("item6").innerHTML = gItems.fruitsPrice[0]
  document.getElementById("item7").innerHTML = gItems.fruits[1]
  document.getElementById("item8").innerHTML 
  document.getElementById("item9").innerHTML = gItems.fruitsPrice[1]
  document.getElementById("item10").innerHTML = gItems.fruits[2]
  document.getElementById("item11").innerHTML
  document.getElementById("item12").innerHTML = gItems.fruitsPrice[2]
  document.getElementById("item13").innerHTML = gItems.fruits[3]
  document.getElementById("item14").innerHTML
  document.getElementById("item15").innerHTML = gItems.fruitsPrice[3]
  document.getElementById("item16").innerHTML = gItems.fruits[4]
  document.getElementById("item17").innerHTML
  document.getElementById("item18").innerHTML = gItems.fruitsPrice[4]
  }
  else if(gProduct == "VEGETABLES"){
              //Header
    document.getElementById("item1").innerHTML = "Green Vegetables"
    document.getElementById("item1").style.color = "green" 
    document.getElementById("item1").style.background = "white"
    document.getElementById("item2").style.color = "green"
    document.getElementById("item2").style.background = "white"
    document.getElementById("item3").style.color = "green"
    document.getElementById("item3").style.background = "white" 
              //Item List
    document.getElementById("item4").innerHTML = gItems.vegetables[0]
    document.getElementById("item5").innerHTML
    document.getElementById("item6").innerHTML
    document.getElementById("item7").innerHTML = gItems.vegetables[1]
    document.getElementById("item8").innerHTML 
    document.getElementById("item9").innerHTML
    document.getElementById("item10").innerHTML = gItems.vegetables[2]
    document.getElementById("item11").innerHTML
    document.getElementById("item12").innerHTML
    document.getElementById("item13").innerHTML = gItems.vegetables[3]
    document.getElementById("item14").innerHTML
    document.getElementById("item15").innerHTML
    document.getElementById("item16").innerHTML = gItems.vegetables[4]
    document.getElementById("item17").innerHTML
    document.getElementById("item18").innerHTML
    }
    else if(gProduct == "PULSES"){
                //Header
      document.getElementById("item1").innerHTML = "Pulses"
      document.getElementById("item1").style.color = "brown" 
      document.getElementById("item1").style.background = "white"
      document.getElementById("item2").style.color = "red"
      document.getElementById("item2").style.background = "white"
      document.getElementById("item3").style.color = "orange"
      document.getElementById("item3").style.background = "white" 
              //Item List
      document.getElementById("item4").innerHTML = gItems.pulses[0]
      document.getElementById("item5").innerHTML
      document.getElementById("item6").innerHTML
      document.getElementById("item7").innerHTML = gItems.pulses[1]
      document.getElementById("item8").innerHTML 
      document.getElementById("item9").innerHTML
      document.getElementById("item10").innerHTML = gItems.pulses[2]
      document.getElementById("item11").innerHTML
      document.getElementById("item12").innerHTML
      document.getElementById("item13").innerHTML = gItems.pulses[3]
      document.getElementById("item14").innerHTML
      document.getElementById("item15").innerHTML
      document.getElementById("item16").innerHTML = gItems.pulses[4]
      document.getElementById("item17").innerHTML
      document.getElementById("item18").innerHTML
      }
      else if(gProduct == "SNACKS"){
                  //Header
        document.getElementById("item1").innerHTML = "Snacks"
        document.getElementById("item1").style.color = "orange" 
        document.getElementById("item1").style.background = "white"
        document.getElementById("item2").style.color = "green"
        document.getElementById("item2").style.background = "white"
        document.getElementById("item3").style.color = "orange"
        document.getElementById("item3").style.background = "white" 
                  //Item List
        document.getElementById("item4").innerHTML = gItems.snacks[0]
        document.getElementById("item5").innerHTML
        document.getElementById("item6").innerHTML
        document.getElementById("item7").innerHTML = gItems.snacks[1]
        document.getElementById("item8").innerHTML 
        document.getElementById("item9").innerHTML
        document.getElementById("item10").innerHTML = gItems.snacks[2]
        document.getElementById("item11").innerHTML
        document.getElementById("item12").innerHTML
        document.getElementById("item13").innerHTML = gItems.snacks[3]
        document.getElementById("item14").innerHTML
        document.getElementById("item15").innerHTML
        document.getElementById("item16").innerHTML = gItems.snacks[4]
        document.getElementById("item17").innerHTML
        document.getElementById("item18").innerHTML
        }
  }
  var employ = {
        design: ["Atul", "Abhay", "Abhishek"],
        designJobtitle: ["Senior Designer", "Assistant Designer"],
        designSalory: [25000, 21000],
        engineer: ["Manish", "Ayush", "Abhishek", "Ankit"],
        engineerJobTitle: ["Sr. Engineer", "Jr. Engineer"],
        engineerSalory: [45000, 29000],
        hr : ["Amitabh Bachan"],
        HRsalory : [34000],
        marketing: ["Akash", "Deepak", "Ankita"],
        marketingJobTitle: ["BDE", "BDO"],
        marketingSalory: [30000, 24000],
        sales : ["Ankita", "Seema", "Sweta", "Rakhi", "Jyoti"],
        salesJobTitle: ["Sales Manager", "Sales Representative"],
        saleSalory: [28000, 20000]
      }
  function checkData(){
        var eList = document.getElementById("employee").value
        if(eList == "Design"){
                document.getElementById("data5").innerHTML = employ.design[0]
                document.getElementById("data6").innerHTML = employ.designJobtitle[0]
                document.getElementById("data7").innerHTML = employ.designSalory[0]
                document.getElementById("data8").innerHTML = "Design"
                document.getElementById("data9").innerHTML = employ.design[1]
                document.getElementById("data10").innerHTML = employ.designJobtitle[1]
                document.getElementById("data11").innerHTML = employ.designSalory[1]
                document.getElementById("data12").innerHTML = "Design"
                document.getElementById("data13").innerHTML = employ.design[2]
                document.getElementById("data14").innerHTML = employ.designJobtitle[1]
                document.getElementById("data15").innerHTML = employ.designSalory[1]
                document.getElementById("data16").innerHTML = "Design"
        }
        else if(eList == "Engineering"){
                document.getElementById("data5").innerHTML = employ.engineer[0]
                document.getElementById("data6").innerHTML = employ.engineerJobTitle[0]
                document.getElementById("data7").innerHTML = employ.engineerSalory[0]
                document.getElementById("data8").innerHTML = "Engineer"
                document.getElementById("data9").innerHTML = employ.engineer[1]
                document.getElementById("data10").innerHTML = employ.engineerJobTitle[1]
                document.getElementById("data11").innerHTML = employ.engineerSalory[1]
                document.getElementById("data12").innerHTML = "Engineer"
                document.getElementById("data13").innerHTML = employ.engineer[2]
                document.getElementById("data14").innerHTML = employ.engineerJobTitle[1]
                document.getElementById("data15").innerHTML = employ.engineerSalory[1]
                document.getElementById("data16").innerHTML = "Engineer"
                document.getElementById("data17").innerHTML = employ.engineer[3]
                document.getElementById("data18").innerHTML = employ.engineerJobTitle[1]
                document.getElementById("data19").innerHTML = employ.engineerSalory[1]
                document.getElementById("data20").innerHTML = "Engineer"
        }
        else if(eList == "HR"){
                document.getElementById("data5").innerHTML = employ.hr[0]
                document.getElementById("data6").innerHTML = "Human Resource"
                document.getElementById("data7").innerHTML = employ.HRsalory[0]
                document.getElementById("data8").innerHTML = "HR"
                document.getElementById("data9").innerHTML 
                document.getElementById("data10").innerHTML 
                document.getElementById("data11").innerHTML 
                document.getElementById("data12").innerHTML  
                document.getElementById("data13").innerHTML 
                document.getElementById("data14").innerHTML 
                document.getElementById("data15").innerHTML 
                document.getElementById("data16").innerHTML  
                document.getElementById("data17").innerHTML 
                document.getElementById("data18").innerHTML 
                document.getElementById("data19").innerHTML 
                document.getElementById("data20").innerHTML  
        }
        else if(eList == "Marketing"){
                document.getElementById("data5").innerHTML = employ.marketing[0]
                document.getElementById("data6").innerHTML = employ.marketingJobTitle[0]
                document.getElementById("data7").innerHTML = employ.marketingSalory[0]
                document.getElementById("data8").innerHTML = "Marketing"
                document.getElementById("data9").innerHTML = employ.marketing[1]
                document.getElementById("data10").innerHTML = employ.marketingJobTitle[1]
                document.getElementById("data11").innerHTML = employ.marketingSalory[1]
                document.getElementById("data12").innerHTML = "Marketing"
                document.getElementById("data13").innerHTML = employ.marketing[2]
                document.getElementById("data14").innerHTML = employ.marketingJobTitle[1]
                document.getElementById("data15").innerHTML = employ.marketingSalory[1]
                document.getElementById("data16").innerHTML = "Marketing"
                document.getElementById("data17").innerHTML = employ.marketing[3]
                document.getElementById("data18").innerHTML = employ.marketingJobTitle[1]
                document.getElementById("data19").innerHTML = employ.marketingSalory[1]
                document.getElementById("data20").innerHTML = "Marketing"
        }
        else if(eList == "Sales"){
                document.getElementById("data5").innerHTML = employ.sales[0]
                document.getElementById("data6").innerHTML = employ.salesJobTitle[0]
                document.getElementById("data7").innerHTML = employ.saleSalory[0]
                document.getElementById("data8").innerHTML = "Sales"
                document.getElementById("data9").innerHTML = employ.sales[1]
                document.getElementById("data10").innerHTML = employ.salesJobTitle[1]
                document.getElementById("data11").innerHTML = employ.saleSalory[1]
                document.getElementById("data12").innerHTML = "Sales"
                document.getElementById("data13").innerHTML = employ.sales[2]
                document.getElementById("data14").innerHTML = employ.salesJobTitle[1]
                document.getElementById("data15").innerHTML = employ.saleSalory[1]
                document.getElementById("data16").innerHTML = "Sales"
                document.getElementById("data17").innerHTML = employ.sales[3]
                document.getElementById("data18").innerHTML = employ.salesJobTitle[1]
                document.getElementById("data19").innerHTML = employ.saleSalory[1]
                document.getElementById("data20").innerHTML = "Sales"
        }
  }