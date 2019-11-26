var sum , avg , count,num ;
count = 0;
sum = 0;
avg = 0;
num= 4;
for(i = 1;i < 20;i++) {
    if(i%num == 0) {
    sum = sum+i;
    count = count +1;
    // console.log(i)
    }
}
avg = sum/count;
    console.log(avg)