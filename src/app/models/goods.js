/**
 * 商品模块
 * @author : yu.yuy
 * @createTime : 2012-08-14
 */
(function(){
	var db = require("./config.js").db,
	goods = db.collection('goods'),
	ObjectID = require('mongoskin').ObjectID;
	exports.findAll = function(callback){
		goods.find().toArray(function(err,doc){
			callback(doc);
		});
	};
	exports.findByCategory = function(category,callback){
		goods.find({category:category}).toArray(function(err,doc){
			callback(doc);
		});
	};
	exports.findByPageId = function(pageId,callback){
		goods.find({pageId:pageId}).toArray(function(err,doc){
			callback(doc);
		});
	};
})();