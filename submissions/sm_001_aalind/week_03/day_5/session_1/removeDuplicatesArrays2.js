// Write a function to remove duplicates from an array
// Use Objects

function findCountDuplicates(arr, val) {

  var myArr = {
    arr: arr,
    value: val,
    func: function() {
      var count = 0;
      
      for(i = 0; i < this.arr.length; i++) {
        if(this.arr[i] === this.value) {
          count++;
        }
      }

      return count;
    }
  }

  return myArr.func()
}

console.log(findCountDuplicates([1,2,3,4,2,3,1,1,3,3,], 1))