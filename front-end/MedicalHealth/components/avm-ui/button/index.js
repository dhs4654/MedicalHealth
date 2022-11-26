var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// packages/avm-ui/src/components/button/button.less
var button_default = ".adm-button {\n  border: 1px solid transparent;\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  margin: 10px;\n  font-size: 15px;\n  text-align: center;\n  cursor: pointer;\n  user-select: none;\n  opacity: 1;\n  line-height: 1.4;\n  border-radius: 4px;\n  font-weight: 400;\n}\n.adm-button-con {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.adm-button-block {\n  display: block;\n  width: 100%;\n}\n.adm-button-disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.adm-button-disabled:active::before {\n  display: none;\n}\n.adm-button-mini {\n  padding: 5px 12px;\n}\n.adm-button-mini-shape-rounded {\n  padding-left: 9px;\n  padding-right: 9px;\n}\n.adm-button-small {\n  padding: 6px 11px;\n}\n.adm-button-middle {\n  padding: 7px 22px;\n}\n.adm-button-large {\n  padding: 9px 34px;\n}\n.adm-button-shape-rounded {\n  border-radius: 1000px;\n}\n.adm-button-shape-rectangular {\n  border-radius: 0;\n}\n.adm-button-btn-icon {\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.adm-button-loading {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n.adm-button-default {\n  background: #fff;\n}\n.adm-button-primary {\n  background: #9AC200;\n  border-color: #9AC200;\n}\n.adm-button-success {\n  background: #54C200;\n  border-color: #54C200;\n}\n.adm-button-warning {\n  background: #FFA600;\n  border-color: #FFA600;\n}\n.adm-button-danger {\n  background: #FA6400;\n  border-color: #FA6400;\n}\n.adm-button-fill-outline {\n  background: transparent;\n}\n.adm-button-fill-none {\n  background: transparent;\n  border-color: transparent;\n}\n.adm-button-btn-text-mini {\n  font-size: 13px;\n}\n.adm-button-btn-text-small {\n  font-size: 14px;\n}\n.adm-button-btn-text-middle {\n  font-size: 15px;\n}\n.adm-button-btn-text-large {\n  font-size: 16px;\n}\n.adm-button-btn-text-default {\n  color: #333333;\n}\n.adm-button-btn-text-default-fill {\n  color: #333333;\n}\n.adm-button-btn-text-primary {\n  color: #ffffff;\n}\n.adm-button-btn-text-primary-fill {\n  color: #9AC200;\n}\n.adm-button-btn-text-success {\n  color: #ffffff;\n}\n.adm-button-btn-text-success-fill {\n  color: #54C200;\n}\n.adm-button-btn-text-warning {\n  color: #ffffff;\n}\n.adm-button-btn-text-warning-fill {\n  color: #FFA600;\n}\n.adm-button-btn-text-danger {\n  color: #ffffff;\n}\n.adm-button-btn-text-danger-fill {\n  color: #FA6400;\n}\n";

// packages/avm-ui/src/utils/superProps.ts
function superProps(targetOrProps, keyOrNode, descriptor) {
  if (descriptor) {
    let preRender = descriptor.value;
    descriptor.value = function(props) {
      const node = preRender(props);
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
  const cls = [];
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
  const style = [];
  if (props.style) {
    style.push(props.style);
  }
  if (node.attributes) {
    if (node.attributes.style) {
      style.unshift(node.attributes.style);
    }
    node.attributes.style = mergeStyle(...style);
  } else {
    node.attributes = {
      style: mergeStyle(...style)
    };
  }
}
function superEvent(node, props) {
  for (let propsKey in props) {
    if (propsKey.indexOf("on") === 0) {
      if (node.attributes) {
        node.attributes[propsKey] = props[propsKey];
      }
    }
  }
}
function mergeStyle(...args) {
  let style = [];
  args.forEach((arg) => {
    if (typeof arg === "string") {
      style.push(arg.replace(/;$/gm, ""));
    } else if (Object.prototype.toString.call(arg) === "[object Object]") {
      for (let key in arg) {
        arg[key] && style.push(key.replace(/([A-Z])/, (str) => "-" + str.toLowerCase()) + ":" + arg[key]);
      }
    }
  });
  return style.join(";") + ";";
}

// packages/avm-ui/src/utils/classnames.ts
function classNames(...args) {
  const cls = [];
  args.forEach((arg) => {
    if (typeof arg === "string") {
      cls.push(arg);
    } else if (Object.prototype.toString.call(arg) === "[object Object]") {
      for (const argKey in arg) {
        arg[argKey] && cls.push(argKey);
      }
    } else if (arg) {
      console.log(`arg ${arg} type not support`);
    }
  });
  return cls.join(" ");
}

// packages/avm-ui/src/components/button/button.tsx
var classPrefix = `adm-button`;
var defaultProps = {
  color: "default",
  fill: "solid",
  size: "middle",
  block: false,
  disabled: false,
  loading: false,
  shape: "default"
};
var Button = class extends Component {
  render(props) {
    props = Object.assign({}, defaultProps, props);
    const { shape, fill, block, iconSrc, loading, loadingSrc, loadingText, disabled } = props;
    const btnWrapperCls = classNames(classPrefix, props.color ? `${classPrefix}-${props.color}` : null, {
      [`${classPrefix}-block`]: block,
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-fill-outline`]: fill === "outline",
      [`${classPrefix}-fill-none`]: fill === "none",
      [`${classPrefix}-${props.size}`]: true,
      [`${classPrefix}-loading`]: loading
    }, `${classPrefix}-shape-${shape}`);
    const btnTextCls = classNames(`${classPrefix}-btn-text`, `${classPrefix}-btn-text-${props.size}`, `${classPrefix}-btn-text-${props.color}`, {
      [`${classPrefix}-btn-text-${props.color}-fill`]: fill === "outline" || fill === "none"
    });
    const iconStyle = {
      marginRight: props.children && props.children.length ? "6px" : 0
    };
    return <div className={btnWrapperCls} disabled={disabled}>{loading ? <div className={`${classPrefix}-loading`}>
      {loadingSrc && <img src={loadingSrc} alt="loading-icon" className={`${classPrefix}-btn-icon`} style={{ marginRight: "6px" }} />}
      <span className={btnTextCls}>{loadingText || "Loading"}</span>
    </div> : <div className={`${classPrefix}-con`}>
      {iconSrc && <img src={iconSrc} alt="btn-icon" className={`${classPrefix}-btn-icon`} style={iconStyle} />}
      <span className={btnTextCls}>{props.children}</span>
    </div>}</div>;
  }
  css = () => button_default;
};
__decorateClass([
  superProps
], Button.prototype, "render", 1);

// packages/avm-ui/src/components/button/index.ts
var button_default2 = Button;
avm.define("avm-button", Button);
export {
  button_default2 as default
};
