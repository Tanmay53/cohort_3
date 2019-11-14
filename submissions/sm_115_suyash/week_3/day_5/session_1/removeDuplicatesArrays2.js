function getUnique(names) {
  newArray = []
  for (i = 0; i < names.allPerson.length; i++) {
    for (j = i + 1; j < names.allPerson.length; j++) {
      if (names.allPerson[i] == names.allPerson[j]) {
        names.allPerson[j] = null;
      }
    }
  }
  for (k = 0; k < names.allPerson.length; k++) {
    if (names.allPerson[k] !== null) {
      newArray[k] = names.allPerson[k]
    }
  }
  return newArray;
}

var input = {
  allPerson: ["Suyash", "Shomik", "Krishna", "Amit", "Lalaa", "Amit", "Suyash", "Krishna", "Amit", "Lalaa", "Amit", "Suyash", "Krishna", "Amit", "Lalaa", "Amit", "Suyash", "Krishna", "Amit", "Lalaa", "Amit", "Suyash"],
};

console.log(getUnique(input))