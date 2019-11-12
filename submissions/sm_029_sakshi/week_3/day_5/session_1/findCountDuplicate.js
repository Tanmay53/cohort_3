function findCountDuplicates(arr1, val1) {

    var myArr = {
      array: arr1,
      value: val1,
      func: function() {
        var count = 0;
        
        for(i = 0; i < this.array.length; i++) {
          if(this.array[i] === this.value) {
            count++;
          }
        }
  
        return count;
      }
    }
    return myArr.func()
  }
  
  console.log(findCountDuplicates([1,2,3,4,2,1,1,1,1,1,3,1,1,3,3,], 3))