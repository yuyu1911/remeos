/**
 * 数据库配置
 * @author : yu.yuy
 * @createTime : 2012-07-12
 */
(function(){
	var mongo = require('mongoskin');
		exports.db = mongo.db('localhost:27017/remeo');
})();