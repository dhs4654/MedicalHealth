(function() {
	var Scan = /*@__PURE__*/ (function(Component) {
		function Scan(props) {
			Component.call(this, props);
		}

		if (Component) Scan.__proto__ = Component;
		Scan.prototype = Object.create(Component && Component.prototype);
		Scan.prototype.constructor = Scan;
		Scan.prototype.render = function() {
			return;
		};

		return Scan;
	})(Component);

	apivm.define("scan", Scan);
	apivm.render(apivm.h("scan", null), "body");
})();
