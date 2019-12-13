function chnagestatus(object,key) {
   
        
        if (key=="Basic") {
            object["status"] = "Basic";
            object["creditLimit"] = 80000;
            
        }
        else if ( key=="Premium") {
            object["status"] = "Premium";
            object["creditLimit"] = 300000;
        }
        else if (key=="Platinum") {
            object["status"] = "Platinum";
            object["creditLimit"] = 600000;
        }
        return object
    }
    var obj={
        status:"basic",
        creditLimit:1232343

    }
  
    console.log(chnagestatus(obj,"Basic"))