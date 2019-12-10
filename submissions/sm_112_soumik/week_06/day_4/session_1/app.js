$(document).ready(function() {
  var fname = $("#inputName").val();
  var femail = $("#inputEmail").val();
  var fmobile = $("#inputMobile").val();
  $("#inputEmail").hide();
  $("#inputMobile").hide();
  $("#email").hide();
  $("#mobile").hide();
  $("#label").hide();
  console.log(name);

  //   valid name
  $("#inputName").keyup(function() {
    var name = $(this).val();
    if (name.length < 6) {
      $("#para").text("Invalid!");
    } else {
      $("#para").text("");
      $("#inputEmail").show();
      $("#email").show();
    }
  });

  //   check valid email
  $("#inputEmail").keyup(function() {
    var email = $(this).val();
    if (email.includes("@") && email.includes(".") && email.length > 7) {
      $("#mobile").show();
      $("#inputMobile").show();
      $("#para1").text("");
      //   $("#label").show();
    } else {
      $("#para1").text("Invalid");
    }
  });
  $("#inputMoble").keyup(function() {
    var mobile = $(this).val();
    if (mobile.length < 10) {
      $("#label").hide();
    } else {
      $("#label").show();
    }
  });

  $("#btn-submit").click(function() {
    var fname = $("#inputName").val();
    var femail = $("#inputEmail").val();
    var fmobile = $("#inputMobile").val();
    $("#fname").html(fname);
    $("#femail").html(femail);
    $("#fmobile").html(fmobile);
  });
});
