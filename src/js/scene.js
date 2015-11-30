var slice = [].slice;

/**
 * Slice クラスのコンストラクタ
 *
 * @param view シーンで表示するHTML
 */
var Scene = function (view) {
  this._view = view;
  this._game = null;
  this._events = {};
}, p = Scene.prototype;

Object.defineProperties(p, {
  view: {
    get: function () { return this._view; },
    set: function (v) { this._view = v }
  },
  game: {
    get: function () { return this._game; }
  }
});

/**
 * イベントハンドラを設定する
 *
 * @param eventName イベント名
 * @param fn イベントが発火されたときのコールバック関数
 */
p.on = function (eventName, fn) {
  var fns = this._events[eventName];
  if (fns === undefined) fns = this._events[eventName] = [];

  fns.push(fn);
};

/**
 * イベントを発生させる
 *
 * @param eventName イベント名
 * @param eventArgs... コールバック関数に渡す引数
 */
p.emit = function () {
  var args = slice.call(arguments);
  var eventName = args[0];
  var eventArgs = args.slice(1);

  var fns = this._events[eventName];
  if (fns === undefined) return;

  for (var i = 0, len = fns.length; i < len; i++) {
    fns[i].apply(this, eventArgs);
  }
};

module.exports = Scene;
