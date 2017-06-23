$(document).ready(function() {
	$("#preloader").hide();
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
		window.scrollBy(0,1000);
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
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspAhh! Thats not easy to answer... Well, nothings happening in my world, <br>what about you ?</h3></div></li>');	
		}
		var res1 =val1.match(/creat/g);
		var res4 = val1.match(/you/g);
		var res5 = val1.match(/made/g);
		if((res1 && res4) || (res5 && res4)) {
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspWell, he himself is called Gags ! :p</h3></div></li>');	
		}
		var res2 =val1.match(/date/g);
		var date = new Date();
		if(res2) {
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspIt is&nbsp' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' today, hope youre not missing someones birthday :p !</h3></div></li>');	
		}
		var res2 =val1.match(/old/g);
		if(res2) {
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspWell I was created on 23/5/2017 and whats the date today its &nbsp' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' so figure out yourself ! :p</h3></div></li>');	
		}
		var res2c =val1.match(/made/g);
		var res2d =val1.match(/were/g);
		var res2a =val1.match(/when/g);
		var res2b =val1.match(/created/g);
		if((res2a && res2b) || (res2c && res2d)) {
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspWell, I was born or created, whatever on 23/5/2017</h3></div></li>');
		}

		else {
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspAhh ! Whut ... seems alien to me, come again please !</h3></div></li>');
		}
				window.scrollBy(0,2000);
		event.preventDefault();
	});
});