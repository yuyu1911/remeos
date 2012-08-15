/**
 * 数据库配置
 * @author : yu.yuy
 * @createTime : 2012-07-12
 */
(function(){
	var recorder = function(params){
		var url = '/beacon/add',
		img = new Image(1,1);
		img.src = url + '?' + params
	};
	$(document).ready(function(e){
		$('#goodsContainer').delegate('[data-goods-id]','click',function(){
			var that = $(this),
			goodsId = that.attr('data-goods-id');
		});
	});
})();