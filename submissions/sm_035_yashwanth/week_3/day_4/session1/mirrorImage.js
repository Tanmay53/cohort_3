var capital ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var small ="abcdefghijklmnopqrstuvwxyz"
var str =""
function mirror(string){
    for (i = 0;i< string.length; i++) {
        for (j = 0; j<capital.length ; j++) {
         if(string[i] == capital[j] ){
             str += capital[25-j]
         }
         else if(string[i] == small[j]) {
          str += small[25-j]
         }       
        }
    }
    console.log(str)
}
mirror("AyzB")