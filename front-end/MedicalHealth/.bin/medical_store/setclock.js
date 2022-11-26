(function() {
	var Setclock = /*@__PURE__*/ (function(Component) {
		function Setclock(props) {
			Component.call(this, props);
			this.data = {
				hour: [],
				minute: [],
				second: [],
				timeList: [],
				timeMltiSelectorValue: [0, 0, 0],
				timeDesc: "",
				recievetime: this.passtime(),
				recieveid: this.passid(),
				selecthour: new Date().getHours(),
				selectminute: new Date().getMinutes(),
				selectsecond: new Date().getSeconds()
				//settime: this.gettime(),
			};
		}

		if (Component) Setclock.__proto__ = Component;
		Setclock.prototype = Object.create(Component && Component.prototype);
		Setclock.prototype.constructor = Setclock;
		Setclock.prototype.installed = function() {
			this.passtime();
			this.passid();
			this.setHours();
			this.setMinutes();
			this.initDateData();
		};
		Setclock.prototype.back = function() {
			this.fire("backClick");
			api.closeWin();
			api.openFrame({
				name: "backtostore",
				url: "./clock.stml",
				animation: {
					type: "push",
					subType: "from_right",
					duration: 300
				},

				pageParam: {
					edittime: this.data.timeDesc,
					editid: this.data.recieveid
				}
			});
		};
		Setclock.prototype.setHours = function() {
			this.data.hour = [];
			for (var index = 0; index < 24; index++) {
				this.data.hour.push(index > 9 ? index : "0" + index);
			}
		};
		Setclock.prototype.setMinutes = function() {
			for (var index = 0; index < 60; index++) {
				this.data.minute.push(index > 9 ? index : "0" + index);
				this.data.second.push(index > 9 ? index : "0" + index);
			}
		};
		Setclock.prototype.initDateData = function() {
			//初始化设定当前时间
			this.data.timeMltiSelectorValue = [
				this.data.selecthour,
				this.data.selectminute,
				this.data.selectsecond
			];
			this.data.timeList = [this.data.hour, this.data.minute, this.data.second];
			if (this.data.recievetime) {
				this.data.timeDesc = this.data.recievetime;
			} else {
				this.data.timeDesc = [
					this.data.selecthour,
					this.data.selectminute,
					this.data.selectsecond
				]
					.map(this.formatNumber)
					.join("  :  ");
			}
		};
		Setclock.prototype.formatNumber = function(n) {
			n = n.toString(); //根据年月获取天数
			return n[1] ? n : "0" + n;
		};
		Setclock.prototype.timeMultiSelectorChange = function(e) {
			this.data.timeMltiSelectorValue = [
				e.detail.value[0],
				e.detail.value[1],
				e.detail.value[2]
			];
			var hour = this.data.hour[e.detail.value[0]];
			var minute = this.data.minute[e.detail.value[1]];
			var second = this.data.second[e.detail.value[2]];
			this.data.timeDesc = hour + "  :  " + minute + "  :  " + second;
			this.fire("setDate", this.data.timeDesc);
			api.sendEvent({
				name: "edit",
				extra: {
					edittime: this.data.timeDesc,
					editid: this.data.recieveid
				}
			});
		};
		Setclock.prototype.passtime = function(e) {
			return api.pageParam.time;
		};
		Setclock.prototype.passid = function(e) {
			return api.pageParam.passid;
		};
		Setclock.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "view_1"},
				apivm.h(
					"view",
					{class: "nav-bar", style: {background: this.props.bgClolor || "#fff"}},
					apivm.h(
						"view",
						{onClick: this.back, class: "nav-bar-back", isShowBack: true},
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
					),
					apivm.h(
						"text",
						{class: "nav-bar-title", style: {color: this.props.textColor || "#000"}},
						"编辑闹钟"
					)
				),
				apivm.h(
					"picker",
					{
						name: "timepicker",
						class: "picker",
						mode: "multiSelector",
						range: this.data.timeList,
						value: this.data.timeMltiSelectorValue,
						onchange: this.timeMultiSelectorChange
					},
					apivm.h("text", {class: "picker-label"}, this.data.timeDesc)
				)
			);
		};

		return Setclock;
	})(Component);
	Setclock.css = {
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
		".nav-bar-title": {fontSize: "17px", fontWeight: "500"},
		".view_1": {
			width: "100%",
			height: "100%",
			textAlign: "center",
			fontSize: "10px"
		},
		".picker": {
			backgroundColor: "#ffffff",
			marginTop: "30px",
			borderBottomStyle: "20px double #f0f0f0",
			borderTopStyle: "2px double #f0f0f0"
		},
		".picker-label": {
			height: "60px",
			textAlign: "center",
			display: "flex",
			fontSize: "35px",
			borderBottomStyle: "20px double #f0f0f0",
			borderTopStyle: "2px double #f0f0f0"
		}
	};
	apivm.define("setclock", Setclock);
	apivm.render(apivm.h("setclock", null), "body");
})();
