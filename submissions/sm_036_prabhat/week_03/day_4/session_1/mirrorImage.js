var str ="";
var small = "abcdefghigklmnopqrstuvwxyz";
var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function mirrorImage (alpha){
    for (var i = 0; i < alpha.length; i++){
      var capCount = cap.indexOf(alpha[i]);
        if (capCount >= 0){
          str += cap[25-capCount];
        }
        else{
          var smallCount = small.indexOf(alpha[i]);
          str += small[25-smallCount]
        }
    }
    return str;
  }
console.log(mirrorImage("Az"))