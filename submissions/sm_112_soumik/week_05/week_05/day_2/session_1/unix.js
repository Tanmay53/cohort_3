var body = document.querySelector("body");
function unixFunc() {
  var div1 = document.createElement("div");
  div1.setAttribute("class", "box1");
  body.appendChild(div1);
  var img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://raw.githubusercontent.com/masai-school/full-stack-dev-1908/master/course/week_01/day_3/resources/images/linus.jpg"
  );
  img.setAttribute("id", "img1");
  div1.appendChild(img);
  var para1 = document.createElement("p");
  para1.innerText = "Linus Trovalds";
  para1.setAttribute("class", "linusP");
  div1.appendChild(para1);
  var para2 = document.createElement("p");
  para2.innerText = "The Creator of Linux & Git.";
  para2.setAttribute("class", "p2");
  div1.appendChild(para2);
  var div2 = document.createElement("div");
  div2.setAttribute("class", "box2");
  body.appendChild(div2);
  var img2 = document.createElement("img");
  img2.setAttribute(
    "src",
    "https://raw.githubusercontent.com/masai-school/full-stack-dev-1908/master/course/week_01/day_3/resources/images/khan.jpg"
  );
  img2.setAttribute("id", "img2");
  div2.appendChild(img2);
  var div2a = document.createElement("div");
  div2.appendChild(div2a);
  div2a.setAttribute("class", "flex2");
  var h2Red = document.createElement("h2");
  h2Red.innerText = "SAl Khan";
  div2.appendChild(h2Red);
  var h1blk = document.createElement("h2");
  h1blk.setAttribute("class", "float");
  h1blk.innerText =
    "The Founder Of Khan Academy, who promised free enducation.";
  div2.appendChild(h1blk);
  div3 = document.createElement("div");
  div3.setAttribute("class", "box3");
  body.appendChild(div3);
  para3 = document.createElement("p");
  para3.innerText = "Ken Thompson";
  div3.appendChild(para3);
  para4.createElement("h2");
  para4.innerText = "Designed and implemented Orginal Unix operating system.";
  div3.appendChild(para4);
}
