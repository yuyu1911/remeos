/**
 * 打点模型
 * @author : yu.yuy
 * @createTime : 2012-08-14
 */
(function(){
	var db = require("./config.js").db,
	beacon = db.collection('beacon'),
	goods = db.collection('goods'),
	ObjectID = require('mongoskin').ObjectID;
	exports.add = function(o){
		beacon.findOne({pageId:o.pageId,goodsId:o.goodsId},function(err,item){
			if(item){
				beacon.update({pageId:o.pageId,goodsId:o.goodsId}, { $inc: { count : 1 } } );
				return;
			}
			goods.findOne({_id:ObjectID(o.goodsId)},function(err,item){
				beacon.insert({pageId:o.pageId,goodsId:o.goodsId,goods:item,count:1,create_time:new Date()});
			})
		});
	};
	exports.findByPageId = function(pageId,callback){
		beacon.find({pageId : pageId}).toArray(function(err,items){
			console.info(items);
			callback(items);
		});
	};
})();