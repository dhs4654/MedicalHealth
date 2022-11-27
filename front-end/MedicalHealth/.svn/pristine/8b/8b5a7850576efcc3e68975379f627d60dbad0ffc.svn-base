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

// packages/avm-ui/src/components/list/list.less
var list_default = ".list-ellipsis {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n}\n.adm-list {\n  background: #fff;\n}\n.adm-list-header {\n  color: #999;\n  font-size: 15px;\n  padding: 8px 12px;\n}\n.adm-list--inner {\n  background-color: #ffffff;\n}\n.adm-list--default {\n  border-right: none;\n  border-left: none;\n}\n.adm-list--card {\n  margin: 0 16px;\n}\n.adm-list--inner__card {\n  margin: 0 16px;\n  border-radius: 8px;\n}\n.adm-list-item {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0 16px;\n}\n.adm-list-item-disabled {\n  pointer-events: none;\n}\n.adm-list-item-title {\n  font-size: 14px;\n  color: #333;\n  padding-bottom: 8px;\n}\n.adm-list-item-title-active {\n  color: #9ac200;\n}\n.adm-list-item-description {\n  color: #999;\n  font-size: 12px;\n  padding-top: 8px;\n}\n.adm-list-item-children {\n  font-size: 16px;\n  color: #333;\n}\n.adm-list-item-children-active {\n  color: #9ac200;\n}\n.adm-list-item-content {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  border-bottom: solid 1px #e8e8e8;\n  padding: 14px 0;\n}\n.adm-list-item-content-prefix {\n  padding-right: 12px;\n}\n.adm-list-item-content-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.adm-list-item-content-extra {\n  padding-left: 12px;\n  color: #999;\n  font-size: 16px;\n}\n.adm-list-item-content-arrow {\n  display: flex;\n  align-items: center;\n  padding-left: 12px;\n  font-size: 16px;\n  color: #999;\n}\n.adm-list-item-content-arrow span {\n  font-size: 16px;\n}\n.list-disabled {\n  opacity: 0.3;\n  pointer-events: none;\n}\n";

// packages/avm-ui/src/components/list/list.tsx
var classPrefix = `adm-list`;
var defaultProps = {
  mode: "default"
};
var List = class extends Component {
  render = (props2) => {
    props2 = Object.assign({}, defaultProps, props2);
    return <div className={`${classPrefix} ${classPrefix}--${props2.mode}`}>
      {props2.header && <text className={`${classPrefix}-header`}>{props2.header}</text>}
      <div className={classNames(classPrefix + "--inner", `${classPrefix}--inner__${props2.mode}`)}>{props2.children}</div>
    </div>;
  };
  css = () => list_default;
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

// packages/avm-ui/src/components/list/list-item.tsx
var classPrefix3 = `adm-list-item`;
var ListItem = class extends Component {
  render = (props2) => {
    const active = props2.active || false;
    const clickable = props2.clickable ?? !!props2.handleClick;
    const arrow = props2.arrow === void 0 ? clickable : props2.arrow;
    const prefixWidth = !!props2.prefixWidth ? props2.prefixWidth : "auto";
    const disabledClass = props2.disabled && "list-disabled";
    const childCls = classNames(`${classPrefix3}-children list-ellipsis`, {
      [`${classPrefix3}-children-active`]: active
    });
    const prefixCls = classNames(`${classPrefix3}-content-prefix`, disabledClass);
    const prefixStyles = { width: prefixWidth, paddingRight: "12px" };
    const extraCls = classNames(`${classPrefix3}-content-extra`, disabledClass);
    const childEles = formatLabel(props2.children, childCls);
    const prefixEles = formatLabel(props2.prefix, prefixCls, prefixStyles);
    const extraEles = formatLabel(props2.extra, extraCls);
    const content = <div className={`${classPrefix3}-content`} onClick={() => clickable && this.onHandleClick()}>
      {props2.prefix && prefixEles}
      <div className={classNames(`${classPrefix3}-content-main`, disabledClass)}>
        {props2.title && <span className={classNames(`${classPrefix3}-title`, "list-ellipsis", {
          [`${classPrefix3}-title-active`]: active
        })}>{props2.title || "\u5355\u5143\u683C"}</span>}
        {childEles}
        {props2.description && <span className={`${classPrefix3}-description list-ellipsis`}>{props2.description}</span>}
      </div>
      {props2.extra && extraEles}
      {arrow && <div className={classNames(`${classPrefix3}-content-arrow`, disabledClass)}>{arrow === true ? <Icon name="RightOutline" size={16} color={`${active ? "#9AC200" : "#666"}`} /> : arrow}</div>}
    </div>;
    const listItemCls = classNames(`${classPrefix3}`, {
      ["adm-plain-anchor"]: clickable,
      [`${classPrefix3}-active`]: active,
      [`${classPrefix3}-disabled`]: props2.disabled
    });
    return <div className={listItemCls}>{content}</div>;
  };
  onHandleClick() {
    return this.fire("handleClick");
  }
};

// packages/avm-ui/src/utils/attach-properties-to-component.ts
function attachPropertiesToComponent(component, properties2) {
  const ret = component;
  for (const key in properties2) {
    if (properties2.hasOwnProperty(key)) {
      ret[key] = properties2[key];
    }
  }
  return ret;
}

// packages/avm-ui/src/components/list/index.ts
var properties = {
  Item: ListItem
};
var list_default2 = attachPropertiesToComponent(List, properties);
avm.define("avm-list", List);
avm.define("avm-list-item", ListItem);
export {
  list_default2 as default
};
