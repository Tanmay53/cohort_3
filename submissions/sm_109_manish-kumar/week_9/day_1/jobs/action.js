$("#hide").hide()
$("#btn").click(function(){
	var job = $("#input").val()
	$.ajax({
		url:"https://indreed.herokuapp.com/api/jobs/?q=" + job
	})
	.done(function(data){
		console.log(data)
		$("#hide").show()
		$("#com").html(JSON.stringify(data[0].company))
		$("#id2").html(JSON.stringify(data[0].id))
		$("#loc").html(JSON.stringify(data[0].location))
		$("#tit").html(JSON.stringify(data[0].title))
		$("#url").html(JSON.stringify(data[0].url))
		$("#com1").html(JSON.stringify(data[1].company))
		$("#id21").html(JSON.stringify(data[1].id))
		$("#loc1").html(JSON.stringify(data[1].location))
		$("#tit1").html(JSON.stringify(data[1].title))
		$("#url1").html(JSON.stringify(data[1].url))
		$("#com2").html(JSON.stringify(data[2].company))
		$("#id22").html(JSON.stringify(data[2].id))
		$("#loc2").html(JSON.stringify(data[2].location))
		$("#tit2").html(JSON.stringify(data[2].title))
		$("#url2").html(JSON.stringify(data[2].url))
		$("#com3").html(JSON.stringify(data[3].company))
		$("#id23").html(JSON.stringify(data[3].id))
		$("#loc3").html(JSON.stringify(data[3].location))
		$("#tit3").html(JSON.stringify(data[3].title))
		$("#url3").html(JSON.stringify(data[3].url))
		

	})
})