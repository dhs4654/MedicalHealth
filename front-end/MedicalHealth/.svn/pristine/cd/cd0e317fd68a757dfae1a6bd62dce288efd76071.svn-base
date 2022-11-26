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
var classPrefix = `adm-icon`;
var name = "avm-icon";
var Icon = class extends Component {
  css = () => {
    return `
    @font-face {
      font-family: "${fontName}"; 
      src: url('https://apicloud-data-standard.oss-cn-beijing.aliyuncs.com/ttf/avm-icon.ttf') format('truetype'), url('../../components/avm-ui/icon/avm-icon.ttf') format('truetype');
    }
    .${classPrefix} {font-family: ${fontName};font-size:32px;color:#666;align-self: center;}`;
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
    return <text role={classPrefix} char={name2} style={{ ...props2 }} class={`${classPrefix} ${classPrefix}-font-icon-text ${props2.class || props2.className || ""}`}>{String.fromCharCode(code) || props2.children}</text>;
  };
};
avm.define(name, Icon);

// packages/avm-ui/src/components/icon/index.ts
var Icon_default = Icon;

// packages/avm-ui/src/components/switch/switch.tsx
var classPrefix2 = `adm-switch`;
var formatPx = (str) => {
  return Number(str.replace("px", ""));
};
var defaultProps = {
  defaultChecked: false,
  checkedColor: "#9AC200",
  width: "44px",
  height: "26px",
  borderWidth: "2px"
};
var Switch = class extends Component {
  install = () => {
    this.props = Object.assign({}, defaultProps, this.props);
  };
  data = {
    changing: false,
    checked: this.props.checked || this.props.defaultChecked
  };
  setChanging = (state) => {
    this.data.changing = state;
  };
  setChecked = (check) => {
    this.data.checked = check;
    this.props.handleChange && this.props.handleChange(this.data.checked);
  };
  render = (props2) => {
    props2 = Object.assign({}, defaultProps, props2);
    const { checkedColor, width, height, borderWidth } = props2;
    const disabled = props2.disabled || props2.loading || false;
    const onClick = () => {
      if (disabled || props2.loading || this.data.changing) {
        return;
      }
      this.setChanging(true);
      if (props2.beforeChange) {
        try {
          const nextChecked = !this.data.checked;
          props2.beforeChange(nextChecked);
          setTimeout(() => {
            this.setChecked(nextChecked);
            this.setChanging(false);
          }, 500);
        } catch (e) {
          this.setChanging(false);
          throw e;
        }
      } else {
        this.setChecked(!this.data.checked);
        this.setChanging(false);
      }
    };
    const checkboxStyle = {
      width,
      height,
      lineHeight: height,
      background: this.data.checked ? checkedColor : "#e8e8e8"
    };
    const handleSize = `${formatPx(props2.height) - formatPx(borderWidth) * 2}px`;
    const handleStyle = {
      width: handleSize,
      height: handleSize,
      borderRadius: handleSize,
      top: borderWidth,
      left: this.data.checked ? `${formatPx(width) - formatPx(handleSize)}px` : borderWidth
    };
    const marginSize = `${formatPx(height) - formatPx(borderWidth) + 5}px`;
    const innerStyle = {
      lineHeight: height,
      margin: this.data.checked ? `0 ${marginSize} 0 10px` : `0 10px 0 ${marginSize}`
    };
    const innerCls = classNames(`${classPrefix2}-inner`, {
      [`${classPrefix2}-checked-inner`]: this.data.checked
    });
    return <div className={`${classPrefix2}-row`}><div onClick={onClick} className={classNames(classPrefix2, {
      [`${classPrefix2}-checked`]: this.data.checked,
      [`${classPrefix2}-disabled`]: disabled || this.data.changing
    })}><div className={classNames(`${classPrefix2}-checkbox`, {
      [`${classPrefix2}-checked-checkbox`]: this.data.checked
    })} style={checkboxStyle}>
      <div className={classNames(`${classPrefix2}-handle`, {
        [`${classPrefix2}-checked-handle`]: this.data.checked
      })} style={handleStyle}>{(props2.loading || this.data.changing) && <Icon_default name="Uiwinbox" className={`${classPrefix2}-icon`} color="#9AC200" />}</div>
      {formatLabel(this.data.checked ? props2.checkedText : props2.uncheckedText, innerCls, innerStyle)}
    </div></div></div>;
  };
  css = () => {
    return `
 
@keyframes loading-rotate {
    100% {
        transform: rotate(1turn);
    }
}

    .adm-switch-row{flex-flow:row;}
    .adm-switch {
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      align-self: center;
      cursor: pointer;
      opacity: 1;
    }
    .adm-switch input {
      display: none;
    }
    .adm-switch-checkbox {
      min-width: 45px;
      box-sizing: border-box;
      border-radius: 31px;
      z-index: 0;
      overflow: hidden;
    }
    .adm-switch-handle {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #fff;
      position: absolute;
      z-index: 0;
      box-shadow:
        0 0 2px 0 rgba(0, 0, 0, 0.2),
        0 2px 11.5px 0 rgba(0, 0, 0, 0.08),
        -1px 2px 2px 0 rgba(0, 0, 0, 0.1);
      transition: left 200ms;
    }
    .adm-switch-inner {
      position: relative;
      z-index: 1;
      color: #999;
      transition: margin 200ms;
      font-size:12px;
    }
    .adm-switch-checked-inner {
      color: #FFF;
    }
    .adm-switch-disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
    .adm-switch-icon {
      width: 16px;
      height: 16px;
      font-size:16px;
      line-height:16px;
      animation: loading-rotate 1s linear infinite;
    }
    `;
  };
};

// packages/avm-ui/src/components/switch/index.ts
var switch_default = Switch;
avm.define("avm-switch", Switch);
export {
  switch_default as default
};
