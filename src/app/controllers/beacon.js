/**
 * 打点控制器
 * @author : yu.yuy
 * @createTime : 2012-08-15
 */
(function(){
	var beacon = require("../models/beacon.js"),
	loseWeight = function(a){
		var ret = [];
		for(var i,l=a.length;i<l;i++){
			ret.push({
				goodsId:a[i].goodsId,
				count : a[i].count
			});
		}
		return ret;
	};
	//接收打点
	exports.add = function(req, res){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end();
		beacon.add(req.query);
	};
	//轨迹页面
	exports.init = function(req, res){
		var pageId = req.params.pageId;
		beacon.findByPageId(pageId,function(o){
			var track = o.mouse||[];
			console.info(JSON.stringify(track));
			res.render('track.ejs',{click:o.click,mouse:JSON.stringify(track),goodsList:o.special.goods,pageId:pageId});
		});
	};
	//结果页面
	exports.result = function(req, res){
		var pageId = req.params.pageId;
		beacon.findResultByPageId(pageId,function(items){
			res.render('beacon.ejs',{beaconList:items,pageId:pageId});
		});
	};
	//结果页面
	exports.chart = function(req, res){
		var pageId = req.params.pageId;
		beacon.findResultByPageId(pageId,function(items){
			res.render('beacon.ejs',{beaconList:items,pageId:pageId});
		});
	};
	exports.follow = function(req, res){
		var pageId = req.query.pageId;
		beacon.findMouseByPageId(pageId,function(clickInfos,mouseInfo){
			res.send({isRealTime:isRealTime,x:mouseInfo.x,y:mouseInfo.y,goodsInfo:loseWeight(clickInfos)});
		});
	};
	exports.collect = function(req, res){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end();
		beacon.collect(req.body);
	};
})();