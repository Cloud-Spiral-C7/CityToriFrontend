var success = false;

function register(){
		var name = $("#name").val();
		$.ajax({
			type:"post",
			url:"http://ec2-52-192-98-128.ap-northeast-1.compute.amazonaws.com/citytori/api/session",
			data:JSON.stringify({"name":name}),
			contentType:"application/json",
			dataType:"json",
			success:function(data){
				console.log(data);
				$.cookie("userId", data.userId);
				success = true;
				window.location.href = "test.html";
			},
			error:function(){
				console.log("error");
				success = false;
			}
		});
};
	

$("#register_off").mousedown(function(){
	$(this).css({
		"background": $(this).css("background").replace("_off","_on")	
	});
});

$("#register_off").mouseup(function(){
	$(this).css({
		"background": $(this).css("background").replace("_on","_off")	
	});
	// post name and get userId
	var name = $("#name").val();
	// move next page
	if(name != ""){
		register();
	}
});

$("#register_off").mouseout(function(){
	$(this).css({
		"background": $(this).css("background").replace("_on","_off")
	});
});

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


$(document).ready(function(){
	$(".animsition").animsition({
		inClass: "fade-in",
		outClass: "fade-out",
		inDuration: 1000,
		outDuration: 1000,
		linkElement: ".animsition-link",
	})
})

