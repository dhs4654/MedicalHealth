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

// packages/avm-ui/src/utils/format-label.tsx
var checkLabelType = (ele) => {
  return Object.prototype.toString.call(ele);
};
var formatLabel = (ele, cls, style = {}) => {
  if (checkLabelType(ele) === "[object Array]") {
    return ele.map((el) => {
      return formatLabel(el, cls, style);
    });
  }
  return checkLabelType(ele) === "[object String]" ? <span className={cls} style={style}>{ele}</span> : <div className={cls} style={style}>{ele}</div>;
};

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

// packages/avm-ui/src/components/badge/badge.less
var badge_default = ".adm-badge-row {\n  flex-flow: row;\n}\n.adm-badge-wrap {\n  position: relative;\n  margin: 10px;\n  flex: 1;\n  flex-direction: row;\n}\n.adm-badge {\n  color: #fff;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  box-sizing: border-box;\n  min-width: 16px;\n  border-radius: 100px;\n  padding: 0 4px;\n  font-size: 12px;\n  line-height: 17px;\n  height: 18px;\n  white-space: nowrap;\n}\n.adm-badge--fixed {\n  position: absolute;\n  transform: translate(50%, -50%);\n}\n.adm-badge--dot {\n  min-width: 8px;\n  width: 8px;\n  height: 8px;\n  border-radius: 8px;\n}\n";

// packages/avm-ui/src/components/badge/badge.tsx
var classPrefix = `adm-badge`;
var defaultProps = {
  color: "#E02020",
  isDot: false
};
var Badge = class extends Component {
  render(props) {
    props = Object.assign({}, defaultProps, props);
    const { content, color, children, right, top, isDot } = props;
    const hasChild = children && children.length;
    const badgeCls = classNames(classPrefix, {
      [`${classPrefix}--fixed`]: hasChild,
      [`${classPrefix}--dot`]: isDot
    });
    const styleRight = !!right && hasChild ? right : 0;
    const styleTop = !!top && hasChild ? top : 0;
    const contentEle = formatLabel(!isDot ? content : null, badgeCls, {
      backgroundColor: color,
      right: styleRight,
      top: styleTop
    });
    return <div className={`${classPrefix}-row`}><div className={`${classPrefix}-wrap`}>
      {children}
      {(content || isDot === true) && contentEle}
    </div></div>;
  }
  css = () => badge_default;
};
__decorateClass([
  superProps
], Badge.prototype, "render", 1);

// packages/avm-ui/src/components/badge/index.ts
var Badge_default = Badge;
avm.define("avm-badge", Badge);

// packages/avm-ui/src/components/tab-bar/tab-bar.tsx
var TabBarItem = class extends Component {
  render = () => {
    return null;
  };
};
var TabBar = class extends Component {
  data = {
    activeKey: this.props.activeKey || this.props.defaultActiveKey
  };
  setActiveKey = (key) => {
    this.data.activeKey = key;
    this.props.handleChange && this.props.handleChange(key);
  };
  render = (props) => {
    const items = props.children && props.children.map((item) => item.attributes) || [];
    !this.data.activeKey && (this.data.activeKey = items.length ? items[0].key : null);
    return <div className={classNames("adm-tab-bar", props.className)}>{items.map((item) => {
      const active = item.key === this.data.activeKey;
      const iconCls = classNames("adm-tab-bar-item-icon", {
        ["adm-tab-bar-item-icon-active"]: active
      });
      const titleCls = classNames("adm-tab-bar-item-title", {
        ["adm-tab-bar-item-title-active"]: active,
        ["adm-tab-bar-item-title-only"]: !item.icon && !item.badgeContent && !item.isDot
      });
      const icon = active ? item.activeIcon : item.icon;
      const renderContent = () => {
        const iconEle = icon && formatLabel(typeof icon === "function" ? icon(active) : icon, iconCls);
        const titleEle = item.title && formatLabel(item.title, titleCls);
        if (iconEle) {
          return <div className="tabbar-align-item-center">
            <Badge_default content={item.badgeContent} isDot={item.isDot} className="adm-tab-bar-icon-badge" top="2px">{iconEle}</Badge_default>
            {titleEle}
          </div>;
        }
        if (titleEle) {
          return <div className="tabbar-align-item-center"><Badge_default content={item.badgeContent} isDot={item.isDot} className="adm-tab-bar-title-badge" top="-3px" right="-3px">{titleEle}</Badge_default></div>;
        }
        return null;
      };
      return <div key={item.key} onClick={() => {
        const { key } = item;
        if (item.key === void 0 || item.key === null) {
          return;
        } else {
          this.setActiveKey(key);
        }
      }} className="adm-tab-bar-item">{renderContent()}</div>;
    })}</div>;
  };
  css = () => {
    return `
      .adm-tab-bar {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: stretch;
        min-height: 50px;
      }
      .adm-tab-bar-item {
        flex: 1;
        white-space: nowrap;
        padding: 4px 8px;
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .adm-tab-bar-item-icon {
        font-size: 20px;
        height: auto;
        line-height: 1;
        margin: 4px 0 1px;
        color: #999;
      }
      .adm-tab-bar-item-icon-active {
        color: #9AC200;
        font-weight: 500;
      }
      .adm-tab-bar-item-title {
        font-size: 10px;
        line-height: 12px;
        color: #999;
      }
      .adm-tab-bar-item-title-active {
        color: #9AC200;
      }
      .adm-tab-bar-item-title-only {
        font-size: 14px;
        line-height: 14px;
      }
      .tabbar-align-item-center {
        align-items: center;
      }
    `;
  };
};

// packages/avm-ui/src/utils/attach-properties-to-component.ts
function attachPropertiesToComponent(component, properties) {
  const ret = component;
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }
  return ret;
}

// packages/avm-ui/src/components/tab-bar/index.ts
var tab_bar_default = attachPropertiesToComponent(TabBar, {
  Item: TabBarItem
});
avm.define("avm-tabbar", TabBar);
avm.define("avm-tabbar-item", TabBarItem);
avm.define("avm-tab-bar", TabBar);
avm.define("avm-tab-bar-item", TabBarItem);
export {
  tab_bar_default as default
};
