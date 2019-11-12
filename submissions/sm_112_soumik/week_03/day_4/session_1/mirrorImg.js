function mirrorImg(input){
    var store=[]
    var lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var upper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    for(i=0;i<input.length;i++){
        for(j=0;j<lower.length;j++){
            if(input[i] == lower[j]){
                input[i] == lower[26-i]
            }
            else
                for(k=0;k<upper.length;k++){
                    if(input[i] ==upper[k]){
                        input[i] == upper[26-i]
                    }
                }
        }
    }
    console.log(input)
}
mirrorImg(["a","b","c","d"])