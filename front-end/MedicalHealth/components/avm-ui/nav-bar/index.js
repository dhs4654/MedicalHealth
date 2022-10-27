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

// packages/avm-ui/src/components/nav-bar/nav-bar.less
var nav_bar_default = ".adm-nav-bar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 45px;\n  border-bottom: none;\n  padding: 0 12px;\n  white-space: nowrap;\n}\n.adm-nav-bar-left {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n}\n.adm-nav-bar-right {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  text-align: right;\n  justify-content: flex-end;\n}\n.adm-nav-bar-back {\n  display: flex;\n  flex-direction: row;\n  cursor: pointer;\n}\n.adm-nav-bar-back-arrow {\n  font-size: 18px;\n  flex-direction: row;\n}\n.adm-nav-bar-left-text {\n  padding-right: 6px;\n}\n.adm-nav-bar-title {\n  flex: auto;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 17px;\n  color: #333;\n  max-width: 60%;\n  text-overflow: ellipsis;\n  justify-content: center;\n  padding: 0 12px;\n  display: block;\n}\n";

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

// packages/avm-ui/src/components/nav-bar/nav-bar.tsx
var classPrefix2 = `adm-nav-bar`;
var defaultProps = {
  back: "",
  backArrow: true,
  style: {
    color: "#333",
    background: "transparent"
  }
};
var NavBar = class extends Component {
  base;
  render = (props2) => {
    props2 = Object.assign({}, defaultProps, props2);
    const { back, backArrow, right, style } = props2;
    let rightNode;
    if (right) {
      if (typeof right === "string") {
        rightNode = right;
      } else if (right.children) {
        rightNode = right.children;
      }
    }
    const textColor = style.color;
    return <safe-area className={classNames(classPrefix2)} style={style} id={props2.id} ref={(e) => this.base = e}>
      <div className={`${classPrefix2}-left`} role="button">
        {back !== null && <div className={`${classPrefix2}-back`} onClick={this.onBack}>
          {backArrow && <div className={`${classPrefix2}-back-arrow`}>{backArrow === true || backArrow === "true" ? <Icon_default name="LeftOutline" size="18" color={textColor} /> : backArrow}</div>}
          <text className={`${classPrefix2}-left-text`} aria-hidden="true" style={{ color: textColor, fontSize: "15px" }}>{back}</text>
        </div>}
        <text className={`${classPrefix2}-left-text`} style={{ color: textColor, fontSize: "15px" }}>{props2.left}</text>
      </div>
      {props2.children && Boolean(props2.children) && typeof props2.children[0] === "string" ? <text className={`${classPrefix2}-title`} style={{ color: textColor }}>{props2.children}</text> : <div className={`${classPrefix2}-title`}>{props2.children}</div>}
      <div className={`${classPrefix2}-right`}>{rightNode}</div>
    </safe-area>;
  };
  css = () => nav_bar_default;
  onBack() {
    this.fire("back");
  }
  installed() {
    setTimeout((_) => {
      this.fire("load", this.base.getBoundingClientRect().height + api.safeArea.top);
    }, 300);
  }
};

// packages/avm-ui/src/components/nav-bar/index.ts
var nav_bar_default2 = NavBar;
avm.define("avm-nav-bar", NavBar);
export {
  nav_bar_default2 as default
};
