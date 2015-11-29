function Game() {
  this.panels = {};
};

var p = Game.prototype;

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

	var panelHTML = this.panels[name];
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
