(function() {
	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;

		_setPrototypeOf(subClass, superClass);
	}

	function _setPrototypeOf(o, p) {
		_setPrototypeOf =
			Object.setPrototypeOf ||
			function _setPrototypeOf(o, p) {
				o.__proto__ = p;
				return o;
			};

		return _setPrototypeOf(o, p);
	}

	function _assertThisInitialized(self) {
		if (self === void 0) {
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		}

		return self;
	}

	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __decorateClass = function __decorateClass(decorators, target, key, kind) {
		var result =
			kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
		for (var i = decorators.length - 1, decorator; i >= 0; i--) {
			if ((decorator = decorators[i]))
				result =
					(kind ? decorator(target, key, result) : decorator(result)) || result;
		}
		if (kind && result) __defProp(target, key, result);
		return result;
	};

	// packages/avm-ui/src/components/button/button.less
	var button_default =
		".adm-button {\n  border: 1px solid transparent;\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  margin: 10px;\n  font-size: 15px;\n  text-align: center;\n  cursor: pointer;\n  user-select: none;\n  opacity: 1;\n  line-height: 1.4;\n  border-radius: 4px;\n  font-weight: 400;\n}\n.adm-button-con {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.adm-button-block {\n  display: block;\n  width: 100%;\n}\n.adm-button-disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.adm-button-disabled:active::before {\n  display: none;\n}\n.adm-button-mini {\n  padding: 5px 12px;\n}\n.adm-button-mini-shape-rounded {\n  padding-left: 9px;\n  padding-right: 9px;\n}\n.adm-button-small {\n  padding: 6px 11px;\n}\n.adm-button-middle {\n  padding: 7px 22px;\n}\n.adm-button-large {\n  padding: 9px 34px;\n}\n.adm-button-shape-rounded {\n  border-radius: 1000px;\n}\n.adm-button-shape-rectangular {\n  border-radius: 0;\n}\n.adm-button-btn-icon {\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.adm-button-loading {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n.adm-button-default {\n  background: #fff;\n}\n.adm-button-primary {\n  background: #9AC200;\n  border-color: #9AC200;\n}\n.adm-button-success {\n  background: #54C200;\n  border-color: #54C200;\n}\n.adm-button-warning {\n  background: #FFA600;\n  border-color: #FFA600;\n}\n.adm-button-danger {\n  background: #FA6400;\n  border-color: #FA6400;\n}\n.adm-button-fill-outline {\n  background: transparent;\n}\n.adm-button-fill-none {\n  background: transparent;\n  border-color: transparent;\n}\n.adm-button-btn-text-mini {\n  font-size: 13px;\n}\n.adm-button-btn-text-small {\n  font-size: 14px;\n}\n.adm-button-btn-text-middle {\n  font-size: 15px;\n}\n.adm-button-btn-text-large {\n  font-size: 16px;\n}\n.adm-button-btn-text-default {\n  color: #333333;\n}\n.adm-button-btn-text-default-fill {\n  color: #333333;\n}\n.adm-button-btn-text-primary {\n  color: #ffffff;\n}\n.adm-button-btn-text-primary-fill {\n  color: #9AC200;\n}\n.adm-button-btn-text-success {\n  color: #ffffff;\n}\n.adm-button-btn-text-success-fill {\n  color: #54C200;\n}\n.adm-button-btn-text-warning {\n  color: #ffffff;\n}\n.adm-button-btn-text-warning-fill {\n  color: #FFA600;\n}\n.adm-button-btn-text-danger {\n  color: #ffffff;\n}\n.adm-button-btn-text-danger-fill {\n  color: #FA6400;\n}\n";

	// packages/avm-ui/src/utils/superProps.ts
	function superProps(targetOrProps, keyOrNode, descriptor) {
		if (descriptor) {
			var preRender = descriptor.value;
			descriptor.value = function(props) {
				var node = preRender(props);
				return _super(node, props);
			};
		} else {
			return _super(keyOrNode, targetOrProps);
		}
		function _super(node, props) {
			superClass(node, props);
			superStyle(node, props);
			superEvent(node, props);
			return node;
		}
	}
	function superClass(node, props) {
		var cls = [];
		if (props.className) {
			cls.push(props.className);
		}
		if (props.class) {
			cls.push(props.class);
		}
		if (node.attributes) {
			if (node.attributes.className) {
				cls.unshift(node.attributes.className);
			}
			if (node.attributes.class) {
				cls.unshift(node.attributes.className);
			}
			node.attributes.class = cls.join(" ");
			delete node.attributes.className;
		} else {
			node.attributes = {
				class: cls.join(" ")
			};
		}
	}
	function superStyle(node, props) {
		var style = [];
		if (props.style) {
			style.push(props.style);
		}
		if (node.attributes) {
			if (node.attributes.style) {
				style.unshift(node.attributes.style);
			}
			node.attributes.style = mergeStyle.apply(void 0, style);
		} else {
			node.attributes = {
				style: mergeStyle.apply(void 0, style)
			};
		}
	}
	function superEvent(node, props) {
		for (var propsKey in props) {
			if (propsKey.indexOf("on") === 0) {
				if (node.attributes) {
					node.attributes[propsKey] = props[propsKey];
				}
			}
		}
	}
	function mergeStyle() {
		var style = [];
		for (
			var _len = arguments.length, args = new Array(_len), _key = 0;
			_key < _len;
			_key++
		) {
			args[_key] = arguments[_key];
		}
		args.forEach(function(arg) {
			if (typeof arg === "string") {
				style.push(arg.replace(/;$/gm, ""));
			} else if (Object.prototype.toString.call(arg) === "[object Object]") {
				for (var key in arg) {
					arg[key] &&
						style.push(
							key.replace(/([A-Z])/, function(str) {
								return "-" + str.toLowerCase();
							}) +
								":" +
								arg[key]
						);
				}
			}
		});
		return style.join(";") + ";";
	}

	// packages/avm-ui/src/utils/classnames.ts
	function classNames() {
		var cls = [];
		for (
			var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
			_key2 < _len2;
			_key2++
		) {
			args[_key2] = arguments[_key2];
		}
		args.forEach(function(arg) {
			if (typeof arg === "string") {
				cls.push(arg);
			} else if (Object.prototype.toString.call(arg) === "[object Object]") {
				for (var argKey in arg) {
					arg[argKey] && cls.push(argKey);
				}
			} else if (arg) {
				console.log("arg " + arg + " type not support");
			}
		});
		return cls.join(" ");
	}

	// packages/avm-ui/src/components/button/button.tsx
	var classPrefix = "adm-button";
	var defaultProps = {
		color: "default",
		fill: "solid",
		size: "middle",
		block: false,
		disabled: false,
		loading: false,
		shape: "default"
	};

	var Button = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(Button, _Component);
		function Button() {
			var _this;
			for (
				var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
				_key3 < _len3;
				_key3++
			) {
				args[_key3] = arguments[_key3];
			}
			_this = _Component.call.apply(_Component, [this].concat(args)) || this;
			_defineProperty(
				_assertThisInitialized(_this),
				"css",

				function() {
					return button_default;
				}
			);
			return _this;
		}
		var _proto = Button.prototype;
		_proto.render = function render(props) {
			var _classNames, _classNames2;
			props = Object.assign({}, defaultProps, props);
			var _props = props,
				shape = _props.shape,
				fill = _props.fill,
				block = _props.block,
				iconSrc = _props.iconSrc,
				loading = _props.loading,
				loadingSrc = _props.loadingSrc,
				loadingText = _props.loadingText,
				disabled = _props.disabled;
			var btnWrapperCls = classNames(
				classPrefix,
				props.color ? classPrefix + "-" + props.color : null,
				((_classNames = {}),
				(_classNames[classPrefix + "-block"] = block),
				(_classNames[classPrefix + "-disabled"] = disabled),
				(_classNames[classPrefix + "-fill-outline"] = fill === "outline"),
				(_classNames[classPrefix + "-fill-none"] = fill === "none"),
				(_classNames[classPrefix + "-" + props.size] = true),
				(_classNames[classPrefix + "-loading"] = loading),
				_classNames),
				classPrefix + "-shape-" + shape
			);
			var btnTextCls = classNames(
				classPrefix + "-btn-text",
				classPrefix + "-btn-text-" + props.size,
				classPrefix + "-btn-text-" + props.color,
				((_classNames2 = {}),
				(_classNames2[classPrefix + "-btn-text-" + props.color + "-fill"] =
					fill === "outline" || fill === "none"),
				_classNames2)
			);
			var iconStyle = {
				marginRight: props.children && props.children.length ? "6px" : 0
			};
			return apivm.h(
				"div",
				{className: btnWrapperCls, disabled: disabled},
				loading
					? apivm.h(
							"div",
							{className: classPrefix + "-loading"},
							loadingSrc &&
								apivm.h("img", {
									src: loadingSrc,
									alt: "loading-icon",
									className: classPrefix + "-btn-icon",
									style: {marginRight: "6px"}
								}),
							apivm.h("span", {className: btnTextCls}, loadingText || "Loading")
					  )
					: apivm.h(
							"div",
							{className: classPrefix + "-con"},
							iconSrc &&
								apivm.h("img", {
									src: iconSrc,
									alt: "btn-icon",
									className: classPrefix + "-btn-icon",
									style: iconStyle
								}),
							apivm.h("span", {className: btnTextCls}, props.children)
					  )
			);
		};
		return Button;
	})(Component);

	__decorateClass([superProps], Button.prototype, "render", 1);
	avm.define("avm-button", Button);

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

	global.vm = null;

	global.apiready = function() {
		api.setFrameAttr({
			name: "personal",
			hidden: true
		});

		var header = $api.dom("header");
		var footer = $api.dom("footer");
		var headerH = $api.fixStatusBar(header);
		var footerH = $api.fixTabBar(footer);
		api.setStatusBarStyle({
			style: "dark"
		});
	};
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

				if (a == "") {
					api.alert({msg: "您还未登录，请先登录"});
				} else {
					vm.reinitData(a);
				}
			}
		}
	);
	var Page = /*@__PURE__*/ (function(Component) {
		function Page(props) {
			Component.call(this, props);
			this.data = {
				usrid: "",
				identity: "",
				tel: "",
				bindtel: "",
				year: [],
				month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
				day: [],
				yearNow: new Date().getFullYear(),
				dateMltiSelectorValue: [10, 0, 0],
				selectYear: new Date().getFullYear(),
				selectMoth: new Date().getMonth() + 1,
				selectDay: new Date().getDate(),
				dateList: [],
				label: "日期",
				datenow: "",
				TabList: [
					{
						name: "全部"
					},
					{
						name: "我的"
					},
					{
						name: "家人"
					}
				],

				current: 0,
				totaldataList: [],
				dataList: [],
				startX: 0, //触摸位置
				endX: 0, //结束位置
				moveX: 0, //滑动时的位置
				disX: 0, //移动距离
				handleSwipe: "transform:translateX(0px)", //滑动时的效果,动态绑定
				delBtnWidth: 55, //删除按钮宽度单位（px）
				currentid: ""
			};
		}

		if (Component) Page.__proto__ = Component;
		Page.prototype = Object.create(Component && Component.prototype);
		Page.prototype.constructor = Page;
		Page.prototype.installed = function() {
			vm = this;
			this.telinit();
		};
		Page.prototype.telinit = function() {
			var a = api.getPrefs({
				sync: true,
				key: "id"
			});

			if (a == "") {
				api.alert({msg: "您还未登录，请先登录"});
			} else {
				this.data.usrid = a;
			}
		};
		Page.prototype.getYears = function() {
			this.data.year = []; //一个页面多次使用的情况 必须先清空 否则会出现各种问题
			for (i = 10; i > 0; i--) {
				this.data.year.push(this.data.yearNow + i);
			}
			for (i = 0; i < 10; i++) {
				this.data.year.push(this.data.yearNow - i);
			}
		};
		Page.prototype.initTime = function() {
			//初始化设定当前时间
			this.data.day = [];
			var daypro = [];
			var days = new Date(this.data.selectYear, this.data.selectMoth, 0).getDate();
			this.data.datenow = [
				this.data.selectYear,
				this.data.selectMoth,
				this.data.selectDay
			]
				.map(this.formatNumber)
				.join("-");
			for (i = 1; i <= days; i++) {
				daypro.push(i);
			}
			this.data.day = daypro;
			this.data.dateMltiSelectorValue = [
				0,
				this.data.selectMoth - 1,
				this.data.selectDay - 1
			];
			this.data.dateList = [this.data.year, this.data.month, this.data.day];
		};
		Page.prototype.formatNumber = function(n) {
			n = n.toString(); //根据年月获取天数
			return n[1] ? n : "0" + n;
		};
		Page.prototype.initData = function() {
			var this$1 = this;

			//异步请求
			this.data.totaldataList = [];
			this.data.current = 0;
			//根据用户id获取用户信息
			var requestusr = function(url, params, method) {
				return new Promise(function(resolve, reject) {
					api.ajax(
						{
							url: "http://124.222.44.207:5000/userLibrary/users/" + this$1.data.usrid,
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
			requestusr().then(function(res) {
				if (res.data) {
					this$1.data.identity = res.data.identity == "client" ? 2 : 1;
					this$1.data.tel = res.data.telephone;
					if (this$1.data.identity == 1 && res.data.bindTelephone != "") {
						this$1.data.bindtel = res.data.bindTelephone;
					}
				} else {
					api.alert({
						title: "首页请求用户数据提示",
						msg: res.reject
					});
				}
			});
			//获取该用户的药库
			var requestmedi1 = function(url, params, method) {
				return new Promise(function(resolve, reject) {
					api.ajax(
						{
							url:
								"http://124.222.44.207:5000/drugLibrary/getByTelephone/" +
								this$1.data.tel,
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
			requestmedi1().then(function(res) {
				if (res.data) {
					this$1.data.totaldataList = res.data;
					this$1.data.totaldataList.sort(this$1.dateorder);
					//初始化设定当前药库列表展示（默认全部）
					this$1.data.dataList = this$1.data.totaldataList;
					if (this$1.data.identity == 1 && this$1.data.bindtel == "") {
						this$1.setalert();
					}
				} else {
					api.alert({
						title: "首页请求数据提示",
						msg: res.reject
					});
				}
			});
			//根据绑定手机号获取绑定用户的药库
			if (this.data.identity == 1 && this.data.bindtel != "") {
				var requestmedi2 = function(url, params, method) {
					return new Promise(function(resolve, reject) {
						api.ajax(
							{
								url:
									"http://124.222.44.207:5000/drugLibrary/getByTelephone/" +
									this$1.data.bindtel,
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
				requestmedi2().then(function(res) {
					if (res.data) {
						this$1.data.totaldataList = this$1.data.totaldataList.concat(res.data);
						this$1.data.totaldataList.sort(this$1.dateorder);
						//初始化设定当前药库列表展示（默认全部）
						this$1.data.dataList = this$1.data.totaldataList;
						this$1.setalert();
					} else {
						api.alert({
							title: "首页请求数据提示",
							msg: res.reject
						});
					}
				});
			}
		};
		Page.prototype.reinitData = function(a) {
			this.data.usrid = a;
			this.getYears();
			this.initTime();
			this.initData();
		};
		Page.prototype.dateorder = function(a, b) {
			var obj1 = a.duedate;
			var obj2 = b.duedate;
			var val1 = Math.floor(new Date(obj1).getTime() / 1000);
			var val2 = Math.floor(new Date(obj2).getTime() / 1000);
			return val1 - val2;
		};
		Page.prototype.setalert = function() {
			var len = this.data.totaldataList.length;
			var i = 0;
			for (; i < len; i++) {
				if (this.data.totaldataList[i].duedate < this.data.datenow) {
					var contentidentity =
						this.data.totaldataList[i].owner == 1 ? "您的药物【" : "您家人的药物【";
					api.notification({
						notify: {
							title: "药物过期通知！",
							content:
								contentidentity +
								this.data.totaldataList[i].name +
								"】已过期，请及时清理！"
						}
					});
				}
			}
		};
		Page.prototype.setDays = function() {
			this.data.day = [];
			var daypro = [];
			var days = new Date(this.data.selectYear, this.data.selectMoth, 0).getDate();
			for (i = 1; i <= days; i++) {
				daypro.push(i);
			}
			this.data.day = daypro; //处理安卓数组索引超界问题
			if (this.data.dateMltiSelectorValue[2] >= this.data.day.length) {
				this.data.dateMltiSelectorValue[2] = this.data.day.length - 1;
			}
			this.data.dateList = [this.data.year, this.data.month, this.data.day];
		};
		Page.prototype.dateMultiSelectorChange = function(e) {
			if (e.detail.value.length == 2) {
				this.data.dateMltiSelectorValue = [
					e.detail.value[0],
					e.detail.value[1],
					this.data.dateMltiSelectorValue[2]
				];
			} else {
				this.data.dateMltiSelectorValue = [
					e.detail.value[0],
					e.detail.value[1],
					e.detail.value[2]
				];
			}
			var year = this.data.year[this.data.dateMltiSelectorValue[0]];
			var month =
				this.data.month[this.data.dateMltiSelectorValue[1]] > 9
					? this.data.month[this.data.dateMltiSelectorValue[1]]
					: "0" + this.data.month[this.data.dateMltiSelectorValue[1]];
			var day =
				this.data.day[this.data.dateMltiSelectorValue[2]] > 9
					? this.data.day[this.data.dateMltiSelectorValue[2]]
					: "0" + this.data.day[this.data.dateMltiSelectorValue[2]];
			this.data.datenow = year + "-" + month + "-" + day;
		};
		Page.prototype.dateMultiSelectorColumnChange = function(e) {
			var column = e.detail.column;
			if (column == this.data.dateList.length - 1) {
				return;
			}
			if (column == 0) {
				this.data.selectYear = this.data.year[e.detail.value];
				this.data.dateMltiSelectorValue[0] = e.detail.value;
				this.setDays();
			} else if (column == 1) {
				this.data.selectMoth = this.data.month[e.detail.value];
				this.data.dateMltiSelectorValue[1] = e.detail.value;
				this.setDays();
			}
		};
		Page.prototype.tabClick = function(item, index) {
			this.data.current = index;
			this.data.dataList = [];
			var arraypro1 = []; //自己
			var arraypro2 = []; //家人
			if (index == 0) {
				this.data.dataList = this.data.totaldataList;
			} else {
				for (var i = 0; i < this.data.totaldataList.length; i++) {
					//自己
					if (this.data.totaldataList[i].telephone == this.data.tel) {
						arraypro1.push(this.data.totaldataList[i]);
					}
					if (this.data.totaldataList[i].telephone == this.data.bindtel) {
						arraypro2.push(this.data.totaldataList[i]);
					}
				}
				if (index == 1) {
					this.data.dataList = arraypro1;
				} else {
					this.data.dataList = arraypro2;
				}
			}
			this.resumetouch();
		};
		Page.prototype.touchStart = function(event) {
			// 记录初始位置
			this.data.startX = event.detail.x;
			var id = event.currentTarget.getAttribute("id");
			if (this.data.currentid != "" && id != this.data.currentid) {
				this.resumetouch();
			}
			this.data.currentid = id;
		};
		Page.prototype.touchMove = function(event) {
			this.data.currentid = event.currentTarget.getAttribute("id");
			this.data.moveX = event.detail.x;
			this.data.disX = this.data.startX - this.data.moveX;
			// 如果是向右滑动或者不滑动，不改变滑块的位置
			if (this.data.disX < 0 || this.data.disX == 0) {
				this.data.handleSwipe = "transform:translateX(0px)";
				// 大于0，表示左滑了，此时滑块开始滑动
			} else if (
				this.data.disX > 0 &&
				this.data.handleSwipe !=
					"transform:translateX(-" + this.data.delBtnWidth + "px)"
			) {
				//随具体滑动距离移动
				this.data.handleSwipe = "transform:translateX(-" + this.data.disX + "px)";
				// 最大也只能等于按钮宽度
				if (this.data.disX >= this.data.delBtnWidth) {
					this.data.handleSwipe =
						"transform:translateX(-" + this.data.delBtnWidth + "px)";
				}
			}
		};
		Page.prototype.touchEnd = function(event) {
			//let index = event.currentTarget.id;  // 记录当前滑动的滑块的index
			this.data.currentid = event.currentTarget.getAttribute("id");
			this.data.endX = event.detail.x;
			this.data.disX = this.data.startX - this.data.endX;
			//最大距离只能等于按钮宽度
			if (this.data.disX > this.data.delBtnWidth) {
				this.data.handleSwipe =
					"transform:translateX(-" + this.data.delBtnWidth + "px)";
			}
		};
		Page.prototype.resumetouch = function() {
			this.data.handleSwipe = "transform:translateX(0px)";
		};
		Page.prototype.deleteItem = function(index, id) {
			var this$1 = this;

			// 复位
			this.resumetouch();
			// 删除
			var index1 = this.data.totaldataList.findIndex(function(item) {
				if (id == item.id) {
					return true;
				}
			});
			var request = function(url, params, method) {
				return new Promise(function(resolve, reject) {
					api.ajax(
						{
							url: "http://124.222.44.207:5000/drugLibrary/drugs/" + id,
							method: "delete"
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
				if (res) {
					this$1.data.totaldataList.splice(index1, 1);
					//重新展示
					this$1.data.dataList = [];
					var arraypro = [];
					if (this$1.data.current == 0) {
						this$1.data.dataList = this$1.data.totaldataList;
					} else {
						//自己/亲人
						for (var i = 0; i < this$1.data.totaldataList.length; i++) {
							if (this$1.data.totaldataList[i].owner == this$1.data.current) {
								arraypro.push(this$1.data.totaldataList[i]);
							}
						}
						this$1.data.dataList = arraypro;
					}
					this$1.resumetouch();
					api.alert({msg: "药物删除成功"});
				} else {
					api.alert({
						title: "首页请求数据提示",
						msg: res.reject
					});
				}
			});
		};
		Page.prototype.myopen = function(e) {
			var index1 = this.data.totaldataList.findIndex(function(item) {
				if (e.currentTarget.getAttribute("id2") == item.id) {
					return true;
				}
			});
			api.openWin({
				name: "informationdetail",
				url: "./detail.stml",
				reload: true,
				bounces: true,
				pageParam: {
					data: this.data.dataList[e.currentTarget.getAttribute("id2")].id
				}
			});
		};
		Page.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "view_1"},
				apivm.h("hoc-nav-bar-sgm", {title: "我的药库"}),
				this.data.tel
					? apivm.h(
							"view",
							null,
							apivm.h(
								"view",
								{style: {display: this.data.identity == 1 ? "flex" : "none"}},
								apivm.h(
									"view",
									{class: "a-tabs"},
									(Array.isArray(this.data.TabList)
										? this.data.TabList
										: Object.values(this.data.TabList)
									).map(function(item$1, index$1) {
										return apivm.h(
											"view",
											{
												class: "a-tab-item",
												onClick: function() {
													return this$1.tabClick(item$1, index$1);
												}
											},
											apivm.h(
												"text",
												{
													class:
														"a-tab-item-text  " +
														(this$1.data.current === index$1 ? "a-tab-item-text-active" : "")
												},
												item$1.name
											),
											this$1.data.current === index$1
												? apivm.h("text", {class: "a-tab-item-line"})
												: null
										);
									})
								)
							),
							apivm.h(
								"view",
								{class: "containere", style: "height:auto"},
								apivm.h(
									"picker",
									{
										name: "date-picker",
										class: "date-picker_contaner",
										mode: "multiSelector",
										range: this.data.dateList,
										value: this.data.dateMltiSelectorValue,
										onchange: this.dateMultiSelectorChange,
										oncolumnchange: this.dateMultiSelectorColumnChange
									},
									apivm.h(
										"text",
										{class: "date-picker_label"},
										this.data.label,
										":",
										this.data.datenow
									)
								)
							),
							apivm.h(
								"scroll-view",
								{class: "view_2", "scroll-y": "true", style: "height v-bind:auto"},
								(Array.isArray(this.data.dataList)
									? this.data.dataList
									: Object.values(this.data.dataList)
								).map(function(item$1, index$1) {
									return apivm.h(
										"view",
										{key: item$1.id},
										this$1.data.dataList.length != 0
											? apivm.h(
													"view",
													null,
													apivm.h(
														"div",
														{class: "list"},
														apivm.h(
															"view",
															{
																class: "list",
																ontouchstart: function(event) {
																	if (this$1.touchStart) {
																		this$1.touchStart(event);
																	} else {
																		touchStart(event);
																	}
																},
																ontouchmove: function(event) {
																	if (this$1.touchMove) {
																		this$1.touchMove(event);
																	} else {
																		touchMove(event);
																	}
																},
																ontouchend: function(event) {
																	if (this$1.touchEnd) {
																		this$1.touchEnd(event);
																	} else {
																		touchEnd(event);
																	}
																},
																id: item$1.id,
																style:
																	this$1.data.currentid == item$1.id
																		? this$1.data.handleSwipe
																		: "transform:translateX(0px)"
															},
															apivm.h("image", {
																class: "image",
																src: item$1.img,
																mode: "topleft"
															}),
															apivm.h(
																"view",
																{class: "information"},
																this$1.data.datenow <= item$1.duedate
																	? apivm.h("text", {class: "nameblack"}, item$1.name)
																	: null,
																this$1.data.datenow > item$1.duedate
																	? apivm.h("text", {class: "namered"}, item$1.name, "(已过期）")
																	: null,
																apivm.h("text", {class: "date"}, item$1.manufacturedate),
																apivm.h("text", {class: "date"}, item$1.duedate)
															),
															apivm.h(
																"view",
																{class: "detail", id2: index$1},
																apivm.h(
																	"button",
																	{
																		onclick: function(event) {
																			if (this$1.myopen) {
																				this$1.myopen(event);
																			} else {
																				myopen(event);
																			}
																		},
																		id2: index$1
																	},
																	"详细信息"
																)
															)
														),
														apivm.h(
															"div",
															{
																class: "delete",
																onClick: function() {
																	return this$1.deleteItem(index$1, item$1.id);
																},
																style:
																	this$1.data.currentid == item$1.id
																		? this$1.data.handleSwipe
																		: "transform:translateX(0px)"
															},
															apivm.h("text", {class: "deleteword"}, "删除")
														)
													)
											  )
											: null
									);
								}),
								this.data.dataList.length === 0
									? apivm.h(
											"view",
											null,
											apivm.h("text", {class: "typebox"}, "这一天您没有过期的药物哦")
									  )
									: null
							)
					  )
					: null
			);
		};

		return Page;
	})(Component);
	Page.css = {
		".view_1": {
			width: "100%",
			textAlign: "center",
			fontSize: "10px",
			height: "100%"
		},
		".a-tabs": {
			width: "100%",
			justifyContent: "space-between",
			alignItems: "center",
			height: "44px",
			display: "flex",
			flexDirection: "row",
			flexWrap: "nowrap",
			flexShrink: "0",
			background: "#fff",
			overflow: "auto"
		},
		".a-tab-item": {
			flex: "1",
			height: "100%",
			padding: "0 12px",
			justifyContent: "center",
			alignItems: "center"
		},
		".a-tab-item-text": {
			color: "#666",
			fontSize: "14px",
			fontWeight: "normal",
			whiteSpace: "nowrap",
			textOverflow: "ellipsis"
		},
		".a-tab-item-text-active": {color: "#333", fontWeight: "bold"},
		".a-tab-item-line": {
			position: "absolute",
			bottom: "0",
			background: "#f1c694",
			width: "20px",
			height: "2px"
		},
		".containere": {
			width: "100%",
			backgroundColor: "#ffffff",
			textAlign: "left",
			display: "flex",
			flexDirection: "column",
			boxSizing: "border-box",
			fontSize: "35rpx",
			color: "#f887d6",
			position: "relative"
		},
		".date-picker_contaner": {backgroundColor: "#cccccc", height: "35px"},
		".date-picker_label": {fontSize: "18px"},
		".view_2": {
			width: "100%",
			borderRadius: "10rpx",
			display: "flex",
			flexDirection: "column",
			boxSizing: "border-box",
			fontSize: "35rpx",
			padding: "10rpx 0 10rpx 0",
			position: "relative"
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
			position: "relative"
		},
		".image": {width: "60px", height: "60rpx"},
		".information": {
			textAlign: "left",
			flexDirection: "column",
			color: "darkred"
		},
		".nameblack": {
			width: "150px",
			fontSize: "17rpx",
			wordBreak: "break-all",
			color: "black",
			marginLeft: "30px"
		},
		".namered": {
			width: "150px",
			fontSize: "17rpx",
			wordBreak: "break-all",
			color: "red",
			marginLeft: "30px"
		},
		".date": {
			fontSize: "13rpx",
			wordBreak: "break-all",
			color: "grey",
			marginLeft: "30px"
		},
		".detail": {width: "100px", height: "100%", marginTop: "15px"},
		".delete": {
			background: "#ff4949",
			fontSize: "17px",
			color: "#fff",
			textAlign: "center",
			position: "absolute",
			display: "flex",
			top: "0",
			right: "-55px",
			height: "100%",
			transition: "0s",
			width: "53px"
		},
		".deleteword": {margin: "auto"}
	};
	apivm.define("page", Page);
	apivm.render(apivm.h("page", null), "body");
})();
