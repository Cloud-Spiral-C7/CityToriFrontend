// entry point

var $ = require('jquery');
require('jquery.cookie');
require('jquery.easing');
require('animsition');

$('#main_in').html(require('../html/title.html'));

require('./title_layout');
require('./title_function');


// animsition setting
$(document).ready(function(){
	$(".animsition").animsition({
		inClass: "fade-in",
		outClass: "fade-out",
		inDuration: 1000,
		outDuration: 1000,
		linkElement: ".animsition-link",
	});
});
