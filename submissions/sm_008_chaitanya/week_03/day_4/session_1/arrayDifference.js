arr1 = [1, 2, 3, 4, 'n', 'v', 'c', 4, 4, 1, 'n', 'v']
arr2 = ['c', 5, 7, 8, 9, 4]
result = [];
function arraydifference(arr1,arr2){
  for(i = 0; i < arr1.length; i++) {
    count = arr2.length;
    flag = true
    for(j = 0; j < arr2.length; j++) {
      if(arr1[i] != arr2[j]) {
        count = count - 1;
      }
      if(count == 0) {           //[1,2,3,'n',1,'n','v']
        for (k = 0; k < result.length; k++) {
          if(arr1[i] == result[k]) {
            flag = false
            break
          }
        }
        if(flag == true) {
          result.push(arr1[i])
        }
      }

    }
  }
  return result
}
  console.log(arraydifference(arr1,arr2))