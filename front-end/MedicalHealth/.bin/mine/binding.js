(function() {
	var HocRegisterFooterLr = /*@__PURE__*/ (function(Component) {
		function HocRegisterFooterLr(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) HocRegisterFooterLr.__proto__ = Component;
		HocRegisterFooterLr.prototype = Object.create(
			Component && Component.prototype
		);
		HocRegisterFooterLr.prototype.constructor = HocRegisterFooterLr;
		HocRegisterFooterLr.prototype.apiready = function() {};
		HocRegisterFooterLr.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "hoc-register-footer-lr"},
				apivm.h(
					"view",
					{class: "footer"},
					apivm.h("text", {class: "text-default"}, "发起绑定即表明同意"),
					apivm.h("text", {class: "text-active"}, "用户协议"),
					apivm.h("text", {class: "text-default"}, "和"),
					apivm.h("text", {class: "text-active"}, "隐私政策")
				)
			);
		};

		return HocRegisterFooterLr;
	})(Component);
	HocRegisterFooterLr.css = {
		".footer": {
			marginTop: "35px",
			flexDirection: "row",
			justifyContent: "center",
			width: "100%"
		},
		".text-default": {fontSize: "10px", color: "#9c9c9c"},
		".text-active": {margin: "0 2px", fontSize: "10px", color: "#17b998"}
	};
	apivm.define("hoc-register-footer-lr", HocRegisterFooterLr);

	var HocVerifyFormLr = /*@__PURE__*/ (function(Component) {
		function HocVerifyFormLr(props) {
			Component.call(this, props);
			this.data = {
				data: this.props.data || {
					placeholderPhone: "请输入对方手机号",
					valuePhone: "",
					placeholderVerify: "请输入对方收到的验证码",
					valueVerify: "",
					btnText: "发出绑定请求"
				}
			};
		}

		if (Component) HocVerifyFormLr.__proto__ = Component;
		HocVerifyFormLr.prototype = Object.create(Component && Component.prototype);
		HocVerifyFormLr.prototype.constructor = HocVerifyFormLr;
		HocVerifyFormLr.prototype.apiready = function() {};
		HocVerifyFormLr.prototype.sendband = function(e) {
			var x = api.getPrefs(
				{
					sync: true,
					key: "id"
				},
				function(ret) {}
			);

			api.ajax(
				{
					url: "http://124.222.44.207:5000/userLibrary/users/" + x,
					method: "get",
					headers: {
						"Content-Type": "application/json;charset=utf-8"
					}
				},

				function(ret, err) {
					var tele = ret.data.telephone;
					var bindtel = document.getElementById("telephone").value;

					api.ajax(
						{
							url: "http://124.222.44.207:5000/userLibrary/bind",
							method: "put",
							headers: {
								"Content-Type": "application/json;charset=utf-8"
							},

							data: {
								body: {
									telephone: tele,
									bindTelephone: bindtel
								}
							}
						},

						function(ret, err) {
							api.alert({
								msg: "请求发送成功，等待回复..."
							});
						}
					);
				}
			);
		};
		HocVerifyFormLr.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "hoc-verify-form-lr"},
				apivm.h(
					"view",
					{class: "form"},
					apivm.h(
						"view",
						{class: "f-input-box input-phone"},
						apivm.h("text", null, "手机号"),
						apivm.h("input", {
							class: "f-input",
							id: "telephone",
							style: "padding-left:37px",
							type: "number",
							"keyboard-type": "number",
							maxlength: "11",
							placeholder: this.data.data.placeholderPhone,
							value: this.data.data.valuePhone
						}),
						apivm.h("view", {class: "areacode"}, apivm.h("text", null, "+86"))
					),
					apivm.h(
						"view",
						{class: "f-input-box input-verify"},
						apivm.h("text", null, "验证码"),
						apivm.h("input", {
							class: "f-input",
							type: "number",
							"keyboard-type": "number",
							value: this.data.data.valueVerify,
							placeholder: this.data.data.placeholderVerify
						}),
						apivm.h(
							"view",
							{class: "btn-getverify"},
							apivm.h("text", {class: "btn-getverify-text"}, "获取验证码")
						)
					),
					apivm.h(
						"view",
						{class: "btn-login", onClick: this.sendband},
						apivm.h("text", {class: "btn-login-text"}, this.data.data.btnText)
					)
				)
			);
		};

		return HocVerifyFormLr;
	})(Component);
	HocVerifyFormLr.css = {
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
		".btn-getverify": {position: "absolute", right: "0", bottom: "30px"},
		".btn-getverify-text": {color: "#17b998", fontSize: "14px"},
		".icon-password-img": {width: "100%"},
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
		".btn-login-text": {fontSize: "15px", color: "#fff"}
	};
	apivm.define("hoc-verify-form-lr", HocVerifyFormLr);

	var HocLoginTitleLr = /*@__PURE__*/ (function(Component) {
		function HocLoginTitleLr(props) {
			Component.call(this, props);
			this.data = {
				data: this.props.data || {
					title: "绑定账号",
					otherText: "输入想要绑定用户的手机号",
					btnText: "（老人端）"
				}
			};
		}

		if (Component) HocLoginTitleLr.__proto__ = Component;
		HocLoginTitleLr.prototype = Object.create(Component && Component.prototype);
		HocLoginTitleLr.prototype.constructor = HocLoginTitleLr;
		HocLoginTitleLr.prototype.apiready = function() {};
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
						apivm.h("text", {class: "title-oter-login"}, this.data.data.btnText)
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

	var HocRegisterLr = /*@__PURE__*/ (function(Component) {
		function HocRegisterLr(props) {
			Component.call(this, props);
			this.data = {
				titleData: {
					title: "绑定用户",
					otherText: "输入想要绑定用户的手机号",
					btnText: "（老人端）"
				}
			};
		}

		if (Component) HocRegisterLr.__proto__ = Component;
		HocRegisterLr.prototype = Object.create(Component && Component.prototype);
		HocRegisterLr.prototype.constructor = HocRegisterLr;
		HocRegisterLr.prototype.backtomain = function(e) {
			api.closeFrame();
		};
		HocRegisterLr.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},

				apivm.h("safe-area", null),
				apivm.h(
					"view",
					{class: "register"},
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
					apivm.h("hoc-login-title-lr", {data: this.data.titleData}),
					apivm.h("hoc-verify-form-lr", null),
					apivm.h("hoc-register-footer-lr", null)
				)
			);
		};

		return HocRegisterLr;
	})(Component);
	HocRegisterLr.css = {
		".page": {height: "100%"},
		".register": {
			height: "100%",
			padding: "15px 25px 30px",
			backgroundColor: "#fff"
		},
		".nav-bar-back-icon": {width: "20px", height: "20px"}
	};
	apivm.define("hoc-register-lr", HocRegisterLr);
	apivm.render(apivm.h("hoc-register-lr", null), "body");
})();
