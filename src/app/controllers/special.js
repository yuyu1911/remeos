/**
 * 专场控制器
 * @author : yu.yuy
 * @createTime : 2012-08-15
 */
(function(){
	var special = require("../models/special.js");
	//生成专场并预览
	exports.create = function(req, res){
		var goodsIds = req.query.goodsIds.split(',');
		special.add(goodsIds,function(items,pageId){
			res.render('preview.ejs',{goodsList:items,pageId:pageId});
		});
	};
	//专场展现
	exports.init = function(req, res){
		var pageId = req.params.pageId;
		special.findByPageId(pageId,function(items){
			res.render('special.ejs',{goodsList:items,pageId:pageId});
		});
	};
})();