arrS = [];
var form = document.getElementById('form');
form.addEventListener('submit', input);
function input(evt) {
  evt.preventDefualt();
  var stu = {
    name: form[0].value,
    std: form[1].value,
    math: Number(form[2].value),
    science: Number(form[3].value),
    english: Number(form[4].value),
    history: Number(form[5].value),
    geography: Number(form[6].value)
  };
  arrS.push(stu);
  console.log(arrS)
}
var selGrd = document.getElementById('select-grade');
select - grade.addEventListener('click', show);
function show() {
  var rst = document.getElementById('tbody');
  var childs = rst.querySelectorAll('tr');
  childs.forEach(function (element) {
    rst.removeChild(element);
  });

  var sum = 0
  var average
  arrS.forEach(function (obj) {
    sum = 0;
    average = 0;
  })
}

