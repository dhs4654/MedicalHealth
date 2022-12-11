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
			}
		}
	);
	var Scan = /*@__PURE__*/ (function(Component) {
		function Scan(props) {
			Component.call(this, props);
			this.data = {
				name: "桂林西瓜霜",
				dateOfManufacture: "2001-1-1",
				qualityGuaranteePeriod: "2100-1-1"
				// usrId : '',
				// usrTel: '',
				// isBind: '',
				// bindTel: '',
			};
		}

		if (Component) Scan.__proto__ = Component;
		Scan.prototype = Object.create(Component && Component.prototype);
		Scan.prototype.constructor = Scan;
		Scan.prototype.apiready = function() {
			// this.data();
			this.clear();
			this.openBar();
			// this.getInfo();
		};
		Scan.prototype.onInput1 = function(e) {
			this.data.name = e.detail.value;
		};
		Scan.prototype.onInput2 = function(e) {
			this.data.dateOfManufacture = e.detail.value;
		};
		Scan.prototype.onInput3 = function(e) {
			this.data.qualityGuaranteePeriod = e.detail.value;
		};
		Scan.prototype.clear = function(e) {
			this.data.name = "";
			this.data.dateOfManufacture = "";
			this.data.qualityGuaranteePeriod = "";
		};
		Scan.prototype.addToUsr = function() {
			var that = this;
			if (
				this.data.name == "" ||
				this.data.dateOfManufacture == "" ||
				this.data.qualityGuaranteePeriod == ""
			) {
				api.alert({msg: "请输入药品信息！"});
			} else {
				api.confirm(
					{
						title: "是否加入个人药库",
						buttons: ["确定", "取消"]
					},
					function(ret2, arr2) {
						if (ret2.buttonIndex == 1) {
							that.addToDatabase(1);
							// api.alert({msg:'成功加入个人药库'});
							// api.alert({msg:that.data.drugsList});
						}
					}
				);
			}
		};
		Scan.prototype.addToRelatives = function() {
			var that = this;
			if (
				this.data.name == "" ||
				this.data.dateOfManufacture == "" ||
				this.data.qualityGuaranteePeriod == ""
			) {
				api.alert({msg: "请输入药品信息！"});
			} else {
				api.confirm(
					{
						title: "是否加入亲属药库",
						buttons: ["确定", "取消"]
					},
					function(ret2, arr2) {
						if (ret2.buttonIndex == 1) {
							that.addToDatabase(2);
							// api.alert({msg:'成功加入个人药库'});
							// api.alert({msg:that.data.drugsList});
						}
					}
				);
			}
		};
		Scan.prototype.getInfo = function(ret) {
			this.data.usrTel = ret.data.telephone;
			this.data.isBind = ret.data.ack;
			this.data.binTel = ret.data.bindTelephone;
		};
		Scan.prototype.addToDatabase = function(type) {
			var that = this;

			var usrId = api.getPrefs({
				sync: true,
				key: "id"
			});

			// api.alert({ msg: usrId});
			if (usrId == "" || usrId == 0 || usrId == undefined) {
				api.alert({msg: "您还未登录，请先登录"});
			} else {
				api.ajax(
					{
						url: "http://124.222.44.207:5000/userLibrary/users/" + usrId,
						method: "get",
						headers: {
							"Content-Type": "application/json;charset=utf-8"
						}

						// async: true,/
					},
					function(ret, err) {
						// api.alert({msg: err});
						// that.data.usrTel = ret.data.telephone;
						// that.data.isBind = ret.data.ack;
						// that.data.binTel = ret.data.bindTelephone;
						var usrTel = ret.data.telephone;
						var isBind = ret.data.ack;
						var bindTel = ret.data.bindTelephone;

						if (type == 2 && isBind == false) {
							api.alert({msg: "未绑定亲属！"});
						} else {
							api.ajax(
								{
									url: "http://124.222.44.207:5000/drugLibrary/drugs",
									method: "post",
									headers: {
										"Content-Type": "application/json;charset=utf-8"
									},

									dataType: "json",
									data: {
										body: {
											name: that.data.name,
											desc: "0",
											manufacturedate: that.data.dateOfManufacture,
											duedate: that.data.qualityGuaranteePeriod,
											owner: type,
											img: "0",
											clockFlags: "0000",
											clockTime: "0000000000000000",
											weekFrequency: "0000000",
											telephone: type == 1 ? usrTel : bindTel
										}
									}
								},

								function(ret, err) {
									if (ret["code"] == 200) {
										if (type == 1) {
											api.alert({msg: "成功加入个人药库"});
										}
										if (type == 2) {
											api.alert({msg: "成功加入亲属药库"});
										}
										that.clear();
									}
									// if (ret) {
									//     api.alert(ret);
									// } else {
									//     api.alert(err);
									// }
								}
							);
						}
						// var bindtel = document.getElementById("telephone").value;
						// api.alert({msg: ret});
						// api.alert({msg: that.data.usrTel});
						// api.alert({msg: that.data.isBind});
						// api.alert({msg: that.data.binTel});
						// that.getInfo(ret);
					}
				);
				// api.alert({msg: that.data.usrTel});
				// api.alert({msg: that.data.bindTel});
				// api.alert({msg: that.data.isBind});
				// api.ajax({
				//     url:'http://124.222.44.207:5000/drugLibrary/drugs',
				//     method: 'post',
				//     headers: {
				// 		"Content-Type": "application/json;charset=utf-8",
				// 	},
				//     dataType: 'json',
				//     data: {
				//         body: {
				//         'name': that.data.name,
				//         'desc': '0',
				//         'manufacturedate': that.data.dateOfManufacture,
				//         'duedate': that.data.qualityGuaranteePeriod,
				//         'owner': type,
				//         'img': '0',
				//         'clockFlags': '0000',
				//         'clockTime': '0000000000000000',
				//         'weekFrequency': '0000000',
				//         'telephone': '0',
				//         }
				//     },

				// }, function(ret, err){
				//         if (ret['code'] == 200) {
				//             if (type == 1) api.alert({msg:'成功加入个人药库'});
				//             if (type == 2) api.alert({msg:'成功加入亲属药库'});
				//             that.clear();
				//         }
				//         // if (ret) {
				//         //     api.alert(ret);
				//         // } else {
				//         //     api.alert(err);
				//         // }
				// });
			}
		};
		Scan.prototype.closeBar = function(e) {
			api.setTabLayoutAttr({
				hideTabBar: true
			});
		};
		Scan.prototype.openBar = function(e) {
			api.setTabLayoutAttr({
				hideTabBar: false
			});
		};
		Scan.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"scroll-view",
				{class: "page"},
				apivm.h(
					"view",
					null,
					apivm.h("image", {class: "avatar", src: "add.jpg", mode: "aspectFill"})
				),

				apivm.h(
					"view",
					{class: "list_item list_two"},
					apivm.h("text", null, "药品名称"),
					apivm.h("input", {
						class: "search_int",
						placeholder: "请输入药品名称，如“999感冒灵” ",
						oninput: function(event) {
							if (this$1.onInput1) {
								this$1.onInput1(event);
							} else {
								onInput1(event);
							}
						},
						value: this.data.name,
						onfocus: function(event) {
							if (this$1.closeBar) {
								this$1.closeBar(event);
							} else {
								closeBar(event);
							}
						},
						onblur: function(event) {
							if (this$1.openBar) {
								this$1.openBar(event);
							} else {
								openBar(event);
							}
						}
					})
				),

				apivm.h(
					"view",
					{class: "list_item list_two"},
					apivm.h("text", null, "生产日期"),
					apivm.h("input", {
						class: "search_int",
						placeholder: "请输入生产日期，如“2000-1-1” ",
						oninput: function(event) {
							if (this$1.onInput2) {
								this$1.onInput2(event);
							} else {
								onInput2(event);
							}
						},
						value: this.data.dateOfManufacture,
						onfocus: function(event) {
							if (this$1.closeBar) {
								this$1.closeBar(event);
							} else {
								closeBar(event);
							}
						},
						onblur: function(event) {
							if (this$1.openBar) {
								this$1.openBar(event);
							} else {
								openBar(event);
							}
						}
					})
				),

				apivm.h(
					"view",
					{class: "list_item list_two"},
					apivm.h("text", null, "截止日期 "),
					apivm.h("input", {
						class: "search_int",
						placeholder: "请输入截止日期，如“2000-1-1” ",
						oninput: function(event) {
							if (this$1.onInput3) {
								this$1.onInput3(event);
							} else {
								onInput3(event);
							}
						},
						value: this.data.qualityGuaranteePeriod,
						onfocus: function(event) {
							if (this$1.closeBar) {
								this$1.closeBar(event);
							} else {
								closeBar(event);
							}
						},
						onblur: function(event) {
							if (this$1.openBar) {
								this$1.openBar(event);
							} else {
								openBar(event);
							}
						}
					})
				),

				apivm.h("view", {class: "blank"}),

				apivm.h("text", {class: "btn", onClick: this.addToUsr}, "加入个人药库"),
				apivm.h(
					"text",
					{class: "btn", onClick: this.addToRelatives},
					"加入亲属药库"
				)
			);
		};

		return Scan;
	})(Component);
	Scan.css = {
		".page": {height: "100%", padding: "0 15px", backgroundColor: "whitesmoke"},
		".list_item": {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			borderBottom: "1px solid #f8f8f8"
		},
		".list_one": {height: "90px"},
		".list_zi": {
			fontSize: "16px",
			color: "#333333",
			width: "18px",
			height: "18px",
			marginLeft: "13px",
			marginRight: "6px"
		},
		".avatar": {
			width: "200px",
			height: "200px",
			marginLeft: "60px",
			marginRight: "50px",
			marginTop: "50px",
			marginBottom: "50px",
			borderRadius: "50%"
		},
		".list_szi": {fontSize: "16px", color: "#777777"},
		".list_two": {height: "44px", marginBottom: "6px", marginTop: "0px"},
		".btn": {
			height: "45px",
			borderRadius: "4px",
			fontWeight: "bold",
			marginTop: "20px",
			marginLeft: "15px",
			marginRight: "15px",
			marginBottom: "10px",
			textAlign: "center",
			lineHeight: "45px",
			fontSize: "16px",
			backgroundColor: "#339DFF",
			color: "white"
		},
		".btn:active": {opacity: "0.7"},
		".search_int": {
			flex: "1",
			fontSize: "16px",
			color: "#333",
			backgroundColor: "transparent",
			border: "none",
			marginLeft: "10px"
		},
		".blank": {marginTop: "50px"}
	};
	apivm.define("scan", Scan);
	apivm.render(apivm.h("scan", null), "body");
})();
