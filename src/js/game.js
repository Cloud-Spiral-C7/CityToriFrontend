var Game = function () {
  this._scenes = {};
}, p = Game.prototype;

Object.defineProperties(p, {
  scenes: {
    get: function () {
      return this._scenes;
    },
    set: function (value) {
      this._scenes = value;
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

	var panelHTML = this.scenes[name];
	if (panelHTML === undefined) {
		return console.warn('Not implemented panel:', name);
	}

	var $main = $('#main_in');
  var $description = $('#description');

  fadeout($description);
	fadeout($main, function () {
		$main.html(panelHTML);
		fadein($main);
    fadein($description);

		$("#description").text(header);
    if (cb) cb();
	});
}

module.exports = Game;
