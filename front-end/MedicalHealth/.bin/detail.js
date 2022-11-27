(function() {
	var Detail = /*@__PURE__*/ (function(Component) {
		function Detail(props) {
			Component.call(this, props);
		}

		if (Component) Detail.__proto__ = Component;
		Detail.prototype = Object.create(Component && Component.prototype);
		Detail.prototype.constructor = Detail;
		Detail.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "a"},
				apivm.h("text", {class: "view_1"}, "你好！")
			);
		};

		return Detail;
	})(Component);
	Detail.css = {
		".view_1": {marginTop: "200px", fontSize: "30px", color: "black"},
		".a": {background: "brown", width: "100%", height: "100%"}
	};
	apivm.define("detail", Detail);
	apivm.render(apivm.h("detail", null), "body");
})();
