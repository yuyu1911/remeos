/**
 * 商品控制器
 * @author : yu.yuy
 * @createTime : 2012-08-14
 */
(function(){
	var goods = require("../models/goods.js");
	//人员列表
	exports.list = function(req, res){
		goods.findAll(function(items){
			res.render('goods/list.ejs',{goodsList:items});
		});
	};
})();