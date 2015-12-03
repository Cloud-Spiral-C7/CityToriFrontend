var util = require('./util');

module.exports = {
  answersCreate: function (params, data) {
    return util.apiPost('/rooms/' + params.roomId + '/answers', data);
  },

  initialValueIndex: function (params) {
    return util.apiGet('/rooms/' + params.roomId + '/initialValue');
  },

  // API の仕様のため，resultTimeのパラメータでスコアアタック時の結果のAnswerNumを送ってます
  getRanking: function (userId, roomId, resultTime, rankCount, rankSort) {
	   return util.apiGet('/ranks?userId=' + userId + '&roomId=' + roomId + '&resultTime=' + resultTime + '&rankCount=' + rankCount + '&rankSort=' + rankSort);
  }
};
