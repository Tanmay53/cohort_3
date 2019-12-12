$('#document').ready(function(){

    //var userId = 'ashish379k'
    var baseUrl = 'https://api.github.com/search/users?q='
    
    function fetchApi(){
      fetch(baseUrl+userId)
     // .then(res=>res.items[0])
      .then(res=>res.json())
      .then(res=>{
       document.getElementById('res1').textContent =JSON.stringify(res)
        console.log(res)
    //  return res.items[0].repos_url
    })
    // .then(res=>res.items[0].repos_url)
      .then(res=>fetchRepos(res))
    }
    
    
   // function fetchRepos(repo){
   //   fetch(repo)
       //.then(res=>document.getElementById('res2').textContent = JSON.sres)
   // }
    $("#button-addon2").click(function(){
        userId= $('#inputBox').val()
        fetchApi()
       // $("#res1").textContent=res
       
    })
})

