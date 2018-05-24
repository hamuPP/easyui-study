/**
 * Created by ty on 16/12/29.
 */
function initTableOperationToolbar(args){
	var opts = $.extend({
		tableControl:null,
		shownToorbarComp:null,
		hiddenToorbarComp:null,
		autoCount:false
	},args);

	if(opts.tableControl && opts.autoCount){
		opts.tableControl.datagrid({
			onCheck:function(){
				tblToolbarCountNumber(opts);
			},
			onCheckAll :function(){
				tblToolbarCountNumber(opts);
			},
			onUncheck :function(){
				tblToolbarCountNumber(opts);
			},
			onUncheckAll :function(){
				tblToolbarCountNumber(opts);
			},
			onLoadSuccess: function(){
				opts.shownToorbarComp.show();
				opts.hiddenToorbarComp.hide();
			}
		});
	}
}

/**
 * 为表格勾选框计数
 * @param args
 * @returns undefined
 */
function tblToolbarCountNumber(args){
	var _countNum = 0;
	var _tbl = args.tableControl;
	var _ShownComponent = args.shownToorbarComp;
	var _HiddenComponent = args.hiddenToorbarComp;
	var _numElement = _HiddenComponent.find("i[data-selector='num']");
	var aCheckedRows = _tbl.datagrid("getChecked");

	if(aCheckedRows.length && aCheckedRows.length > 0){
		//有check表格时，显示该操作栏
		_ShownComponent.hide();
		_HiddenComponent.show();
		_countNum = aCheckedRows.length;
	}else{
		//没有check表格时，隐藏该操作栏
		_ShownComponent.show();
		_HiddenComponent.hide();
		_countNum = 0;
	}
	_numElement.html(_countNum);
}