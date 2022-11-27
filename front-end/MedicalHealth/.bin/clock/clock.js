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

	var Clock = /*@__PURE__*/ (function(Component) {
		function Clock(props) {
			Component.call(this, props);
			this.data = {
				date: "",
				week: "",
				time: "",
				newtimer: ""
			};
		}

		if (Component) Clock.__proto__ = Component;
		Clock.prototype = Object.create(Component && Component.prototype);
		Clock.prototype.constructor = Clock;
		Clock.prototype.installed = function() {
			this.gettime(); //执行日期函数
			clearInterval(this.newTimer); //清除定时器
			// 定时获取时间
			this.newTimer = setInterval(this.gettime, 1000);
		};
		Clock.prototype.noticemessage = function() {
			api.notification({notify: {title: "服药闹钟", content: "服药时间已到！"}});
		};
		Clock.prototype.noticezhendong = function() {
			api.notification({vibrate: [100, 500, 200, 500, 300, 500, 400, 500]});
		};
		Clock.prototype.noticealarm = function(e) {
			api.notification(
				{
					notify: {content: "闹钟"},
					alarm: {hour: 10, minutes: 41, daysOfWeek: [1, 2, 3, 5, 6, 7]}
				},
				function(ret, err) {
					var id = ret.id;
				}
			);
		};
		Clock.prototype.setalarm = function(e) {
			api.openWin({
				name: "setalarm",
				url: "../medical_store/setclock.stml",
				reload: true,
				bounces: true /*pageParam: {
	      	time: e.currentTarget.getAttribute('id2'),
	      }*/
			});
		};
		Clock.prototype.gettime = function() {
			var d = new Date();
			var year = d.getFullYear();
			var month = d.getMonth() + 1;
			var day = d.getDate();
			var hour = d.getHours();
			var minute = d.getMinutes();
			var second = d.getSeconds();
			this.data.date = [year, month, day].map(this.formatNumber).join("/");
			this.data.time = [hour, minute, second].map(this.formatNumber).join(":");
			var Week = d.getDay();
			var weeks = ["日", "一", "二", "三", "四", "五", "六"];
			this.data.week = "星期" + weeks[Week];
		};
		Clock.prototype.formatNumber = function(n) {
			n = n.toString(); //根据年月获取天数
			return n[1] ? n : "0" + n;
		};
		Clock.prototype.myopen = function(e) {
			var permission = "notification";
			var resultList = api.hasPermission({list: [permission]});
			if (resultList[0].granted) {
				// 已授权，可以继续下一步操作
				api.alert({msg: "已授权"});
			} else {
				api.confirm(
					{msg: "应用需要您的授权才能提供通知", buttons: ["取消", "去设置"]},
					function(ret) {
						if (ret.buttonIndex == 2) {
							api.requestPermission({list: [permission]}, function(res) {
								if (res.list[0].granted) {
									// 已授权，可以继续下一步操作
									api.alert({msg: "已授权"});
								}
							});
						}
					}
				);
			}
			api.notification({notify: {title: "通知标题", content: "通知内容"}});
		};
		Clock.prototype.beforeRouteLeave = function(to, from, next) {
			// 离开组件时停掉定时器，节省内存
			clearInterval(this.newTimer);
			next();
		};
		Clock.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "view_1"},
				apivm.h("hoc-nav-bar-sgm", {title: "设置服药闹钟", isShowBack: true}, "="),
				apivm.h(
					"view",
					{class: "date"},
					apivm.h("text", {class: "datenumber"}, this.data.date, " ", this.data.week)
				),
				apivm.h(
					"view",
					{class: "time"},
					apivm.h("text", {class: "timenumber"}, this.data.time)
				),
				apivm.h(
					"view",
					{class: "clock"},
					apivm.h(
						"view",
						{
							class: "list",
							onClick: function() {
								return this$1.setalarm();
							}
						},
						apivm.h(
							"view",
							{class: "information"},
							apivm.h("text", {class: "time1"}, "早上 8：00"),
							apivm.h("text", {class: "timeinformation"}, "闹钟， 不重复")
						),
						apivm.h(
							"view",
							{class: "switchbutton"},
							apivm.h("switch", {
								onchange: function(event) {
									if (this$1.noticealarm) {
										this$1.noticealarm();
									} else {
										noticealarm();
									}
								}
							})
						)
					),
					apivm.h(
						"view",
						{
							class: "list",
							onClick: function() {
								return this$1.setalarm();
							}
						},
						apivm.h(
							"view",
							{class: "information"},
							apivm.h("text", {class: "time1"}, "中午 12：00"),
							apivm.h("text", {class: "timeinformation"}, "闹钟， 不重复")
						),
						apivm.h(
							"view",
							{class: "switchbutton"},
							apivm.h("switch", {
								onchange: function(event) {
									if (this$1.noticealarm) {
										this$1.noticealarm();
									} else {
										noticealarm();
									}
								}
							})
						)
					),
					apivm.h(
						"view",
						{
							class: "list",
							onClick: function() {
								return this$1.setalarm();
							}
						},
						apivm.h(
							"view",
							{class: "information"},
							apivm.h("text", {class: "time1"}, "傍晚 6：00"),
							apivm.h("text", {class: "timeinformation"}, "闹钟， 不重复")
						),
						apivm.h(
							"view",
							{class: "switchbutton"},
							apivm.h("switch", {
								onchange: function(event) {
									if (this$1.noticealarm) {
										this$1.noticealarm();
									} else {
										noticealarm();
									}
								}
							})
						)
					),
					apivm.h(
						"view",
						{
							class: "list",
							onClick: function() {
								return this$1.setalarm();
							}
						},
						apivm.h("text", {class: "information"}, "自定义闹钟"),
						apivm.h(
							"view",
							{class: "switchbutton"},
							apivm.h("switch", {
								onchange: function(event) {
									if (this$1.noticealarm) {
										this$1.noticealarm();
									} else {
										noticealarm();
									}
								}
							})
						)
					)
				)
			);
		};

		return Clock;
	})(Component);
	Clock.css = {
		".view_1": {
			width: "100%",
			height: "100%",
			textAlign: "center",
			fontSize: "10px"
		},
		".list": {
			display: "flex",
			width: "100%",
			transition: "0.6s",
			flexDirection: "row",
			borderRadius: "5rpx",
			borderStyle: "double",
			borderColor: "#f0f0f0",
			borderWidth: "1px",
			position: "relative",
			marginTop: "5px"
		},
		".information": {
			display: "flex",
			flexDirection: "column",
			paddingRight: "200px"
		},
		".time1": {height: "30px"},
		".timeinformation": {height: "30px"},
		".switchbutton": {paddingTop: "15px"},
		".clock": {marginTop: "50px"},
		".date": {marginTop: "80px", height: "30px", textAlign: "center"},
		".datenumber": {fontSize: "20px", color: "grey"},
		".time": {height: "60px", textAlign: "center", display: "flex"},
		".timenumber": {color: "black", fontSize: "50px"},
		".text": {fontSize: "11px"}
	};
	apivm.define("clock", Clock);
	apivm.render(apivm.h("clock", null), "body");
})();
