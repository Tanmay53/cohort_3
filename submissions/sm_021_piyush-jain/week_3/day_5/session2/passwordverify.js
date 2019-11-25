var piyush={
    name:"piyush",
    email:"piyush@gmail.com",
    password:"hello"
  }
  function passwordverify(Object,_string)
  {
    if(Object.password===_string)
      console.log("Correct password")
    else 
      console.log(" its Not correct")
  }
  var bye="hello"
  passwordverify(piyush,bye);