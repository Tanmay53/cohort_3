function vowels(str){
    arr=['a','e','i','o','u']
    var counts=0
    for(i=0;i<str.length;i++){
        for(j=0;j<arr.length;j++){
          if (str[i]==arr[j]){
              counts++
          }
        }
    }
    console.log(counts)
}

vowels("manishsharma")