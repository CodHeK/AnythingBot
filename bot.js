$(document).ready(function() {
	$("#preloader, #puf").hide();
	$("#form1").hide();
	var name, check = 0;
	$("#buttons").click(function(e) {
		var val = $("#msg").val();
		$("#puf").show();
	
		check = 0;
		var ress = val.match(/hey/g);
		var ress1 = val.match(/Hey/g);
		var ress2 = val.match(/hi/g);
		var ress3 = val.match(/Hi/g);
		if(ress || ress1 || ress2 || ress3) {
			check = 1;
			setTimeout(function() {
				$("#puf").hide();
				$("#list").append('<li> <div class="jumbotron"><h3>Hey! I\'m <b>Gags</b>, and you are ?</h3></div></li>').fadeIn(2000);

			}, 1000);
		}
		if(check == 0) {
		//$("#list").append('<li> <div class="jumbotron"><h3>' + val +'</h3></div></li>');
		//name = $("li:nth-child(3) .jumbotron h3").html();
		
		name = val;
		var introSen = "" + name + "&nbspfeel free to ask me anything, anytime! <br> * I need to get faster ! sorry for those clumsy replies ! :# * ";
		if(name) {
			setTimeout(function() {
				$("#puf").hide();
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspHey&nbsp' + name +'!</h3></div></li>').fadeIn(2000);
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp' + introSen +'!</h3></div></li>').fadeIn(2000);
			}, 2000);
		}
		window.scrollBy(0,1000);
		$("#form").hide();
		$("#form1").show();
	}
		e.preventDefault();
	});
	$("#buttons1").click(function(event) {
		var val1 = $("#msg1").val();
		if($("#msg1").val() == '') {
			setTimeout(function() {
				$("#puf").hide();
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspSay something manh!</h3></div></li>');
			scrollBy(0, 2000);
			}, 1000);
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
			counter = Math.floor(Math.random() * 11);  
 			switch(counter) {
 
 				case 1 :
 				case 2 : $("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspIm cool ! Sab thik thak ?</h3></div></li>');
 						 break;
 				case 3 :
 				case 4 : $("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp I was good until now -_-</h3></div></li>');	
 						 break;
 				case 5 :
 				case 6 : $("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp Talking to you makes makes my day so much better ! ^_^ </h3></div></li>');	
 						 break;
 				case 7 :
 				case 8 : $("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp Never Better :P </h3></div></li>');	
 						 break;
 				default : $("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp Majama ! :P</h3></div></li>');	
 						
 			}
		}
		var res7a =val1.match(/haan/g);
		var res7b =val1.match(/han/g);
		var res7c =val1.match(/hn/g);
		var res7d =val1.match(/ha/g);
		if(res7a || res7b || res7c || res7d) {
			flag = 1;
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspEnglish pleej ?</h3></div></li>');
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
		}
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
		
		var much = val1.match(/much/g);
		var forr = val1.match(/for/g);
		var night = val1.match(/night/g);
		if(much && forr && night) {
			flag = 1;
			$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp Haha! You\'re funny! Anyway, It\'s free for you ;) </h3></div></li>');
		}

		var lol = val1.match(/lol/g);
			if(lol) {
				flag = 1;
				$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp lolol :P </h3></div></li>');
			}
		var lolol = val1.match(/lolol/g);
		 if(lolol) {
		 	flag = 1;
		 	$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp lollol I think we should stop this ! :3 </h3></div></li>');
		 }
		var lollol = val1.match(/lollol/g);
		 if(lollol) {
		 	flag = 1;
		 	$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp Oh, common, go do something, you\'re irritating me now!</h3></div></li>');
		 }

		 var songs = val1.match(/songs/g);
		 var like = val1.match(/like/g);
		 if(songs && like) {
		 	flag = 1;
		 	$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp Umm, I like Kygo, Ed Sheeran ... which ones do you like ?</h3></div></li>');
		 }
		 var I = val1.match(/I/g);
		 var i = val1.match(/i/g);
		 var like = val1.match(/like/g);
		 if((i || I) && like) {
		 	$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp Hmm Nice ! :D</h3></div></li>');
		 }

		var weatherr = val1.match(/weather/g);
		var city = val1.split(" ").splice(-1)[0];
		console.log(city);
		if(weatherr) {
			flag = 1;
			$.ajax({

				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=b1884514adc3b3c175df2eff8f3f29e5",
				type: "GET",
				dataType: "jsonp",
				success: function(data) {
					var wt = weather(data);
					var t = temp(data);
					$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbsp' + wt + ' with average temp about&nbsp' + t + '</h3></div></li>');
					window.scrollBy(0,2000);
				}
			});
		}
		if(flag == 0)
 				$("#list").append('<li> <div class="jumbotron"><h3><b>Gags:</b>&nbspAhh ! Whut ... seems alien to me, come again please !</h3></div></li>');
		
				window.scrollBy(0,2000);
			}
		event.preventDefault();
	});	

	function weather(data) {
	return data.weather[0].description;
}
function temp(data) {
	return data.main.temp + "&deg;C";
}
});
