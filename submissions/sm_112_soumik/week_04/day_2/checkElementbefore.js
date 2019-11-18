function checkEle(arr1) {
  var arrnew = [];
  arrnew = arr1.reduce(function(element, c) {
    return element + c;
  });
  console.log(arrnew);
}
checkEle([100, 300, 400, 500, 1200]);
