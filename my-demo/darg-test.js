/**
 * Created by ty on 16/11/21.
 */
$("#corp-grid").datagrid({
	title:"泥头车企业管理",
	toolbar:"#corp-grid-toolbar",
	border:false,
	fit:true,
	width:$(window).width()-252,
	columns:[[
		{field:"ckb",checkbox:true},
		{field:"corpName",title:"企业名称",width:200,halign:"center",align:"center",resizable:true},
		{field:"linkedCorpName",title:"挂靠深圳企业名称",width:200,halign:"center",align:"center",resizable:true},
		{field:"corpType",title:"企业类型",width:80,align:"center",resizable:false},
		{field:"businessScope",title:"经营范围",width:80,align:"center",resizable:false},
		{field:"effectiveDate",title:"有效日期",width:80,align:"center",resizable:false},
		{field:"opePeriod",title:"营业期限",width:80,align:"center",resizable:false},
		{field:"ifLocal",title:"是否本地",width:80,align:"center",resizable:false},
		{field:"state",title:"有效状态",width:80,align:"center",resizable:false}
	]],
	//striped:true,
	fitColumns:true,
	//autoRowHeight:true,
	rownumbers:false,
	singleSelect:false,
	ctrlSelect:true,
	pagination:true,
	pageSize:10,
	pageList:[5,10,15,20,25,30],
	sortName:"corpId",
	sortOrder:"desc",
	url:"corp_getInfoList.action",
	method:"post",
	loadMsg:"加载数据中，请稍后",
	onDblClickRow:function(rowIndex, rowData){
		openDialog({
			type:"view",
			title:"泥头车企业信息查看",
			width:800,
			height:400,
			maximizable:true,
			href:"BaseInfo/Corp/CorpInfoView.html"
		});
	},
	onRowContextMenu:function(e, rowIndex, rowData){
		e.preventDefault();

		$(this).datagrid("unselectAll");

		$(this).datagrid("selectRow", rowIndex);

		$("#corp-menu").menu("show",{
			left:event.pageX,
			top:event.pageY
		});
	}
}).datagrid("columnMoving");