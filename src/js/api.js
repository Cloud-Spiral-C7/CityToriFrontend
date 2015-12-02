var util = require('./util');

module.exports = {
  answersCreate: function (params, data) {
    return util.apiPost('/rooms/' + params.roomId + '/answers', data);
  },

  initialValueIndex: function (params) {
    return util.apiGet('/rooms/' + params.roomId + '/initialValue');
  },

  getRanking: function (userId, roomId, resultTime, rankCount) {
	   return util.apiGet('/ranks?userId=' + userId + '&roomId=' + roomId + '&resultTime=' + resultTime + '&rankCount=' + rankCount);
  }
};
