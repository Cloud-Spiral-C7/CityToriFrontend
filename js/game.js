Game = function (element) {
  this.geocoder = new google.maps.Geocoder();
  this.map = new google.maps.Map(element, {
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

  this.popup = undefined;
  this.map.addListener('click', this.mapClicked.bind(this));
  this.answerChain = [{phonetic: "おおさか", locationName: "大阪"}];
  this.currentTheme = this.answerChain[this.answerChain.length - 1];
  this.placeTheme = document.querySelector('#js-place-theme');
  this.placeYours = document.querySelector('#js-place-yours');
};

Object.defineProperties(Game.prototype, {
  'currentTheme': {
    get: function () { return this._currentTheme; },
    set: function (value) {
      this._currentTheme = value;
      document.querySelector('#js-place-theme > .name')
        .innerHTML = value.locationName;
      document.querySelector('#js-place-theme > .phonetic')
        .innerHTML = value.phonetic;
    }
  }
});

Game.prototype.mapClicked = function (e) {
  var that = this;

  this.geocoder.geocode({location: e.latLng}, function (addrInfo) {
    console.debug(addrInfo);

    var availablePlaces = that.selectAvailablePlaces(addrInfo[0].address_components);

    that.getAvailableWords(availablePlaces, function (err, places) {
      console.debug(places);

      that.popup = new google.maps.InfoWindow({
        content: that.createInfoWindowContentElement(places),
        position: e.latLng
      });

      that.popup.open(that.map);
    });
  });
};

Game.prototype.locationNameClicked = function (e, place) {
  this.popup.close();
  this.answer(place);
  // api.answersCreate(
  //   { roomId: util.getQueryParam('roomId') },
  //   {
  //     locationName: place.locationName,
  //     phonetic: place.phonetic,
  //     userId: util.getQueryParam('userId')
  //   }).done(function (data) {
  //   console.debug(data);
  // });
};

Game.prototype.createLocationLinkElement = function (place) {
  var that = this;
  var link = document.createElement('a');

  link.innerHTML = place.locationName;
  link.href = '#';
  link.dataset.locationName = place.locationName;
  link.dataset.phonetic = place.phonetic;
  link.addEventListener('click', function (e) {
    that.locationNameClicked(e, place)
  });

  return link;
};

Game.prototype.createInfoWindowContentElement = function (places) {
  var that = this;
  var content = document.createElement('div');
  var list = document.createElement('ul');
  var p = document.createElement('p');

  content.appendChild(p);
  p.innerHTML = '回答を選んでください。';
  p.style.fontWeight = 'bold';

  places.forEach(function (place) {
    var listItem = document.createElement('li');
    var link = that.createLocationLinkElement(place);

    listItem.appendChild(link);
    list.appendChild(listItem);
  });

  content.appendChild(list);

  return content;
};

Game.prototype.answer = function (place) {
  var last = this.answerChain[this.answerChain.length - 1];

  if (!last.phonetic.endsWith(place.phonetic[0])) return false;

  this.answerChain.push(place);
  this.currentTheme = place;

  return true;
};

/**
 * 形態素解析APIを呼び出す (See: https://labs.goo.ne.jp/api/2015/334/)
 * @param {String} sentence - 解析対象の文
 * @returns {Object} - API呼び出し結果
 */
Game.prototype.callAnalyseMorphApi = function (sentence) {
  return $.ajax({
    type: 'post',
    url: 'https://labs.goo.ne.jp/api/morph',
    data: {
      app_id: '6953432d0f5f68bbc04853cf917822f88548ceb4bec7e4e1370058c5cf6cf346',
      sentence: sentence,
    },
    dataType: 'json',
  });
};

/** 地名のリストから
 * @param {Array} 形態素解析で得られた文の単語リスト
 * @returns {Array} しりとりで利用可能な地名リスト
 */
Game.prototype.getAvailableWords = function (places, done) {
  var availableWords = [];

  this.callAnalyseMorphApi(places.join('/')).done(function (data) {
    console.debug(data);

    data.word_list[0].forEach(function (word) {
      var type = word[1];
      if (type != '名詞') return;

      availableWords.push({
        locationName:  word[0],
        phonetic: util.katakanaToHiragana(word[2])
      });
    });

    done(null, availableWords);
  });
};

/** 住所のコンポーネントリストから、地名しりとりに利用可能な地名のみを選択
 * @param {Array} 住所のコンポーネントリスト
 * @returns {Array} しりとりで利用可能な地名リスト
 */
Game.prototype.selectAvailablePlaces = function (addrComponents) {
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
