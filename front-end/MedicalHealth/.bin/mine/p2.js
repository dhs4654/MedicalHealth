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
		HocMenuListSgm.prototype.tomodify = function(e) {
			api.openFrame({
				name: "modifying",
				url: "../../pages/mine/modify.stml"
			});
		};
		HocMenuListSgm.prototype.tobinding = function(e) {
			api.openFrame({
				name: "binding",
				url: "../../pages/mine/binding.stml"
			});
		};
		HocMenuListSgm.prototype.tochange = function(e) {
			api.openFrame({
				name: "change",
				url: "../../pages/mine/log.stml"
			});
		};
		HocMenuListSgm.prototype.logouttomain = function(e) {
			api.setPrefs({
				key: "id",
				value: "0"
			});

			api.closeFrame();
		};
		HocMenuListSgm.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "hoc-menu-list"},
				apivm.h(
					"view",
					{class: "hoc-menu-list-item", onClick: this.tomodify},
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
					{class: "hoc-menu-list-item", onClick: this.tobinding},
					apivm.h("text", {class: "hoc-menu-list-item-title"}, this.data.data.band),
					apivm.h("img", {
						class: "hoc-menu-list-item-gor",
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c89316e175437ebce8f361ef3f9c3973.png"
					})
				),
				apivm.h(
					"view",
					{class: "hoc-menu-list-item", onClick: this.tochange},
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
					{class: "hoc-menu-list-item", onClick: this.logouttomain},
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

	global.socket = new WebSocket("ws://124.222.44.207:5000/websocket");
	global.x = api.getPrefs({sync: true, key: "id"});

	api.ajax(
		{
			url: "http://124.222.44.207:5000/userLibrary/users/" + x,
			method: "get",
			headers: {
				"Content-Type": "application/json;charset=utf-8"
			}
		},

		function(ret, err) {
			tele = ret.data.telephone;

			var obj = {telephone: tele};
			var js = JSON.stringify(obj);
			socket.addEventListener("open", function(event) {
				socket.send(js);
			});
			socket.addEventListener("message", function(event) {
				api.confirm(
					{
						title: "confirmband",
						msg: "电话为" + event.data + "的用户对您发出绑定请求，是否接受？",
						buttons: ["是", "否"]
					},
					function(ret, err) {
						var index = ret.buttonIndex;
						if (index == 1) {
							api.ajax(
								{
									url: "http://124.222.44.207:5000/userLibrary/ack",
									method: "put",
									headers: {
										"Content-Type": "application/json;charset=utf-8"
									},

									data: {
										body: {
											telephone: tele,
											bindTelephone: event.data
										}
									}
								},

								function(ret, err) {
									api.alert({
										msg: "回复已确认，绑定成功！"
									});
								}
							);
						}
					}
				);
			});
		}
	);
	var HocMinePageSgm = /*@__PURE__*/ (function(Component) {
		function HocMinePageSgm(props) {
			Component.call(this, props);
			this.data = {
				port: "  当前端口:" + api.pageParam.identitys,
				title: "我的",
				avatar:
					"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/6fbc0b9f6404895c6400d27261011ab1.png",
				nickname: " " + api.pageParam.names,
				bindtele:
					api.pageParam.bindTelephones == "00000000000"
						? "  未绑定用户"
						: "  绑定用户电话:" + api.pageParam.bindTelephones
			};
		}

		if (Component) HocMinePageSgm.__proto__ = Component;
		HocMinePageSgm.prototype = Object.create(Component && Component.prototype);
		HocMinePageSgm.prototype.constructor = HocMinePageSgm;
		HocMinePageSgm.prototype.apiready = function() {};
		HocMinePageSgm.prototype.content = function() {};
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
						{class: "hoc-user-panel-sgm"},
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
							apivm.h(
								"text",
								{class: "hoc-user-panel-sgm-name", id: "nickn"},
								this.data.nickname
							),
							apivm.h("image", {
								class: "hoc-user-panel-sgm-gol",
								src:
									"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/7158c8c5425bd78b31d74da4ca8563f2.png"
							})
						)
					),
					apivm.h(
						"view",
						{class: "hoc-menu-list-item"},
						apivm.h(
							"text",
							{class: "hoc-menu-list-item-title", id: "ident"},
							" ",
							this.data.port
						)
					),
					apivm.h(
						"view",
						{class: "hoc-menu-list-item"},
						apivm.h(
							"text",
							{class: "hoc-menu-list-item-title", id: "bindt"},
							" ",
							this.data.bindtele
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
			background: "white",
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
			borderBottom: "1px solid #f8f8f8",
			height: "62px"
		},
		".hoc-menu-list-item-title": {fontSize: "20px", color: "#333"}
	};
	apivm.define("hoc-mine-page-sgm", HocMinePageSgm);
	apivm.render(apivm.h("hoc-mine-page-sgm", null), "body");
})();
