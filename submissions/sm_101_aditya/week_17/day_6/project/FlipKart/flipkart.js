// constructor
// function AllData(si, icons, brand, manufacture, price) {
//     this.si = si,
//       this.icons = icons,
//       this.brand = brand,
//       this.manufacture = manufacture,
//       this.price = price, 
//   };
//   var data = new AllData(id, Brand, Price, Details, Color, Manufacture)

var productData = [{ "si": 1, "icons": "http://dummyimage.com/117x232.jpg/dddddd/000000", "brand": "Suzuki", "manufacture": "10/25/2019", "price": 1221532 },
{ "si": 2, "icons": "http://dummyimage.com/126x242.bmp/dddddd/000000", "brand": "Hyundai", "manufacture": "7/10/2019", "price": 1063950 },
{ "si": 3, "icons": "http://dummyimage.com/233x118.jpg/cc0000/ffffff", "brand": "Honda", "manufacture": "1/28/2020", "price": 335786 },
{ "si": 4, "icons": "http://dummyimage.com/228x174.jpg/cc0000/ffffff", "brand": "Mercedes-Benz", "manufacture": "12/2/2019", "price": 485244 },
{ "si": 5, "icons": "http://dummyimage.com/148x181.bmp/dddddd/000000", "brand": "Pontiac", "manufacture": "3/27/2019", "price": 791047 },
{ "si": 6, "icons": "http://dummyimage.com/120x142.png/ff4444/ffffff", "brand": "Toyota", "manufacture": "9/10/2019", "price": 1290038 },
{ "si": 7, "icons": "http://dummyimage.com/181x118.jpg/cc0000/ffffff", "brand": "Lexus", "manufacture": "12/17/2019", "price": 1070107 },
{ "si": 8, "icons": "http://dummyimage.com/111x138.jpg/cc0000/ffffff", "brand": "Volkswagen", "manufacture": "4/28/2019", "price": 534254 },
{ "si": 9, "icons": "http://dummyimage.com/152x227.png/5fa2dd/ffffff", "brand": "Lexus", "manufacture": "8/7/2019", "price": 240209 },
{ "si": 10, "icons": "http://dummyimage.com/130x134.bmp/dddddd/000000", "brand": "Geo", "manufacture": "8/8/2019", "price": 714096 },
{ "si": 11, "icons": "http://dummyimage.com/130x183.bmp/ff4444/ffffff", "brand": "Honda", "manufacture": "11/26/2019", "price": 1223203 },
{ "si": 12, "icons": "http://dummyimage.com/149x159.png/5fa2dd/ffffff", "brand": "Shelby", "manufacture": "8/21/2019", "price": 1027178 },
{ "si": 13, "icons": "http://dummyimage.com/201x112.jpg/dddddd/000000", "brand": "Mercury", "manufacture": "12/14/2019", "price": 1111230 },
{ "si": 14, "icons": "http://dummyimage.com/123x220.jpg/dddddd/000000", "brand": "Toyota", "manufacture": "7/4/2019", "price": 577101 },
{ "si": 15, "icons": "http://dummyimage.com/184x223.jpg/5fa2dd/ffffff", "brand": "Dodge", "manufacture": "6/10/2019", "price": 322886 },
{ "si": 16, "icons": "http://dummyimage.com/116x199.bmp/5fa2dd/ffffff", "brand": "Buick", "manufacture": "11/19/2019", "price": 631266 },
{ "si": 17, "icons": "http://dummyimage.com/139x247.jpg/cc0000/ffffff", "brand": "Acura", "manufacture": "5/7/2019", "price": 315618 },
{ "si": 18, "icons": "http://dummyimage.com/143x120.bmp/dddddd/000000", "brand": "Dodge", "manufacture": "9/5/2019", "price": 998813 },
{ "si": 19, "icons": "http://dummyimage.com/190x230.bmp/dddddd/000000", "brand": "Pontiac", "manufacture": "10/15/2019", "price": 583216 },
{ "si": 20, "icons": "http://dummyimage.com/130x237.jpg/dddddd/000000", "brand": "Lincoln", "manufacture": "11/24/2019", "price": 534855 },
{ "si": 21, "icons": "http://dummyimage.com/243x147.png/5fa2dd/ffffff", "brand": "Ford", "manufacture": "4/1/2019", "price": 805396 },
{ "si": 22, "icons": "http://dummyimage.com/165x227.png/ff4444/ffffff", "brand": "Subaru", "manufacture": "7/22/2019", "price": 1374886 },
{ "si": 23, "icons": "http://dummyimage.com/179x246.bmp/cc0000/ffffff", "brand": "Kia", "manufacture": "8/3/2019", "price": 1024052 },
{ "si": 24, "icons": "http://dummyimage.com/138x234.jpg/5fa2dd/ffffff", "brand": "GMC", "manufacture": "8/18/2019", "price": 685370 },
{ "si": 25, "icons": "http://dummyimage.com/228x150.bmp/cc0000/ffffff", "brand": "Mercedes-Benz", "manufacture": "6/18/2019", "price": 466268 },
{ "si": 26, "icons": "http://dummyimage.com/131x199.bmp/dddddd/000000", "brand": "Pontiac", "manufacture": "8/6/2019", "price": 322071 },
{ "si": 27, "icons": "http://dummyimage.com/158x241.png/5fa2dd/ffffff", "brand": "Oldsmobile", "manufacture": "8/20/2019", "price": 1262482 },
{ "si": 28, "icons": "http://dummyimage.com/208x124.bmp/dddddd/000000", "brand": "GMC", "manufacture": "11/11/2019", "price": 955203 },
{ "si": 29, "icons": "http://dummyimage.com/242x126.jpg/cc0000/ffffff", "brand": "Ford", "manufacture": "4/21/2019", "price": 425851 },
{ "si": 30, "icons": "http://dummyimage.com/230x134.jpg/dddddd/000000", "brand": "Audi", "manufacture": "10/20/2019", "price": 320594 },
{ "si": 31, "icons": "http://dummyimage.com/216x105.bmp/ff4444/ffffff", "brand": "Plymouth", "manufacture": "1/23/2020", "price": 323398 },
{ "si": 32, "icons": "http://dummyimage.com/203x250.bmp/cc0000/ffffff", "brand": "Mercury", "manufacture": "5/20/2019", "price": 811897 },
{ "si": 33, "icons": "http://dummyimage.com/184x179.png/cc0000/ffffff", "brand": "Ford", "manufacture": "1/13/2020", "price": 252024 },
{ "si": 34, "icons": "http://dummyimage.com/126x123.jpg/cc0000/ffffff", "brand": "GMC", "manufacture": "3/12/2019", "price": 797491 },
{ "si": 35, "icons": "http://dummyimage.com/167x244.png/dddddd/000000", "brand": "Honda", "manufacture": "2/9/2020", "price": 533546 },
{ "si": 36, "icons": "http://dummyimage.com/185x205.bmp/cc0000/ffffff", "brand": "Jaguar", "manufacture": "7/19/2019", "price": 904689 },
{ "si": 37, "icons": "http://dummyimage.com/239x163.bmp/dddddd/000000", "brand": "Ford", "manufacture": "10/24/2019", "price": 538921 },
{ "si": 38, "icons": "http://dummyimage.com/182x217.bmp/dddddd/000000", "brand": "Mercury", "manufacture": "6/29/2019", "price": 1191985 },
{ "si": 39, "icons": "http://dummyimage.com/224x155.jpg/cc0000/ffffff", "brand": "Hyundai", "manufacture": "10/9/2019", "price": 1003883 },
{ "si": 40, "icons": "http://dummyimage.com/174x145.bmp/cc0000/ffffff", "brand": "Kia", "manufacture": "7/23/2019", "price": 1094289 },
{ "si": 41, "icons": "http://dummyimage.com/189x126.png/cc0000/ffffff", "brand": "Lexus", "manufacture": "10/20/2019", "price": 1390659 },
{ "si": 42, "icons": "http://dummyimage.com/223x200.bmp/5fa2dd/ffffff", "brand": "Mitsubishi", "manufacture": "11/2/2019", "price": 558049 },
{ "si": 43, "icons": "http://dummyimage.com/227x152.jpg/ff4444/ffffff", "brand": "Chrysler", "manufacture": "7/9/2019", "price": 949944 },
{ "si": 44, "icons": "http://dummyimage.com/189x138.bmp/dddddd/000000", "brand": "Lexus", "manufacture": "11/17/2019", "price": 834910 },
{ "si": 45, "icons": "http://dummyimage.com/226x182.png/ff4444/ffffff", "brand": "Volvo", "manufacture": "8/16/2019", "price": 1063584 },
{ "si": 46, "icons": "http://dummyimage.com/126x141.jpg/ff4444/ffffff", "brand": "Buick", "manufacture": "5/19/2019", "price": 316235 },
{ "si": 47, "icons": "http://dummyimage.com/149x167.jpg/ff4444/ffffff", "brand": "Saab", "manufacture": "9/13/2019", "price": 412160 },
{ "si": 48, "icons": "http://dummyimage.com/175x188.jpg/dddddd/000000", "brand": "Nissan", "manufacture": "9/26/2019", "price": 425510 },
{ "si": 49, "icons": "http://dummyimage.com/212x249.bmp/ff4444/ffffff", "brand": "Dodge", "manufacture": "2/22/2019", "price": 749066 },
{ "si": 50, "icons": "http://dummyimage.com/198x234.bmp/dddddd/000000", "brand": "Jeep", "manufacture": "11/27/2019", "price": 1161876 },
{ "si": 51, "icons": "http://dummyimage.com/153x223.jpg/cc0000/ffffff", "brand": "Chevrolet", "manufacture": "3/7/2019", "price": 628676 },
{ "si": 52, "icons": "http://dummyimage.com/142x138.bmp/ff4444/ffffff", "brand": "Chevrolet", "manufacture": "2/10/2020", "price": 1319551 },
{ "si": 53, "icons": "http://dummyimage.com/169x138.png/ff4444/ffffff", "brand": "Lexus", "manufacture": "3/13/2019", "price": 421426 },
{ "si": 54, "icons": "http://dummyimage.com/150x139.bmp/dddddd/000000", "brand": "Mercedes-Benz", "manufacture": "2/15/2019", "price": 381276 },
{ "si": 55, "icons": "http://dummyimage.com/235x221.png/cc0000/ffffff", "brand": "Chevrolet", "manufacture": "12/25/2019", "price": 279567 },
{ "si": 56, "icons": "http://dummyimage.com/218x206.jpg/dddddd/000000", "brand": "BMW", "manufacture": "5/15/2019", "price": 1371719 },
{ "si": 57, "icons": "http://dummyimage.com/250x244.png/5fa2dd/ffffff", "brand": "Acura", "manufacture": "6/29/2019", "price": 1278030 },
{ "si": 58, "icons": "http://dummyimage.com/143x133.png/cc0000/ffffff", "brand": "Mazda", "manufacture": "11/22/2019", "price": 509175 },
{ "si": 59, "icons": "http://dummyimage.com/227x170.png/cc0000/ffffff", "brand": "Mercedes-Benz", "manufacture": "9/3/2019", "price": 1143727 },
{ "si": 60, "icons": "http://dummyimage.com/247x168.bmp/5fa2dd/ffffff", "brand": "Acura", "manufacture": "9/4/2019", "price": 674705 },
{ "si": 61, "icons": "http://dummyimage.com/203x230.png/dddddd/000000", "brand": "Eagle", "manufacture": "12/18/2019", "price": 1348754 },
{ "si": 62, "icons": "http://dummyimage.com/150x142.jpg/5fa2dd/ffffff", "brand": "Pontiac", "manufacture": "6/8/2019", "price": 170768 },
{ "si": 63, "icons": "http://dummyimage.com/136x126.bmp/ff4444/ffffff", "brand": "Plymouth", "manufacture": "9/21/2019", "price": 382869 },
{ "si": 64, "icons": "http://dummyimage.com/205x140.bmp/cc0000/ffffff", "brand": "Pontiac", "manufacture": "10/18/2019", "price": 318988 },
{ "si": 65, "icons": "http://dummyimage.com/108x123.bmp/cc0000/ffffff", "brand": "Dodge", "manufacture": "7/11/2019", "price": 1321652 },
{ "si": 66, "icons": "http://dummyimage.com/235x119.png/dddddd/000000", "brand": "Acura", "manufacture": "11/28/2019", "price": 830154 },
{ "si": 67, "icons": "http://dummyimage.com/246x141.png/5fa2dd/ffffff", "brand": "Porsche", "manufacture": "3/10/2019", "price": 1418888 },
{ "si": 68, "icons": "http://dummyimage.com/246x150.bmp/cc0000/ffffff", "brand": "Dodge", "manufacture": "3/1/2019", "price": 385504 },
{ "si": 69, "icons": "http://dummyimage.com/203x180.jpg/dddddd/000000", "brand": "Honda", "manufacture": "6/4/2019", "price": 612602 },
{ "si": 70, "icons": "http://dummyimage.com/104x176.bmp/5fa2dd/ffffff", "brand": "Mazda", "manufacture": "6/4/2019", "price": 445984 },
{ "si": 71, "icons": "http://dummyimage.com/227x210.jpg/dddddd/000000", "brand": "Mercedes-Benz", "manufacture": "8/31/2019", "price": 948119 },
{ "si": 72, "icons": "http://dummyimage.com/225x189.jpg/ff4444/ffffff", "brand": "Mercedes-Benz", "manufacture": "3/1/2019", "price": 863530 },
{ "si": 73, "icons": "http://dummyimage.com/218x247.bmp/ff4444/ffffff", "brand": "Maybach", "manufacture": "12/16/2019", "price": 724877 },
{ "si": 74, "icons": "http://dummyimage.com/184x130.bmp/ff4444/ffffff", "brand": "Ford", "manufacture": "5/28/2019", "price": 926146 },
{ "si": 75, "icons": "http://dummyimage.com/191x162.bmp/5fa2dd/ffffff", "brand": "Dodge", "manufacture": "12/25/2019", "price": 1407831 },
{ "si": 76, "icons": "http://dummyimage.com/176x125.bmp/dddddd/000000", "brand": "GMC", "manufacture": "9/10/2019", "price": 1175046 },
{ "si": 77, "icons": "http://dummyimage.com/119x161.jpg/dddddd/000000", "brand": "Ford", "manufacture": "10/27/2019", "price": 734233 },
{ "si": 78, "icons": "http://dummyimage.com/122x230.png/cc0000/ffffff", "brand": "Ford", "manufacture": "2/10/2020", "price": 197283 },
{ "si": 79, "icons": "http://dummyimage.com/109x215.jpg/cc0000/ffffff", "brand": "Toyota", "manufacture": "2/13/2020", "price": 437275 },
{ "si": 80, "icons": "http://dummyimage.com/173x184.jpg/cc0000/ffffff", "brand": "Pontiac", "manufacture": "12/24/2019", "price": 708129 },
{ "si": 81, "icons": "http://dummyimage.com/136x243.bmp/cc0000/ffffff", "brand": "Honda", "manufacture": "3/2/2019", "price": 653705 },
{ "si": 82, "icons": "http://dummyimage.com/119x179.png/5fa2dd/ffffff", "brand": "Dodge", "manufacture": "1/24/2020", "price": 686253 },
{ "si": 83, "icons": "http://dummyimage.com/202x129.png/ff4444/ffffff", "brand": "Acura", "manufacture": "11/14/2019", "price": 455215 },
{ "si": 84, "icons": "http://dummyimage.com/119x200.jpg/cc0000/ffffff", "brand": "Land Rover", "manufacture": "11/16/2019", "price": 953950 },
{ "si": 85, "icons": "http://dummyimage.com/189x187.png/5fa2dd/ffffff", "brand": "Lincoln", "manufacture": "10/18/2019", "price": 1063764 },
{ "si": 86, "icons": "http://dummyimage.com/109x179.jpg/5fa2dd/ffffff", "brand": "Kia", "manufacture": "5/19/2019", "price": 444957 },
{ "si": 87, "icons": "http://dummyimage.com/216x132.bmp/dddddd/000000", "brand": "Mitsubishi", "manufacture": "6/28/2019", "price": 1182954 },
{ "si": 88, "icons": "http://dummyimage.com/198x161.bmp/dddddd/000000", "brand": "Volkswagen", "manufacture": "4/8/2019", "price": 424302 },
{ "si": 89, "icons": "http://dummyimage.com/205x104.bmp/dddddd/000000", "brand": "Subaru", "manufacture": "12/6/2019", "price": 1440957 },
{ "si": 90, "icons": "http://dummyimage.com/238x191.bmp/5fa2dd/ffffff", "brand": "Cadillac", "manufacture": "11/28/2019", "price": 246845 },
{ "si": 91, "icons": "http://dummyimage.com/116x220.png/dddddd/000000", "brand": "Bentley", "manufacture": "10/27/2019", "price": 609133 },
{ "si": 92, "icons": "http://dummyimage.com/199x131.bmp/dddddd/000000", "brand": "Mazda", "manufacture": "8/20/2019", "price": 1084480 },
{ "si": 93, "icons": "http://dummyimage.com/127x127.jpg/cc0000/ffffff", "brand": "Plymouth", "manufacture": "4/13/2019", "price": 865131 },
{ "si": 94, "icons": "http://dummyimage.com/230x246.jpg/ff4444/ffffff", "brand": "Bentley", "manufacture": "12/18/2019", "price": 770244 },
{ "si": 95, "icons": "http://dummyimage.com/169x142.png/dddddd/000000", "brand": "Mercury", "manufacture": "12/5/2019", "price": 554625 },
{ "si": 96, "icons": "http://dummyimage.com/107x194.bmp/cc0000/ffffff", "brand": "Honda", "manufacture": "9/14/2019", "price": 368159 },
{ "si": 97, "icons": "http://dummyimage.com/158x149.jpg/ff4444/ffffff", "brand": "Land Rover", "manufacture": "1/5/2020", "price": 1108460 },
{ "si": 98, "icons": "http://dummyimage.com/107x208.jpg/cc0000/ffffff", "brand": "Audi", "manufacture": "12/16/2019", "price": 1277379 },
{ "si": 99, "icons": "http://dummyimage.com/150x232.bmp/cc0000/ffffff", "brand": "Mitsubishi", "manufacture": "3/21/2019", "price": 977576 },
{ "si": 100, "icons": "http://dummyimage.com/223x162.png/dddddd/000000", "brand": "Mercedes-Benz", "manufacture": "7/17/2019", "price": 1370360 }];

var arr = JSON.stringify(productData)
localStorage.setItem("data", arr)

function all1() {
  alert("get")
  let getArr = JSON.parse(localStorage.getItem("data"))
  getArr.forEach((ele, i) => {
    $("#all2").append(`<div class="container">
        <div id="cartid${i}">
        <div class="card mt-2" style="width: 18rem;">
  <img src="https://icdn3.digitaltrends.com/image/digitaltrends/p90262036-highres-500x300-c.jpg"]}" class="card-img-top img-fluid" alt="icon image">
  <div class="card-body" >
    <h5 class="card-title">Brand :${ele["brand"]}</h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Launch on ${ele["manufacture"]}</li>
    <li class="list-group-item">Price : ${ele["price"]}</li>
    <li class="list-group-item"></li>
  </ul>
  <div class="card-body">
  <button type="button" class="btn btn-outline-success" onclick= "cartbtn(${i})">Add to Cart</button>
  </div>
</div>
</div>
</div>
        `)
  });
}
var addedArr1 = []
function cartbtn(i) {
  alert("Added")
  event.preventDefault();
  let addArr = JSON.parse(localStorage.getItem("data"))
  addedArr1.push(addArr[i])
  var addedArr2 = JSON.stringify(addedArr1)
  localStorage.setItem("data1", addedArr2)
}
function openCart() {
  window.location.href = "cart.html"
}

// cart items

// var addedData = [];
// console.log(addedData)
// var arr1 = JSON.stringify(addedData)
// localStorage.setItem("data1", arr1)
// console.log(arr1)

function cartItems() {
  event.preventDefault();
  alert("ready")
  let getArr1 = JSON.parse(localStorage.getItem("data1"))
  console.log(getArr1.icons)
  getArr1.forEach((ele, i) => {

    $("#cartShow").append(`<div class="container">
        <div id="getCartid${i}">
        <div class="card mt-2" style="width: 18rem;">
  <img src="https://icdn3.digitaltrends.com/image/digitaltrends/p90262036-highres-500x300-c.jpg"]}" class="card-img-top img-fluid" alt="icon image">
  <div class="card-body" >
    <h5 class="card-title">Brand : ${ele["brand"]}</h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Launch on ${ele["manufacture"]}</li>
    <li class="list-group-item">Price : ${ele["price"]}</li>
    <li class="list-group-item"></li>
  </ul>
  <div class="card-body">
  <button type="button" class="btn btn-outline-success" onclick= "cartbtnDelete(${i})">Remove</button>
  </div>
</div>
</div>
</div>
        `)
  })

}
function cartbtnDelete(e) {
  $("#getCartid"+e).remove()
}



