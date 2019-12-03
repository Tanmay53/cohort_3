var GrocceryRecord = [];
var newRecords=[];
var ItemName,category,ItemPrice,total,newItem,newCat,newPrice,total,avg



function submit() {
  

    ItemName = document.getElementById("ItemName").value;
    category = document.getElementById("category").value;
     ItemPrice = Number(document.getElementById("ItemPrice").value);
    
     if (ItemName != "" && ItemPrice!= "")
     {
   document.getElementById("display").innerHTML = display();
   alert("groccery item added successfully")
     }
     else{
         alert("enter valid data")
        resetData();
     }
 }
   
    function resetData() {
         
        document.getElementById("ItemName").value = "";
        document.getElementById("ItemPrice").value = "";
    }
    
   
    

     function newRecord() {
        
        newItem = document.getElementById("ItemName").value;
         newCat = document.getElementById("category").value;
          newPrice = Number(document.getElementById("ItemPrice").value);
        
          alert("more items added successfully")
        newRecords.push(newItem);
        newRecords.push(newCat);
        newRecords.push( newPrice);
        document.getElementById("display2").innerHTML=newRecords+" <br> TOTAL PRICE: "+total() +"<br>"+"AVERAGE: "+avg();

    
    } 
            
    function display()
    {
        GrocceryRecord.push(ItemName)
    GrocceryRecord.push(category)
    GrocceryRecord.push(ItemPrice)
    return GrocceryRecord;
    

    }

    function total(){
           total=ItemPrice+newPrice;
           return total;
    }
    function avg(){
        avg=total/2;
        return avg;
    }
    
    
    
    