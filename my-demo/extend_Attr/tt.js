/**
 * Created by ty on 16/12/28.
 */
(function ($) {
	function addExattr(target) {

		var pager = $(target).datagridEx("getPager");
		console.log(pager);

		return $(target);
	}

	//easyui插件函数
	$.fn.datagridEx = function (options, param) {
		//如果options为string，则是方法调用，如$('#divMyPlugin').datagrid('saydatagrid');
		if (typeof options == 'string') {
			var method = $.fn.datagridEx.methods[options];
			if (method) { //尝试调用datagridEx的方法，没有找到就去找datagrid的方法
				return method(this, param);
			} else {
				return this.datagrid(options, param); //调用继承的datagrid的方法
			}
		}

		//否则是插件初始化函数，如$('#divMyPlugin').datagrid();
		options = options || {};
		return this.each(function () {
			var state = $.data(this, 'datagrid');
			if (state) {
				$.extend(state.options, options);
			} else {
				//easyui的parser会依次计算options、initedObj
				state = $.data(this, 'datagridEx', {
					options: $.extend({}, $.fn.datagridEx.defaults, $.fn.datagridEx.parseOptions(this), options)
				});


			}

			$(this).datagrid(state.options); //调用继承的datagrid的构造方法

			if(state.options && state.options.extendAttr){
				addExattr(this);
			}

			//var $input = $("<input />");
			//var current = this;
			//$input.width(state.options.inputWidth).val(state.options.to).change(function () {
			//	var val = $(this).val();
			//	$.data(current, 'datagrid').options.to = val;
			//	$.data(current, 'datagridEx').options.to = val;
			//});
			//$(this).append($input);
			//
			//$(this).css('color', state.options.myColor);
		});
	};

	//【注意】这里的methods没有采用$.extend
	$.fn.datagridEx.methods = {
		options: function (jq) {
			var copts = jq.datagrid('options'); //获取datagrid继承的options
			return $.extend($.data(jq[0], 'datagridEx').options, {});
		}
	};

	//设置参数转换方法（使用$.extend从继承的datagrid那里拓展）
	$.fn.datagridEx.parseOptions = function (target) {
		var opts = $.extend({}, $.fn.datagrid.parseOptions(target), $.parser.parseOptions(target, [{ inputWidth: 'number' }]));//这里可以指定参数的类型
		return opts;
	};

	//设置datagrid插件的一些默认值（使用$.extend从继承的datagrid那里拓展）
	$.fn.datagridEx.defaults = $.extend({}, $.fn.datagrid.defaults, {
		inputWidth: 100
	});

	//注册插件datagridEx
	$.parser.plugins.push("datagridEx");
})(jQuery);