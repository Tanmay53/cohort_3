var arr = []
function submit() {
    var table_data = document.getElementById('tabl');
    var row = document.createElement('tr');
    table_data.appendChild(row);

    var colum1 = document.createElement('td');
    colum1.innerHTML = document.getElementById('product').value;
    row.appendChild(colum1);
    var colum2 = document.createElement('td');
    colum2.innerHTML = document.getElementById('price').value;
    row.appendChild(colum2);
    var colum3 = document.createElement('td');
    colum3.innerHTML = document.getElementById('quantity').value;
    row.appendChild(colum3);
    var colum4 = document.createElement('td');
    row.appendChild(colum4);
    colum4.innerHTML = (document.getElementById('price').value)*(document.getElementById('quantity').value) ;
    


    var pr = document.getElementById('price').value;
    var qnty = document.getElementById('quantity').value;
    var final = document.getElementById("grandCol");
    var eachProduct = (pr * qnty);
    arr.push(eachProduct);
    // console.log(eachProduct, arr);
    var sum = 0;
    for (i = 0; i < arr.length; i++) { 
        sum = sum + arr[i];
    }
    final.innerHTML =sum + " Rupees";


}
function change_font() {
  
    var table_data = document.getElementById("tabl");
    var insiz =document.getElementById("fSiz").value;
    var insiz=Number(insiz)
    table_data.style.fontSize= insiz + "px";
}
function change_color() {
    var table_data = document.getElementById("tabl");
    var colors = document.getElementById("color1").value;
    table_data.style.color =colors
}
function change_background() {
    var table_data = document.getElementById("tabl");
    var colors = document.getElementById("color2").value;
    table_data.style.backgroundColor =colors
  

}