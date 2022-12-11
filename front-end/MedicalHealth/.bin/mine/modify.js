(function() {
	var HocMenuListSgm = /*@__PURE__*/ (function(Component) {
		function HocMenuListSgm(props) {
			Component.call(this, props);
			this.data = {
				data: this.props.data || {
					choose: "请选择要修改的内容：",
					modifyname: "昵称",
					modifykey: "密码",
					modifyport: "子女/老人端切换"
				}
			};
		}

		if (Component) HocMenuListSgm.__proto__ = Component;
		HocMenuListSgm.prototype = Object.create(Component && Component.prototype);
		HocMenuListSgm.prototype.constructor = HocMenuListSgm;
		HocMenuListSgm.prototype.apiready = function() {};
		HocMenuListSgm.prototype.backtoperson = function(e) {
			api.sendEvent({
				name: "back",
				extra: {}
			});

			api.closeFrame();
		};
		HocMenuListSgm.prototype.modifynick = function(e) {
			var cname;

			var index;
			api.prompt(
				{
					msg: "输入你想要修改的昵称：",
					buttons: ["确定修改", "取消"]
				},
				function(ret, err) {
					index = ret.buttonIndex;
					cname = ret.text;
					if (index == 1) {
						var a = api.getPrefs({
							sync: true,
							key: "id"
						});

						api.ajax(
							{
								url: "http://124.222.44.207:5000/userLibrary/users/" + a,
								method: "put",
								headers: {
									"Content-Type": "application/json;charset=utf-8"
								},

								data: {
									body: {
										name: cname
									}
								}
							},

							function(ret, err) {
								api.closeFrame();
								api.openFrame({
									name: "personal",
									fixedOn: "page4",
									reload: true,
									url: "../../pages/mine/personalcenter.stml",
									pageParam: {
										names: cname,
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
				}
			);
		};
		HocMenuListSgm.prototype.modifypassw = function(e) {
			var cpassw;
			var index;
			api.prompt(
				{
					msg: "输入你想要修改的密码：",
					buttons: ["确定修改", "取消"]
				},
				function(ret, err) {
					index = ret.buttonIndex;
					cpassw = ret.text;
					if (index == 1) {
						var a = api.getPrefs({
							sync: true,
							key: "id"
						});

						api.ajax(
							{
								url: "http://124.222.44.207:5000/userLibrary/users/" + a,
								method: "put",
								headers: {
									"Content-Type": "application/json;charset=utf-8"
								},

								data: {
									body: {
										password: cpassw
									}
								}
							},

							function(ret, err) {
								api.closeFrame({});
							}
						);
					}
				}
			);
		};
		HocMenuListSgm.prototype.modifyports = function(e) {
			var cport;
			var index;
			api.prompt(
				{
					msg: "输入端口名称（server为子女端、client为老人端）：",
					buttons: ["确定修改", "取消"]
				},
				function(ret, err) {
					index = ret.buttonIndex;
					cport = ret.text;

					if (index == 1) {
						if (cport == "server" || cport == "client") {
							var a = api.getPrefs({
								sync: true,
								key: "id"
							});

							api.ajax(
								{
									url: "http://124.222.44.207:5000/userLibrary/users/" + a,
									method: "put",
									headers: {
										"Content-Type": "application/json;charset=utf-8"
									},

									data: {
										body: {
											identity: cport
										}
									}
								},

								function(ret, err) {
									api.closeFrame();
									api.openFrame({
										name: "personal",
										url: "../../pages/mine/personalcenter.stml",
										fixedOn: "page4",
										reload: true,
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
						} else {
							api.alert({
								msg: "输入错误，请输入 server / client "
							});
						}
					}
				}
			);
		};
		HocMenuListSgm.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "hoc-mine-page-wrapper"},
				apivm.h("view", {class: "standplace"}),
				apivm.h(
					"view",
					{class: "hoc-menu-list"},
					apivm.h(
						"view",
						{class: "back", onClick: this.backtoperson},
						apivm.h("img", {
							src:
								"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/6958c7448f8d7106d3ee273fa7430063.png",
							alt: "back",
							class: "nav-bar-back-icon"
						})
					),
					apivm.h(
						"view",
						{class: "hoc-menu-list-item-choose"},
						apivm.h(
							"text",
							{class: "hoc-menu-list-item-title-choose"},
							this.data.data.choose
						)
					),
					apivm.h(
						"view",
						{class: "hoc-menu-list-item", onClick: this.modifynick},
						apivm.h(
							"text",
							{class: "hoc-menu-list-item-title"},
							this.data.data.modifyname
						),
						apivm.h("img", {
							class: "hoc-menu-list-item-gor",
							src:
								"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c89316e175437ebce8f361ef3f9c3973.png"
						})
					),
					apivm.h(
						"view",
						{class: "hoc-menu-list-item", onClick: this.modifypassw},
						apivm.h(
							"text",
							{class: "hoc-menu-list-item-title"},
							this.data.data.modifykey
						),
						apivm.h("img", {
							class: "hoc-menu-list-item-gor",
							src:
								"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c89316e175437ebce8f361ef3f9c3973.png"
						})
					),
					apivm.h(
						"view",
						{class: "hoc-menu-list-item", onClick: this.modifyports},
						apivm.h(
							"text",
							{class: "hoc-menu-list-item-title"},
							this.data.data.modifyport
						),
						apivm.h("img", {
							class: "hoc-menu-list-item-gor",
							src:
								"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c89316e175437ebce8f361ef3f9c3973.png"
						})
					),
					apivm.h("view", {class: "whit"})
				)
			);
		};

		return HocMenuListSgm;
	})(Component);
	HocMenuListSgm.css = {
		".hoc-menu-list": {
			borderRadius: "4px",
			backgroundColor: "white",
			marginBottom: "10px",
			padding: "0 10px"
		},
		".hoc-menu-list-item-choose": {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			borderBottom: "1px solid #340bec",
			height: "60px"
		},
		".hoc-menu-list-item": {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			borderBottom: "1px solid #f8f8f8",
			height: "49px"
		},
		".hoc-menu-list-item:active": {opacity: "0.7"},
		".hoc-menu-list-item-title-choose": {fontSize: "20px", color: "#333"},
		".hoc-menu-list-item-title": {fontSize: "14px", color: "#333"},
		".hoc-menu-list-item-gor": {width: "10px", height: "10px"},
		".nav-bar-back-icon": {width: "18px", height: "18px"},
		".whit": {height: "540px", backgroundColor: "white"}
	};
	apivm.define("hoc-menu-list-sgm", HocMenuListSgm);
	apivm.render(apivm.h("hoc-menu-list-sgm", null), "body");
})();
