var arr = ["Ram", "is", "a", "good"];

function join(char) {
  str = "";
  for (var i = 0; i < arr.length; i++) {
    str += arr[i] + " ";
  }
  console.log(str + char);
}
join("boy");
