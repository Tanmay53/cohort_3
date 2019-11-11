vaule=10;
number=2;
function average(vaule,number){
    var sum=0;
    var count =0;
    for (i=0;i<=vaule;i++){
        if(i % number == 0){
            sum=sum+i;
            count = count + 1;
        }
        
    }
    return console.log('Average ='+ sum/count);
}
average(vaule,number);