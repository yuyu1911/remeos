/**
 * 数据库配置
 * @author : yu.yuy
 * @createTime : 2012-07-12
 */
(function(){
	var recorder = function(params){
		var url = '/beacon/add',
		img = new Image(1,1);
		img.src = url + '?' + params;
	},
	isString = function(s){
            return typeof s==='string';
        },
	//拆解字符串（cookie/url参数等）成json对象
    parseParam = function(s,separator){
        var parts,
        keyValueArray=null,
        hash={};
        if(isString(s) && s.length>0) {
            parts=s.split(separator);
            for(var i=0,len=parts.length;i<len;++i) {
                keyValueArray=parts[i].split('=');
                //hash[unescape(keyValueArray[0])]=unescape(keyValueArray[1]);
                hash[keyValueArray[0]]=keyValueArray[1];
            }
        }
        return hash;
    },
	parseJsonToParams = function(o){
		var ret = [];
		for(var i in o){
			if(o.hasOwnProperty(i)){
				ret.push(i+'='+o[i]);
			}
		}
		return ret.join('&');
	};
	$(document).ready(function(e){
		var goodsContainer = $('#J_List'),
		pageId = goodsContainer.attr('data-page-id');
		goodsContainer.delegate('[data-goods-id]','click',function(){
			var that = $(this),
			goodsId = that.attr('data-goods-id');
			recorder(parseJsonToParams({
				goodsId : goodsId,
				pageId : pageId,
				t : +new Date()
			}));
		});
	});
})();