function arrMul(arr1, val) {
  var arrnew = [];
  arrnew = arr1.map(function(ele) {
    return ele * val;
  });
  console.log(arrnew);
}
arrMul([10, 30], 5);
