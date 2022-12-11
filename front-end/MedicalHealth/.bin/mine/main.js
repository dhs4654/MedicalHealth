(function() {
	var HocMenuListSgm = /*@__PURE__*/ (function(Component) {
		function HocMenuListSgm(props) {
			Component.call(this, props);
			this.data = {
				data: this.props.data || {
					modify: "修改信息",
					band: "绑定账号",
					change: "切换账号",
					logout: "退出登录"
				}
			};
		}

		if (Component) HocMenuListSgm.__proto__ = Component;
		HocMenuListSgm.prototype = Object.create(Component && Component.prototype);
		HocMenuListSgm.prototype.constructor = HocMenuListSgm;
		HocMenuListSgm.prototype.apiready = function() {};
		HocMenuListSgm.prototype.loginfirst = function(e) {
			api.alert({
				msg: "请先登录！"
			});
		};
		HocMenuListSgm.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "hoc-menu-list", onClick: this.loginfirst},
				apivm.h(
					"view",
					{class: "hoc-menu-list-item"},
					apivm.h(
						"text",
						{class: "hoc-menu-list-item-title"},
						this.data.data.modify
					),
					apivm.h("img", {
						class: "hoc-menu-list-item-gor",
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c89316e175437ebce8f361ef3f9c3973.png"
					})
				),
				apivm.h(
					"view",
					{class: "hoc-menu-list-item"},
					apivm.h("text", {class: "hoc-menu-list-item-title"}, this.data.data.band),
					apivm.h("img", {
						class: "hoc-menu-list-item-gor",
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c89316e175437ebce8f361ef3f9c3973.png"
					})
				),
				apivm.h(
					"view",
					{class: "hoc-menu-list-item"},
					apivm.h(
						"text",
						{class: "hoc-menu-list-item-title"},
						this.data.data.change
					),
					apivm.h("img", {
						class: "hoc-menu-list-item-gor",
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c89316e175437ebce8f361ef3f9c3973.png"
					})
				),
				apivm.h(
					"view",
					{class: "hoc-menu-list-item"},
					apivm.h(
						"text",
						{class: "hoc-menu-list-item-title"},
						this.data.data.logout
					),
					apivm.h("img", {
						class: "hoc-menu-list-item-gor",
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c89316e175437ebce8f361ef3f9c3973.png"
					})
				)
			);
		};

		return HocMenuListSgm;
	})(Component);
	HocMenuListSgm.css = {
		".hoc-menu-list-item": {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			borderBottom: "1px solid #f8f8f8",
			height: "49px"
		},
		".hoc-menu-list-item:active": {opacity: "0.7"},
		".hoc-menu-list-item-title": {fontSize: "14px", color: "#333"},
		".hoc-menu-list-item-gor": {width: "10px", height: "10px"}
	};
	apivm.define("hoc-menu-list-sgm", HocMenuListSgm);

	api.addEventListener(
		{
			name: "tabframe"
		},
		function(ret, err) {
			if (ret.name == api.frameName) {
				api.setFrameAttr({
					name: "personal",
					hidden: false
				});
			}
		}
	);
	// function relod(){
	// 	window.location.reload();
	// };
	var HocMinePageSgm = /*@__PURE__*/ (function(Component) {
		function HocMinePageSgm(props) {
			Component.call(this, props);
			this.data = {
				title: "我的",
				avatar:
					"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/21ecd0b8aa98499fa0bb3534295480ee.png",
				nickname: "点击登录"
			};
		}

		if (Component) HocMinePageSgm.__proto__ = Component;
		HocMinePageSgm.prototype = Object.create(Component && Component.prototype);
		HocMinePageSgm.prototype.constructor = HocMinePageSgm;
		HocMinePageSgm.prototype.apiready = function() {
			//like created
			var a = api.getPrefs({sync: true, key: "id"});
			if (a != "0" && a != undefined) {
				api.ajax(
					{
						url: "http://124.222.44.207:5000/userLibrary/users/" + a,
						method: "get",
						headers: {"Content-Type": "application/json;charset=utf-8"}
					},
					function(ret, err) {
						api.openFrame({
							name: "personal",
							url: "../../pages/mine/personalcenter.stml",
							fixedOn: "page4",
							pageParam: {
								names: ret.data.name,
								identitys: ret.data.identity,
								bindTelephones: ret.data.bindTelephone
							},
							rect: {
								x: 0, //左上角x坐标，数字类型
								y: 0, //左上角y坐标，数字类型
								w: "auto", //宽度，若传'auto'，页面从x位置开始自动充满父页面宽度，数字或固定值'auto'
								h: 510 //高度，若传'auto'，页面从y位置开始自动充满父页面高度，数字或固定值'auto'
							}
						});
					}
				);
			}
			api.addEventListener({name: "loginsuccess"}, function(ret) {
				api.alert({msg: "login success!"}); // relod();
			});
		};
		HocMinePageSgm.prototype.installed = function() {};
		HocMinePageSgm.prototype.logini = function(e) {
			api.openFrame({name: "log", url: "../../pages/mine/log.stml"});
		};
		HocMinePageSgm.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "hoc-mine-page-wrapper"},
				apivm.h(
					"view",
					{class: "hoc-mine-page-sgm"},

					apivm.h(
						"view",
						{class: "nav-bar", style: {background: this.props.bgClolor || "#fff"}},
						apivm.h(
							"text",
							{class: "nav-bar-title", style: {color: this.props.textColor || "#000"}},
							this.data.title
						)
					),

					apivm.h(
						"view",
						{class: "hoc-user-panel-sgm", onClick: this.logini},
						apivm.h("image", {
							class: "hoc-user-panel-sgm_bg",
							src:
								"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/4ab30505532e709b72bc49fde2ff3b2b.png"
						}),
						apivm.h(
							"view",
							{class: "hoc-user-panel-sgm-wrap"},
							apivm.h("image", {
								class: "hoc-user-panel-sgm-logo",
								src: this.data.avatar,
								mode: "aspectFill"
							}),
							apivm.h("text", {class: "hoc-user-panel-sgm-name"}, this.data.nickname),
							apivm.h("image", {
								class: "hoc-user-panel-sgm-gol",
								src:
									"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/7158c8c5425bd78b31d74da4ca8563f2.png"
							})
						)
					)
				),
				apivm.h("hoc-menu-list-sgm", null)
			);
		};

		return HocMinePageSgm;
	})(Component);
	HocMinePageSgm.css = {
		".hoc-mine-page-wrapper": {
			display: "flex",
			flexDirection: "column",
			background: "#f8f8f8",
			width: "100%",
			height: "100%",
			position: "relative"
		},
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
		".nav-bar-title": {fontSize: "17px", fontWeight: "500"},
		".hoc-user-panel-sgm": {height: "126px"},
		".hoc-user-panel-sgm_bg": {
			position: "absolute",
			width: "100%",
			height: "100%"
		},
		".hoc-user-panel-sgm-wrap": {
			flexDirection: "row",
			alignItems: "center",
			height: "100%"
		},
		".hoc-user-panel-sgm-logo": {
			width: "60px",
			height: "60px",
			borderRadius: "50%",
			marginLeft: "20px",
			backgroundColor: "#f8f8f8"
		},
		".hoc-user-panel-sgm-name": {
			flex: "1",
			fontSize: "22px",
			color: "white",
			margin: "0 15px"
		},
		".hoc-user-panel-sgm-gol": {
			width: "16px",
			height: "16px",
			marginRight: "20px"
		},
		".hoc-menu-list": {
			borderRadius: "4px",
			backgroundColor: "white",
			marginBottom: "10px",
			padding: "0 10px"
		},
		".hoc-menu-list-item": {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			borderBottom: "5px solid #f8f8f8",
			height: "62px"
		},
		".hoc-menu-list-item-title": {fontSize: "20px", color: "#333"}
	};
	apivm.define("hoc-mine-page-sgm", HocMinePageSgm);
	apivm.render(apivm.h("hoc-mine-page-sgm", null), "body");
})();
