/**
 * 首页
 * @author : yu.yuy
 * @createTime : 2012-07-21
 */
(function(){
	var goods = require("../models/goods.js");
	exports.init = function(req, res){
		goods.findAll(function(items){
			res.render('homepage.ejs',{goodsList:items});
		});
	};
})();