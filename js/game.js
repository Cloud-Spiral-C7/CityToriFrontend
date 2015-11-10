var map, geocoder;

function initMap() {
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.681382, lng: 139.766084},
    zoom: 12,
    // maxZoom: 12,
    // minZoom: 12,
    disableDefaultUI: true,
    // mapTypeId: google.maps.MapTypeId.TERRAIN,
    styles: [
      {
        featureType: 'all',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels',
        stylers: [{ visibility: 'on' }]
      },
    ]
  });

  map.addListener('click', mapClicked);
}

function mapClicked(e) {
  geocoder.geocode({location: e.latLng}, function (addrInfo) {
    console.log(addrInfo);
    var pos = e.latLng;
    var address = getAddressPart(addrInfo);

    analyseMorph(address).done(function (data) {
      console.log(data);
      var popup = new google.maps.InfoWindow({
        content: data.word_list[0].map(function(word) {
          return word[0] + ',' + katakanaToHiragana(word[2])
        }).join('<br>'),
        position: pos
      });
      popup.open(map);
    });
  });
}

/**
 * 形態素解析APIを呼び出す (See: https://labs.goo.ne.jp/api/2015/334/)
 * @param {String} sentence - 解析対象の文
 * @returns {Object} - API呼び出し結果
 */
function analyseMorph(sentence) {
  return $.ajax({
    type: 'post',
    url: 'https://labs.goo.ne.jp/api/morph',
    data: {
      app_id: '6953432d0f5f68bbc04853cf917822f88548ceb4bec7e4e1370058c5cf6cf346',
      sentence: sentence,
    },
    dataType: 'json'
  });
}

/** カタカナをひらがなに変換する
 * @param {String} src - カタカナ
 * @returns {String} - ひらがな
 */
function katakanaToHiragana(src) {
	return src.replace(/[\u30a1-\u30f6]/g, function(match) {
		var chr = match.charCodeAt(0) - 0x60;
		return String.fromCharCode(chr);
	});
}

/** Google Geocorder API で取得した地域情報から住所を取り出す
 * @param {String} addrInfo - Google Geocorder API で取得した地域情報
 * @returns {String} - 住所
 */
function getAddressPart(addrInfo) {
  return addrInfo[0].address_components.reverse().slice(2)
    .map(function (c) { return c.long_name })
    .join('');
}

/** 形態素解析で得られた文の単語リストから、しりとりで利用可能な地名リストを取得する
 * @param {Array} 形態素解析で得られた文の単語リスト
 * @returns {Array} しりとりで利用可能な地名リスト
 */
function getAvailableWords(wordList) {
  var availableWords = [];

  wordList.forEach(function (word) {
    var text = word[0];
    var klass = word[1];
    var kana = katakanaToHiragana(word[2]);

    if (klass == '名詞接尾辞' || klass == 'Number' || Klass == 'kanji') return;

  });
}
