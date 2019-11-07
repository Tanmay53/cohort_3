var count = 0, sum = 0 , i = 0, average = 0 , num , upperLimit;
   
 function averageDivisible(num , upperLimit) {  

    while(i < upperLimit){
     if(i % num == 0){
        sum = sum + i;
        count++;
        }
         i++;
        }
  console.log(average = sum / count);
    }
 averageDivisible(5, 10)