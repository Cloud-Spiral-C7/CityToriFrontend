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
				game.transition('selectPlayMode', 'ようこそ「' + $.cookie('name') + '」 プレイ人数を選択してね！');
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
			game.transition('playGameSingle', 'タイムアタック!');
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
		game.transition('selectSinglePlayMode', 'タイムアタックで遊ぶ？スコアアタックで遊ぶ？');
	}else{
		game.transition('selectMultiPlayMode', '遊ぶモードを選んでね');
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
		game.transition('configSinglePlayMode', '目標しりとり数を入力してね');
	}else{
		game.transition('configMultiplayPlayMode', 'ゲームモードを選択してね');
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
$(function() {
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
