/**
 * 打点模型
 * @author : yu.yuy
 * @createTime : 2012-08-14
 */
(function(){
	var db = require("./config.js").db,
	beacon = db.collection('beacon'),
	goods = db.collection('goods'),
	special = db.collection('special'),
	ObjectID = require('mongoskin').ObjectID;
	exports.add = function(o){
		beacon.findOne({pageId:o.pageId,goodsId:o.goodsId,type:'click'},function(err,item){
			if(item){
				beacon.update({pageId:o.pageId,goodsId:o.goodsId}, { $inc: { count : 1 } } );
				return;
			}
			goods.findOne({_id:ObjectID(o.goodsId)},function(err,item){
				beacon.insert({pageId:o.pageId,goodsId:o.goodsId,goods:item,count:1,type:'click',create_time:+new Date()});
			})
		});
	};
	exports.collect = function(o){
		var newTrack = JSON.parse(o.track);
		beacon.findOne({pageId:o.pageId,type:'mouse'},function(err,item){
			if(item){
				var oldTrack = item.track;
				beacon.update({pageId:o.pageId,type:'mouse'}, {$set:{track:oldTrack.concat(newTrack),modify_time:+new Date()}});
				return;
			}
			beacon.insert({pageId:o.pageId,type:'mouse',track:newTrack,modify_time:+new Date()});
		});
	};
	exports.findByPageId = function(pageId,callback){
		var ret = {};
		beacon.find({pageId : pageId,type:'click'}).toArray(function(err,items){
			ret['click'] = items;
			beacon.findOne({pageId:pageId,type:'mouse'},function(err,doc){
				ret['mouse'] = doc;
				special.findOne({pageId:pageId},function(err,doc){
					ret['special'] = doc;
					callback(ret);
				});
			});
		});
	};
	exports.findResultByPageId = function(pageId,callback){
		beacon.find({pageId : pageId,type:'click'}).toArray(function(err,items){
			callback(items);
		});
	};
	exports.follow = function(pageId,callback){
		beacon.find({pageId:pageId,type:'click'}).toArray(function(err,items){
			beacon.findOne({pageId:pageId,type:'mouse'},function(err,item){
				callback(items,item);
			})
		});
	};
})();