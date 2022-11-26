(function() {
	var Search = /*@__PURE__*/ (function(Component) {
		function Search(props) {
			Component.call(this, props);
			this.data = {
				search_key: "",
				drugsList: [
					{name: "苹果", price: 25, category: "水果"},
					{
						name: "香蕉",
						price: 15,
						category: "水果"
					},
					{
						name: "雪梨",
						price: 65,
						category: "水果"
					},
					{
						name: "宝马",
						price: 2500,
						category: "汽车"
					},
					{
						name: "奔驰",
						price: 10025,
						category: "汽车"
					},
					{
						name: "柑橘",
						price: 15,
						category: "水果"
					},
					{
						name: "奥迪",
						price: 25,
						category: "汽车"
					}
				],

				drugDetail: {},
				page: 1,
				haveMore: true,
				loading: false,
				showNoData: false,
				drugsMsg: true, //mode1
				drugsQA: false, //mode2
				showResult: false
			};
		}

		if (Component) Search.__proto__ = Component;
		Search.prototype = Object.create(Component && Component.prototype);
		Search.prototype.constructor = Search;
		Search.prototype.apiready = function() {};
		Search.prototype.isMode1 = function() {
			this.data.drugsMsg = true;
			this.data.drugsQA = false;
			this.data.search_key = "";
			this.data.showResult = false;
			this.data.drugDetail = {};
		};
		Search.prototype.isMode2 = function() {
			this.data.drugsMsg = false;
			this.data.drugsQA = true;
			this.data.search_key = "";
			this.data.showResult = false;
			this.data.drugDetail = {};
		};
		Search.prototype.onInput = function(e) {
			this.data.search_key = e.detail.value;
		};
		Search.prototype.search = function(e) {
			var key = this.data.search_key;
			// api.alert({msg:key});
			if (key) {
				this.getData(key);
			} else {
				this.data.drugDetail = [];
			}
		};
		Search.prototype.cancel = function() {
			this.data.search_key = "";
			this.data.showResult = false;
			this.data.drugDetail = {};
		};
		Search.prototype.readDetail = function(item) {
			this.data.search_key = item.name;
			this.data.showResult = true;
			this.data.drugDetail = item;
			// api.alert({msg: item.price});
		};
		Search.prototype.getData = function(key) {
			// let that = this;
			// api.alert({msg:key});
			for (var i = 0, list = this.data.drugsList; i < list.length; i += 1) {
				// api.alert({msg:item.price});
				var item = list[i];

				if (item.name == key) {
					this.data.drugDetail = item;
					this.data.showResult = true;
					return;
				}
			}
		};
		Search.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "page"},

				apivm.h(
					"view",
					{class: "chooseMode"},
					apivm.h(
						"text",
						{
							class: "mode_btn",
							onClick: this.isMode1,
							class: this.data.drugsMsg ? "isIt" : "isNot"
						},
						"药物信息"
					),
					apivm.h(
						"text",
						{
							class: "mode_btn",
							onClick: this.isMode2,
							class: this.data.drugsQA ? "isIt" : "isNot"
						},
						"药物问答"
					)
				),

				apivm.h(
					"view",
					{class: "search_container"},
					apivm.h(
						"view",
						{class: "search_box"},
						apivm.h("image", {class: "search_img", src: "search.png"}),
						apivm.h("input", {
							class: "search_int",
							autofocus: true,
							type: "text",
							placeholder: "请输入搜索内容",
							"confirm-type": "search",
							value: this.data.search_key,
							oninput: function(event) {
								if (this$1.onInput) {
									this$1.onInput(event);
								} else {
									onInput(event);
								}
							},
							onconfirm: function(event) {
								if (this$1.search) {
									this$1.search(event);
								} else {
									search(event);
								}
							}
						})
					),
					apivm.h(
						"text",
						{
							class: "search_btn",
							onclick: function(event) {
								if (this$1.cancel) {
									this$1.cancel(event);
								} else {
									cancel(event);
								}
							}
						},
						"取消"
					)
				),

				this.data.drugsMsg &&
					this.data.search_key == "" &&
					this.data.showResult == false
					? apivm.h(
							"view",
							{class: "recommend"},
							apivm.h(
								"text",
								{class: "topic", decode: "{true}"},
								"  推荐药物信息查询："
							),
							(Array.isArray(this.data.drugsList.slice(0, 4))
								? this.data.drugsList.slice(0, 4)
								: Object.values(this.data.drugsList.slice(0, 4))
							).map(function(item$1) {
								return apivm.h(
									"view",
									null,
									apivm.h(
										"view",
										{
											class: "recommendList",
											onClick: function() {
												return this$1.readDetail(item$1);
											}
										},
										apivm.h("image", {class: "contentImg", src: "999.png"}),
										apivm.h("text", {class: "contentTxt"}, item$1.name)
									)
								);
							})
					  )
					: null,

				this.data.drugsQA &&
					this.data.search_key == "" &&
					this.data.showResult == false
					? apivm.h(
							"view",
							{class: "recommend"},
							apivm.h("text", {class: "topic", decode: "{true}"}, "  热门问答："),
							(Array.isArray(this.data.drugsList.slice(5, 8))
								? this.data.drugsList.slice(5, 8)
								: Object.values(this.data.drugsList.slice(5, 8))
							).map(function(item$1) {
								return apivm.h(
									"view",
									null,
									apivm.h(
										"view",
										{
											class: "recommendList",
											onClick: function() {
												return this$1.readDetail(item$1);
											}
										},
										apivm.h("image", {class: "contentImg", src: "999.png"}),
										apivm.h("text", {class: "contentTxt"}, item$1.name)
									)
								);
							})
					  )
					: null,

				this.data.showResult == true
					? apivm.h(
							"view",
							null,
							apivm.h(
								"view",
								{class: "res"},
								apivm.h("image", {class: "resImg", src: "999.png"}),
								apivm.h(
									"text",
									{class: "resTxt"},
									"价格： ",
									this.data.drugDetail.price
								),
								apivm.h(
									"text",
									{class: "resTxt"},
									"类型： ",
									this.data.drugDetail.category
								)
							)
					  )
					: null
			);
		};

		return Search;
	})(Component);
	Search.css = {
		".page": {height: "100%", backgroundColor: "#f8f8f8"},
		".chooseMode": {
			width: "100%",
			height: "70rpx",
			backgroundColor: "#3db8a3",
			display: "flex",
			whiteSpace: "nowrap",
			flexDirection: "row",
			alignItems: "flex-end",
			justifyContent: "space-around"
		},
		".mode_btn": {
			height: "45px",
			lineHeight: "45px",
			backgroundColor: "#3db8a3",
			display: "inline-block"
		},
		".isNot": {
			fontSize: "18px",
			fontWeight: "600",
			marginTop: "3px",
			borderRight: "1px solid #3db8a3",
			color: "white"
		},
		".isIt": {
			fontSize: "20px",
			fontWeight: "600",
			marginTop: "5px",
			borderRight: "1px solid #3db8a3",
			color: "blue"
		},
		".search_container": {
			flexDirection: "row",
			alignItems: "center",
			height: "60px",
			backgroundColor: "#fff"
		},
		".search_box": {
			flexDirection: "row",
			alignItems: "center",
			flex: "1",
			height: "30px",
			backgroundColor: "#F5F5F5",
			borderRadius: "15px",
			marginLeft: "15px"
		},
		".search_img": {
			width: "18px",
			height: "18px",
			marginLeft: "13px",
			marginRight: "6px"
		},
		".search_int": {
			flex: "1",
			fontSize: "16px",
			color: "#333",
			backgroundColor: "transparent",
			border: "none"
		},
		".search_btn": {color: "#666", fontSize: "16px", padding: "0 15px"},
		".recommend": {marginTop: "20%"},
		".topic": {fontSize: "20px", color: "teal", marginBottom: "20px"},
		".contentTxt": {
			fontSize: "18px",
			color: "black",
			display: "inline-block",
			textAlign: "left",
			marginLeft: "10px"
		},
		".contentImg": {width: "100px", marginLeft: "3px", marginRight: "6px"},
		".recommendList": {
			marginTop: "20px",
			marginLeft: "10px",
			textAlign: "left",
			display: "flex",
			flexDirection: "row"
		},
		".resImg": {width: "200px", marginLeft: "3%", marginTop: "5%"},
		".resTxt": {fontSize: "18px", color: "black", marginTop: "10px"},
		".scroll-view": {flex: "1", marginTop: "15px"}
	};
	apivm.define("search", Search);
	apivm.render(apivm.h("search", null), "body");
})();
