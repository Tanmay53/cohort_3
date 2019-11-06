var firstName = 'Rahul' , reverseStr = '';
  var arr = firstName.split('');
  for ( var i = arr.length-1; i >= 0 ; i-- ){
      reverseStr = reverseStr + arr[i];
  }
  console.log(reverseStr);
