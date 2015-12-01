var Game = function () {
  this._scenes = {};
  this._currentScene = null;
}, p = Game.prototype;

Object.defineProperties(p, {
  scenes: {
    get: function () {
      return this._scenes;
    },
    set: function (value) {
      for (var key in value) {
        this.addScene(key, value[key]);
      }
    }
  },
  currentScene: {
    get: function () {
      return this._currentScene;
    },
    set: function (value) {
      this._currentScene = value;
      window.currentScene = value;
    }
  }
});

p.addScene = function (name, scene) {
  this._scenes[name] = scene;
}

p.transition = function (name, header, cb) {
  function fadeout (o, cb) {
  	o.animate({
  		"opacity": 0
  	}, 500, "easeInQuad", cb);
  }

  function fadein (o) {
  	o.css({
  		"opacity": 0
  	});
  	o.animate({
  		"opacity": 1
  	}, 500, "easeInQuad");
  }

  var Scene = this.scenes[name];

	if (Scene === undefined) {
		return console.warn('Not implemented panel:', name);
	}

	var $main = $('#main_in');
  var $description = $('#description');
  var that = this;
  var scene = new Scene;

  scene._game = this;
  this.currentScene = scene;

  fadeout($description);
	fadeout($main, function () {
		$main.html(that.currentScene.view);
    that.currentScene.emit('shown');
		fadein($main);
    fadein($description);

		$("#description").text(header);
    if (cb) cb();
	});
}

module.exports = Game;
