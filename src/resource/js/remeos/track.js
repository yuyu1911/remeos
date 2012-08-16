
KISSY.add("remeos/track",function(S){
	var $ = S.all,
		cache = [];
	
	return function(config){
		var target = $(config.target),
			mouse = $('<div class="trackmouse"></div>');
		
		mouse.addClass("trackmouse");
		target.addClass("trackpanel");
		
		

	}
});


