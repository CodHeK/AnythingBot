
function display(message){
setTimeout(function() {
				$("#puf").hide();
				$("#list").append('<li> <div class="jumbotron"><h3><b> Gags: </b>' + message + '</h3></div></li>').fadeIn(2000);

			}, 700);
}

$(document).ready(function() {
	$("#preloader, #puf, #listen").hide();
	$("#form1").hide();
	var name = "You", check = 0;
	$("#mic").click(function() {
		$("#listen").show();
		setTimeout(function() {
			$("#listen").hide();
		}, 3000);
	});	
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
			display('Hey I\'m Gags. How can I help you ? :)')
		}
	window.scrollBy(0,1000);
		$("#form").hide();
		$("#form1").show();
		e.preventDefault();
	});

	$("#mic1").click(function() {
		$("#listen").show();
		setTimeout(function() {
			$("#listen").hide();
		}, 4000);
	});	
	$("#buttons1").click(function(event) {
		$("#puf").show();
		var val1 = $("#msg1").val();
		if($("#msg1").val() == '') {
			display('Say something manh!');
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
 				case 2 : display('Well, nothings happening in my world, what about you ?');	
 						 break;
 				case 3 :
 				case 4 : display('The earth is round and space extends in all diretions.. I\'d place my bets on Matter,' + name +'!');	
 						 break;
 				case 5 :
 				case 6 : display('Anything that\'s not down or sideways B-)');	
 						 break;
 				case 7 :
 				case 8 : display(' There chances of you dying alone and miserable. Yeah, its sad, I know.');	
 						 break;
 				default : display(' GoT trailer <3 Winter Is Here peeps!');	
 			}
			// display('Well, nothings happening in my world, <br>what about you ?</h3></div></li>');	
		}
		var res1 =val1.match(/created/g);
		var res4 = val1.match(/you/g);
		var res5 = val1.match(/made/g);
		if((res1 && res4) || (res5 && res4)) {
			flag = 1;
			display('Well, he himself is called Gags ! :p');	
		}
		var res2 =val1.match(/date/g);
		var date = new Date();
		if(res2) {
			flag = 1;
			display('It is&nbsp' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' today, hope you\'re not missing someone\'s birthday :p !');	
		}
		var res2 =val1.match(/old/g);
		if(res2) {
			flag = 1;
			display('Well I was created on 23/5/2017 and it is &nbsp' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ', do the math ! :p');	
		}
		var res2c =val1.match(/made/g);
		var res2d =val1.match(/were/g);
		var res2a =val1.match(/when/g);
		var res2b =val1.match(/created/g);
		if((res2a && res2b) || (res2c && res2d)) {
			flag = 1;
			display('On 23<sup>rd</sup> June, 2017</h3></div></li>');
		}

		
		var res3a =val1.match(/what/g);
		var res3b =val1.match(/doing/g);
		if(res3a && res3b) {
			flag = 1;
			display('Seriously?? You ask that to a bot ! :O Kyaa Yaaar! Well, if you really want to know, Im idle ! doing, nothing ! :# Ask me something interesting manh!');
		}
		var res4a =val1.match(/how/g);
		var res4b =val1.match(/are/g);
		var res4c = val1.match(/you/g);
		if(res4a && res4b && res4c && flag == 0) {
			flag = 1;
			counter = Math.floor(Math.random() * 11);  
 			switch(counter) {
 
 				case 1 :
 				case 2 : display('My logic and cognitive functions are normal. ');
 						 break;
 				case 3 :
 				case 4 : display(' I was good until now -_-');	
 						 break;
 				case 5 :
 				case 6 : display(' Talking to you makes makes my day so much better ! ^_^ ');	
 						 break;
 				case 7 :
 				case 8 : display(' Never Better :P ');	
 						 break;
 				default : display(' Majama ! :P');	
 						
 			}
		}
		var res7a =val1.match(/haan/g);
		var res7b =val1.match(/han/g);
		var res7c =val1.match(/hn/g);
		if((res7a || res7b || res7c) && flag == 0) {
			flag = 1;
			display('English pleej ?');
		}
		var res6 = val1.match(/ridam/g);
		var no = val1.match(/no/g);
		var yes = val1.match(/yes/g);
		if(res6) {
			flag = 1;
			display('You really wanna talk about her ? eh ?');
		}
		if(no) {
			flag = 1;
			display('Great ! :D ');
		}
		if(yes) {
			flag = 1;
			display(' *angry face* Its better if we dont ! Get rid of it ! Do you want her number ? :P');
		}
		var no1 = val1.match(/nah/g);
		var yes1 = val1.match(/yeah/g);
		var give = val1.match(/give/g);
		if(no1) {
			flag = 1;
			display(' *claps* you seem good to me... we could talk more!');
		}
		if(yes1 || give) {
			flag = 1;
			display(' LOL, go ask her then ! :P *haha* ');
		}
		
		var much = val1.match(/much/g);
		var forr = val1.match(/for/g);
		var night = val1.match(/night/g);
		if(much && forr && night) {
			flag = 1;
			display(' Haha! You\'re funny! Anyway, It\'s free for you ;) ');
		}

		var lol = val1.match(/lol/g);
			if(lol) {
				flag = 1;
				display(' lolol :P ');
			}
		var lolol = val1.match(/lolol/g);
		 if(lolol) {
		 	flag = 1;
		 	display(' lollol I think we should stop this ! :3 ');
		 }
		var lollol = val1.match(/lollol/g);
		 if(lollol) {
		 	flag = 1;
		 	display(' Oh, common, go do something, you\'re irritating me now!');
		 }

		 var songs = val1.match(/songs/g);
		 var like = val1.match(/like/g);
		 if(songs && like) {
		 	flag = 1;
		 	display(' Umm, I like Kygo, Ed Sheeran ... which ones do you like ?');
		 }
		 var I = val1.match(/I/g);
		 var i = val1.match(/i/g);
		 var like = val1.match(/like/g);
		 if((i || I) && like) {
		 	display(' Hmm Nice ! :D');
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
					display('' + wt + ' with average temp about&nbsp' + t );
					window.scrollBy(0,2000);
				}
			});
		}

		var plus = val1.match(/plus/g); 
		if(plus || (val1.indexOf('+') > -1)) {
			flag = 1;
			var intValue = parseInt(val1.match(/[0-9]+/)[0], 10);
			var intVal = val1.split(" ").splice(-1)[0];
			var intValue1 = parseInt(intVal.match(/[0-9]+/)[0], 10);
			var sum = Number(intValue) + Number(intValue1);
			display(' It is '+ sum + '</h3></div></li>');
		}

		var minus = val1.match(/minus/g); 
		if(minus || (val1.indexOf('-') > -1)) {
			flag = 1;
			var intValue = parseInt(val1.match(/[0-9]+/)[0], 10);
			var intVal = val1.split(" ").splice(-1)[0];
			var intValue1 = parseInt(intVal.match(/[0-9]+/)[0], 10);
			var sub = Number(intValue) - Number(intValue1);
			display(' It is '+ sub );
		}

		var mult = val1.match(/mult/g); 
		var into = val1.match(/into/g); 
		if(mult || (val1.indexOf('x') > -1) || (val1.indexOf('*') > -1) || (val1.indexOf('X') > -1) || into) {
			flag = 1;
			var intValue = parseInt(val1.match(/[0-9]+/)[0], 10);
			var intVal = val1.split(" ").splice(-1)[0];
			var intValue1 = parseInt(intVal.match(/[0-9]+/)[0], 10);
			var mul = Number(intValue)*Number(intValue1);
			display(' It is '+ mul );
		}

		var divi = val1.match(/divi/g); 
		if(divi || (val1.indexOf('/') > -1)) {
			flag = 1;
			var intValue = parseInt(val1.match(/[0-9]+/)[0], 10);
			var intVal = val1.split(" ").splice(-1)[0];
			var intValue1 = parseInt(intVal.match(/[0-9]+/)[0], 10);
			var div = Number(intValue)/Number(intValue1);
			display(' It is '+ div );
		}

		var mod = val1.match(/mod/g); 
		if(mod || (val1.indexOf('%') > -1)) {
			flag = 1;
			var intValue = parseInt(val1.match(/[0-9]+/)[0], 10);
			var intVal = val1.split(" ").splice(-1)[0];
			var intValue1 = parseInt(intVal.match(/[0-9]+/)[0], 10);
			var mod = Number(intValue)%Number(intValue1);
			display(' It is '+ mod );
		}


		var video = val1.match(/video/g);
		//var fors = val1.match(/for/g);
		var vidFind = val1.split(" ");
		var index;
		for(var j = 0; j < vidFind.length; j++) {
			if(vidFind[j] == 'video' || vidFind[j] == 'videos') {
				index = j;
				break;
			}
		}
		var newString = '';
		for(var ind = j+1; ind < vidFind.length; ind++) {
			newString += vidFind[ind] + ' ';
		}
		if(video) {
			//display('These are a few videos I got ! :D');
			flag = 1;
			//display(newString);
			$.get(

				 "https://www.googleapis.com/youtube/v3/search", {
				 		part: 'snippet, id',
				 		q: encodeURIComponent(newString).replace(/%20/g, "+"),
				 		type: 'video',
				 		key: 'AIzaSyDv3TkvD7OO4S4-wlIGEz_odJG1T5Qrbao' },

				 		function(data) {
				 			$.each(data.items, function(i,item) {

				 				var output = getOutput(item);
				 				
				 				$("#list").append('<li> <div class="jumbotron"><h3><b> Gags:&nbsp</b><br><div class="row" style="width:100%;margin-top:10%;height:75%;"><ul style="list-style:none;">' + output + '</ul></div></div></li>').fadeIn(2000);
				 			});

				 		}
			);
			scrollBy(0, 5000);
		}


		var song = val1.match(/song/g);
		//var fors = val1.match(/for/g);
		var songFind = val1.split(" ");
		var index;
		for(var j = 0; j < songFind.length; j++) {
			if(vidFind[j] == 'song') {
				index = j;
				break;
			}
		}
		var newString1 = '';
		for(var ind = j+1; ind < songFind.length; ind++) {
			newString1 += songFind[ind] + ' ';
		}
		if(song) {
			flag = 1;
			//display(newString1);
			//display('<iframe src="https://www.google.co.in/?gfe_rd=cr&ei=WohPWZeAIrPT8gfkz5_ADA&gws_rd=ssl#q=' + newString1 + '"  style="width:100%;height:100%:"></iframe>')
			display('Search Google, for these easy things ? <br><br><a href="https://www.google.co.in/?gfe_rd=cr&ei=WohPWZeAIrPT8gfkz5_ADA&gws_rd=ssl#q=' + newString1 + '" class="btn btn-default">&nbsp'+ newString1 + '</a>');
			 // var request = gapi.client.youtube.search.list({
    //         	part: "snippet",
    //         	type: "video",
    //         	q: encodeURIComponent(newString1).replace(/%20/g, "+"),
    //         	maxResults: 10,
    //         	order: "viewCount"
    //    		});
			 //   request.execute(function(response) {
    //      				 var results = response.result;
    //       				$.each(results.items, function(index, item) {
				// 			$.get("button.html", function(data) {
    //             				$("#list").append('<li> <div class="jumbotron"><b> Gags:&nbsp' + tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]) + '</div></li>').fadeIn(2000);
    //         				});
    //       				});
    //       				resetVideoHeight();
    //       		});
			scrollBy(0, 5000);
		}


		var who = val1.match(/who/g);
		var president = val1.match(/president/g);
		var President = val1.match(/P resident/g);
		var presFind = val1.split(" ");
		var index;
		for(var j = 0; j < presFind.length; j++) {
			if(vidFind[j] == 'president'|| vidFind[j] == 'President') {
				index = j;
				break;
			}
		}
		var newString2 = '';
		for(var ind = j; ind < presFind.length; ind++) {
			newString2 += presFind[ind] + ' ';
		}
		if(who || president || President) {
		//display('<iframe src="https://en.wikipedia.org/wiki/' + newString2 + '" style="width:100%;height:100%:"></iframe>');
			flag = 1;
			display('Search Google, for these easy things ? <br><br><a href="https://www.google.co.in/?gfe_rd=cr&ei=WohPWZeAIrPT8gfkz5_ADA&gws_rd=ssl#q=' + newString2 + '" class="btn btn-default">&nbsp'+ newString2 + '</a>');

		}

		if(flag == 0)
 				display('Ahh ! Whut ... seems alien to me, Search this on Google instead ? <br><br> <a href="https://www.google.co.in/?gfe_rd=cr&ei=WohPWZeAIrPT8gfkz5_ADA&gws_rd=ssl#q=' + val1 + '" class="btn btn-default">&nbspSEARCH</a>');
		
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
function getOutput(item) {
	var videoId = item.id.videoId;
	var title = item.snippet.title;
	var description = item.snippet.description;
	var thumb = item.snippet.thumbnails.high.url;
	var channelTitle = item.snippet.channelTitle;
	var videoDate = item.snippet.publishedAt;

	// $('#tit').html(title);
	// $("#owner").html(channelTitle);
	// $("#date").html(videoDate);
	// $("#desp").html(description);
	var output = '<li>' + 
	'<div class="list-left col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
	'<a href="http://www.youtube.com/embed/'+videoId+'"><img src="'+thumb+'"></a>' +
	'</div>'+
	'<div class="list-right col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
	'<h3><a class="video" href="http://www.youtube.com/embed/'+videoId+'">' +title+ '</a></h3>' +
	'<small>By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+'</small><br>' +
	'<br><p>'+description+'</p>' +
	'<form type="submit" action="http://www.ssyoutube.com/embed/'+videoId+'">' +
	'<button class="btn btn-default btn-lg">Download</button>' +
	'</form>' +
	'</div>'+
	'</li>';
	'';

	return output;
}


// function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}


// function init() {
//     gapi.client.setApiKey("AIzaSyBfsRf40RP0PU0InG3Pd7okMwGW0OkpXQg"); 
//     gapi.client.load("youtube", "v3", function() {
//     });
// }

});


$("#gsr, #viewport, #main, #cnt, div #rcnt, div, #center_col, #res, #search, div , #ires, #rso, #uid_O, div, div, div, div, div, div, div, ._XWk")