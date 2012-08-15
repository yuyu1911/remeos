/**
 * 打点模型
 * @author : yu.yuy
 * @createTime : 2012-08-14
 */
(function(){
	var db = require("./config.js").db,
	beacon = db.collection('beacon'),
	ObjectID = require('mongoskin').ObjectID;
	exports.add = function(){
		beacon.insert({pageId:o.pageId,goodsId:goodsId});
	};
	exports.findByPageId = function(pageId,callback){
		beacon.group([goodsId],{pageId:pageId},function(err,items){
			callback(items);
		});
	};
})();