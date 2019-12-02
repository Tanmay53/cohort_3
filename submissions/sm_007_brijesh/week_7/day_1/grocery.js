

function grocery(category){
var sum=0;
var avg;
var fruits =[24,59,34,56,23,76] ;
    if(category==dairy){
        for(var i=0;i<dairy.length;i++){
            sum +=dairy[i];
            avg=sum/daiiry.length;
            console.log("sum and avg of Dairy is",sum,avg )

        }
    }

    if(category==fruits){
        for(var j=0;j<fruits.length;j++){
            sum +=fruits[j];
            avg=sum/fruits.length;
            console.log("sum and avg of Fruits is",sum,avg )

        }
    }

    if(category==vegetable){
        for(var k=0;k<vegetable.length;k++){
            sum +=vegetable[k];
            avg=sum/vegetable.length;
            console.log("sum and avg of vegetable is",sum,avg )

        }
    }


    if(category==pulses){
        for(var l=0;l<pulses.length;l++){
            sum +=pulses[l];
            avg=sum/pulses.length;
            console.log("sum and avg of pulses is",sum,avg )

        }
    }


    if(category==snacks){
        for(var m=0;m<pulses.length;m++){
            sum +=snacks[m];
            avg=sum/snacks.length;
            console.log("sum and avg of snacks is",sum,avg )

        }
    }



}
grocery(category)