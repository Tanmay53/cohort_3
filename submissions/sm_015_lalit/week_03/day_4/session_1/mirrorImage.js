function mirrorImage(input){
    var stringUPPER="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var stringlower="abcdefghijklmnopqrstuvwxyz"
    var output=''
    var len=input.length
    for (i=0;i<len;i++){
        for (j=0;j<26;j++){
            if (input[i]===stringUPPER[j]){
                output+=stringUPPER[25-j]
                break;
            }
            else if (input[i] === stringlower[j]) {
                output+=stringlower[25-j]
                break;
            }
        }
    }
    console.log(output)
}
mirrorImage("AyzB")
