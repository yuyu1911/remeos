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
		var ret = {};
		goods.find({category:'1'}).toArray(function(err,doc){
			ret['dress'] = doc;
			goods.find({category:'2'}).toArray(function(err,doc){
				ret['tShirt'] = doc;
				goods.find({category:'3'}).toArray(function(err,doc){
					ret['bag'] = doc;
					goods.find({category:'4'}).toArray(function(err,doc){
						ret['staffToys'] = doc;
						goods.find({category:'5'}).toArray(function(err,doc){
							ret['sandal'] = doc;
							goods.find({category:'6'}).toArray(function(err,doc){
								ret['trousers'] = doc;
								goods.find({category:'7'}).toArray(function(err,doc){
									ret['necklace'] = doc;
									goods.find({category:'8'}).toArray(function(err,doc){
										ret['flower'] = doc;
										goods.find({category:'9'}).toArray(function(err,doc){
											ret['lowShoes'] = doc;
											goods.find({category:'10'}).toArray(function(err,doc){
												ret['bracelet'] = doc;
												callback(ret);
											});
										});
									});
								});
							});
						});
					});
				});
			});
			
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