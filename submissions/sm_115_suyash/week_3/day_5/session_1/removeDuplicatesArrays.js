function getUnique(array) {
  var newArray = []
  for(i=0; i < array.length; i++){
    for (j = i+1; j < array.length; j++) {
      if (array[i] == array[j]) {
        array[j] = null;
        // array.pop(null);
      }
    }
  }
  for(k = 0; k < array.length; k++) {
    if (array[k] !== null) {
      newArray[k] = array[k];
    }
  }
  return newArray;
}

var names = ["Suyash", "Shomik", "Lalaa", "Amit", "Amit", "Suyash", "Lalaa", "Amit", "Amit", "Suyash"]
  console.log(getUnique(names))