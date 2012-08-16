
KISSY.add("remeos/track",function(S){
	var $ = S.all,
		cache = [];
	
	return function(config){
		var target = $(config.panel),
			mouse = $('<div class="trackmouse"></div>').hide(),
			control = $("#J_control"),
			tmp = S.JSON.parse(config.track.replace(/&quot;/g,'"')),
			
			timer2 = null,
			color = ["red","white"];
			

		if(S.isObject(tmp) && tmp.track){
			cache = tmp.track;
		}
		if(!S.isArray(cache)){
			return;
		}
		

		
		mouse.addClass("trackmouse");
		target.addClass("trackpanel");
		mouse.appendTo(target);
		
		//¿ªÊ¼²¥·Å
		control.one(".J_Play").on("click", function(ev){
			ev.halt();
			mouse.show();
			var i=0, l = cache.length-1;
			var timer = window.setInterval(function(){
				if(++i>=l){
					mouse.hide()
					clearInterval(timer);
				}
				mouse.css({
					left: cache[i].x,
					top: cache[i].y
				});
				
				
				if(cache[i].t=="click"){
					var el = $("#J_"+cache[i].tg),
						j = 0,
						timer3 = setInterval(function(){
						el.css({
							background:color[++j%2==0?0:1]
						});
						if(j>6){
							clearInterval(timer3);
						}
					},200);
				}
				
			},100);
		});
		control.one(".J_Stop").on("click", function(ev){
			ev.halt();
			mouse.hide();
		});

	}
});


