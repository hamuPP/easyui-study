$('#cc').layout('add',{
	region: 'east',
	width: 250,
	title: 'new added East Title',
	split: true,
	tools: [{
		iconCls:'icon-add',
		handler:function(){alert('add')}
	},{
		iconCls:'icon-remove',
		handler:function(){alert('remove')}
	}]
});