/**
 * 专场模型
 * @author : yu.yuy
 * @createTime : 2012-08-15
 */
(function(){
	var db = require("./config.js").db,
	special = db.collection('special'),
	goods = db.collection('goods'),
	ObjectID = require('mongoskin').ObjectID,
	pageIdCreator = function(){
		//取0到2147483647之间的自然数，32位系统最大整型
        return 'p'+Math.round(Math.random() * 2147483647)+(+new Date());
	},
	turnToObjectId = function(a){
		var ret = [];
		console.info(a);
		for(var i=0,l=a.length;i<l;i++){
			if(!a[i]){
				return;
			}
			ret.push(ObjectID(a[i]));
		}
		return ret;
	};
	exports.findByPageId = function(pageId,callback){
		special.findOne({pageId:pageId},function(err,doc){
			callback(doc);
		});
	};
	exports.add = function(a,callback){
		var pageId = pageIdCreator();
			//console.log(records);
		goods.find({_id:{$in : turnToObjectId(a)}}).toArray(function(err,items){
			//console.info(items);
			special.insert({goods:items,pageId:pageId},function(err,records){
				//console.info(items);
				callback(records,pageId);
			});
		});
	};
})();