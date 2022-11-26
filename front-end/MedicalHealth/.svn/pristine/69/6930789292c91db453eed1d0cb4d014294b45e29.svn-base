// packages/avm-ui/src/utils/with-default-props.tsx
function mergeProps(defaultProps4, props2) {
  return Object.assign({}, defaultProps4, props2);
}

// packages/avm-ui/src/components/dropdown/item.tsx
var DropdownItem = class extends Component {
  render = (props2) => {
    return <div>{props2.children}</div>;
  };
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

// packages/avm-ui/src/utils/use-should-render.tsx
function useShouldRender(active, forceRender, destroyOnClose) {
  const initialized = active;
  if (forceRender)
    return true;
  if (active)
    return true;
  if (!initialized)
    return false;
  return !destroyOnClose;
}

// packages/avm-ui/src/components/mask/mask.tsx
var classPrefix = `adm-mask`;
var opacityRecord = {
  default: 0.55,
  thin: 0.35,
  thick: 0.75
};
var defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  color: "black",
  opacity: "default",
  disableBodyScroll: true,
  getContainer: null,
  stopPropagation: ["click"]
};
var Mask = class extends Component {
  render = (p) => {
    const props2 = mergeProps(defaultProps, p);
    const opacity = opacityRecord[props2.opacity] ?? props2.opacity;
    const rgb = props2.color === "white" ? "255, 255, 255" : "0, 0, 0";
    const background = `rgba(${rgb}, ${opacity})`;
    const shouldRender = useShouldRender(props2.visible, props2.forceRender, props2.destroyOnClose);
    return <div className={classPrefix} style={{
      ...props2.style,
      background,
      display: props2.visible ? "flex" : "none"
    }}>
      {props2.onMaskClick && <div className={`${classPrefix}-aria-button`} role="button" aria-label="Mask" onClick={props2.onMaskClick} />}
      <div className={`${classPrefix}-content`} onClick={props2.onMaskClick}>{shouldRender && props2.children}</div>
    </div>;
  };
  css = () => {
    return `:root {
      --adm-color-primary: #9AC200;
      --adm-color-success: #7FA000;
      --adm-color-warning: #FFA600;
      --adm-color-danger: #FA6400;
      --adm-color-white: #ffffff;
      --adm-color-weak: #999999;
      --adm-color-light: #cccccc;
      --adm-border-color: #eeeeee;
      --adm-font-size-main: 13px;
      --adm-color-text: #333333;
      --adm-font-family:
        -apple-system,
        blinkmacsystemfont,
        "Helvetica Neue",
        helvetica,
        segoe ui,
        arial,
        roboto,
        "PingFang SC",
        "miui",
        "Hiragino Sans GB",
        "Microsoft Yahei",
        sans-serif;
    }
    .adm-mask {
      --z-index: var(--adm-mask-z-index, 1000);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: var(--z-index);
      display: block;
      width: 100%;
      height: 100%;
    }
    .adm-mask-aria-button {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
    }
    .adm-mask-content {
      height: 100%;
      z-index: 1;
    }`;
  };
};

// packages/avm-ui/src/components/mask/index.ts
var Mask_default = Mask;
avm.define("avm-mask", Mask);

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
var classPrefix2 = `adm-icon`;
var name = "avm-icon";
var Icon = class extends Component {
  css = () => {
    return `
    @font-face {
      font-family: "${fontName}"; 
      src: url('https://apicloud-data-standard.oss-cn-beijing.aliyuncs.com/ttf/avm-icon.ttf') format('truetype'), url('../../components/avm-ui/icon/avm-icon.ttf') format('truetype');
    }
    .${classPrefix2} {font-family: ${fontName};font-size:32px;color:#666;align-self: center;}`;
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
    return <text role={classPrefix2} char={name2} style={{ ...props2 }} class={`${classPrefix2} ${classPrefix2}-font-icon-text ${props2.class || props2.className || ""}`}>{String.fromCharCode(code) || props2.children}</text>;
  };
};
avm.define(name, Icon);

// packages/avm-ui/src/components/icon/index.ts
var Icon_default = Icon;

// packages/avm-ui/src/components/popup/popup.tsx
var classPrefix3 = `adm-popup`;
var defaultProps2 = {
  position: "bottom",
  visible: false,
  getContainer: () => document.body,
  mask: true,
  stopPropagation: ["click"],
  bodyStyle: {},
  isTitle: false,
  titleText: "\u6807\u9898"
};
var Popup = class extends Component {
  data = {
    visible: this.props.visible
  };
  setVisible = (visible) => {
    if (visible) {
      this.props.afterShow && this.props.afterShow();
    }
    this.data.visible = visible;
  };
  render = (props2) => {
    this.props = Object.assign({}, defaultProps2, props2);
    this.data.visible = props2.visible;
    let {
      zIndex = 1e3,
      bodyClassName,
      position,
      forceRender = false,
      destroyOnClose = false,
      stopPropagation,
      handleClick,
      mask,
      maskClick,
      maskClassName,
      maskStyle,
      bodyStyle,
      children,
      isTitle,
      titleText,
      isBack,
      handleClose,
      handleBack,
      tipText,
      isFooterBtn,
      footBtnClick,
      bodyHeight,
      bodyWidth
    } = this.props;
    if (["top", "bottom"].includes(position)) {
      !bodyHeight && (bodyHeight = "375px");
      bodyStyle = { ...bodyStyle, height: bodyHeight };
    }
    if (["left", "right"].includes(position)) {
      !bodyWidth && (bodyWidth = "311px");
      bodyStyle = { ...bodyStyle, width: bodyWidth };
    }
    const bodyCls = classNames(`${classPrefix3}-body`, bodyClassName, `${classPrefix3}-body-position-${position}`);
    const shouldRender = useShouldRender(this.data.visible, forceRender, destroyOnClose);
    return <div className={classNames(classPrefix3, props2.className)} onClick={() => {
      handleClick && handleClick();
    }} style={{ display: this.data.visible ? "flex" : "none", zIndex }}>
      {mask && <Mask_default visible={props2.visible} onMaskClick={() => {
        maskClick && maskClick();
      }} className={maskClassName} style={maskStyle} disableBodyScroll={false} stopPropagation={stopPropagation} />}
      <div className={bodyCls} style={{
        ...bodyStyle,
        zIndex: zIndex + 10
      }}>
        {isTitle && <div className={`${classPrefix3}-title`}>
          {isBack && <div className={`${classPrefix3}-title-back`} onClick={() => {
            handleBack && handleBack();
          }}>
            <Icon_default name="LeftOutline" size="18" color="#bbb" />
            <span className={`${classPrefix3}-title-back-text`}>{"\u8FD4\u56DE"}</span>
          </div>}
          <div className={`${classPrefix3}-title-con`}>
            <span className={`${classPrefix3}-title-text`}>{titleText}</span>
            {tipText && <div title={tipText}><Icon_default name="CloseOutline" size="18" color="#bbb" /></div>}
          </div>
          <div onClick={() => {
            handleClose && handleClose();
          }}><Icon_default name="CloseOutline" size="18" color="#bbb" /></div>
        </div>}
        {shouldRender && formatLabel(children)}
        {isFooterBtn && <div className={`${classPrefix3}-footer`}><button onClick={() => {
          footBtnClick && footBtnClick();
        }} className={`${classPrefix3}-footer-btn`}>{"\u786E\u5B9A"}</button></div>}
      </div>
    </div>;
  };
  css = () => {
    return `
      .adm-popup {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .adm-popup-body {
        position: absolute;
        background-color: #fff;
      }
      .adm-popup-body-position-bottom {
        width: 100%;
        bottom: 0;
        left: 0;
        border-radius: 12px 12px 0 0;
      }
      .adm-popup-body-position-top {
        width: 100%;
        top: 0;
        left: 0;
        border-radius: 0 0 12px 12px;
      }
      .adm-popup-body-position-left {
        height: 100%;
        top: 0;
        left: 0;
      }
      .adm-popup-body-position-right {
        height: 100%;
        top: 0;
        right: 0;
      }
      .adm-popup-title {
        display: flex;
        flex-direction: row;
        height: 50px;
        align-items: center;
        padding: 0 16px;
      }
      .adm-popup-title-con {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .adm-popup-title-text {
        text-align: center;
        font-size: 16px;
        color: #333330;
        font-weight: 500;
        margin-right: 6px;
      }
      .adm-popup-title-back {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .adm-popup-title-back-text {
        font-size: 15px;
        color: #BBBBBB;
        padding-left: 8px;
      }
      .adm-popup-footer {
        position: absolute;
        bottom: 8px;
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .adm-popup-footer-btn {
        width: 95%;
        height: 44px;
        background: #9AC200;
        border-radius: 4px;
        color: #fff;
        border: none;
      }
    `;
  };
};

// packages/avm-ui/src/components/dropdown/dropdown.tsx
var classPrefix4 = `adm-dropdown`;
var defaultProps3 = {
  defaultActiveKey: null,
  closeOnMaskClick: true,
  closeOnClickAway: true,
  activeKey: "",
  arrow: <Icon name="DownFill" />
};
var Dropdown = class extends Component {
  data = {
    visible: false,
    children: [],
    activeKey: this.props.activeKey || this.props.defaultActiveKey,
    list: [],
    isActived: true
  };
  setVisible = (v, key) => {
    if (key === this.data.activeKey) {
      this.data.visible = false;
      this.data.activeKey = "";
    } else {
      this.props.onChange?.(key);
      this.props.children.forEach((item) => {
        if (item.key === key) {
          this.data.list = item.children;
        }
      });
      this.data.visible = v;
      this.data.activeKey = key;
    }
  };
  render = (props2) => {
    props2 = mergeProps(defaultProps3, props2);
    console.log(props2, 123123123);
    const { children } = props2;
    if (props2.activeKey && this.data.isActived) {
      this.data.visible = true;
      this.data.isActived = false;
      this.props.children.forEach((item) => {
        if (item.key === this.data.activeKey) {
          this.data.list = item.children;
        }
      });
    } else if (props2.defaultActiveKey && this.data.isActived) {
      this.data.visible = true;
      this.data.isActived = false;
      this.props.children.forEach((item) => {
        if (item.key === this.data.activeKey) {
          this.data.list = item.children;
        }
      });
    }
    this.data.children = children;
    return <div className="container">
      <div className={classPrefix4}>{children.map((item) => {
        return <div {...item.attributes} className={`${classPrefix4}-item`} onClick={this.setVisible.bind(this, true, item.key)}>
          <span className={classNames(`${classPrefix4}-default`, {
            [`${classPrefix4}-active`]: item.key === this.data.activeKey,
            [`${classPrefix4}-default`]: item.key !== this.data.activeKey
          })}>{item.attributes.title}</span>
          <div className={classNames("", {
            ["container-icon"]: item.key === this.data.activeKey,
            ["default-icon"]: item.key !== this.data.activeKey
          })}>{props2.arrow}</div>
        </div>;
      })}</div>
      <Popup isTitle={false} className="pop" visible={this.data.visible} position="top" onMaskClick={() => {
        if (props2.closeOnMaskClick && props2.closeOnClickAway) {
          this.setVisible(false, "");
          this.data.list = [];
          this.data.visible = false;
        }
      }}><DropdownItem className={`${classPrefix4}-item`} onClick={this.setVisible.bind(this, true)}>{this.data.list}</DropdownItem></Popup>
    </div>;
  };
  css = () => {
    return `
    :root {
      --adm-color-primary: #9AC200;
      --adm-color-success: #7FA000;
      --adm-color-warning: #FFA600;
      --adm-color-danger: #FA6400;
      --adm-color-white: #ffffff;
      --adm-color-weak: #999999;
      --adm-color-light: #cccccc;
      --adm-border-color: #eeeeee;
      --adm-font-size-main: 13px;
      --adm-color-text: #333333;
      --adm-font-family:
        -apple-system,
        blinkmacsystemfont,
        "Helvetica Neue",
        helvetica,
        segoe ui,
        arial,
        roboto,
        "PingFang SC",
        "miui",
        "Hiragino Sans GB",
        "Microsoft Yahei",
        sans-serif;
    }
    .container {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .pop {
      position: absolute;
      width: 100%;
      top: 50px;
      height: 100%;
    }
    .adm-dropdown {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      border-top: 1px solid var(--adm-border-color);
      border-bottom: 1px solid var(--adm-border-color);
    }
    .adm-dropdown-item {
      flex: 1;
      flex-direction: row;
      padding: 12px;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      cursor: pointer;
    }
    .adm-dropdown-default {
      color: #000;
    }
    .adm-dropdown-active {
      color: #9AC200;
    }
    .adm-dropdown .container-icon {
      transform: rotate(180deg) translateY(0px);
      transition: all 0.2s ease;
    }
    .adm-dropdown .adm-icon {
      font-size: 8px;
    }
    .adm-dropdown .default-icon {
      transition: all 0.2s ease;
      transform: rotate(0deg) translateY(1px);
    }
    .adm-popup {
      top: 50px;
    }
    .adm-popup-body-position-top {
      padding: 12px;
    }
    

    .adm-mask {
      --z-index: var(--adm-mask-z-index, 1000);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: var(--z-index);
      display: block;
      width: 100%;
      height: 100%;
    }
    .adm-mask-aria-button {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
    }
    .adm-mask-content {
      height: 100%;
      z-index: 1;
    }
    
    .adm-popup {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .adm-popup-body {
      position: absolute;
      background-color: #fff;
    }
    .adm-popup-body-position-bottom {
      width: 100%;
      bottom: 0;
      left: 0;
    }
    .adm-popup-body-position-top {
      width: 100%;
      top: 0;
      left: 0;
    }
    .adm-popup-body-position-left {
      height: 100%;
      top: 0;
      left: 0;
    }
    .adm-popup-body-position-right {
      height: 100%;
      top: 0;
      right: 0;
    }
    
    `;
  };
};

// packages/avm-ui/src/components/dropdown/index.ts
var dropdown_default = Dropdown;
avm.define("avm-dropdown", Dropdown);
avm.define("avm-dropdown-item", DropdownItem);
export {
  dropdown_default as default
};
