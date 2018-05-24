/**
 * Created by ty on 17/3/8.
 */
function employeeType(obj,type) {
	$.ajax({
		url: _cfg.api+"sm/organinfos/tree?componentType=employee&employeeType="+type,
		type: "get",
		async: false,
		success: function(results) {
			if(results.meta.code === 1) {
				if(!results.data.rows){
					results.data.rows = [];
				}
				var checked = {};
				checked.id = "";
				checked.children = null;
				checked.state = "open";
				checked.text = '--请选择--';
				results.data.rows.unshift(checked);
				$("#"+obj).combotree({
					animate: true,
					lines: true,
					editable: true,
					data: results.data.rows,
					onBeforeExpand: function(node) {
						if(!node.children) {
							$.ajax({
								url: _cfg.api+"sm/organinfos/tree?componentType=employee&employeeType="+type+"&pId="+node.id,
								async: false,
								type: "get",
								success: function(result) {
									var mouduletree = $("#"+obj).combotree('tree');
									mouduletree.tree("append", {
										parent: node.target,
										data: result.data.rows
									})
								}
							});
						}
					},
					keyHandler: {
						enter: function(e){
							var val = $("#"+obj).combotree("getText");
							$.ajax({
								url: _cfg.api+"sm/organinfos/tree?componentType=employee&employeeType="+type+"&queryName="+ val,
								type: "get",
								success: function(d) {
									if(d.meta.code === 1) {
										if(!d.data.rows){
											d.data.rows = [];
										}
										var checked = {};
										checked.id = "";
										checked.children = null;
										checked.state = "open";
										checked.text = '--请选择--';
										d.data.rows.unshift(checked);
										$('#'+obj).combotree('loadData', d.data.rows);
										$("#"+obj).combotree("setText", val);
									}
								}
							})
						},
						query: function(q){
							if(!q){
								$.ajax({
									url: _cfg.api+"sm/organinfos/tree?componentType=employee&employeeType="+type+"&queryName="+ q,
									type: "get",
									success: function(d) {
										if(d.meta.code === 1) {
											if(!d.data.rows){
												d.data.rows = [];
											}
											var checked = {};
											checked.id = "";
											checked.children = null;
											checked.state = "open";
											checked.text = '--请选择--';
											d.data.rows.unshift(checked);
											$('#'+obj).combotree('loadData', d.data.rows);
											$("#"+obj).combotree("setText", q);
											var t = $('#'+obj).combotree('tree');
											var roots = t.tree("getRoots");
											t.tree("select",roots[0].target);
										}
									}
								})
							}
						}
					}
				})
			}
		}
	})
}