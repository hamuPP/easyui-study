/**
 * Created by ty on 17/1/18.
 */
$(function () {
	//初始化stepanimate
	step = $("#mySteps").step();

	////本地取出buzOrg
	//var buzOrg =  JSON.parse(window.sessionStorage.getItem("buzOrg"));
	////得到传参sNodeLevelId
	//var sNodeLevelId = comm.parseURL().params.sNodeLevelId;
	//init(buzOrg,sNodeLevelId);
	regEvent();
	//
	//initStepTwo();

	$.parser.parse($("#stepOne"))
});
var step;
var nStepIndex = 0;
function regEvent(){
	var $nextBtn = $("#nextBtn");
	var $preBtn = $("#preBtn");
	$nextBtn.on("click",function(){
		//检测当前是第几步骤
		if(nStepIndex == 0){
			//进入第二步
			step.nextStep();
			nStepIndex++;
			$preBtn.show();
			$.parser.parse($("#stepTwo"))
		}else if(nStepIndex == 1){
			//进入第三步
			step.nextStep();
			nStepIndex++;
			$nextBtn.html("完成");
			//加载第三步的企业组织的树
			initEnterpriseTree();
		}else if(nStepIndex == 2){
			//保存
			//savePublicAccount(sNodeLevelId);
		}
	});
	$preBtn.on("click",function(){
		step.preStep();
		nStepIndex--;
		$nextBtn.html("下一步");
	});
}

//加载第二步的相关业务
function  initStepTwo(){
	var treeData = [{
		"id":1,
		"text":"Folder1",
		"iconCls":"icon-save",
		"children":[{
			"text":"File1",
			"checked":true
		},{
			"text":"Books",
			"state":"open",
			"attributes":{
				"url":"/demo/book/abc",
				"price":100
			},
			"children":[{
				"text":"PhotoShop",
				"checked":true
			},{
				"id": 8,
				"text":"Sub Bookds",
				"state":"closed"
			}]
		}]
	}];
	var leftTree = $("#businessAppTree")

	leftTree.tree({
		data: treeData
	});
}