
/**
 * 路由器
 * @author : yu.yuy
 * @createTime : 2012-08-15
 */
(function(){
	var homepage = require('./app/controllers/homepage.js'),
    beacon = require('./app/controllers/beacon.js'),
	goods = require('./app/controllers/goods.js'),
    special = require('./app/controllers/special.js');

    module.exports = function(app){
    	//首页
    	app.get('/', function(req, res){
            homepage.init(req, res);
        });
        //分享会列表页面
    	app.get('/goods/list', function(req, res){
            goods.list(req, res);
        });
        //打点接收
        app.get('/beacon/add', function(req, res){
            beacon.add(req, res);
        });
        //打点结果展现
        app.get('/beacon/:pageId', function(req, res){
            beacon.init(req, res);
        });
        //生成专场并预览
        app.get('/special/create', function(req, res){
            special.create(req, res);
        });
        //专场页面
        app.get('/special/:pageId', function(req, res){
            special.init(req, res);
        });
    };
})();