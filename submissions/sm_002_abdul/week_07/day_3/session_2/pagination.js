var data; //let's begin by declaring universal var data and details
var details;


window.addEventListener('load',function(){
  console.log('loading')
  var xhr = new XMLHttpRequest() //a new xhr request to get the data from api on windows loading
  xhr.open('GET','http://localhost:8000/students') //get the data from api
  xhr.onload = function(){
      data =JSON.parse(xhr.response); //parse the data from json and 'displayPages' function takes the data as input;
      displayPages();
  }
  xhr.send()
});

document.querySelector('#perPageValues').addEventListener('change',displayPages);

function displayPages(){ //here we are defining 'displayPages' function

  var pageNumberBlock=document.querySelector('#pageNumberBlock'); //value at the end of the table to display buttons of pagenumbers

  $(pageNumberBlock).html(''); //inner html as empty

  var perPageValues=$('#perPageValues').val(); //get the per page view selected by user

  var totalNoOfPages=Math.ceil(data.length/perPageValues); 
  //example-->totalNoOfPages= data length-->100/per page view-->25 --->4 pages

  console.log(`per page value ${perPageValues} and total number of pages are ${totalNoOfPages} `);

  for (var i=1;i<=totalNoOfPages;i++){ //we iterate 'totalNoOfPages' times and create button those many times

    var pagesButton=document.createElement('button'); 
    $(pageNumberBlock).append(pagesButton); //append that to botton of page in 'pageNumberBlock' section
    pagesButton.setAttribute('value',i); //button is given unique id as i=1,2,3,.....

    pagesButton.addEventListener('click',displaySelectedPage); //when button is clicked 'displaySelectedPage' is invoked
    $(pagesButton).html(i); //inner html is set to i=1,2,3,...
  }

}

function displaySelectedPage(event){

  var perPageValues=$('#perPageValues').val();//no of tables that needs to be displayed (selected by user on UI)

  var currentPageNumber=event.target.value; //button 1 displays page 1 // button 2 displays page 2 as same id "i" is given to button

  var beginning=currentPageNumber*perPageValues-perPageValues; //if button 1 is clicked and 10 perPageValue is selected
  //then beginning= 1*10-10 --->0

  var totalValuesInPage=parseInt(beginning)+parseInt(perPageValues);
  //totalValuesInPage= 0+10--->10

  var tableBlock=$('#tableBlock'); //table block from html is selected

  $(tableBlock).html('');// inner html is emptied

  var table=document.createElement('table'); //table and table row to append headings is created and heading values are given
  var HeadingRow=document.createElement('tr');
  var idHeading=document.createElement('th');
  var firstNameHeading=document.createElement('th');
  var lastNameHeading=document.createElement('th');
  var emailHeading=document.createElement('th');
  var genderHeading=document.createElement('th');
  var engHeading=document.createElement('th');
  var mathsHeading=document.createElement('th');
  var scienceHeading=document.createElement('th');
  var totalmarksHeading=document.createElement('th');

  $(idHeading).text('Id');
  $(firstNameHeading).text('First Name');
  $(lastNameHeading).text('Last Name');
  $(emailHeading).text('E Mail');
  $(genderHeading).text('Gender');
  $(engHeading).text('English');
  $(mathsHeading).text('Maths');
  $(scienceHeading).text('Science');
  $(totalmarksHeading).text('Total Marks');

  HeadingRow.appendChild(idHeading);
  HeadingRow.appendChild(firstNameHeading);
  HeadingRow.appendChild(lastNameHeading);
  HeadingRow.appendChild(emailHeading);
  HeadingRow.appendChild(genderHeading);
  HeadingRow.appendChild(engHeading);
  HeadingRow.appendChild(mathsHeading);
  HeadingRow.appendChild(scienceHeading);
  HeadingRow.appendChild(totalmarksHeading);

  table.appendChild(HeadingRow);

  for (var i=beginning;i<totalValuesInPage;i++){ //iterated from beginning to (beginning+total) values that can be displayed
    var idCol=document.createElement('td');
    var fnameCol=document.createElement('td'); //data values are appended here to table by creating td
    var lnameCol=document.createElement('td');
    var emailCol=document.createElement('td');
    var genderCol=document.createElement('td');
    var engCol=document.createElement('td');
    var mathsCol=document.createElement('td');
    var scienceCol=document.createElement('td');
    var totalMarksCol=document.createElement('td');

    $(idCol).text(data[i].id);
    $(fnameCol).text(data[i].first_name);
    $(lnameCol).text(data[i].last_name);
    $(emailCol).text(data[i].email);
    $(genderCol).text(data[i].gender);
    $(engCol).text(data[i].english);
    $(mathsCol).text(data[i].maths);
    $(scienceCol).text(data[i].science);
    var totalMarks=parseInt(data[i].english)+parseInt(data[i].maths)+parseInt(data[i].science);
    $(totalMarksCol).text(totalMarks);

    var row=document.createElement('tr');
    row.appendChild(idCol);
    row.appendChild(fnameCol);
    row.appendChild(lnameCol);
    row.appendChild(emailCol);
    row.appendChild(genderCol);
    row.appendChild(engCol);
    row.appendChild(mathsCol);
    row.appendChild(scienceCol);
    row.appendChild(totalMarksCol);

    $(table).append(row);
  }
  $(table).addClass('table');
  $(tableBlock).append(table);
}


function swap(array,p,q){
  var temp=array[p];
  array[p]=array[q];
  array[q]=temp;
}


document.querySelector('#sorting').addEventListener('change',function(){

  if ($('#sorting').val()=='ascending'){
    console.log('sorting in ascending order');

    for (var i=0;i<data.length-1;i++){
      for (var j=0;j<data.length-1-i;j++){
        if (data[j].first_name>data[j+1].first_name){
          swap(data,j,j+1);
        }
      }
    }
    var sortedData=data;
    sortedPage(sortedData);
  }

  if ($('#sorting').val()=='descending'){
    console.log('sorting in descending order');
    for (var i=0;i<data.length-1;i++){
      for (var j=0;j<data.length-1-i;j++){
        if (data[j].first_name<data[j+1].first_name){
          swap(data,j,j+1);
        }
      }
    }
    var sortedData=data;
    sortedPage(sortedData);
  }

})

function sortedPage(sortedData){
  var pageNumberBlock=document.querySelector('#pageNumberBlock'); //value at the end of the table to display buttons of pagenumbers

  $(pageNumberBlock).html(''); //inner html as empty

  var perPageValues=$('#perPageValues').val(); //get the per page view selected by user

  var totalNoOfPages=Math.ceil(sortedData.length/perPageValues); 
  //example-->totalNoOfPages= data length-->100/per page view-->25 --->4 pages

  console.log(`per page value ${perPageValues} and total number of pages are ${totalNoOfPages} `);

  for (var i=1;i<=totalNoOfPages;i++){ //we iterate 'totalNoOfPages' times and create button those many times

    var pagesButton=document.createElement('button'); 
    $(pageNumberBlock).append(pagesButton); //append that to botton of page in 'pageNumberBlock' section
    pagesButton.setAttribute('value',i); //button is given unique id as i=1,2,3,.....
    $(pagesButton).html(i);
    pagesButton.addEventListener('click',function(event){

      var perPageValues=$('#perPageValues').val();//no of tables that needs to be displayed (selected by user on UI)

      var currentPageNumber=event.target.value; //button 1 displays page 1 // button 2 displays page 2 as same id "i" is given to button

      var beginning=currentPageNumber*perPageValues-perPageValues; //if button 1 is clicked and 10 perPageValue is selected
      //then beginning= 1*10-10 --->0

      var totalValuesInPage=parseInt(beginning)+parseInt(perPageValues);
      //totalValuesInPage= 0+10--->10

      var tableBlock=$('#tableBlock'); //table block from html is selected

      $(tableBlock).html('');// inner html is emptied

      var table=document.createElement('table'); //table and table row to append headings is created and heading values are given
      var HeadingRow=document.createElement('tr');
      var idHeading=document.createElement('th');
      var firstNameHeading=document.createElement('th');
      var lastNameHeading=document.createElement('th');
      var emailHeading=document.createElement('th');
      var genderHeading=document.createElement('th');
      var engHeading=document.createElement('th');
      var mathsHeading=document.createElement('th');
      var scienceHeading=document.createElement('th');
      var totalmarksHeading=document.createElement('th');

      $(idHeading).text('Id');
      $(firstNameHeading).text('First Name');
      $(lastNameHeading).text('Last Name');
      $(emailHeading).text('E Mail');
      $(genderHeading).text('Gender');
      $(engHeading).text('English');
      $(mathsHeading).text('Maths');
      $(scienceHeading).text('Science');
      $(totalmarksHeading).text('Total Marks');

      HeadingRow.appendChild(idHeading);
      HeadingRow.appendChild(firstNameHeading);
      HeadingRow.appendChild(lastNameHeading);
      HeadingRow.appendChild(emailHeading);
      HeadingRow.appendChild(genderHeading);
      HeadingRow.appendChild(engHeading);
      HeadingRow.appendChild(mathsHeading);
      HeadingRow.appendChild(scienceHeading);
      HeadingRow.appendChild(totalmarksHeading);

      table.appendChild(HeadingRow);

      for (var i=beginning;i<totalValuesInPage;i++){ //iterated from beginning to (beginning+total) values that can be displayed
        var idCol=document.createElement('td');
        var fnameCol=document.createElement('td'); //data values are appended here to table by creating td
        var lnameCol=document.createElement('td');
        var emailCol=document.createElement('td');
        var genderCol=document.createElement('td');
        var engCol=document.createElement('td');
        var mathsCol=document.createElement('td');
        var scienceCol=document.createElement('td');
        var totalMarksCol=document.createElement('td');

        $(idCol).text(sortedData[i].id);
        $(fnameCol).text(sortedData[i].first_name);
        $(lnameCol).text(sortedData[i].last_name);
        $(emailCol).text(sortedData[i].email);
        $(genderCol).text(sortedData[i].gender);
        $(engCol).text(sortedData[i].english);
        $(mathsCol).text(sortedData[i].maths);
        $(scienceCol).text(sortedData[i].science);
        var totalMarks=parseInt(sortedData[i].english)+parseInt(sortedData[i].maths)+parseInt(sortedData[i].science);
        $(totalMarksCol).text(totalMarks);

        var row=document.createElement('tr');
        row.appendChild(idCol);
        row.appendChild(fnameCol);
        row.appendChild(lnameCol);
        row.appendChild(emailCol);
        row.appendChild(genderCol);
        row.appendChild(engCol);
        row.appendChild(mathsCol);
        row.appendChild(scienceCol);
        row.appendChild(totalMarksCol);

        $(table).append(row);
      }

      $(table).addClass('table');
      $(tableBlock).append(table);
    }); 
  }
}

document.querySelector('#filtering').addEventListener('change',filteredPage)

function filteredPage(e){

  var selectedGender=e.target.value;

  console.log(selectedGender);

  var pageNumberBlock=document.querySelector('#pageNumberBlock'); //value at the end of the table to display buttons of pagenumbers

  $(pageNumberBlock).html(''); //inner html as empty

  var perPageValues=$('#perPageValues').val(); //get the per page view selected by user

  var totalNoOfPages=Math.ceil(data.length/perPageValues); 
  //example-->totalNoOfPages= data length-->100/per page view-->25 --->4 pages

  console.log(`per page value ${perPageValues} and total number of pages are ${totalNoOfPages} `);

  for (var i=1;i<=totalNoOfPages;i++){ //we iterate 'totalNoOfPages' times and create button those many times

    var pagesButton=document.createElement('button'); 
    $(pageNumberBlock).append(pagesButton); //append that to botton of page in 'pageNumberBlock' section
    pagesButton.setAttribute('value',i); //button is given unique id as i=1,2,3,.....

    pagesButton.addEventListener('click',function(evnt){

      var perPageValues=$('#perPageValues').val();//no of tables that needs to be displayed (selected by user on UI)

      var currentPageNumber=evnt.target.value; //button 1 displays page 1 // button 2 displays page 2 as same id "i" is given to button

      var beginning=currentPageNumber*perPageValues-perPageValues; //if button 1 is clicked and 10 perPageValue is selected
      //then beginning= 1*10-10 --->0

      var totalValuesInPage=parseInt(beginning)+parseInt(perPageValues);
      //totalValuesInPage= 0+10--->10

      var tableBlock=$('#tableBlock'); //table block from html is selected

      $(tableBlock).html('');// inner html is emptied

      var table=document.createElement('table'); //table and table row to append headings is created and heading values are given
      var HeadingRow=document.createElement('tr');
      var idHeading=document.createElement('th');
      var firstNameHeading=document.createElement('th');
      var lastNameHeading=document.createElement('th');
      var emailHeading=document.createElement('th');
      var genderHeading=document.createElement('th');
      var engHeading=document.createElement('th');
      var mathsHeading=document.createElement('th');
      var scienceHeading=document.createElement('th');
      var totalmarksHeading=document.createElement('th');

      $(idHeading).text('Id');
      $(firstNameHeading).text('First Name');
      $(lastNameHeading).text('Last Name');
      $(emailHeading).text('E Mail');
      $(genderHeading).text('Gender');
      $(engHeading).text('English');
      $(mathsHeading).text('Maths');
      $(scienceHeading).text('Science');
      $(totalmarksHeading).text('Total Marks');

      HeadingRow.appendChild(idHeading);
      HeadingRow.appendChild(firstNameHeading);
      HeadingRow.appendChild(lastNameHeading);
      HeadingRow.appendChild(emailHeading);
      HeadingRow.appendChild(genderHeading);
      HeadingRow.appendChild(engHeading);
      HeadingRow.appendChild(mathsHeading);
      HeadingRow.appendChild(scienceHeading);
      HeadingRow.appendChild(totalmarksHeading);

      table.appendChild(HeadingRow);

      for (var i=beginning;i<totalValuesInPage;i++){
         //iterated from beginning to (beginning+total) values that can be displayed

        if (data[i].gender==selectedGender){
          var idCol=document.createElement('td');
          var fnameCol=document.createElement('td'); //data values are appended here to table by creating td
          var lnameCol=document.createElement('td');
          var emailCol=document.createElement('td');
          var genderCol=document.createElement('td');
          var engCol=document.createElement('td');
          var mathsCol=document.createElement('td');
          var scienceCol=document.createElement('td');
          var totalMarksCol=document.createElement('td');

          $(idCol).text(data[i].id);
          $(fnameCol).text(data[i].first_name);
          $(lnameCol).text(data[i].last_name);
          $(emailCol).text(data[i].email);
          $(genderCol).text(data[i].gender);
          $(engCol).text(data[i].english);
          $(mathsCol).text(data[i].maths);
          $(scienceCol).text(data[i].science);
          var totalMarks=parseInt(data[i].english)+parseInt(data[i].maths)+parseInt(data[i].science);
          $(totalMarksCol).text(totalMarks);

          var row=document.createElement('tr');
          row.appendChild(idCol);
          row.appendChild(fnameCol);
          row.appendChild(lnameCol);
          row.appendChild(emailCol);
          row.appendChild(genderCol);
          row.appendChild(engCol);
          row.appendChild(mathsCol);
          row.appendChild(scienceCol);
          row.appendChild(totalMarksCol);

          $(table).append(row);
        }
        $(table).addClass('table');
        $(tableBlock).append(table);
      }
    }); 
  $(pagesButton).html(i); //inner html is set to i=1,2,3,...
  }

}

document.querySelector('#sortingByMarks').addEventListener('change',function(){

  if ($('#sortingByMarks').val()=='lowToHigh'){
    console.log('sorting marks from low to high');

    for (var i=0;i<data.length-1;i++){
      for (var j=0;j<data.length-1-i;j++){
        if((parseInt(data[j].english)+parseInt(data[j].maths)+parseInt(data[j].science))>(parseInt(data[j+1].english)+parseInt(data[j+1].maths)+parseInt(data[j+1].science))){
          swap(data,j,j+1);
        }
      }
    }
    var sortedByMarks=data;
    sortedPage(sortedByMarks);
  }

  if ($('#sortingByMarks').val()=='highToLow'){
    console.log('sorting marks from high to low');

    for (var i=0;i<data.length-1;i++){
      for (var j=0;j<data.length-1-i;j++){
        if((parseInt(data[j].english)+parseInt(data[j].maths)+parseInt(data[j].science))<(parseInt(data[j+1].english)+parseInt(data[j+1].maths)+parseInt(data[j+1].science))){
          swap(data,j,j+1);
        }
      }
    }
    var sortedByMarks=data;
    sortedPage(sortedByMarks);
  }

})

