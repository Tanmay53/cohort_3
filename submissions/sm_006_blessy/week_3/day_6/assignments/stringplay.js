let str = "BLEssyMAriya"
function stringplay(str) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lower = "abcdefghijklmnopqrstuvwxyz"
     uppertolower = ""
     count = str.length;
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < upper.length; j++) {
            if (str[i] == upper[j]) {
            
                uppertolower = uppertolower +  lower[j];
            }

           else if (str[i] == lower[j])
                uppertolower = uppertolower + lower[j]
            
    }
}
console.log (uppertolower)
}
  

