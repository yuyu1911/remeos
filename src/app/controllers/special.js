/**
 * 专场控制器
 * @author : yu.yuy
 * @createTime : 2012-08-15
 */
(function(){
	var special = require("../models/special.js");
	//生成专场并预览
	exports.create = function(req, res){
		var goodsIds = req.body.goodsIds.split(',');
		special.add(goodsIds,function(items,pageId){
			res.redirect('/special/preview/'+pageId);
		});
	};
	//专场预览
	exports.preview = function(req, res){
		var pageId = req.params.pageId,
		host = req.headers.host,
		goods;
		special.findByPageId(pageId,function(items){
			console.info(items);
			if(items.goods==='null' || items.goods==='null'){
				goods = [];
			}
			else{
				goods = items.goods;
			}
			res.render('preview.ejs',{goodsList:goods,pageId:pageId,host:host});
		});
	};
	//专场展现
	exports.init = function(req, res){
		
		var pageId = req.params.pageId,
		goods;

		special.findByPageId(pageId,function(items){
			if(items.goods==='null' || items.goods==='null'){
				goods = [];
			}
			else{
				goods = items.goods;
			}
			res.render('special.ejs',{goodsList:goods,pageId:pageId});
		});
	};
})();