// fade out
function fadeout(o){
	o.animate({
		"opacity": 0
	}, 500, "easeInQuad", function(){
		$(this).remove();
	});
}

// fade in
function fadein(o){
	o.css({
		"opacity": 0
	});
	o.animate({
		"opacity": 1
	}, 500, "easeInQuad");
}

// transition to playstyle
function transition_to_playstyle(){
	console.log("transition");
	fadeout($("#titlelogo"));
	fadeout($("#registerform"));
	$("#main_in").append("<div id=\"singleplayform\"><button class=\"ok\" id=\"playsingle\" /></div>");
	fadein($("#singleplayform"));
	$("#main_in").append("<div id=\"multiplayform\"><button class=\"ok\" id=\"playmulti\" /></div>");
	fadein($("#multiplayform"));
	$("#description").text("ようこそ「" + $.cookie("name") + "」 プレイ人数を選択してね！");
}

// transition to selectsinglemode
function transition_to_selectsingleplaymode(){
	console.log("singleplay");
	fadeout($("#singleplayform"));
	fadeout($("#multiplayform"));
	$("#main_in").append("<div id=\"singleplayicon\"></div>");
	fadein($("#singleplayicon"));
	$("#main_in").append("<div id=\"timeattackform\"><button class=\"ok2\" id=\"playtimeattack\" /></div>");
	fadein($("#timeattackform"));
	$("#main_in").append("<div id=\"scoreattackform\"><button class=\"ok2\" id=\"playscoreattack\" /></div>");
	fadein($("#scoreattackform"));
	$("#description").text("タイムアタックで遊ぶ？スコアアタックで遊ぶ？");
}

// transition to selectmultimode
function transition_to_selectmultimode(){
	console.log("multiplay");
	alert("(>o<)<未実装");
}

// transition to selectsinglemode
function transition_to_selectsinglemode(){
	console.log("timeattack");
	fadeout($("#singleplayicon"));
	fadeout($("#timeattackform"));
	fadeout($("#scoreattackform"));
	$("#main_in").append("<div id=\"timeattackicon\"></div>");
	fadein($("#timeattackicon"));
	$("#main_in").append("<div id=\"settingform\"><input type=\"number\" id=\"wordnum\" step=5 min=5 max=50 value=10 /><br><button id=\"setting\" /></div>");
	fadein($("#settingform"));
	$("#description").text("目標しりとり数を入力してね？")
}

// transition to selectmultimode
function transition_to_selectmultimode(){
	console.log("scoreattack");
	alert("(ToT)<未実装");
}

// register name
function register(name){
		$.ajax({
			type:"post",
			url:"http://ec2-52-192-36-83.ap-northeast-1.compute.amazonaws.com/citytori/api/session",
			data:JSON.stringify({"name":name}),
			contentType:"application/json",
			dataType:"json",
			success:function(data){
				console.log(data);
				$.cookie("name", name);
				$.cookie("userId", data.userId);
				transition_to_playstyle();
			},
			error:function(){
				console.log("error");
			}
		});
};

// make room
function makeroom(userId, name, gameMode, wordNum, limitTime){
	$.ajax({
		type:"post",
		url:"http://ec2-52-192-36-83.ap-northeast-1.compute.amazonaws.com/citytori/api/rooms",
		data:JSON.stringify({"userId":userId,"name":name,"gameMode":gameMode,"wordNum":wordNum,"limitTime":limitTime}),
		contentType:"application/json",
		dataType:"json",
		success:function(data){
			$.cookie("roomId", data.id);
			$.cookie("wordNum", wordNum);
			$("body").animate({
				"opacity": 0
			}, 1000, "easeInQuad", function(){
					window.location.href = "game_single_play.html";
			});
		},
		error:function(){
			console.log("error");
		}
	});
};

// sound on button pushed
function sound_button(){
	$("#sound_button").get(0).currentTime = 0;
	$("#sound_button").get(0).play();
};

// about register button
$("#register_off").mousedown(function(){
	$(this).css({
		"background": $(this).css("background").replace("_off","_on")
	});
	sound_button();
});

$("#register_off").mouseup(function(){
	$(this).css({
		"background": $(this).css("background").replace("_on","_off")
	});
	if($("#name").val() != ""){
		register($("#name").val());
	}
});

$("#register_off").mouseout(function(){
	$(this).css({
		"background": $(this).css("background").replace("_on","_off")
	});
});

// about ok button
$(document).on("mousedown", ".ok", function(){
	$(this).css({
		"background": $(this).css("background").replace(".","_dummy.")
	});
	sound_button();
});

$(document).on("mouseup", ".ok", function(){
	$(this).css({
		"background": $(this).css("background").replace("_dummy.",".")
	});
	if($(this).attr("id") == "playsingle"){
		transition_to_selectsingleplaymode();
	}else{
		transition_to_selectmultimode();
	}
});

$(document).on("mouseout", ".ok", function(){
	$(this).css({
		"background": $(this).css("background").replace("_dummy.",".")
	});
});

// about ok2 button
$(document).on("mousedown", ".ok2", function(){
	$(this).css({
		"background": $(this).css("background").replace(".","_dummy.")
	});
	sound_button();
});

$(document).on("mouseup", ".ok2", function(){
	$(this).css({
		"background": $(this).css("background").replace("_dummy.",".")
	});
	if($(this).attr("id") == "playtimeattack"){
		transition_to_selectsinglemode();
	}else{
		transition_to_selectmultimode();
	}
});

$(document).on("mouseout", ".ok2", function(){
	$(this).css({
		"background": $(this).css("background").replace("_dummy.",".")
	});
});

// about setting button
$(document).on("mousedown", "#setting", function(){
	$(this).css({
		"background": $(this).css("background").replace(".","_dummy.")
	});
	sound_button();
});

$(document).on("mouseup", "#setting", function(){
	$(this).css({
		"background": $(this).css("background").replace("_dummy.",".")
	});
	if(parseInt($("#wordnum").val()) > 0){
		makeroom($.cookie("userId"), $.cookie("name"), "Time", parseInt($("#wordnum").val()), 0);
	}
});

$(document).on("mouseout", "#setting", function(){
	$(this).css({
		"background": $(this).css("background").replace("_dummy.",".")
	});
});

// sound on wordnum change
$("#wordnum").on("change", function(){
	sound_button();
});


// background scrool
$(function(){
	var bgscx1 = 3500;
	setInterval(function(){
		bgscx1 += 1;
		$("#main_cloud").css({
			"background-position": bgscx1 + "px"
		});
	},150);
	var bgscx2 = 1000;
	setInterval(function(){
		bgscx2 += 1;
		$("#main_bird").css({
			"background-position": bgscx2 + "px"
		});
	},75);
});

// animsition setting
$(document).ready(function(){
	$(".animsition").animsition({
		inClass: "fade-in",
		outClass: "fade-out",
		inDuration: 1000,
		outDuration: 1000,
		linkElement: ".animsition-link",
	});
});
