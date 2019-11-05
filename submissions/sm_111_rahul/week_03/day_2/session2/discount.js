var total = 1200, discount;

if(total < 300){
    console.log('Discount is Invalid');
    console.log('Final Price: ',total);
}else{
    discount = total *10/100;
    if(discount >= 100)
    {
        discount = 100;
        console.log('Discount Price: ',discount);
        console.log('Final Price: ', total);
    }
    else{
        console.log('Discount Price: ',discount);
        console.log('Final Price: ', total);
    }
}

