(function() {
	var HocLoginOtherLr = /*@__PURE__*/ (function(Component) {
		function HocLoginOtherLr(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) HocLoginOtherLr.__proto__ = Component;
		HocLoginOtherLr.prototype = Object.create(Component && Component.prototype);
		HocLoginOtherLr.prototype.constructor = HocLoginOtherLr;
		HocLoginOtherLr.prototype.apiready = function() {};
		HocLoginOtherLr.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "hoc-login-other-lr"},
				apivm.h(
					"view",
					{class: "footer"},
					apivm.h("text", {class: "footer-oterlog"}, "其他登录方式"),
					apivm.h(
						"view",
						{class: "login-type"},
						apivm.h(
							"view",
							{class: "login-type-item"},
							apivm.h("image", {
								class: "item-src",
								src:
									"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/f271d4e54189ae997b9de64ef8a47157.png"
							})
						),
						apivm.h(
							"view",
							{class: "login-type-item middle"},
							apivm.h("image", {
								class: "item-src",
								src:
									"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/aa09aa1f441dba52f5400c09e5cbcd95.png"
							})
						),
						apivm.h(
							"view",
							{class: "login-type-item"},
							apivm.h("image", {
								class: "item-src",
								src:
									"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/4206b10f6c4473c3e2731d562d25b2f1.png"
							})
						)
					),
					apivm.h(
						"view",
						{class: "footer-text"},
						apivm.h("text", {class: "text-default"}, "登录注册即表明同意"),
						apivm.h("text", {class: "text-active"}, "用户协议"),
						apivm.h("text", {class: "text-default"}, "和"),
						apivm.h("text", {class: "text-active"}, "隐私政策")
					)
				)
			);
		};

		return HocLoginOtherLr;
	})(Component);
	HocLoginOtherLr.css = {
		".page": {height: "100%"},
		".footer": {
			position: "absolute",
			bottom: "30px",
			width: "100%",
			height: "130px",
			borderTop: "1px solid #cccccc",
			justifyContent: "center",
			alignItems: "center"
		},
		".footer-oterlog": {
			position: "absolute",
			top: "-8px",
			fontSize: "12px",
			color: "#9c9c9c",
			padding: "0 10px",
			backgroundColor: "#fff"
		},
		".login-type": {
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center"
		},
		".login-type-item": {width: "35px", height: "35px"},
		".item-src": {width: "100%"},
		".middle": {margin: "0 35px"},
		".text-default": {fontSize: "10px", color: "#9c9c9c"},
		".text-active": {margin: "0 2px", fontSize: "10px", color: "#17b998"},
		".footer-text": {flexDirection: "row", bottom: "0", position: "absolute"}
	};
	apivm.define("hoc-login-other-lr", HocLoginOtherLr);

	var HocLoginFormLr = /*@__PURE__*/ (function(Component) {
		function HocLoginFormLr(props) {
			Component.call(this, props);
			this.data = {
				data: this.props.data || {
					placeholderPhone: "请输入手机号",
					valuePhone: "",
					placeholderPassword: "至少6位数字+字母",
					valuePassword: ""
				}
			};
		}

		if (Component) HocLoginFormLr.__proto__ = Component;
		HocLoginFormLr.prototype = Object.create(Component && Component.prototype);
		HocLoginFormLr.prototype.constructor = HocLoginFormLr;
		HocLoginFormLr.prototype.apiready = function() {};
		HocLoginFormLr.prototype.logsuccess = function(e) {
			var phonen = document.getElementById("phonenum").value;
			var passw = document.getElementById("passwo").value;
			var nickna;
			api.ajax(
				{
					url: "http://124.222.44.207:5000/userLibrary/getByTelephone/" + phonen,
					method: "get",
					headers: {
						"Content-Type": "application/json;charset=utf-8"
					}
				},

				function(ret, err) {
					if (passw != ret.data.password) {
						api.alert({
							msg: "密码错误！"
						});
					} else {
						api.sendEvent({
							name: "loginsuccess",
							extra: {
								names: nickna,
								tel: phonen
							}
						});

						api.setPrefs({
							key: "id",
							value: ret.data.id + ""
						});

						nickna = ret.data.name;
						api.closeFrame();
						api.openFrame({
							name: "personal",
							url: "../../pages/mine/personalcenter.stml",
							fixedOn: "page4",
							reload: true,
							pageParam: {
								names: nickna,
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
				}
			);
		};
		HocLoginFormLr.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h(
					"view",
					{class: "form"},
					apivm.h(
						"view",
						{class: "f-input-box input-phone"},
						apivm.h("text", null, "手机号"),
						apivm.h("input", {
							class: "f-input",
							style: "padding-left:37px",
							id: "phonenum",
							type: "string",
							"keyboard-type": "string",
							maxlength: "11",
							placeholder: this.data.data.placeholderPhone,
							value: this.data.data.valuePhone
						}),
						apivm.h("view", {class: "areacode"}, apivm.h("text", null, "+86"))
					),

					apivm.h(
						"view",
						{class: "f-input-box"},
						apivm.h("text", null, "密码"),
						apivm.h("input", {
							class: "f-input",
							type: "password",
							id: "passwo",
							value: this.data.data.valuePassword,
							placeholder: this.data.data.placeholderPassword
						})
					),
					apivm.h(
						"view",
						{class: "btn-login", onClick: this.logsuccess},
						apivm.h("text", {class: "btn-login-text"}, "登录")
					),
					apivm.h(
						"view",
						{class: "btn-other"},
						apivm.h("text", {class: "btn-other-text"}, "短信快捷登录"),
						apivm.h("text", {class: "btn-other-text"}, "忘记密码")
					)
				)
			);
		};

		return HocLoginFormLr;
	})(Component);
	HocLoginFormLr.css = {
		".page": {height: "100%"},
		".form": {marginTop: "50px", fontSize: "14px"},
		".f-input": {
			marginBottom: "20px",
			width: "100%",
			height: "40px",
			boxSizing: "border-box",
			border: "none",
			borderBottom: "1px solid #efefef"
		},
		".areacode": {position: "absolute", bottom: "30px", left: "0"},
		".btn-login": {
			marginTop: "20px",
			width: "100%",
			height: "46px",
			borderRadius: "4px",
			background: "#17b998",
			justifyContent: "center",
			alignItems: "center",
			color: "#fff"
		},
		".btn-login-text": {fontSize: "15px", color: "#fff"},
		".btn-other": {flexDirection: "row", justifyContent: "space-between"},
		".btn-other-text": {marginTop: "20px", fontSize: "14px", color: "#17b998"}
	};
	apivm.define("hoc-login-form-lr", HocLoginFormLr);

	var HocLoginTitleLr = /*@__PURE__*/ (function(Component) {
		function HocLoginTitleLr(props) {
			Component.call(this, props);
			this.data = {
				data: this.props.data || {
					title: "登录",
					otherText: "还没有账号？",
					btnText: "点击注册"
				}
			};
		}

		if (Component) HocLoginTitleLr.__proto__ = Component;
		HocLoginTitleLr.prototype = Object.create(Component && Component.prototype);
		HocLoginTitleLr.prototype.constructor = HocLoginTitleLr;
		HocLoginTitleLr.prototype.apiready = function() {};
		HocLoginTitleLr.prototype.signup = function(e) {
			api.openFrame({
				name: "regi",
				url: "../../pages/mine/regi.stml"
			});
		};
		HocLoginTitleLr.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "hoc-login-title-lr"},
				apivm.h(
					"view",
					{class: "title"},
					apivm.h("text", {class: "title-register"}, this.data.data.title),
					apivm.h(
						"view",
						{class: "title-login"},
						apivm.h("text", {class: "title-other"}, this.data.data.otherText),
						apivm.h(
							"text",
							{class: "title-oter-login", onClick: this.signup},
							this.data.data.btnText
						)
					)
				)
			);
		};

		return HocLoginTitleLr;
	})(Component);
	HocLoginTitleLr.css = {
		".title-register": {marginBottom: "15px", color: "#000", fontSize: "30px"},
		".title-login": {flexDirection: "row", fontSize: "12px"},
		".title-other": {color: "#9c9c9c"},
		".title-oter-login": {color: "#17b998"}
	};
	apivm.define("hoc-login-title-lr", HocLoginTitleLr);

	var HocLoginLr = /*@__PURE__*/ (function(Component) {
		function HocLoginLr(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) HocLoginLr.__proto__ = Component;
		HocLoginLr.prototype = Object.create(Component && Component.prototype);
		HocLoginLr.prototype.constructor = HocLoginLr;
		HocLoginLr.prototype.backtomain = function() {
			api.closeFrame();
		};
		HocLoginLr.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},

				apivm.h("safe-area", null),
				apivm.h(
					"view",
					{class: "login"},
					apivm.h(
						"view",
						{class: "back", onClick: this.backtomain},
						apivm.h("img", {
							src:
								"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/6958c7448f8d7106d3ee273fa7430063.png",
							alt: "back",
							class: "nav-bar-back-icon"
						})
					),
					apivm.h("hoc-login-title-lr", null),
					apivm.h("hoc-login-form-lr", null),
					apivm.h("hoc-login-other-lr", null)
				)
			);
		};

		return HocLoginLr;
	})(Component);
	HocLoginLr.css = {
		".page": {height: "100%"},
		".login": {
			height: "100%",
			padding: "15px 25px 30px",
			backgroundColor: "#fff"
		},
		".nav-bar-back-icon": {width: "20px", height: "20px"}
	};
	apivm.define("hoc-login-lr", HocLoginLr);
	apivm.render(apivm.h("hoc-login-lr", null), "body");
})();
