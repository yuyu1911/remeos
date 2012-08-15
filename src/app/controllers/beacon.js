/**
 * 打点控制器
 * @author : yu.yuy
 * @createTime : 2012-08-15
 */
(function(){
	var beacon = require("../models/beacon.js");
	//接收打点
	exports.add = function(req, res){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end();
		beacon.add(req.query);
	};
	exports.init = function(req, res){
		var pageId = req.params.pageId;
		beacon.findByPageId(pageId,function(items){
			res.render('beacon.ejs',{goodsList:items});
		});
	};
})();