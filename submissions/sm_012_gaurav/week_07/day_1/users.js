function getData(url, id = "") {
  var request = $.ajax({
    method: "GET",
    url: url
  });

  request.done(function(data) {
    displayTable(data, id);
  });
  request.fail(function() {
    alert("Error Occured");
  });
}

function displayTable(data, id) {
  $(".container").empty();
  var table = document.createElement("table");
  $(table).addClass("table table-dark");
  var thead = document.createElement("thead");
  $(table).append(thead);
  var tr = document.createElement("tr");
  $(thead).append(tr);
  var th1 = document.createElement("th");
  $(th1).text("ID");
  $(tr).append(th1);
  var th2 = document.createElement("th");
  $(th2).text("EMAIL");
  $(tr).append(th2);
  var th3 = document.createElement("th");
  $(th3).text("FIRST NAME");
  $(tr).append(th3);
  var th4 = document.createElement("th");
  $(th4).text("LAST NAME");
  $(tr).append(th4);
  var th5 = document.createElement("th");
  $(th5).text("AVATAR");
  $(tr).append(th5);
  var tbody = document.createElement("tbody");
  $(table).append(tbody);
  for (var i = 0; i < data["data"].length; i++) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    $(td1).text(data["data"][i]["id"]);
    $(tr).append(td1);
    var td2 = document.createElement("td");
    $(td2).text(data["data"][i]["email"]);
    $(tr).append(td2);
    var td3 = document.createElement("td");
    $(td3).text(data["data"][i]["first_name"]);
    $(tr).append(td3);
    var td4 = document.createElement("td");
    $(td4).text(data["data"][i]["last_name"]);
    $(tr).append(td4);
    var td5 = document.createElement("td");
    var img = document.createElement("img");
    $(img).attr("src", data["data"][i]["avatar"]);
    $(td5).append(img);
    $(tr).append(td5);
    $(tbody).append(tr);
  }
  $(".container").append(table);
  var ul = document.createElement("ul");
  $(ul).addClass("pagination");
  $(".container").append(ul);
  var size = Number(data["total_pages"]);
  var pageUrl = "https://reqres.in/api/users/?page=";
  var li = document.createElement("li");
  $(li).addClass("page-item");
  var a = document.createElement("a");
  $(a).addClass("page-link");
  $(a).addClass("bg-dark");
  $(a).text("Previous");
  $(li).attr("id", "prev");
  $(a).click(function(e) {
    e.preventDefault();
    var activeLi = $('li[class*="active"]');
    var aTagLink = $('li[class*="active"] a').attr("href"); //Active anchor tag's href attribute.
    var aTagLink = aTagLink.split("=");
    if (Number(aTagLink[1]) > 1) {
      activeLi.removeClass("active");
      getData(
        aTagLink[0] + "=" + (Number(aTagLink[1]) - 1),
        Number(aTagLink[1]) - 1
      );
    } else {
      $(this)
        .parent()
        .addClass("disabled");
    }
  });
  $(li).append(a);
  $(ul).append(li);
  for (var i = 0; i < size; i++) {
    var li = document.createElement("li");
    $(li).addClass("page-item");
    var a = document.createElement("a");
    $(a).addClass("page-link");
    $(a).attr("href", pageUrl + (i + 1));
    $(a).addClass("bg-dark");
    $(a).text(i + 1);
    $(a).click(function(e) {
      e.preventDefault();
      $(this)
        .parent()
        .addClass("active");
      getData($(this).attr("href"), Number($(this).text()));
    });
    $(li).append(a);
    $(ul).append(li);
  }
  var li = document.createElement("li");
  $(li).addClass("page-item");
  var a = document.createElement("a");
  $(a).addClass("page-link");
  $(a).addClass("bg-dark");
  $(a).text("Next");
  $(li).attr("id", "next");
  $(a).click(function(e) {
    e.preventDefault();
    var activeLi = $('li[class*="active"]');
    var aTagLink = $('li[class*="active"] a').attr("href"); //Active anchor tag's href attribute.
    var aTagLink = aTagLink.split("=");
    if (Number(aTagLink[1]) < size) {
      activeLi.removeClass("active");
      getData(
        aTagLink[0] + "=" + (Number(aTagLink[1]) + 1),
        Number(aTagLink[1]) + 1
      );
    } else {
      $(this)
        .parent()
        .addClass("disabled");
    }
  });
  $(li).append(a);
  $(ul).append(li);
  $($(".page-item")[id]).addClass("active");
}

$(document).ready(function() {
  getData("https://reqres.in/api/users", 1);
});
