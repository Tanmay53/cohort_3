function removeDuplicates(arr1, val1) {

    var myArr = {
      array: arr1,
      value: val1,
      func: function() {
        var count = 0;
        
        for(i = 0; i < this.array.length; i++) {
          if(this.array[i] === this.value)
           {
            count++;
            this.array.splice(i,count)
            //console.log(i)
          }
        }
  
        return this.array;
      }
    }
    return myArr.func()
  }
  
  console.log(removeDuplicates([1,2,4,5,3,9,3,3,3,3,], 3))