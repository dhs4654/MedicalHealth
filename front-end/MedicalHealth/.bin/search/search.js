(function() {
	api.addEventListener(
		{
			name: "tabframe"
		},
		function(ret, err) {
			if (ret.name == api.frameName) {
				api.setFrameAttr({
					name: "personal",
					hidden: true
				});

				var a = api.getPrefs({
					sync: true,
					key: "id"
				});
			}
		}
	);
	var Search = /*@__PURE__*/ (function(Component) {
		function Search(props) {
			Component.call(this, props);
			this.data = {
				search_key: "",
				drugsList: [
					{name: "阿莫西林"},
					{
						name: "999感冒灵"
					},
					{
						name: "西瓜霜"
					},
					{
						name: "布洛芬片"
					},
					{
						name: "醋酸地塞米松片"
					},
					{
						name: "人工牛黄胶囊"
					},
					{
						name: "维生素B2片"
					}
				],

				qaList: [
					{name: "乌鸡白凤丸的药物成分有哪些？"},
					{
						name: "儿童不能吃哪些药？"
					},
					{
						name: "哪些药可以治月经不调？"
					},
					{
						name: "哪些药是含有水泥的？"
					},
					{
						name: "乌鸡白凤丸含有凤凰吗？"
					},
					{
						name: "哪些症状可以吃乌鸡白凤丸"
					},
					{
						name: "旋转陀螺丸的药物成分有哪些？"
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
		Search.prototype.apiready = function() {
			this.openBar();
		};
		Search.prototype.isMode1 = function() {
			this.cancel();
			this.data.drugDetail = {};
			this.data.drugsQA = false;
			this.data.drugsMsg = true;
			this.data.search_key = "";
			this.data.showResult = false;
		};
		Search.prototype.isMode2 = function() {
			this.cancel();
			this.data.drugDetail = {};
			this.data.drugsMsg = false;
			this.data.drugsQA = true;
			this.data.search_key = "";
			this.data.showResult = false;
		};
		Search.prototype.onInput = function(e) {
			this.data.search_key = e.detail.value;
		};
		Search.prototype.closeBar = function(e) {
			api.setTabLayoutAttr({
				hideTabBar: true
			});
		};
		Search.prototype.openBar = function(e) {
			api.setTabLayoutAttr({
				hideTabBar: false
			});
		};
		Search.prototype.search = function(e) {
			var key = this.data.search_key;
			var that = this;
			if (key) {
				api.ajax(
					{
						url: that.data.drugsMsg
							? "http://124.222.44.207:5000/search/info"
							: "http://124.222.44.207:5000/query/question",
						method: "get",
						dataType: "json",
						data: {
							values: {
								info: key,
								question: key
							}
							//键值对
						}
					},
					function(ret, err) {
						if (ret) {
							if (that.data.drugsMsg) {
								that.data.drugDetail = ret.data[0];
							}
							if (that.data.drugsQA) {
								that.data.drugDetail = ret.content;
								if (typeof ret.content != "string") {
									if ("allObj" in ret.content) {
										that.data.drugDetail = ret.content.allObj.join(",   ");
									} else if ("names" in ret.content) {
										that.data.drugDetail = ret.content.names.join(",   ");
									}
								}
							}
							that.data.showResult = true;
						} else {
							api.alert({msg: JSON.stringify(err)});
						}
					}
				);
			} else {
				api.alert({
					msg: "未输入信息！"
				});
			}
		};
		Search.prototype.cancel = function() {
			this.data.showResult = false;
			this.data.search_key = "";
			this.data.drugDetail = {};
		};
		Search.prototype.readDetail = function(item) {
			this.data.search_key = item.name;
			this.search();
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
							},
							onfocus: function(event) {
								if (this$1.closeBar) {
									this$1.closeBar(event);
								} else {
									closeBar(event);
								}
							},
							onblur: function(event) {
								if (this$1.openBar) {
									this$1.openBar(event);
								} else {
									openBar(event);
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
							apivm.h(
								"scroll-view",
								null,
								apivm.h(
									"view",
									null,
									(Array.isArray(this.data.drugsList.slice(0, 8))
										? this.data.drugsList.slice(0, 8)
										: Object.values(this.data.drugsList.slice(0, 8))
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
												apivm.h("image", {class: "contentImg", src: "dg.png"}),
												apivm.h("text", {class: "contentTxt"}, item$1.name)
											)
										);
									})
								)
							)
					  )
					: null,

				this.data.drugsQA &&
					this.data.search_key == "" &&
					this.data.showResult == false
					? apivm.h(
							"view",
							{class: "recommend"},
							apivm.h("text", {class: "topic", decode: "{true}"}, "  热门问答："),
							apivm.h(
								"scroll-view",
								null,
								apivm.h(
									"view",
									null,
									(Array.isArray(this.data.qaList.slice(0, 8))
										? this.data.qaList.slice(0, 8)
										: Object.values(this.data.qaList.slice(0, 8))
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
												apivm.h("image", {class: "contentImg", src: "dg.png"}),
												apivm.h("text", {class: "contentTxt"}, item$1.name)
											)
										);
									})
								)
							)
					  )
					: null,
				this.data.showResult == true && this.data.drugsMsg
					? apivm.h(
							"view",
							null,
							apivm.h(
								"scroll-view",
								{class: "res"},
								this.data.drugsMsg
									? apivm.h(
											"view",
											{class: "resTxt"},
											"     ",
											apivm.h("text", {class: "resTitle"}, "学名:      "),
											"        ",
											apivm.h(
												"text",
												{class: "resContent"},
												"  ",
												this.data.drugDetail.scientificName,
												"           "
											),
											"     "
									  )
									: null,
								this.data.drugsMsg
									? apivm.h(
											"view",
											{class: "resTxt"},
											"     ",
											apivm.h("text", {class: "resTitle"}, "成分:      "),
											"        ",
											apivm.h(
												"text",
												{class: "resContent"},
												"  ",
												this.data.drugDetail.parts,
												"                    "
											),
											"     "
									  )
									: null,
								this.data.drugsMsg
									? apivm.h(
											"view",
											{class: "resTxt"},
											"     ",
											apivm.h("text", {class: "resTitle"}, "适用症:    "),
											"        ",
											apivm.h(
												"text",
												{class: "resContent"},
												"  ",
												this.data.drugDetail.forDisease,
												"               "
											),
											"     "
									  )
									: null,
								this.data.drugsMsg
									? apivm.h(
											"view",
											{class: "resTxt"},
											"     ",
											apivm.h("text", {class: "resTitle"}, "用量用法:  "),
											"        ",
											apivm.h(
												"text",
												{class: "resContent"},
												"  ",
												this.data.drugDetail.usage,
												"                    "
											),
											"     "
									  )
									: null,
								this.data.drugsMsg
									? apivm.h(
											"view",
											{class: "resTxt"},
											"     ",
											apivm.h("text", {class: "resTitle"}, "不良反应:  "),
											"        ",
											apivm.h(
												"text",
												{class: "resContent"},
												"  ",
												this.data.drugDetail.untoward,
												"                 "
											),
											"     "
									  )
									: null,
								this.data.drugsMsg
									? apivm.h(
											"view",
											{class: "resTxt"},
											"     ",
											apivm.h("text", {class: "resTitle"}, "禁忌:      "),
											"        ",
											apivm.h(
												"text",
												{class: "resContent"},
												"  ",
												this.data.drugDetail.forbidden,
												"                "
											),
											"     "
									  )
									: null,
								this.data.drugsMsg
									? apivm.h(
											"view",
											{class: "resTxt"},
											"     ",
											apivm.h("text", {class: "resTitle"}, "注意事项:  "),
											"        ",
											apivm.h(
												"text",
												{class: "resContent"},
												"  ",
												this.data.drugDetail.attention,
												"                "
											),
											"     "
									  )
									: null,
								this.data.drugsMsg
									? apivm.h(
											"view",
											{class: "resTxt"},
											"     ",
											apivm.h("text", {class: "resTitle"}, "贮存方法:  "),
											"        ",
											apivm.h(
												"text",
												{class: "resContent"},
												"  ",
												this.data.drugDetail.storage,
												"                  "
											),
											"     "
									  )
									: null,
								this.data.drugsMsg
									? apivm.h(
											"view",
											{class: "resTxt"},
											"     ",
											apivm.h("text", {class: "resTitle"}, "推荐价格:  "),
											"        ",
											apivm.h(
												"text",
												{class: "resContent"},
												"  ",
												this.data.drugDetail.price,
												"                    "
											),
											"     "
									  )
									: null
							)
					  )
					: null,
				this.data.showResult == true && this.data.drugsQA
					? apivm.h(
							"view",
							null,
							apivm.h(
								"scroll-view",
								{class: "res"},
								apivm.h(
									"view",
									{class: "resTxt"},
									"           ",
									apivm.h("text", {class: "resTitle"}, "最佳回答：      "),
									"           ",
									apivm.h("text", {class: "qaContent"}, this.data.drugDetail, " "),
									"            "
								)
							)
					  )
					: null
			);
		};

		return Search;
	})(Component);
	Search.css = {
		".page": {
			height: "100%",
			backgroundColor: "white",
			backgroundSize: "100% 100%"
		},
		".chooseMode": {
			width: "100%",
			height: "70rpx",
			backgroundColor: "#3b9ffd",
			display: "flex",
			whiteSpace: "nowrap",
			flexDirection: "row",
			alignItems: "flex-end",
			justifyContent: "space-around"
		},
		".mode_btn": {
			height: "45px",
			lineHeight: "45px",
			backgroundColor: "#3b9ffd",
			display: "inline-block"
		},
		".isNot": {
			fontSize: "18px",
			fontWeight: "600",
			marginTop: "3px",
			borderRight: "1px solid #3b9ffd",
			color: "white"
		},
		".isIt": {
			fontSize: "20px",
			fontWeight: "600",
			marginTop: "5px",
			borderRight: "1px solid #3b9ffd",
			color: "rgb(0, 54, 136)"
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
		".topic": {fontSize: "20px", color: "rgb(12, 96, 145)", marginBottom: "20px"},
		".contentTxt": {
			fontSize: "18px",
			color: "black",
			width: "200px",
			textAlign: "left",
			marginLeft: "10px"
		},
		".contentImg": {height: "56px", marginLeft: "3px", marginRight: "6px"},
		".recommendList": {
			marginTop: "15px",
			marginLeft: "10px",
			textAlign: "left",
			display: "flex",
			flexDirection: "row"
		},
		".resImg": {width: "200px", marginLeft: "3%", marginTop: "5%"},
		".resTxt": {
			fontSize: "18px",
			color: "black",
			marginTop: "10px",
			backgroundColor: "white",
			padding: "0 15px 10px"
		},
		".resTitle": {color: "teal", fontSize: "20px", marginBottom: "3px"},
		".resContent": {marginLeft: "5px", marginRight: "5px", fontSize: "15px"},
		".qaContent": {fontSize: "18px", marginLeft: "5px", marginTop: "3px"},
		".scroll-view": {flex: "1", marginTop: "15px"}
	};
	apivm.define("search", Search);
	apivm.render(apivm.h("search", null), "body");
})();
