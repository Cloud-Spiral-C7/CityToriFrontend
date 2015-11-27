var endpoint = '../api';

// ページ読み込み時行われる処理

// cookieに以下のデータが入ってる状況だとする
$.cookie('userId', 'mario');
$.cookie('resultTime', 200.2);

$.ajax({
	url : endpoint + '/UpdateTimeAttackRanking', // apiのパス，JaxAdapterで同じ@Pathをつけたメソッドが実行される
	// userIdと結果タイムをGETの引数に与える
	// cookieから引数に与えるデータを読み出し
	data : {
		userId : $.cookie('userId'),
		resultTime : $.cookie('resultTime')
	},
	success : function(json) {// apiの実行に成功するとjsonが返ってくる
		// userNameをセット
		$('#userName').text(json.userName);
		// resultTimeをセット
		$('#resultTime').text($.cookie('resultTime'));
		// rankingのvalueである配列を取得
		var ranking = json.ranking;
		// 配列のサイズを取得しrankingを表示
		var arraySize = Object.keys(ranking).length;
		for (var i = 0; i < arraySize; i++) {
			// i番目の要素のnameとscoreを取得して画面に表示
			$('#ranking').append('' + (i + 1) + '位 ' + ranking[i].name + ' ' + ranking[i].score + '</br>');
		}
	}
});

// id=back をクリックした際の処理．
$('#back').click(function() {
	// CloseSingleGame api の実行
	$.ajax({
		url : endpoint + '/CloseSingleGame',
		data : $.cookie('userId')	// userIdを引数として渡す
	});
	// １人用モード選択のhtmlへ戻る，今はgoogleに飛ぶようにしてる
	window.location.href = 'http://google.com';
});
