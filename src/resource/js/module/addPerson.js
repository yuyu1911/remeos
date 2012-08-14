jQuery(function($){
	var getPersonInfo = function(type,callback){
		$.ajax({
			
		});
	},
	addPersonModal = $('#addPersonModal'),
	submitPersonInfo = function(data, callback){
		$.ajax({
			url : '/person/edit',
			data:data,
			dataType : 'json',
			success : function(o){
				if(o){
					addPersonModal.modal('hide');
					callback($('#personListContainer'),o);
				}
			}
		});
	},
	renderNewData = function(container,o){
		var name = o.nickname || o.trueName,
		html = '<tr>';
		html += '<td><a title="'+name+'" href="/person/'+o._id+'">'+name+'</a></td>';
		html += '<td>'+o.calculus_score+'</td>';
		html += '<td>'+o.bigbang_score+'</td>';
		html += '</tr>';
		container.append(html);
	};
	addPersonModal.delegate('.btn-save','click',function(e){
		e.preventDefault();
		var that = $(this),
		modal = e.delegateTarget,
		empId = $('#empId').val(),
		nickname = $('#nickname').val(),
		trueName = $('#trueName').val(),
		weiboId = $('#weiboId').val();
		submitPersonInfo({
			empId : empId,
			nickname : nickname,
			trueName : trueName,
			weiboId : weiboId
		},renderNewData);
	});
});