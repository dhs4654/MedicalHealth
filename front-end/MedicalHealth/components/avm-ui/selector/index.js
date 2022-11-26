// packages/avm-ui/src/utils/with-default-props.tsx
function mergeProps(defaultProps3, props2) {
  return Object.assign({}, defaultProps3, props2);
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

// packages/avm-ui/src/components/space/space.tsx
var classPrefix = `adm-space`;
var defaultProps = {
  direction: "horizontal",
  gap: "8px",
  style: {}
};
var Space = class extends Component {
  render = (props2) => {
    props2 = mergeProps(defaultProps, props2);
    const { direction, gap, gapHorizontal, gapVertical } = props2;
    const itemStyles = {};
    const gaps = direction === "horizontal" ? gapHorizontal || gap : gapVertical || gap;
    itemStyles[direction === "horizontal" ? "marginRight" : "marginBottom"] = gaps;
    if (props2.wrap && direction === "horizontal") {
      itemStyles["paddingBottom"] = gapVertical || gap;
    }
    return <div className={classNames(classPrefix, {
      [`${classPrefix}-wrap`]: props2.wrap,
      [`${classPrefix}-${direction}-wrap`]: props2.wrap,
      [`${classPrefix}-block`]: props2.block,
      [`${classPrefix}-${direction}`]: true,
      [`${classPrefix}-align-${props2.align}`]: !!props2.align,
      [`${classPrefix}-justify-${props2.justify}`]: !!props2.justify
    })} {...props2}>{props2.children.map((child, index) => {
      return child !== null && child !== void 0 && <div className={classNames(`${classPrefix}-item`, `${classPrefix}-${direction}-item`, {
        [`${classPrefix}-${direction}-item-last`]: index === props2.children.length - 1,
        [`${classPrefix}-${direction}-wrap-item`]: props2.wrap
      })} style={itemStyles}>{child}</div>;
    })}</div>;
  };
  css = () => {
    return `
    .adm-space-item {
      flex: none;
    }
    .adm-space {
      display: inline-flex;
    }
    .adm-space-wrap {
      flex-wrap: wrap;
    }
    .adm-space-vertical {
      flex-direction: column;
    }
    .adm-space-vertical-item-last {
      margin-bottom: 0;
    }
    .adm-space-horizontal {
      flex-direction: row;
    }
    .adm-space-horizontal-item-last {
      margin-right: 0;
    }
    .adm-space-horizontal-wrap {
      flex-wrap: wrap;
    }
    .adm-space-align-center {
      align-items: center;
    }
    .adm-space-align-start {
      align-items: flex-start;
    }
    .adm-space-align-end {
      align-items: flex-end;
    }
    .adm-space-align-baseline {
      align-items: baseline;
    }
    .adm-space-justify-center {
      justify-content: center;
    }
    .adm-space-justify-start {
      justify-content: flex-start;
    }
    .adm-space-justify-end {
      justify-content: flex-end;
    }
    .adm-space-justify-between {
      justify-content: space-between;
    }
    .adm-space-justify-around {
      justify-content: space-around;
    }
    .adm-space-justify-evenly {
      justify-content: space-evenly;
    }
    .adm-space-justify-stretch {
      justify-content: stretch;
    }
    .adm-space-block {
      display: flex;
    }
    `;
  };
};

// packages/avm-ui/src/components/space/index.ts
var Space_default = Space;
avm.define("avm-space", Space);

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

// packages/avm-ui/src/utils/to-css-length.ts
function toCSSLength(val) {
  return typeof val === "number" ? `${val}px` : val;
}

// packages/avm-ui/src/components/grid/grid.tsx
var classPrefix2 = `adm-grid`;
var Grid = class extends Component {
  render = (props2) => {
    const { gap = 0, columns } = props2;
    const baseWidth = (100 / Number(columns)).toFixed(2);
    const columnGap = Array.isArray(gap) ? toCSSLength(gap[0]) : toCSSLength(gap);
    const rowGap = Array.isArray(gap) ? toCSSLength(gap[1]) : toCSSLength(gap);
    return <div className={classPrefix2}>{props2.children.map((item, index) => {
      return <GridItem {...item.attributes} baseWidth={baseWidth} columnGap={columnGap} rowGap={rowGap} className={`${classPrefix2}-item`} columns={columns} curIndex={index + 1}>{item}</GridItem>;
    })}</div>;
  };
  css = () => {
    return `
      .adm-grid {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        flex-wrap: wrap;
      }
    `;
  };
};
var GridItem = class extends Component {
  render = (props2) => {
    props2 = Object.assign({}, { span: 1 }, props2);
    const itemStyle = {
      width: props2.baseWidth ? `${Number(props2.baseWidth) * Number(props2.span)}%` : "auto"
    };
    return <div style={itemStyle} onClick={() => {
      props2.handleClick && props2.handleClick();
    }}>{props2.children}</div>;
  };
};

// packages/avm-ui/src/components/grid/index.ts
var Grid_default = attachPropertiesToComponent(Grid, {
  Item: GridItem
});
avm.define("avm-grid", Grid);
avm.define("avm-grid-item", GridItem);

// packages/avm-ui/src/components/icon/icon.config.json
var fontName = "avm-icon";
var startUnicode = 6e4;
var defaultCode = 8;

// packages/avm-ui/src/components/icon/icon.json
var props = [
  {
    name: "name",
    tip: "\u56FE\u6807\u540D\u79F0",
    type: "string",
    enum: [
      "AaOutline",
      "AddCircleOutline",
      "AddOutline",
      "AddressBookFill",
      "AddSquareOutline",
      "AlipayCircleFill",
      "AlipaySquareFill",
      "AntOutline",
      "ApiCloudlogo",
      "AppOutline",
      "AppstoreOutline",
      "ArrowDownCircleOutline",
      "ArrowsAltOutline",
      "AudioFill",
      "AudioMutedOutline",
      "AudioOutline",
      "BankcardOutline",
      "BellMuteOutline",
      "BellOutline",
      "BillOutline",
      "CalculatorOutline",
      "CalendarOutline",
      "CameraOutline",
      "ChatAddOutline",
      "ChatCheckOutline",
      "ChatWrongOutline",
      "CheckCircleFill",
      "CheckCircleOutline",
      "CheckOutline",
      "CheckShieldFill",
      "CheckShieldOutline",
      "ClockCircleFill",
      "ClockCircleOutline",
      "CloseCircleFill",
      "CloseCircleOutline",
      "CloseOutline",
      "CloseShieldOutline",
      "CollectMoneyOutline",
      "CompassOutline",
      "ContentOutline",
      "CouponOutline",
      "DeleteOutline",
      "DownCircleOutline",
      "DownFill",
      "DownlandOutline",
      "DownOutline",
      "EditFill",
      "EditSFill",
      "EditSOutline",
      "EnvironmentOutline",
      "ExclamationCircleFill",
      "ExclamationCircleOutline",
      "ExclamationOutline",
      "ExclamationShieldFill",
      "ExclamationShieldOutline",
      "ExclamationTriangleOutline",
      "EyeFill",
      "EyeInvisibleFill",
      "EyeInvisibleOutline",
      "EyeOutline",
      "FaceRecognitionOutline",
      "FileOutline",
      "FileWrongOutline",
      "FillinOutline",
      "FilterOutline",
      "FingerdownOutline",
      "FireFill",
      "FlagOutline",
      "FolderOutline",
      "ForbidFill",
      "FrownFill",
      "FrownOutline",
      "GiftOutline",
      "GlobalOutline",
      "HandPayCircleOutline",
      "HeartFill",
      "HeartOutline",
      "HistogramOutline",
      "InformationCircleFill",
      "InformationCircleOutline",
      "KeyOutline",
      "KoubeiFill",
      "KoubeiOutline",
      "LeftOutline",
      "LikeOutline",
      "LinkOutline",
      "LocationFill",
      "LocationOutline",
      "LockFill",
      "LockOutline",
      "LoopOutline",
      "MailFill",
      "MailOpenOutline",
      "MailOutline",
      "MessageFill",
      "MessageOutline",
      "MinusCircleOutline",
      "MinusOutline",
      "MoreOutline",
      "MovieOutline",
      "PayCircleOutline",
      "PhonebookFill",
      "PhonebookOutline",
      "PhoneFill",
      "PictureOutline",
      "PicturesOutline",
      "PictureWrongOutline",
      "PieOutline",
      "PlayOutline",
      "QuestionCircleFill",
      "QuestionCircleOutline",
      "ReceiptOutline",
      "ReceivePaymentOutline",
      "RedoOutline",
      "RightOutline",
      "ScanCodeOutline",
      "ScanningFaceOutline",
      "ScanningOutline",
      "SearchOutline",
      "SendOutline",
      "SetOutline",
      "ShopbagOutline",
      "ShrinkOutline",
      "SmileFill",
      "SmileOutline",
      "SoundMuteFill",
      "SoundMuteOutline",
      "SoundOutline",
      "StarFill",
      "StarOutline",
      "StopOutline",
      "SystemQRcodeOutline",
      "TagOutline",
      "TeamFill",
      "TeamOutline",
      "TextDeletionOutline",
      "TextOutline",
      "TransportQRcodeOutline",
      "TravelOutline",
      "TruckOutline",
      "Uiwinbox",
      "UndoOutline",
      "UnlockOutline",
      "UnorderedListOutline",
      "UpCircleOutline",
      "UploadOutline",
      "UpOutline",
      "UserAddOutline",
      "UserCircleOutline",
      "UserContactOutline",
      "UserOutline",
      "UserSetOutline",
      "VideoOutline",
      "Y1",
      "Y10",
      "Y11",
      "Y12",
      "Y13",
      "Y14",
      "Y15",
      "Y16",
      "Y17",
      "Y18",
      "Y19",
      "Y2",
      "Y20",
      "Y21",
      "Y22",
      "Y23",
      "Y24",
      "Y25",
      "Y26",
      "Y27",
      "Y28",
      "Y29",
      "Y3",
      "Y30",
      "Y31",
      "Y32",
      "Y33",
      "Y34",
      "Y35",
      "Y36",
      "Y37",
      "Y38",
      "Y39",
      "Y4",
      "Y40",
      "Y41",
      "Y42",
      "Y43",
      "Y44",
      "Y45",
      "Y46",
      "Y47",
      "Y48",
      "Y49",
      "Y5",
      "Y50",
      "Y51",
      "Y52",
      "Y53",
      "Y54",
      "Y55",
      "Y56",
      "Y57",
      "Y58",
      "Y59",
      "Y6",
      "Y60",
      "Y61",
      "Y62",
      "Y63",
      "Y64",
      "Y65",
      "Y66",
      "Y67",
      "Y68",
      "Y69",
      "Y7",
      "Y70",
      "Y71",
      "Y72",
      "Y73",
      "Y74",
      "Y75",
      "Y76",
      "Y77",
      "Y78",
      "Y79",
      "Y8",
      "Y80",
      "Y81",
      "Y82",
      "Y83",
      "Y84",
      "Y85",
      "Y86",
      "Y87",
      "Y88",
      "Y89",
      "Y9",
      "Y90",
      "ZCheck",
      "ZCheckBox",
      "ZCheckFilling",
      "ZCheckHalf"
    ],
    default: "ApiCloudlogo"
  },
  {
    name: "color",
    tip: "\u989C\u8272",
    type: "string",
    propType: "color",
    default: "#666"
  },
  {
    name: "size",
    tip: "\u5C3A\u5BF8",
    type: "number",
    default: 32
  }
];

// packages/avm-ui/src/components/icon/icon.tsx
var classPrefix3 = `adm-icon`;
var name = "avm-icon";
var Icon = class extends Component {
  css = () => {
    return `
    @font-face {
      font-family: "${fontName}"; 
      src: url('https://apicloud-data-standard.oss-cn-beijing.aliyuncs.com/ttf/avm-icon.ttf') format('truetype'), url('../../components/avm-ui/icon/avm-icon.ttf') format('truetype');
    }
    .${classPrefix3} {font-family: ${fontName};font-size:32px;color:#666;align-self: center;}`;
  };
  render = (props2) => {
    let name2 = props2.name || props2.type;
    if (/\d/.test(name2)) {
      name2.replace(/(\d)/);
    }
    if (props2.size) {
      props2.fontSize = typeof props2.size === "number" ? props2.size + "px" : props2.size.replace("px", "") + "px";
    }
    let { code = defaultCode } = props2;
    if (name2) {
      const [{ enum: icons }] = props;
      code = icons.indexOf(name2);
      if (code === -1) {
        code = -4644;
      }
    }
    code += startUnicode;
    return <text role={classPrefix3} char={name2} style={{ ...props2 }} class={`${classPrefix3} ${classPrefix3}-font-icon-text ${props2.class || props2.className || ""}`}>{String.fromCharCode(code) || props2.children}</text>;
  };
};
avm.define(name, Icon);

// packages/avm-ui/src/components/selector/selector.less
var selector_default = ".adm-selector-item {\n  width: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  cursor: pointer;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.adm-selector-item-disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n.adm-selector-label {\n  font-size: 16px;\n}\n.adm-selector-check-mark-wrapper {\n  align-self: flex-end;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  border-top: solid 8px transparent;\n  border-bottom: solid 8px #9AC200;\n  border-left: solid 10px transparent;\n  border-right: solid 10px #9AC200;\n}\n.adm-selector-check-mark-wrapper-img {\n  position: absolute;\n  left: 0;\n  top: -2px;\n  color: #fff;\n}\n.adm-selector-desc {\n  font-size: 12px;\n  color: #999;\n  padding-top: 3px;\n}\n";

// packages/avm-ui/src/components/selector/selector.tsx
var classPrefix4 = `adm-selector`;
var defaultProps2 = {
  multiple: false,
  defaultValue: [],
  fontColor: "#666",
  bgColor: "#fff",
  padding: "9px 20px",
  checkedColor: "#9AC200",
  checkedBgColor: "#fff",
  isShowCornerMask: true,
  borderStyle: "1px solid transparent",
  checkedBorderStyle: "1px solid #9AC200",
  borderRadius: "4px"
};
var Selector = class extends Component {
  data = {
    value: this.props.value || this.props.defaultValue
  };
  setValue = (val) => {
    this.data.value = val;
    const extend = this.props.options.filter((option) => val.includes(option.value));
    this.props.handleChange && this.props.handleChange(val, extend);
  };
  render = (props2) => {
    props2 = Object.assign({}, defaultProps2, props2);
    const { bgColor, fontColor, padding, checkedColor, checkedBgColor, isShowCornerMask, borderStyle, checkedBorderStyle, borderRadius, gap = 8, isSelectedOne } = props2;
    const activeStyles = {
      background: checkedBgColor,
      border: checkedBorderStyle,
      borderRadius,
      padding
    };
    const defaultStyle = {
      background: bgColor,
      border: borderStyle,
      borderRadius,
      padding
    };
    const items = props2.options.map((option) => {
      const active = (this.data.value || []).includes(option.value);
      const disabled = option.disabled || props2.disabled;
      const itemCls = classNames(`${classPrefix4}-item`, {
        [`${classPrefix4}-item-active`]: active && !props2.multiple,
        [`${classPrefix4}-item-multiple-active`]: active && props2.multiple,
        [`${classPrefix4}-item-disabled`]: disabled
      });
      return <div key={option.value} className={itemCls} style={active ? activeStyles : defaultStyle} onClick={() => {
        if (disabled || isSelectedOne && this.data.value.length <= 1 && active) {
          return;
        }
        if (props2.multiple) {
          const val = active ? this.data.value.filter((v) => v !== option.value) : [...this.data.value, option.value];
          this.setValue(val);
        } else {
          const val = active ? [] : [option.value];
          this.setValue(val);
        }
      }}>
        <span className={`${classPrefix4}-label`} style={{ color: active ? checkedColor : fontColor }}>{option.label}</span>
        {option.description && <span className={`${classPrefix4}-desc`}>{option.description}</span>}
        {active && isShowCornerMask && <div className={`${classPrefix4}-check-mark-wrapper`}><Icon name="CheckOutline" size={9} className={`${classPrefix4}-check-mark-wrapper-img`} /></div>}
      </div>;
    });
    return <div className={classPrefix4}>
      {!props2.columns && <Space_default wrap style="padding:8px 8px 0;">{items}</Space_default>}
      {props2.columns && <Grid_default columns={props2.columns} gap={gap}>{items}</Grid_default>}
    </div>;
  };
  css = () => selector_default;
};

// packages/avm-ui/src/components/selector/index.ts
var selector_default2 = Selector;
avm.define("avm-selector", Selector);
export {
  selector_default2 as default
};
