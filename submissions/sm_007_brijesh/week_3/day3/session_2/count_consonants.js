function count_consonent(consonent) {
  var count = 0
  for (i = 0; i <consonent.length; i++) {
    if (consonent[i] !== "a" && consonent[i] !== "e" && consonent[i] !== "i" && consonent[i] !== "o" && consonent !== "u") {
      count++
    }console.log(count)
  }
  return count
}
console.log(count_consonent("brijeshkumar"))