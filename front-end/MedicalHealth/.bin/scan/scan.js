(function() {
	var Scan = /*@__PURE__*/ (function(Component) {
		function Scan(props) {
			Component.call(this, props);
			this.data = {
				motherfucker: 1,
				drugsList: []
			};
		}

		if (Component) Scan.__proto__ = Component;
		Scan.prototype = Object.create(Component && Component.prototype);
		Scan.prototype.constructor = Scan;
		Scan.prototype.apiready = function() {
			this.getMsg();
		};
		Scan.prototype.getMsg = function() {
			var param = {};
			var xwScanner = api.require("xwScanner");
			var that = this;
			var resultCallback = function(ret, err) {
				if (ret.eventType == "success") {
					if (ret.content && ret.content != "") {
						that.content = ret.content;
						api.confirm(
							{
								title: "药品信息如下，是否加入药库",
								msg: that.content,
								buttons: ["确认", "取消"]
							},
							function(ret2, arr2) {
								if (ret2.buttonIndex == 1) {
									that.data.drugsList.push(that.content);
									api.alert({msg: "成功加入药库"});
									// api.alert({msg:that.data.drugsList});
								}
							}
						);
					}
				}
			};
			xwScanner.openScanner(param, resultCallback);
		};
		Scan.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "content"},
				apivm.h(
					"view",
					{class: "scanIcon"},
					apivm.h("image", {src: "R-C.png", onClick: this.getMsg}),
					apivm.h("text", {class: "wordMsg"}, "扫一扫获取药物具体信息")
				)
			);
		};

		return Scan;
	})(Component);
	Scan.css = {
		".content": {backgroundColor: "whitesmoke", height: "100%"},
		".scanIcon": {
			height: "35%",
			marginTop: "68%",
			marginLeft: "14%",
			position: "absolute"
		},
		".wordMsg": {
			flex: "1",
			fontSize: "14px",
			marginLeft: "22%",
			fontWeight: "bold",
			color: "#333"
		}
	};
	apivm.define("scan", Scan);
	apivm.render(apivm.h("scan", null), "body");
})();
