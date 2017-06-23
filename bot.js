$(document).ready(function() {
	$("#preloader").hide();
	$("#form1").hide();
	var name, check;
	$("#buttons").click(function(e) {
		var val = $("#msg").val();
		//$("#list").append('<li> <div class="jumbotron"><h3>' + val +'</h3></div></li>');
		// name = $("li:nth-child(2) .jumbotron h3").html();
		name = val;
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
		if($("#msg1").val() == '') {
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspSay something manh!</h3></div></li>');
		}
		else {
		$("#list").append('<li> <div class="jumbotron"><h3><b>'+ name + ':</b>&nbsp' + val1 +'</h3></div></li>');
		$("#msg1").val('');
		var flag = 0, counter; 
		var res = val1.match(/up/g);
		if(res) {
			flag = 1;
 			counter = Math.floor(Math.random() * 11);  
 			switch(counter) {
 
 				case 1 :
 				case 2 : $("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspWell, nothings happening in my world, what about you ?</h3></div></li>');	
 						 break;
 				case 3 :
 				case 4 : $("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp The earth is round and space extends in all diretions.. I\'d place my bets on Matter,' + name +'! </h3></div></li>');	
 						 break;
 				case 5 :
 				case 6 : $("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp Anything that\'s not down or sideways B-) </h3></div></li>');	
 						 break;
 				case 7 :
 				case 8 : $("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp There chances of you dying alone and miserable. Yeah, its sad, I know. </h3></div></li>');	
 						 break;
 				default : $("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp GoT trailer <3 Winter Is Here peeps!.</h3></div></li>');	
 						
 			}
			// $("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspWell, nothings happening in my world, <br>what about you ?</h3></div></li>');	
		}
		var res1 =val1.match(/creat/g);
		var res4 = val1.match(/you/g);
		var res5 = val1.match(/made/g);
		if((res1 && res4) || (res5 && res4)) {
			flag = 1;
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspWell, he himself is called Gags ! :p</h3></div></li>');	
		}
		var res2 =val1.match(/date/g);
		var date = new Date();
		if(res2) {
			flag = 1;
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspIt is&nbsp' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' today, hope youre not missing someones birthday :p !</h3></div></li>');	
		}
		var res2 =val1.match(/old/g);
		if(res2) {
			flag = 1;
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspWell I was created on 23/5/2017 and whats the date today its &nbsp' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' so figure out yourself ! :p</h3></div></li>');	
		}
		var res2c =val1.match(/made/g);
		var res2d =val1.match(/were/g);
		var res2a =val1.match(/when/g);
		var res2b =val1.match(/created/g);
		if((res2a && res2b) || (res2c && res2d)) {
			flag = 1;
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspWell, I was born or created, whatever on 23/5/2017</h3></div></li>');
		}

		
		var res3a =val1.match(/what/g);
		var res3b =val1.match(/doing/g);
		if(res3a && res3b) {
			flag = 1;
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspSeriously?? You ask that to a bot ! :O Kyaa Yaaar! Well, if you really want to know, Im idle ! doing, nothing ! :# Ask me something interesting manh! </h3></div></li>');
		}
		var res4a =val1.match(/how/g);
		var res4b =val1.match(/are/g);
		var res4c = val1.match(/you/g);
		if(res4a && res4b && res4c) {
			flag = 1;
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp</h3></div></li>');
		}
		var res6 = val1.match(/ridam/g);
		var no = val1.match(/no/g);
		var yes = val1.match(/yes/g);
		if(res6) {
			flag = 1;
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspYou really wanna talk about her ? eh ?</h3></div></li>');
		}
		if(no) {
			flag = 1;
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspGreat ! :D </h3></div></li>');
		}
		if(yes) {
			flag = 1;
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp *angry face* Its better if we dont ! Get rid of it ! Do you want her number ? :P</h3></div></li>');
			// if(no) {
			// 	$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp *claps* you seem good to me... we could talk more!</h3></div></li>');
			// }
			// if(yes) {
			// 	$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp LOL, go ask her then ! :P *haha* </h3></div></li>');
		 //    }
		}
		// console.log(flag);
		var no1 = val1.match(/nah/g);
		var yes1 = val1.match(/yeah/g);
		var give = val1.match(/give/g);
		if(no1) {
			flag = 1;
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp *claps* you seem good to me... we could talk more!</h3></div></li>');
		}
		if(yes1 || give) {
			flag = 1;
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp LOL, go ask her then ! :P *haha* </h3></div></li>');
		}
		// if(!res1 && !res2 && !res3 && !res4 && !res5 && !res6 && !res2a && !res2b && !res2c && !res2d && !res3a && !res3b && !res4a && !res4b && !res4c && !res && !no && !yes) {
		// 	$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspAhh ! Whut ... seems alien to me, come again please !</h3></div></li>');
		// }
		
		if(flag == 0)
 				$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspAhh ! Whut ... seems alien to me, come again please !</h3></div></li>');
		
				window.scrollBy(0,2000);
			}
		event.preventDefault();
	});
});