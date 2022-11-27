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

// packages/avm-ui/src/components/text-area/text-area.less
var text_area_default = ".adm-text-area-wrapper {\n  width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  border-radius: 4px;\n}\n.adm-text-area {\n  resize: none;\n  flex: auto;\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  padding: 0;\n  margin: 0;\n  line-height: 1.5;\n  background: transparent;\n  border: 0;\n  outline: none;\n  appearance: none;\n  min-height: 52px;\n}\n.adm-text-area-disabled {\n  pointer-events: none;\n  opacity: 0.8;\n}\n.adm-text-area-readonly {\n  pointer-events: none;\n}\n.adm-text-area-count {\n  text-align: right;\n  color: #999;\n  font-size: 12px;\n  padding-top: 8px;\n  line-height: 17px;\n}\n";

// packages/avm-ui/src/components/text-area/text-area.tsx
var classPrefix = "adm-text-area";
var defaultProps = {
  rows: 2,
  showCount: false,
  autoSize: false,
  defaultValue: "",
  fontSize: "16px",
  color: "#333",
  placeholderColor: "#bbb",
  disabledColor: "#999"
};
var TextArea = class extends Component {
  data = {
    value: this.props.value || this.props.defaultValue || ""
  };
  setValue = (val) => {
    this.data.value = val;
  };
  render = (props) => {
    this.props = Object.assign({}, defaultProps, props);
    const {
      className,
      style,
      rows,
      autoSize,
      showCount,
      disabled,
      readOnly,
      fontSize,
      color,
      placeholder = "\u8BF7\u8F93\u5165",
      autoComplete = "on",
      placeholderColor,
      disabledColor,
      maxLength
    } = this.props;
    let count;
    if (typeof showCount === "function") {
      count = showCount(this.data.value.length, maxLength);
    } else if (showCount) {
      count = <span className={`${classPrefix}-count`}>{maxLength === void 0 ? this.data.value.length : this.data.value.length + "/" + maxLength}</span>;
    }
    const textareaStyle = {
      fontSize,
      color: !disabled ? color : disabledColor,
      height: autoSize ? "auto" : `${26 * rows}px`,
      lineHeight: "26px"
    };
    const textareaCls = classNames(classPrefix, {
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-readonly`]: readOnly
    });
    return <div className={classNames(`${classPrefix}-wrapper`, className)} style={style}>
      <textarea placeholder={placeholder} autoComplete={autoComplete} disabled={!!(disabled || readOnly)} className={textareaCls} style={textareaStyle} maxlength={maxLength} value={this.data.value} placeholder-style={`color: ${placeholderColor}`} auto-height={autoSize} onInput={(e) => {
        this.setValue(e.detail.value);
      }} onFocus={(e) => {
        props.inputFocus?.(e);
      }} onBlur={(e) => {
        props.handleChange && props.handleChange(e.detail.value);
        props.inputBlur?.(e);
      }} />
      {count}
    </div>;
  };
  css = () => text_area_default;
};

// packages/avm-ui/src/components/text-area/index.ts
var text_area_default2 = TextArea;
avm.define("avm-textarea", TextArea);
avm.define("avm-text-area", TextArea);
export {
  text_area_default2 as default
};
