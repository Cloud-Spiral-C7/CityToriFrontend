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
    console.debug(addrInfo);

    var availablePlaces = selectAvailablePlaces(addrInfo[0].address_components);

    getAvailableWords(availablePlaces, function (err, places) {
      console.debug(places);

      var html = places.map(function (place) {
        return "<a href='#' onClick='locationNameClicked(\"" + place.locationName + "\")'>" + place.locationName +  "</a>"
      }).join('<br>');

      var popup = new google.maps.InfoWindow({
        content: createInfoWindowContentElement(places),
        position: e.latLng
      });
      popup.open(map);
    });
  });
}

function locationNameClicked(e, place) {
  console.debug(place);
}

function createLocationLinkElement(place) {
  var link = document.createElement('a');

  link.innerHTML = place.locationName;
  link.href = '#';
  link.dataset.locationName = place.locationName;
  link.dataset.phonetic = place.phonetic;
  link.addEventListener('click', function (e) {
    locationNameClicked(e, place)
  });

  return link;
}

function createInfoWindowContentElement(places) {
  var content = document.createElement('ul');

  places.forEach(function (place) {
    var listItem = document.createElement('li');
    var link = createLocationLinkElement(place);

    listItem.appendChild(link);
    content.appendChild(listItem);
  });

  console.log(content);
  return content;
}

/**
 * 形態素解析APIを呼び出す (See: https://labs.goo.ne.jp/api/2015/334/)
 * @param {String} sentence - 解析対象の文
 * @returns {Object} - API呼び出し結果
 */
function callAnalyseMorphAPI(sentence) {
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

/** 地名のリストから
 * @param {Array} 形態素解析で得られた文の単語リスト
 * @returns {Array} しりとりで利用可能な地名リスト
 */
function getAvailableWords(places, done) {
  var availableWords = [];

  callAnalyseMorphAPI(places.join('/')).done(function (data) {
    console.debug(data);

    data.word_list[0].forEach(function (word) {
      var type = word[1];
      if (type != '名詞') return;

      availableWords.push({
        locationName:  word[0],
        phonetic: katakanaToHiragana(word[2])
      });
    });

    done(null, availableWords);
  });
}

/** 住所のコンポーネントリストから、地名しりとりに利用可能な地名のみを選択
 * @param {Array} 住所のコンポーネントリスト
 * @returns {Array} しりとりで利用可能な地名リスト
 */
function selectAvailablePlaces(addrComponents) {
  var availablePlaces = [];

  addrComponents.forEach(function (component) {
    if (component.types[0] === 'postal_code') return;
    if (component.types[0] === 'country') return;
    if (component.types[0] === 'sublocality_level_2') return;
    if (component.types[0] === 'sublocality_level_3') return;
    if (component.types[0] === 'sublocality_level_4') return;

    availablePlaces.push(component.long_name);
  });

  return availablePlaces.reverse();
}
