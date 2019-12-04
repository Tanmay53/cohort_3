var string="yashwanth"
var vowels=['a','e','i','o','u']
count=0
  for(i=0;i<string.length;i++){
      for(j=0;j<vowels.length;j++){
       if(string[i]==vowels[j]){
        count += 1
       }
      }
  }


console.log(count)