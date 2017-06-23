$(document).ready(function() {
	$("#form1").hide();
	var name;
	$("#buttons").click(function(e) {
		var val = $("#msg").val();
		$("#list").append('<li> <div class="jumbotron"><h3>' + val +'</h3></div></li>');
		name = $("li:nth-child(2) .jumbotron h3").html();
		var introSen = "" + name + "&nbspfeel free too ask me anything, anytime!";
		if(name) {
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspHey&nbsp' + name +'!</h3></div></li>').fadeIn(2000);
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp' + introSen +'!</h3></div></li>').fadeIn(2000);
		}
		$("#form").hide();
		$("#form1").show();
		e.preventDefault();
	});
	$("#buttons1").click(function(event) {
		var val1 = $("#msg1").val();
		$("#list").append('<li> <div class="jumbotron"><h3><b>'+ name + ':</b>&nbsp' + val1 +'</h3></div></li>');
		$("#msg1").val('');
		var res = val1.match(/up/g);
		if(res) {
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspAhh! Thats not easy to answer... Well, nothings happening in my world, what about you ?</h3></div></li>');	
		}
		var res1 =val1.match(/creat/g);
		if(res1) {
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspWell, he himself is called Gags ! :p</h3></div></li>');	
		}
		var res2 =val1.match(/date/g);
		var date = new Date();
		if(res2) {
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspIt is&nbsp' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' today, hope youre not missing someones birthday :p !</h3></div></li>');	
		}
		event.preventDefault();
	});
});