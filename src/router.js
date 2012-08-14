
/**
 * 路由器
 * @author : yu.yuy
 * @createTime : 2012-07-21
 */
(function(){
	var homepage = require('./app/controllers/homepage.js'),
	goods = require('./app/controllers/goods.js');

    module.exports = function(app){
    	//首页
    	app.get('/', function(req, res){
            homepage.init(req, res);
        });
        //分享会列表页面
    	app.get('/goods/list', function(req, res){
            goods.list(req, res);
        });
    };
})();