(function() {
	var HocNavBarSgm = /*@__PURE__*/ (function(Component) {
		function HocNavBarSgm(props) {
			Component.call(this, props);
			this.data = {
				title: this.props.title !== undefined ? this.props.title : "拼团商城"
			};
		}

		if (Component) HocNavBarSgm.__proto__ = Component;
		HocNavBarSgm.prototype = Object.create(Component && Component.prototype);
		HocNavBarSgm.prototype.constructor = HocNavBarSgm;
		HocNavBarSgm.prototype.back = function() {
			this.fire("backClick");
			api.closeWin();
			api.openFrame({
				name: "backtostore",
				url: "../../pages/medical_store/medical_store.stml",
				animation: {
					type: "push",
					subType: "from_right",
					duration: 300
				}
			});
		};
		HocNavBarSgm.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "nav-bar", style: {background: this.props.bgClolor || "#fff"}},
				this.props.isShowBack
					? apivm.h(
							"view",
							{onClick: this.back, class: "nav-bar-back"},
							apivm.h("img", {
								src:
									"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/6958c7448f8d7106d3ee273fa7430063.png",
								alt: "back",
								class: "nav-bar-back-icon"
							}),
							apivm.h(
								"text",
								{
									class: "nav-bar-back-text",
									style: {color: this.props.textColor || "#000"}
								},
								"返回"
							)
					  )
					: null,
				apivm.h(
					"text",
					{class: "nav-bar-title", style: {color: this.props.textColor || "#000"}},
					this.data.title
				)
			);
		};

		return HocNavBarSgm;
	})(Component);
	HocNavBarSgm.css = {
		".nav-bar": {
			width: "100%",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			flexShrink: "0",
			height: "48px",
			borderBottom: "0.5px solid #e8e8e8"
		},
		".nav-bar-back": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			position: "absolute",
			left: "16px"
		},
		".nav-bar-back-icon": {width: "20px", height: "20px"},
		".nav-bar-back-text": {fontSize: "17px"},
		".nav-bar-title": {fontSize: "17px", fontWeight: "500"}
	};
	apivm.define("hoc-nav-bar-sgm", HocNavBarSgm);

	var HocCompanyDetailEs = /*@__PURE__*/ (function(Component) {
		function HocCompanyDetailEs(props) {
			Component.call(this, props);
			this.data = {
				html_detail:
					this.props.html_detail !== undefined
						? this.props.html_detail
						: "<img style='width: 100%;' src='http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/049597870908fc92d2fe5f19541cfa1c.png' alt='detail'/>\n"
			};
		}

		if (Component) HocCompanyDetailEs.__proto__ = Component;
		HocCompanyDetailEs.prototype = Object.create(
			Component && Component.prototype
		);
		HocCompanyDetailEs.prototype.constructor = HocCompanyDetailEs;
		HocCompanyDetailEs.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "company-detail"},
				apivm.h("rich-text", {nodes: this.data.html_detail})
			);
		};

		return HocCompanyDetailEs;
	})(Component);
	apivm.define("hoc-company-detail-es", HocCompanyDetailEs);

	global.idnum = "";
	global.idtype = "";
	var Detail = /*@__PURE__*/ (function(Component) {
		function Detail(props) {
			Component.call(this, props);
			this.data = {
				type: ["我的", "家人"],
				id: "",
				item: []
			};
		}

		if (Component) Detail.__proto__ = Component;
		Detail.prototype = Object.create(Component && Component.prototype);
		Detail.prototype.constructor = Detail;
		Detail.prototype.installed = function() {
			this.getidnum();
			this.initData();
		};
		Detail.prototype.getidnum = function(e) {
			this.data.id = api.pageParam.data;
		};
		Detail.prototype.initData = function() {
			var this$1 = this;

			var request = function(url, params, method) {
				return new Promise(function(resolve, reject) {
					api.ajax(
						{
							url: "http://124.222.44.207:5000/drugLibrary/drugs/" + this$1.data.id,
							method: "get"
						},
						function(ret, err) {
							if (ret) {
								resolve(ret);
							} else {
								reject(
									"错误码：" +
										err.code +
										"；错误信息：" +
										err.msg +
										"网络状态码：" +
										err.statusCode
								);
							}
						}
					);
				});
			};
			request().then(function(res) {
				if (res.data) {
					this$1.data.item = res.data;
				} else {
					api.alert({
						title: "首页请求数据提示",
						msg: res.reject
					});
				}
			});
		};
		Detail.prototype.setclock = function(e) {
			api.openWin({
				name: "setclock",
				url: "./clock.stml",
				reload: true,
				bounces: true,
				pageParam: {
					data: this.data.item.id
				}
			});
		};
		Detail.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "view"},
				apivm.h("hoc-nav-bar-sgm", {title: "药物详细信息", isShowBack: true}, "="),
				apivm.h(
					"view",
					{class: "list"},
					apivm.h("image", {
						class: "image",
						src: this.data.item.img,
						mode: "center"
					}),
					apivm.h("text", {class: "name"}, "药物名称：", this.data.item.name, " "),
					apivm.h(
						"view",
						{class: "owner"},
						apivm.h(
							"picker",
							{
								name: "type",
								mode: "selector",
								range: this.data.type,
								value: this.data.type[this.data.item.owner - 1]
							},
							apivm.h(
								"text",
								{class: "owner1"},
								"药物所有：",
								this.data.type[this.data.item.owner - 1]
							)
						),
						apivm.h(
							"view",
							{class: "clock", id2: this.data.item.id},
							apivm.h(
								"button",
								{class: "text", id2: this.data.item.id, onClick: this.setclock},
								"设闹钟"
							)
						)
					),
					apivm.h(
						"text",
						{class: "manufacturedate"},
						"生产日期：",
						this.data.item.manufacturedate
					),
					apivm.h("text", {class: "duedate"}, "截止日期：", this.data.item.duedate),
					apivm.h("text", {class: "instruct"}, "具体说明："),
					apivm.h("text", {class: "detail"}, " ", this.data.item.desc)
				)
			);
		};

		return Detail;
	})(Component);
	Detail.css = {
		".view": {
			width: "100%",
			height: "100%",
			textAlign: "center",
			fontSize: "10px"
		},
		".list": {width: "100%", marginTop: "10px"},
		".image": {
			width: "270px",
			height: "270px",
			marginLeft: "50px",
			objectFit: "contain",
			marginBottom: "10px"
		},
		".name": {
			width: "100%",
			height: "5%",
			fontSize: "20px",
			borderStyle: "double",
			borderColor: "#f0f0f0",
			borderWidth: "1px",
			marginBottom: "5px",
			marginLeft: "10px"
		},
		".owner": {
			display: "flex",
			width: "100%",
			height: "5%",
			flexDirection: "row",
			marginLeft: "10px",
			marginBottom: "5px",
			borderStyle: "double",
			borderColor: "#f0f0f0",
			borderWidth: "1px"
		},
		".owner1": {fontSize: "20px"},
		".clock": {width: "80px", height: "100%", marginLeft: "80px"},
		".text": {fontSize: "11px"},
		".manufacturedate": {
			width: "100%",
			height: "5%",
			fontSize: "20px",
			borderStyle: "double",
			borderColor: "#f0f0f0",
			borderWidth: "1px",
			marginBottom: "5px",
			marginLeft: "10px",
			cssFloat: "center"
		},
		".duedate": {
			width: "100%",
			height: "5%",
			fontSize: "20px",
			borderStyle: "double",
			borderColor: "#f0f0f0",
			borderWidth: "1px",
			marginBottom: "5px",
			marginLeft: "10px"
		},
		".instruct": {
			width: "100%",
			height: "8%",
			fontSize: "20px",
			marginLeft: "10px",
			borderTop: "1px double #f0f0f0"
		},
		".detail": {
			width: "100%",
			fontSize: "20px",
			borderBottom: "1px double #f0f0f0",
			marginLeft: "10px",
			height: "20%"
		},
		".owner2": {marginTop: "3px", fontSize: "20px"}
	};
	apivm.define("detail", Detail);
	apivm.render(apivm.h("detail", null), "body");
})();
