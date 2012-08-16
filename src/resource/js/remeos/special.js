
KISSY.add("remeos/special",function(S){
	var $ = S.all,
		cache = [];
	
	return function(config){
		var target = $(config.target),
			mouse = $('<div class="mouse"></div>'),
			show = $("#show"),
			mousemove = function(ev){
				
				//只记录1/10的数据
				if(Math.random()*10 > 2){
					return;
				}
			
				var tx = target.offset().left, ty = target.offset().top,
					tt = target[0].scrollTop,
					x = ev.pageX, y = ev.pageY;
			
				cache.push({
					t: "mouse",
					x: x-tx,
					y: y-ty
				});
				
				var j = x-tx,
					k = y-ty
				show.html(tx+"   "+x);
				
			},
			click = function(ev){
				var tx = target.offset().top, ty = target.offset().left,
					tt = target[0].scrollTop,
					x = ev.pageX, y = ev.pageY;
					
				cache.push({
					t: "click",
					x: x-tx,
					y: y-ty
				});
			};
			
			
		//开始记录
		$(document).on("mousemove", mousemove).on("click", click);

		
		setInterval(function(){
			console.log(cache);
            S.io({
                type: "POST",
                data: {
					pageId: config.id,
					track: JSON.stringify(cache)
				},
                url: config.url,
                dataType:"json",
                complete: function(response , textStatus , xhrObj){
                    if(textStatus=="success" && response && response.status==1){

                    }else{

                    }
                }
            });
			
			cache = [];
		},5000);
		
		

	}
});


