$.fn.datagrid.defaults.onLoadSuccess = function(result){
	var $datagrid = $(this),
		checkAll = $('<div class="dg-checkAllDiv comm_float_left comm_ma_l20"><label>' +
			'<input type="checkbox" class="checkAll"> 全选</label>' +
			'<a href="javascript:void(0)" class="easyui-linkbutton" id="multipuleOperate">批量操作</a></div>');

	// TODO UI调整全选框
	/*移除复选框、为分页添加复选框*/
	$('.datagrid-pager.pagination').find('.dg-checkAllDiv').remove();
	$('.datagrid-pager.pagination').append(checkAll);
	/*复选框值改变事件*/

	$(this).parent().parent().on("click", ".checkAll", $.proxy(function(){
		var _$this = this;

		var currentCheckedRows = _$this.datagrid("getChecked");

		if(currentCheckedRows.length){//有已勾选的行，则此时该取消全部勾选
			_$this.datagrid("unselectAll");
		}else{
			_$this.datagrid("selectAll");
		}
	},$datagrid));

	//$('.checkAll').on('change',function(){
	//	console.log(833333);
	//
	//	console.log(this);
	//	console.log($(this));
	//	console.log($(this).parent());
	//	console.log($(this).parent().parent());
	//	/*调用复选框只改变处理函数*/
	//	//checkboxChange(this,$datagrid);
	//});
};

function regCheckAllClick(ctx){
	var $checkboxInput =""
}