function chechDis(name1,name2){
    count = 0
    // console.log(name1.length)
    for(i =0 ;i< name1.length;i++){
        // console.log(name1[i])
        for(j =0;j<name2.length;j++){

            if(name1[i] == name2[j]){
                count += 1
                // count += console.log(name1[i])
            }
        }
    }
    if(count == 0){
        console.log("Disjoint")
    }
    else{
        console.log("Not Disjoint!")
    }
}
chechDis("Soumik","Acharjee")