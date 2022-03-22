require('semantic-ui-css/semantic.min.css');
var jsxRuntime = require('react/jsx-runtime');
var require$$0 = require('react');
var styled = require('styled-components');
var DatePicker = require('react-datepicker');
var reactDom = require('react-dom');
var br = require('date-fns/locale/pt-BR');
var semanticUiReact = require('semantic-ui-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var DatePicker__default = /*#__PURE__*/_interopDefaultLegacy(DatePicker);
var reactDom__default = /*#__PURE__*/_interopDefaultLegacy(reactDom);
var br__default = /*#__PURE__*/_interopDefaultLegacy(br);

/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
(function () {
  try {
    return process.env.NODE_ENV === 'production';
  } catch (e) {
    return false;
  }
})();
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w$1 = WINDOW || {};
if (!w$1[NAMESPACE_IDENTIFIER]) w$1[NAMESPACE_IDENTIFIER] = {};
if (!w$1[NAMESPACE_IDENTIFIER].styles) w$1[NAMESPACE_IDENTIFIER].styles = {};
if (!w$1[NAMESPACE_IDENTIFIER].hooks) w$1[NAMESPACE_IDENTIFIER].hooks = {};
if (!w$1[NAMESPACE_IDENTIFIER].shims) w$1[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w$1[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}
typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      explicitMaskId = _ref.maskId,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
({
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
});

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

({
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
});
({
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
});
({
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
});
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var _cssInserted = false;
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$2 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$2 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$2(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$2(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var propTypes = createCommonjsModule(function (module) {
if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$3(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$3(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// Get CSS class list from a props object
function classList(props) {
  var _classes;

  var spin = props.spin,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-spin': spin,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

// Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number
function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  } // eslint-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }); // Ensure 1st char is always lowercase

  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, ["style"]);

  mixins.attrs['style'] = _objectSpread2({}, mixins.attrs['style'], {}, existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2({}, mixins.attrs, {}, remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = process.env.NODE_ENV === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function normalizeIconArgs(icon) {
  // this has everything that it needs to be rendered which means it was probably imported
  // directly from an icon svg package
  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
    return icon;
  }


  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
}

// creates an object with a key of key
// and a value of value
// if certain conditions are met
function objectWithKey(key, value) {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}

function FontAwesomeIcon(_ref) {
  var forwardedRef = _ref.forwardedRef,
      props = _objectWithoutProperties(_ref, ["forwardedRef"]);

  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title,
      titleId = props.titleId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? parse.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = icon(iconLookup, _objectSpread2({}, classes, {}, transform, {}, mask, {
    symbol: symbol,
    title: title,
    titleId: titleId
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref: forwardedRef
  };
  Object.keys(props).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
}
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  border: propTypes.bool,
  className: propTypes.string,
  mask: propTypes.oneOfType([propTypes.object, propTypes.array, propTypes.string]),
  fixedWidth: propTypes.bool,
  inverse: propTypes.bool,
  flip: propTypes.oneOf(['horizontal', 'vertical', 'both']),
  icon: propTypes.oneOfType([propTypes.object, propTypes.array, propTypes.string]),
  listItem: propTypes.bool,
  pull: propTypes.oneOf(['right', 'left']),
  pulse: propTypes.bool,
  rotation: propTypes.oneOf([0, 90, 180, 270]),
  size: propTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: propTypes.bool,
  symbol: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  title: propTypes.string,
  transform: propTypes.oneOfType([propTypes.string, propTypes.object]),
  swapOpacity: propTypes.bool
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  title: '',
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, require$$0__default["default"].createElement);

/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var faAngleDoubleLeft = {
  prefix: 'fas',
  iconName: 'angle-double-left',
  icon: [448, 512, [], "f100", "M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"]
};
var faAngleDoubleRight = {
  prefix: 'fas',
  iconName: 'angle-double-right',
  icon: [448, 512, [], "f101", "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"]
};
var faAngleDown = {
  prefix: 'fas',
  iconName: 'angle-down',
  icon: [320, 512, [], "f107", "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"]
};
var faAngleLeft = {
  prefix: 'fas',
  iconName: 'angle-left',
  icon: [256, 512, [], "f104", "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"]
};
var faAngleRight = {
  prefix: 'fas',
  iconName: 'angle-right',
  icon: [256, 512, [], "f105", "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"]
};
var faAngleUp = {
  prefix: 'fas',
  iconName: 'angle-up',
  icon: [320, 512, [], "f106", "M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"]
};
var faBell = {
  prefix: 'fas',
  iconName: 'bell',
  icon: [448, 512, [], "f0f3", "M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"]
};
var faCheck = {
  prefix: 'fas',
  iconName: 'check',
  icon: [512, 512, [], "f00c", "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]
};
var faMinus = {
  prefix: 'fas',
  iconName: 'minus',
  icon: [448, 512, [], "f068", "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]
};
var faPlus = {
  prefix: 'fas',
  iconName: 'plus',
  icon: [448, 512, [], "f067", "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]
};
var faTimes = {
  prefix: 'fas',
  iconName: 'times',
  icon: [352, 512, [], "f00d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]
};

function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var colors = {
  brand10: '#9B4DEE',
  brand20: '#E0457B',
  brand30: '#F7EA48',
  brandDark: '#68349F',
  brandLight: '#D8B8F9',
  brandGreen: '#4BA047',
  default10: '#F1F1F1',
  default20: '#E1E6EB',
  default30: '#D1D8DC',
  gray10: '#ACACAC',
  gray20: '#707070',
  gray30: '#333333',
  sutil: '#FEFEFE',
  white: '#FFFFFF',
  black: '#000000',
  card: '#eeeeee',
  transparent: 'rgba(0, 0, 0, 0)',
  hover: 'rgba(211, 211, 211, 0.4)',
  highlight: '#FF0000',
  success10: '#E8F5E9',
  success20: '#43a047',
  success30: '#1b5e20',
  successLight: '#5bcc5f',
  warning10: '#FFF3E0',
  warning20: '#FB8C00',
  warning30: '#E65100',
  gold: '#FEBF00',
  danger10: '#FFEBEE',
  danger20: '#E53935',
  danger30: '#B71C1C',
  info10: '#E3F2FD',
  info20: '#1E88E5',
  info30: '#0D47A1',
  brandTransparent: 'rgba(155, 77, 238, 0.2)',
  brandTransparent2: 'rgba(155, 77, 238, 0.9)',
  error: '#e0457b25'
};

var _templateObject$f, _templateObject2$a, _templateObject3$9, _templateObject4$7, _templateObject5$5, _templateObject6$5, _templateObject7$3;
var Container$a = styled__default["default"].div(_templateObject$f || (_templateObject$f = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  display: flex;\n  width: ", ";\n  justify-content: space-between;\n  background-color: ", ";\n  border: 1px solid ", ";\n  padding: 0.9375rem 1.25rem;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.16);\n\n  .icon-title {\n    display: flex;\n    align-items: center;\n  }\n\n  .title-subtitle {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    margin-left: ", ";\n  }\n\n  .value-icon {\n    display: flex;\n    align-items: center;\n    flex: 1;\n    justify-content: flex-end;\n  }\n\n  ", "\n"])), function (props) {
  if (props.width) {
    if (typeof props.width === 'string') {
      return props.width;
    }

    return props.width + "px";
  }

  return '100%';
}, function (props) {
  return props.secondary ? colors.card : colors.white;
}, colors.card, function (props) {
  return props.icon ? '15px' : '0';
}, function (props) {
  return props.open ? styled.css(_templateObject2$a || (_templateObject2$a = _taggedTemplateLiteralLoose(["\n          border-top-left-radius: 20px;\n          border-top-right-radius: 20px;\n        "]))) : styled.css(_templateObject3$9 || (_templateObject3$9 = _taggedTemplateLiteralLoose(["\n          border-radius: 20px;\n        "])));
});
var Title$1 = styled__default["default"].span(_templateObject4$7 || (_templateObject4$7 = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  color: ", ";\n"])), function (props) {
  return props.subtitle ? '0.875rem' : '1rem';
}, colors.gray20);
var Subtitle = styled__default["default"].span(_templateObject5$5 || (_templateObject5$5 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: 0.75rem;\n"])), colors.gray10);
var Value = styled__default["default"].span(_templateObject6$5 || (_templateObject6$5 = _taggedTemplateLiteralLoose(["\n  margin-right: 1.25rem;\n  color: ", ";\n"])), colors.gray20);
var Body$1 = styled__default["default"].div(_templateObject7$3 || (_templateObject7$3 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  width: ", ";\n  padding: 1.25rem;\n  border: 1px solid ", ";\n  border-top: 0;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  display: ", ";\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16);\n"])), function (props) {
  if (typeof props.width === 'string') {
    return props.width;
  }

  return props.width + "px";
}, colors.card, function (props) {
  return props.open ? 'block' : 'none';
});

function Accordion(_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      titleClassName = _ref.titleClassName,
      titleStyle = _ref.titleStyle,
      subtitle = _ref.subtitle,
      subtitleClassName = _ref.subtitleClassName,
      subtitleStyle = _ref.subtitleStyle,
      value = _ref.value,
      valueClassName = _ref.valueClassName,
      valueStyle = _ref.valueStyle,
      children = _ref.children,
      secondary = _ref.secondary,
      open = _ref.open,
      _onClick = _ref.onClick,
      width = _ref.width,
      icon = _ref.icon,
      iconClassName = _ref.iconClassName,
      iconStyle = _ref.iconStyle,
      customIcon = _ref.customIcon,
      bodyClassName = _ref.bodyClassName,
      bodyStyle = _ref.bodyStyle,
      ref = _ref.ref;
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(Container$a, Object.assign({
      role: "button",
      className: className,
      style: style,
      secondary: secondary,
      subtitle: subtitle,
      open: open,
      onClick: function onClick(event) {
        return _onClick(event);
      },
      width: width,
      icon: !!(icon || customIcon),
      ref: ref
    }, {
      children: [jsxRuntime.jsxs("div", Object.assign({
        className: "icon-title"
      }, {
        children: [customIcon || (icon ? jsxRuntime.jsx(FontAwesomeIcon, {
          "data-testid": "accordion-icon",
          className: iconClassName,
          style: iconStyle,
          icon: icon,
          size: "lg",
          color: colors.brand10
        }, void 0) : null), jsxRuntime.jsxs("div", Object.assign({
          className: "title-subtitle"
        }, {
          children: [jsxRuntime.jsx(Title$1, Object.assign({
            className: titleClassName,
            style: titleStyle,
            subtitle: subtitle
          }, {
            children: title
          }), void 0), subtitle && jsxRuntime.jsx(Subtitle, Object.assign({
            className: subtitleClassName,
            style: subtitleStyle
          }, {
            children: subtitle
          }), void 0)]
        }), void 0)]
      }), void 0), jsxRuntime.jsxs("div", Object.assign({
        className: "value-icon"
      }, {
        children: [value && jsxRuntime.jsx(Value, Object.assign({
          className: valueClassName,
          style: valueStyle
        }, {
          children: value
        }), void 0), secondary ? jsxRuntime.jsx(FontAwesomeIcon, {
          icon: open ? faAngleUp : faAngleDown,
          style: {
            fontSize: 20
          }
        }, void 0) : jsxRuntime.jsx(FontAwesomeIcon, {
          icon: open ? faAngleUp : faAngleDown,
          style: {
            fontSize: 20
          },
          color: colors.brand10
        }, void 0)]
      }), void 0)]
    }), void 0), jsxRuntime.jsx(Body$1, Object.assign({
      className: bodyClassName,
      style: bodyStyle,
      open: open,
      width: width
    }, {
      children: children
    }), void 0)]
  }, void 0);
}

var Sizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl'
};
var getMeasurement = function getMeasurement(size, defaultValue) {
  if (size) {
    if (typeof size === 'string') {
      return size;
    }

    return size + "px";
  }

  return defaultValue || '100%';
};
var getFontSize = function getFontSize(defaultSize, sizeBase) {
  switch (defaultSize) {
    case Sizes.xs:
      return "calc(" + getMeasurement(sizeBase) + " - 0.25rem)";

    case Sizes.sm:
      return "calc(" + getMeasurement(sizeBase) + " - 0.125rem)";

    case Sizes.md:
      return getMeasurement(sizeBase);

    case Sizes.lg:
      return "calc(" + getMeasurement(sizeBase) + " + 0.125rem)";

    case Sizes.xl:
      return "calc(" + getMeasurement(sizeBase) + " + 0.25rem)";

    default:
      return getMeasurement(sizeBase);
  }
};

var _templateObject$e, _templateObject2$9, _templateObject3$8, _templateObject4$6, _templateObject5$4, _templateObject6$4, _templateObject7$2;
var Container$9 = styled__default["default"].button(_templateObject$e || (_templateObject$e = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  font-size: ", ";\n  position: ", ";\n  line-height: 0;\n  background-color: ", ";\n  color: ", ";\n  padding: 0.65em 1.25em;\n  width: ", ";\n  border-radius: ", ";\n  cursor: pointer;\n  border: ", ";\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n"])), function (props) {
  return props.size ? getFontSize(props.size, '1rem') : '1rem';
}, function (props) {
  return props.isLoading ? 'relative' : 'initial';
}, function (props) {
  if (props.secondary || props.tertiary) {
    return colors.white;
  }

  if (props.noBorder) {
    return 'transparent';
  }

  return colors.brand30;
}, function (props) {
  if (props.tertiary) {
    return colors.gray20;
  }

  if (props.isLoading) {
    return 'transparent';
  }

  return colors.brand10;
}, function (props) {
  return getMeasurement(props.width, 'none');
}, function (props) {
  if (props.rectangular) return '10px';
  return '30px';
}, function (props) {
  if (props.secondary) {
    return "1px solid " + colors.brand10;
  }

  if (props.tertiary) {
    return "1px solid " + colors.gray10;
  }

  return 'none';
}, function (props) {
  if (props.secondary) {
    return colors.brandTransparent;
  }

  if (props.backPurple) {
    return colors.brand20;
  }

  if (props.noBorder) {
    return 'transparent';
  }

  if (props.tertiary) {
    return colors.hover;
  }

  return colors.brand10;
}, function (props) {
  if (props.secondary || props.noBorder) {
    return colors.brand10;
  }

  if (props.backPurple) {
    return colors.white;
  }

  if (props.tertiary) {
    return colors.gray20;
  }

  if (props.isLoading) {
    return 'transparent';
  }

  return colors.brand30;
});
var TextFirst = styled__default["default"].span(_templateObject2$9 || (_templateObject2$9 = _taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n  font-size: ", ";\n  margin-right: ", ";\n"])), function (props) {
  if (props.firstStrong || props.strong) {
    return 'bold';
  }

  return 'normal';
}, function (props) {
  return props.size ? getFontSize(props.size, '1rem') : '1rem';
}, function (props) {
  return props.hasTextEnd ? '3.5px' : '';
});
var TextEnd = styled__default["default"].span(_templateObject3$8 || (_templateObject3$8 = _taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n  font-size: ", ";\n"])), function (props) {
  if (props.firstStrong || props.notStrong) {
    return 'normal';
  }

  return 'bold';
}, function (props) {
  return props.size ? getFontSize(props.size, '1rem') : '1rem';
});
var Notification = styled__default["default"].button(_templateObject4$6 || (_templateObject4$6 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  background-color: ", ";\n  height: 40px;\n  width: 100%;\n  border-radius: 30px;\n  cursor: pointer;\n  border: 1px solid ", ";\n  outline: none;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  span {\n    color: ", ";\n    margin-left: 20px;\n    font-weight: bold;\n  }\n"])), colors.brand10, colors.brand30, colors.brandTransparent2, colors.brand30);
var Icon = styled__default["default"].div(_templateObject5$4 || (_templateObject5$4 = _taggedTemplateLiteralLoose(["\n  margin-right: ", ";\n  margin-left: ", ";\n"])), function (props) {
  return props.iconPosition === 'left' && props.hasText ? '10px' : '';
}, function (props) {
  return props.iconPosition === 'right' && props.hasText ? '10px' : '';
});
var Amount = styled__default["default"].div(_templateObject6$4 || (_templateObject6$4 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  background-color: ", ";\n  width: 20px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  color: ", ";\n  font-size: 0.625rem;\n"])), colors.brand30, colors.brand10);
var LoadingContainer = styled__default["default"].div(_templateObject7$2 || (_templateObject7$2 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));

var _templateObject$d, _templateObject2$8;
var POSITIONS = {
  center: 'center',
  left: 'flex-start',
  right: 'flex-end'
};

var widthLoader = function widthLoader(size) {
  switch (size) {
    case 'xs':
      return '1em';

    case 'sm':
      return '1.75em';

    case 'md':
      return '2.5em';

    case 'lg':
      return '3.25em';

    case 'xl':
      return '4em';

    default:
      return '2.5em';
  }
};

var widthBorder = function widthBorder(size) {
  switch (size) {
    case 'xs':
      return '2px';

    case 'sm':
      return '3px';

    case 'md':
      return '4px';

    case 'lg':
      return '5px';

    case 'xl':
      return '6px';

    default:
      return '4px';
  }
};

var Container$8 = styled__default["default"].div(_templateObject$d || (_templateObject$d = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  justify-content: ", ";\n"])), function (props) {
  return POSITIONS[props.position];
});
var Load = styled__default["default"].div(_templateObject2$8 || (_templateObject2$8 = _taggedTemplateLiteralLoose(["\n  border-width: ", ";\n  border-style: solid;\n  border-color: ", ";\n  border-top-width: ", ";\n  border-top-style: solid;\n  border-top-color: ", ";\n  border-radius: 50%;\n  width: ", ";\n  height: ", ";\n  animation: spin 0.6s linear infinite;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])), function (props) {
  return widthBorder(props.size);
}, function (props) {
  return props.outsideColor || colors.default20;
}, function (props) {
  return widthBorder(props.size);
}, function (props) {
  return props.color || colors.brand10;
}, function (props) {
  return widthLoader(props.size);
}, function (props) {
  return widthLoader(props.size);
});

function Loader(_ref) {
  var color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size,
      className = _ref.className,
      style = _ref.style,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'center' : _ref$position,
      outsideColor = _ref.outsideColor;
  return jsxRuntime.jsx(Container$8, Object.assign({
    position: position
  }, {
    children: jsxRuntime.jsx(Load, {
      role: "progressbar",
      "aria-busy": "true",
      "aria-live": "polite",
      color: color,
      size: size,
      style: style,
      className: className,
      outsideColor: outsideColor
    }, void 0)
  }), void 0);
}

var _excluded$8 = ["textFirst", "textFirstClassName", "textFirstStyle", "textEnd", "textEndClassName", "textEndStyle", "firstStrong", "notStrong", "strong", "loading", "secondary", "backPurple", "children", "notification", "amount", "width", "icon", "iconClassName", "iconStyle", "containerIconClassName", "containerIconStyle", "customIcon", "iconPosition", "noBorder", "tertiary", "size", "rectangular"];

function Button$2(_ref) {
  var textFirst = _ref.textFirst,
      textFirstClassName = _ref.textFirstClassName,
      textFirstStyle = _ref.textFirstStyle,
      textEnd = _ref.textEnd,
      textEndClassName = _ref.textEndClassName,
      textEndStyle = _ref.textEndStyle,
      firstStrong = _ref.firstStrong,
      notStrong = _ref.notStrong,
      strong = _ref.strong,
      loading = _ref.loading,
      secondary = _ref.secondary,
      backPurple = _ref.backPurple,
      children = _ref.children,
      notification = _ref.notification,
      amount = _ref.amount,
      width = _ref.width,
      icon = _ref.icon,
      iconClassName = _ref.iconClassName,
      iconStyle = _ref.iconStyle,
      containerIconClassName = _ref.containerIconClassName,
      containerIconStyle = _ref.containerIconStyle,
      customIcon = _ref.customIcon,
      _ref$iconPosition = _ref.iconPosition,
      iconPosition = _ref$iconPosition === void 0 ? 'right' : _ref$iconPosition,
      noBorder = _ref.noBorder,
      tertiary = _ref.tertiary,
      size = _ref.size,
      rectangular = _ref.rectangular,
      rest = _objectWithoutPropertiesLoose$2(_ref, _excluded$8);

  function renderButtonNotification() {
    return jsxRuntime.jsx(Notification, Object.assign({}, rest, {
      children: loading ? jsxRuntime.jsx(Loader, {
        size: "sm"
      }, void 0) : jsxRuntime.jsxs("div", Object.assign({
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '50%',
          padding: 10
        }
      }, {
        children: [jsxRuntime.jsxs("div", Object.assign({
          style: {
            display: 'flex',
            alignItems: 'center'
          }
        }, {
          children: [jsxRuntime.jsx(Icon // loading={loading}
          , Object.assign({
            // loading={loading}
            iconPosition: iconPosition,
            hasText: !!textFirst || !!textEnd || !!children
          }, {
            children: jsxRuntime.jsx(FontAwesomeIcon, {
              icon: faBell,
              size: "lg",
              color: colors.brand30
            }, void 0)
          }), void 0), jsxRuntime.jsx("span", {
            children: "notifica\xE7\xF5es"
          }, void 0)]
        }), void 0), jsxRuntime.jsx(Amount, {
          children: amount
        }, void 0)]
      }), void 0)
    }), void 0);
  }

  function renderIcon() {
    if (customIcon) return jsxRuntime.jsx(Icon, Object.assign({
      className: containerIconClassName,
      style: containerIconStyle,
      iconPosition: iconPosition,
      hasText: !!textFirst || !!textEnd || !!children
    }, {
      children: customIcon
    }), void 0);
    return jsxRuntime.jsx(Icon, Object.assign({
      className: containerIconClassName,
      style: containerIconStyle,
      iconPosition: iconPosition,
      hasText: !!textFirst || !!textEnd || !!children
    }, {
      children: jsxRuntime.jsx(FontAwesomeIcon, {
        icon: icon,
        className: iconClassName,
        style: iconStyle,
        "data-testid": "button-icon"
      }, void 0)
    }), void 0);
  }

  function renderButton() {
    return jsxRuntime.jsxs(Container$9, Object.assign({}, rest, {
      secondary: secondary,
      backPurple: backPurple,
      width: width,
      icon: icon,
      noBorder: noBorder,
      tertiary: tertiary,
      size: size,
      rectangular: rectangular,
      isLoading: !!loading
    }, {
      children: [(icon || customIcon) && iconPosition === 'left' && renderIcon(), children ? jsxRuntime.jsx("div", {
        children: children
      }, void 0) : jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [jsxRuntime.jsx(TextFirst, Object.assign({
          className: textFirstClassName,
          style: textFirstStyle,
          hasTextEnd: !!textEnd,
          firstStrong: firstStrong,
          strong: strong,
          notStrong: notStrong,
          tertiary: tertiary,
          size: size
        }, {
          children: textFirst
        }), void 0), jsxRuntime.jsx(TextEnd, Object.assign({
          className: textEndClassName,
          style: textEndStyle,
          firstStrong: firstStrong,
          strong: strong,
          notStrong: notStrong,
          tertiary: tertiary,
          size: size
        }, {
          children: textEnd
        }), void 0)]
      }, void 0), (icon || customIcon) && iconPosition === 'right' && renderIcon(), loading && jsxRuntime.jsx(LoadingContainer, Object.assign({
        "data-testid": "button-loading"
      }, {
        children: jsxRuntime.jsx(Loader, {
          size: "sm"
        }, void 0)
      }), void 0)]
    }), void 0);
  }

  if (notification) {
    return renderButtonNotification();
  }

  return renderButton();
}

function _interopDefault$2(e){return e&&"object"==typeof e&&"default"in e?e["default"]:e}var React$1=_interopDefault$2(require$$0__default["default"]);function _defaults2$1(e,t){for(var n=Object.getOwnPropertyNames(t),a=0;a<n.length;a++){var i=n[a],r=Object.getOwnPropertyDescriptor(t,i);r&&r.configurable&&e[i]===undefined&&Object.defineProperty(e,i,r);}return e}function _extends$1(){return (_extends$1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);}return e}).apply(this,arguments)}function _inheritsLoose$1(e,t){e.prototype=Object.create(t.prototype),_defaults2$1(e.prototype.constructor=e,t);}function _objectWithoutPropertiesLoose$1(e,t){if(null==e)return {};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],0<=t.indexOf(n)||(i[n]=e[n]);return i}function _assertThisInitialized$1(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var invariant$2=function(e,t,n,a,i,r,o,s){if(!e){var l;if(t===undefined)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {var u=[n,a,i,r,o,s],c=0;(l=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation";}throw l.framesToPop=1,l}},invariant_1=invariant$2;function setInputSelection$1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else {var a=e.createTextRange();a.collapse(!0),a.moveStart("character",t),a.moveEnd("character",n-t),a.select();}}function getInputSelection$1(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else {var a=document.selection.createRange();a.parentElement()===e&&(t=-a.moveStart("character",-e.value.length),n=-a.moveEnd("character",-e.value.length));}return {start:t,end:n,length:n-t}}var defaultFormatChars$1={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},defaultMaskChar$1="_";function parseMask$1(e,t,n){var a="",i="",r=null,o=[];if(t===undefined&&(t=defaultMaskChar$1),null==n&&(n=defaultFormatChars$1),!e||"string"!=typeof e)return {maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var s=!1;return e.split("").forEach(function(e){s=!s&&"\\"===e||(s||!n[e]?(o.push(a.length),a.length===o.length-1&&(i+=e)):r=a.length+1,a+=e,!1);}),{maskChar:t,formatChars:n,prefix:i,mask:a,lastEditablePosition:r,permanents:o}}function isPermanentCharacter$1(e,t){return -1!==e.permanents.indexOf(t)}function isAllowedCharacter$1(e,t,n){var a=e.mask,i=e.formatChars;if(!n)return !1;if(isPermanentCharacter$1(e,t))return a[t]===n;var r=i[a[t]];return new RegExp(r).test(n)}function isEmpty$1(n,e){return e.split("").every(function(e,t){return isPermanentCharacter$1(n,t)||!isAllowedCharacter$1(n,t,e)})}function getFilledLength$1(e,t){var n=e.maskChar,a=e.prefix;if(!n){for(;t.length>a.length&&isPermanentCharacter$1(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=a.length,r=t.length;r>=a.length;r--){var o=t[r];if(!isPermanentCharacter$1(e,r)&&isAllowedCharacter$1(e,r,o)){i=r+1;break}}return i}function isFilled$1(e,t){return getFilledLength$1(e,t)===e.mask.length}function formatValue$1(e,t){var n=e.maskChar,a=e.mask,i=e.prefix;if(!n){for((t=insertString$1(e,"",t,0)).length<i.length&&(t=i);t.length<a.length&&isPermanentCharacter$1(e,t.length);)t+=a[t.length];return t}if(t)return insertString$1(e,formatValue$1(e,""),t,0);for(var r=0;r<a.length;r++)isPermanentCharacter$1(e,r)?t+=a[r]:t+=n;return t}function clearRange$1(n,e,a,t){var i=a+t,r=n.maskChar,o=n.mask,s=n.prefix,l=e.split("");if(r)return l.map(function(e,t){return t<a||i<=t?e:isPermanentCharacter$1(n,t)?o[t]:r}).join("");for(var u=i;u<l.length;u++)isPermanentCharacter$1(n,u)&&(l[u]="");return a=Math.max(s.length,a),l.splice(a,i-a),e=l.join(""),formatValue$1(n,e)}function insertString$1(r,o,e,s){var l=r.mask,u=r.maskChar,c=r.prefix,t=e.split(""),h=isFilled$1(r,o);return !u&&s>o.length&&(o+=l.slice(o.length,s)),t.every(function(e){for(;i=e,isPermanentCharacter$1(r,a=s)&&i!==l[a];){if(s>=o.length&&(o+=l[s]),t=e,n=s,u&&isPermanentCharacter$1(r,n)&&t===u)return !0;if(++s>=l.length)return !1}var t,n,a,i;return !isAllowedCharacter$1(r,s,e)&&e!==u||(s<o.length?o=u||h||s<c.length?o.slice(0,s)+e+o.slice(s+1):(o=o.slice(0,s)+e+o.slice(s),formatValue$1(r,o)):u||(o+=e),++s<l.length)}),o}function getInsertStringLength$1(a,e,t,i){var r=a.mask,o=a.maskChar,n=t.split(""),s=i;return n.every(function(e){for(;n=e,isPermanentCharacter$1(a,t=i)&&n!==r[t];)if(++i>=r.length)return !1;var t,n;return (isAllowedCharacter$1(a,i,e)||e===o)&&i++,i<r.length}),i-s}function getLeftEditablePosition$1(e,t){for(var n=t;0<=n;--n)if(!isPermanentCharacter$1(e,n))return n;return null}function getRightEditablePosition$1(e,t){for(var n=e.mask,a=t;a<n.length;++a)if(!isPermanentCharacter$1(e,a))return a;return null}function getStringValue$1(e){return e||0===e?e+"":""}function processChange$1(e,t,n,a,i){var r=e.mask,o=e.prefix,s=e.lastEditablePosition,l=t,u="",c=0,h=0,f=Math.min(i.start,n.start);if(n.end>i.start?h=(c=getInsertStringLength$1(e,a,u=l.slice(i.start,n.end),f))?i.length:0:l.length<a.length&&(h=a.length-l.length),l=a,h){if(1===h&&!i.length)f=i.start===n.start?getRightEditablePosition$1(e,n.start):getLeftEditablePosition$1(e,n.start);l=clearRange$1(e,l,f,h);}return l=insertString$1(e,l,u,f),(f+=c)>=r.length?f=r.length:f<o.length&&!c?f=o.length:f>=o.length&&f<s&&c&&(f=getRightEditablePosition$1(e,f)),u||(u=null),{value:l=formatValue$1(e,l),enteredString:u,selection:{start:f,end:f}}}function isWindowsPhoneBrowser$1(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function isFunction$1(e){return "function"==typeof e}function getRequestAnimationFrame$1(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function getCancelAnimationFrame$1(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function defer$1(e){return (!!getCancelAnimationFrame$1()?getRequestAnimationFrame$1():function(){return setTimeout(e,1e3/60)})(e)}function cancelDefer$1(e){(getCancelAnimationFrame$1()||clearTimeout)(e);}var InputElement$1=function(c){function e(e){var f=c.call(this,e)||this;f.focused=!1,f.mounted=!1,f.previousSelection=null,f.selectionDeferId=null,f.saveSelectionLoopDeferId=null,f.saveSelectionLoop=function(){f.previousSelection=f.getSelection(),f.saveSelectionLoopDeferId=defer$1(f.saveSelectionLoop);},f.runSaveSelectionLoop=function(){null===f.saveSelectionLoopDeferId&&f.saveSelectionLoop();},f.stopSaveSelectionLoop=function(){null!==f.saveSelectionLoopDeferId&&(cancelDefer$1(f.saveSelectionLoopDeferId),f.saveSelectionLoopDeferId=null,f.previousSelection=null);},f.getInputDOMNode=function(){if(!f.mounted)return null;var e=reactDom__default["default"].findDOMNode(_assertThisInitialized$1(_assertThisInitialized$1(f))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},f.getInputValue=function(){var e=f.getInputDOMNode();return e?e.value:null},f.setInputValue=function(e){var t=f.getInputDOMNode();t&&(f.value=e,t.value=e);},f.setCursorToEnd=function(){var e=getFilledLength$1(f.maskOptions,f.value),t=getRightEditablePosition$1(f.maskOptions,e);null!==t&&f.setCursorPosition(t);},f.setSelection=function(e,t,n){void 0===n&&(n={});var a=f.getInputDOMNode(),i=f.isFocused();a&&i&&(n.deferred||setInputSelection$1(a,e,t),null!==f.selectionDeferId&&cancelDefer$1(f.selectionDeferId),f.selectionDeferId=defer$1(function(){f.selectionDeferId=null,setInputSelection$1(a,e,t);}),f.previousSelection={start:e,end:t,length:Math.abs(t-e)});},f.getSelection=function(){return getInputSelection$1(f.getInputDOMNode())},f.getCursorPosition=function(){return f.getSelection().start},f.setCursorPosition=function(e){f.setSelection(e,e);},f.isFocused=function(){return f.focused},f.getBeforeMaskedValueChangeConfig=function(){var e=f.maskOptions,t=e.mask,n=e.maskChar,a=e.permanents,i=e.formatChars;return {mask:t,maskChar:n,permanents:a,alwaysShowMask:!!f.props.alwaysShowMask,formatChars:i}},f.isInputAutofilled=function(e,t,n,a){var i=f.getInputDOMNode();try{if(i.matches(":-webkit-autofill"))return !0}catch(r){}return !f.focused||a.end<n.length&&t.end===e.length},f.onChange=function(e){var t=_assertThisInitialized$1(_assertThisInitialized$1(f)).beforePasteState,n=_assertThisInitialized$1(_assertThisInitialized$1(f)).previousSelection,a=f.props.beforeMaskedValueChange,i=f.getInputValue(),r=f.value,o=f.getSelection();f.isInputAutofilled(i,o,r,n)&&(r=formatValue$1(f.maskOptions,""),n={start:0,end:0,length:0}),t&&(n=t.selection,r=t.value,o={start:n.start+i.length,end:n.start+i.length,length:0},i=r.slice(0,n.start)+i+r.slice(n.end),f.beforePasteState=null);var s=processChange$1(f.maskOptions,i,o,r,n),l=s.enteredString,u=s.selection,c=s.value;if(isFunction$1(a)){var h=a({value:c,selection:u},{value:r,selection:n},l,f.getBeforeMaskedValueChangeConfig());c=h.value,u=h.selection;}f.setInputValue(c),isFunction$1(f.props.onChange)&&f.props.onChange(e),f.isWindowsPhoneBrowser?f.setSelection(u.start,u.end,{deferred:!0}):f.setSelection(u.start,u.end);},f.onFocus=function(e){var t=f.props.beforeMaskedValueChange,n=f.maskOptions,a=n.mask,i=n.prefix;if(f.focused=!0,f.mounted=!0,a){if(f.value)getFilledLength$1(f.maskOptions,f.value)<f.maskOptions.mask.length&&f.setCursorToEnd();else {var r=formatValue$1(f.maskOptions,i),o=formatValue$1(f.maskOptions,r),s=getFilledLength$1(f.maskOptions,o),l=getRightEditablePosition$1(f.maskOptions,s),u={start:l,end:l};if(isFunction$1(t)){var c=t({value:o,selection:u},{value:f.value,selection:null},null,f.getBeforeMaskedValueChangeConfig());o=c.value,u=c.selection;}var h=o!==f.getInputValue();h&&f.setInputValue(o),h&&isFunction$1(f.props.onChange)&&f.props.onChange(e),f.setSelection(u.start,u.end);}f.runSaveSelectionLoop();}isFunction$1(f.props.onFocus)&&f.props.onFocus(e);},f.onBlur=function(e){var t=f.props.beforeMaskedValueChange,n=f.maskOptions.mask;if(f.stopSaveSelectionLoop(),f.focused=!1,n&&!f.props.alwaysShowMask&&isEmpty$1(f.maskOptions,f.value)){var a="";if(isFunction$1(t))a=t({value:a,selection:null},{value:f.value,selection:f.previousSelection},null,f.getBeforeMaskedValueChangeConfig()).value;var i=a!==f.getInputValue();i&&f.setInputValue(a),i&&isFunction$1(f.props.onChange)&&f.props.onChange(e);}isFunction$1(f.props.onBlur)&&f.props.onBlur(e);},f.onMouseDown=function(e){if(!f.focused&&document.addEventListener){f.mouseDownX=e.clientX,f.mouseDownY=e.clientY,f.mouseDownTime=(new Date).getTime();var r=function r(e){if(document.removeEventListener("mouseup",r),f.focused){var t=Math.abs(e.clientX-f.mouseDownX),n=Math.abs(e.clientY-f.mouseDownY),a=Math.max(t,n),i=(new Date).getTime()-f.mouseDownTime;(a<=10&&i<=200||a<=5&&i<=300)&&f.setCursorToEnd();}};document.addEventListener("mouseup",r);}isFunction$1(f.props.onMouseDown)&&f.props.onMouseDown(e);},f.onPaste=function(e){isFunction$1(f.props.onPaste)&&f.props.onPaste(e),e.defaultPrevented||(f.beforePasteState={value:f.getInputValue(),selection:f.getSelection()},f.setInputValue(""));},f.handleRef=function(e){null==f.props.children&&isFunction$1(f.props.inputRef)&&f.props.inputRef(e);};var t=e.mask,n=e.maskChar,a=e.formatChars,i=e.alwaysShowMask,r=e.beforeMaskedValueChange,o=e.defaultValue,s=e.value;f.maskOptions=parseMask$1(t,n,a),null==o&&(o=""),null==s&&(s=o);var l=getStringValue$1(s);if(f.maskOptions.mask&&(i||l)&&(l=formatValue$1(f.maskOptions,l),isFunction$1(r))){var u=e.value;null==e.value&&(u=o),l=r({value:l,selection:null},{value:u=getStringValue$1(u),selection:null},null,f.getBeforeMaskedValueChangeConfig()).value;}return f.value=l,f}_inheritsLoose$1(e,c);var t=e.prototype;return t.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=isWindowsPhoneBrowser$1(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value));},t.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,n=t.beforeMaskedValueChange,a=t.alwaysShowMask,i=t.mask,r=t.maskChar,o=t.formatChars,s=this.maskOptions,l=a||this.isFocused(),u=null!=this.props.value,c=u?getStringValue$1(this.props.value):this.value,h=e?e.start:null;if(this.maskOptions=parseMask$1(i,r,o),this.maskOptions.mask){!s.mask&&this.isFocused()&&this.runSaveSelectionLoop();var f=this.maskOptions.mask&&this.maskOptions.mask!==s.mask;if(s.mask||u||(c=this.getInputValue()),(f||this.maskOptions.mask&&(c||l))&&(c=formatValue$1(this.maskOptions,c)),f){var p=getFilledLength$1(this.maskOptions,c);(null===h||p<h)&&(h=isFilled$1(this.maskOptions,c)?p:getRightEditablePosition$1(this.maskOptions,p));}!this.maskOptions.mask||!isEmpty$1(this.maskOptions,c)||l||u&&this.props.value||(c="");var d={start:h,end:h};if(isFunction$1(n)){var m=n({value:c,selection:d},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=m.value,d=m.selection;}this.value=c;var g=this.getInputValue()!==this.value;g?(this.setInputValue(this.value),this.forceUpdate()):f&&this.forceUpdate();var v=!1;null!=d.start&&null!=d.end&&(v=!e||e.start!==d.start||e.end!==d.end),(v||g)&&this.setSelection(d.start,d.end);}else s.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate());},t.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&cancelDefer$1(this.selectionDeferId),this.stopSaveSelectionLoop();},t.render=function(){var t,e=this.props,n=(e.children),a=_objectWithoutPropertiesLoose$1(e,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(n){isFunction$1(n)||invariant_1(!1);var i=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],r=_extends$1({},a);i.forEach(function(e){return delete r[e]}),t=n(r),i.filter(function(e){return null!=t.props[e]&&t.props[e]!==a[e]}).length&&invariant_1(!1);}else t=React$1.createElement("input",_extends$1({ref:this.handleRef},a));var o={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(o.onChange=this.onChange,o.onPaste=this.onPaste,o.onMouseDown=this.onMouseDown),null!=a.value&&(o.value=this.value)),t=React$1.cloneElement(t,o)},e}(React$1.Component);var reactInputMask_production_min=InputElement$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant$1 = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var browser = invariant$1;

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning$1 = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning$1 = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning$1;

function _interopDefault$1 (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault$1(require$$0__default["default"]);

var invariant = _interopDefault$1(browser);
var warning = _interopDefault$1(warning_1);

function _defaults2(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _defaults2(subClass, superClass);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function setInputSelection(input, start, end) {
  if ('selectionStart' in input && 'selectionEnd' in input) {
    input.selectionStart = start;
    input.selectionEnd = end;
  } else {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveStart('character', start);
    range.moveEnd('character', end - start);
    range.select();
  }
}
function getInputSelection(input) {
  var start = 0;
  var end = 0;

  if ('selectionStart' in input && 'selectionEnd' in input) {
    start = input.selectionStart;
    end = input.selectionEnd;
  } else {
    var range = document.selection.createRange();

    if (range.parentElement() === input) {
      start = -range.moveStart('character', -input.value.length);
      end = -range.moveEnd('character', -input.value.length);
    }
  }

  return {
    start: start,
    end: end,
    length: end - start
  };
}

var defaultFormatChars = {
  '9': '[0-9]',
  'a': '[A-Za-z]',
  '*': '[A-Za-z0-9]'
};
var defaultMaskChar = '_';

function parseMask (mask, maskChar, formatChars) {
  var parsedMaskString = '';
  var prefix = '';
  var lastEditablePosition = null;
  var permanents = [];

  if (maskChar === undefined) {
    maskChar = defaultMaskChar;
  }

  if (formatChars == null) {
    formatChars = defaultFormatChars;
  }

  if (!mask || typeof mask !== 'string') {
    return {
      maskChar: maskChar,
      formatChars: formatChars,
      mask: null,
      prefix: null,
      lastEditablePosition: null,
      permanents: []
    };
  }

  var isPermanent = false;
  mask.split('').forEach(function (character) {
    if (!isPermanent && character === '\\') {
      isPermanent = true;
    } else {
      if (isPermanent || !formatChars[character]) {
        permanents.push(parsedMaskString.length);

        if (parsedMaskString.length === permanents.length - 1) {
          prefix += character;
        }
      } else {
        lastEditablePosition = parsedMaskString.length + 1;
      }

      parsedMaskString += character;
      isPermanent = false;
    }
  });
  return {
    maskChar: maskChar,
    formatChars: formatChars,
    prefix: prefix,
    mask: parsedMaskString,
    lastEditablePosition: lastEditablePosition,
    permanents: permanents
  };
}

/* eslint no-use-before-define: ["error", { functions: false }] */
function isPermanentCharacter(maskOptions, pos) {
  return maskOptions.permanents.indexOf(pos) !== -1;
}
function isAllowedCharacter(maskOptions, pos, character) {
  var mask = maskOptions.mask,
      formatChars = maskOptions.formatChars;

  if (!character) {
    return false;
  }

  if (isPermanentCharacter(maskOptions, pos)) {
    return mask[pos] === character;
  }

  var ruleChar = mask[pos];
  var charRule = formatChars[ruleChar];
  return new RegExp(charRule).test(character);
}
function isEmpty(maskOptions, value) {
  return value.split('').every(function (character, i) {
    return isPermanentCharacter(maskOptions, i) || !isAllowedCharacter(maskOptions, i, character);
  });
}
function getFilledLength(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    while (value.length > prefix.length && isPermanentCharacter(maskOptions, value.length - 1)) {
      value = value.slice(0, value.length - 1);
    }

    return value.length;
  }

  var filledLength = prefix.length;

  for (var i = value.length; i >= prefix.length; i--) {
    var character = value[i];
    var isEnteredCharacter = !isPermanentCharacter(maskOptions, i) && isAllowedCharacter(maskOptions, i, character);

    if (isEnteredCharacter) {
      filledLength = i + 1;
      break;
    }
  }

  return filledLength;
}
function isFilled(maskOptions, value) {
  return getFilledLength(maskOptions, value) === maskOptions.mask.length;
}
function formatValue(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    value = insertString(maskOptions, '', value, 0);

    if (value.length < prefix.length) {
      value = prefix;
    }

    while (value.length < mask.length && isPermanentCharacter(maskOptions, value.length)) {
      value += mask[value.length];
    }

    return value;
  }

  if (value) {
    var emptyValue = formatValue(maskOptions, '');
    return insertString(maskOptions, emptyValue, value, 0);
  }

  for (var i = 0; i < mask.length; i++) {
    if (isPermanentCharacter(maskOptions, i)) {
      value += mask[i];
    } else {
      value += maskChar;
    }
  }

  return value;
}
function clearRange(maskOptions, value, start, len) {
  var end = start + len;
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;
  var arrayValue = value.split('');

  if (!maskChar) {
    // remove any permanent chars after clear range, they will be added back by formatValue
    for (var i = end; i < arrayValue.length; i++) {
      if (isPermanentCharacter(maskOptions, i)) {
        arrayValue[i] = '';
      }
    }

    start = Math.max(prefix.length, start);
    arrayValue.splice(start, end - start);
    value = arrayValue.join('');
    return formatValue(maskOptions, value);
  }

  return arrayValue.map(function (character, i) {
    if (i < start || i >= end) {
      return character;
    }

    if (isPermanentCharacter(maskOptions, i)) {
      return mask[i];
    }

    return maskChar;
  }).join('');
}
function insertString(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;
  var arrayInsertStr = insertStr.split('');
  var isInputFilled = isFilled(maskOptions, value);

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  var isUsableCharacter = function isUsableCharacter(character, pos) {
    return !maskChar || !isPermanentCharacter(maskOptions, pos) || character !== maskChar;
  };

  if (!maskChar && insertPosition > value.length) {
    value += mask.slice(value.length, insertPosition);
  }

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      if (insertPosition >= value.length) {
        value += mask[insertPosition];
      }

      if (!isUsableCharacter(insertCharacter, insertPosition)) {
        return true;
      }

      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (!isAllowed) {
      return true;
    }

    if (insertPosition < value.length) {
      if (maskChar || isInputFilled || insertPosition < prefix.length) {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition + 1);
      } else {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition);
        value = formatValue(maskOptions, value);
      }
    } else if (!maskChar) {
      value += insertCharacter;
    }

    insertPosition++; // stop iteration if maximum value length reached

    return insertPosition < mask.length;
  });
  return value;
}
function getInsertStringLength(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar;
  var arrayInsertStr = insertStr.split('');
  var initialInsertPosition = insertPosition;

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (isAllowed) {
      insertPosition++;
    } // stop iteration if maximum value length reached


    return insertPosition < mask.length;
  });
  return insertPosition - initialInsertPosition;
}
function getLeftEditablePosition(maskOptions, pos) {
  for (var i = pos; i >= 0; --i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getRightEditablePosition(maskOptions, pos) {
  var mask = maskOptions.mask;

  for (var i = pos; i < mask.length; ++i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getStringValue(value) {
  return !value && value !== 0 ? '' : value + '';
}

function processChange(maskOptions, value, selection, previousValue, previousSelection) {
  var mask = maskOptions.mask,
      prefix = maskOptions.prefix,
      lastEditablePosition = maskOptions.lastEditablePosition;
  var newValue = value;
  var enteredString = '';
  var formattedEnteredStringLength = 0;
  var removedLength = 0;
  var cursorPosition = Math.min(previousSelection.start, selection.start);

  if (selection.end > previousSelection.start) {
    enteredString = newValue.slice(previousSelection.start, selection.end);
    formattedEnteredStringLength = getInsertStringLength(maskOptions, previousValue, enteredString, cursorPosition);

    if (!formattedEnteredStringLength) {
      removedLength = 0;
    } else {
      removedLength = previousSelection.length;
    }
  } else if (newValue.length < previousValue.length) {
    removedLength = previousValue.length - newValue.length;
  }

  newValue = previousValue;

  if (removedLength) {
    if (removedLength === 1 && !previousSelection.length) {
      var deleteFromRight = previousSelection.start === selection.start;
      cursorPosition = deleteFromRight ? getRightEditablePosition(maskOptions, selection.start) : getLeftEditablePosition(maskOptions, selection.start);
    }

    newValue = clearRange(maskOptions, newValue, cursorPosition, removedLength);
  }

  newValue = insertString(maskOptions, newValue, enteredString, cursorPosition);
  cursorPosition = cursorPosition + formattedEnteredStringLength;

  if (cursorPosition >= mask.length) {
    cursorPosition = mask.length;
  } else if (cursorPosition < prefix.length && !formattedEnteredStringLength) {
    cursorPosition = prefix.length;
  } else if (cursorPosition >= prefix.length && cursorPosition < lastEditablePosition && formattedEnteredStringLength) {
    cursorPosition = getRightEditablePosition(maskOptions, cursorPosition);
  }

  newValue = formatValue(maskOptions, newValue);

  if (!enteredString) {
    enteredString = null;
  }

  return {
    value: newValue,
    enteredString: enteredString,
    selection: {
      start: cursorPosition,
      end: cursorPosition
    }
  };
}

function isWindowsPhoneBrowser() {
  var windows = new RegExp('windows', 'i');
  var phone = new RegExp('phone', 'i');
  var ua = navigator.userAgent;
  return windows.test(ua) && phone.test(ua);
}

function isFunction(value) {
  return typeof value === 'function';
}

function getRequestAnimationFrame() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
}

function getCancelAnimationFrame() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
}

function defer(fn) {
  var hasCancelAnimationFrame = !!getCancelAnimationFrame();
  var deferFn;

  if (hasCancelAnimationFrame) {
    deferFn = getRequestAnimationFrame();
  } else {
    deferFn = function deferFn() {
      return setTimeout(fn, 1000 / 60);
    };
  }

  return deferFn(fn);
}
function cancelDefer(deferId) {
  var cancelFn = getCancelAnimationFrame() || clearTimeout;
  cancelFn(deferId);
}

var InputElement =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InputElement, _React$Component);

  function InputElement(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.focused = false;
    _this.mounted = false;
    _this.previousSelection = null;
    _this.selectionDeferId = null;
    _this.saveSelectionLoopDeferId = null;

    _this.saveSelectionLoop = function () {
      _this.previousSelection = _this.getSelection();
      _this.saveSelectionLoopDeferId = defer(_this.saveSelectionLoop);
    };

    _this.runSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId === null) {
        _this.saveSelectionLoop();
      }
    };

    _this.stopSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId !== null) {
        cancelDefer(_this.saveSelectionLoopDeferId);
        _this.saveSelectionLoopDeferId = null;
        _this.previousSelection = null;
      }
    };

    _this.getInputDOMNode = function () {
      if (!_this.mounted) {
        return null;
      }

      var input = reactDom__default["default"].findDOMNode(_assertThisInitialized(_assertThisInitialized(_this)));
      var isDOMNode = typeof window !== 'undefined' && input instanceof window.Element; // workaround for react-test-renderer
      // https://github.com/sanniassin/react-input-mask/issues/147

      if (input && !isDOMNode) {
        return null;
      }

      if (input.nodeName !== 'INPUT') {
        input = input.querySelector('input');
      }

      if (!input) {
        throw new Error('react-input-mask: inputComponent doesn\'t contain input node');
      }

      return input;
    };

    _this.getInputValue = function () {
      var input = _this.getInputDOMNode();

      if (!input) {
        return null;
      }

      return input.value;
    };

    _this.setInputValue = function (value) {
      var input = _this.getInputDOMNode();

      if (!input) {
        return;
      }

      _this.value = value;
      input.value = value;
    };

    _this.setCursorToEnd = function () {
      var filledLength = getFilledLength(_this.maskOptions, _this.value);
      var pos = getRightEditablePosition(_this.maskOptions, filledLength);

      if (pos !== null) {
        _this.setCursorPosition(pos);
      }
    };

    _this.setSelection = function (start, end, options) {
      if (options === void 0) {
        options = {};
      }

      var input = _this.getInputDOMNode();

      var isFocused = _this.isFocused(); // don't change selection on unfocused input
      // because Safari sets focus on selection change (#154)


      if (!input || !isFocused) {
        return;
      }

      var _options = options,
          deferred = _options.deferred;

      if (!deferred) {
        setInputSelection(input, start, end);
      }

      if (_this.selectionDeferId !== null) {
        cancelDefer(_this.selectionDeferId);
      } // deferred selection update is required for pre-Lollipop Android browser,
      // but for consistent behavior we do it for all browsers


      _this.selectionDeferId = defer(function () {
        _this.selectionDeferId = null;
        setInputSelection(input, start, end);
      });
      _this.previousSelection = {
        start: start,
        end: end,
        length: Math.abs(end - start)
      };
    };

    _this.getSelection = function () {
      var input = _this.getInputDOMNode();

      return getInputSelection(input);
    };

    _this.getCursorPosition = function () {
      return _this.getSelection().start;
    };

    _this.setCursorPosition = function (pos) {
      _this.setSelection(pos, pos);
    };

    _this.isFocused = function () {
      return _this.focused;
    };

    _this.getBeforeMaskedValueChangeConfig = function () {
      var _this$maskOptions = _this.maskOptions,
          mask = _this$maskOptions.mask,
          maskChar = _this$maskOptions.maskChar,
          permanents = _this$maskOptions.permanents,
          formatChars = _this$maskOptions.formatChars;
      var alwaysShowMask = _this.props.alwaysShowMask;
      return {
        mask: mask,
        maskChar: maskChar,
        permanents: permanents,
        alwaysShowMask: !!alwaysShowMask,
        formatChars: formatChars
      };
    };

    _this.isInputAutofilled = function (value, selection, previousValue, previousSelection) {
      var input = _this.getInputDOMNode(); // only check for positive match because it will be false negative
      // in case of autofill simulation in tests
      //
      // input.matches throws an exception if selector isn't supported


      try {
        if (input.matches(':-webkit-autofill')) {
          return true;
        }
      } catch (e) {} // if input isn't focused then change event must have been triggered
      // either by autofill or event simulation in tests


      if (!_this.focused) {
        return true;
      } // if cursor has moved to the end while previousSelection forbids it
      // then it must be autofill


      return previousSelection.end < previousValue.length && selection.end === value.length;
    };

    _this.onChange = function (event) {
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          beforePasteState = _assertThisInitialize.beforePasteState;

      var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
          previousSelection = _assertThisInitialize2.previousSelection;

      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;

      var value = _this.getInputValue();

      var previousValue = _this.value;

      var selection = _this.getSelection(); // autofill replaces entire value, ignore old one
      // https://github.com/sanniassin/react-input-mask/issues/113


      if (_this.isInputAutofilled(value, selection, previousValue, previousSelection)) {
        previousValue = formatValue(_this.maskOptions, '');
        previousSelection = {
          start: 0,
          end: 0,
          length: 0
        };
      } // set value and selection as if we haven't
      // cleared input in onPaste handler


      if (beforePasteState) {
        previousSelection = beforePasteState.selection;
        previousValue = beforePasteState.value;
        selection = {
          start: previousSelection.start + value.length,
          end: previousSelection.start + value.length,
          length: 0
        };
        value = previousValue.slice(0, previousSelection.start) + value + previousValue.slice(previousSelection.end);
        _this.beforePasteState = null;
      }

      var changedState = processChange(_this.maskOptions, value, selection, previousValue, previousSelection);
      var enteredString = changedState.enteredString;
      var newSelection = changedState.selection;
      var newValue = changedState.value;

      if (isFunction(beforeMaskedValueChange)) {
        var modifiedValue = beforeMaskedValueChange({
          value: newValue,
          selection: newSelection
        }, {
          value: previousValue,
          selection: previousSelection
        }, enteredString, _this.getBeforeMaskedValueChangeConfig());
        newValue = modifiedValue.value;
        newSelection = modifiedValue.selection;
      }

      _this.setInputValue(newValue);

      if (isFunction(_this.props.onChange)) {
        _this.props.onChange(event);
      }

      if (_this.isWindowsPhoneBrowser) {
        _this.setSelection(newSelection.start, newSelection.end, {
          deferred: true
        });
      } else {
        _this.setSelection(newSelection.start, newSelection.end);
      }
    };

    _this.onFocus = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var _this$maskOptions2 = _this.maskOptions,
          mask = _this$maskOptions2.mask,
          prefix = _this$maskOptions2.prefix;
      _this.focused = true; // if autoFocus is set, onFocus triggers before componentDidMount

      _this.mounted = true;

      if (mask) {
        if (!_this.value) {
          var emptyValue = formatValue(_this.maskOptions, prefix);
          var newValue = formatValue(_this.maskOptions, emptyValue);
          var filledLength = getFilledLength(_this.maskOptions, newValue);
          var cursorPosition = getRightEditablePosition(_this.maskOptions, filledLength);
          var newSelection = {
            start: cursorPosition,
            end: cursorPosition
          };

          if (isFunction(beforeMaskedValueChange)) {
            var modifiedValue = beforeMaskedValueChange({
              value: newValue,
              selection: newSelection
            }, {
              value: _this.value,
              selection: null
            }, null, _this.getBeforeMaskedValueChangeConfig());
            newValue = modifiedValue.value;
            newSelection = modifiedValue.selection;
          }

          var isInputValueChanged = newValue !== _this.getInputValue();

          if (isInputValueChanged) {
            _this.setInputValue(newValue);
          }

          if (isInputValueChanged && isFunction(_this.props.onChange)) {
            _this.props.onChange(event);
          }

          _this.setSelection(newSelection.start, newSelection.end);
        } else if (getFilledLength(_this.maskOptions, _this.value) < _this.maskOptions.mask.length) {
          _this.setCursorToEnd();
        }

        _this.runSaveSelectionLoop();
      }

      if (isFunction(_this.props.onFocus)) {
        _this.props.onFocus(event);
      }
    };

    _this.onBlur = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var mask = _this.maskOptions.mask;

      _this.stopSaveSelectionLoop();

      _this.focused = false;

      if (mask && !_this.props.alwaysShowMask && isEmpty(_this.maskOptions, _this.value)) {
        var newValue = '';

        if (isFunction(beforeMaskedValueChange)) {
          var modifiedValue = beforeMaskedValueChange({
            value: newValue,
            selection: null
          }, {
            value: _this.value,
            selection: _this.previousSelection
          }, null, _this.getBeforeMaskedValueChangeConfig());
          newValue = modifiedValue.value;
        }

        var isInputValueChanged = newValue !== _this.getInputValue();

        if (isInputValueChanged) {
          _this.setInputValue(newValue);
        }

        if (isInputValueChanged && isFunction(_this.props.onChange)) {
          _this.props.onChange(event);
        }
      }

      if (isFunction(_this.props.onBlur)) {
        _this.props.onBlur(event);
      }
    };

    _this.onMouseDown = function (event) {
      // tiny unintentional mouse movements can break cursor
      // position on focus, so we have to restore it in that case
      //
      // https://github.com/sanniassin/react-input-mask/issues/108
      if (!_this.focused && document.addEventListener) {
        _this.mouseDownX = event.clientX;
        _this.mouseDownY = event.clientY;
        _this.mouseDownTime = new Date().getTime();

        var mouseUpHandler = function mouseUpHandler(mouseUpEvent) {
          document.removeEventListener('mouseup', mouseUpHandler);

          if (!_this.focused) {
            return;
          }

          var deltaX = Math.abs(mouseUpEvent.clientX - _this.mouseDownX);
          var deltaY = Math.abs(mouseUpEvent.clientY - _this.mouseDownY);
          var axisDelta = Math.max(deltaX, deltaY);

          var timeDelta = new Date().getTime() - _this.mouseDownTime;

          if (axisDelta <= 10 && timeDelta <= 200 || axisDelta <= 5 && timeDelta <= 300) {
            _this.setCursorToEnd();
          }
        };

        document.addEventListener('mouseup', mouseUpHandler);
      }

      if (isFunction(_this.props.onMouseDown)) {
        _this.props.onMouseDown(event);
      }
    };

    _this.onPaste = function (event) {
      if (isFunction(_this.props.onPaste)) {
        _this.props.onPaste(event);
      } // event.clipboardData might not work in Android browser
      // cleaning input to get raw text inside onChange handler


      if (!event.defaultPrevented) {
        _this.beforePasteState = {
          value: _this.getInputValue(),
          selection: _this.getSelection()
        };

        _this.setInputValue('');
      }
    };

    _this.handleRef = function (ref) {
      if (_this.props.children == null && isFunction(_this.props.inputRef)) {
        _this.props.inputRef(ref);
      }
    };

    var _mask = props.mask,
        _maskChar = props.maskChar,
        _formatChars = props.formatChars,
        _alwaysShowMask = props.alwaysShowMask,
        _beforeMaskedValueChange = props.beforeMaskedValueChange;
    var defaultValue = props.defaultValue,
        _value = props.value;
    _this.maskOptions = parseMask(_mask, _maskChar, _formatChars);

    if (defaultValue == null) {
      defaultValue = '';
    }

    if (_value == null) {
      _value = defaultValue;
    }

    var _newValue = getStringValue(_value);

    if (_this.maskOptions.mask && (_alwaysShowMask || _newValue)) {
      _newValue = formatValue(_this.maskOptions, _newValue);

      if (isFunction(_beforeMaskedValueChange)) {
        var oldValue = props.value;

        if (props.value == null) {
          oldValue = defaultValue;
        }

        oldValue = getStringValue(oldValue);

        var modifiedValue = _beforeMaskedValueChange({
          value: _newValue,
          selection: null
        }, {
          value: oldValue,
          selection: null
        }, null, _this.getBeforeMaskedValueChangeConfig());

        _newValue = modifiedValue.value;
      }
    }

    _this.value = _newValue;
    return _this;
  }

  var _proto = InputElement.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true; // workaround for react-test-renderer
    // https://github.com/sanniassin/react-input-mask/issues/147

    if (!this.getInputDOMNode()) {
      return;
    }

    this.isWindowsPhoneBrowser = isWindowsPhoneBrowser();

    if (this.maskOptions.mask && this.getInputValue() !== this.value) {
      this.setInputValue(this.value);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var previousSelection = this.previousSelection;
    var _this$props = this.props,
        beforeMaskedValueChange = _this$props.beforeMaskedValueChange,
        alwaysShowMask = _this$props.alwaysShowMask,
        mask = _this$props.mask,
        maskChar = _this$props.maskChar,
        formatChars = _this$props.formatChars;
    var previousMaskOptions = this.maskOptions;
    var showEmpty = alwaysShowMask || this.isFocused();
    var hasValue = this.props.value != null;
    var newValue = hasValue ? getStringValue(this.props.value) : this.value;
    var cursorPosition = previousSelection ? previousSelection.start : null;
    this.maskOptions = parseMask(mask, maskChar, formatChars);

    if (!this.maskOptions.mask) {
      if (previousMaskOptions.mask) {
        this.stopSaveSelectionLoop(); // render depends on this.maskOptions and this.value,
        // call forceUpdate to keep it in sync

        this.forceUpdate();
      }

      return;
    } else if (!previousMaskOptions.mask && this.isFocused()) {
      this.runSaveSelectionLoop();
    }

    var isMaskChanged = this.maskOptions.mask && this.maskOptions.mask !== previousMaskOptions.mask;

    if (!previousMaskOptions.mask && !hasValue) {
      newValue = this.getInputValue();
    }

    if (isMaskChanged || this.maskOptions.mask && (newValue || showEmpty)) {
      newValue = formatValue(this.maskOptions, newValue);
    }

    if (isMaskChanged) {
      var filledLength = getFilledLength(this.maskOptions, newValue);

      if (cursorPosition === null || filledLength < cursorPosition) {
        if (isFilled(this.maskOptions, newValue)) {
          cursorPosition = filledLength;
        } else {
          cursorPosition = getRightEditablePosition(this.maskOptions, filledLength);
        }
      }
    }

    if (this.maskOptions.mask && isEmpty(this.maskOptions, newValue) && !showEmpty && (!hasValue || !this.props.value)) {
      newValue = '';
    }

    var newSelection = {
      start: cursorPosition,
      end: cursorPosition
    };

    if (isFunction(beforeMaskedValueChange)) {
      var modifiedValue = beforeMaskedValueChange({
        value: newValue,
        selection: newSelection
      }, {
        value: this.value,
        selection: this.previousSelection
      }, null, this.getBeforeMaskedValueChangeConfig());
      newValue = modifiedValue.value;
      newSelection = modifiedValue.selection;
    }

    this.value = newValue;
    var isValueChanged = this.getInputValue() !== this.value; // render depends on this.maskOptions and this.value,
    // call forceUpdate to keep it in sync

    if (isValueChanged) {
      this.setInputValue(this.value);
      this.forceUpdate();
    } else if (isMaskChanged) {
      this.forceUpdate();
    }

    var isSelectionChanged = false;

    if (newSelection.start != null && newSelection.end != null) {
      isSelectionChanged = !previousSelection || previousSelection.start !== newSelection.start || previousSelection.end !== newSelection.end;
    }

    if (isSelectionChanged || isValueChanged) {
      this.setSelection(newSelection.start, newSelection.end);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;

    if (this.selectionDeferId !== null) {
      cancelDefer(this.selectionDeferId);
    }

    this.stopSaveSelectionLoop();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        mask = _this$props2.mask,
        maskChar = _this$props2.maskChar,
        formatChars = _this$props2.formatChars,
        inputRef = _this$props2.inputRef,
        children = _this$props2.children,
        restProps = _objectWithoutPropertiesLoose(_this$props2, ["mask", "alwaysShowMask", "maskChar", "formatChars", "inputRef", "beforeMaskedValueChange", "children"]);

    var inputElement;
    process.env.NODE_ENV !== "production" ? warning( // parse mask to test against actual mask prop as this.maskOptions
    // will be updated later in componentDidUpdate
    !restProps.maxLength || !parseMask(mask, maskChar, formatChars).mask, 'react-input-mask: maxLength property shouldn\'t be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length.') : void 0;

    if (children) {
      !isFunction(children) ? process.env.NODE_ENV !== "production" ? invariant(false, 'react-input-mask: children must be a function') : invariant(false) : void 0;
      var controlledProps = ['onChange', 'onPaste', 'onMouseDown', 'onFocus', 'onBlur', 'value', 'disabled', 'readOnly'];

      var childrenProps = _extends({}, restProps);

      controlledProps.forEach(function (propId) {
        return delete childrenProps[propId];
      });
      inputElement = children(childrenProps);
      var conflictProps = controlledProps.filter(function (propId) {
        return inputElement.props[propId] != null && inputElement.props[propId] !== restProps[propId];
      });
      !!conflictProps.length ? process.env.NODE_ENV !== "production" ? invariant(false, "react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: " + conflictProps.join(', ')) : invariant(false) : void 0;
      process.env.NODE_ENV !== "production" ? warning(!inputRef, 'react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead') : void 0;
    } else {
      inputElement = React.createElement("input", _extends({
        ref: this.handleRef
      }, restProps));
    }

    var changedProps = {
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };

    if (this.maskOptions.mask) {
      if (!restProps.disabled && !restProps.readOnly) {
        changedProps.onChange = this.onChange;
        changedProps.onPaste = this.onPaste;
        changedProps.onMouseDown = this.onMouseDown;
      }

      if (restProps.value != null) {
        changedProps.value = this.value;
      }
    }

    inputElement = React.cloneElement(inputElement, changedProps);
    return inputElement;
  };

  return InputElement;
}(React.Component);

var reactInputMask_development = InputElement;

var reactInputMask = createCommonjsModule(function (module) {
if (process.env.NODE_ENV === 'production') {
  module.exports = reactInputMask_production_min;
} else {
  module.exports = reactInputMask_development;
}
});

var _templateObject$c;
var Container$7 = styled__default["default"].div(_templateObject$c || (_templateObject$c = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  display: flex;\n  flex-direction: column;\n\n  input {\n    outline: none;\n    padding: 7px 15px;\n    border-radius: 20px;\n    border: 1px solid\n      ", ";\n    color: ", ";\n    cursor: pointer;\n    font-weight: 500;\n    background-color: ", ";\n    font-size: ", ";\n\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  span {\n    font-size: ", ";\n    color: ", ";\n    margin-left: 15px;\n    margin-bottom: 3px;\n  }\n\n  .calendar-icon {\n    position: relative;\n    margin-left: -25px;\n    font-size: ", ";\n    color: ", ";\n  }\n\n  .react-datepicker-popper[data-placement^='bottom']\n    .react-datepicker__triangle,\n  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,\n  .react-datepicker__year-read-view--down-arrow,\n  .react-datepicker__month-read-view--down-arrow,\n  .react-datepicker__month-year-read-view--down-arrow {\n    margin-left: -8px !important;\n    position: absolute !important;\n  }\n  .react-datepicker-popper[data-placement^='bottom']\n    .react-datepicker__triangle,\n  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,\n  .react-datepicker__year-read-view--down-arrow,\n  .react-datepicker__month-read-view--down-arrow,\n  .react-datepicker__month-year-read-view--down-arrow,\n  .react-datepicker-popper[data-placement^='bottom']\n    .react-datepicker__triangle::before,\n  .react-datepicker-popper[data-placement^='top']\n    .react-datepicker__triangle::before,\n  .react-datepicker__year-read-view--down-arrow::before,\n  .react-datepicker__month-read-view--down-arrow::before,\n  .react-datepicker__month-year-read-view--down-arrow::before {\n    box-sizing: content-box !important;\n    position: absolute !important;\n    border: 8px solid transparent !important;\n    height: 0 !important;\n    width: 1px !important;\n  }\n\n  .react-datepicker-popper[data-placement^='bottom']\n    .react-datepicker__triangle::before,\n  .react-datepicker-popper[data-placement^='top']\n    .react-datepicker__triangle::before,\n  .react-datepicker__year-read-view--down-arrow::before,\n  .react-datepicker__month-read-view--down-arrow::before,\n  .react-datepicker__month-year-read-view--down-arrow::before {\n    content: '' !important;\n    z-index: -1 !important;\n    border-width: 8px !important;\n    left: -8px !important;\n    border-bottom-color: #291f1f !important;\n  }\n\n  .react-datepicker-popper[data-placement^='bottom']\n    .react-datepicker__triangle {\n    top: 0 !important;\n    margin-top: -8px !important;\n  }\n\n  .react-datepicker-popper[data-placement^='bottom']\n    .react-datepicker__triangle,\n  .react-datepicker-popper[data-placement^='bottom']\n    .react-datepicker__triangle::before {\n    border-top: none !important;\n    border-bottom-color: #ffffff !important;\n  }\n\n  .react-datepicker-popper[data-placement^='bottom']\n    .react-datepicker__triangle::before {\n    top: -1px !important;\n    border-bottom-color: #aeaeae !important;\n  }\n\n  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,\n  .react-datepicker__year-read-view--down-arrow,\n  .react-datepicker__month-read-view--down-arrow,\n  .react-datepicker__month-year-read-view--down-arrow {\n    bottom: 0 !important;\n    margin-bottom: -8px !important;\n  }\n\n  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,\n  .react-datepicker__year-read-view--down-arrow,\n  .react-datepicker__month-read-view--down-arrow,\n  .react-datepicker__month-year-read-view--down-arrow,\n  .react-datepicker-popper[data-placement^='top']\n    .react-datepicker__triangle::before,\n  .react-datepicker__year-read-view--down-arrow::before,\n  .react-datepicker__month-read-view--down-arrow::before,\n  .react-datepicker__month-year-read-view--down-arrow::before {\n    border-bottom: none !important;\n    border-top-color: #fff !important;\n  }\n\n  .react-datepicker-popper[data-placement^='top']\n    .react-datepicker__triangle::before,\n  .react-datepicker__year-read-view--down-arrow::before,\n  .react-datepicker__month-read-view--down-arrow::before,\n  .react-datepicker__month-year-read-view--down-arrow::before {\n    bottom: -1px !important;\n    border-top-color: #aeaeae !important;\n  }\n\n  .react-datepicker-wrapper {\n    display: inline-block;\n    padding: 0;\n    border: 0;\n  }\n\n  .react-datepicker {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;\n    font-size: 0.8rem !important;\n    background-color: #fff !important;\n    color: #000 !important;\n    border: 1px solid #aeaeae !important;\n    border-radius: 20px !important;\n    display: inline-block !important;\n    position: relative !important;\n  }\n\n  .react-datepicker--time-only .react-datepicker__triangle {\n    left: 35px !important;\n  }\n\n  .react-datepicker--time-only .react-datepicker__time-container {\n    border-left: 0 !important;\n  }\n\n  .react-datepicker--time-only .react-datepicker__time,\n  .react-datepicker--time-only .react-datepicker__time-box {\n    border-bottom-left-radius: 20px !important;\n    border-bottom-right-radius: 20px !important;\n  }\n\n  .react-datepicker__triangle {\n    position: absolute !important;\n    left: 50px !important;\n  }\n\n  .react-datepicker-popper {\n    z-index: 1 !important;\n  }\n\n  .react-datepicker-popper[data-placement^='bottom'] {\n    margin-top: 10px !important;\n  }\n\n  .react-datepicker-popper[data-placement='bottom-end']\n    .react-datepicker__triangle,\n  .react-datepicker-popper[data-placement='top-end']\n    .react-datepicker__triangle {\n    left: auto !important;\n    right: 50px !important;\n  }\n\n  .react-datepicker-popper[data-placement^='top'] {\n    margin-bottom: 10px !important;\n  }\n\n  .react-datepicker-popper[data-placement^='right'] {\n    margin-left: 8px !important;\n  }\n\n  .react-datepicker-popper[data-placement^='right']\n    .react-datepicker__triangle {\n    left: auto !important;\n    right: 42px !important;\n  }\n\n  .react-datepicker-popper[data-placement^='left'] {\n    margin-right: 8px !important;\n  }\n\n  .react-datepicker-popper[data-placement^='left'] .react-datepicker__triangle {\n    left: 42px !important;\n    right: auto !important;\n  }\n\n  .react-datepicker__header {\n    text-align: center !important;\n    background-color: #ffffff !important;\n    border-bottom: 1px solid #aeaeae !important;\n    border-top-left-radius: 20px !important;\n    padding-top: 18px !important;\n    position: relative !important;\n    padding-bottom: 10px !important;\n  }\n\n  .react-datepicker__header--time {\n    padding-bottom: 8px !important;\n    padding-left: 5px !important;\n    padding-right: 5px !important;\n  }\n\n  .react-datepicker__header--time:not(.react-datepicker__header--time--only) {\n    border-top-left-radius: 0 !important;\n  }\n\n  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {\n    border-top-right-radius: 20px !important;\n  }\n\n  .react-datepicker__year-dropdown-container--select,\n  .react-datepicker__month-dropdown-container--select,\n  .react-datepicker__month-year-dropdown-container--select,\n  .react-datepicker__year-dropdown-container--scroll,\n  .react-datepicker__month-dropdown-container--scroll,\n  .react-datepicker__month-year-dropdown-container--scroll {\n    display: inline-block !important;\n    margin: 0 2px !important;\n  }\n\n  .react-datepicker__current-month,\n  .react-datepicker-time__header,\n  .react-datepicker-year-header {\n    margin-top: 0 !important;\n    color: #707070 !important;\n    font-weight: bold !important;\n    font-size: 0.944rem !important;\n  }\n\n  .react-datepicker-time__header {\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n    overflow: hidden !important;\n  }\n\n  .react-datepicker__navigation {\n    background: none !important;\n    line-height: 1.7rem !important;\n    text-align: center !important;\n    cursor: pointer !important;\n    position: absolute !important;\n    top: 20px !important;\n    width: 0 !important;\n    padding: 0 !important;\n    border: 0.5rem solid transparent !important;\n    z-index: 1 !important;\n    height: 15px !important;\n    width: 20px !important;\n    text-indent: -999em !important;\n    overflow: hidden !important;\n    outline: none !important;\n  }\n\n  .react-datepicker__navigation--previous {\n    left: 10px !important;\n    border-right-color: #9b4dee !important;\n  }\n\n  .react-datepicker__navigation--previous:hover {\n    border-right-color: rgba(155, 77, 238, 0.2) !important;\n  }\n\n  .react-datepicker__navigation--previous--disabled,\n  .react-datepicker__navigation--previous--disabled:hover {\n    border-right-color: rgba(155, 77, 238, 0.2) !important;\n    cursor: default !important;\n  }\n\n  .react-datepicker__navigation--next {\n    right: 10px !important;\n    border-left-color: #9b4dee !important;\n  }\n\n  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\n    right: 95px !important;\n  }\n\n  .react-datepicker__navigation--next:hover {\n    border-left-color: rgba(155, 77, 238, 0.2) !important;\n  }\n\n  .react-datepicker__navigation--next--disabled,\n  .react-datepicker__navigation--next--disabled:hover {\n    border-left-color: rgba(155, 77, 238, 0.2) !important;\n    cursor: default !important;\n  }\n\n  .react-datepicker__navigation--years {\n    position: relative !important;\n    top: 0 !important;\n    display: block !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n\n  .react-datepicker__navigation--years-previous {\n    top: 4px !important;\n    border-top-color: #ccc !important;\n  }\n\n  .react-datepicker__navigation--years-previous:hover {\n    border-top-color: #b3b3b3 !important;\n  }\n\n  .react-datepicker__navigation--years-upcoming {\n    top: -4px !important;\n    border-bottom-color: #ccc !important;\n  }\n\n  .react-datepicker__navigation--years-upcoming:hover {\n    border-bottom-color: #b3b3b3 !important;\n  }\n\n  .react-datepicker__month-container {\n    float: left !important;\n  }\n\n  .react-datepicker__year {\n    margin: 0.4rem !important;\n    text-align: center !important;\n  }\n\n  .react-datepicker__year-wrapper {\n    display: flex !important;\n    flex-wrap: wrap !important;\n    max-width: 180px !important;\n  }\n\n  .react-datepicker__year .react-datepicker__year-text {\n    display: inline-block !important;\n    width: 4rem !important;\n    margin: 2px !important;\n  }\n\n  .react-datepicker__month {\n    margin: 10px 0.4rem !important;\n    text-align: center !important;\n  }\n\n  .react-datepicker__month .react-datepicker__month-text,\n  .react-datepicker__month .react-datepicker__quarter-text {\n    display: inline-block !important;\n    width: 4rem !important;\n    margin: 2px !important;\n  }\n\n  .react-datepicker__input-time-container {\n    clear: both !important;\n    width: 100% !important;\n    float: left !important;\n    margin: 5px 0 10px 15px !important;\n    text-align: left !important;\n  }\n\n  .react-datepicker__input-time-container .react-datepicker-time__caption {\n    display: inline-block !important;\n    color: #707070 !important;\n  }\n\n  .react-datepicker__input-time-container\n    .react-datepicker-time__input-container {\n    display: inline-block !important;\n  }\n\n  .react-datepicker__input-time-container\n    .react-datepicker-time__input-container\n    .react-datepicker-time__input {\n    display: inline-block !important;\n    margin-left: 10px !important;\n  }\n\n  .react-datepicker__input-time-container\n    .react-datepicker-time__input-container\n    .react-datepicker-time__input\n    input {\n    width: 85px !important;\n    border-radius: 20px !important;\n    padding: 5px 10px !important;\n    outline: none !important;\n    border-style: solid !important;\n    border-width: 1px !important;\n    border-color: #707070 !important;\n  }\n\n  .react-datepicker__input-time-container\n    .react-datepicker-time__input-container\n    .react-datepicker-time__input\n    input[type='time']::-webkit-inner-spin-button,\n  .react-datepicker__input-time-container\n    .react-datepicker-time__input-container\n    .react-datepicker-time__input\n    input[type='time']::-webkit-outer-spin-button {\n    -webkit-appearance: none !important;\n    margin: 0 !important;\n  }\n\n  .react-datepicker__input-time-container\n    .react-datepicker-time__input-container\n    .react-datepicker-time__input\n    input[type='time'] {\n    -moz-appearance: textfield !important;\n  }\n\n  .react-datepicker__input-time-container\n    .react-datepicker-time__input-container\n    .react-datepicker-time__delimiter {\n    margin-left: 5px !important;\n    display: inline-block !important;\n  }\n\n  .react-datepicker__time-container {\n    float: right !important;\n    border-left: 1px solid #aeaeae !important;\n    width: 85px !important;\n  }\n\n  .react-datepicker__time-container--with-today-button {\n    display: inline !important;\n    border: 1px solid #aeaeae !important;\n    border-radius: 0.3rem !important;\n    position: absolute !important;\n    right: -72px !important;\n    top: 0 !important;\n  }\n\n  .react-datepicker__time-container .react-datepicker__time {\n    position: relative !important;\n    background: white !important;\n    border-bottom-right-radius: 20px !important;\n  }\n\n  .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box {\n    width: 85px !important;\n    overflow-x: hidden !important;\n    margin: 0 auto !important;\n    text-align: center !important;\n    border-bottom-right-radius: 20px !important;\n  }\n\n  .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list {\n    list-style: none !important;\n    margin: 0 !important;\n    height: calc(195px + (1.7rem / 2)) !important;\n    overflow-y: scroll !important;\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n    width: 100% !important;\n    box-sizing: content-box !important;\n  }\n\n  .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list\n    li.react-datepicker__time-list-item {\n    height: 30px !important;\n    padding: 5px 10px !important;\n    white-space: nowrap !important;\n    color: #707070 !important;\n  }\n\n  .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list\n    li.react-datepicker__time-list-item:hover {\n    cursor: pointer !important;\n    background-color: #f0f0f0 !important;\n  }\n\n  .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list\n    li.react-datepicker__time-list-item--selected {\n    background-color: #9b4dee !important;\n    color: white !important;\n    font-weight: bold !important;\n  }\n\n  .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list\n    li.react-datepicker__time-list-item--selected:hover {\n    background-color: #9b4dee !important;\n  }\n\n  .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list\n    li.react-datepicker__time-list-item--disabled {\n    color: #ccc !important;\n  }\n\n  .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list\n    li.react-datepicker__time-list-item--disabled:hover {\n    cursor: default !important;\n    background-color: transparent !important;\n  }\n\n  .react-datepicker__week-number {\n    color: #ccc !important;\n    display: inline-block !important;\n    width: 1.7rem !important;\n    line-height: 1.7rem !important;\n    text-align: center !important;\n    margin: 0.166rem !important;\n  }\n\n  .react-datepicker__week-number.react-datepicker__week-number--clickable {\n    cursor: pointer !important;\n  }\n\n  .react-datepicker__week-number.react-datepicker__week-number--clickable:hover {\n    border-radius: 0.3rem !important;\n    background-color: #f0f0f0 !important;\n  }\n\n  .react-datepicker__day-names,\n  .react-datepicker__week {\n    white-space: nowrap !important;\n    margin-top: 10px !important;\n  }\n\n  .react-datepicker__day-name,\n  .react-datepicker__day,\n  .react-datepicker__time-name {\n    color: #707070 !important;\n    display: inline-block !important;\n    width: 1.7rem !important;\n    line-height: 1.7rem !important;\n    text-align: center !important;\n    margin: 0.166rem !important;\n    outline: none !important;\n  }\n\n  .react-datepicker__month--selected,\n  .react-datepicker__month--in-selecting-range,\n  .react-datepicker__month--in-range,\n  .react-datepicker__quarter--selected,\n  .react-datepicker__quarter--in-selecting-range,\n  .react-datepicker__quarter--in-range {\n    border-radius: 10px !important;\n    background-color: #9b4dee !important;\n    color: #fff !important;\n  }\n\n  .react-datepicker__month--selected:hover,\n  .react-datepicker__month--in-selecting-range:hover,\n  .react-datepicker__month--in-range:hover,\n  .react-datepicker__quarter--selected:hover,\n  .react-datepicker__quarter--in-selecting-range:hover,\n  .react-datepicker__quarter--in-range:hover {\n    background-color: rgba(155, 77, 238, 0.8) !important;\n  }\n\n  .react-datepicker__month--disabled,\n  .react-datepicker__quarter--disabled {\n    color: #ccc !important;\n    pointer-events: none !important;\n  }\n\n  .react-datepicker__month--disabled:hover,\n  .react-datepicker__quarter--disabled:hover {\n    cursor: default !important;\n    background-color: transparent !important;\n  }\n\n  .react-datepicker__day,\n  .react-datepicker__month-text,\n  .react-datepicker__quarter-text,\n  .react-datepicker__year-text {\n    cursor: pointer !important;\n  }\n\n  .react-datepicker__day:hover {\n    border-radius: 50% !important;\n    background-color: #f0f0f0 !important;\n  }\n  .react-datepicker__month-text:hover,\n  .react-datepicker__quarter-text:hover,\n  .react-datepicker__year-text:hover {\n    border-radius: 10px !important;\n    background-color: #f0f0f0 !important;\n  }\n\n  .react-datepicker__day--today,\n  .react-datepicker__month-text--today,\n  .react-datepicker__quarter-text--today,\n  .react-datepicker__year-text--today {\n    font-weight: bold !important;\n  }\n\n  .react-datepicker__day--highlighted,\n  .react-datepicker__month-text--highlighted,\n  .react-datepicker__quarter-text--highlighted,\n  .react-datepicker__year-text--highlighted {\n    border-radius: 0.3rem !important;\n    background-color: #3dcc4a !important;\n    color: #fff !important;\n  }\n\n  .react-datepicker__day--highlighted:hover,\n  .react-datepicker__month-text--highlighted:hover,\n  .react-datepicker__quarter-text--highlighted:hover,\n  .react-datepicker__year-text--highlighted:hover {\n    background-color: #32be3f !important;\n  }\n\n  .react-datepicker__day--highlighted-custom-1,\n  .react-datepicker__month-text--highlighted-custom-1,\n  .react-datepicker__quarter-text--highlighted-custom-1,\n  .react-datepicker__year-text--highlighted-custom-1 {\n    color: magenta !important;\n  }\n\n  .react-datepicker__day--highlighted-custom-2,\n  .react-datepicker__month-text--highlighted-custom-2,\n  .react-datepicker__quarter-text--highlighted-custom-2,\n  .react-datepicker__year-text--highlighted-custom-2 {\n    color: green !important;\n  }\n\n  .react-datepicker__day--selected,\n  .react-datepicker__day--in-selecting-range,\n  .react-datepicker__day--in-range {\n    border-radius: 50% !important;\n    background-color: #9b4dee !important;\n    color: #fff !important;\n    outline: none !important;\n  }\n  .react-datepicker__month-text--selected,\n  .react-datepicker__month-text--in-selecting-range,\n  .react-datepicker__month-text--in-range,\n  .react-datepicker__quarter-text--selected,\n  .react-datepicker__quarter-text--in-selecting-range,\n  .react-datepicker__quarter-text--in-range,\n  .react-datepicker__year-text--selected,\n  .react-datepicker__year-text--in-selecting-range,\n  .react-datepicker__year-text--in-range {\n    border-radius: 10px !important;\n    background-color: #9b4dee !important;\n    color: #fff !important;\n    outline: none !important;\n  }\n\n  .react-datepicker__day--selected:hover,\n  .react-datepicker__day--in-selecting-range:hover,\n  .react-datepicker__day--in-range:hover,\n  .react-datepicker__month-text--selected:hover,\n  .react-datepicker__month-text--in-selecting-range:hover,\n  .react-datepicker__month-text--in-range:hover,\n  .react-datepicker__quarter-text--selected:hover,\n  .react-datepicker__quarter-text--in-selecting-range:hover,\n  .react-datepicker__quarter-text--in-range:hover,\n  .react-datepicker__year-text--selected:hover,\n  .react-datepicker__year-text--in-selecting-range:hover,\n  .react-datepicker__year-text--in-range:hover {\n    background-color: rgba(155, 77, 238, 0.8) !important;\n    outline: none !important;\n  }\n\n  .react-datepicker__day--keyboard-selected {\n    border-radius: 50% !important;\n    background-color: #9b4dee !important;\n    color: #fff !important;\n    outline: none !important;\n  }\n  .react-datepicker__month-text--keyboard-selected,\n  .react-datepicker__quarter-text--keyboard-selected,\n  .react-datepicker__year-text--keyboard-selected {\n    border-radius: 10px !important;\n    background-color: #9b4dee !important;\n    color: #fff !important;\n    outline: none !important;\n  }\n\n  .react-datepicker__day--keyboard-selected:hover,\n  .react-datepicker__month-text--keyboard-selected:hover,\n  .react-datepicker__quarter-text--keyboard-selected:hover,\n  .react-datepicker__year-text--keyboard-selected:hover {\n    background-color: rgba(155, 77, 238, 0.8) !important;\n  }\n\n  .react-datepicker__day--in-selecting-range,\n  .react-datepicker__month-text--in-selecting-range,\n  .react-datepicker__quarter-text--in-selecting-range,\n  .react-datepicker__year-text--in-selecting-range {\n    background-color: rgba(155, 77, 238, 0.5) !important;\n    outline: none !important;\n  }\n\n  .react-datepicker__month--selecting-range .react-datepicker__day--in-range,\n  .react-datepicker__month--selecting-range\n    .react-datepicker__month-text--in-range,\n  .react-datepicker__month--selecting-range\n    .react-datepicker__quarter-text--in-range,\n  .react-datepicker__month--selecting-range\n    .react-datepicker__year-text--in-range {\n    background-color: #f0f0f0 !important;\n    color: #000 !important;\n    outline: none !important;\n  }\n\n  .react-datepicker__day--disabled,\n  .react-datepicker__month-text--disabled,\n  .react-datepicker__quarter-text--disabled,\n  .react-datepicker__year-text--disabled {\n    cursor: default !important;\n    color: #ccc !important;\n  }\n\n  .react-datepicker__day--disabled:hover,\n  .react-datepicker__month-text--disabled:hover,\n  .react-datepicker__quarter-text--disabled:hover,\n  .react-datepicker__year-text--disabled:hover {\n    background-color: transparent !important;\n  }\n\n  .react-datepicker__month-text.react-datepicker__month--selected:hover,\n  .react-datepicker__month-text.react-datepicker__month--in-range:hover,\n  .react-datepicker__month-text.react-datepicker__quarter--selected:hover,\n  .react-datepicker__month-text.react-datepicker__quarter--in-range:hover,\n  .react-datepicker__quarter-text.react-datepicker__month--selected:hover,\n  .react-datepicker__quarter-text.react-datepicker__month--in-range:hover,\n  .react-datepicker__quarter-text.react-datepicker__quarter--selected:hover,\n  .react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover {\n    background-color: #9b4dee !important;\n  }\n\n  .react-datepicker__month-text:hover,\n  .react-datepicker__quarter-text:hover {\n    background-color: #f0f0f0 !important;\n  }\n\n  .react-datepicker__input-container {\n    position: relative !important;\n    display: inline-block !important;\n    width: 100% !important;\n  }\n\n  .react-datepicker__year-read-view,\n  .react-datepicker__month-read-view,\n  .react-datepicker__month-year-read-view {\n    border: 1px solid transparent !important;\n    border-radius: 0.3rem !important;\n  }\n\n  .react-datepicker__year-read-view:hover,\n  .react-datepicker__month-read-view:hover,\n  .react-datepicker__month-year-read-view:hover {\n    cursor: pointer !important;\n  }\n\n  .react-datepicker__year-read-view:hover,\n  .react-datepicker__year-read-view--down-arrow,\n  .react-datepicker__year-read-view:hover,\n  .react-datepicker__month-read-view--down-arrow,\n  .react-datepicker__month-read-view:hover,\n  .react-datepicker__year-read-view--down-arrow,\n  .react-datepicker__month-read-view:hover,\n  .react-datepicker__month-read-view--down-arrow,\n  .react-datepicker__month-year-read-view:hover,\n  .react-datepicker__year-read-view--down-arrow,\n  .react-datepicker__month-year-read-view:hover,\n  .react-datepicker__month-read-view--down-arrow {\n    border-top-color: #b3b3b3 !important;\n  }\n\n  .react-datepicker__year-read-view--down-arrow,\n  .react-datepicker__month-read-view--down-arrow,\n  .react-datepicker__month-year-read-view--down-arrow {\n    border-top-color: #ccc !important;\n    float: right !important;\n    margin-left: 20px !important;\n    top: 5px !important;\n    position: relative !important;\n    border-width: 0.45rem !important;\n  }\n\n  .react-datepicker__year-dropdown,\n  .react-datepicker__month-dropdown,\n  .react-datepicker__month-year-dropdown {\n    background-color: #f0f0f0 !important;\n    position: absolute !important;\n    width: 50% !important;\n    left: 25% !important;\n    top: 30px !important;\n    z-index: 1 !important;\n    text-align: center !important;\n    border-radius: 0.3rem !important;\n    border: 1px solid #aeaeae !important;\n  }\n\n  .react-datepicker__year-dropdown:hover,\n  .react-datepicker__month-dropdown:hover,\n  .react-datepicker__month-year-dropdown:hover {\n    cursor: pointer !important;\n  }\n\n  .react-datepicker__year-dropdown--scrollable,\n  .react-datepicker__month-dropdown--scrollable,\n  .react-datepicker__month-year-dropdown--scrollable {\n    height: 150px !important;\n    overflow-y: scroll !important;\n  }\n\n  .react-datepicker__year-option,\n  .react-datepicker__month-option,\n  .react-datepicker__month-year-option {\n    line-height: 20px !important;\n    width: 100% !important;\n    display: block !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n\n  .react-datepicker__year-option:first-of-type,\n  .react-datepicker__month-option:first-of-type,\n  .react-datepicker__month-year-option:first-of-type {\n    border-top-left-radius: 0.3rem !important;\n    border-top-right-radius: 0.3rem !important;\n  }\n\n  .react-datepicker__year-option:last-of-type,\n  .react-datepicker__month-option:last-of-type,\n  .react-datepicker__month-year-option:last-of-type {\n    -webkit-user-select: none !important;\n    -moz-user-select: none !important;\n    -ms-user-select: none !important;\n    user-select: none !important;\n    border-bottom-left-radius: 0.3rem !important;\n    border-bottom-right-radius: 0.3rem !important;\n  }\n\n  .react-datepicker__year-option:hover,\n  .react-datepicker__month-option:hover,\n  .react-datepicker__month-year-option:hover {\n    background-color: #ccc !important;\n  }\n\n  .react-datepicker__year-option:hover\n    .react-datepicker__navigation--years-upcoming,\n  .react-datepicker__month-option:hover\n    .react-datepicker__navigation--years-upcoming,\n  .react-datepicker__month-year-option:hover\n    .react-datepicker__navigation--years-upcoming {\n    border-bottom-color: #b3b3b3 !important;\n  }\n\n  .react-datepicker__year-option:hover\n    .react-datepicker__navigation--years-previous,\n  .react-datepicker__month-option:hover\n    .react-datepicker__navigation--years-previous,\n  .react-datepicker__month-year-option:hover\n    .react-datepicker__navigation--years-previous {\n    border-top-color: #b3b3b3 !important;\n  }\n\n  .react-datepicker__year-option--selected,\n  .react-datepicker__month-option--selected,\n  .react-datepicker__month-year-option--selected {\n    position: absolute !important;\n    left: 15px !important;\n  }\n\n  .react-datepicker__close-icon {\n    cursor: pointer !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    outline: 0 !important;\n    padding: 0px 6px 0px 0px !important;\n    position: absolute !important;\n    top: 0 !important;\n    right: 0 !important;\n    height: 100% !important;\n    display: table-cell !important;\n    vertical-align: middle !important;\n  }\n\n  .react-datepicker__close-icon::after {\n    cursor: pointer !important;\n    background-color: #9b4dee !important;\n    color: #fff !important;\n    border-radius: 50% !important;\n    height: 16px !important;\n    width: 16px !important;\n    padding: 2px !important;\n    font-size: 12px !important;\n    line-height: 1 !important;\n    text-align: center !important;\n    display: table-cell !important;\n    vertical-align: middle !important;\n    content: '\xD7';\n  }\n\n  .react-datepicker__today-button {\n    background: rgba(155, 77, 238, 0.1) !important;\n    border-top: 1px solid #aeaeae !important;\n    cursor: pointer !important;\n    text-align: center !important;\n    font-weight: bold !important;\n    padding: 5px 0 !important;\n    clear: left !important;\n    border-bottom-left-radius: 20px !important;\n    border-bottom-right-radius: 20px !important;\n  }\n\n  .react-datepicker__portal {\n    position: fixed !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    background-color: rgba(0, 0, 0, 0.8) !important;\n    left: 0 !important;\n    top: 0 !important;\n    justify-content: center !important;\n    align-items: center !important;\n    display: flex !important;\n    z-index: 2147483647 !important;\n  }\n\n  .react-datepicker__portal .react-datepicker__day-name,\n  .react-datepicker__portal .react-datepicker__day,\n  .react-datepicker__portal .react-datepicker__time-name {\n    width: 3rem !important;\n    line-height: 3rem !important;\n  }\n\n  @media (max-width: 400px), (max-height: 550px) {\n    .react-datepicker__portal .react-datepicker__day-name,\n    .react-datepicker__portal .react-datepicker__day,\n    .react-datepicker__portal .react-datepicker__time-name {\n      width: 2rem !important;\n      line-height: 2rem !important;\n    }\n  }\n\n  .react-datepicker__portal .react-datepicker__current-month,\n  .react-datepicker__portal .react-datepicker-time__header {\n    font-size: 1.44rem !important;\n  }\n\n  .react-datepicker__portal .react-datepicker__navigation {\n    border: 0.81rem solid transparent !important;\n  }\n\n  .react-datepicker__portal .react-datepicker__navigation--previous {\n    border-right-color: #ccc !important;\n  }\n\n  .react-datepicker__portal .react-datepicker__navigation--previous:hover {\n    border-right-color: #b3b3b3 !important;\n  }\n\n  .react-datepicker__portal .react-datepicker__navigation--previous--disabled,\n  .react-datepicker__portal\n    .react-datepicker__navigation--previous--disabled:hover {\n    border-right-color: #e6e6e6 !important;\n    cursor: default !important;\n  }\n\n  .react-datepicker__portal .react-datepicker__navigation--next {\n    border-left-color: #ccc !important;\n  }\n\n  .react-datepicker__portal .react-datepicker__navigation--next:hover {\n    border-left-color: #b3b3b3 !important;\n  }\n\n  .react-datepicker__portal .react-datepicker__navigation--next--disabled,\n  .react-datepicker__portal\n    .react-datepicker__navigation--next--disabled:hover {\n    border-left-color: #e6e6e6 !important;\n    cursor: default !important;\n  }\n"])), function (props) {
  return props.brand ? colors.brandLight : colors.gray10;
}, function (props) {
  return props.brand ? colors.brand10 : colors.gray20;
}, function (props) {
  return props.brand ? colors.brandLight : colors.white;
}, function (props) {
  return props.size ? getFontSize(props.size, '1rem') : '1rem';
}, function (props) {
  return props.brand ? colors.brandTransparent : colors.default10;
}, function (props) {
  return props.size ? getFontSize(props.size, '1rem') : '1rem';
}, colors.brand10, function (props) {
  return props.size ? getFontSize(props.size, '1rem') : '1rem';
}, function (props) {
  return props.brand ? colors.brand10 : colors.gray20;
});

var _excluded$7 = ["label", "labelClassName", "labelStyle", "brand", "otherFormatDate", "size"];
DatePicker.registerLocale('pt-BR', br__default["default"]);

var Calendar = function Calendar(_ref) {
  var label = _ref.label,
      labelClassName = _ref.labelClassName,
      labelStyle = _ref.labelStyle,
      brand = _ref.brand,
      otherFormatDate = _ref.otherFormatDate,
      size = _ref.size,
      rest = _objectWithoutPropertiesLoose$2(_ref, _excluded$7);

  // eslint-disable-next-line react/display-name
  var CustomInput = require$$0__default["default"].forwardRef(function (props, ref) {
    return jsxRuntime.jsx(reactInputMask, {
      role: "textbox",
      ref: ref,
      mask: "99/99/9999",
      onClick: props.onClick,
      value: props.value,
      readOnly: rest.readOnly,
      onChange: props.onChange,
      placeholder: rest.placeholderText
    }, void 0);
  });
  return jsxRuntime.jsxs(Container$7, Object.assign({
    brand: brand,
    size: size
  }, {
    children: [label && jsxRuntime.jsx("span", Object.assign({
      className: labelClassName,
      style: labelStyle
    }, {
      children: label
    }), void 0), jsxRuntime.jsxs("div", {
      children: [jsxRuntime.jsx(DatePicker__default["default"], Object.assign({}, rest, {
        locale: "pt-BR",
        customInput: otherFormatDate ? undefined : jsxRuntime.jsx(CustomInput, {
          onClick: rest.onCalendarOpen,
          value: rest.value,
          onChange: rest.onChange
        }, void 0),
        dateFormat: otherFormatDate || 'dd/MM/yyyy',
        readOnly: false,
        onChangeRaw: function onChangeRaw(event) {
          return rest.readOnly ? event.preventDefault() : null;
        }
      }), void 0), !rest.isClearable && jsxRuntime.jsx(FontAwesomeIcon, {
        icon: faAngleDown,
        className: "calendar-icon"
      }, void 0)]
    }, void 0)]
  }), void 0);
};

var _templateObject$b, _templateObject2$7, _templateObject3$7, _templateObject4$5;
var Shadow = styled__default["default"].div(_templateObject$b || (_templateObject$b = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  box-shadow: ", ";\n\n  border: ", ";\n  padding: 1.25rem;\n  background-color: ", ";\n  border-radius: 1.875rem;\n  position: relative;\n\n  width: ", ";\n"])), function (props) {
  if (props.type == 'none' || props.type == 'border') {
    return 'none';
  }

  if (props.type == 'min-shadow') {
    return '0px 0.125rem 0.25rem #00000029';
  }

  return '0 1.25rem 3.125rem 0 rgba(0, 0, 0, 0.16)';
}, function (props) {
  var _props$style;

  return props.type == 'border' || (_props$style = props.style) != null && _props$style.borderRadius ? "1px solid  " + colors.default20 : '';
}, colors.white, function (props) {
  return getMeasurement(props.width, '100%');
});
var Button$1 = styled__default["default"].a(_templateObject2$7 || (_templateObject2$7 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  background-color: ", ";\n  padding: 0.75rem 1.5625rem;\n  border-radius: 1.875rem;\n  border: 1px solid ", ";\n  width: ", ";\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  :hover {\n    background-color: ", ";\n  }\n\n  span {\n    margin-left: 0.9375rem;\n    font-size: 0.9375rem;\n    color: ", ";\n  }\n"])), colors.card, colors.default30, function (props) {
  return getMeasurement(props.width, '100%');
}, colors.default10, colors.brandDark);
var Complement = styled__default["default"].div(_templateObject3$7 || (_templateObject3$7 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n\n  color: ", ";\n  background-color: ", ";\n\n  border: 1px solid ", ";\n  text-align: center;\n  margin-top: -1.5625rem;\n  padding-top: 1.5625rem;\n  width: 100%;\n\n  border-bottom-left-radius: 1.875rem;\n  border-bottom-right-radius: 1.875rem;\n"])), colors.gray20, colors.default10, colors.default20);
var LoadingCard = styled__default["default"].div(_templateObject4$5 || (_templateObject4$5 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.8);\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 30px;\n  z-index: 2;\n  position: absolute;\n"])));

var _excluded$6 = ["children", "childrenStyle", "childrenClassName", "width", "type", "style", "icon", "iconClassName", "iconStyle", "iconSize", "onClick", "loading", "className", "complement", "complementStyle", "complementClassName"];

function Card(_ref) {
  var children = _ref.children,
      childrenStyle = _ref.childrenStyle,
      childrenClassName = _ref.childrenClassName,
      width = _ref.width,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'shadow' : _ref$type,
      style = _ref.style,
      icon = _ref.icon,
      iconClassName = _ref.iconClassName,
      iconStyle = _ref.iconStyle,
      iconSize = _ref.iconSize,
      onClick = _ref.onClick,
      loading = _ref.loading,
      className = _ref.className,
      complement = _ref.complement,
      complementStyle = _ref.complementStyle,
      complementClassName = _ref.complementClassName,
      rest = _objectWithoutPropertiesLoose$2(_ref, _excluded$6);

  function renderShadow() {
    return jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [jsxRuntime.jsxs(Shadow, Object.assign({
        className: className,
        width: width,
        style: style,
        type: type,
        "data-testid": "card"
      }, {
        children: [loading && jsxRuntime.jsx(LoadingCard, {
          children: jsxRuntime.jsx(Loader, {}, void 0)
        }, void 0), children]
      }), void 0), !!complement && jsxRuntime.jsx(Complement, Object.assign({
        "data-testid": "complement",
        className: complementClassName,
        style: complementStyle
      }, {
        children: complement
      }), void 0)]
    }, void 0);
  }

  function renderButton() {
    return jsxRuntime.jsxs(Button$1, Object.assign({
      className: className,
      style: style,
      onClick: onClick,
      href: rest.href,
      width: width,
      "data-testid": "card"
    }, {
      children: [loading && jsxRuntime.jsx(LoadingCard, {
        children: jsxRuntime.jsx(Loader, {
          size: "sm"
        }, void 0)
      }, void 0), icon && jsxRuntime.jsx(jsxRuntime.Fragment, {
        children: jsxRuntime.jsx(FontAwesomeIcon, {
          "aria-label": "icon",
          color: colors.brandDark,
          icon: icon,
          className: iconClassName,
          style: iconStyle,
          size: iconSize || 'lg'
        }, void 0)
      }, void 0), jsxRuntime.jsx("span", Object.assign({
        style: childrenStyle,
        className: childrenClassName
      }, {
        children: children
      }), void 0)]
    }), void 0);
  }

  switch (type) {
    case 'shadow':
      return renderShadow();

    case 'min-shadow':
      return renderShadow();

    case 'border':
      return renderShadow();

    case 'button':
      return renderButton();

    default:
      return renderShadow();
  }
}

var _templateObject$a;

var size$1 = function size(_size) {
  switch (_size) {
    case Sizes.xs:
      return '0.625rem';

    case Sizes.sm:
      return '0.875rem';

    case Sizes.md:
      return '1.0625rem';

    case Sizes.lg:
      return '1.4375rem';

    case Sizes.xl:
      return '1.875rem';

    default:
      return '1.0625rem';
  }
};

var sizeChecked$1 = function sizeChecked(size) {
  switch (size) {
    case Sizes.xs:
      return '0.5rem';

    case Sizes.sm:
      return '0.6875rem';

    case Sizes.md:
      return '0.8125rem';

    case Sizes.lg:
      return '1.1875rem';

    case Sizes.xl:
      return '1.4375rem';

    default:
      return '0.8125rem';
  }
};

var marginLeft = function marginLeft(size) {
  switch (size) {
    case Sizes.xs:
      return '0.0625rem';

    case Sizes.sm:
      return '0.0875rem';

    case Sizes.md:
      return '0.125rem';

    case Sizes.lg:
      return '0.1875rem';

    case Sizes.xl:
      return '0.25rem';

    default:
      return '0.125rem';
  }
};

var labelSize$1 = function labelSize(size) {
  switch (size) {
    case Sizes.xs:
      return '10px';

    case Sizes.sm:
      return '13px';

    case Sizes.md:
      return '16px';

    case Sizes.lg:
      return '20px';

    case Sizes.xl:
      return '24px';

    default:
      return '16px';
  }
};

var marginRight = function marginRight(size) {
  switch (size) {
    case Sizes.xs:
      return '0.3125rem';

    case Sizes.sm:
      return '0.4375rem';

    case Sizes.md:
      return '0.5rem';

    case Sizes.lg:
      return '0.625rem';

    case Sizes.xl:
      return '0.75rem';

    default:
      return '0.5rem';
  }
};

var Container$6 = styled__default["default"].div(_templateObject$a || (_templateObject$a = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  display: flex;\n  align-items: center;\n\n  > input {\n    display: none;\n  }\n\n  label,\n  input + div {\n    cursor: ", ";\n    opacity: ", ";\n  }\n\n  label {\n    font-size: ", ";\n    color: ", ";\n  }\n\n  > input + div {\n    position: relative;\n\n    display: flex;\n    align-items: center;\n\n    &:before {\n      content: '';\n      position: absolute;\n      width: ", ";\n      height: ", ";\n      border: 1px solid ", ";\n      background: ", ";\n      border-radius: 5px;\n    }\n    &:after {\n      content: ' ';\n      position: absolute;\n      width: ", ";\n      height: ", ";\n      border: 1px solid ", ";\n      background: ", ";\n      border-radius: 5px;\n      color: ", ";\n      text-align: center;\n      font-size: 12px;\n    }\n  }\n  > input:not(:checked) + div {\n    &:after {\n      opacity: 0;\n      transform: scale(0);\n    }\n  }\n  > input:checked + div {\n    &:after {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n\n  span {\n    margin-left: ", ";\n    margin-right: ", ";\n    font-size: ", ";\n    color: ", ";\n    z-index: 1;\n  }\n"])), function (props) {
  return props.disabled ? 'default' : 'pointer';
}, function (props) {
  return props.disabled ? 0.5 : 1;
}, function (props) {
  if (props.sizeBox) {
    return labelSize$1(props.sizeBox);
  }

  return '1.0625rem';
}, colors.gray20, function (props) {
  if (props.sizeBox) {
    return size$1(props.sizeBox);
  }

  return '1.0625rem';
}, function (props) {
  if (props.sizeBox) {
    return size$1(props.sizeBox);
  }

  return '1.0625rem';
}, colors.default20, colors.default20, function (props) {
  if (props.sizeBox) {
    return size$1(props.sizeBox);
  }

  return '1.0625rem';
}, function (props) {
  if (props.sizeBox) {
    return size$1(props.sizeBox);
  }

  return '1.0625rem';
}, colors.brandDark, colors.brandDark, colors.white, function (props) {
  if (props.sizeBox) {
    return marginLeft(props.sizeBox);
  }

  return '0.1563rem';
}, function (props) {
  if (props.sizeBox) {
    return marginRight(props.sizeBox);
  }

  return '0.5rem';
}, function (props) {
  if (props.sizeBox) {
    return sizeChecked$1(props.sizeBox);
  }

  return '0.8125rem';
}, function (props) {
  return props.checked ? colors.white : colors.default20;
});

var _excluded$5 = ["label", "labelClassName", "labelStyle", "sizeBox", "containerClassName", "containerStyle"];

function Checkbox(_ref, ref) {
  var label = _ref.label,
      labelClassName = _ref.labelClassName,
      labelStyle = _ref.labelStyle,
      sizeBox = _ref.sizeBox,
      containerClassName = _ref.containerClassName,
      containerStyle = _ref.containerStyle,
      rest = _objectWithoutPropertiesLoose$2(_ref, _excluded$5);

  return jsxRuntime.jsxs(Container$6, Object.assign({
    onClick: !rest.disabled ? rest.onChange : undefined,
    disabled: rest.disabled,
    sizeBox: sizeBox,
    checked: rest.checked,
    className: containerClassName,
    style: containerStyle,
    role: "group"
  }, {
    children: [jsxRuntime.jsx("input", Object.assign({
      type: "checkbox"
    }, rest, {
      "data-testid": "checkbox",
      ref: ref
    }), void 0), jsxRuntime.jsxs("div", {
      children: [jsxRuntime.jsx("span", Object.assign({
        "aria-label": "check"
      }, {
        children: jsxRuntime.jsx(FontAwesomeIcon, {
          icon: faCheck
        }, void 0)
      }), void 0), jsxRuntime.jsx("label", Object.assign({
        className: labelClassName,
        style: labelStyle
      }, {
        children: label
      }), void 0)]
    }, void 0)]
  }), void 0);
}

var Checkbox$1 = require$$0.forwardRef(Checkbox);

var Z_INDEX_MODAL = 999;
var Z_INDEX_DIALOG = 998;

var _templateObject$9, _templateObject2$6, _templateObject3$6, _templateObject4$4, _templateObject5$3, _templateObject6$3, _templateObject7$1;
var Background$1 = styled__default["default"].div(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), function (props) {
  return props.open ? styled.css(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteralLoose(["\n          opacity: 1;\n          visibility: visible;\n          position: fixed;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          background: rgba(0, 0, 0, 0.5);\n          transition: opacity 0.25s ease;\n          overflow: auto;\n          display: flex;\n          z-index: ", ";\n        "])), Z_INDEX_DIALOG) : styled.css(_templateObject3$6 || (_templateObject3$6 = _taggedTemplateLiteralLoose(["\n          opacity: 0;\n          visibility: hidden;\n          display: none;\n        "])));
});
var Dialog = styled__default["default"].div(_templateObject4$4 || (_templateObject4$4 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  ", "\n"])), function (props) {
  return props.open ? styled.css(_templateObject5$3 || (_templateObject5$3 = _taggedTemplateLiteralLoose(["\n          transition: bottom 0.25s ease;\n          width: 97%;\n          background: ", ";\n          border-top-left-radius: 30px;\n          border-top-right-radius: 30px;\n          margin-top: auto;\n          margin-left: auto;\n          margin-right: auto;\n          position: relative;\n          /* overflow: auto; */\n\n          overflow: ", ";\n          padding-bottom: ", ";\n          height: ", ";\n          max-height: ", ";\n\n          .box-dialog {\n            position: relative;\n            padding: 20px 20px 0;\n            overflow: ", ";\n\n            height: ", ";\n            /* max-height: 100%; */\n          }\n\n          .loading-dialog {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            background-color: rgba(255, 255, 255, 0.8);\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            border-radius: 30px;\n            z-index: 2;\n            position: absolute;\n          }\n        "])), colors.white, function () {
    if (props.maxHeight || props.isLoading) {
      return 'none';
    }

    return 'auto';
  }, function () {
    if (props.maxHeight) {
      return '0';
    }

    return '20px';
  }, function () {
    if (props.maxHeight) {
      return '100%';
    }

    return 'auto';
  }, function () {
    return getMeasurement(props.maxHeight, '100%');
  }, props.isLoading ? 'hidden' : 'auto', props.title ? "calc(100% - " + props.sizeHeader + "px)" : '100%') : styled.css(_templateObject6$3 || (_templateObject6$3 = _taggedTemplateLiteralLoose(["\n          transition: bottom 0.25s ease;\n          bottom: -100%;\n        "])));
});
var Header$2 = styled__default["default"].div(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: ", ";\n  font-size: 1.25rem;\n\n  div {\n    flex: 1;\n    text-align: left;\n    padding: ", ";\n    color: ", ";\n  }\n\n  button {\n    padding: 1.25rem 1.875rem;\n  }\n"])), function (props) {
  return props.noBorder ? 'none' : "1px solid " + colors.default20;
}, function (props) {
  return props.returnIcon ? '1.25rem 0' : '1.25rem 1.875rem';
}, colors.brand10);

function DialogComponent(_ref) {
  var open = _ref.open,
      children = _ref.children,
      onClose = _ref.onClose,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      maxHeight = _ref.maxHeight,
      title = _ref.title,
      noBorder = _ref.noBorder,
      _ref$closeOnDimerClic = _ref.closeOnDimerClick,
      closeOnDimerClick = _ref$closeOnDimerClic === void 0 ? true : _ref$closeOnDimerClic,
      _ref$closeIcon = _ref.closeIcon,
      closeIcon = _ref$closeIcon === void 0 ? false : _ref$closeIcon,
      onReturn = _ref.onReturn;
  var headerDialog = require$$0.useRef(null);
  var sizeHeader = require$$0.useMemo(function () {
    if (headerDialog.current) return headerDialog.current.clientHeight;
    return 62;
  }, [headerDialog.current]);
  return jsxRuntime.jsx(Background$1, Object.assign({
    open: open,
    onClick: function onClick(event) {
      event.stopPropagation();
      if (closeOnDimerClick) onClose();
    },
    "data-testid": "background"
  }, {
    children: jsxRuntime.jsxs(Dialog, Object.assign({
      open: open,
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      maxHeight: maxHeight,
      sizeHeader: sizeHeader,
      isLoading: loading,
      title: title,
      role: "dialog"
    }, {
      children: [!!title || !!onReturn || closeIcon ? jsxRuntime.jsxs(Header$2, Object.assign({
        role: "heading",
        returnIcon: !!onReturn,
        noBorder: noBorder,
        ref: headerDialog
      }, {
        children: [!!onReturn && jsxRuntime.jsx("button", Object.assign({
          onClick: onReturn,
          "aria-label": "return"
        }, {
          children: jsxRuntime.jsx(FontAwesomeIcon, {
            icon: faAngleLeft,
            size: "lg",
            color: colors.brand10
          }, void 0)
        }), void 0), jsxRuntime.jsx("div", {
          children: jsxRuntime.jsx("strong", {
            children: title
          }, void 0)
        }, void 0), closeIcon && jsxRuntime.jsx("button", Object.assign({
          onClick: function onClick(event) {
            event.stopPropagation();
            onClose();
          },
          "aria-label": "close"
        }, {
          children: jsxRuntime.jsx(FontAwesomeIcon, {
            icon: faTimes,
            style: {
              fontSize: '1.25rem'
            },
            color: colors.brand10
          }, void 0)
        }), void 0)]
      }), void 0) : null, jsxRuntime.jsxs("div", Object.assign({
        className: "box-dialog",
        id: "sizeBody"
      }, {
        children: [loading && jsxRuntime.jsx("div", Object.assign({
          className: "loading-dialog"
        }, {
          children: jsxRuntime.jsx(Loader, {}, void 0)
        }), void 0), children]
      }), void 0)]
    }), void 0)
  }), void 0);
}

var _templateObject$8;
var Container$5 = styled__default["default"].div(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  width: 100% !important;\n  display: flex !important;\n  flex-direction: column !important;\n  padding-bottom: ", ";\n\n  label {\n    font-size: 14px;\n    margin-left: 15px;\n    color: ", ";\n  }\n  /*!\n * # Semantic UI 2.4.0 - Dropdown\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */\n\n  /*******************************\n            Dropdown\n*******************************/\n\n  .ui.dropdown {\n    cursor: pointer;\n    position: relative;\n    display: inline-block;\n    outline: none;\n    text-align: ", ";\n    color: ", ";\n    -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n    transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n    transition: box-shadow 0.1s ease, width 0.1s ease;\n    transition: box-shadow 0.1s ease, width 0.1s ease,\n      -webkit-box-shadow 0.1s ease;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n\n  /*******************************\n            Content\n*******************************/\n\n  /*--------------\n      Menu\n---------------*/\n\n  .ui.dropdown .menu {\n    cursor: auto;\n    position: absolute;\n    display: none;\n    outline: none;\n    top: 100%;\n    min-width: -webkit-max-content;\n    min-width: -moz-max-content;\n    min-width: max-content;\n    margin: 0em;\n    padding: 0em 0em;\n    background: #ffffff;\n    font-size: 1em;\n    text-shadow: none;\n    text-align: left;\n    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    border: 1px solid rgba(34, 36, 38, 0.15);\n    border-radius: ", ";\n    -webkit-transition: opacity 0.1s ease;\n    transition: opacity 0.1s ease;\n    z-index: 11;\n    will-change: transform, opacity;\n    /* border-top: ", ";\n        border-left: ", ";\n        border-right: ", "; */\n  }\n  .ui.dropdown .menu > * {\n    white-space: nowrap;\n  }\n\n  /*--------------\n  Hidden Input\n---------------*/\n\n  .ui.dropdown > input:not(.search):first-child,\n  .ui.dropdown > select {\n    display: none !important;\n  }\n\n  /*--------------\n Dropdown Icon\n---------------*/\n\n  .ui.dropdown > .dropdown.icon {\n    position: relative;\n    width: auto;\n    font-size: 0.85714286em;\n    margin: 0em 0em 0em 1em;\n  }\n  .ui.dropdown .menu > .item .dropdown.icon {\n    width: auto;\n    float: right;\n    margin: 0em 0em 0em 1em;\n  }\n  .ui.dropdown .menu > .item .dropdown.icon + .text {\n    margin-right: 1em;\n  }\n\n  /*--------------\n      Text\n---------------*/\n\n  .ui.dropdown > .text {\n    display: inline-block;\n    -webkit-transition: none;\n    transition: none;\n  }\n\n  /*--------------\n    Menu Item\n---------------*/\n\n  .ui.dropdown .menu > .item {\n    position: relative;\n    cursor: pointer;\n    display: block;\n    border: none;\n    height: auto;\n    text-align: left;\n    border-top: none;\n    line-height: 1em;\n    color: ", ";\n    padding: 0.78571429rem 1.14285714rem !important;\n    font-size: 1rem;\n    text-transform: none;\n    font-weight: normal;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    -webkit-touch-callout: none;\n  }\n  .ui.dropdown .menu > .item:first-child {\n    border-top-width: 0px;\n  }\n\n  /*--------------\n  Floated Content\n---------------*/\n\n  .ui.dropdown > .text > [class*='right floated'],\n  .ui.dropdown .menu .item > [class*='right floated'] {\n    float: right !important;\n    margin-right: 0em !important;\n    margin-left: 1em !important;\n  }\n  .ui.dropdown > .text > [class*='left floated'],\n  .ui.dropdown .menu .item > [class*='left floated'] {\n    float: left !important;\n    margin-left: 0em !important;\n    margin-right: 1em !important;\n  }\n  .ui.dropdown .menu .item > .icon.floated,\n  .ui.dropdown .menu .item > .flag.floated,\n  .ui.dropdown .menu .item > .image.floated,\n  .ui.dropdown .menu .item > img.floated {\n    margin-top: 0em;\n  }\n\n  /*--------------\n  Menu Divider\n---------------*/\n\n  .ui.dropdown .menu > .header {\n    margin: 1rem 0rem 0.75rem;\n    padding: 0em 1.14285714rem;\n    color: rgba(0, 0, 0, 0.85);\n    font-size: 0.78571429em;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n  .ui.dropdown .menu > .divider {\n    border-top: 1px solid rgba(34, 36, 38, 0.1);\n    height: 0em;\n    margin: 0.5em 0em;\n  }\n  .ui.dropdown.dropdown .menu > .input {\n    width: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 1.14285714rem 0.78571429rem;\n    min-width: 10rem;\n  }\n  .ui.dropdown .menu > .header + .input {\n    margin-top: 0em;\n  }\n  .ui.dropdown .menu > .input:not(.transparent) input {\n    padding: 0.5em 1em;\n  }\n  .ui.dropdown .menu > .input:not(.transparent) .button,\n  .ui.dropdown .menu > .input:not(.transparent) .icon,\n  .ui.dropdown .menu > .input:not(.transparent) .label {\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n  }\n\n  /*-----------------\n  Item Description\n-------------------*/\n\n  .ui.dropdown > .text > .description,\n  .ui.dropdown .menu > .item > .description {\n    float: right;\n    margin: 0em 0em 0em 1em;\n    color: rgba(0, 0, 0, 0.4);\n  }\n\n  /*-----------------\n       Message\n-------------------*/\n\n  .ui.dropdown .menu > .message {\n    padding: 0.78571429rem 1.14285714rem;\n    font-weight: normal;\n  }\n  .ui.dropdown .menu > .message:not(.ui) {\n    color: rgba(0, 0, 0, 0.4);\n  }\n\n  /*--------------\n    Sub Menu\n---------------*/\n\n  .ui.dropdown .menu .menu {\n    top: 0% !important;\n    left: 100%;\n    right: auto;\n    margin: 0em 0em 0em -0.5em !important;\n    border-radius: 0.28571429rem !important;\n    z-index: 21 !important;\n  }\n\n  /* Hide Arrow */\n  .ui.dropdown .menu .menu:after {\n    display: none;\n  }\n\n  /*--------------\n   Sub Elements\n---------------*/\n\n  /* Icons / Flags / Labels / Image */\n  .ui.dropdown > .text > .icon,\n  .ui.dropdown > .text > .label,\n  .ui.dropdown > .text > .flag,\n  .ui.dropdown > .text > img,\n  .ui.dropdown > .text > .image {\n    margin-top: 0em;\n  }\n  .ui.dropdown .menu > .item > .icon,\n  .ui.dropdown .menu > .item > .label,\n  .ui.dropdown .menu > .item > .flag,\n  .ui.dropdown .menu > .item > .image,\n  .ui.dropdown .menu > .item > img {\n    margin-top: 0em;\n  }\n  .ui.dropdown > .text > .icon,\n  .ui.dropdown > .text > .label,\n  .ui.dropdown > .text > .flag,\n  .ui.dropdown > .text > img,\n  .ui.dropdown > .text > .image,\n  .ui.dropdown .menu > .item > .icon,\n  .ui.dropdown .menu > .item > .label,\n  .ui.dropdown .menu > .item > .flag,\n  .ui.dropdown .menu > .item > .image,\n  .ui.dropdown .menu > .item > img {\n    margin-left: 0em;\n    float: none;\n    margin-right: 0.78571429rem;\n  }\n\n  /*--------------\n     Image\n---------------*/\n\n  .ui.dropdown > .text > img,\n  .ui.dropdown > .text > .image,\n  .ui.dropdown .menu > .item > .image,\n  .ui.dropdown .menu > .item > img {\n    display: inline-block;\n    vertical-align: top;\n    width: auto;\n    margin-top: -0.5em;\n    margin-bottom: -0.5em;\n    max-height: 2em;\n  }\n\n  /*******************************\n            Coupling\n*******************************/\n\n  /*--------------\n      Menu\n---------------*/\n\n  /* Remove Menu Item Divider */\n  .ui.dropdown .ui.menu > .item:before,\n  .ui.menu .ui.dropdown .menu > .item:before {\n    display: none;\n  }\n\n  /* Prevent Menu Item Border */\n  .ui.menu .ui.dropdown .menu .active.item {\n    border-left: none;\n  }\n\n  /* Automatically float dropdown menu right on last menu item */\n  .ui.menu .right.menu .dropdown:last-child .menu,\n  .ui.menu .right.dropdown.item .menu,\n  .ui.buttons > .ui.dropdown:last-child .menu {\n    left: auto;\n    right: 0em;\n  }\n\n  /*--------------\n      Label\n---------------*/\n\n  /* Dropdown Menu */\n  .ui.label.dropdown .menu {\n    min-width: 100%;\n  }\n\n  /*--------------\n     Button\n---------------*/\n\n  /* No Margin On Icon Button */\n  .ui.dropdown.icon.button > .dropdown.icon {\n    margin: 0em;\n  }\n  .ui.button.dropdown .menu {\n    min-width: 100%;\n  }\n\n  /*******************************\n              Types\n*******************************/\n\n  /*--------------\n    Selection\n---------------*/\n\n  /* Displays like a select box */\n  .ui.selection.dropdown {\n    cursor: pointer;\n    word-wrap: break-word;\n    line-height: 1em;\n    white-space: normal;\n    outline: 0;\n    -webkit-transform: rotateZ(0deg);\n    transform: rotateZ(0deg);\n    min-width: 14em;\n    min-height: 2.71428571em;\n    background: ", ";\n    display: inline-block;\n    padding: 0.78571429em 2.6em 0.78571429em 1.1em;\n    color: ", ";\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    border: 1px solid\n      ", ";\n    border-radius: ", ";\n    -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n    transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n    transition: box-shadow 0.1s ease, width 0.1s ease;\n    transition: box-shadow 0.1s ease, width 0.1s ease,\n      -webkit-box-shadow 0.1s ease;\n    border-radius: ", ";\n    border-top: ", ";\n    border-left: ", ";\n    border-right: ", ";\n  }\n  .ui.selection.dropdown.visible,\n  .ui.selection.dropdown.active {\n    z-index: 10;\n  }\n  select.ui.dropdown {\n    height: 38px;\n    padding: 0.5em;\n    border: 1px solid rgba(34, 36, 38, 0.15);\n    visibility: visible;\n  }\n  .ui.selection.dropdown > .search.icon,\n  .ui.selection.dropdown > .delete.icon,\n  .ui.selection.dropdown > .dropdown.icon {\n    cursor: pointer;\n    position: absolute;\n    width: auto;\n    height: auto;\n    line-height: 1.21428571em;\n    top: 0.78571429em;\n    right: 1em;\n    z-index: 3;\n    margin: -0.78571429em;\n    padding: 0.91666667em;\n    opacity: 0.8;\n    -webkit-transition: opacity 0.1s ease;\n    transition: opacity 0.1s ease;\n  }\n\n  /* Compact */\n  .ui.compact.selection.dropdown {\n    min-width: 0px;\n  }\n\n  /*  Selection Menu */\n  .ui.selection.dropdown .menu {\n    overflow-x: hidden;\n    overflow-y: auto;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-overflow-scrolling: touch;\n    border-top-width: 0px !important;\n    width: auto;\n    outline: none;\n    margin: 0px -1px;\n    min-width: calc(100% + 2px);\n    width: calc(100% + 2px);\n    border-radius: 0em 0em 0.28571429rem 0.28571429rem;\n    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    -webkit-transition: opacity 0.1s ease;\n    transition: opacity 0.1s ease;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n  }\n  .ui.selection.dropdown .menu:after,\n  .ui.selection.dropdown .menu:before {\n    display: none;\n  }\n\n  /*--------------\n    Message\n---------------*/\n\n  .ui.selection.dropdown .menu > .message {\n    padding: 0.78571429rem 1.14285714rem;\n  }\n  @media only screen and (max-width: 767px) {\n    .ui.selection.dropdown .menu {\n      max-height: 8.01428571rem;\n    }\n  }\n  @media only screen and (min-width: 768px) {\n    .ui.selection.dropdown .menu {\n      max-height: 10.68571429rem;\n    }\n  }\n  @media only screen and (min-width: 992px) {\n    .ui.selection.dropdown .menu {\n      max-height: 16.02857143rem;\n    }\n  }\n  @media only screen and (min-width: 1920px) {\n    .ui.selection.dropdown .menu {\n      max-height: 21.37142857rem;\n    }\n  }\n\n  /* Menu Item */\n  .ui.selection.dropdown .menu > .item {\n    border-top: 1px solid #fafafa;\n    padding: 0.78571429rem 1.04285714rem !important;\n    white-space: normal;\n    word-wrap: normal;\n  }\n\n  /* User Item */\n  .ui.selection.dropdown .menu > .hidden.addition.item {\n    display: none;\n  }\n\n  /* Hover */\n  .ui.selection.dropdown:hover {\n    border-color: ", ";\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n\n  /* Active */\n  .ui.selection.active.dropdown {\n    border-color: ", ";\n    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n  }\n  .ui.selection.active.dropdown .menu {\n    border-color: ", ";\n    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n  }\n\n  /* Focus */\n  .ui.selection.dropdown:focus {\n    border-color: ", ";\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n  .ui.selection.dropdown:focus .menu {\n    border-color: ", ";\n    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n  }\n\n  /* Visible */\n  .ui.selection.visible.dropdown > .text:not(.default) {\n    font-weight: normal;\n    color: ", ";\n  }\n\n  /* Visible Hover */\n  .ui.selection.active.dropdown:hover {\n    border-color: ", ";\n    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n  }\n  .ui.selection.active.dropdown:hover .menu {\n    border-color: ", ";\n    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n  }\n\n  /* Dropdown Icon */\n  .ui.active.selection.dropdown > .dropdown.icon,\n  .ui.visible.selection.dropdown > .dropdown.icon {\n    opacity: '';\n    z-index: 3;\n  }\n\n  /* Connecting Border */\n  .ui.active.selection.dropdown {\n    border-bottom-left-radius: 0em !important;\n    border-bottom-right-radius: 0em !important;\n  }\n\n  /* Empty Connecting Border */\n  .ui.active.empty.selection.dropdown {\n    border-radius: 0.28571429rem !important;\n    -webkit-box-shadow: none !important;\n    box-shadow: none !important;\n  }\n  .ui.active.empty.selection.dropdown .menu {\n    border: none !important;\n    -webkit-box-shadow: none !important;\n    box-shadow: none !important;\n  }\n\n  /*--------------\n   Searchable\n---------------*/\n\n  /* Search Selection */\n  .ui.search.dropdown {\n    min-width: '';\n  }\n\n  /* Search Dropdown */\n  .ui.search.dropdown > input.search {\n    background: none transparent !important;\n    border: none !important;\n    -webkit-box-shadow: none !important;\n    box-shadow: none !important;\n    cursor: text;\n    top: 0em;\n    left: 1px;\n    width: 100%;\n    outline: none;\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n    padding: inherit;\n    color: ", ";\n    text-align: ", ";\n  }\n\n  /* Text Layering */\n  .ui.search.dropdown > input.search {\n    position: absolute;\n    z-index: 2;\n  }\n  .ui.search.dropdown > .text {\n    cursor: text;\n    position: relative;\n    left: 1px;\n    z-index: 3;\n  }\n\n  /* Search Selection */\n  .ui.search.selection.dropdown > input.search {\n    line-height: 1.21428571em;\n    padding: 0.67857143em 2.1em 0.67857143em 1em;\n  }\n\n  /* Used to size multi select input to character width */\n  .ui.search.selection.dropdown > span.sizer {\n    line-height: 1.21428571em;\n    padding: 0.67857143em 2.1em 0.67857143em 1em;\n    display: none;\n    white-space: pre;\n  }\n\n  /* Active/Visible Search */\n  .ui.search.dropdown.active > input.search,\n  .ui.search.dropdown.visible > input.search {\n    cursor: auto;\n    color: ", ";\n  }\n  .ui.search.dropdown.active > .text,\n  .ui.search.dropdown.visible > .text {\n    pointer-events: none;\n  }\n\n  /* Filtered Text */\n  .ui.active.search.dropdown input.search:focus + .text .icon,\n  .ui.active.search.dropdown input.search:focus + .text .flag {\n    opacity: 0.45;\n  }\n  .ui.active.search.dropdown input.search:focus + .text {\n    color: rgba(115, 115, 115, 0.87) !important;\n  }\n\n  .input.search::placeholder {\n    color: ", ";\n  }\n  /* Search Menu */\n  .ui.search.dropdown .menu {\n    overflow-x: hidden;\n    overflow-y: auto;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-overflow-scrolling: touch;\n  }\n  @media only screen and (max-width: 767px) {\n    .ui.search.dropdown .menu {\n      max-height: 8.01428571rem;\n    }\n  }\n  @media only screen and (min-width: 768px) {\n    .ui.search.dropdown .menu {\n      max-height: 10.68571429rem;\n    }\n  }\n  @media only screen and (min-width: 992px) {\n    .ui.search.dropdown .menu {\n      max-height: 16.02857143rem;\n    }\n  }\n  @media only screen and (min-width: 1920px) {\n    .ui.search.dropdown .menu {\n      max-height: 21.37142857rem;\n    }\n  }\n\n  /*--------------\n    Multiple\n---------------*/\n\n  /* Multiple Selection */\n  .ui.multiple.dropdown {\n    padding: 0.22619048em 2.1em 0.22619048em 0.35714286em;\n  }\n  .ui.multiple.dropdown .menu {\n    cursor: auto;\n  }\n\n  /* Multiple Search Selection */\n  .ui.multiple.search.dropdown,\n  .ui.multiple.search.dropdown > input.search {\n    cursor: text;\n  }\n\n  /* Selection Label */\n  .ui.multiple.dropdown > .label {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    display: inline-block;\n    vertical-align: top;\n    white-space: normal;\n    font-size: 1em;\n    padding: 0.35714286em 0.78571429em;\n    margin: 0.14285714rem 0.28571429rem 0.14285714rem 0.5em;\n    -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;\n    box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;\n    border-radius: 20px;\n    color: ", ";\n    background-color: ", ";\n  }\n\n  /* Dropdown Icon */\n  .ui.multiple.dropdown .dropdown.icon {\n    margin: '';\n    padding: '';\n  }\n\n  /* Text */\n  .ui.multiple.dropdown > .text {\n    position: static;\n    padding: 0;\n    max-width: 100%;\n    margin: 0.45238095em 0em 0.45238095em 0.64285714em;\n    line-height: 1.21428571em;\n  }\n  .ui.multiple.dropdown > .label ~ input.search {\n    margin-left: 0.14285714em !important;\n  }\n  .ui.multiple.dropdown > .label ~ .text {\n    display: none;\n  }\n\n  /*-----------------\n  Multiple Search\n-----------------*/\n\n  /* Prompt Text */\n  .ui.multiple.search.dropdown > .text {\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: inherit;\n    margin: 0.45238095em 0em 0.45238095em 0.64285714em;\n    line-height: 1.21428571em;\n  }\n  .ui.multiple.search.dropdown > .label ~ .text {\n    display: none;\n  }\n\n  /* Search */\n  .ui.multiple.search.dropdown > input.search {\n    position: static;\n    padding: 0;\n    max-width: 100%;\n    margin: 0.45238095em 0em 0.45238095em 0.64285714em;\n    width: 2.2em;\n    line-height: 1.21428571em;\n  }\n\n  /*--------------\n     Inline\n---------------*/\n\n  .ui.inline.dropdown {\n    cursor: pointer;\n    display: inline-block;\n    color: inherit;\n  }\n  .ui.inline.dropdown .dropdown.icon {\n    margin: 0em 0.21428571em 0em 0.21428571em;\n    vertical-align: baseline;\n  }\n  .ui.inline.dropdown > .text {\n    font-weight: bold;\n  }\n  .ui.inline.dropdown .menu {\n    cursor: auto;\n    margin-top: 0.21428571em;\n    border-radius: 0.28571429rem;\n  }\n\n  /*******************************\n            States\n*******************************/\n\n  /*--------------------\n        Active\n----------------------*/\n\n  /* Menu Item Active */\n  .ui.dropdown .menu .active.item {\n    background: transparent;\n    font-weight: bold;\n    color: ", ";\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    z-index: 12;\n  }\n\n  /*--------------------\n        Hover\n----------------------*/\n\n  /* Menu Item Hover */\n  .ui.dropdown .menu > .item:hover {\n    background: rgba(0, 0, 0, 0.05);\n    color: ", ";\n    z-index: 13;\n  }\n\n  /*--------------------\n       Loading\n---------------------*/\n\n  .ui.loading.dropdown > i.icon {\n    height: 1em !important;\n  }\n  .ui.loading.selection.dropdown > i.icon {\n    padding: 1.5em 1.28571429em !important;\n  }\n  .ui.loading.dropdown > i.icon:before {\n    position: absolute;\n    content: '';\n    top: 50%;\n    left: 50%;\n    margin: -0.64285714em 0em 0em -0.64285714em;\n    width: 1.28571429em;\n    height: 1.28571429em;\n    border-radius: 500rem;\n    border: 0.2em solid rgba(0, 0, 0, 0.1);\n  }\n  .ui.loading.dropdown > i.icon:after {\n    position: absolute;\n    content: '';\n    top: 50%;\n    left: 50%;\n    -webkit-box-shadow: 0px 0px 0px 1px transparent;\n    box-shadow: 0px 0px 0px 1px transparent;\n    margin: -0.64285714em 0em 0em -0.64285714em;\n    width: 1.28571429em;\n    height: 1.28571429em;\n    -webkit-animation: dropdown-spin 0.6s linear;\n    animation: dropdown-spin 0.6s linear;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    border-radius: 500rem;\n    border-color: ", " transparent transparent;\n    border-style: solid;\n    border-width: 0.2em;\n  }\n\n  /* Coupling */\n  .ui.loading.dropdown.button > i.icon:before,\n  .ui.loading.dropdown.button > i.icon:after {\n    display: none;\n  }\n  @-webkit-keyframes dropdown-spin {\n    from {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes dropdown-spin {\n    from {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  /*--------------------\n     Default Text\n----------------------*/\n\n  .ui.dropdown:not(.button) > .default.text,\n  .ui.default.dropdown:not(.button) > .text {\n    color: ", ";\n  }\n  .ui.dropdown:not(.button) > input:focus ~ .default.text,\n  .ui.default.dropdown:not(.button) > input:focus ~ .text {\n    color: ", ";\n  }\n\n  /*--------------------\n        Loading\n----------------------*/\n\n  .ui.loading.dropdown > .text {\n    -webkit-transition: none;\n    transition: none;\n  }\n\n  /* Used To Check Position */\n  .ui.dropdown .loading.menu {\n    display: block;\n    visibility: hidden;\n    z-index: -1;\n  }\n  .ui.dropdown > .loading.menu {\n    left: 0px !important;\n    right: auto !important;\n  }\n  .ui.dropdown > .menu .loading.menu {\n    left: 100% !important;\n    right: auto !important;\n  }\n\n  /*--------------------\n    Keyboard Select\n----------------------*/\n\n  /* Selected Item */\n  .ui.dropdown.selected,\n  .ui.dropdown .menu .selected.item {\n    background: rgba(0, 0, 0, 0.03);\n    color: ", ";\n  }\n\n  /*--------------------\n    Search Filtered\n----------------------*/\n\n  /* Filtered Item */\n  .ui.dropdown > .filtered.text {\n    visibility: hidden;\n  }\n  .ui.dropdown .filtered.item {\n    display: none !important;\n  }\n\n  /*--------------------\n        Error\n----------------------*/\n\n  .ui.dropdown.error,\n  .ui.dropdown.error > .text,\n  .ui.dropdown.error > .default.text {\n    color: #9f3a38;\n  }\n  .ui.selection.dropdown.error {\n    background: ", ";\n    border-color: ", ";\n  }\n  .ui.selection.dropdown.error:hover {\n    border-color: ", ";\n  }\n  .ui.dropdown.error > .menu,\n  .ui.dropdown.error > .menu .menu {\n    border-color: ", ";\n  }\n  .ui.dropdown.error > .menu > .item {\n    color: ", ";\n  }\n  .ui.multiple.selection.error.dropdown > .label {\n    border-color: ", ";\n  }\n\n  /* Item Hover */\n  .ui.dropdown.error > .menu > .item:hover {\n    background-color: ", ";\n  }\n\n  /* Item Active */\n  .ui.dropdown.error > .menu .active.item {\n    background-color: ", ";\n  }\n\n  /*--------------------\n        Clear\n----------------------*/\n\n  .ui.dropdown > .clear.dropdown.icon {\n    opacity: 0.8;\n    -webkit-transition: opacity 0.1s ease;\n    transition: opacity 0.1s ease;\n  }\n  .ui.dropdown > .clear.dropdown.icon:hover {\n    opacity: 1;\n  }\n\n  /*--------------------\n        Disabled\n----------------------*/\n\n  /* Disabled */\n  .ui.disabled.dropdown,\n  .ui.dropdown .menu > .disabled.item {\n    cursor: default;\n    pointer-events: none;\n    opacity: 0.45;\n  }\n\n  /*******************************\n           Variations\n*******************************/\n\n  /*--------------\n    Direction\n---------------*/\n\n  /* Flyout Direction */\n  .ui.dropdown .menu {\n    left: 0px;\n  }\n\n  /* Default Side (Right) */\n  .ui.dropdown .right.menu > .menu,\n  .ui.dropdown .menu .right.menu {\n    left: 100% !important;\n    right: auto !important;\n    border-radius: 0.28571429rem !important;\n  }\n\n  /* Leftward Opening Menu */\n  .ui.dropdown > .left.menu {\n    left: auto !important;\n    right: 0px !important;\n  }\n  .ui.dropdown > .left.menu .menu,\n  .ui.dropdown .menu .left.menu {\n    left: auto;\n    right: 100%;\n    margin: 0em -0.5em 0em 0em !important;\n    border-radius: 0.28571429rem !important;\n  }\n  .ui.dropdown .item .left.dropdown.icon,\n  .ui.dropdown .left.menu .item .dropdown.icon {\n    width: auto;\n    float: left;\n    margin: 0em 0em 0em 0em;\n  }\n  .ui.dropdown .item .left.dropdown.icon,\n  .ui.dropdown .left.menu .item .dropdown.icon {\n    width: auto;\n    float: left;\n    margin: 0em 0em 0em 0em;\n  }\n  .ui.dropdown .item .left.dropdown.icon + .text,\n  .ui.dropdown .left.menu .item .dropdown.icon + .text {\n    margin-left: 1em;\n    margin-right: 0em;\n  }\n\n  /*--------------\n     Upward\n---------------*/\n\n  /* Upward Main Menu */\n  .ui.upward.dropdown > .menu {\n    top: auto;\n    bottom: 100%;\n    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n    border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n  }\n\n  /* Upward Sub Menu */\n  .ui.dropdown .upward.menu {\n    top: auto !important;\n    bottom: 0 !important;\n  }\n\n  /* Active Upward */\n  .ui.simple.upward.active.dropdown,\n  .ui.simple.upward.dropdown:hover {\n    border-radius: 0.28571429rem 0.28571429rem 0em 0em !important;\n  }\n  .ui.upward.dropdown.button:not(.pointing):not(.floating).active {\n    border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n  }\n\n  /* Selection */\n  .ui.upward.selection.dropdown .menu {\n    border-top-width: 1px !important;\n    border-bottom-width: 0px !important;\n    -webkit-box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n  }\n  .ui.upward.selection.dropdown:hover {\n    -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);\n    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);\n  }\n\n  /* Active Upward */\n  .ui.active.upward.selection.dropdown {\n    border-radius: 0em 0em 20px 20px !important;\n  }\n\n  /* Visible Upward */\n  .ui.upward.selection.dropdown.visible {\n    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n    border-radius: 0em 0em 20px 20px !important;\n  }\n\n  /* Visible Hover Upward */\n  .ui.upward.active.selection.dropdown:hover {\n    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);\n  }\n  .ui.upward.active.selection.dropdown:hover .menu {\n    -webkit-box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n  }\n\n  /*--------------\n     Simple\n---------------*/\n\n  /*  Selection Menu */\n  .ui.scrolling.dropdown .menu,\n  .ui.dropdown .scrolling.menu {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n  .ui.scrolling.dropdown .menu {\n    overflow-x: hidden;\n    overflow-y: auto;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-overflow-scrolling: touch;\n    min-width: 100% !important;\n    width: auto !important;\n  }\n  .ui.dropdown .scrolling.menu {\n    position: static;\n    overflow-y: auto;\n    border: none;\n    -webkit-box-shadow: none !important;\n    box-shadow: none !important;\n    border-radius: 0 !important;\n    margin: 0 !important;\n    min-width: 100% !important;\n    width: auto !important;\n    border-top: 1px solid rgba(34, 36, 38, 0.15);\n  }\n  .ui.scrolling.dropdown .menu .item.item.item,\n  .ui.dropdown .scrolling.menu > .item.item.item {\n    border-top: none;\n  }\n  .ui.scrolling.dropdown .menu .item:first-child,\n  .ui.dropdown .scrolling.menu .item:first-child {\n    border-top: none;\n  }\n  .ui.dropdown > .animating.menu .scrolling.menu,\n  .ui.dropdown > .visible.menu .scrolling.menu {\n    display: block;\n  }\n\n  /* Scrollbar in IE */\n  @media all and (-ms-high-contrast: none) {\n    .ui.scrolling.dropdown .menu,\n    .ui.dropdown .scrolling.menu {\n      min-width: calc(100% - 17px);\n    }\n  }\n  @media only screen and (max-width: 767px) {\n    .ui.scrolling.dropdown .menu,\n    .ui.dropdown .scrolling.menu {\n      max-height: 10.28571429rem;\n    }\n  }\n  @media only screen and (min-width: 768px) {\n    .ui.scrolling.dropdown .menu,\n    .ui.dropdown .scrolling.menu {\n      max-height: 15.42857143rem;\n    }\n  }\n  @media only screen and (min-width: 992px) {\n    .ui.scrolling.dropdown .menu,\n    .ui.dropdown .scrolling.menu {\n      max-height: 20.57142857rem;\n    }\n  }\n  @media only screen and (min-width: 1920px) {\n    .ui.scrolling.dropdown .menu,\n    .ui.dropdown .scrolling.menu {\n      max-height: 20.57142857rem;\n    }\n  }\n\n  /*--------------\n     Simple\n---------------*/\n\n  /* Displays without javascript */\n  .ui.simple.dropdown .menu:before,\n  .ui.simple.dropdown .menu:after {\n    display: none;\n  }\n  .ui.simple.dropdown .menu {\n    position: absolute;\n    display: block;\n    overflow: hidden;\n    top: -9999px !important;\n    opacity: 0;\n    width: 0;\n    height: 0;\n    -webkit-transition: opacity 0.1s ease;\n    transition: opacity 0.1s ease;\n  }\n  .ui.simple.active.dropdown,\n  .ui.simple.dropdown:hover {\n    border-bottom-left-radius: 0em !important;\n    border-bottom-right-radius: 0em !important;\n  }\n  .ui.simple.active.dropdown > .menu,\n  .ui.simple.dropdown:hover > .menu {\n    overflow: visible;\n    width: auto;\n    height: auto;\n    top: 100% !important;\n    opacity: 1;\n  }\n  .ui.simple.dropdown > .menu > .item:active > .menu,\n  .ui.simple.dropdown:hover > .menu > .item:hover > .menu {\n    overflow: visible;\n    width: auto;\n    height: auto;\n    top: 0% !important;\n    left: 100% !important;\n    opacity: 1;\n  }\n  .ui.simple.disabled.dropdown:hover .menu {\n    display: none;\n    height: 0px;\n    width: 0px;\n    overflow: hidden;\n  }\n\n  /* Visible */\n  .ui.simple.visible.dropdown > .menu {\n    display: block;\n  }\n\n  /*--------------\n      Fluid\n---------------*/\n\n  .ui.fluid.dropdown {\n    display: block;\n    width: 100%;\n    min-width: 0em;\n  }\n  .ui.fluid.dropdown > .dropdown.icon {\n    float: right;\n  }\n\n  /*--------------\n    Floating\n---------------*/\n\n  .ui.floating.dropdown .menu {\n    left: 0;\n    right: auto;\n    -webkit-box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12),\n      0px 2px 10px 0px rgba(34, 36, 38, 0.15) !important;\n    box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12),\n      0px 2px 10px 0px rgba(34, 36, 38, 0.15) !important;\n    border-radius: 0.28571429rem !important;\n  }\n  .ui.floating.dropdown > .menu {\n    margin-top: 0.5em !important;\n    border-radius: 0.28571429rem !important;\n  }\n\n  /*--------------\n     Pointing\n---------------*/\n\n  .ui.pointing.dropdown > .menu {\n    top: 100%;\n    margin-top: 0.78571429rem;\n    border-radius: 0.28571429rem;\n  }\n  .ui.pointing.dropdown > .menu:after {\n    display: block;\n    position: absolute;\n    pointer-events: none;\n    content: '';\n    visibility: visible;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    width: 0.5em;\n    height: 0.5em;\n    -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n    background: #ffffff;\n    z-index: 2;\n  }\n  .ui.pointing.dropdown > .menu:after {\n    top: -0.25em;\n    left: 50%;\n    margin: 0em 0em 0em -0.25em;\n  }\n\n  /* Top Left Pointing */\n  .ui.top.left.pointing.dropdown > .menu {\n    top: 100%;\n    bottom: auto;\n    left: 0%;\n    right: auto;\n    margin: 1em 0em 0em;\n  }\n  .ui.top.left.pointing.dropdown > .menu {\n    top: 100%;\n    bottom: auto;\n    left: 0%;\n    right: auto;\n    margin: 1em 0em 0em;\n  }\n  .ui.top.left.pointing.dropdown > .menu:after {\n    top: -0.25em;\n    left: 1em;\n    right: auto;\n    margin: 0em;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n  /* Top Right Pointing */\n  .ui.top.right.pointing.dropdown > .menu {\n    top: 100%;\n    bottom: auto;\n    right: 0%;\n    left: auto;\n    margin: 1em 0em 0em;\n  }\n  .ui.top.pointing.dropdown > .left.menu:after,\n  .ui.top.right.pointing.dropdown > .menu:after {\n    top: -0.25em;\n    left: auto !important;\n    right: 1em !important;\n    margin: 0em;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n  /* Left Pointing */\n  .ui.left.pointing.dropdown > .menu {\n    top: 0%;\n    left: 100%;\n    right: auto;\n    margin: 0em 0em 0em 1em;\n  }\n  .ui.left.pointing.dropdown > .menu:after {\n    top: 1em;\n    left: -0.25em;\n    margin: 0em 0em 0em 0em;\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n  }\n  .ui.left:not(.top):not(.bottom).pointing.dropdown > .left.menu {\n    left: auto !important;\n    right: 100% !important;\n    margin: 0em 1em 0em 0em;\n  }\n  .ui.left:not(.top):not(.bottom).pointing.dropdown > .left.menu:after {\n    top: 1em;\n    left: auto;\n    right: -0.25em;\n    margin: 0em 0em 0em 0em;\n    -webkit-transform: rotate(135deg);\n    transform: rotate(135deg);\n  }\n\n  /* Right Pointing */\n  .ui.right.pointing.dropdown > .menu {\n    top: 0%;\n    left: auto;\n    right: 100%;\n    margin: 0em 1em 0em 0em;\n  }\n  .ui.right.pointing.dropdown > .menu:after {\n    top: 1em;\n    left: auto;\n    right: -0.25em;\n    margin: 0em 0em 0em 0em;\n    -webkit-transform: rotate(135deg);\n    transform: rotate(135deg);\n  }\n\n  /* Bottom Pointing */\n  .ui.bottom.pointing.dropdown > .menu {\n    top: auto;\n    bottom: 100%;\n    left: 0%;\n    right: auto;\n    margin: 0em 0em 1em;\n  }\n  .ui.bottom.pointing.dropdown > .menu:after {\n    top: auto;\n    bottom: -0.25em;\n    right: auto;\n    margin: 0em;\n    -webkit-transform: rotate(-135deg);\n    transform: rotate(-135deg);\n  }\n\n  /* Reverse Sub-Menu Direction */\n  .ui.bottom.pointing.dropdown > .menu .menu {\n    top: auto !important;\n    bottom: 0px !important;\n  }\n\n  /* Bottom Left */\n  .ui.bottom.left.pointing.dropdown > .menu {\n    left: 0%;\n    right: auto;\n  }\n  .ui.bottom.left.pointing.dropdown > .menu:after {\n    left: 1em;\n    right: auto;\n  }\n\n  /* Bottom Right */\n  .ui.bottom.right.pointing.dropdown > .menu {\n    right: 0%;\n    left: auto;\n  }\n  .ui.bottom.right.pointing.dropdown > .menu:after {\n    left: auto;\n    right: 1em;\n  }\n\n  /* Upward pointing */\n  .ui.pointing.upward.dropdown .menu,\n  .ui.top.pointing.upward.dropdown .menu {\n    top: auto !important;\n    bottom: 100% !important;\n    margin: 0em 0em 0.78571429rem;\n    border-radius: 0.28571429rem;\n  }\n  .ui.pointing.upward.dropdown .menu:after,\n  .ui.top.pointing.upward.dropdown .menu:after {\n    top: 100% !important;\n    bottom: auto !important;\n    -webkit-box-shadow: 1px 1px 0px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 1px 1px 0px 0px rgba(34, 36, 38, 0.15);\n    margin: -0.25em 0em 0em;\n  }\n\n  /* Right Pointing Upward */\n  .ui.right.pointing.upward.dropdown:not(.top):not(.bottom) .menu {\n    top: auto !important;\n    bottom: 0 !important;\n    margin: 0em 1em 0em 0em;\n  }\n  .ui.right.pointing.upward.dropdown:not(.top):not(.bottom) .menu:after {\n    top: auto !important;\n    bottom: 0 !important;\n    margin: 0em 0em 1em 0em;\n    -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n  }\n\n  /* Left Pointing Upward */\n  .ui.left.pointing.upward.dropdown:not(.top):not(.bottom) .menu {\n    top: auto !important;\n    bottom: 0 !important;\n    margin: 0em 0em 0em 1em;\n  }\n  .ui.left.pointing.upward.dropdown:not(.top):not(.bottom) .menu:after {\n    top: auto !important;\n    bottom: 0 !important;\n    margin: 0em 0em 1em 0em;\n    -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n  }\n\n  /*******************************\n         Theme Overrides\n*******************************/\n\n  /* Dropdown Carets */\n  .ui.dropdown > .dropdown.icon {\n    font-family: 'Dropdown';\n    line-height: 1;\n    height: 1em;\n    width: 1.23em;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    font-weight: normal;\n    font-style: normal;\n    text-align: center;\n  }\n  .ui.dropdown > .dropdown.icon {\n    width: auto;\n  }\n  .ui.dropdown > .dropdown.icon:before {\n    content: '\f0d7';\n  }\n\n  /* Sub Menu */\n  .ui.dropdown .menu .item .dropdown.icon:before {\n    content: '\f0da' /*rtl:'\f0d9'*/;\n  }\n  .ui.dropdown .item .left.dropdown.icon:before,\n  .ui.dropdown .left.menu .item .dropdown.icon:before {\n    content: '\f0d9' /*rtl:\"\f0da\"*/;\n  }\n\n  /* Vertical Menu Dropdown */\n  .ui.vertical.menu .dropdown.item > .dropdown.icon:before {\n    content: '\f0da' /*rtl:\"\f0d9\"*/;\n  }\n  .ui.dropdown > .clear.icon:before {\n    content: '\f00d';\n  }\n\n  .ui.selection.active.dropdown .menu::-webkit-scrollbar {\n    width: 7px;\n    border-radius: 50px;\n    z-index: -1px;\n  }\n\n  .ui.selection.active.dropdown .menu::-webkit-scrollbar-thumb {\n    background-color: ", ";\n    border-radius: 50px;\n  }\n\n  .ui.selection.active.dropdown .menu::-webkit-scrollbar-thumb:hover {\n    background-color: ", ";\n  }\n  /* Icons for Reference (Subsetted in 2.4.0)\n  .dropdown.down:before { content: \"\f0d7\"; }\n  .dropdown.up:before { content: \"\f0d8\"; }\n  .dropdown.left:before { content: \"\f0d9\"; }\n  .dropdown.right:before { content: \"\f0da\"; }\n  .dropdown.close:before { content: \"\f00d\"; }\n*/\n\n  /*******************************\n        User Overrides\n*******************************/\n\n  small {\n    margin-left: 15px;\n    font-size: 10px;\n    color: ", ";\n  }\n"], ["\n  font-family: MontSerrat !important;\n  width: 100% !important;\n  display: flex !important;\n  flex-direction: column !important;\n  padding-bottom: ", ";\n\n  label {\n    font-size: 14px;\n    margin-left: 15px;\n    color: ", ";\n  }\n  /*!\n * # Semantic UI 2.4.0 - Dropdown\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */\n\n  /*******************************\n            Dropdown\n*******************************/\n\n  .ui.dropdown {\n    cursor: pointer;\n    position: relative;\n    display: inline-block;\n    outline: none;\n    text-align: ", ";\n    color: ", ";\n    -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n    transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n    transition: box-shadow 0.1s ease, width 0.1s ease;\n    transition: box-shadow 0.1s ease, width 0.1s ease,\n      -webkit-box-shadow 0.1s ease;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n\n  /*******************************\n            Content\n*******************************/\n\n  /*--------------\n      Menu\n---------------*/\n\n  .ui.dropdown .menu {\n    cursor: auto;\n    position: absolute;\n    display: none;\n    outline: none;\n    top: 100%;\n    min-width: -webkit-max-content;\n    min-width: -moz-max-content;\n    min-width: max-content;\n    margin: 0em;\n    padding: 0em 0em;\n    background: #ffffff;\n    font-size: 1em;\n    text-shadow: none;\n    text-align: left;\n    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    border: 1px solid rgba(34, 36, 38, 0.15);\n    border-radius: ", ";\n    -webkit-transition: opacity 0.1s ease;\n    transition: opacity 0.1s ease;\n    z-index: 11;\n    will-change: transform, opacity;\n    /* border-top: ", ";\n        border-left: ", ";\n        border-right: ", "; */\n  }\n  .ui.dropdown .menu > * {\n    white-space: nowrap;\n  }\n\n  /*--------------\n  Hidden Input\n---------------*/\n\n  .ui.dropdown > input:not(.search):first-child,\n  .ui.dropdown > select {\n    display: none !important;\n  }\n\n  /*--------------\n Dropdown Icon\n---------------*/\n\n  .ui.dropdown > .dropdown.icon {\n    position: relative;\n    width: auto;\n    font-size: 0.85714286em;\n    margin: 0em 0em 0em 1em;\n  }\n  .ui.dropdown .menu > .item .dropdown.icon {\n    width: auto;\n    float: right;\n    margin: 0em 0em 0em 1em;\n  }\n  .ui.dropdown .menu > .item .dropdown.icon + .text {\n    margin-right: 1em;\n  }\n\n  /*--------------\n      Text\n---------------*/\n\n  .ui.dropdown > .text {\n    display: inline-block;\n    -webkit-transition: none;\n    transition: none;\n  }\n\n  /*--------------\n    Menu Item\n---------------*/\n\n  .ui.dropdown .menu > .item {\n    position: relative;\n    cursor: pointer;\n    display: block;\n    border: none;\n    height: auto;\n    text-align: left;\n    border-top: none;\n    line-height: 1em;\n    color: ", ";\n    padding: 0.78571429rem 1.14285714rem !important;\n    font-size: 1rem;\n    text-transform: none;\n    font-weight: normal;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    -webkit-touch-callout: none;\n  }\n  .ui.dropdown .menu > .item:first-child {\n    border-top-width: 0px;\n  }\n\n  /*--------------\n  Floated Content\n---------------*/\n\n  .ui.dropdown > .text > [class*='right floated'],\n  .ui.dropdown .menu .item > [class*='right floated'] {\n    float: right !important;\n    margin-right: 0em !important;\n    margin-left: 1em !important;\n  }\n  .ui.dropdown > .text > [class*='left floated'],\n  .ui.dropdown .menu .item > [class*='left floated'] {\n    float: left !important;\n    margin-left: 0em !important;\n    margin-right: 1em !important;\n  }\n  .ui.dropdown .menu .item > .icon.floated,\n  .ui.dropdown .menu .item > .flag.floated,\n  .ui.dropdown .menu .item > .image.floated,\n  .ui.dropdown .menu .item > img.floated {\n    margin-top: 0em;\n  }\n\n  /*--------------\n  Menu Divider\n---------------*/\n\n  .ui.dropdown .menu > .header {\n    margin: 1rem 0rem 0.75rem;\n    padding: 0em 1.14285714rem;\n    color: rgba(0, 0, 0, 0.85);\n    font-size: 0.78571429em;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n  .ui.dropdown .menu > .divider {\n    border-top: 1px solid rgba(34, 36, 38, 0.1);\n    height: 0em;\n    margin: 0.5em 0em;\n  }\n  .ui.dropdown.dropdown .menu > .input {\n    width: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 1.14285714rem 0.78571429rem;\n    min-width: 10rem;\n  }\n  .ui.dropdown .menu > .header + .input {\n    margin-top: 0em;\n  }\n  .ui.dropdown .menu > .input:not(.transparent) input {\n    padding: 0.5em 1em;\n  }\n  .ui.dropdown .menu > .input:not(.transparent) .button,\n  .ui.dropdown .menu > .input:not(.transparent) .icon,\n  .ui.dropdown .menu > .input:not(.transparent) .label {\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n  }\n\n  /*-----------------\n  Item Description\n-------------------*/\n\n  .ui.dropdown > .text > .description,\n  .ui.dropdown .menu > .item > .description {\n    float: right;\n    margin: 0em 0em 0em 1em;\n    color: rgba(0, 0, 0, 0.4);\n  }\n\n  /*-----------------\n       Message\n-------------------*/\n\n  .ui.dropdown .menu > .message {\n    padding: 0.78571429rem 1.14285714rem;\n    font-weight: normal;\n  }\n  .ui.dropdown .menu > .message:not(.ui) {\n    color: rgba(0, 0, 0, 0.4);\n  }\n\n  /*--------------\n    Sub Menu\n---------------*/\n\n  .ui.dropdown .menu .menu {\n    top: 0% !important;\n    left: 100%;\n    right: auto;\n    margin: 0em 0em 0em -0.5em !important;\n    border-radius: 0.28571429rem !important;\n    z-index: 21 !important;\n  }\n\n  /* Hide Arrow */\n  .ui.dropdown .menu .menu:after {\n    display: none;\n  }\n\n  /*--------------\n   Sub Elements\n---------------*/\n\n  /* Icons / Flags / Labels / Image */\n  .ui.dropdown > .text > .icon,\n  .ui.dropdown > .text > .label,\n  .ui.dropdown > .text > .flag,\n  .ui.dropdown > .text > img,\n  .ui.dropdown > .text > .image {\n    margin-top: 0em;\n  }\n  .ui.dropdown .menu > .item > .icon,\n  .ui.dropdown .menu > .item > .label,\n  .ui.dropdown .menu > .item > .flag,\n  .ui.dropdown .menu > .item > .image,\n  .ui.dropdown .menu > .item > img {\n    margin-top: 0em;\n  }\n  .ui.dropdown > .text > .icon,\n  .ui.dropdown > .text > .label,\n  .ui.dropdown > .text > .flag,\n  .ui.dropdown > .text > img,\n  .ui.dropdown > .text > .image,\n  .ui.dropdown .menu > .item > .icon,\n  .ui.dropdown .menu > .item > .label,\n  .ui.dropdown .menu > .item > .flag,\n  .ui.dropdown .menu > .item > .image,\n  .ui.dropdown .menu > .item > img {\n    margin-left: 0em;\n    float: none;\n    margin-right: 0.78571429rem;\n  }\n\n  /*--------------\n     Image\n---------------*/\n\n  .ui.dropdown > .text > img,\n  .ui.dropdown > .text > .image,\n  .ui.dropdown .menu > .item > .image,\n  .ui.dropdown .menu > .item > img {\n    display: inline-block;\n    vertical-align: top;\n    width: auto;\n    margin-top: -0.5em;\n    margin-bottom: -0.5em;\n    max-height: 2em;\n  }\n\n  /*******************************\n            Coupling\n*******************************/\n\n  /*--------------\n      Menu\n---------------*/\n\n  /* Remove Menu Item Divider */\n  .ui.dropdown .ui.menu > .item:before,\n  .ui.menu .ui.dropdown .menu > .item:before {\n    display: none;\n  }\n\n  /* Prevent Menu Item Border */\n  .ui.menu .ui.dropdown .menu .active.item {\n    border-left: none;\n  }\n\n  /* Automatically float dropdown menu right on last menu item */\n  .ui.menu .right.menu .dropdown:last-child .menu,\n  .ui.menu .right.dropdown.item .menu,\n  .ui.buttons > .ui.dropdown:last-child .menu {\n    left: auto;\n    right: 0em;\n  }\n\n  /*--------------\n      Label\n---------------*/\n\n  /* Dropdown Menu */\n  .ui.label.dropdown .menu {\n    min-width: 100%;\n  }\n\n  /*--------------\n     Button\n---------------*/\n\n  /* No Margin On Icon Button */\n  .ui.dropdown.icon.button > .dropdown.icon {\n    margin: 0em;\n  }\n  .ui.button.dropdown .menu {\n    min-width: 100%;\n  }\n\n  /*******************************\n              Types\n*******************************/\n\n  /*--------------\n    Selection\n---------------*/\n\n  /* Displays like a select box */\n  .ui.selection.dropdown {\n    cursor: pointer;\n    word-wrap: break-word;\n    line-height: 1em;\n    white-space: normal;\n    outline: 0;\n    -webkit-transform: rotateZ(0deg);\n    transform: rotateZ(0deg);\n    min-width: 14em;\n    min-height: 2.71428571em;\n    background: ", ";\n    display: inline-block;\n    padding: 0.78571429em 2.6em 0.78571429em 1.1em;\n    color: ", ";\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    border: 1px solid\n      ", ";\n    border-radius: ", ";\n    -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n    transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n    transition: box-shadow 0.1s ease, width 0.1s ease;\n    transition: box-shadow 0.1s ease, width 0.1s ease,\n      -webkit-box-shadow 0.1s ease;\n    border-radius: ", ";\n    border-top: ", ";\n    border-left: ", ";\n    border-right: ", ";\n  }\n  .ui.selection.dropdown.visible,\n  .ui.selection.dropdown.active {\n    z-index: 10;\n  }\n  select.ui.dropdown {\n    height: 38px;\n    padding: 0.5em;\n    border: 1px solid rgba(34, 36, 38, 0.15);\n    visibility: visible;\n  }\n  .ui.selection.dropdown > .search.icon,\n  .ui.selection.dropdown > .delete.icon,\n  .ui.selection.dropdown > .dropdown.icon {\n    cursor: pointer;\n    position: absolute;\n    width: auto;\n    height: auto;\n    line-height: 1.21428571em;\n    top: 0.78571429em;\n    right: 1em;\n    z-index: 3;\n    margin: -0.78571429em;\n    padding: 0.91666667em;\n    opacity: 0.8;\n    -webkit-transition: opacity 0.1s ease;\n    transition: opacity 0.1s ease;\n  }\n\n  /* Compact */\n  .ui.compact.selection.dropdown {\n    min-width: 0px;\n  }\n\n  /*  Selection Menu */\n  .ui.selection.dropdown .menu {\n    overflow-x: hidden;\n    overflow-y: auto;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-overflow-scrolling: touch;\n    border-top-width: 0px !important;\n    width: auto;\n    outline: none;\n    margin: 0px -1px;\n    min-width: calc(100% + 2px);\n    width: calc(100% + 2px);\n    border-radius: 0em 0em 0.28571429rem 0.28571429rem;\n    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    -webkit-transition: opacity 0.1s ease;\n    transition: opacity 0.1s ease;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n  }\n  .ui.selection.dropdown .menu:after,\n  .ui.selection.dropdown .menu:before {\n    display: none;\n  }\n\n  /*--------------\n    Message\n---------------*/\n\n  .ui.selection.dropdown .menu > .message {\n    padding: 0.78571429rem 1.14285714rem;\n  }\n  @media only screen and (max-width: 767px) {\n    .ui.selection.dropdown .menu {\n      max-height: 8.01428571rem;\n    }\n  }\n  @media only screen and (min-width: 768px) {\n    .ui.selection.dropdown .menu {\n      max-height: 10.68571429rem;\n    }\n  }\n  @media only screen and (min-width: 992px) {\n    .ui.selection.dropdown .menu {\n      max-height: 16.02857143rem;\n    }\n  }\n  @media only screen and (min-width: 1920px) {\n    .ui.selection.dropdown .menu {\n      max-height: 21.37142857rem;\n    }\n  }\n\n  /* Menu Item */\n  .ui.selection.dropdown .menu > .item {\n    border-top: 1px solid #fafafa;\n    padding: 0.78571429rem 1.04285714rem !important;\n    white-space: normal;\n    word-wrap: normal;\n  }\n\n  /* User Item */\n  .ui.selection.dropdown .menu > .hidden.addition.item {\n    display: none;\n  }\n\n  /* Hover */\n  .ui.selection.dropdown:hover {\n    border-color: ", ";\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n\n  /* Active */\n  .ui.selection.active.dropdown {\n    border-color: ", ";\n    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n  }\n  .ui.selection.active.dropdown .menu {\n    border-color: ", ";\n    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n  }\n\n  /* Focus */\n  .ui.selection.dropdown:focus {\n    border-color: ", ";\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n  .ui.selection.dropdown:focus .menu {\n    border-color: ", ";\n    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n  }\n\n  /* Visible */\n  .ui.selection.visible.dropdown > .text:not(.default) {\n    font-weight: normal;\n    color: ", ";\n  }\n\n  /* Visible Hover */\n  .ui.selection.active.dropdown:hover {\n    border-color: ", ";\n    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n  }\n  .ui.selection.active.dropdown:hover .menu {\n    border-color: ", ";\n    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n  }\n\n  /* Dropdown Icon */\n  .ui.active.selection.dropdown > .dropdown.icon,\n  .ui.visible.selection.dropdown > .dropdown.icon {\n    opacity: '';\n    z-index: 3;\n  }\n\n  /* Connecting Border */\n  .ui.active.selection.dropdown {\n    border-bottom-left-radius: 0em !important;\n    border-bottom-right-radius: 0em !important;\n  }\n\n  /* Empty Connecting Border */\n  .ui.active.empty.selection.dropdown {\n    border-radius: 0.28571429rem !important;\n    -webkit-box-shadow: none !important;\n    box-shadow: none !important;\n  }\n  .ui.active.empty.selection.dropdown .menu {\n    border: none !important;\n    -webkit-box-shadow: none !important;\n    box-shadow: none !important;\n  }\n\n  /*--------------\n   Searchable\n---------------*/\n\n  /* Search Selection */\n  .ui.search.dropdown {\n    min-width: '';\n  }\n\n  /* Search Dropdown */\n  .ui.search.dropdown > input.search {\n    background: none transparent !important;\n    border: none !important;\n    -webkit-box-shadow: none !important;\n    box-shadow: none !important;\n    cursor: text;\n    top: 0em;\n    left: 1px;\n    width: 100%;\n    outline: none;\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n    padding: inherit;\n    color: ", ";\n    text-align: ", ";\n  }\n\n  /* Text Layering */\n  .ui.search.dropdown > input.search {\n    position: absolute;\n    z-index: 2;\n  }\n  .ui.search.dropdown > .text {\n    cursor: text;\n    position: relative;\n    left: 1px;\n    z-index: 3;\n  }\n\n  /* Search Selection */\n  .ui.search.selection.dropdown > input.search {\n    line-height: 1.21428571em;\n    padding: 0.67857143em 2.1em 0.67857143em 1em;\n  }\n\n  /* Used to size multi select input to character width */\n  .ui.search.selection.dropdown > span.sizer {\n    line-height: 1.21428571em;\n    padding: 0.67857143em 2.1em 0.67857143em 1em;\n    display: none;\n    white-space: pre;\n  }\n\n  /* Active/Visible Search */\n  .ui.search.dropdown.active > input.search,\n  .ui.search.dropdown.visible > input.search {\n    cursor: auto;\n    color: ", ";\n  }\n  .ui.search.dropdown.active > .text,\n  .ui.search.dropdown.visible > .text {\n    pointer-events: none;\n  }\n\n  /* Filtered Text */\n  .ui.active.search.dropdown input.search:focus + .text .icon,\n  .ui.active.search.dropdown input.search:focus + .text .flag {\n    opacity: 0.45;\n  }\n  .ui.active.search.dropdown input.search:focus + .text {\n    color: rgba(115, 115, 115, 0.87) !important;\n  }\n\n  .input.search::placeholder {\n    color: ", ";\n  }\n  /* Search Menu */\n  .ui.search.dropdown .menu {\n    overflow-x: hidden;\n    overflow-y: auto;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-overflow-scrolling: touch;\n  }\n  @media only screen and (max-width: 767px) {\n    .ui.search.dropdown .menu {\n      max-height: 8.01428571rem;\n    }\n  }\n  @media only screen and (min-width: 768px) {\n    .ui.search.dropdown .menu {\n      max-height: 10.68571429rem;\n    }\n  }\n  @media only screen and (min-width: 992px) {\n    .ui.search.dropdown .menu {\n      max-height: 16.02857143rem;\n    }\n  }\n  @media only screen and (min-width: 1920px) {\n    .ui.search.dropdown .menu {\n      max-height: 21.37142857rem;\n    }\n  }\n\n  /*--------------\n    Multiple\n---------------*/\n\n  /* Multiple Selection */\n  .ui.multiple.dropdown {\n    padding: 0.22619048em 2.1em 0.22619048em 0.35714286em;\n  }\n  .ui.multiple.dropdown .menu {\n    cursor: auto;\n  }\n\n  /* Multiple Search Selection */\n  .ui.multiple.search.dropdown,\n  .ui.multiple.search.dropdown > input.search {\n    cursor: text;\n  }\n\n  /* Selection Label */\n  .ui.multiple.dropdown > .label {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    display: inline-block;\n    vertical-align: top;\n    white-space: normal;\n    font-size: 1em;\n    padding: 0.35714286em 0.78571429em;\n    margin: 0.14285714rem 0.28571429rem 0.14285714rem 0.5em;\n    -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;\n    box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;\n    border-radius: 20px;\n    color: ", ";\n    background-color: ", ";\n  }\n\n  /* Dropdown Icon */\n  .ui.multiple.dropdown .dropdown.icon {\n    margin: '';\n    padding: '';\n  }\n\n  /* Text */\n  .ui.multiple.dropdown > .text {\n    position: static;\n    padding: 0;\n    max-width: 100%;\n    margin: 0.45238095em 0em 0.45238095em 0.64285714em;\n    line-height: 1.21428571em;\n  }\n  .ui.multiple.dropdown > .label ~ input.search {\n    margin-left: 0.14285714em !important;\n  }\n  .ui.multiple.dropdown > .label ~ .text {\n    display: none;\n  }\n\n  /*-----------------\n  Multiple Search\n-----------------*/\n\n  /* Prompt Text */\n  .ui.multiple.search.dropdown > .text {\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: inherit;\n    margin: 0.45238095em 0em 0.45238095em 0.64285714em;\n    line-height: 1.21428571em;\n  }\n  .ui.multiple.search.dropdown > .label ~ .text {\n    display: none;\n  }\n\n  /* Search */\n  .ui.multiple.search.dropdown > input.search {\n    position: static;\n    padding: 0;\n    max-width: 100%;\n    margin: 0.45238095em 0em 0.45238095em 0.64285714em;\n    width: 2.2em;\n    line-height: 1.21428571em;\n  }\n\n  /*--------------\n     Inline\n---------------*/\n\n  .ui.inline.dropdown {\n    cursor: pointer;\n    display: inline-block;\n    color: inherit;\n  }\n  .ui.inline.dropdown .dropdown.icon {\n    margin: 0em 0.21428571em 0em 0.21428571em;\n    vertical-align: baseline;\n  }\n  .ui.inline.dropdown > .text {\n    font-weight: bold;\n  }\n  .ui.inline.dropdown .menu {\n    cursor: auto;\n    margin-top: 0.21428571em;\n    border-radius: 0.28571429rem;\n  }\n\n  /*******************************\n            States\n*******************************/\n\n  /*--------------------\n        Active\n----------------------*/\n\n  /* Menu Item Active */\n  .ui.dropdown .menu .active.item {\n    background: transparent;\n    font-weight: bold;\n    color: ", ";\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    z-index: 12;\n  }\n\n  /*--------------------\n        Hover\n----------------------*/\n\n  /* Menu Item Hover */\n  .ui.dropdown .menu > .item:hover {\n    background: rgba(0, 0, 0, 0.05);\n    color: ", ";\n    z-index: 13;\n  }\n\n  /*--------------------\n       Loading\n---------------------*/\n\n  .ui.loading.dropdown > i.icon {\n    height: 1em !important;\n  }\n  .ui.loading.selection.dropdown > i.icon {\n    padding: 1.5em 1.28571429em !important;\n  }\n  .ui.loading.dropdown > i.icon:before {\n    position: absolute;\n    content: '';\n    top: 50%;\n    left: 50%;\n    margin: -0.64285714em 0em 0em -0.64285714em;\n    width: 1.28571429em;\n    height: 1.28571429em;\n    border-radius: 500rem;\n    border: 0.2em solid rgba(0, 0, 0, 0.1);\n  }\n  .ui.loading.dropdown > i.icon:after {\n    position: absolute;\n    content: '';\n    top: 50%;\n    left: 50%;\n    -webkit-box-shadow: 0px 0px 0px 1px transparent;\n    box-shadow: 0px 0px 0px 1px transparent;\n    margin: -0.64285714em 0em 0em -0.64285714em;\n    width: 1.28571429em;\n    height: 1.28571429em;\n    -webkit-animation: dropdown-spin 0.6s linear;\n    animation: dropdown-spin 0.6s linear;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    border-radius: 500rem;\n    border-color: ", " transparent transparent;\n    border-style: solid;\n    border-width: 0.2em;\n  }\n\n  /* Coupling */\n  .ui.loading.dropdown.button > i.icon:before,\n  .ui.loading.dropdown.button > i.icon:after {\n    display: none;\n  }\n  @-webkit-keyframes dropdown-spin {\n    from {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes dropdown-spin {\n    from {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  /*--------------------\n     Default Text\n----------------------*/\n\n  .ui.dropdown:not(.button) > .default.text,\n  .ui.default.dropdown:not(.button) > .text {\n    color: ", ";\n  }\n  .ui.dropdown:not(.button) > input:focus ~ .default.text,\n  .ui.default.dropdown:not(.button) > input:focus ~ .text {\n    color: ", ";\n  }\n\n  /*--------------------\n        Loading\n----------------------*/\n\n  .ui.loading.dropdown > .text {\n    -webkit-transition: none;\n    transition: none;\n  }\n\n  /* Used To Check Position */\n  .ui.dropdown .loading.menu {\n    display: block;\n    visibility: hidden;\n    z-index: -1;\n  }\n  .ui.dropdown > .loading.menu {\n    left: 0px !important;\n    right: auto !important;\n  }\n  .ui.dropdown > .menu .loading.menu {\n    left: 100% !important;\n    right: auto !important;\n  }\n\n  /*--------------------\n    Keyboard Select\n----------------------*/\n\n  /* Selected Item */\n  .ui.dropdown.selected,\n  .ui.dropdown .menu .selected.item {\n    background: rgba(0, 0, 0, 0.03);\n    color: ", ";\n  }\n\n  /*--------------------\n    Search Filtered\n----------------------*/\n\n  /* Filtered Item */\n  .ui.dropdown > .filtered.text {\n    visibility: hidden;\n  }\n  .ui.dropdown .filtered.item {\n    display: none !important;\n  }\n\n  /*--------------------\n        Error\n----------------------*/\n\n  .ui.dropdown.error,\n  .ui.dropdown.error > .text,\n  .ui.dropdown.error > .default.text {\n    color: #9f3a38;\n  }\n  .ui.selection.dropdown.error {\n    background: ", ";\n    border-color: ", ";\n  }\n  .ui.selection.dropdown.error:hover {\n    border-color: ", ";\n  }\n  .ui.dropdown.error > .menu,\n  .ui.dropdown.error > .menu .menu {\n    border-color: ", ";\n  }\n  .ui.dropdown.error > .menu > .item {\n    color: ", ";\n  }\n  .ui.multiple.selection.error.dropdown > .label {\n    border-color: ", ";\n  }\n\n  /* Item Hover */\n  .ui.dropdown.error > .menu > .item:hover {\n    background-color: ", ";\n  }\n\n  /* Item Active */\n  .ui.dropdown.error > .menu .active.item {\n    background-color: ", ";\n  }\n\n  /*--------------------\n        Clear\n----------------------*/\n\n  .ui.dropdown > .clear.dropdown.icon {\n    opacity: 0.8;\n    -webkit-transition: opacity 0.1s ease;\n    transition: opacity 0.1s ease;\n  }\n  .ui.dropdown > .clear.dropdown.icon:hover {\n    opacity: 1;\n  }\n\n  /*--------------------\n        Disabled\n----------------------*/\n\n  /* Disabled */\n  .ui.disabled.dropdown,\n  .ui.dropdown .menu > .disabled.item {\n    cursor: default;\n    pointer-events: none;\n    opacity: 0.45;\n  }\n\n  /*******************************\n           Variations\n*******************************/\n\n  /*--------------\n    Direction\n---------------*/\n\n  /* Flyout Direction */\n  .ui.dropdown .menu {\n    left: 0px;\n  }\n\n  /* Default Side (Right) */\n  .ui.dropdown .right.menu > .menu,\n  .ui.dropdown .menu .right.menu {\n    left: 100% !important;\n    right: auto !important;\n    border-radius: 0.28571429rem !important;\n  }\n\n  /* Leftward Opening Menu */\n  .ui.dropdown > .left.menu {\n    left: auto !important;\n    right: 0px !important;\n  }\n  .ui.dropdown > .left.menu .menu,\n  .ui.dropdown .menu .left.menu {\n    left: auto;\n    right: 100%;\n    margin: 0em -0.5em 0em 0em !important;\n    border-radius: 0.28571429rem !important;\n  }\n  .ui.dropdown .item .left.dropdown.icon,\n  .ui.dropdown .left.menu .item .dropdown.icon {\n    width: auto;\n    float: left;\n    margin: 0em 0em 0em 0em;\n  }\n  .ui.dropdown .item .left.dropdown.icon,\n  .ui.dropdown .left.menu .item .dropdown.icon {\n    width: auto;\n    float: left;\n    margin: 0em 0em 0em 0em;\n  }\n  .ui.dropdown .item .left.dropdown.icon + .text,\n  .ui.dropdown .left.menu .item .dropdown.icon + .text {\n    margin-left: 1em;\n    margin-right: 0em;\n  }\n\n  /*--------------\n     Upward\n---------------*/\n\n  /* Upward Main Menu */\n  .ui.upward.dropdown > .menu {\n    top: auto;\n    bottom: 100%;\n    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n    border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n  }\n\n  /* Upward Sub Menu */\n  .ui.dropdown .upward.menu {\n    top: auto !important;\n    bottom: 0 !important;\n  }\n\n  /* Active Upward */\n  .ui.simple.upward.active.dropdown,\n  .ui.simple.upward.dropdown:hover {\n    border-radius: 0.28571429rem 0.28571429rem 0em 0em !important;\n  }\n  .ui.upward.dropdown.button:not(.pointing):not(.floating).active {\n    border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n  }\n\n  /* Selection */\n  .ui.upward.selection.dropdown .menu {\n    border-top-width: 1px !important;\n    border-bottom-width: 0px !important;\n    -webkit-box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n  }\n  .ui.upward.selection.dropdown:hover {\n    -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);\n    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);\n  }\n\n  /* Active Upward */\n  .ui.active.upward.selection.dropdown {\n    border-radius: 0em 0em 20px 20px !important;\n  }\n\n  /* Visible Upward */\n  .ui.upward.selection.dropdown.visible {\n    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n    border-radius: 0em 0em 20px 20px !important;\n  }\n\n  /* Visible Hover Upward */\n  .ui.upward.active.selection.dropdown:hover {\n    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);\n  }\n  .ui.upward.active.selection.dropdown:hover .menu {\n    -webkit-box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n    box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n  }\n\n  /*--------------\n     Simple\n---------------*/\n\n  /*  Selection Menu */\n  .ui.scrolling.dropdown .menu,\n  .ui.dropdown .scrolling.menu {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n  .ui.scrolling.dropdown .menu {\n    overflow-x: hidden;\n    overflow-y: auto;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-overflow-scrolling: touch;\n    min-width: 100% !important;\n    width: auto !important;\n  }\n  .ui.dropdown .scrolling.menu {\n    position: static;\n    overflow-y: auto;\n    border: none;\n    -webkit-box-shadow: none !important;\n    box-shadow: none !important;\n    border-radius: 0 !important;\n    margin: 0 !important;\n    min-width: 100% !important;\n    width: auto !important;\n    border-top: 1px solid rgba(34, 36, 38, 0.15);\n  }\n  .ui.scrolling.dropdown .menu .item.item.item,\n  .ui.dropdown .scrolling.menu > .item.item.item {\n    border-top: none;\n  }\n  .ui.scrolling.dropdown .menu .item:first-child,\n  .ui.dropdown .scrolling.menu .item:first-child {\n    border-top: none;\n  }\n  .ui.dropdown > .animating.menu .scrolling.menu,\n  .ui.dropdown > .visible.menu .scrolling.menu {\n    display: block;\n  }\n\n  /* Scrollbar in IE */\n  @media all and (-ms-high-contrast: none) {\n    .ui.scrolling.dropdown .menu,\n    .ui.dropdown .scrolling.menu {\n      min-width: calc(100% - 17px);\n    }\n  }\n  @media only screen and (max-width: 767px) {\n    .ui.scrolling.dropdown .menu,\n    .ui.dropdown .scrolling.menu {\n      max-height: 10.28571429rem;\n    }\n  }\n  @media only screen and (min-width: 768px) {\n    .ui.scrolling.dropdown .menu,\n    .ui.dropdown .scrolling.menu {\n      max-height: 15.42857143rem;\n    }\n  }\n  @media only screen and (min-width: 992px) {\n    .ui.scrolling.dropdown .menu,\n    .ui.dropdown .scrolling.menu {\n      max-height: 20.57142857rem;\n    }\n  }\n  @media only screen and (min-width: 1920px) {\n    .ui.scrolling.dropdown .menu,\n    .ui.dropdown .scrolling.menu {\n      max-height: 20.57142857rem;\n    }\n  }\n\n  /*--------------\n     Simple\n---------------*/\n\n  /* Displays without javascript */\n  .ui.simple.dropdown .menu:before,\n  .ui.simple.dropdown .menu:after {\n    display: none;\n  }\n  .ui.simple.dropdown .menu {\n    position: absolute;\n    display: block;\n    overflow: hidden;\n    top: -9999px !important;\n    opacity: 0;\n    width: 0;\n    height: 0;\n    -webkit-transition: opacity 0.1s ease;\n    transition: opacity 0.1s ease;\n  }\n  .ui.simple.active.dropdown,\n  .ui.simple.dropdown:hover {\n    border-bottom-left-radius: 0em !important;\n    border-bottom-right-radius: 0em !important;\n  }\n  .ui.simple.active.dropdown > .menu,\n  .ui.simple.dropdown:hover > .menu {\n    overflow: visible;\n    width: auto;\n    height: auto;\n    top: 100% !important;\n    opacity: 1;\n  }\n  .ui.simple.dropdown > .menu > .item:active > .menu,\n  .ui.simple.dropdown:hover > .menu > .item:hover > .menu {\n    overflow: visible;\n    width: auto;\n    height: auto;\n    top: 0% !important;\n    left: 100% !important;\n    opacity: 1;\n  }\n  .ui.simple.disabled.dropdown:hover .menu {\n    display: none;\n    height: 0px;\n    width: 0px;\n    overflow: hidden;\n  }\n\n  /* Visible */\n  .ui.simple.visible.dropdown > .menu {\n    display: block;\n  }\n\n  /*--------------\n      Fluid\n---------------*/\n\n  .ui.fluid.dropdown {\n    display: block;\n    width: 100%;\n    min-width: 0em;\n  }\n  .ui.fluid.dropdown > .dropdown.icon {\n    float: right;\n  }\n\n  /*--------------\n    Floating\n---------------*/\n\n  .ui.floating.dropdown .menu {\n    left: 0;\n    right: auto;\n    -webkit-box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12),\n      0px 2px 10px 0px rgba(34, 36, 38, 0.15) !important;\n    box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12),\n      0px 2px 10px 0px rgba(34, 36, 38, 0.15) !important;\n    border-radius: 0.28571429rem !important;\n  }\n  .ui.floating.dropdown > .menu {\n    margin-top: 0.5em !important;\n    border-radius: 0.28571429rem !important;\n  }\n\n  /*--------------\n     Pointing\n---------------*/\n\n  .ui.pointing.dropdown > .menu {\n    top: 100%;\n    margin-top: 0.78571429rem;\n    border-radius: 0.28571429rem;\n  }\n  .ui.pointing.dropdown > .menu:after {\n    display: block;\n    position: absolute;\n    pointer-events: none;\n    content: '';\n    visibility: visible;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    width: 0.5em;\n    height: 0.5em;\n    -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n    background: #ffffff;\n    z-index: 2;\n  }\n  .ui.pointing.dropdown > .menu:after {\n    top: -0.25em;\n    left: 50%;\n    margin: 0em 0em 0em -0.25em;\n  }\n\n  /* Top Left Pointing */\n  .ui.top.left.pointing.dropdown > .menu {\n    top: 100%;\n    bottom: auto;\n    left: 0%;\n    right: auto;\n    margin: 1em 0em 0em;\n  }\n  .ui.top.left.pointing.dropdown > .menu {\n    top: 100%;\n    bottom: auto;\n    left: 0%;\n    right: auto;\n    margin: 1em 0em 0em;\n  }\n  .ui.top.left.pointing.dropdown > .menu:after {\n    top: -0.25em;\n    left: 1em;\n    right: auto;\n    margin: 0em;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n  /* Top Right Pointing */\n  .ui.top.right.pointing.dropdown > .menu {\n    top: 100%;\n    bottom: auto;\n    right: 0%;\n    left: auto;\n    margin: 1em 0em 0em;\n  }\n  .ui.top.pointing.dropdown > .left.menu:after,\n  .ui.top.right.pointing.dropdown > .menu:after {\n    top: -0.25em;\n    left: auto !important;\n    right: 1em !important;\n    margin: 0em;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n  /* Left Pointing */\n  .ui.left.pointing.dropdown > .menu {\n    top: 0%;\n    left: 100%;\n    right: auto;\n    margin: 0em 0em 0em 1em;\n  }\n  .ui.left.pointing.dropdown > .menu:after {\n    top: 1em;\n    left: -0.25em;\n    margin: 0em 0em 0em 0em;\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n  }\n  .ui.left:not(.top):not(.bottom).pointing.dropdown > .left.menu {\n    left: auto !important;\n    right: 100% !important;\n    margin: 0em 1em 0em 0em;\n  }\n  .ui.left:not(.top):not(.bottom).pointing.dropdown > .left.menu:after {\n    top: 1em;\n    left: auto;\n    right: -0.25em;\n    margin: 0em 0em 0em 0em;\n    -webkit-transform: rotate(135deg);\n    transform: rotate(135deg);\n  }\n\n  /* Right Pointing */\n  .ui.right.pointing.dropdown > .menu {\n    top: 0%;\n    left: auto;\n    right: 100%;\n    margin: 0em 1em 0em 0em;\n  }\n  .ui.right.pointing.dropdown > .menu:after {\n    top: 1em;\n    left: auto;\n    right: -0.25em;\n    margin: 0em 0em 0em 0em;\n    -webkit-transform: rotate(135deg);\n    transform: rotate(135deg);\n  }\n\n  /* Bottom Pointing */\n  .ui.bottom.pointing.dropdown > .menu {\n    top: auto;\n    bottom: 100%;\n    left: 0%;\n    right: auto;\n    margin: 0em 0em 1em;\n  }\n  .ui.bottom.pointing.dropdown > .menu:after {\n    top: auto;\n    bottom: -0.25em;\n    right: auto;\n    margin: 0em;\n    -webkit-transform: rotate(-135deg);\n    transform: rotate(-135deg);\n  }\n\n  /* Reverse Sub-Menu Direction */\n  .ui.bottom.pointing.dropdown > .menu .menu {\n    top: auto !important;\n    bottom: 0px !important;\n  }\n\n  /* Bottom Left */\n  .ui.bottom.left.pointing.dropdown > .menu {\n    left: 0%;\n    right: auto;\n  }\n  .ui.bottom.left.pointing.dropdown > .menu:after {\n    left: 1em;\n    right: auto;\n  }\n\n  /* Bottom Right */\n  .ui.bottom.right.pointing.dropdown > .menu {\n    right: 0%;\n    left: auto;\n  }\n  .ui.bottom.right.pointing.dropdown > .menu:after {\n    left: auto;\n    right: 1em;\n  }\n\n  /* Upward pointing */\n  .ui.pointing.upward.dropdown .menu,\n  .ui.top.pointing.upward.dropdown .menu {\n    top: auto !important;\n    bottom: 100% !important;\n    margin: 0em 0em 0.78571429rem;\n    border-radius: 0.28571429rem;\n  }\n  .ui.pointing.upward.dropdown .menu:after,\n  .ui.top.pointing.upward.dropdown .menu:after {\n    top: 100% !important;\n    bottom: auto !important;\n    -webkit-box-shadow: 1px 1px 0px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: 1px 1px 0px 0px rgba(34, 36, 38, 0.15);\n    margin: -0.25em 0em 0em;\n  }\n\n  /* Right Pointing Upward */\n  .ui.right.pointing.upward.dropdown:not(.top):not(.bottom) .menu {\n    top: auto !important;\n    bottom: 0 !important;\n    margin: 0em 1em 0em 0em;\n  }\n  .ui.right.pointing.upward.dropdown:not(.top):not(.bottom) .menu:after {\n    top: auto !important;\n    bottom: 0 !important;\n    margin: 0em 0em 1em 0em;\n    -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n  }\n\n  /* Left Pointing Upward */\n  .ui.left.pointing.upward.dropdown:not(.top):not(.bottom) .menu {\n    top: auto !important;\n    bottom: 0 !important;\n    margin: 0em 0em 0em 1em;\n  }\n  .ui.left.pointing.upward.dropdown:not(.top):not(.bottom) .menu:after {\n    top: auto !important;\n    bottom: 0 !important;\n    margin: 0em 0em 1em 0em;\n    -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n    box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n  }\n\n  /*******************************\n         Theme Overrides\n*******************************/\n\n  /* Dropdown Carets */\n  .ui.dropdown > .dropdown.icon {\n    font-family: 'Dropdown';\n    line-height: 1;\n    height: 1em;\n    width: 1.23em;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    font-weight: normal;\n    font-style: normal;\n    text-align: center;\n  }\n  .ui.dropdown > .dropdown.icon {\n    width: auto;\n  }\n  .ui.dropdown > .dropdown.icon:before {\n    content: '\\f0d7';\n  }\n\n  /* Sub Menu */\n  .ui.dropdown .menu .item .dropdown.icon:before {\n    content: '\\f0da' /*rtl:'\\f0d9'*/;\n  }\n  .ui.dropdown .item .left.dropdown.icon:before,\n  .ui.dropdown .left.menu .item .dropdown.icon:before {\n    content: '\\f0d9' /*rtl:\"\\f0da\"*/;\n  }\n\n  /* Vertical Menu Dropdown */\n  .ui.vertical.menu .dropdown.item > .dropdown.icon:before {\n    content: '\\f0da' /*rtl:\"\\f0d9\"*/;\n  }\n  .ui.dropdown > .clear.icon:before {\n    content: '\\f00d';\n  }\n\n  .ui.selection.active.dropdown .menu::-webkit-scrollbar {\n    width: 7px;\n    border-radius: 50px;\n    z-index: -1px;\n  }\n\n  .ui.selection.active.dropdown .menu::-webkit-scrollbar-thumb {\n    background-color: ", ";\n    border-radius: 50px;\n  }\n\n  .ui.selection.active.dropdown .menu::-webkit-scrollbar-thumb:hover {\n    background-color: ", ";\n  }\n  /* Icons for Reference (Subsetted in 2.4.0)\n  .dropdown.down:before { content: \"\\f0d7\"; }\n  .dropdown.up:before { content: \"\\f0d8\"; }\n  .dropdown.left:before { content: \"\\f0d9\"; }\n  .dropdown.right:before { content: \"\\f0da\"; }\n  .dropdown.close:before { content: \"\\f00d\"; }\n*/\n\n  /*******************************\n        User Overrides\n*******************************/\n\n  small {\n    margin-left: 15px;\n    font-size: 10px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.error ? '' : '20px';
}, function (props) {
  if (props.error) return colors.brand20;
  return colors.brand10;
}, function (props) {
  return props.textAlign && props.textAlign === 'center' ? 'center' : 'left';
}, colors.gray20, function (props) {
  return props.line ? '0' : '0.28571429rem';
}, function (props) {
  return props.line ? 'none' : '';
}, function (props) {
  return props.line ? 'none' : '';
}, function (props) {
  return props.line ? 'none' : '';
}, function (props) {
  return props.brand ? colors.brand10 : colors.gray20;
}, function (props) {
  return props.brand ? colors.brandLight : colors.white;
}, function (props) {
  return props.brand ? colors.brand10 : colors.gray20;
}, function (props) {
  return props.brand ? colors.brandLight : props.line ? colors.gray10 : 'rgba(34, 36, 38, 0.15)';
}, function (props) {
  return props.line ? 0 : '0.28571429rem';
}, function (props) {
  return props.line ? 'none' : '20px';
}, function (props) {
  return props.line ? 'none' : '';
}, function (props) {
  return props.line ? 'none' : '';
}, function (props) {
  return props.line ? 'none' : '';
}, function (props) {
  return props.brand ? colors.brandLight : colors.gray10;
}, function (props) {
  return props.brand ? colors.brandTransparent : colors.gray10;
}, function (props) {
  return props.error ? colors.brand20 : props.brand ? colors.brandLight : colors.gray10;
}, function (props) {
  return props.error ? colors.brand20 : props.brand ? colors.brandLight : colors.gray10;
}, function (props) {
  return props.error ? colors.brand20 : props.brand ? colors.brandLight : colors.gray10;
}, function (props) {
  return props.brand ? colors.brandDark : colors.black;
}, function (props) {
  return props.error ? colors.brand20 : props.brand ? colors.brandLight : colors.gray10;
}, function (props) {
  return props.error ? colors.brand20 : props.brand ? colors.brandLight : colors.gray10;
}, function (props) {
  return props.brand ? colors.brand10 : colors.gray20;
}, function (props) {
  return props.textAlign && props.textAlign === 'center' ? 'center' : 'left';
}, function (props) {
  return props.brand ? colors.brandDark : colors.black;
}, function (props) {
  return props.brand ? colors.brandTransparent : colors.gray10;
}, function (props) {
  return props.brand ? colors.brandLight : colors.gray20;
}, function (props) {
  return props.brand ? colors.brand10 : colors.card;
}, function (props) {
  return props.brand ? colors.brandDark : colors.black;
}, function (props) {
  return props.brand ? colors.brandDark : colors.black;
}, colors.brand10, function (props) {
  return props.brand ? colors.brand10 : colors.default20;
}, function (props) {
  return props.brand ? colors.brand10 : colors.default20;
}, function (props) {
  return props.brand ? colors.brandDark : colors.black;
}, function (props) {
  return props.line ? colors.white : colors.error;
}, colors.brand20, colors.brand20, colors.brand20, colors.brand20, colors.brand20, colors.error, colors.error, colors.brand10, colors.brandTransparent2, colors.brand20);

var _excluded$4 = ["options", "brand", "textAlign", "errorMessage", "label", "line", "containerClassName", "containerStyle", "errorClassName", "errorStyle", "labelClassName", "labelStyle"];

function Dropdown(_ref) {
  var options = _ref.options,
      brand = _ref.brand,
      textAlign = _ref.textAlign,
      errorMessage = _ref.errorMessage,
      label = _ref.label,
      line = _ref.line,
      containerClassName = _ref.containerClassName,
      containerStyle = _ref.containerStyle,
      errorClassName = _ref.errorClassName,
      errorStyle = _ref.errorStyle,
      labelClassName = _ref.labelClassName,
      labelStyle = _ref.labelStyle,
      rest = _objectWithoutPropertiesLoose$2(_ref, _excluded$4);

  return jsxRuntime.jsxs(Container$5, Object.assign({
    brand: brand,
    textAlign: textAlign,
    error: errorMessage,
    line: line,
    className: containerClassName,
    style: containerStyle,
    role: "group"
  }, {
    children: [label && jsxRuntime.jsx("label", Object.assign({
      className: labelClassName,
      style: labelStyle
    }, {
      children: label
    }), void 0), jsxRuntime.jsx(semanticUiReact.Dropdown, Object.assign({}, rest, {
      selection: true,
      noResultsMessage: "Nenhum resultado encontrado",
      error: !!errorMessage || rest.error,
      options: options
    }), void 0), errorMessage && jsxRuntime.jsx("small", Object.assign({
      className: errorClassName,
      style: errorStyle
    }, {
      children: errorMessage
    }), void 0)]
  }), void 0);
}

var _templateObject$7, _templateObject2$5, _templateObject3$5, _templateObject4$3, _templateObject5$2, _templateObject6$2;
var InputContainer = styled__default["default"].div(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  position: relative;\n  opacity: ", ";\n  width: ", ";\n\n  input {\n    font-family: MontSerrat !important;\n    color: ", ";\n    width: 100%;\n    height: 100%;\n    padding-top: 20px;\n    padding-left: ", ";\n    padding-bottom: 5px;\n    padding-right: ", ";\n    border: none;\n    outline: none;\n    background-color: transparent;\n\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  ", "\n\n  input:disabled {\n    background-color: transparent;\n  }\n\n  .label-container {\n    font-family: MontSerrat !important;\n    position: absolute;\n    bottom: 0px;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    right: 100%;\n    pointer-events: none;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: ", ";\n\n    color: ", ";\n  }\n\n  span,\n  label {\n    font-family: MontSerrat !important;\n    position: absolute;\n    bottom: 5px;\n    left: ", ";\n\n    transition: all 0.3s ease;\n\n    ", "\n  }\n\n  .icon {\n    position: absolute;\n    bottom: 0;\n    padding: 5px 10px;\n    ", "\n  }\n\n  .icon-action {\n    position: absolute;\n    bottom: 0;\n    padding: 5px 10px;\n    ", "\n  }\n\n  @keyframes onAutoFillStart {\n  }\n\n  input:-webkit-autofill {\n    animation: onAutoFillStart;\n  }\n\n  /* @keyframes onAutoFillCancel {\n  }\n\n  input:not(:-webkit-autofill) {\n    animation-name: onAutoFillCancel;\n  } */\n"])), function (props) {
  return props.disabled ? '0.5' : '1';
}, function (props) {
  return getMeasurement(props.width, '100%');
}, function (props) {
  return props.textColor || colors.gray20;
}, function (props) {
  if (props.icon && !props.action) {
    if (props.iconPosition === 'right') {
      return '15px';
    }

    return '40px';
  }

  if (props.action && !props.icon) {
    if (props.actionPosition === 'left') {
      return '40px';
    }

    return '15px';
  }

  if (props.action || props.icon) {
    return '40px';
  }

  return '15px';
}, function (props) {
  if (props.icon && !props.action) {
    if (props.iconPosition === 'right') {
      return '40px';
    }

    return '0px';
  }

  if (props.action && !props.icon) {
    if (props.actionPosition === 'left') {
      return '0px';
    }

    return '40px';
  }

  if (props.action && props.icon) {
    return '40px';
  }

  return '0px';
}, colors.default10, function (props) {
  return props.date && !props.isFieldActive ? styled.css(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteralLoose(["\n          input::-webkit-calendar-picker-indicator {\n            display: none !important;\n          }\n\n          input[type='date']::-webkit-input-placeholder {\n            display: none !important;\n            visibility: hidden !important;\n            -webkit-appearance: none;\n          }\n\n          input[type='date']::-webkit-datetime-edit-fields-wrapper,\n          input[type='date']::-webkit-datetime-edit-fields-wrapper {\n            visibility: hidden;\n          }\n        "]))) : null;
}, function (props) {
  if ((props.requiredText || props.errorMessage) && props.errorColor) {
    return props.errorColor;
  }

  if (props.requiredText || props.errorMessage) {
    return colors.danger20;
  }

  return colors.gray10;
}, function (props) {
  return props.isFieldActive ? colors.brand10 : colors.gray20;
}, function (props) {
  if (props.icon && !props.action) {
    if (props.iconPosition === 'right') {
      return '15px';
    }

    return '40px';
  }

  if (props.action && !props.icon) {
    if (props.actionPosition === 'left') {
      return '40px';
    }

    return '15px';
  }

  if (props.action || props.icon) {
    return '40px';
  }

  return '15px';
}, function (props) {
  return props.isFieldActive ? styled.css(_templateObject3$5 || (_templateObject3$5 = _taggedTemplateLiteralLoose(["\n            transform: translateY(-100%);\n            font-size: 0.875rem;\n            color: ", ";\n          "])), function () {
    if ((props.requiredText || props.errorMessage) && props.errorColor) {
      return props.errorColor;
    }

    if (props.requiredText || props.errorMessage) {
      return colors.danger20;
    }

    return colors.brand10;
  }) : styled.css(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteralLoose(["\n            font-size: 1rem;\n            color: ", ";\n          "])), function () {
    if ((props.requiredText || props.errorMessage) && props.errorColor) {
      return props.errorColor;
    }

    if (props.requiredText || props.errorMessage) {
      return colors.danger20;
    }

    return colors.gray20;
  });
}, function (props) {
  return props.iconPosition === 'right' && 'right: 0;';
}, function (props) {
  return props.actionPosition && props.actionPosition === 'left' ? 'left: 0;' : 'right: 0;';
});
var LabelError$1 = styled__default["default"].span(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  font-size: 10px;\n  margin-left: 0;\n  color: ", ";\n"])), function (props) {
  if (props.errorColor) {
    return props.errorColor;
  }

  return colors.danger20;
});
var Container$4 = styled__default["default"].div(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteralLoose(["\n  padding-bottom: ", ";\n"])), function (props) {
  return props.hasError ? '0' : '1.25rem';
});

var _excluded$3 = ["width", "textColor", "icon", "iconClassName", "iconStyle", "iconPosition", "action", "label", "labelClassName", "labelStyle", "errorColor", "errorMessage", "errorClassName", "errorStyle"];

function Input(_ref, ref) {
  var width = _ref.width,
      textColor = _ref.textColor,
      icon = _ref.icon,
      iconClassName = _ref.iconClassName,
      iconStyle = _ref.iconStyle,
      iconPosition = _ref.iconPosition,
      action = _ref.action,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      labelStyle = _ref.labelStyle,
      errorColor = _ref.errorColor,
      errorMessage = _ref.errorMessage,
      errorClassName = _ref.errorClassName,
      errorStyle = _ref.errorStyle,
      rest = _objectWithoutPropertiesLoose$2(_ref, _excluded$3);

  var _useState = require$$0.useState(function () {
    return false;
  }),
      isFieldActive = _useState[0],
      setIsFieldActive = _useState[1];

  var inputRef = require$$0.useRef(null);
  require$$0.useEffect(function () {
    if (rest.value) {
      setIsFieldActive(true);
    }
  }, [rest.value]);
  require$$0.useEffect(function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var validRef = ref || inputRef;

    if (validRef.current && validRef.current.value) {
      setIsFieldActive(true);
    }
  }, []);

  var handleFocus = function handleFocus(event) {
    if (!isFieldActive || !!event.currentTarget.value) setIsFieldActive(true);
    if (rest.onFocus) rest.onFocus(event);
  };

  var handleBlur = function handleBlur(event) {
    if (isFieldActive && !rest.value && !event.currentTarget.value) setIsFieldActive(false);
    if (rest.onBlur) rest.onBlur(event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.currentTarget.value) {
      setIsFieldActive(true);
    }

    if (rest.onKeyDown) {
      rest.onKeyDown(event);
    }
  };

  var handleAnimationStart = function handleAnimationStart(event) {
    if (event.animationName === 'onAutoFillStart') {
      setIsFieldActive(true);
    }

    if (rest.onAnimationStart) {
      rest.onAnimationStart(event);
    }
  };

  return jsxRuntime.jsxs(Container$4, Object.assign({
    role: "group",
    hasError: !!errorMessage
  }, {
    children: [jsxRuntime.jsxs(InputContainer, Object.assign({
      isFieldActive: isFieldActive,
      className: rest.className,
      style: rest.style,
      width: width,
      disabled: rest.disabled,
      textColor: textColor,
      icon: !!icon,
      iconPosition: iconPosition,
      action: action,
      actionPosition: action == null ? void 0 : action.position,
      date: rest.type === 'date',
      errorMessage: errorMessage,
      "data-testid": "input-container",
      errorColor: errorColor
    }, {
      children: [icon && jsxRuntime.jsx("div", Object.assign({
        className: "icon",
        "data-testid": "icon-container"
      }, {
        children: jsxRuntime.jsx(FontAwesomeIcon, {
          "aria-label": "icon",
          className: iconClassName,
          style: iconStyle,
          icon: icon,
          color: colors.brand10
        }, void 0)
      }), void 0), action && jsxRuntime.jsx("button", Object.assign({
        className: "icon-action " + (action.className || ''),
        style: action.style,
        onClick: action.onClick,
        "data-testid": "action-container"
      }, {
        children: jsxRuntime.jsx(FontAwesomeIcon, {
          "aria-label": "action-icon",
          icon: action.icon,
          color: action.iconColor || colors.brand10
        }, void 0)
      }), void 0), jsxRuntime.jsx("input", Object.assign({}, rest, {
        onFocus: handleFocus,
        onBlur: handleBlur,
        placeholder: isFieldActive ? rest.placeholder : undefined,
        ref: ref || inputRef,
        onAnimationStart: handleAnimationStart,
        onKeyDown: handleKeyDown
      }), void 0), jsxRuntime.jsx("div", Object.assign({
        className: "label-container",
        "data-testid": "label-container"
      }, {
        children: jsxRuntime.jsx("label", Object.assign({
          htmlFor: rest.name,
          className: labelClassName,
          style: labelStyle
        }, {
          children: label
        }), void 0)
      }), void 0)]
    }), void 0), !!errorMessage && jsxRuntime.jsx(LabelError$1, Object.assign({
      errorColor: errorColor,
      className: errorClassName,
      style: errorStyle
    }, {
      children: errorMessage
    }), void 0)]
  }), void 0);
}

var Input$1 = require$$0.forwardRef(Input);

var _templateObject$6, _templateObject2$4, _templateObject3$4, _templateObject4$2, _templateObject5$1, _templateObject6$1;

var sizeWidth = function sizeWidth(size) {
  switch (size) {
    case 'xs':
      return '35%';

    case 'sm':
      return '45%';

    case 'md':
      return '55%';

    case 'lg':
      return '65%';

    case 'xl':
      return '95%';

    default:
      return '55%';
  }
};

var Background = styled__default["default"].div(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteralLoose(["\n  opacity: 0;\n  visibility: hidden;\n  display: none;\n  transition: opacity 0.25s ease-in-out;\n\n  &.open {\n    opacity: 1;\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.5);\n    overflow: auto;\n    padding: 2.5rem 0;\n    display: flex;\n    z-index: ", ";\n  }\n"])), Z_INDEX_MODAL);
var Modal = styled__default["default"].div(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  transition: top 0.25s ease;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: ", ";\n  margin: auto;\n  background: ", ";\n  border-radius: 1.875rem;\n"])), function (props) {
  if (props.width) {
    return getMeasurement(props.width, '80%');
  }

  return sizeWidth(props.size);
}, colors.white);
styled__default["default"].div(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteralLoose(["\n  transition: bottom 1s ease;\n  width: 90%;\n  background: ", ";\n  border-top-left-radius: 1.875rem;\n  border-top-right-radius: 1.875rem;\n"])), colors.white);
var Header$1 = styled__default["default"].div(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: ", ";\n  font-size: 1.25rem;\n\n  .name-icon-modal {\n    display: flex;\n    align-items: center;\n  }\n\n  & strong {\n    padding: ", ";\n    color: ", ";\n  }\n\n  button {\n    padding: 1.25rem 1.875rem;\n  }\n"])), function (props) {
  return props.noBorder ? 'none' : "1px solid " + colors.default20;
}, function (props) {
  return props.iconBack ? '20px 0' : '20px 30px';
}, colors.brand10);
var Body = styled__default["default"].div(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteralLoose(["\n  padding: 1.25rem 1.875rem;\n  height: 100%;\n  position: relative;\n\n  .loading-modal {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(255, 255, 255, 0.8);\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.875rem;\n    z-index: 2;\n    position: absolute;\n  }\n"])));
var Actions = styled__default["default"].div(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteralLoose(["\n  border-top: 1px solid ", ";\n  margin: 0 1.875rem;\n  padding: 1.25rem 0;\n  display: flex;\n  flex-direction: row-reverse;\n"])), colors.default20);

function ModalComponent(_ref) {
  var open = _ref.open,
      title = _ref.title,
      children = _ref.children,
      actions = _ref.actions,
      width = _ref.width,
      onClose = _ref.onClose,
      closeOnDimerClick = _ref.closeOnDimerClick,
      loading = _ref.loading,
      onReturnClick = _ref.onReturnClick,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size,
      noBorder = _ref.noBorder,
      _ref$closeIcon = _ref.closeIcon,
      closeIcon = _ref$closeIcon === void 0 ? true : _ref$closeIcon,
      className = _ref.className,
      style = _ref.style,
      headerClassName = _ref.headerClassName,
      headerStyle = _ref.headerStyle,
      bodyClassName = _ref.bodyClassName,
      bodyStyle = _ref.bodyStyle;
  require$$0.useEffect(function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var keydownListener = function keydownListener(event) {
      escModal(event);
    };

    if (open) {
      window.addEventListener('keydown', keydownListener);
    }

    return function () {
      window.removeEventListener('keydown', keydownListener);
    };
  }, [open]);

  function escModal(event) {
    if (open && event.key == 'Escape' && closeOnDimerClick) {
      event.stopPropagation();
      onClose();
    }
  }

  return jsxRuntime.jsx(Background, Object.assign({
    onClick: function onClick(event) {
      if (closeOnDimerClick) {
        event.stopPropagation();
        onClose();
      }
    },
    className: "" + (open ? 'open' : ''),
    "data-testid": "modal-background"
  }, {
    children: jsxRuntime.jsxs(Modal, Object.assign({
      className: className,
      style: style,
      size: size,
      width: width,
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      role: "dialog"
    }, {
      children: [jsxRuntime.jsxs(Header$1, Object.assign({
        className: headerClassName,
        style: headerStyle,
        iconBack: !!onReturnClick,
        noBorder: noBorder,
        role: "heading"
      }, {
        children: [jsxRuntime.jsxs("div", Object.assign({
          className: "name-icon-modal"
        }, {
          children: [!!onReturnClick && jsxRuntime.jsx("button", Object.assign({
            onClick: function onClick(event) {
              event.stopPropagation();
              onReturnClick();
            },
            "aria-label": "return"
          }, {
            children: jsxRuntime.jsx(FontAwesomeIcon, {
              icon: faAngleLeft,
              size: "lg",
              color: colors.brand10
            }, void 0)
          }), void 0), jsxRuntime.jsx("strong", {
            children: title
          }, void 0)]
        }), void 0), closeIcon && jsxRuntime.jsx("button", Object.assign({
          onClick: function onClick(event) {
            event.stopPropagation();
            onClose();
          },
          "aria-label": "close"
        }, {
          children: jsxRuntime.jsx(FontAwesomeIcon, {
            icon: faTimes,
            style: {
              fontSize: 20
            },
            color: colors.brand10
          }, void 0)
        }), void 0)]
      }), void 0), jsxRuntime.jsxs(Body, Object.assign({
        className: bodyClassName,
        style: bodyStyle
      }, {
        children: [loading && jsxRuntime.jsx("div", Object.assign({
          className: "loading-modal"
        }, {
          children: jsxRuntime.jsx(Loader, {}, void 0)
        }), void 0), children]
      }), void 0), !!actions && jsxRuntime.jsx(Actions, {
        children: actions
      }, void 0)]
    }), void 0)
  }), void 0);
}

var _templateObject$5;

var widthBtnMoreLess = function widthBtnMoreLess(size) {
  switch (size) {
    case 'xs':
      return '14px';

    case 'sm':
      return '22px';

    case 'md':
      return '30px';

    case 'lg':
      return '38px';

    case 'xl':
      return '46px';

    default:
      return '30px';
  }
};

var heightBtnMoreLess = function heightBtnMoreLess(size) {
  switch (size) {
    case 'xs':
      return '14px';

    case 'sm':
      return '22px';

    case 'md':
      return '30px';

    case 'lg':
      return '38px';

    case 'xl':
      return '46px';

    default:
      return '30px';
  }
};

var widthValueMoreLess = function widthValueMoreLess(size, value) {
  var valueAbs = Math.abs(value);

  switch (size) {
    case 'xs':
      if (valueAbs < 100) {
        return '15px';
      }

      if (valueAbs < 1000) {
        return '20px';
      }

      if (valueAbs < 10000) {
        return '25px';
      }

      return '30px';

    case 'sm':
      {
        if (valueAbs < 100) {
          return '25px';
        }

        if (valueAbs < 1000) {
          return '30px';
        }

        if (valueAbs < 10000) {
          return '35px';
        }

        return '40px';
      }

    case 'md':
      {
        if (valueAbs < 100) {
          return '20px';
        }

        if (valueAbs < 1000) {
          return '30px';
        }

        if (valueAbs < 10000) {
          return '40px';
        }

        return '50px';
      }

    case 'lg':
      {
        if (valueAbs < 100) {
          return '25px';
        }

        if (valueAbs < 1000) {
          return '35px';
        }

        if (valueAbs < 10000) {
          return '50px';
        }

        return '60px';
      }

    case 'xl':
      {
        if (valueAbs < 100) {
          return '30px';
        }

        if (valueAbs < 1000) {
          return '40px';
        }

        if (valueAbs < 10000) {
          return '55px';
        }

        return '70px';
      }

    default:
      {
        if (valueAbs < 100) {
          return '20px';
        }

        if (valueAbs < 1000) {
          return '30px';
        }

        if (valueAbs < 10000) {
          return '40px';
        }

        return '50px';
      }
  }
};

var fontMoreLess = function fontMoreLess(size) {
  switch (size) {
    case 'xs':
      return '9px';

    case 'sm':
      return '12px';

    case 'md':
      return '15px';

    case 'lg':
      return '18px';

    case 'xl':
      return '21px';

    default:
      return '15px';
  }
};

var Container$3 = styled__default["default"].div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  opacity: ", ";\n\n  button {\n    width: ", ";\n    font-size: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: ", ";\n    color: ", ";\n    transition: color 0.2s ease-in-out;\n\n    &:not(:disabled):hover {\n      color: ", ";\n    }\n\n    &:disabled {\n      opacity: 0.25;\n      cursor: default;\n    }\n  }\n\n  input {\n    text-align: center;\n    width: ", ";\n    font-size: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: ", ";\n    border: none;\n    outline: none;\n  }\n\n  input[type='number']::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n  input[type='number'] {\n    -moz-appearance: textfield;\n    appearance: textfield;\n  }\n\n  input:disabled {\n    background-color: transparent;\n  }\n"])), function (props) {
  return props.disabled ? '0.5' : '1';
}, function (props) {
  return widthBtnMoreLess(props.size);
}, function (props) {
  return fontMoreLess(props.size);
}, function (props) {
  return heightBtnMoreLess(props.size);
}, colors.gray20, colors.hover, function (props) {
  return widthValueMoreLess(props.size, props.value);
}, function (props) {
  return fontMoreLess(props.size);
}, colors.gray20);

function MoreLess(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size,
      disabled = _ref.disabled,
      value = _ref.value,
      maximum = _ref.maximum,
      _ref$minimum = _ref.minimum,
      minimum = _ref$minimum === void 0 ? 0 : _ref$minimum,
      onChange = _ref.onChange,
      _ref$quantityToChange = _ref.quantityToChange,
      quantityToChange = _ref$quantityToChange === void 0 ? 1 : _ref$quantityToChange;
  var noLess = require$$0.useMemo(function () {
    if (value <= minimum) {
      return true;
    }

    return false;
  }, [minimum, value]);
  var noMore = require$$0.useMemo(function () {
    if (typeof maximum == 'number' && value >= maximum) {
      return true;
    }

    return false;
  }, [maximum, value]);

  function handleChangeValue(newValue) {
    if (typeof maximum == 'number' && newValue > maximum) {
      return onChange(maximum);
    }

    if (newValue < minimum) return onChange(minimum);
    onChange(newValue);
  }

  return jsxRuntime.jsxs(Container$3, Object.assign({
    maximum: maximum,
    minimum: minimum,
    value: value,
    size: size,
    disabled: disabled,
    role: "group"
  }, {
    children: [jsxRuntime.jsx("button", Object.assign({
      "aria-label": "minus",
      disabled: disabled || noLess,
      onClick: function onClick() {
        return handleChangeValue(value - quantityToChange);
      }
    }, {
      children: jsxRuntime.jsx(FontAwesomeIcon, {
        icon: faMinus
      }, void 0)
    }), void 0), jsxRuntime.jsx("input", {
      value: value,
      type: "number",
      onChange: function onChange(event) {
        return handleChangeValue(Number(event.target.value));
      },
      disabled: disabled,
      max: maximum,
      min: minimum,
      readOnly: disabled
    }, void 0), jsxRuntime.jsx("button", Object.assign({
      "aria-label": "plus",
      disabled: disabled || noMore,
      onClick: function onClick() {
        return handleChangeValue(value + quantityToChange);
      }
    }, {
      children: jsxRuntime.jsx(FontAwesomeIcon, {
        icon: faPlus
      }, void 0)
    }), void 0)]
  }), void 0);
}

var _templateObject$4;

var size = function size(_size) {
  switch (_size) {
    case Sizes.xs:
      return '0.625rem';

    case Sizes.sm:
      return '0.875rem';

    case Sizes.md:
      return '1.0625rem';

    case Sizes.lg:
      return '1.4375rem';

    case Sizes.xl:
      return '1.875rem';

    default:
      return _size;
  }
};

var sizeChecked = function sizeChecked(size) {
  switch (size) {
    case Sizes.xs:
      return '0.125rem';

    case Sizes.sm:
      return '0.375rem';

    case Sizes.md:
      return '0.5625rem';

    case Sizes.lg:
      return '0.9375rem';

    case Sizes.xl:
      return '1.375rem';

    default:
      return size;
  }
};

var labelSize = function labelSize(size) {
  switch (size) {
    case Sizes.xs:
      return '0.625rem';

    case Sizes.sm:
      return '0.875rem';

    case Sizes.md:
      return '1rem';

    case Sizes.lg:
      return '1.25rem';

    case Sizes.xl:
      return '1.5rem';

    default:
      return size;
  }
};

var paddingLeft = function paddingLeft(size) {
  switch (size) {
    case Sizes.xs:
      return '0.9375rem';

    case Sizes.sm:
      return '1.25rem';

    case Sizes.md:
      return '1.5625rem';

    case Sizes.lg:
      return '2rem';

    case Sizes.xl:
      return '2.5rem';

    default:
      return size;
  }
};

var paddingTop = function paddingTop(size) {
  switch (size) {
    case Sizes.xs:
      return '0.25rem';

    case Sizes.sm:
      return '0.0625rem';

    case Sizes.md:
      return '0rem';

    case Sizes.lg:
      return '0rem';

    case Sizes.xl:
      return '0.125rem';

    default:
      return size;
  }
};

var topBoxBefore = function topBoxBefore(size) {
  switch (size) {
    case Sizes.xs:
      return '0.3125rem';

    case Sizes.sm:
      return '0.1875rem';

    case Sizes.md:
      return '0.0625rem';

    case Sizes.lg:
      return '0rem';

    case Sizes.xl:
      return '0rem';

    default:
      return size;
  }
};

var topBoxAfter = function topBoxAfter(size) {
  switch (size) {
    case Sizes.xs:
      return '0.5625rem';

    case Sizes.sm:
      return '0.4375rem';

    case Sizes.md:
      return '0.3125rem';

    case Sizes.lg:
      return '0.25rem';

    case Sizes.xl:
      return '0.25rem';

    default:
      return size;
  }
};

var Container$2 = styled__default["default"].div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n\n  &,\n  label,\n  input {\n    cursor: ", ";\n  }\n\n  > input {\n    display: none;\n  }\n\n  label {\n    font-size: ", ";\n    opacity: ", ";\n    color: ", ";\n    padding-top: ", ";\n  }\n\n  > input + div {\n    position: relative;\n    padding-left: ", ";\n    opacity: ", ";\n    display: flex;\n    align-items: center;\n\n    &:before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: ", ";\n      width: ", ";\n      height: ", ";\n      border: 1px solid ", ";\n      background: ", ";\n      border-radius: 50%;\n    }\n    &:after {\n      content: ' ';\n      position: absolute;\n      left: 4px;\n      top: ", ";\n      width: ", ";\n      height: ", ";\n      border: 1px solid ", ";\n      background: ", ";\n      border-radius: 50%;\n      color: ", ";\n      text-align: center;\n      font-size: 12px;\n    }\n  }\n  > input:not(:checked) + div {\n    &:after {\n      opacity: 0;\n      transform: scale(0);\n    }\n  }\n  > input:checked + div {\n    &:after {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n"])), function (props) {
  return props.disabled ? 'default' : 'pointer';
}, function (props) {
  if (props.sizeBox) {
    return labelSize(props.sizeBox);
  }

  return '1.0625rem';
}, function (props) {
  return props.disabled ? 0.5 : 1;
}, colors.gray20, function (props) {
  if (props.sizeBox) {
    return paddingTop(props.sizeBox);
  }

  return '0rem';
}, function (props) {
  if (props.sizeBox) {
    return paddingLeft(props.sizeBox);
  }

  return '1.5625rem';
}, function (props) {
  return props.disabled ? 0.5 : 1;
}, function (props) {
  if (props.sizeBox) {
    return topBoxBefore(props.sizeBox);
  }

  return '1px';
}, function (props) {
  if (props.sizeBox) {
    return size(props.sizeBox);
  }

  return '17px';
}, function (props) {
  if (props.sizeBox) {
    return size(props.sizeBox);
  }

  return '17px';
}, colors.default30, colors.default20, function (props) {
  if (props.sizeBox) {
    return topBoxAfter(props.sizeBox);
  }

  return '5px';
}, function (props) {
  if (props.sizeBox) {
    return sizeChecked(props.sizeBox);
  }

  return '9px';
}, function (props) {
  if (props.sizeBox) {
    return sizeChecked(props.sizeBox);
  }

  return '9px';
}, colors.gray20, colors.gray20, colors.white);

var _excluded$2 = ["label", "labelStyle", "sizeBox", "labelClassName"];

function Radio(_ref, ref) {
  var label = _ref.label,
      labelStyle = _ref.labelStyle,
      sizeBox = _ref.sizeBox,
      labelClassName = _ref.labelClassName,
      rest = _objectWithoutPropertiesLoose$2(_ref, _excluded$2);

  return jsxRuntime.jsxs(Container$2, Object.assign({
    onClick: !rest.disabled && rest.onChange ? rest.onChange : undefined,
    disabled: rest.disabled,
    sizeBox: sizeBox,
    className: rest.className,
    style: rest.style,
    role: "radio"
  }, {
    children: [jsxRuntime.jsx("input", Object.assign({
      "data-testid": "input-radio",
      type: "radio"
    }, rest, {
      ref: ref
    }), void 0), jsxRuntime.jsx("div", {
      children: jsxRuntime.jsx("label", Object.assign({
        className: labelClassName,
        style: labelStyle
      }, {
        children: label
      }), void 0)
    }, void 0)]
  }), void 0);
}

var Radio$1 = require$$0.forwardRef(Radio);

var _templateObject$3, _templateObject2$3, _templateObject3$3;
var toggleWidth = 50;
var toggleHeight = 30;
var toggleGutter = 5;
var toggleRadius = toggleHeight / 2;
var toggleControlSsize = toggleHeight - toggleGutter * 2;

var widthSwitch = function widthSwitch(size) {
  switch (size) {
    case Sizes.xs:
      return 30;

    case Sizes.sm:
      return 40;

    case Sizes.md:
      return 50;

    case Sizes.lg:
      return 70;

    case Sizes.xl:
      return 90;

    default:
      return 50;
  }
};

var heightSwitch = function heightSwitch(size) {
  switch (size) {
    case Sizes.xs:
      return 20;

    case Sizes.sm:
      return 25;

    case Sizes.md:
      return 30;

    case Sizes.lg:
      return 40;

    case Sizes.xl:
      return 50;

    default:
      return 30;
  }
};

var sizeGutter = function sizeGutter(size) {
  switch (size) {
    case Sizes.xs:
      return 5;

    case Sizes.sm:
      return 5;

    case Sizes.md:
      return 5;

    case Sizes.lg:
      return 5;

    case Sizes.xl:
      return 5;

    default:
      return 5;
  }
};

var widthToggle = function widthToggle(size) {
  switch (size) {
    case Sizes.xs:
      return '40px !important';

    case Sizes.sm:
      return '3.75rem !important';

    case Sizes.md:
      return '4.0625rem !important';

    case Sizes.lg:
      return '5rem !important';

    case Sizes.xl:
      return '6.25rem !important';

    default:
      return '4.0625rem !important';
  }
};

var fontToggle = function fontToggle(size) {
  switch (size) {
    case Sizes.xs:
      return '0.5rem !important';

    case Sizes.sm:
      return '0.625rem !important';

    case Sizes.md:
      return '0.6875rem !important';

    case Sizes.lg:
      return '0.8125rem !important';

    case Sizes.xl:
      return '0.9375rem !important';

    default:
      return '0.6875rem !important';
  }
};

var fontActiveInactive = function fontActiveInactive(size) {
  switch (size) {
    case Sizes.xs:
      return '0.4375rem !important';

    case Sizes.sm:
      return '0.5625rem !important';

    case Sizes.md:
      return '0.625rem !important';

    case Sizes.lg:
      return '0.75rem !important';

    case Sizes.xl:
      return '0.875rem !important';

    default:
      return '0.625rem !important';
  }
};

var Switch = styled__default["default"].button(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative !important;\n  /* padding-left: ", "; */\n  /* margin-bottom: 12px; */\n  cursor: ", ";\n  font-size: 1.375rem !important;\n  user-select: none !important;\n\n  opacity: ", ";\n\n  div {\n    position: absolute !important;\n    opacity: 0 !important;\n    height: 0 !important;\n    width: 0 !important;\n    display: none !important;\n  }\n\n  .control {\n    height: ", ";\n    width: ", ";\n    border-radius: ", ";\n    background-color: ", ";\n    transition: background-color 0.15s ease-in !important;\n\n    &:after {\n      content: '' !important;\n      position: absolute !important;\n      left: 5px !important;\n      top: 5px !important;\n      height: ", ";\n      width: ", ";\n      border-radius: 50px !important;\n      background-color: white !important;\n      transition: left 0.15s ease-in !important;\n      border: 1px solid ", " !important;\n    }\n  }\n\n  div.checked ~ .control {\n    background-color: ", ";\n\n    &:after {\n      left: ", ";\n    }\n  }\n"])), function (props) {
  return props.size ? widthSwitch(props.size) + "px" : toggleWidth + "px";
}, function (props) {
  return props.disabled ? 'not-allowed ' : 'pointer';
}, function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 0.5 : 1;
}, function (props) {
  return props.size ? heightSwitch(props.size) + "px !important" : toggleHeight + "px !important";
}, function (props) {
  return props.size ? widthSwitch(props.size) + "px !important" : toggleWidth + "px !important";
}, function (props) {
  return props.size ? heightSwitch(props.size) / 2 + "px !important" : toggleRadius + "px !important";
}, colors.card, function (props) {
  return props.size ? heightSwitch(props.size) - sizeGutter(props.size) * 2 + "px !important" : toggleControlSsize + "px !important";
}, function (props) {
  return props.size ? heightSwitch(props.size) - sizeGutter(props.size) * 2 + "px !important" : toggleControlSsize + "px !important";
}, colors.default10, colors.brandDark, function (props) {
  return props.size ? widthSwitch(props.size) - (heightSwitch(props.size) - sizeGutter(props.size) * 2) - sizeGutter(props.size) + "px !important" : toggleWidth - toggleControlSsize - toggleGutter + "px !important";
});
var Toggle = styled__default["default"].button(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  display: flex !important;\n  flex-direction: row !important;\n  opacity: ", ";\n\n  cursor: ", ";\n\n  .btn {\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    width: ", ";\n    border: 1px solid ", " !important;\n    padding: 0.5rem 0 !important;\n\n    span {\n      font-size: ", ";\n    }\n  }\n\n  .left {\n    background-color: ", ";\n    border-top-left-radius: 20px !important;\n    border-bottom-left-radius: 20px !important;\n    border-right: 0 !important;\n    transition: 400ms !important;\n\n    color: ", ";\n  }\n\n  .right {\n    background-color: ", ";\n    border-top-right-radius: 20px !important;\n    border-bottom-right-radius: 20px !important;\n    border-left: 0 !important;\n    transition: 400ms !important;\n\n    color: ", ";\n  }\n"])), function (props) {
  return props.disabled ? '0.5 !important' : '1 !important';
}, function (props) {
  return props.disabled ? 'not-allowed !important' : 'pointer !important';
}, function (props) {
  return props.size ? widthToggle(props.size) : '4rem !important';
}, colors.card, function (props) {
  return props.size ? fontToggle(props.size) : '0.6875rem !important';
}, function (props) {
  return !props.checked ? colors.brand10 + " !important" : colors.white + " !important";
}, function (props) {
  return !props.checked ? colors.white + " !important" : colors.gray20 + " !important";
}, function (props) {
  return props.checked ? colors.brand10 + " !important" : colors.white + " !important";
}, function (props) {
  return props.checked ? colors.white + " !important" : colors.gray20 + " !important";
});
var ActiveInactive = styled__default["default"].button(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  display: flex !important;\n  flex-direction: row !important;\n  opacity: ", ";\n\n  cursor: ", ";\n\n  .btn {\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    width: ", ";\n    border: 1px solid ", " !important;\n    padding: 0.5rem 0 !important;\n\n    span {\n      font-size: ", ";\n    }\n  }\n\n  .left {\n    background-color: ", ";\n    border-top-left-radius: 20px !important;\n    border-bottom-left-radius: 20px !important;\n    border-right: 0 !important;\n    transition: 400ms !important;\n\n    span {\n      color: ", ";\n    }\n  }\n\n  .right {\n    background-color: ", ";\n    border-top-right-radius: 20px !important;\n    border-bottom-right-radius: 20px !important;\n    border-left: 0 !important;\n    transition: 400ms !important;\n\n    span {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.disabled ? '0.5 !important' : '1 !important';
}, function (props) {
  return props.disabled ? 'not-allowed !important' : 'pointer !important';
}, function (props) {
  return props.size ? widthToggle(props.size) : '4.375rem !important';
}, colors.card, function (props) {
  return props.size ? fontActiveInactive(props.size) : '0.625rem !important';
}, function (props) {
  return !props.checked ? colors.brand20 + " !important" : colors.white + " !important";
}, function (props) {
  return !props.checked ? colors.white + " !important" : colors.gray20 + " !important";
}, function (props) {
  return props.checked ? colors.brandGreen + " !important" : colors.white + " !important";
}, function (props) {
  return props.checked ? colors.white + " !important" : colors.gray20 + " !important";
});

var TYPES = {
  "switch": 'switch',
  toggle: 'toggle',
  activeInactive: 'activeInactive'
};

function Selection(_ref) {
  var type = _ref.type,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      onClick = _ref.onClick,
      onChange = _ref.onChange,
      size = _ref.size,
      disabled = _ref.disabled,
      ref = _ref.ref,
      className = _ref.className,
      style = _ref.style;
  var eventFunction = onClick || onChange;

  function renderSwitch() {
    return jsxRuntime.jsxs(Switch, Object.assign({
      className: className,
      style: style,
      size: size,
      ref: ref,
      disabled: disabled,
      role: "switch",
      onClick: eventFunction
    }, {
      children: [jsxRuntime.jsx("div", {
        className: "" + (checked ? 'checked' : '')
      }, void 0), jsxRuntime.jsx("span", {
        "data-testid": "control",
        className: "control"
      }, void 0)]
    }), void 0);
  }

  function renderToggle() {
    return jsxRuntime.jsxs(Toggle, Object.assign({
      className: className,
      style: style,
      checked: checked,
      ref: ref,
      size: size,
      disabled: disabled,
      role: "switch",
      onClick: eventFunction
    }, {
      children: [jsxRuntime.jsx("div", Object.assign({
        "data-testid": "btn-left",
        className: "btn left"
      }, {
        children: jsxRuntime.jsx("span", {
          children: "n\xE3o"
        }, void 0)
      }), void 0), jsxRuntime.jsx("div", Object.assign({
        "data-testid": "btn-right",
        className: "btn right"
      }, {
        children: jsxRuntime.jsx("span", {
          children: "sim"
        }, void 0)
      }), void 0)]
    }), void 0);
  }

  function renderActiveInactive() {
    return jsxRuntime.jsxs(ActiveInactive, Object.assign({
      className: className,
      style: style,
      checked: checked,
      ref: ref,
      size: size,
      disabled: disabled,
      role: "switch",
      onClick: eventFunction
    }, {
      children: [jsxRuntime.jsx("div", Object.assign({
        className: "btn left"
      }, {
        children: jsxRuntime.jsx("span", {
          children: checked ? 'desativar' : 'inativo'
        }, void 0)
      }), void 0), jsxRuntime.jsx("div", Object.assign({
        className: "btn right"
      }, {
        children: jsxRuntime.jsx("span", {
          children: checked ? 'ativo' : 'ativar'
        }, void 0)
      }), void 0)]
    }), void 0);
  }

  switch (type) {
    case TYPES["switch"]:
      return renderSwitch();

    case TYPES.toggle:
      return renderToggle();

    case TYPES.activeInactive:
      return renderActiveInactive();

    default:
      return null;
  }
}

var _templateObject$2, _templateObject2$2, _templateObject3$2;
var ContainerPagination = styled__default["default"].div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  font-size: ", ";\n\n  justify-content: center;\n  align-items: center;\n\n  button + button {\n    margin-left: 0.5em;\n  }\n\n  button {\n    ", "\n  }\n"])), function (props) {
  return getFontSize(props.size, '1rem');
}, function (props) {
  return !props.disabledAll ? styled.css(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteralLoose(["\n            opacity: 1 !important;\n          "]))) : '';
});
var Button = styled__default["default"].button(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  font-size: 1.125em;\n  font-weight: 500;\n  width: 2.5em;\n  height: 2.5em;\n  border-radius: 0.625em;\n  transition: all 0.4s ease;\n\n  &:not(:disabled):hover {\n    background-color: ", ";\n  }\n\n  &:disabled {\n    border: none;\n    cursor: default;\n    opacity: 0.75;\n  }\n"])), function (props) {
  return props.active ? colors.white : colors.brand10;
}, function (props) {
  return props.active ? colors.brand10 : colors.white;
}, colors.hover, colors.hover);

var brothersCount = 2;

function generatePagesArray(from, to) {
  return [].concat(new Array(to - from)).map(function (_, index) {
    return from + index + 1;
  }).filter(function (page) {
    return page > 0;
  });
}

function Pagination(_ref) {
  var totalCount = _ref.totalCount,
      _ref$currentPage = _ref.currentPage,
      currentPage = _ref$currentPage === void 0 ? 1 : _ref$currentPage,
      _ref$limitPerPage = _ref.limitPerPage,
      limitPerPage = _ref$limitPerPage === void 0 ? 30 : _ref$limitPerPage,
      onPageChange = _ref.onPageChange,
      _ref$doubleJumpArrow = _ref.doubleJumpArrow,
      doubleJumpArrow = _ref$doubleJumpArrow === void 0 ? false : _ref$doubleJumpArrow,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size,
      className = _ref.className,
      style = _ref.style;
  var totalPages = Math.ceil(totalCount / limitPerPage);
  var previousPages = currentPage > 1 ? generatePagesArray(currentPage - (brothersCount + 1), currentPage - 1) : [];
  var nextPages = currentPage < totalPages ? generatePagesArray(currentPage, Math.min(totalPages, currentPage + brothersCount)) : [];

  function handlePageChange(event) {
    var newPage = Number(event.currentTarget.value);
    return onPageChange && onPageChange(newPage);
  }

  if (totalPages == 0) return null;
  return jsxRuntime.jsxs(ContainerPagination, Object.assign({
    className: className,
    style: style,
    disabledAll: disabled,
    size: size,
    role: "group"
  }, {
    children: [doubleJumpArrow && jsxRuntime.jsx(Button, Object.assign({
      disabled: currentPage == 1 || disabled,
      value: 1,
      onClick: handlePageChange,
      active: currentPage == 1
    }, {
      children: jsxRuntime.jsx(FontAwesomeIcon, {
        icon: faAngleDoubleLeft
      }, void 0)
    }), void 0), jsxRuntime.jsx(Button, Object.assign({
      onClick: handlePageChange,
      value: currentPage - 1,
      disabled: currentPage == 1 || disabled,
      active: currentPage == 1
    }, {
      children: jsxRuntime.jsx(FontAwesomeIcon, {
        icon: faAngleLeft
      }, void 0)
    }), void 0), currentPage >= brothersCount + 2 && jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [jsxRuntime.jsx(Button, Object.assign({
        onClick: handlePageChange,
        value: 1,
        disabled: disabled
      }, {
        children: 1
      }), void 0), currentPage > brothersCount + 2 && jsxRuntime.jsx(Button, Object.assign({
        disabled: disabled
      }, {
        children: "..."
      }), void 0)]
    }, void 0), previousPages.map(function (value) {
      return jsxRuntime.jsx(Button, Object.assign({
        onClick: handlePageChange,
        value: value,
        disabled: disabled
      }, {
        children: value
      }), value);
    }), jsxRuntime.jsx(Button, Object.assign({
      onClick: handlePageChange,
      disabled: true,
      value: currentPage,
      active: true
    }, {
      children: currentPage
    }), void 0), nextPages.map(function (value) {
      return jsxRuntime.jsx(Button, Object.assign({
        onClick: handlePageChange,
        disabled: disabled,
        value: value
      }, {
        children: value
      }), value);
    }), totalPages >= currentPage + brothersCount + 1 && jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [totalPages > currentPage + brothersCount + 1 && jsxRuntime.jsx(Button, Object.assign({
        disabled: disabled
      }, {
        children: "..."
      }), void 0), jsxRuntime.jsx(Button, Object.assign({
        onClick: handlePageChange,
        disabled: disabled,
        value: totalPages
      }, {
        children: totalPages
      }), void 0)]
    }, void 0), jsxRuntime.jsx(Button, Object.assign({
      onClick: handlePageChange,
      value: currentPage + 1,
      disabled: currentPage == totalPages || disabled,
      active: currentPage == totalPages
    }, {
      children: jsxRuntime.jsx(FontAwesomeIcon, {
        icon: faAngleRight
      }, void 0)
    }), void 0), doubleJumpArrow && jsxRuntime.jsx(Button, Object.assign({
      disabled: currentPage == totalPages || disabled,
      active: currentPage == totalPages,
      value: totalPages,
      onClick: handlePageChange
    }, {
      children: jsxRuntime.jsx(FontAwesomeIcon, {
        icon: faAngleDoubleRight
      }, void 0)
    }), void 0)]
  }), void 0);
}

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1;
var Header = styled__default["default"].div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  display: flex;\n  margin-bottom: 10px;\n"])));
var Title = styled__default["default"].span(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  flex: 1;\n  text-align: left;\n  color: ", ";\n  font-weight: bold;\n"])), colors.gray20);
var Message = styled__default["default"].span(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  text-align: right;\n  color: ", ";\n"])), colors.gray10);
var Container$1 = styled__default["default"].div(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteralLoose(["\n  margin-bottom: ", ";\n\n  /*!\n * # Semantic UI 2.4.1 - Table\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */\n\n  /*******************************\n             Table\n*******************************/\n\n  /* Prototype */\n  .ui.table {\n    width: 100%;\n    background: #ffffff;\n    margin: 1em 0em;\n    border: none !important;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    border-radius: 0.28571429rem;\n    text-align: left;\n    color: #707070;\n    border-collapse: separate;\n    border-spacing: 0px;\n  }\n  .ui.table:first-child {\n    margin-top: 0em;\n  }\n  .ui.table:last-child {\n    margin-bottom: 0em;\n  }\n\n  /*******************************\n               Parts\n  *******************************/\n\n  /* Table Content */\n  .ui.table th,\n  .ui.table td {\n    -webkit-transition: background 0.1s ease, color 0.1s ease;\n    transition: background 0.1s ease, color 0.1s ease;\n  }\n\n  /* Headers */\n  .ui.table thead {\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n  .ui.table thead th {\n    cursor: auto;\n    background: none !important;\n    text-align: inherit;\n    color: #9b4dee !important;\n    padding: 0.92857143em 0.78571429em;\n    vertical-align: inherit;\n    font-style: none;\n    font-weight: bold;\n    text-transform: none;\n    border-bottom: 1px solid rgba(34, 36, 38, 0.1);\n    border-left: none;\n  }\n  .ui.table thead tr > th:first-child {\n    border-left: none;\n  }\n  .ui.table thead tr:first-child > th:first-child {\n    border-radius: 0.28571429rem 0em 0em 0em;\n  }\n  .ui.table thead tr:first-child > th:last-child {\n    border-radius: 0em 0.28571429rem 0em 0em;\n  }\n  .ui.table thead tr:first-child > th:only-child {\n    border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n  }\n\n  /* Footer */\n  .ui.table tfoot {\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    margin-top: 20px;\n  }\n  .ui.table tfoot th {\n    cursor: auto;\n    border-top: 1px solid rgba(34, 36, 38, 0.15);\n    background: #f9fafb;\n    text-align: inherit;\n    color: rgba(0, 0, 0, 0.87);\n    padding: 0.78571429em 0.78571429em;\n    vertical-align: middle;\n    font-style: normal;\n    font-weight: normal;\n    text-transform: none;\n  }\n  .ui.table tfoot tr > th:first-child {\n    border-left: none;\n  }\n  .ui.table tfoot tr:first-child > th:first-child {\n    border-radius: 0em 0em 0em 0.28571429rem;\n  }\n  .ui.table tfoot tr:first-child > th:last-child {\n    border-radius: 0em 0em 0.28571429rem 0em;\n  }\n  .ui.table tfoot tr:first-child > th:only-child {\n    border-radius: 0em 0em 0.28571429rem 0.28571429rem;\n  }\n\n  /* Table Row */\n  .ui.table tr td {\n    border-top: 1px solid rgba(34, 36, 38, 0.1);\n  }\n  .ui.table tr:first-child td {\n    border-top: none;\n  }\n\n  /* Repeated tbody */\n  .ui.table tbody + tbody tr:first-child td {\n    border-top: 1px solid rgba(34, 36, 38, 0.1);\n  }\n\n  /* Table Cells */\n  .ui.table td {\n    padding: 0.78571429em 0.78571429em;\n    text-align: inherit;\n  }\n\n  /* Icons */\n  .ui.table > .icon {\n    vertical-align: baseline;\n  }\n  .ui.table > .icon:only-child {\n    margin: 0em;\n  }\n\n  /* Table Segment */\n  .ui.table.segment {\n    padding: 0em;\n  }\n  .ui.table.segment:after {\n    display: none;\n  }\n  .ui.table.segment.stacked:after {\n    display: block;\n  }\n\n  /* Responsive */\n  @media only screen and (max-width: 767px) {\n    .ui.table:not(.unstackable) {\n      width: 100%;\n    }\n    .ui.table:not(.unstackable) tbody,\n    .ui.table:not(.unstackable) tr,\n    .ui.table:not(.unstackable) tr > th,\n    .ui.table:not(.unstackable) tr > td {\n      width: auto !important;\n      display: block !important;\n    }\n    .ui.table:not(.unstackable) {\n      padding: 0em;\n    }\n    .ui.table:not(.unstackable) thead {\n      display: block;\n    }\n    .ui.table:not(.unstackable) tfoot {\n      display: block;\n    }\n    .ui.table:not(.unstackable) tr {\n      padding-top: 1em;\n      padding-bottom: 1em;\n      -webkit-box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n      box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n    }\n    .ui.table:not(.unstackable) tr > th,\n    .ui.table:not(.unstackable) tr > td {\n      background: none;\n      border: none !important;\n      padding: 0.25em 0.75em !important;\n      -webkit-box-shadow: none !important;\n      box-shadow: none !important;\n    }\n    .ui.table:not(.unstackable) th:first-child,\n    .ui.table:not(.unstackable) td:first-child {\n      font-weight: bold;\n    }\n\n    /* Definition Table */\n    .ui.definition.table:not(.unstackable) thead th:first-child {\n      -webkit-box-shadow: none !important;\n      box-shadow: none !important;\n    }\n  }\n\n  /*******************************\n              Coupling\n  *******************************/\n\n  /* UI Image */\n  .ui.table th .image,\n  .ui.table th .image img,\n  .ui.table td .image,\n  .ui.table td .image img {\n    max-width: none;\n  }\n\n  /*******************************\n               Types\n  *******************************/\n\n  /*--------------\n      Complex\n  ---------------*/\n\n  .ui.structured.table {\n    border-collapse: collapse;\n  }\n  .ui.structured.table thead th {\n    border-left: none;\n    border-right: none;\n  }\n  .ui.structured.sortable.table thead th {\n    border-left: 1px solid rgba(34, 36, 38, 0.15);\n    border-right: 1px solid rgba(34, 36, 38, 0.15);\n  }\n  .ui.structured.basic.table th {\n    border-left: none;\n    border-right: none;\n  }\n  .ui.structured.celled.table tr th,\n  .ui.structured.celled.table tr td {\n    border-left: 1px solid rgba(34, 36, 38, 0.1);\n    border-right: 1px solid rgba(34, 36, 38, 0.1);\n  }\n\n  /*--------------\n     Definition\n  ---------------*/\n\n  .ui.definition.table thead:not(.full-width) th:first-child {\n    pointer-events: none;\n    background: transparent;\n    font-weight: normal;\n    color: rgba(0, 0, 0, 0.4);\n    -webkit-box-shadow: -1px -1px 0px 1px #ffffff;\n    box-shadow: -1px -1px 0px 1px #ffffff;\n  }\n  .ui.definition.table tfoot:not(.full-width) th:first-child {\n    pointer-events: none;\n    background: transparent;\n    font-weight: rgba(0, 0, 0, 0.4);\n    color: normal;\n    -webkit-box-shadow: 1px 1px 0px 1px #ffffff;\n    box-shadow: 1px 1px 0px 1px #ffffff;\n  }\n\n  /* Remove Border */\n  .ui.celled.definition.table thead:not(.full-width) th:first-child {\n    -webkit-box-shadow: 0px -1px 0px 1px #ffffff;\n    box-shadow: 0px -1px 0px 1px #ffffff;\n  }\n  .ui.celled.definition.table tfoot:not(.full-width) th:first-child {\n    -webkit-box-shadow: 0px 1px 0px 1px #ffffff;\n    box-shadow: 0px 1px 0px 1px #ffffff;\n  }\n\n  /* Highlight Defining Column */\n  .ui.definition.table tr td:first-child:not(.ignored),\n  .ui.definition.table tr td.definition {\n    background: none;\n    font-weight: bold;\n    color: ", ";\n    text-transform: '';\n    -webkit-box-shadow: '';\n    box-shadow: '';\n    text-align: '';\n    font-size: 1em;\n    padding-left: '';\n    padding-right: '';\n  }\n\n  /* Fix 2nd Column */\n  .ui.definition.table thead:not(.full-width) th:nth-child(2) {\n    border-left: 1px solid rgba(34, 36, 38, 0.15);\n  }\n  .ui.definition.table tfoot:not(.full-width) th:nth-child(2) {\n    border-left: 1px solid rgba(34, 36, 38, 0.15);\n  }\n  .ui.definition.table td:nth-child(2) {\n    border-left: 1px solid rgba(34, 36, 38, 0.15);\n  }\n\n  /*******************************\n               States\n  *******************************/\n\n  /*--------------\n      Positive\n  ---------------*/\n\n  .ui.table tr.positive,\n  .ui.table td.positive {\n    -webkit-box-shadow: 0px 0px 0px #a3c293 inset;\n    box-shadow: 0px 0px 0px #a3c293 inset;\n  }\n  .ui.table tr.positive,\n  .ui.table td.positive {\n    background: #fcfff5 !important;\n    color: #2c662d !important;\n  }\n\n  /*--------------\n       Negative\n  ---------------*/\n\n  .ui.table tr.negative,\n  .ui.table td.negative {\n    -webkit-box-shadow: 0px 0px 0px #e0b4b4 inset;\n    box-shadow: 0px 0px 0px #e0b4b4 inset;\n  }\n  .ui.table tr.negative,\n  .ui.table td.negative {\n    background: #fff6f6 !important;\n    color: #9f3a38 !important;\n  }\n\n  /*--------------\n        Error\n  ---------------*/\n\n  .ui.table tr.error,\n  .ui.table td.error {\n    -webkit-box-shadow: 0px 0px 0px #e0b4b4 inset;\n    box-shadow: 0px 0px 0px #e0b4b4 inset;\n  }\n  .ui.table tr.error,\n  .ui.table td.error {\n    background: #fff6f6 !important;\n    color: #9f3a38 !important;\n  }\n\n  /*--------------\n       Warning\n  ---------------*/\n\n  .ui.table tr.warning,\n  .ui.table td.warning {\n    -webkit-box-shadow: 0px 0px 0px #c9ba9b inset;\n    box-shadow: 0px 0px 0px #c9ba9b inset;\n  }\n  .ui.table tr.warning,\n  .ui.table td.warning {\n    background: #fffaf3 !important;\n    color: #573a08 !important;\n  }\n\n  /*--------------\n       Active\n  ---------------*/\n\n  .ui.table tr.active,\n  .ui.table td.active {\n    -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.87) inset;\n    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.87) inset;\n  }\n  .ui.table tr.active,\n  .ui.table td.active {\n    background: #e0e0e0 !important;\n    color: rgba(0, 0, 0, 0.87) !important;\n  }\n\n  /*--------------\n       Disabled\n  ---------------*/\n\n  .ui.table tr.disabled td,\n  .ui.table tr td.disabled,\n  .ui.table tr.disabled:hover,\n  .ui.table tr:hover td.disabled {\n    pointer-events: none;\n    color: rgba(40, 40, 40, 0.3);\n  }\n\n  /*******************************\n            Variations\n  *******************************/\n\n  /*--------------\n      Stackable\n  ---------------*/\n\n  @media only screen and (max-width: 991px) {\n    .ui[class*='tablet stackable'].table,\n    .ui[class*='tablet stackable'].table tbody,\n    .ui[class*='tablet stackable'].table tr,\n    .ui[class*='tablet stackable'].table tr > th,\n    .ui[class*='tablet stackable'].table tr > td {\n      width: 100% !important;\n      display: block !important;\n    }\n    .ui[class*='tablet stackable'].table {\n      padding: 0em;\n    }\n    .ui[class*='tablet stackable'].table thead {\n      display: block;\n    }\n    .ui[class*='tablet stackable'].table tfoot {\n      display: block;\n    }\n    .ui[class*='tablet stackable'].table tr {\n      padding-top: 1em;\n      padding-bottom: 1em;\n      -webkit-box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n      box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n    }\n    .ui[class*='tablet stackable'].table tr > th,\n    .ui[class*='tablet stackable'].table tr > td {\n      background: none;\n      border: none !important;\n      padding: 0.25em 0.75em;\n      -webkit-box-shadow: none !important;\n      box-shadow: none !important;\n    }\n\n    /* Definition Table */\n    .ui.definition[class*='tablet stackable'].table thead th:first-child {\n      -webkit-box-shadow: none !important;\n      box-shadow: none !important;\n    }\n  }\n\n  /*--------------\n   Text Alignment\n  ---------------*/\n\n  .ui.table[class*='left aligned'],\n  .ui.table [class*='left aligned'] {\n    text-align: left;\n  }\n  .ui.table[class*='center aligned'],\n  .ui.table [class*='center aligned'] {\n    text-align: center;\n  }\n  .ui.table[class*='right aligned'],\n  .ui.table [class*='right aligned'] {\n    text-align: right;\n  }\n\n  /*------------------\n   Vertical Alignment\n  ------------------*/\n\n  .ui.table[class*='top aligned'],\n  .ui.table [class*='top aligned'] {\n    vertical-align: top;\n  }\n  .ui.table[class*='middle aligned'],\n  .ui.table [class*='middle aligned'] {\n    vertical-align: middle;\n  }\n  .ui.table[class*='bottom aligned'],\n  .ui.table [class*='bottom aligned'] {\n    vertical-align: bottom;\n  }\n\n  /*--------------\n      Collapsing\n  ---------------*/\n\n  .ui.table th.collapsing,\n  .ui.table td.collapsing {\n    width: 1px;\n    white-space: nowrap;\n  }\n\n  /*--------------\n       Fixed\n  ---------------*/\n\n  .ui.fixed.table {\n    table-layout: fixed;\n  }\n  .ui.fixed.table th,\n  .ui.fixed.table td {\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  /*--------------\n     Selectable\n  ---------------*/\n\n  .ui.selectable.table tbody tr:hover,\n  .ui.table tbody tr td.selectable:hover {\n    background: rgba(0, 0, 0, 0.05) !important;\n    color: rgba(0, 0, 0, 0.95) !important;\n  }\n  .ui.selectable.inverted.table tbody tr:hover,\n  .ui.inverted.table tbody tr td.selectable:hover {\n    background: rgba(255, 255, 255, 0.08) !important;\n    color: #ffffff !important;\n  }\n\n  /* Selectable Cell Link */\n  .ui.table tbody tr td.selectable {\n    padding: 0em;\n  }\n  .ui.table tbody tr td.selectable > a:not(.ui) {\n    display: block;\n    color: inherit;\n    padding: 0.78571429em 0.78571429em;\n  }\n\n  /* Other States */\n  .ui.selectable.table tr.error:hover,\n  .ui.table tr td.selectable.error:hover,\n  .ui.selectable.table tr:hover td.error {\n    background: #ffe7e7 !important;\n    color: #943634 !important;\n  }\n  .ui.selectable.table tr.warning:hover,\n  .ui.table tr td.selectable.warning:hover,\n  .ui.selectable.table tr:hover td.warning {\n    background: #fff4e4 !important;\n    color: #493107 !important;\n  }\n  .ui.selectable.table tr.active:hover,\n  .ui.table tr td.selectable.active:hover,\n  .ui.selectable.table tr:hover td.active {\n    background: #e0e0e0 !important;\n    color: rgba(0, 0, 0, 0.87) !important;\n  }\n  .ui.selectable.table tr.positive:hover,\n  .ui.table tr td.selectable.positive:hover,\n  .ui.selectable.table tr:hover td.positive {\n    background: #f7ffe6 !important;\n    color: #275b28 !important;\n  }\n  .ui.selectable.table tr.negative:hover,\n  .ui.table tr td.selectable.negative:hover,\n  .ui.selectable.table tr:hover td.negative {\n    background: #ffe7e7 !important;\n    color: #943634 !important;\n  }\n\n  /*-------------------\n        Attached\n  --------------------*/\n\n  /* Middle */\n  .ui.attached.table {\n    top: 0px;\n    bottom: 0px;\n    border-radius: 0px;\n    margin: 0em -1px;\n    width: calc(100% - (-1px * 2));\n    max-width: calc(100% - (-1px * 2));\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    border: 1px solid #d4d4d5;\n  }\n  .ui.attached + .ui.attached.table:not(.top) {\n    border-top: none;\n  }\n\n  /* Top */\n  .ui[class*='top attached'].table {\n    bottom: 0px;\n    margin-bottom: 0em;\n    top: 0px;\n    margin-top: 1em;\n    border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n  }\n  .ui.table[class*='top attached']:first-child {\n    margin-top: 0em;\n  }\n\n  /* Bottom */\n  .ui[class*='bottom attached'].table {\n    bottom: 0px;\n    margin-top: 0em;\n    top: 0px;\n    margin-bottom: 1em;\n    -webkit-box-shadow: none, none;\n    box-shadow: none, none;\n    border-radius: 0em 0em 0.28571429rem 0.28571429rem;\n  }\n  .ui[class*='bottom attached'].table:last-child {\n    margin-bottom: 0em;\n  }\n\n  /*--------------\n       Striped\n  ---------------*/\n\n  /* Table Striping */\n  .ui.striped.table > tr:nth-child(2n),\n  .ui.striped.table tbody tr:nth-child(2n) {\n    background-color: rgba(0, 0, 50, 0.02);\n  }\n\n  /* Stripes */\n  .ui.inverted.striped.table > tr:nth-child(2n),\n  .ui.inverted.striped.table tbody tr:nth-child(2n) {\n    background-color: rgba(255, 255, 255, 0.05);\n  }\n\n  /* Allow striped active hover */\n  .ui.striped.selectable.selectable.selectable.table tbody tr.active:hover {\n    background: #efefef !important;\n    color: rgba(0, 0, 0, 0.95) !important;\n  }\n\n  /*--------------\n     Single Line\n  ---------------*/\n\n  .ui.table[class*='single line'],\n  .ui.table [class*='single line'] {\n    white-space: nowrap;\n  }\n  .ui.table[class*='single line'],\n  .ui.table [class*='single line'] {\n    white-space: nowrap;\n  }\n\n  /*-------------------\n         Colors\n  --------------------*/\n\n  /* Red */\n  .ui.red.table {\n    border-top: 0.2em solid #db2828;\n  }\n  .ui.inverted.red.table {\n    background-color: #db2828 !important;\n    color: #ffffff !important;\n  }\n\n  /* Orange */\n  .ui.orange.table {\n    border-top: 0.2em solid #f2711c;\n  }\n  .ui.inverted.orange.table {\n    background-color: #f2711c !important;\n    color: #ffffff !important;\n  }\n\n  /* Yellow */\n  .ui.yellow.table {\n    border-top: 0.2em solid #fbbd08;\n  }\n  .ui.inverted.yellow.table {\n    background-color: #fbbd08 !important;\n    color: #ffffff !important;\n  }\n\n  /* Olive */\n  .ui.olive.table {\n    border-top: 0.2em solid #b5cc18;\n  }\n  .ui.inverted.olive.table {\n    background-color: #b5cc18 !important;\n    color: #ffffff !important;\n  }\n\n  /* Green */\n  .ui.green.table {\n    border-top: 0.2em solid #21ba45;\n  }\n  .ui.inverted.green.table {\n    background-color: #21ba45 !important;\n    color: #ffffff !important;\n  }\n\n  /* Teal */\n  .ui.teal.table {\n    border-top: 0.2em solid #00b5ad;\n  }\n  .ui.inverted.teal.table {\n    background-color: #00b5ad !important;\n    color: #ffffff !important;\n  }\n\n  /* Blue */\n  .ui.blue.table {\n    border-top: 0.2em solid #2185d0;\n  }\n  .ui.inverted.blue.table {\n    background-color: #2185d0 !important;\n    color: #ffffff !important;\n  }\n\n  /* Violet */\n  .ui.violet.table {\n    border-top: 0.2em solid #6435c9;\n  }\n  .ui.inverted.violet.table {\n    background-color: #6435c9 !important;\n    color: #ffffff !important;\n  }\n\n  /* Purple */\n  .ui.purple.table {\n    border-top: 0.2em solid #a333c8;\n  }\n  .ui.inverted.purple.table {\n    background-color: #a333c8 !important;\n    color: #ffffff !important;\n  }\n\n  /* Pink */\n  .ui.pink.table {\n    border-top: 0.2em solid #e03997;\n  }\n  .ui.inverted.pink.table {\n    background-color: #e03997 !important;\n    color: #ffffff !important;\n  }\n\n  /* Brown */\n  .ui.brown.table {\n    border-top: 0.2em solid #a5673f;\n  }\n  .ui.inverted.brown.table {\n    background-color: #a5673f !important;\n    color: #ffffff !important;\n  }\n\n  /* Grey */\n  .ui.grey.table {\n    border-top: 0.2em solid #767676;\n  }\n  .ui.inverted.grey.table {\n    background-color: #767676 !important;\n    color: #ffffff !important;\n  }\n\n  /* Black */\n  .ui.black.table {\n    border-top: 0.2em solid #1b1c1d;\n  }\n  .ui.inverted.black.table {\n    background-color: #1b1c1d !important;\n    color: #ffffff !important;\n  }\n\n  /*--------------\n    Column Count\n  ---------------*/\n\n  /* Grid Based */\n  .ui.one.column.table td {\n    width: 100%;\n  }\n  .ui.two.column.table td {\n    width: 50%;\n  }\n  .ui.three.column.table td {\n    width: 33.33333333%;\n  }\n  .ui.four.column.table td {\n    width: 25%;\n  }\n  .ui.five.column.table td {\n    width: 20%;\n  }\n  .ui.six.column.table td {\n    width: 16.66666667%;\n  }\n  .ui.seven.column.table td {\n    width: 14.28571429%;\n  }\n  .ui.eight.column.table td {\n    width: 12.5%;\n  }\n  .ui.nine.column.table td {\n    width: 11.11111111%;\n  }\n  .ui.ten.column.table td {\n    width: 10%;\n  }\n  .ui.eleven.column.table td {\n    width: 9.09090909%;\n  }\n  .ui.twelve.column.table td {\n    width: 8.33333333%;\n  }\n  .ui.thirteen.column.table td {\n    width: 7.69230769%;\n  }\n  .ui.fourteen.column.table td {\n    width: 7.14285714%;\n  }\n  .ui.fifteen.column.table td {\n    width: 6.66666667%;\n  }\n  .ui.sixteen.column.table td {\n    width: 6.25%;\n  }\n\n  /* Column Width */\n  .ui.table th.one.wide,\n  .ui.table td.one.wide {\n    width: 6.25%;\n  }\n  .ui.table th.two.wide,\n  .ui.table td.two.wide {\n    width: 12.5%;\n  }\n  .ui.table th.three.wide,\n  .ui.table td.three.wide {\n    width: 18.75%;\n  }\n  .ui.table th.four.wide,\n  .ui.table td.four.wide {\n    width: 25%;\n  }\n  .ui.table th.five.wide,\n  .ui.table td.five.wide {\n    width: 31.25%;\n  }\n  .ui.table th.six.wide,\n  .ui.table td.six.wide {\n    width: 37.5%;\n  }\n  .ui.table th.seven.wide,\n  .ui.table td.seven.wide {\n    width: 43.75%;\n  }\n  .ui.table th.eight.wide,\n  .ui.table td.eight.wide {\n    width: 50%;\n  }\n  .ui.table th.nine.wide,\n  .ui.table td.nine.wide {\n    width: 56.25%;\n  }\n  .ui.table th.ten.wide,\n  .ui.table td.ten.wide {\n    width: 62.5%;\n  }\n  .ui.table th.eleven.wide,\n  .ui.table td.eleven.wide {\n    width: 68.75%;\n  }\n  .ui.table th.twelve.wide,\n  .ui.table td.twelve.wide {\n    width: 75%;\n  }\n  .ui.table th.thirteen.wide,\n  .ui.table td.thirteen.wide {\n    width: 81.25%;\n  }\n  .ui.table th.fourteen.wide,\n  .ui.table td.fourteen.wide {\n    width: 87.5%;\n  }\n  .ui.table th.fifteen.wide,\n  .ui.table td.fifteen.wide {\n    width: 93.75%;\n  }\n  .ui.table th.sixteen.wide,\n  .ui.table td.sixteen.wide {\n    width: 100%;\n  }\n\n  /*--------------\n      Sortable\n  ---------------*/\n\n  .ui.sortable.table thead th {\n    cursor: pointer;\n    white-space: nowrap;\n    border-left: 1px solid rgba(34, 36, 38, 0.15);\n    color: rgba(0, 0, 0, 0.87);\n  }\n  .ui.sortable.table thead th:first-child {\n    border-left: none;\n  }\n  .ui.sortable.table thead th.sorted,\n  .ui.sortable.table thead th.sorted:hover {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  .ui.sortable.table thead th:after {\n    display: none;\n    font-style: normal;\n    font-weight: normal;\n    text-decoration: inherit;\n    content: '';\n    height: 1em;\n    width: auto;\n    opacity: 0.8;\n    margin: 0em 0em 0em 0.5em;\n    font-family: 'Icons';\n  }\n  .ui.sortable.table thead th.ascending:after {\n    content: '\f0d8';\n  }\n  .ui.sortable.table thead th.descending:after {\n    content: '\f0d7';\n  }\n\n  /* Hover */\n  .ui.sortable.table th.disabled:hover {\n    cursor: auto;\n    color: rgba(40, 40, 40, 0.3);\n  }\n  .ui.sortable.table thead th:hover {\n    background: rgba(0, 0, 0, 0.05);\n    color: rgba(0, 0, 0, 0.8);\n  }\n\n  /* Sorted */\n  .ui.sortable.table thead th.sorted {\n    background: rgba(0, 0, 0, 0.05);\n    color: rgba(0, 0, 0, 0.95);\n  }\n  .ui.sortable.table thead th.sorted:after {\n    display: inline-block;\n  }\n\n  /* Sorted Hover */\n  .ui.sortable.table thead th.sorted:hover {\n    background: rgba(0, 0, 0, 0.05);\n    color: rgba(0, 0, 0, 0.95);\n  }\n\n  /* Inverted */\n  .ui.inverted.sortable.table thead th.sorted {\n    background: rgba(255, 255, 255, 0.15) -webkit-gradient(linear, left top, left\n          bottom, from(transparent), to(rgba(0, 0, 0, 0.05)));\n    background: rgba(255, 255, 255, 0.15) -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n    background: rgba(255, 255, 255, 0.15)\n      linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n    color: #ffffff;\n  }\n  .ui.inverted.sortable.table thead th:hover {\n    background: rgba(255, 255, 255, 0.08) -webkit-gradient(linear, left top, left\n          bottom, from(transparent), to(rgba(0, 0, 0, 0.05)));\n    background: rgba(255, 255, 255, 0.08) -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n    background: rgba(255, 255, 255, 0.08)\n      linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n    color: #ffffff;\n  }\n  .ui.inverted.sortable.table thead th {\n    border-left-color: transparent;\n    border-right-color: transparent;\n  }\n\n  /*--------------\n      Inverted\n  ---------------*/\n\n  /* Text Color */\n  .ui.inverted.table {\n    background: #333333;\n    color: rgba(255, 255, 255, 0.9);\n    border: none;\n  }\n  .ui.inverted.table th {\n    background-color: rgba(0, 0, 0, 0.15);\n    border-color: rgba(255, 255, 255, 0.1) !important;\n    color: rgba(255, 255, 255, 0.9) !important;\n  }\n  .ui.inverted.table tr td {\n    border-color: rgba(255, 255, 255, 0.1) !important;\n  }\n  .ui.inverted.table tr.disabled td,\n  .ui.inverted.table tr td.disabled,\n  .ui.inverted.table tr.disabled:hover td,\n  .ui.inverted.table tr:hover td.disabled {\n    pointer-events: none;\n    color: rgba(225, 225, 225, 0.3);\n  }\n\n  /* Definition */\n  .ui.inverted.definition.table tfoot:not(.full-width) th:first-child,\n  .ui.inverted.definition.table thead:not(.full-width) th:first-child {\n    background: #ffffff;\n  }\n  .ui.inverted.definition.table tr td:first-child {\n    background: rgba(255, 255, 255, 0.02);\n    color: #ffffff;\n  }\n\n  /*--------------\n     Collapsing\n  ---------------*/\n\n  .ui.collapsing.table {\n    width: auto;\n  }\n\n  /*--------------\n        Basic\n  ---------------*/\n\n  .ui.basic.table {\n    background: transparent;\n    border: 1px solid rgba(34, 36, 38, 0.15);\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n  .ui.basic.table thead,\n  .ui.basic.table tfoot {\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n  .ui.basic.table th {\n    background: transparent;\n    border-left: none;\n  }\n  .ui.basic.table tbody tr {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  }\n  .ui.basic.table td {\n    background: transparent;\n  }\n  .ui.basic.striped.table tbody tr:nth-child(2n) {\n    background-color: rgba(0, 0, 0, 0.05) !important;\n  }\n\n  /* Very Basic */\n  .ui[class*='very basic'].table {\n    border: none;\n  }\n  .ui[class*='very basic'].table:not(.sortable):not(.striped) th,\n  .ui[class*='very basic'].table:not(.sortable):not(.striped) td {\n    padding: '';\n  }\n  .ui[class*='very basic'].table:not(.sortable):not(.striped) th:first-child,\n  .ui[class*='very basic'].table:not(.sortable):not(.striped) td:first-child {\n    padding-left: 0em;\n  }\n  .ui[class*='very basic'].table:not(.sortable):not(.striped) th:last-child,\n  .ui[class*='very basic'].table:not(.sortable):not(.striped) td:last-child {\n    padding-right: 0em;\n  }\n  .ui[class*='very basic'].table:not(.sortable):not(.striped)\n    thead\n    tr:first-child\n    th {\n    padding-top: 0em;\n  }\n\n  /*--------------\n       Celled\n  ---------------*/\n\n  .ui.celled.table tr th,\n  .ui.celled.table tr td {\n    border-left: 1px solid rgba(34, 36, 38, 0.1);\n  }\n  .ui.celled.table tr th:first-child,\n  .ui.celled.table tr td:first-child {\n    border-left: none;\n  }\n\n  /*--------------\n       Padded\n  ---------------*/\n\n  .ui.padded.table th {\n    padding-left: 1em;\n    padding-right: 1em;\n  }\n  .ui.padded.table th,\n  .ui.padded.table td {\n    padding: 1em 1em;\n  }\n\n  /* Very */\n  .ui[class*='very padded'].table th {\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n  }\n  .ui[class*='very padded'].table td {\n    padding: 1.5em 1.5em;\n  }\n\n  /*--------------\n       Compact\n  ---------------*/\n\n  .ui.compact.table th {\n    padding-left: 0.7em;\n    padding-right: 0.7em;\n  }\n  .ui.compact.table td {\n    padding: 0.5em 0.7em;\n  }\n\n  /* Very */\n  .ui[class*='very compact'].table th {\n    padding-left: 0.6em;\n    padding-right: 0.6em;\n  }\n  .ui[class*='very compact'].table td {\n    padding: 0.4em 0.6em;\n  }\n\n  /*--------------\n        Sizes\n  ---------------*/\n\n  /* Small */\n  .ui.small.table {\n    font-size: 0.9em;\n  }\n\n  /* Standard */\n  .ui.table {\n    font-size: 1em;\n  }\n\n  /* Large */\n  .ui.large.table {\n    font-size: 1.1em;\n  }\n\n  /*******************************\n           Site Overrides\n  *******************************/\n"], ["\n  margin-bottom: ", ";\n\n  /*!\n * # Semantic UI 2.4.1 - Table\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */\n\n  /*******************************\n             Table\n*******************************/\n\n  /* Prototype */\n  .ui.table {\n    width: 100%;\n    background: #ffffff;\n    margin: 1em 0em;\n    border: none !important;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    border-radius: 0.28571429rem;\n    text-align: left;\n    color: #707070;\n    border-collapse: separate;\n    border-spacing: 0px;\n  }\n  .ui.table:first-child {\n    margin-top: 0em;\n  }\n  .ui.table:last-child {\n    margin-bottom: 0em;\n  }\n\n  /*******************************\n               Parts\n  *******************************/\n\n  /* Table Content */\n  .ui.table th,\n  .ui.table td {\n    -webkit-transition: background 0.1s ease, color 0.1s ease;\n    transition: background 0.1s ease, color 0.1s ease;\n  }\n\n  /* Headers */\n  .ui.table thead {\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n  .ui.table thead th {\n    cursor: auto;\n    background: none !important;\n    text-align: inherit;\n    color: #9b4dee !important;\n    padding: 0.92857143em 0.78571429em;\n    vertical-align: inherit;\n    font-style: none;\n    font-weight: bold;\n    text-transform: none;\n    border-bottom: 1px solid rgba(34, 36, 38, 0.1);\n    border-left: none;\n  }\n  .ui.table thead tr > th:first-child {\n    border-left: none;\n  }\n  .ui.table thead tr:first-child > th:first-child {\n    border-radius: 0.28571429rem 0em 0em 0em;\n  }\n  .ui.table thead tr:first-child > th:last-child {\n    border-radius: 0em 0.28571429rem 0em 0em;\n  }\n  .ui.table thead tr:first-child > th:only-child {\n    border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n  }\n\n  /* Footer */\n  .ui.table tfoot {\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    margin-top: 20px;\n  }\n  .ui.table tfoot th {\n    cursor: auto;\n    border-top: 1px solid rgba(34, 36, 38, 0.15);\n    background: #f9fafb;\n    text-align: inherit;\n    color: rgba(0, 0, 0, 0.87);\n    padding: 0.78571429em 0.78571429em;\n    vertical-align: middle;\n    font-style: normal;\n    font-weight: normal;\n    text-transform: none;\n  }\n  .ui.table tfoot tr > th:first-child {\n    border-left: none;\n  }\n  .ui.table tfoot tr:first-child > th:first-child {\n    border-radius: 0em 0em 0em 0.28571429rem;\n  }\n  .ui.table tfoot tr:first-child > th:last-child {\n    border-radius: 0em 0em 0.28571429rem 0em;\n  }\n  .ui.table tfoot tr:first-child > th:only-child {\n    border-radius: 0em 0em 0.28571429rem 0.28571429rem;\n  }\n\n  /* Table Row */\n  .ui.table tr td {\n    border-top: 1px solid rgba(34, 36, 38, 0.1);\n  }\n  .ui.table tr:first-child td {\n    border-top: none;\n  }\n\n  /* Repeated tbody */\n  .ui.table tbody + tbody tr:first-child td {\n    border-top: 1px solid rgba(34, 36, 38, 0.1);\n  }\n\n  /* Table Cells */\n  .ui.table td {\n    padding: 0.78571429em 0.78571429em;\n    text-align: inherit;\n  }\n\n  /* Icons */\n  .ui.table > .icon {\n    vertical-align: baseline;\n  }\n  .ui.table > .icon:only-child {\n    margin: 0em;\n  }\n\n  /* Table Segment */\n  .ui.table.segment {\n    padding: 0em;\n  }\n  .ui.table.segment:after {\n    display: none;\n  }\n  .ui.table.segment.stacked:after {\n    display: block;\n  }\n\n  /* Responsive */\n  @media only screen and (max-width: 767px) {\n    .ui.table:not(.unstackable) {\n      width: 100%;\n    }\n    .ui.table:not(.unstackable) tbody,\n    .ui.table:not(.unstackable) tr,\n    .ui.table:not(.unstackable) tr > th,\n    .ui.table:not(.unstackable) tr > td {\n      width: auto !important;\n      display: block !important;\n    }\n    .ui.table:not(.unstackable) {\n      padding: 0em;\n    }\n    .ui.table:not(.unstackable) thead {\n      display: block;\n    }\n    .ui.table:not(.unstackable) tfoot {\n      display: block;\n    }\n    .ui.table:not(.unstackable) tr {\n      padding-top: 1em;\n      padding-bottom: 1em;\n      -webkit-box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n      box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n    }\n    .ui.table:not(.unstackable) tr > th,\n    .ui.table:not(.unstackable) tr > td {\n      background: none;\n      border: none !important;\n      padding: 0.25em 0.75em !important;\n      -webkit-box-shadow: none !important;\n      box-shadow: none !important;\n    }\n    .ui.table:not(.unstackable) th:first-child,\n    .ui.table:not(.unstackable) td:first-child {\n      font-weight: bold;\n    }\n\n    /* Definition Table */\n    .ui.definition.table:not(.unstackable) thead th:first-child {\n      -webkit-box-shadow: none !important;\n      box-shadow: none !important;\n    }\n  }\n\n  /*******************************\n              Coupling\n  *******************************/\n\n  /* UI Image */\n  .ui.table th .image,\n  .ui.table th .image img,\n  .ui.table td .image,\n  .ui.table td .image img {\n    max-width: none;\n  }\n\n  /*******************************\n               Types\n  *******************************/\n\n  /*--------------\n      Complex\n  ---------------*/\n\n  .ui.structured.table {\n    border-collapse: collapse;\n  }\n  .ui.structured.table thead th {\n    border-left: none;\n    border-right: none;\n  }\n  .ui.structured.sortable.table thead th {\n    border-left: 1px solid rgba(34, 36, 38, 0.15);\n    border-right: 1px solid rgba(34, 36, 38, 0.15);\n  }\n  .ui.structured.basic.table th {\n    border-left: none;\n    border-right: none;\n  }\n  .ui.structured.celled.table tr th,\n  .ui.structured.celled.table tr td {\n    border-left: 1px solid rgba(34, 36, 38, 0.1);\n    border-right: 1px solid rgba(34, 36, 38, 0.1);\n  }\n\n  /*--------------\n     Definition\n  ---------------*/\n\n  .ui.definition.table thead:not(.full-width) th:first-child {\n    pointer-events: none;\n    background: transparent;\n    font-weight: normal;\n    color: rgba(0, 0, 0, 0.4);\n    -webkit-box-shadow: -1px -1px 0px 1px #ffffff;\n    box-shadow: -1px -1px 0px 1px #ffffff;\n  }\n  .ui.definition.table tfoot:not(.full-width) th:first-child {\n    pointer-events: none;\n    background: transparent;\n    font-weight: rgba(0, 0, 0, 0.4);\n    color: normal;\n    -webkit-box-shadow: 1px 1px 0px 1px #ffffff;\n    box-shadow: 1px 1px 0px 1px #ffffff;\n  }\n\n  /* Remove Border */\n  .ui.celled.definition.table thead:not(.full-width) th:first-child {\n    -webkit-box-shadow: 0px -1px 0px 1px #ffffff;\n    box-shadow: 0px -1px 0px 1px #ffffff;\n  }\n  .ui.celled.definition.table tfoot:not(.full-width) th:first-child {\n    -webkit-box-shadow: 0px 1px 0px 1px #ffffff;\n    box-shadow: 0px 1px 0px 1px #ffffff;\n  }\n\n  /* Highlight Defining Column */\n  .ui.definition.table tr td:first-child:not(.ignored),\n  .ui.definition.table tr td.definition {\n    background: none;\n    font-weight: bold;\n    color: ", ";\n    text-transform: '';\n    -webkit-box-shadow: '';\n    box-shadow: '';\n    text-align: '';\n    font-size: 1em;\n    padding-left: '';\n    padding-right: '';\n  }\n\n  /* Fix 2nd Column */\n  .ui.definition.table thead:not(.full-width) th:nth-child(2) {\n    border-left: 1px solid rgba(34, 36, 38, 0.15);\n  }\n  .ui.definition.table tfoot:not(.full-width) th:nth-child(2) {\n    border-left: 1px solid rgba(34, 36, 38, 0.15);\n  }\n  .ui.definition.table td:nth-child(2) {\n    border-left: 1px solid rgba(34, 36, 38, 0.15);\n  }\n\n  /*******************************\n               States\n  *******************************/\n\n  /*--------------\n      Positive\n  ---------------*/\n\n  .ui.table tr.positive,\n  .ui.table td.positive {\n    -webkit-box-shadow: 0px 0px 0px #a3c293 inset;\n    box-shadow: 0px 0px 0px #a3c293 inset;\n  }\n  .ui.table tr.positive,\n  .ui.table td.positive {\n    background: #fcfff5 !important;\n    color: #2c662d !important;\n  }\n\n  /*--------------\n       Negative\n  ---------------*/\n\n  .ui.table tr.negative,\n  .ui.table td.negative {\n    -webkit-box-shadow: 0px 0px 0px #e0b4b4 inset;\n    box-shadow: 0px 0px 0px #e0b4b4 inset;\n  }\n  .ui.table tr.negative,\n  .ui.table td.negative {\n    background: #fff6f6 !important;\n    color: #9f3a38 !important;\n  }\n\n  /*--------------\n        Error\n  ---------------*/\n\n  .ui.table tr.error,\n  .ui.table td.error {\n    -webkit-box-shadow: 0px 0px 0px #e0b4b4 inset;\n    box-shadow: 0px 0px 0px #e0b4b4 inset;\n  }\n  .ui.table tr.error,\n  .ui.table td.error {\n    background: #fff6f6 !important;\n    color: #9f3a38 !important;\n  }\n\n  /*--------------\n       Warning\n  ---------------*/\n\n  .ui.table tr.warning,\n  .ui.table td.warning {\n    -webkit-box-shadow: 0px 0px 0px #c9ba9b inset;\n    box-shadow: 0px 0px 0px #c9ba9b inset;\n  }\n  .ui.table tr.warning,\n  .ui.table td.warning {\n    background: #fffaf3 !important;\n    color: #573a08 !important;\n  }\n\n  /*--------------\n       Active\n  ---------------*/\n\n  .ui.table tr.active,\n  .ui.table td.active {\n    -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.87) inset;\n    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.87) inset;\n  }\n  .ui.table tr.active,\n  .ui.table td.active {\n    background: #e0e0e0 !important;\n    color: rgba(0, 0, 0, 0.87) !important;\n  }\n\n  /*--------------\n       Disabled\n  ---------------*/\n\n  .ui.table tr.disabled td,\n  .ui.table tr td.disabled,\n  .ui.table tr.disabled:hover,\n  .ui.table tr:hover td.disabled {\n    pointer-events: none;\n    color: rgba(40, 40, 40, 0.3);\n  }\n\n  /*******************************\n            Variations\n  *******************************/\n\n  /*--------------\n      Stackable\n  ---------------*/\n\n  @media only screen and (max-width: 991px) {\n    .ui[class*='tablet stackable'].table,\n    .ui[class*='tablet stackable'].table tbody,\n    .ui[class*='tablet stackable'].table tr,\n    .ui[class*='tablet stackable'].table tr > th,\n    .ui[class*='tablet stackable'].table tr > td {\n      width: 100% !important;\n      display: block !important;\n    }\n    .ui[class*='tablet stackable'].table {\n      padding: 0em;\n    }\n    .ui[class*='tablet stackable'].table thead {\n      display: block;\n    }\n    .ui[class*='tablet stackable'].table tfoot {\n      display: block;\n    }\n    .ui[class*='tablet stackable'].table tr {\n      padding-top: 1em;\n      padding-bottom: 1em;\n      -webkit-box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n      box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n    }\n    .ui[class*='tablet stackable'].table tr > th,\n    .ui[class*='tablet stackable'].table tr > td {\n      background: none;\n      border: none !important;\n      padding: 0.25em 0.75em;\n      -webkit-box-shadow: none !important;\n      box-shadow: none !important;\n    }\n\n    /* Definition Table */\n    .ui.definition[class*='tablet stackable'].table thead th:first-child {\n      -webkit-box-shadow: none !important;\n      box-shadow: none !important;\n    }\n  }\n\n  /*--------------\n   Text Alignment\n  ---------------*/\n\n  .ui.table[class*='left aligned'],\n  .ui.table [class*='left aligned'] {\n    text-align: left;\n  }\n  .ui.table[class*='center aligned'],\n  .ui.table [class*='center aligned'] {\n    text-align: center;\n  }\n  .ui.table[class*='right aligned'],\n  .ui.table [class*='right aligned'] {\n    text-align: right;\n  }\n\n  /*------------------\n   Vertical Alignment\n  ------------------*/\n\n  .ui.table[class*='top aligned'],\n  .ui.table [class*='top aligned'] {\n    vertical-align: top;\n  }\n  .ui.table[class*='middle aligned'],\n  .ui.table [class*='middle aligned'] {\n    vertical-align: middle;\n  }\n  .ui.table[class*='bottom aligned'],\n  .ui.table [class*='bottom aligned'] {\n    vertical-align: bottom;\n  }\n\n  /*--------------\n      Collapsing\n  ---------------*/\n\n  .ui.table th.collapsing,\n  .ui.table td.collapsing {\n    width: 1px;\n    white-space: nowrap;\n  }\n\n  /*--------------\n       Fixed\n  ---------------*/\n\n  .ui.fixed.table {\n    table-layout: fixed;\n  }\n  .ui.fixed.table th,\n  .ui.fixed.table td {\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  /*--------------\n     Selectable\n  ---------------*/\n\n  .ui.selectable.table tbody tr:hover,\n  .ui.table tbody tr td.selectable:hover {\n    background: rgba(0, 0, 0, 0.05) !important;\n    color: rgba(0, 0, 0, 0.95) !important;\n  }\n  .ui.selectable.inverted.table tbody tr:hover,\n  .ui.inverted.table tbody tr td.selectable:hover {\n    background: rgba(255, 255, 255, 0.08) !important;\n    color: #ffffff !important;\n  }\n\n  /* Selectable Cell Link */\n  .ui.table tbody tr td.selectable {\n    padding: 0em;\n  }\n  .ui.table tbody tr td.selectable > a:not(.ui) {\n    display: block;\n    color: inherit;\n    padding: 0.78571429em 0.78571429em;\n  }\n\n  /* Other States */\n  .ui.selectable.table tr.error:hover,\n  .ui.table tr td.selectable.error:hover,\n  .ui.selectable.table tr:hover td.error {\n    background: #ffe7e7 !important;\n    color: #943634 !important;\n  }\n  .ui.selectable.table tr.warning:hover,\n  .ui.table tr td.selectable.warning:hover,\n  .ui.selectable.table tr:hover td.warning {\n    background: #fff4e4 !important;\n    color: #493107 !important;\n  }\n  .ui.selectable.table tr.active:hover,\n  .ui.table tr td.selectable.active:hover,\n  .ui.selectable.table tr:hover td.active {\n    background: #e0e0e0 !important;\n    color: rgba(0, 0, 0, 0.87) !important;\n  }\n  .ui.selectable.table tr.positive:hover,\n  .ui.table tr td.selectable.positive:hover,\n  .ui.selectable.table tr:hover td.positive {\n    background: #f7ffe6 !important;\n    color: #275b28 !important;\n  }\n  .ui.selectable.table tr.negative:hover,\n  .ui.table tr td.selectable.negative:hover,\n  .ui.selectable.table tr:hover td.negative {\n    background: #ffe7e7 !important;\n    color: #943634 !important;\n  }\n\n  /*-------------------\n        Attached\n  --------------------*/\n\n  /* Middle */\n  .ui.attached.table {\n    top: 0px;\n    bottom: 0px;\n    border-radius: 0px;\n    margin: 0em -1px;\n    width: calc(100% - (-1px * 2));\n    max-width: calc(100% - (-1px * 2));\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    border: 1px solid #d4d4d5;\n  }\n  .ui.attached + .ui.attached.table:not(.top) {\n    border-top: none;\n  }\n\n  /* Top */\n  .ui[class*='top attached'].table {\n    bottom: 0px;\n    margin-bottom: 0em;\n    top: 0px;\n    margin-top: 1em;\n    border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n  }\n  .ui.table[class*='top attached']:first-child {\n    margin-top: 0em;\n  }\n\n  /* Bottom */\n  .ui[class*='bottom attached'].table {\n    bottom: 0px;\n    margin-top: 0em;\n    top: 0px;\n    margin-bottom: 1em;\n    -webkit-box-shadow: none, none;\n    box-shadow: none, none;\n    border-radius: 0em 0em 0.28571429rem 0.28571429rem;\n  }\n  .ui[class*='bottom attached'].table:last-child {\n    margin-bottom: 0em;\n  }\n\n  /*--------------\n       Striped\n  ---------------*/\n\n  /* Table Striping */\n  .ui.striped.table > tr:nth-child(2n),\n  .ui.striped.table tbody tr:nth-child(2n) {\n    background-color: rgba(0, 0, 50, 0.02);\n  }\n\n  /* Stripes */\n  .ui.inverted.striped.table > tr:nth-child(2n),\n  .ui.inverted.striped.table tbody tr:nth-child(2n) {\n    background-color: rgba(255, 255, 255, 0.05);\n  }\n\n  /* Allow striped active hover */\n  .ui.striped.selectable.selectable.selectable.table tbody tr.active:hover {\n    background: #efefef !important;\n    color: rgba(0, 0, 0, 0.95) !important;\n  }\n\n  /*--------------\n     Single Line\n  ---------------*/\n\n  .ui.table[class*='single line'],\n  .ui.table [class*='single line'] {\n    white-space: nowrap;\n  }\n  .ui.table[class*='single line'],\n  .ui.table [class*='single line'] {\n    white-space: nowrap;\n  }\n\n  /*-------------------\n         Colors\n  --------------------*/\n\n  /* Red */\n  .ui.red.table {\n    border-top: 0.2em solid #db2828;\n  }\n  .ui.inverted.red.table {\n    background-color: #db2828 !important;\n    color: #ffffff !important;\n  }\n\n  /* Orange */\n  .ui.orange.table {\n    border-top: 0.2em solid #f2711c;\n  }\n  .ui.inverted.orange.table {\n    background-color: #f2711c !important;\n    color: #ffffff !important;\n  }\n\n  /* Yellow */\n  .ui.yellow.table {\n    border-top: 0.2em solid #fbbd08;\n  }\n  .ui.inverted.yellow.table {\n    background-color: #fbbd08 !important;\n    color: #ffffff !important;\n  }\n\n  /* Olive */\n  .ui.olive.table {\n    border-top: 0.2em solid #b5cc18;\n  }\n  .ui.inverted.olive.table {\n    background-color: #b5cc18 !important;\n    color: #ffffff !important;\n  }\n\n  /* Green */\n  .ui.green.table {\n    border-top: 0.2em solid #21ba45;\n  }\n  .ui.inverted.green.table {\n    background-color: #21ba45 !important;\n    color: #ffffff !important;\n  }\n\n  /* Teal */\n  .ui.teal.table {\n    border-top: 0.2em solid #00b5ad;\n  }\n  .ui.inverted.teal.table {\n    background-color: #00b5ad !important;\n    color: #ffffff !important;\n  }\n\n  /* Blue */\n  .ui.blue.table {\n    border-top: 0.2em solid #2185d0;\n  }\n  .ui.inverted.blue.table {\n    background-color: #2185d0 !important;\n    color: #ffffff !important;\n  }\n\n  /* Violet */\n  .ui.violet.table {\n    border-top: 0.2em solid #6435c9;\n  }\n  .ui.inverted.violet.table {\n    background-color: #6435c9 !important;\n    color: #ffffff !important;\n  }\n\n  /* Purple */\n  .ui.purple.table {\n    border-top: 0.2em solid #a333c8;\n  }\n  .ui.inverted.purple.table {\n    background-color: #a333c8 !important;\n    color: #ffffff !important;\n  }\n\n  /* Pink */\n  .ui.pink.table {\n    border-top: 0.2em solid #e03997;\n  }\n  .ui.inverted.pink.table {\n    background-color: #e03997 !important;\n    color: #ffffff !important;\n  }\n\n  /* Brown */\n  .ui.brown.table {\n    border-top: 0.2em solid #a5673f;\n  }\n  .ui.inverted.brown.table {\n    background-color: #a5673f !important;\n    color: #ffffff !important;\n  }\n\n  /* Grey */\n  .ui.grey.table {\n    border-top: 0.2em solid #767676;\n  }\n  .ui.inverted.grey.table {\n    background-color: #767676 !important;\n    color: #ffffff !important;\n  }\n\n  /* Black */\n  .ui.black.table {\n    border-top: 0.2em solid #1b1c1d;\n  }\n  .ui.inverted.black.table {\n    background-color: #1b1c1d !important;\n    color: #ffffff !important;\n  }\n\n  /*--------------\n    Column Count\n  ---------------*/\n\n  /* Grid Based */\n  .ui.one.column.table td {\n    width: 100%;\n  }\n  .ui.two.column.table td {\n    width: 50%;\n  }\n  .ui.three.column.table td {\n    width: 33.33333333%;\n  }\n  .ui.four.column.table td {\n    width: 25%;\n  }\n  .ui.five.column.table td {\n    width: 20%;\n  }\n  .ui.six.column.table td {\n    width: 16.66666667%;\n  }\n  .ui.seven.column.table td {\n    width: 14.28571429%;\n  }\n  .ui.eight.column.table td {\n    width: 12.5%;\n  }\n  .ui.nine.column.table td {\n    width: 11.11111111%;\n  }\n  .ui.ten.column.table td {\n    width: 10%;\n  }\n  .ui.eleven.column.table td {\n    width: 9.09090909%;\n  }\n  .ui.twelve.column.table td {\n    width: 8.33333333%;\n  }\n  .ui.thirteen.column.table td {\n    width: 7.69230769%;\n  }\n  .ui.fourteen.column.table td {\n    width: 7.14285714%;\n  }\n  .ui.fifteen.column.table td {\n    width: 6.66666667%;\n  }\n  .ui.sixteen.column.table td {\n    width: 6.25%;\n  }\n\n  /* Column Width */\n  .ui.table th.one.wide,\n  .ui.table td.one.wide {\n    width: 6.25%;\n  }\n  .ui.table th.two.wide,\n  .ui.table td.two.wide {\n    width: 12.5%;\n  }\n  .ui.table th.three.wide,\n  .ui.table td.three.wide {\n    width: 18.75%;\n  }\n  .ui.table th.four.wide,\n  .ui.table td.four.wide {\n    width: 25%;\n  }\n  .ui.table th.five.wide,\n  .ui.table td.five.wide {\n    width: 31.25%;\n  }\n  .ui.table th.six.wide,\n  .ui.table td.six.wide {\n    width: 37.5%;\n  }\n  .ui.table th.seven.wide,\n  .ui.table td.seven.wide {\n    width: 43.75%;\n  }\n  .ui.table th.eight.wide,\n  .ui.table td.eight.wide {\n    width: 50%;\n  }\n  .ui.table th.nine.wide,\n  .ui.table td.nine.wide {\n    width: 56.25%;\n  }\n  .ui.table th.ten.wide,\n  .ui.table td.ten.wide {\n    width: 62.5%;\n  }\n  .ui.table th.eleven.wide,\n  .ui.table td.eleven.wide {\n    width: 68.75%;\n  }\n  .ui.table th.twelve.wide,\n  .ui.table td.twelve.wide {\n    width: 75%;\n  }\n  .ui.table th.thirteen.wide,\n  .ui.table td.thirteen.wide {\n    width: 81.25%;\n  }\n  .ui.table th.fourteen.wide,\n  .ui.table td.fourteen.wide {\n    width: 87.5%;\n  }\n  .ui.table th.fifteen.wide,\n  .ui.table td.fifteen.wide {\n    width: 93.75%;\n  }\n  .ui.table th.sixteen.wide,\n  .ui.table td.sixteen.wide {\n    width: 100%;\n  }\n\n  /*--------------\n      Sortable\n  ---------------*/\n\n  .ui.sortable.table thead th {\n    cursor: pointer;\n    white-space: nowrap;\n    border-left: 1px solid rgba(34, 36, 38, 0.15);\n    color: rgba(0, 0, 0, 0.87);\n  }\n  .ui.sortable.table thead th:first-child {\n    border-left: none;\n  }\n  .ui.sortable.table thead th.sorted,\n  .ui.sortable.table thead th.sorted:hover {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  .ui.sortable.table thead th:after {\n    display: none;\n    font-style: normal;\n    font-weight: normal;\n    text-decoration: inherit;\n    content: '';\n    height: 1em;\n    width: auto;\n    opacity: 0.8;\n    margin: 0em 0em 0em 0.5em;\n    font-family: 'Icons';\n  }\n  .ui.sortable.table thead th.ascending:after {\n    content: '\\f0d8';\n  }\n  .ui.sortable.table thead th.descending:after {\n    content: '\\f0d7';\n  }\n\n  /* Hover */\n  .ui.sortable.table th.disabled:hover {\n    cursor: auto;\n    color: rgba(40, 40, 40, 0.3);\n  }\n  .ui.sortable.table thead th:hover {\n    background: rgba(0, 0, 0, 0.05);\n    color: rgba(0, 0, 0, 0.8);\n  }\n\n  /* Sorted */\n  .ui.sortable.table thead th.sorted {\n    background: rgba(0, 0, 0, 0.05);\n    color: rgba(0, 0, 0, 0.95);\n  }\n  .ui.sortable.table thead th.sorted:after {\n    display: inline-block;\n  }\n\n  /* Sorted Hover */\n  .ui.sortable.table thead th.sorted:hover {\n    background: rgba(0, 0, 0, 0.05);\n    color: rgba(0, 0, 0, 0.95);\n  }\n\n  /* Inverted */\n  .ui.inverted.sortable.table thead th.sorted {\n    background: rgba(255, 255, 255, 0.15) -webkit-gradient(linear, left top, left\n          bottom, from(transparent), to(rgba(0, 0, 0, 0.05)));\n    background: rgba(255, 255, 255, 0.15) -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n    background: rgba(255, 255, 255, 0.15)\n      linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n    color: #ffffff;\n  }\n  .ui.inverted.sortable.table thead th:hover {\n    background: rgba(255, 255, 255, 0.08) -webkit-gradient(linear, left top, left\n          bottom, from(transparent), to(rgba(0, 0, 0, 0.05)));\n    background: rgba(255, 255, 255, 0.08) -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n    background: rgba(255, 255, 255, 0.08)\n      linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n    color: #ffffff;\n  }\n  .ui.inverted.sortable.table thead th {\n    border-left-color: transparent;\n    border-right-color: transparent;\n  }\n\n  /*--------------\n      Inverted\n  ---------------*/\n\n  /* Text Color */\n  .ui.inverted.table {\n    background: #333333;\n    color: rgba(255, 255, 255, 0.9);\n    border: none;\n  }\n  .ui.inverted.table th {\n    background-color: rgba(0, 0, 0, 0.15);\n    border-color: rgba(255, 255, 255, 0.1) !important;\n    color: rgba(255, 255, 255, 0.9) !important;\n  }\n  .ui.inverted.table tr td {\n    border-color: rgba(255, 255, 255, 0.1) !important;\n  }\n  .ui.inverted.table tr.disabled td,\n  .ui.inverted.table tr td.disabled,\n  .ui.inverted.table tr.disabled:hover td,\n  .ui.inverted.table tr:hover td.disabled {\n    pointer-events: none;\n    color: rgba(225, 225, 225, 0.3);\n  }\n\n  /* Definition */\n  .ui.inverted.definition.table tfoot:not(.full-width) th:first-child,\n  .ui.inverted.definition.table thead:not(.full-width) th:first-child {\n    background: #ffffff;\n  }\n  .ui.inverted.definition.table tr td:first-child {\n    background: rgba(255, 255, 255, 0.02);\n    color: #ffffff;\n  }\n\n  /*--------------\n     Collapsing\n  ---------------*/\n\n  .ui.collapsing.table {\n    width: auto;\n  }\n\n  /*--------------\n        Basic\n  ---------------*/\n\n  .ui.basic.table {\n    background: transparent;\n    border: 1px solid rgba(34, 36, 38, 0.15);\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n  .ui.basic.table thead,\n  .ui.basic.table tfoot {\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n  .ui.basic.table th {\n    background: transparent;\n    border-left: none;\n  }\n  .ui.basic.table tbody tr {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  }\n  .ui.basic.table td {\n    background: transparent;\n  }\n  .ui.basic.striped.table tbody tr:nth-child(2n) {\n    background-color: rgba(0, 0, 0, 0.05) !important;\n  }\n\n  /* Very Basic */\n  .ui[class*='very basic'].table {\n    border: none;\n  }\n  .ui[class*='very basic'].table:not(.sortable):not(.striped) th,\n  .ui[class*='very basic'].table:not(.sortable):not(.striped) td {\n    padding: '';\n  }\n  .ui[class*='very basic'].table:not(.sortable):not(.striped) th:first-child,\n  .ui[class*='very basic'].table:not(.sortable):not(.striped) td:first-child {\n    padding-left: 0em;\n  }\n  .ui[class*='very basic'].table:not(.sortable):not(.striped) th:last-child,\n  .ui[class*='very basic'].table:not(.sortable):not(.striped) td:last-child {\n    padding-right: 0em;\n  }\n  .ui[class*='very basic'].table:not(.sortable):not(.striped)\n    thead\n    tr:first-child\n    th {\n    padding-top: 0em;\n  }\n\n  /*--------------\n       Celled\n  ---------------*/\n\n  .ui.celled.table tr th,\n  .ui.celled.table tr td {\n    border-left: 1px solid rgba(34, 36, 38, 0.1);\n  }\n  .ui.celled.table tr th:first-child,\n  .ui.celled.table tr td:first-child {\n    border-left: none;\n  }\n\n  /*--------------\n       Padded\n  ---------------*/\n\n  .ui.padded.table th {\n    padding-left: 1em;\n    padding-right: 1em;\n  }\n  .ui.padded.table th,\n  .ui.padded.table td {\n    padding: 1em 1em;\n  }\n\n  /* Very */\n  .ui[class*='very padded'].table th {\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n  }\n  .ui[class*='very padded'].table td {\n    padding: 1.5em 1.5em;\n  }\n\n  /*--------------\n       Compact\n  ---------------*/\n\n  .ui.compact.table th {\n    padding-left: 0.7em;\n    padding-right: 0.7em;\n  }\n  .ui.compact.table td {\n    padding: 0.5em 0.7em;\n  }\n\n  /* Very */\n  .ui[class*='very compact'].table th {\n    padding-left: 0.6em;\n    padding-right: 0.6em;\n  }\n  .ui[class*='very compact'].table td {\n    padding: 0.4em 0.6em;\n  }\n\n  /*--------------\n        Sizes\n  ---------------*/\n\n  /* Small */\n  .ui.small.table {\n    font-size: 0.9em;\n  }\n\n  /* Standard */\n  .ui.table {\n    font-size: 1em;\n  }\n\n  /* Large */\n  .ui.large.table {\n    font-size: 1.1em;\n  }\n\n  /*******************************\n           Site Overrides\n  *******************************/\n"])), function (props) {
  return props.hasMore || props.hasPagination ? '20px' : '0';
}, colors.brand10);

var _excluded$1 = ["children", "title", "titleStyle", "titleClassName", "message", "messageStyle", "messageClassName", "hasMore", "hasMoreText", "pagination"];

function TableComponent(_ref) {
  var children = _ref.children,
      title = _ref.title,
      titleStyle = _ref.titleStyle,
      titleClassName = _ref.titleClassName,
      message = _ref.message,
      messageStyle = _ref.messageStyle,
      messageClassName = _ref.messageClassName,
      hasMore = _ref.hasMore,
      hasMoreText = _ref.hasMoreText,
      pagination = _ref.pagination,
      rest = _objectWithoutPropertiesLoose$2(_ref, _excluded$1);

  return jsxRuntime.jsxs("div", {
    children: [title || message ? jsxRuntime.jsxs(Header, {
      children: [jsxRuntime.jsx(Title, Object.assign({
        style: titleStyle,
        className: titleClassName
      }, {
        children: title
      }), void 0), jsxRuntime.jsx(Message, Object.assign({
        style: messageStyle,
        className: messageClassName
      }, {
        children: message
      }), void 0)]
    }, void 0) : null, jsxRuntime.jsx(Container$1, Object.assign({
      hasMore: !!hasMore,
      hasPagination: !!pagination
    }, {
      children: jsxRuntime.jsx(semanticUiReact.Table, Object.assign({}, rest, {
        children: children
      }), void 0)
    }), void 0), hasMore ? jsxRuntime.jsx(Button$2, Object.assign({
      "data-testid": "hasmore-button",
      secondary: true,
      onClick: hasMore
    }, {
      children: hasMoreText || jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: ["ver lista ", jsxRuntime.jsx("b", {
          children: "completa"
        }, void 0)]
      }, void 0)
    }), void 0) : null, pagination ? jsxRuntime.jsxs("div", {
      children: [jsxRuntime.jsx("br", {}, void 0), pagination]
    }, void 0) : null]
  }, void 0);
}

var Table = TableComponent;
Table.Row = semanticUiReact.TableRow;
Table.Header = semanticUiReact.TableHeader;
Table.HeaderCell = semanticUiReact.TableHeaderCell;
Table.Body = semanticUiReact.TableBody;
Table.Cell = semanticUiReact.TableCell;
Table.Footer = semanticUiReact.TableFooter;

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
var Label = styled__default["default"].span(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  font-size: 14px;\n  color: ", ";\n  margin-left: 15px;\n"])), function (props) {
  if (props.errorMessage && props.errorColor) {
    return props.errorColor;
  }

  if (props.errorMessage) {
    return colors.danger20;
  }

  if (props.labelColor) {
    return props.labelColor;
  }

  return colors.brand10;
});
var Container = styled__default["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  width: ", ";\n  position: relative;\n\n  opacity: ", ";\n\n  textarea {\n    font-family: MontSerrat !important;\n    color: ", ";\n    resize: none;\n    width: ", ";\n\n    border-radius: 20px;\n    height: ", ";\n\n    margin: 0px;\n    outline: none;\n    padding: 20px;\n    border-color: ", ";\n\n    &::placeholder {\n      color: ", ";\n    }\n\n    -moz-appearance: none;\n    -webkit-appearance: none;\n  }\n\n  label {\n    position: absolute;\n    bottom: 0px;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    right: 100%;\n    pointer-events: none;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: ", ";\n\n    ", "\n  }\n\n  textarea::-webkit-scrollbar {\n    width: 7px;\n    border-radius: 50px;\n  }\n\n  textarea::-webkit-scrollbar-thumb {\n    background-color: ", ";\n    border-radius: 50px;\n  }\n\n  textarea::-webkit-scrollbar-thumb:hover {\n    background-color: ", ";\n  }\n"])), function (props) {
  return getMeasurement(props.width);
}, function (props) {
  return props.disabled ? '50%' : '100%';
}, function (props) {
  return props.textColor ? props.textColor : colors.gray20;
}, function (props) {
  return getMeasurement(props.width);
}, function (props) {
  return getMeasurement(props.height);
}, function (props) {
  if (props.errorMessage && props.errorColor) {
    return props.errorColor;
  }

  if (props.errorMessage) {
    return colors.danger20;
  }

  return colors.gray10;
}, colors.default10, function (props) {
  if (props.errorMessage && props.errorColor) {
    return props.errorColor;
  }

  if (props.errorMessage) {
    return colors.danger20;
  }

  return colors.gray10;
}, function (props) {
  return props.isFieldActive ? styled.css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n            color: ", ";\n          "])), colors.brand10) : styled.css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n            color: ", ";\n          "])), colors.gray20);
}, colors.brand10, colors.brandTransparent2);
var LabelError = styled__default["default"].span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  font-size: 10px;\n  margin-left: 0;\n  margin-top: -2px;\n  color: ", ";\n"])), function (props) {
  if (props.errorColor) {
    return props.errorColor;
  }

  return colors.danger20;
});
var Footer = styled__default["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  font-family: MontSerrat !important;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: 10px;\n"])));
var LabelLengthInfo = styled__default["default"].span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  font-size: 10px;\n  color: ", ";\n"])), colors.gray10);

var _excluded = ["label", "labelClassName", "labelStyle", "labelColor", "errorClassName", "errorStyle", "errorMessage", "errorColor", "containerStyle", "containerClassName", "textColor", "width", "height", "lengthInfo", "lengthInfoClassName", "lengthInfoStyle"];

function TextArea(_ref, ref) {
  var label = _ref.label,
      labelClassName = _ref.labelClassName,
      labelStyle = _ref.labelStyle,
      labelColor = _ref.labelColor,
      errorClassName = _ref.errorClassName,
      errorStyle = _ref.errorStyle,
      errorMessage = _ref.errorMessage,
      errorColor = _ref.errorColor,
      containerStyle = _ref.containerStyle,
      containerClassName = _ref.containerClassName,
      textColor = _ref.textColor,
      width = _ref.width,
      height = _ref.height,
      lengthInfo = _ref.lengthInfo,
      lengthInfoClassName = _ref.lengthInfoClassName,
      lengthInfoStyle = _ref.lengthInfoStyle,
      rest = _objectWithoutPropertiesLoose$2(_ref, _excluded);

  return jsxRuntime.jsxs("div", {
    children: [label && jsxRuntime.jsx(Label, Object.assign({
      style: labelStyle,
      errorMessage: errorMessage,
      labelColor: labelColor,
      className: labelClassName,
      errorColor: errorColor
    }, {
      children: label
    }), void 0), jsxRuntime.jsx(Container, Object.assign({
      errorMessage: errorMessage,
      errorColor: errorColor,
      style: containerStyle,
      className: containerClassName,
      disabled: rest.disabled,
      textColor: textColor,
      width: width,
      height: height
    }, {
      children: jsxRuntime.jsx("textarea", Object.assign({}, rest, {
        ref: ref
      }), void 0)
    }), void 0), jsxRuntime.jsxs(Footer, {
      children: [jsxRuntime.jsx(LabelError, Object.assign({
        className: errorClassName,
        style: errorStyle,
        errorColor: errorColor
      }, {
        children: errorMessage
      }), void 0), (lengthInfo || typeof lengthInfo == 'number') && rest.maxLength ? jsxRuntime.jsx(LabelLengthInfo, Object.assign({
        className: lengthInfoClassName,
        style: lengthInfoStyle
      }, {
        children: (typeof lengthInfo == 'number' ? lengthInfo : typeof rest.value == 'string' ? rest.value.length : 0) + "/" + rest.maxLength + " caracteres"
      }), void 0) : null]
    }, void 0)]
  }, void 0);
}

var TextArea$1 = require$$0.forwardRef(TextArea);

exports.Accordion = Accordion;
exports.Button = Button$2;
exports.ButtonMain = Button$2;
exports.Calendar = Calendar;
exports.Card = Card;
exports.Checkbox = Checkbox$1;
exports.Dialog = DialogComponent;
exports.Dropdown = Dropdown;
exports.Input = Input$1;
exports.InputLine = Input$1;
exports.Loader = Loader;
exports.Modal = ModalComponent;
exports.MoreLess = MoreLess;
exports.Pagination = Pagination;
exports.Radio = Radio$1;
exports.Selection = Selection;
exports.Table = Table;
exports.TextArea = TextArea$1;
//# sourceMappingURL=index.js.map
