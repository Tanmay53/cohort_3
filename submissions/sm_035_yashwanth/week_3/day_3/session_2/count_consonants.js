var string="yashwanth"
var vowels=['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
count=0
  for(i=0;i<string.length;i++){
      for(j=0;j<vowels.length;j++){
       if(string[i]==vowels[j]){
        count += 1
       }
      }
  }


console.log(count)