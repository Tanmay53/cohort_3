// UI variables
var show = document.getElementById('showData');
var input = document.getElementById('input');
var input1 = document.getElementById('input1');
var btn = document.querySelector('.buttonValue');
var btn2 = document.querySelector('#buttonValue2');
var inputVal


// Add Event Listener to button
btn.addEventListener('click', takeInput);
btn2.addEventListener('click', takeInput2);

// Function to take input box 1
function takeInput(e) {
  e.preventDefault();
  inputVal = input.value 
  input.value = ''
  getDataByApi()
}

// Function to take input
function takeInput2(e) {
  e.preventDefault();
  inputVal = input1.value
  input1.value = ''
  
  getDataByApi()
}


function getDataByApi() {
  $.get({
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?api_key=65be194fd8b889a68a3c247bad502fed&language=en-US&query=${inputVal}&page=1&include_adult=false`
  })
    .done(function (data) {
    printData(data.results)
  })
inputVal = ''
}

function printData(data) {
  show.innerHTML = ''
  for (var i = 0; i < 6; i++) {
    var title = data[i].title
    var rating = data[i].vote_average
    var imgUrl = 'https://image.tmdb.org/t/p/w500' + data[i].poster_path
  

    // Create h5
    var h5 = document.createElement('h5')
    h5.classList.add('card-title')
    h5.innerHTML = title
    // Create p
    var p = document.createElement('p')
    p.classList.add('card-text')
    p.innerHTML = "Rating : " + rating
    // Create h5
    var a = document.createElement('a')
    a.classList.add('btn', 'btn-primary')
    a.setAttribute('href', 'ulr')
    a.innerHTML = 'Show Details'
    // Create div1
    var div1 = document.createElement('div')
    div1.classList.add('card-body')
    // Append a, p, h5 in div1
    div1.appendChild(h5)
    div1.appendChild(p)
    div1.appendChild(a)
    // Create img tag
    var imge = document.createElement('img')
    imge.classList.add('card-img-top')
    imge.setAttribute('src', imgUrl)
    // Create Parent of imge and div1
    var cardDiv = document.createElement('div')
    cardDiv.classList.add('card', 'col-14')
    // Append imge and div1 to cardDiv
    cardDiv.appendChild(imge)
    cardDiv.appendChild(div1)
    // create parent div of cardDiv
    var colDiv = document.createElement('div')
    colDiv.classList.add('col-4','py-3')
    // Append cardDiv to colDiv
    colDiv.appendChild(cardDiv)
    // Append colDiv to show
    show.appendChild(colDiv)
    
  }
  
}