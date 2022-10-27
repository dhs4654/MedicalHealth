(function() {
	var Mine = /*@__PURE__*/ (function(Component) {
		function Mine(props) {
			Component.call(this, props);
		}

		if (Component) Mine.__proto__ = Component;
		Mine.prototype = Object.create(Component && Component.prototype);
		Mine.prototype.constructor = Mine;
		Mine.prototype.render = function() {
			return;
		};

		return Mine;
	})(Component);

	apivm.define("mine", Mine);
	apivm.render(apivm.h("mine", null), "body");
})();
