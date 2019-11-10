function vowels(str){
  arr=['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
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