(function() {
	/*
	 * APICloud JavaScript Library
	 * Copyright (c) 2018 apicloud.com
	 */
	(function(window) {
		var u = {};
		var isAndroid = /android/gi.test(navigator.appVersion);
		var uzStorage = isAndroid ? os.localStorage() : window.localStorage;
		function parseArguments(url, data, fnSuc, dataType) {
			if (typeof data == "function") {
				dataType = fnSuc;
				fnSuc = data;
				data = undefined;
			}
			if (typeof fnSuc != "function") {
				dataType = fnSuc;
				fnSuc = undefined;
			}
			return {
				url: url,
				data: data,
				fnSuc: fnSuc,
				dataType: dataType
			};
		}
		function _worn(fnstr) {
			console.warn(
				"$api." + fnstr + " Function need el param, el param must be DOM Element"
			);
		}
		u.trim = function(str) {
			if (String.prototype.trim) {
				return str == null ? "" : String.prototype.trim.call(str);
			} else {
				return str.replace(/(^\s*)|(\s*$)/g, "");
			}
		};
		u.trimAll = function(str) {
			return str.replace(/\s*/g, "");
		};
		u.isElement = function(obj) {
			return !!(obj && obj.nodeType == 1);
		};
		u.isArray = function(obj) {
			if (Array.isArray) {
				return Array.isArray(obj);
			} else {
				return obj instanceof Array;
			}
		};
		u.isEmptyObject = function(obj) {
			if (JSON.stringify(obj) === "{}") {
				return true;
			}
			return false;
		};
		u.addEvt = function(el, name, fn, useCapture) {
			if (!u.isElement(el)) {
				_worn("addEvt");
				return;
			}
			useCapture = useCapture || false;
			if (el.addEventListener) {
				el.addEventListener(name, fn, useCapture);
			}
		};
		u.rmEvt = function(el, name, fn, useCapture) {
			if (!u.isElement(el)) {
				_worn("rmEvt");
				return;
			}
			useCapture = useCapture || false;
			if (el.removeEventListener) {
				el.removeEventListener(name, fn, useCapture);
			}
		};
		u.one = function(el, name, fn, useCapture) {
			if (!u.isElement(el)) {
				_worn("one");
				return;
			}
			useCapture = useCapture || false;
			var that = this;
			var cb = function cb() {
				fn && fn();
				that.rmEvt(el, name, cb, useCapture);
			};
			that.addEvt(el, name, cb, useCapture);
		};
		u.dom = function(el, selector) {
			if (arguments.length === 1 && typeof arguments[0] == "string") {
				if (document.querySelector) {
					return document.querySelector(arguments[0]);
				}
			} else if (arguments.length === 2) {
				if (el.querySelector) {
					return el.querySelector(selector);
				}
			}
		};
		u.domAll = function(el, selector) {
			if (arguments.length === 1 && typeof arguments[0] == "string") {
				if (document.querySelectorAll) {
					return document.querySelectorAll(arguments[0]);
				}
			} else if (arguments.length === 2) {
				if (el.querySelectorAll) {
					return el.querySelectorAll(selector);
				}
			}
		};
		u.byId = function(id) {
			return document.getElementById(id);
		};
		u.first = function(el, selector) {
			if (arguments.length === 1) {
				if (!u.isElement(el)) {
					_worn("first");
					return;
				}
				return el.children[0];
			}
			if (arguments.length === 2) {
				return this.dom(el, selector + ":first-child");
			}
		};
		u.last = function(el, selector) {
			if (arguments.length === 1) {
				if (!u.isElement(el)) {
					_worn("last");
					return;
				}
				var children = el.children;
				return children[children.length - 1];
			}
			if (arguments.length === 2) {
				return this.dom(el, selector + ":last-child");
			}
		};
		u.eq = function(el, index) {
			return this.dom(el, ":nth-child(" + index + ")");
		};
		u.not = function(el, selector) {
			return this.domAll(el, ":not(" + selector + ")");
		};
		u.prev = function(el) {
			if (!u.isElement(el)) {
				_worn("prev");
				return;
			}
			var node = el.previousSibling;
			if (node.nodeType && node.nodeType === 3) {
				node = node.previousSibling;
				return node;
			}
		};
		u.next = function(el) {
			if (!u.isElement(el)) {
				_worn("next");
				return;
			}
			var node = el.nextSibling;
			if (node.nodeType && node.nodeType === 3) {
				node = node.nextSibling;
				return node;
			}
		};
		u.closest = function(el, selector) {
			if (!u.isElement(el)) {
				_worn("closest");
				return;
			}
			var doms, targetDom;
			var isSame = function isSame(doms, el) {
				var i = 0,
					len = doms.length;
				for (i; i < len; i++) {
					if (doms[i].isSameNode(el)) {
						return doms[i];
					}
				}
				return false;
			};
			var traversal = function traversal(el, selector) {
				doms = u.domAll(el.parentNode, selector);
				targetDom = isSame(doms, el);
				while (!targetDom) {
					el = el.parentNode;
					if (el != null && el.nodeType == el.DOCUMENT_NODE) {
						return false;
					}
					traversal(el, selector);
				}

				return targetDom;
			};

			return traversal(el, selector);
		};
		u.contains = function(parent, el) {
			var mark = false;
			if (el === parent) {
				mark = true;
				return mark;
			} else {
				do {
					el = el.parentNode;
					if (el === parent) {
						mark = true;
						return mark;
					}
				} while (!(el === document.body || el === document.documentElement));

				return mark;
			}
		};
		u.remove = function(el) {
			if (el && el.parentNode) {
				el.parentNode.removeChild(el);
			}
		};
		u.attr = function(el, name, value) {
			if (!u.isElement(el)) {
				_worn("attr");
				return;
			}
			if (arguments.length == 2) {
				return el.getAttribute(name);
			} else if (arguments.length == 3) {
				el.setAttribute(name, value);
				return el;
			}
		};
		u.removeAttr = function(el, name) {
			if (!u.isElement(el)) {
				_worn("removeAttr");
				return;
			}
			if (arguments.length === 2) {
				el.removeAttribute(name);
			}
		};
		u.hasCls = function(el, cls) {
			if (!u.isElement(el)) {
				_worn("hasCls");
				return;
			}
			if (el.classList) {
				return el.classList.contains(cls);
			} else {
				return new RegExp("(^|\\s)" + cls + "(\\s|$)").test(el.className);
			}
		};
		u.addCls = function(el, cls) {
			if (!u.isElement(el)) {
				_worn("addCls");
				return;
			}
			if (el.classList) {
				el.classList.add(cls);
			} else {
				var preCls = el.className;
				var newCls = preCls + " " + cls;
				el.className = newCls;
			}
			return el;
		};
		u.removeCls = function(el, cls) {
			if (!u.isElement(el)) {
				_worn("removeCls");
				return;
			}
			if (el.classList) {
				el.classList.remove(cls);
			} else {
				var preCls = el.className;
				var newCls = preCls.replace(cls, "");
				el.className = newCls;
			}
			return el;
		};
		u.toggleCls = function(el, cls) {
			if (!u.isElement(el)) {
				_worn("toggleCls");
				return;
			}
			if (el.classList) {
				el.classList.toggle(cls);
			} else {
				if (u.hasCls(el, cls)) {
					u.removeCls(el, cls);
				} else {
					u.addCls(el, cls);
				}
			}
			return el;
		};
		u.val = function(el, val) {
			if (!u.isElement(el)) {
				_worn("val");
				return;
			}
			if (arguments.length === 1) {
				switch (el.tagName) {
					case "SELECT":
						var value = el.options[el.selectedIndex].value;
						return value;
					case "INPUT":
						return el.value;
					case "TEXTAREA":
						return el.value;
				}
			}
			if (arguments.length === 2) {
				switch (el.tagName) {
					case "SELECT":
						el.options[el.selectedIndex].value = val;
						return el;
					case "INPUT":
						el.value = val;
						return el;
					case "TEXTAREA":
						el.value = val;
						return el;
				}
			}
		};
		u.prepend = function(el, html) {
			if (!u.isElement(el)) {
				_worn("prepend");
				return;
			}
			el.insertAdjacentHTML("afterbegin", html);
			return el;
		};
		u.append = function(el, html) {
			if (!u.isElement(el)) {
				_worn("append");
				return;
			}
			el.insertAdjacentHTML("beforeend", html);
			return el;
		};
		u.before = function(el, html) {
			if (!u.isElement(el)) {
				_worn("before");
				return;
			}
			el.insertAdjacentHTML("beforebegin", html);
			return el;
		};
		u.after = function(el, html) {
			if (!u.isElement(el)) {
				_worn("after");
				return;
			}
			el.insertAdjacentHTML("afterend", html);
			return el;
		};
		u.html = function(el, html) {
			if (!u.isElement(el)) {
				_worn("html");
				return;
			}
			if (arguments.length === 1) {
				return el.innerHTML;
			} else if (arguments.length === 2) {
				el.innerHTML = html;
				return el;
			}
		};
		u.text = function(el, txt) {
			if (!u.isElement(el)) {
				_worn("text");
				return;
			}
			if (arguments.length === 1) {
				return el.textContent;
			} else if (arguments.length === 2) {
				el.textContent = txt;
				return el;
			}
		};
		u.offset = function(el) {
			if (!u.isElement(el)) {
				_worn("offset");
				return;
			}
			var sl = Math.max(
				document.documentElement.scrollLeft,
				document.body.scrollLeft
			);
			var st = Math.max(
				document.documentElement.scrollTop,
				document.body.scrollTop
			);

			var rect = el.getBoundingClientRect();
			return {
				l: rect.left + sl,
				t: rect.top + st,
				w: el.offsetWidth,
				h: el.offsetHeight
			};
		};
		u.css = function(el, css) {
			if (!u.isElement(el)) {
				_worn("css");
				return;
			}
			if (typeof css == "string" && css.indexOf(":") > 0) {
				el.style && (el.style.cssText += ";" + css);
			}
		};
		u.cssVal = function(el, prop) {
			if (!u.isElement(el)) {
				_worn("cssVal");
				return;
			}
			if (arguments.length === 2) {
				var computedStyle = window.getComputedStyle(el, null);
				return computedStyle.getPropertyValue(prop);
			}
		};
		u.jsonToStr = function(json) {
			if (typeof json === "object") {
				return JSON && JSON.stringify(json);
			}
		};
		u.strToJson = function(str) {
			if (typeof str === "string") {
				return JSON && JSON.parse(str);
			}
		};
		u.setStorage = function(key, value) {
			if (arguments.length === 2) {
				var v = value;
				if (typeof v == "object") {
					v = JSON.stringify(v);
					v = "obj-" + v;
				} else {
					v = "str-" + v;
				}
				if (uzStorage) {
					uzStorage.setItem(key, v);
				}
			}
		};
		u.getStorage = function(key) {
			if (uzStorage) {
				var v = uzStorage.getItem(key);
				if (!v) {
					return;
				}
				if (v.indexOf("obj-") === 0) {
					v = v.slice(4);
					return JSON.parse(v);
				} else if (v.indexOf("str-") === 0) {
					return v.slice(4);
				}
			}
		};
		u.rmStorage = function(key) {
			if (uzStorage && key) {
				uzStorage.removeItem(key);
			}
		};
		u.clearStorage = function() {
			if (uzStorage) {
				uzStorage.clear();
			}
		};
		u.fixIos7Bar = function(el) {
			if (isAndroid) {
				return 0;
			}
			return u.fixStatusBar(el);
		};
		u.fixStatusBar = function(el) {
			if (!u.isElement(el)) {
				_worn("fixStatusBar");
				return 0;
			}
			el.style.paddingTop = api.safeArea.top + "px";
			return el.offsetHeight;
		};
		u.fixTabBar = function(el) {
			if (!u.isElement(el)) {
				_worn("fixTabBar");
				return 0;
			}
			el.style.paddingBottom = api.safeArea.bottom + "px";
			return el.offsetHeight;
		};
		u.toast = function(title, text, time) {
			var opts = {};
			var show = function show(opts, time) {
				api.showProgress(opts);
				setTimeout(function() {
					api.hideProgress();
				}, time);
			};
			if (arguments.length === 1) {
				var time = time || 500;
				if (typeof title === "number") {
					time = title;
				} else {
					opts.title = title + "";
				}
				show(opts, time);
			} else if (arguments.length === 2) {
				var time = time || 500;
				var text = text;
				if (typeof text === "number") {
					var tmp = text;
					time = tmp;
					text = null;
				}
				if (title) {
					opts.title = title;
				}
				if (text) {
					opts.text = text;
				}
				show(opts, time);
			}
			if (title) {
				opts.title = title;
			}
			if (text) {
				opts.text = text;
			}
			time = time || 500;
			show(opts, time);
		};
		u.post = function() {
			var argsToJson = parseArguments.apply(null, arguments);
			var json = {};
			var fnSuc = argsToJson.fnSuc;
			argsToJson.url && (json.url = argsToJson.url);
			argsToJson.data && (json.data = argsToJson.data);
			if (argsToJson.dataType) {
				var type = argsToJson.dataType.toLowerCase();
				if (type == "text" || type == "json") {
					json.dataType = type;
				}
			} else {
				json.dataType = "json";
			}
			json.method = "post";
			api.ajax(json, function(ret, err) {
				if (ret) {
					fnSuc && fnSuc(ret);
				}
			});
		};
		u.get = function() {
			var argsToJson = parseArguments.apply(null, arguments);
			var json = {};
			var fnSuc = argsToJson.fnSuc;
			argsToJson.url && (json.url = argsToJson.url);
			//argsToJson.data && (json.data = argsToJson.data);
			if (argsToJson.dataType) {
				var type = argsToJson.dataType.toLowerCase();
				if (type == "text" || type == "json") {
					json.dataType = type;
				}
			} else {
				json.dataType = "text";
			}
			json.method = "get";
			api.ajax(json, function(ret, err) {
				if (ret) {
					fnSuc && fnSuc(ret);
				}
			});
		};

		/*end*/

		window.$api = u;
	})(window);

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
				getid: "",
				newtimer: "",
				clocktime: "",
				clockFlag: [false, false, false, false],
				morning: "",
				noon: "",
				evening: "",
				undefine: "",
				hour1: [],
				minute1: [],
				timeList: [],
				timeMltiSelectorValue: [0, 0],
				selecthour: new Date().getHours(),
				selectminute: new Date().getMinutes()
			};
		}

		if (Component) Clock.__proto__ = Component;
		Clock.prototype = Object.create(Component && Component.prototype);
		Clock.prototype.constructor = Clock;
		Clock.prototype.installed = function() {
			this.gettime(); //执行日期函数
			this.setHours();
			this.getidfromdetail();
			this.initData();
			var permission = "notification";
			var resultList = api.hasPermission({
				list: [permission]
			});

			if (resultList[0].granted == 0) {
				api.confirm(
					{
						msg: "应用需要您的授权才能通知您消息",
						buttons: ["取消", "去设置"]
					},
					function(ret) {
						if (ret.buttonIndex == 2) {
							api.requestPermission(
								{
									list: [permission]
								},
								function(res) {
									if (res.list[0].granted) {
										// 已授权，可以继续下一步操作
										api.alert({
											msg: "现已授权"
										});
									}
								}
							);
						}
					}
				);
			}
			clearInterval(this.newTimer); //清除定时器
			// 定时获取时间
			this.newTimer = setInterval(this.gettime, 1000);
		};
		Clock.prototype.beforeRouteLeave = function(to, from, next) {
			// 离开组件时停掉定时器，节省内存
			clearInterval(this.newTimer);
			next();
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
		Clock.prototype.getidfromdetail = function() {
			this.data.getid = api.pageParam.data;
		};
		Clock.prototype.setHours = function() {
			this.data.hour1 = [];
			for (var index = 0; index < 24; index++) {
				this.data.hour1.push(index > 9 ? index : "0" + index);
			}
			this.setMinutes();
		};
		Clock.prototype.setMinutes = function() {
			for (var index = 0; index < 60; index++) {
				this.data.minute1.push(index > 9 ? index : "0" + index);
			}
		};
		Clock.prototype.initData = function() {
			var this$1 = this;

			this.data.timeList = [this.data.hour1, this.data.minute1];
			var request = function(url, params, method) {
				return new Promise(function(resolve, reject) {
					api.ajax(
						{
							url: "http://124.222.44.207:5000/drugLibrary/drugs/" + this$1.data.getid,
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
					this$1.data.clocktime = res.data.clockTime;
					this$1.data.morning =
						this$1.data.clocktime.substring(4, 6) +
						"  :  " +
						this$1.data.clocktime.substring(6, 8);
					this$1.data.noon =
						this$1.data.clocktime.substring(8, 10) +
						"  :  " +
						this$1.data.clocktime.substring(10, 12);
					this$1.data.evening =
						this$1.data.clocktime.substring(12, 14) +
						"  :  " +
						this$1.data.clocktime.substring(14, 16);
					this$1.data.undefine =
						this$1.data.clocktime.substring(0, 2) +
						"  :  " +
						this$1.data.clocktime.substring(2, 4);
					for (var i = 0; i < 4; i++) {
						if (res.data.clockFlags[i] == 0) {
							this$1.data.clockFlag[i] = false;
						} else {
							this$1.data.clockFlag[i] = true;
						}
					}
				} else {
					api.alert({
						title: "首页请求数据提示",
						msg: res.reject
					});
				}
			});
		};
		Clock.prototype.formatNumber = function(n) {
			n = n.toString(); //根据年月获取天数
			return n[1] ? n : "0" + n;
		};
		Clock.prototype.timeMultiSelectorChange = function(e) {
			this.data.timeMltiSelectorValue = [e.detail.value[0], e.detail.value[1]];
			var hour = this.data.hour1[e.detail.value[0]];
			var minute = this.data.minute1[e.detail.value[1]];
			if (e.currentTarget.getAttribute("id3") == "1") {
				this.data.morning = hour + "  :  " + minute;
			} else if (e.currentTarget.getAttribute("id3") == "2") {
				this.data.noon = hour + "  :  " + minute;
			} else if (e.currentTarget.getAttribute("id3") == "3") {
				this.data.evening = hour + "  :  " + minute;
			} else {
				this.data.undefine = hour + "  :  " + minute;
			}
			var time = "";
			time +=
				this.data.undefine.substring(0, 2) + this.data.undefine.substring(7, 9);
			time +=
				this.data.morning.substring(0, 2) + this.data.morning.substring(7, 9);
			time += this.data.noon.substring(0, 2) + this.data.noon.substring(7, 9);
			time +=
				this.data.evening.substring(0, 2) + this.data.evening.substring(7, 9);
			this.data.clocktime = time;
			api.ajax(
				{
					url: "http://124.222.44.207:5000/drugLibrary/drugs/" + this.data.getid,
					method: "put",
					headers: {
						"Content-Type": "application/json;charset=utf-8"
					},

					data: {
						body: {
							clockTime: this.data.clocktime
						}
					}
				},

				function(ret, err) {
					if (ret) {
						api.alert({msg: "闹钟时间修改成功！"});
					} else {
						api.alert({msg: JSON.stringify(err)});
					}
				}
			);
		};
		Clock.prototype.noticealarm1 = function(e) {
			var hour =
				this.data.morning[0] == 0
					? this.data.morning[1] - 0
					: this.data.morning.substring(0, 2) - 0;
			var minute =
				this.data.morning[7] == 0
					? this.data.morning[8] - 0
					: this.data.morning.substring(7, 9) - 0;
			if (e.currentTarget.checked) {
				this.data.clockFlag[0] = true;
				var clockFlags = "";
				for (var i = 0; i < 4; i++) {
					if (this.data.clockFlag[i] == true) {
						clockFlags += "1";
					} else {
						clockFlags += "0";
					}
				}
				api.ajax(
					{
						url: "http://124.222.44.207:5000/drugLibrary/drugs/" + this.data.getid,
						method: "put",
						headers: {
							"Content-Type": "application/json;charset=utf-8"
						},

						data: {
							body: {
								weekFrequency: "1111111",
								clockFlags: clockFlags
							}
						}
					},

					function(ret, err) {
						if (err) {
							api.alert({msg: JSON.stringify(err)});
						}
					}
				);
				api.notification(
					{
						notify: {
							content: "闹钟"
						},

						alarm: {
							hour: hour,
							minutes: minute,
							daysOfWeek: [1, 2, 3, 4, 5, 6, 7]
						}
					},

					function(ret, err) {
						id1 = ret.id;
					}
				);
			} else {
				api.cancelNotification({
					id: id1
				});

				this.data.clockFlag[0] = false;
				var clockFlags = "";
				for (var i$1 = 0; i$1 < 4; i$1++) {
					if (this.data.clockFlag[i$1] == true) {
						clockFlags += "1";
					} else {
						clockFlags += "0";
					}
				}
				api.ajax(
					{
						url: "http://124.222.44.207:5000/drugLibrary/drugs/" + this.data.getid,
						method: "put",
						headers: {
							"Content-Type": "application/json;charset=utf-8"
						},

						data: {
							body: {
								clockFlags: clockFlags
							}
						}
					},

					function(ret, err) {
						if (err) {
							api.alert({msg: JSON.stringify(err)});
						}
					}
				);
			}
		};
		Clock.prototype.noticealarm2 = function(e) {
			var hour =
				this.data.noon[0] == 0
					? this.data.noon[1] - 0
					: this.data.noon.substring(0, 2) - 0;
			var minute =
				this.data.noon[7] == 0
					? this.data.noon[8] - 0
					: this.data.noon.substring(7, 9) - 0;
			if (e.currentTarget.checked) {
				this.data.clockFlag[1] = true;
				var clockFlags = "";
				for (var i = 0; i < 4; i++) {
					if (this.data.clockFlag[i] == true) {
						clockFlags += "1";
					} else {
						clockFlags += "0";
					}
				}
				api.ajax(
					{
						url: "http://124.222.44.207:5000/drugLibrary/drugs/" + this.data.getid,
						method: "put",
						headers: {
							"Content-Type": "application/json;charset=utf-8"
						},

						data: {
							body: {
								weekFrequency: "1111111",
								clockFlags: clockFlags
							}
						}
					},

					function(ret, err) {
						if (err) {
							api.alert({msg: JSON.stringify(err)});
						}
					}
				);
				api.notification(
					{
						notify: {
							content: "闹钟"
						},

						alarm: {
							hour: hour,
							minutes: minute,
							daysOfWeek: [1, 2, 3, 4, 5, 6, 7]
						}
					},

					function(ret, err) {
						id1 = ret.id;
					}
				);
			} else {
				api.cancelNotification({
					id: id1
				});

				this.data.clockFlag[1] = false;
				var clockFlags = "";
				for (var i$1 = 0; i$1 < 4; i$1++) {
					if (this.data.clockFlag[i$1] == true) {
						clockFlags += "1";
					} else {
						clockFlags += "0";
					}
				}
				api.ajax(
					{
						url: "http://124.222.44.207:5000/drugLibrary/drugs/" + this.data.getid,
						method: "put",
						headers: {
							"Content-Type": "application/json;charset=utf-8"
						},

						data: {
							body: {
								clockFlags: clockFlags
							}
						}
					},

					function(ret, err) {
						if (err) {
							api.alert({msg: JSON.stringify(err)});
						}
					}
				);
			}
		};
		Clock.prototype.noticealarm3 = function(e) {
			var hour =
				this.data.evening[0] == 0
					? this.data.evening[1] - 0
					: this.data.evening.substring(0, 2) - 0;
			var minute =
				this.data.evening[7] == 0
					? this.data.evening[8] - 0
					: this.data.evening.substring(7, 9) - 0;
			if (e.currentTarget.checked) {
				this.data.clockFlag[2] = true;
				var clockFlags = "";
				for (var i = 0; i < 4; i++) {
					if (this.data.clockFlag[i] == true) {
						clockFlags += "1";
					} else {
						clockFlags += "0";
					}
				}
				api.ajax(
					{
						url: "http://124.222.44.207:5000/drugLibrary/drugs/" + this.data.getid,
						method: "put",
						headers: {
							"Content-Type": "application/json;charset=utf-8"
						},

						data: {
							body: {
								weekFrequency: "1111111",
								clockFlags: clockFlags
							}
						}
					},

					function(ret, err) {
						if (err) {
							api.alert({msg: JSON.stringify(err)});
						}
					}
				);
				api.notification(
					{
						notify: {
							content: "闹钟"
						},

						alarm: {
							hour: hour,
							minutes: minute,
							daysOfWeek: [1, 2, 3, 4, 5, 6, 7]
						}
					},

					function(ret, err) {
						id1 = ret.id;
					}
				);
			} else {
				api.cancelNotification({
					id: id1
				});

				this.data.clockFlag[2] = false;
				var clockFlags = "";
				for (var i$1 = 0; i$1 < 4; i$1++) {
					if (this.data.clockFlag[i$1] == true) {
						clockFlags += "1";
					} else {
						clockFlags += "0";
					}
				}
				api.ajax(
					{
						url: "http://124.222.44.207:5000/drugLibrary/drugs/" + this.data.getid,
						method: "put",
						headers: {
							"Content-Type": "application/json;charset=utf-8"
						},

						data: {
							body: {
								clockFlags: clockFlags
							}
						}
					},

					function(ret, err) {
						if (err) {
							api.alert({msg: JSON.stringify(err)});
						}
					}
				);
			}
		};
		Clock.prototype.noticealarm4 = function(e) {
			var hour =
				this.data.undefine[0] == 0
					? this.data.undefine[1] - 0
					: this.data.undefine.substring(0, 2) - 0;
			var minute =
				this.data.undefine[7] == 0
					? this.data.undefine[8] - 0
					: this.data.undefine.substring(7, 9) - 0;
			if (e.currentTarget.checked) {
				this.data.clockFlag[3] = true;
				var clockFlags = "";
				for (var i = 0; i < 4; i++) {
					if (this.data.clockFlag[i] == true) {
						clockFlags += "1";
					} else {
						clockFlags += "0";
					}
				}
				api.ajax(
					{
						url: "http://124.222.44.207:5000/drugLibrary/drugs/" + this.data.getid,
						method: "put",
						headers: {
							"Content-Type": "application/json;charset=utf-8"
						},

						data: {
							body: {
								weekFrequency: "1111111",
								clockFlags: clockFlags
							}
						}
					},

					function(ret, err) {
						if (err) {
							api.alert({msg: JSON.stringify(err)});
						}
					}
				);
				api.notification(
					{
						notify: {
							title: "服药闹钟",
							content: "服药时间已到"
						},

						alarm: {
							hour: hour,
							minutes: minute,
							daysOfWeek: [1, 2, 3, 4, 5, 6, 7]
						}
					},

					function(ret, err) {
						id1 = ret.id;
					}
				);
			} else {
				api.cancelNotification({
					id: id1
				});

				this.data.clockFlag[3] = false;
				var clockFlags = "";
				for (var i$1 = 0; i$1 < 4; i$1++) {
					if (this.data.clockFlag[i$1] == true) {
						clockFlags += "1";
					} else {
						clockFlags += "0";
					}
				}
				api.ajax(
					{
						url: "http://124.222.44.207:5000/drugLibrary/drugs/" + this.data.getid,
						method: "put",
						headers: {
							"Content-Type": "application/json;charset=utf-8"
						},

						data: {
							body: {
								clockFlags: clockFlags
							}
						}
					},

					function(ret, err) {
						if (err) {
							api.alert({msg: JSON.stringify(err)});
						}
					}
				);
			}
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
						{class: "list"},
						apivm.h(
							"view",
							{class: "information"},
							apivm.h(
								"picker",
								{
									name: "timepicker",
									class: "picker",
									mode: "multiSelector",
									range: this.data.timeList,
									value: this.data.timeMltiSelectorValue,
									onchange: this.timeMultiSelectorChange,
									id3: 1
								},
								apivm.h("text", {class: "time1"}, this.data.morning),
								apivm.h("text", {class: "timeinformation"}, "闹钟， 重复每天")
							)
						),
						apivm.h(
							"view",
							{class: "switchbutton"},
							apivm.h("switch", {
								onchange: function(event) {
									if (this$1.noticealarm1) {
										this$1.noticealarm1(event);
									} else {
										noticealarm1(event);
									}
								},
								checked: this.data.clockFlag[0]
							})
						)
					),
					apivm.h(
						"view",
						{class: "list"},
						apivm.h(
							"view",
							{class: "information"},
							apivm.h(
								"picker",
								{
									name: "timepicker",
									class: "picker",
									mode: "multiSelector",
									range: this.data.timeList,
									value: this.data.timeMltiSelectorValue,
									onchange: this.timeMultiSelectorChange,
									id3: 2
								},
								apivm.h("text", {class: "time1"}, this.data.noon),
								apivm.h("text", {class: "timeinformation"}, "闹钟， 重复每天")
							)
						),
						apivm.h(
							"view",
							{class: "switchbutton"},
							apivm.h("switch", {
								onchange: function(event) {
									if (this$1.noticealarm2) {
										this$1.noticealarm2(event);
									} else {
										noticealarm2(event);
									}
								},
								checked: this.data.clockFlag[1]
							})
						)
					),
					apivm.h(
						"view",
						{class: "list"},
						apivm.h(
							"view",
							{class: "information"},
							apivm.h(
								"picker",
								{
									name: "timepicker",
									class: "picker",
									mode: "multiSelector",
									range: this.data.timeList,
									value: this.data.timeMltiSelectorValue,
									onchange: this.timeMultiSelectorChange,
									id3: 3
								},
								apivm.h("text", {class: "time1"}, this.data.evening),
								apivm.h("text", {class: "timeinformation"}, "闹钟， 重复每天")
							)
						),
						apivm.h(
							"view",
							{class: "switchbutton"},
							apivm.h("switch", {
								onchange: function(event) {
									if (this$1.noticealarm3) {
										this$1.noticealarm3(event);
									} else {
										noticealarm3(event);
									}
								},
								checked: this.data.clockFlag[2]
							})
						)
					),
					apivm.h(
						"view",
						{class: "list"},
						apivm.h(
							"view",
							{class: "information"},
							apivm.h(
								"picker",
								{
									name: "timepicker",
									class: "picker",
									mode: "multiSelector",
									range: this.data.timeList,
									value: this.data.timeMltiSelectorValue,
									onchange: this.timeMultiSelectorChange,
									id3: 4
								},
								apivm.h("text", {class: "time1"}, this.data.undefine),
								apivm.h("text", {class: "timeinformation"}, "闹钟， 重复每天")
							)
						),
						apivm.h(
							"view",
							{class: "switchbutton"},
							apivm.h("switch", {
								onchange: function(event) {
									if (this$1.noticealarm4) {
										this$1.noticealarm4(event);
									} else {
										noticealarm4(event);
									}
								},
								checked: this.data.clockFlag[3]
							})
						)
					)
				)
			);
		};

		return Clock;
	})(Component);
	Clock.css = {
		".view_1": {width: "100%", height: "100%"},
		".date": {marginTop: "80px", height: "30px", textAlign: "center"},
		".datenumber": {fontSize: "20px", color: "grey"},
		".time": {height: "60px", textAlign: "center", display: "flex"},
		".timenumber": {color: "black", fontSize: "50px"},
		".clock": {marginTop: "50px"},
		".list": {
			display: "flex",
			width: "100%",
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
			paddingRight: "175px"
		},
		".picker": {
			backgroundColor: "#ffffff",
			borderBottomStyle: "2px double #f0f0f0",
			borderTopStyle: "2px double #f0f0f0"
		},
		".time1": {marginLeft: "30px"},
		".timeinformation": {marginTop: "5px", marginLeft: "15px"},
		".switchbutton": {paddingTop: "15px"},
		".text": {fontSize: "11px"},
		".picker-label": {
			height: "60px",
			textAlign: "center",
			display: "flex",
			fontSize: "35px",
			borderBottomStyle: "2px double #f0f0f0",
			borderTopStyle: "2px double #f0f0f0"
		}
	};
	apivm.define("clock", Clock);
	apivm.render(apivm.h("clock", null), "body");
})();
