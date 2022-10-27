(function() {
	var Search = /*@__PURE__*/ (function(Component) {
		function Search(props) {
			Component.call(this, props);
		}

		if (Component) Search.__proto__ = Component;
		Search.prototype = Object.create(Component && Component.prototype);
		Search.prototype.constructor = Search;
		Search.prototype.render = function() {
			return;
		};

		return Search;
	})(Component);

	apivm.define("search", Search);
	apivm.render(apivm.h("search", null), "body");
})();
