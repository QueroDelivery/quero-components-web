import React$2, { useState, useEffect } from 'react';
import styled, { css as css$1 } from 'styled-components';
import DatePicker from 'react-datepicker';
import reactDom from 'react-dom';

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

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

/*!
 * Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com
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
      _defineProperty(target, key, source[key]);
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
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var PRODUCTION = function () {
  try {
    return process.env.NODE_ENV === 'production';
  } catch (e) {
    return false;
  }
}();
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

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

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
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
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
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
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
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
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
};
var QUESTION = {
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
};
var EXCLAMATION = {
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
};
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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
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
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w$1=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w$1||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

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

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
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
      if (has(typeSpecs, typeSpecName)) {
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
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
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

          printWarning(
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

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
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
        if (has$1(propValue, key)) {
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

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
        _defineProperty$1(target, key, source[key]);
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

function _objectWithoutPropertiesLoose$1(source, excluded) {
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

  var target = _objectWithoutPropertiesLoose$1(source, excluded);

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
  }, _defineProperty$1(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty$1(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty$1(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty$1(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
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

var PRODUCTION$1 = false;

try {
  PRODUCTION$1 = process.env.NODE_ENV === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION$1 && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

// Normalize icon arguments
function normalizeIconArgs(icon) {
  // if the icon is null, there's nothing to do
  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (_typeof(icon) === 'object' && icon.prefix && icon.iconName) {
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
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty$1({}, key, value) : {};
}

function FontAwesomeIcon(_ref) {
  var forwardedRef = _ref.forwardedRef,
      props = _objectWithoutProperties(_ref, ["forwardedRef"]);

  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? parse.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = icon(iconLookup, _objectSpread2({}, classes, {}, transform, {}, mask, {
    symbol: symbol,
    title: title
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
var convertCurry = convert.bind(null, React$2.createElement);

/*!
 * Font Awesome Pro 5.15.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */
var faAngleDown = {
  prefix: 'fas',
  iconName: 'angle-down',
  icon: [320, 512, [], "f107", "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"]
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

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n    background-color: ", ";\n    width: 20px;\n    height: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    color: ", ";\n    font-size: 10px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n    background-color: ", ";\n    height: 40px;\n    width: 100%;\n    border-radius: 30px;\n    cursor: pointer;\n    border: 1px solid ", ";\n    outline: none;\n\n    &:disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n        pointer-events: none;\n    }\n\n    &:hover {\n        background-color: ", ";\n    }\n\n    span {\n        color: ", ";\n        margin-left: 20px;\n        font-weight: bold;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n    color: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n    color: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    background-color: ", ";\n    height: ", ";\n    width: ", ";\n    border-radius: 30px;\n    cursor: pointer;\n    border: ", ";\n    outline: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: ", ";\n\n    &:disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n        pointer-events: none;\n    }\n\n    &:hover {\n        background-color: ", ";\n\n        span {\n            color: ", ";\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Sizes = {
  mini: 'mini',
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  big: 'big',
  huge: 'huge',
  massive: 'massive'
};

var size = function size(_size) {
  switch (_size) {
    case Sizes.mini:
      return '25px';

    case Sizes.tiny:
      return '30px';

    case Sizes.small:
      return '35px';

    case Sizes.medium:
      return '40px';

    case Sizes.large:
      return '45px';

    case Sizes.big:
      return '50px';

    case Sizes.huge:
      return '55px';

    case Sizes.massive:
      return '60px';

    default:
      return _size;
  }
};

var textSize = function textSize(size) {
  switch (size) {
    case Sizes.mini:
      return '10px';

    case Sizes.tiny:
      return '11px';

    case Sizes.small:
      return '12px';

    case Sizes.medium:
      return '14px';

    case Sizes.large:
      return '16px';

    case Sizes.big:
      return '18px';

    case Sizes.huge:
      return '20px';

    case Sizes.massive:
      return '22px';

    default:
      return size;
  }
};

var Button = styled.button(_templateObject(), function (props) {
  if (props.secundary || props.tertiary) {
    return colors.white;
  }

  if (props.noBorder) {
    return 'transparent';
  }

  return colors.brand30;
}, function (props) {
  return props.size ? size(props.size) : '40px';
}, function (props) {
  return props.width ? props.width + "%" : props.icon || props.tertiary ? '' : '100%';
}, function (props) {
  if (props.secundary) {
    return "1px solid " + colors.brand10;
  }

  if (props.tertiary) {
    return "1px solid " + colors.gray10;
  }

  return 'none';
}, function (props) {
  return props.icon || props.tertiary ? '0 15px' : '';
}, function (props) {
  if (props.secundary) {
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
  if (props.secundary) {
    return colors.brand10;
  }

  if (props.backPurple) {
    return colors.white;
  }

  if (props.noBorder) {
    if (props.colorText) {
      return props.colorText;
    } else {
      return colors.brand10;
    }
  }

  if (props.tertiary) {
    return colors.gray20;
  }

  return colors.brand30;
});
var TextFirst = styled.span(_templateObject2(), function (props) {
  if (props.colorText) {
    return props.colorText;
  }

  if (props.tertiary) {
    return colors.gray20;
  }

  return colors.brand10;
}, function (props) {
  if (props.firstStrong || props.strong) {
    return 'bold';
  }

  return 'normal';
}, function (props) {
  return props.size ? textSize(props.size) : '14px';
});
var TextEnd = styled.span(_templateObject3(), function (props) {
  if (props.colorText) {
    return props.colorText;
  }

  if (props.tertiary) {
    return colors.gray20;
  }

  return colors.brand10;
}, function (props) {
  if (props.firstStrong || props.notStrong) {
    return 'normal';
  }

  return 'bold';
}, function (props) {
  return props.size ? textSize(props.size) : '14px';
});
var Notification = styled.button(_templateObject4(), colors.brand10, colors.brand30, colors.brandTransparent2, colors.brand30);
var Icon = styled.div(_templateObject5());
var Amount = styled.div(_templateObject6(), colors.brand30, colors.brand10);

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n    border-width: ", ";\n    border-style: solid;\n    border-color: ", ";\n    border-top-width: ", ";\n    border-top-style: solid;\n    border-top-color: ", ";\n\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    animation: spin 0.6s linear infinite;\n\n    @keyframes spin {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n    width: 100%;\n    display: flex;\n    justify-content: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Sizes$1 = {
  mini: 'mini',
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  big: 'big',
  huge: 'huge',
  massive: 'massive'
};

var widthLoader = function widthLoader(size) {
  switch (size) {
    case Sizes$1.mini:
      return '1em';

    case Sizes$1.tiny:
      return '1.5em';

    case Sizes$1.small:
      return '2em';

    case Sizes$1.medium:
      return '2.5em';

    case Sizes$1.large:
      return '3em';

    case Sizes$1.big:
      return '3.5em';

    case Sizes$1.huge:
      return '4em';

    case Sizes$1.massive:
      return '4.5em';

    default:
      return size;
  }
};

var widthBorder = function widthBorder(size) {
  switch (size) {
    case Sizes$1.mini:
      return '2px';

    case Sizes$1.tiny:
      return '2.5px';

    case Sizes$1.small:
      return '3px';

    case Sizes$1.medium:
      return '3.5px';

    case Sizes$1.large:
      return '4px';

    case Sizes$1.big:
      return '4.5px';

    case Sizes$1.huge:
      return '5px';

    case Sizes$1.massive:
      return '5.5px';

    default:
      return size;
  }
};

var Container = styled.div(_templateObject$1(), function (props) {
  return props.position === 'left' ? 'flex-end' : props.position === 'right' ? 'flex-end' : 'center';
});
var Load = styled.div(_templateObject2$1(), function (props) {
  if (props.size) {
    return widthBorder(props.size);
  }

  return '3.5px';
}, colors.default20, function (props) {
  if (props.size) {
    return widthBorder(props.size);
  }

  return '3.5px';
}, function (props) {
  if (props.color) {
    return props.color;
  }

  return colors.brand10;
}, function (props) {
  if (props.size) {
    return widthLoader(props.size);
  }

  return '2.5em';
}, function (props) {
  if (props.size) {
    if (props.size) {
      return widthLoader(props.size);
    }
  }

  return '2.5em';
});

var Loader = function Loader(_ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      style = _ref.style,
      position = _ref.position;
  return React$2.createElement(Container, {
    position: position
  }, React$2.createElement(Load, {
    color: color,
    size: size,
    style: style,
    className: className
  }));
};

var ButtonMain = function ButtonMain(_ref) {
  var textFirst = _ref.textFirst,
      textEnd = _ref.textEnd,
      firstStrong = _ref.firstStrong,
      notStrong = _ref.notStrong,
      strong = _ref.strong,
      loading = _ref.loading,
      secundary = _ref.secundary,
      backPurple = _ref.backPurple,
      children = _ref.children,
      notification = _ref.notification,
      amount = _ref.amount,
      height = _ref.height,
      width = _ref.width,
      icon = _ref.icon,
      colorIcon = _ref.colorIcon,
      noBorder = _ref.noBorder,
      colorText = _ref.colorText,
      tertiary = _ref.tertiary,
      size = _ref.size,
      rest = _objectWithoutPropertiesLoose(_ref, ["textFirst", "textEnd", "firstStrong", "notStrong", "strong", "loading", "secundary", "backPurple", "children", "notification", "amount", "height", "width", "icon", "colorIcon", "noBorder", "colorText", "tertiary", "size"]);

  if (notification) {
    return React$2.createElement(Notification, Object.assign({}, rest), loading ? React$2.createElement(Loader, {
      size: "tiny"
    }) : children ? children : React$2.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50%',
        padding: 10
      }
    }, React$2.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, React$2.createElement(Icon, null, React$2.createElement(FontAwesomeIcon, {
      icon: faBell,
      size: "lg",
      color: colors.brand30
    })), React$2.createElement("span", null, "notifica\xE7\xF5es")), React$2.createElement(Amount, null, amount)));
  } else {
    return React$2.createElement(Button, Object.assign({}, rest, {
      secundary: secundary,
      backPurple: backPurple,
      height: height,
      width: width,
      icon: icon,
      noBorder: noBorder,
      colorText: colorText,
      tertiary: tertiary,
      size: size
    }), loading ? React$2.createElement(Loader, {
      size: "tiny"
    }) : children ? children : React$2.createElement("div", null, React$2.createElement(TextFirst, {
      firstStrong: firstStrong,
      strong: strong,
      notStrong: notStrong,
      colorText: colorText,
      tertiary: tertiary,
      size: size
    }, textFirst + " "), React$2.createElement(TextEnd, {
      firstStrong: firstStrong,
      strong: strong,
      notStrong: notStrong,
      colorText: colorText,
      tertiary: tertiary,
      size: size
    }, textEnd), icon && React$2.createElement(React$2.Fragment, null, React$2.createElement(FontAwesomeIcon, {
      icon: icon,
      color: colorIcon ? colorIcon : colors.brand10,
      size: 'lg',
      style: {
        marginLeft: 10
      }
    }))));
  }
};

function _templateObject6$1() {
  var data = _taggedTemplateLiteralLoose(["\n                  transition: bottom 0.25s ease;\n                  bottom: -100%;\n              "]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteralLoose(["\n                  transition: bottom 0.25s ease;\n                  width: 80%;\n                  background: ", ";\n                  border-top-left-radius: 30px;\n                  border-top-right-radius: 30px;\n                  left: 0;\n                  right: 0;\n                  bottom: 0;\n                  position: fixed;\n                  margin: auto;\n                  padding: 20px;\n\n                  .loading-dialog {\n                      display: flex;\n                      justify-content: center;\n                      align-items: center;\n                      background-color: rgba(255, 255, 255, 0.8);\n                      width: 100%;\n                      height: 100%;\n                      top: 0;\n                      left: 0;\n                      right: 0;\n                      bottom: 0;\n                      border-radius: 30px;\n                      z-index: 2;\n                      position: absolute;\n                  }\n              "]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteralLoose(["\n    ", "\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n                  opacity: 1;\n                  visibility: hidden;\n              "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n                  opacity: 1;\n                  visibility: visible;\n                  position: fixed;\n                  top: 0;\n                  right: 0;\n                  bottom: 0;\n                  left: 0;\n                  background: rgba(0, 0, 0, 0.5);\n                  transition: opacity 0.25s ease;\n                  overflow: auto;\n                  display: flex;\n                  z-index: 999;\n              "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n    ", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Background = styled.div(_templateObject$2(), function (props) {
  return props.open ? css$1(_templateObject2$2()) : css$1(_templateObject3$1());
});
var Dialog = styled.div(_templateObject4$1(), function (props) {
  return props.open ? css$1(_templateObject5$1(), colors.white) : css$1(_templateObject6$1());
});

var DialogComponent = function DialogComponent(_ref) {
  var open = _ref.open,
      children = _ref.children,
      onClose = _ref.onClose,
      loading = _ref.loading;
  return React$2.createElement(Background, {
    open: open,
    onClick: function onClick() {
      return onClose();
    }
  }, React$2.createElement(Dialog, {
    open: open,
    onClick: function onClick(event) {
      return event.stopPropagation();
    }
  }, loading && React$2.createElement("div", {
    className: "loading-dialog"
  }, React$2.createElement(Loader, null)), children));
};

function _templateObject6$2() {
  var data = _taggedTemplateLiteralLoose(["\n    font-size: 10px;\n    margin-left: 0;\n    color: ", ";\n"]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteralLoose(["\n                      font-size: 14px;\n                      color: ", ";\n                  "]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteralLoose(["\n                      transform: translateY(-100%);\n                      font-size: 12px;\n                      color: ", ";\n                  "]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteralLoose(["\n                      color: ", ";\n                  "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["\n                      color: ", ";\n                  "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n    width: ", ";\n    position: relative;\n\n    opacity: ", ";\n\n    input {\n        color: ", ";\n        width: 100%;\n        height: 100%;\n        padding-top: 20px;\n        padding-left: ", ";\n        padding-bottom: 5px;\n        padding-right: ", ";\n        border: none;\n        outline: none;\n        background-color: transparent;\n\n        &::placeholder {\n            color: ", ";\n        }\n    }\n\n    input:disabled {\n        background-color: transparent;\n    }\n\n    label {\n        position: absolute;\n        bottom: 0px;\n        top: 0px;\n        left: 0px;\n        width: 100%;\n        right: 100%;\n        pointer-events: none;\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: ", ";\n\n        ", "\n    }\n\n    span {\n        position: absolute;\n        bottom: 5px;\n        left: ", ";\n        transition: all 0.3s ease;\n\n        ", "\n    }\n\n    .icon {\n        position: absolute;\n        bottom: 0;\n        padding: 5px 10px;\n        ", "\n    }\n\n    .icon-action {\n        position: absolute;\n        bottom: 0;\n        padding: 5px 10px;\n        ", "\n        cursor: pointer;\n    }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Container$1 = styled.div(_templateObject$3(), function (props) {
  return props.width ? props.width : '100%';
}, function (props) {
  return props.disabled ? '50%' : '100%';
}, function (props) {
  return props.textColor ? props.textColor : colors.gray20;
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
  if ((props.requiredText || props.errorMessage) && props.errorColor) {
    return props.errorColor;
  }

  if (props.requiredText || props.errorMessage) {
    return colors.danger20;
  }

  return colors.gray10;
}, function (props) {
  return props.isFieldActive ? css$1(_templateObject2$3(), colors.brand10) : css$1(_templateObject3$2(), colors.gray20);
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
  return props.isFieldActive ? css$1(_templateObject4$2(), function (props) {
    if ((props.requiredText || props.errorMessage) && props.errorColor) {
      return props.errorColor;
    }

    if (props.requiredText || props.errorMessage) {
      return colors.danger20;
    }

    return colors.brand10;
  }) : css$1(_templateObject5$2(), function (props) {
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
var LabelError = styled.span(_templateObject6$2(), function (props) {
  if (props.errorColor) {
    return props.errorColor;
  }

  return colors.danger20;
});

var InputLine = function InputLine(_ref) {
  var containerStyle = _ref.containerStyle,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
      errorMessage = _ref.errorMessage,
      width = _ref.width,
      textColor = _ref.textColor,
      inputRef = _ref.inputRef,
      name = _ref.name,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      iconColor = _ref.iconColor,
      action = _ref.action,
      rest = _objectWithoutPropertiesLoose(_ref, ["containerStyle", "label", "labelStyle", "errorMessage", "width", "textColor", "inputRef", "name", "icon", "iconPosition", "iconColor", "action"]);

  var _useState = useState(false),
      isFieldActive = _useState[0],
      setIsFieldActive = _useState[1];

  useEffect(function () {
    if (rest.value) {
      if (!isFieldActive) {
        setIsFieldActive(true);
      }
    }
  }, [rest.value]);

  var handleFocus = function handleFocus() {
    if (!isFieldActive) {
      setIsFieldActive(true);
    }
  };

  var handleBlur = function handleBlur() {
    if (isFieldActive && !rest.value) {
      setIsFieldActive(false);
    }
  };

  return React$2.createElement("div", {
    style: {
      paddingBottom: errorMessage ? 0 : 20
    }
  }, React$2.createElement(Container$1, {
    isFieldActive: isFieldActive,
    errorMessage: errorMessage,
    containerStyle: containerStyle,
    width: width,
    disabled: rest.disabled ? rest.disabled : undefined,
    style: containerStyle,
    textColor: textColor,
    icon: icon ? true : false,
    iconPosition: iconPosition,
    action: action,
    actionPosition: action === null || action === void 0 ? void 0 : action.position
  }, icon && React$2.createElement("div", {
    className: "icon"
  }, React$2.createElement(FontAwesomeIcon, {
    icon: icon,
    color: iconColor || colors.brand10
  })), action && React$2.createElement("div", {
    className: "icon-action",
    onClick: action.onClick
  }, React$2.createElement(FontAwesomeIcon, {
    icon: action.icon,
    color: action.iconColor || colors.brand10
  })), React$2.createElement("input", Object.assign({}, rest, {
    onFocus: handleFocus,
    onBlur: handleBlur,
    name: name,
    placeholder: isFieldActive ? rest.placeholder : '',
    ref: inputRef
  })), React$2.createElement("label", {
    style: labelStyle
  }, React$2.createElement("span", null, label))), errorMessage ? React$2.createElement(LabelError, null, errorMessage) : null);
};

var InputLineForm = function InputLineForm(_ref) {
  var _rest$action;

  var register = _ref.register,
      errors = _ref.errors,
      validate = _ref.validate,
      name = _ref.name,
      required = _ref.required,
      values = _ref.values,
      limit = _ref.limit,
      minimum = _ref.minimum,
      rest = _objectWithoutPropertiesLoose(_ref, ["register", "errors", "validate", "name", "required", "values", "limit", "minimum"]);

  var _useState = useState(false),
      isFieldActive = _useState[0],
      setIsFieldActive = _useState[1];

  var _useState2 = useState(''),
      message = _useState2[0],
      setMessage = _useState2[1];

  var value = values ? values(name) || rest.defaultValue : rest.value;
  useEffect(function () {
    if (value) {
      if (!isFieldActive) {
        setIsFieldActive(true);
      }
    }
  }, [value]);

  var handleFocus = function handleFocus() {
    if (!isFieldActive) {
      setIsFieldActive(true);
    }
  };

  var handleBlur = function handleBlur() {
    if (isFieldActive && !value) {
      setIsFieldActive(false);
    }
  };

  return React$2.createElement("div", {
    style: {
      paddingBottom: message || errors ? 0 : 20
    }
  }, React$2.createElement(Container$1, {
    isFieldActive: isFieldActive,
    requiredText: errors && errors.type === 'required' ? true : false,
    errorMessage: errors,
    containerStyle: rest.containerStyle,
    width: rest.width,
    disabled: rest.disabled,
    style: rest.containerStyle,
    textColor: rest.textColor,
    icon: rest.icon ? true : false,
    iconPosition: rest.iconPosition,
    action: rest.action,
    actionPosition: (_rest$action = rest.action) === null || _rest$action === void 0 ? void 0 : _rest$action.position
  }, rest.icon && React$2.createElement("div", {
    className: "icon"
  }, React$2.createElement(FontAwesomeIcon, {
    icon: rest.icon,
    color: rest.iconColor || colors.brand10
  })), rest.action && React$2.createElement("div", {
    className: "icon-action",
    onClick: rest.action.onClick
  }, React$2.createElement(FontAwesomeIcon, {
    icon: rest.action.icon,
    color: rest.action.iconColor || colors.brand10
  })), React$2.createElement("input", Object.assign({}, rest, {
    onFocus: handleFocus,
    onBlur: handleBlur,
    name: name,
    placeholder: isFieldActive ? rest.placeholder : '',
    ref: register ? register({
      required: required,
      validate: validate && required ? function (value) {
        if (validate(value)) {
          setMessage(validate(value));
          return false;
        } else {
          setMessage('');
          return true;
        }
      } : limit && required ? function (value) {
        if (value.length > limit) {
          setMessage(limit + " caracteres permitidos.");
          return false;
        } else {
          setMessage('');
          return true;
        }
      } : minimum && required ? function (value) {
        if (value.length < minimum) {
          setMessage(name + " deve ter " + minimum + " ou mais caracteres.");
          return false;
        } else {
          setMessage('');
          return true;
        }
      } : null
    }) : null
  })), React$2.createElement("label", {
    style: rest.labelStyle
  }, React$2.createElement("span", null, rest.label))), errors ? React$2.createElement(LabelError, null, errors.type === 'required' ? 'Obrigatório' : "" + message) : null);
};

/**
 * react-number-format - 4.4.1
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2020 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-number-format
 */

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1$1 = ReactPropTypesSecret$2;

function emptyFunction$1() {}
function emptyFunctionWithReset$1() {}
emptyFunctionWithReset$1.resetWarningCache = emptyFunction$1;

var factoryWithThrowingShims$1 = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1$1) {
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

    checkPropTypes: emptyFunctionWithReset$1,
    resetWarningCache: emptyFunction$1
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes$1 = createCommonjsModule$1(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims$1();
}
});

// basic noop function
function noop$1() {}
function returnTrue() {
  return true;
}
function charIsNumber(_char) {
  return !!(_char || '').match(/\d/);
}
function escapeRegExp(str) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function getThousandsGroupRegex(thousandsGroupStyle) {
  switch (thousandsGroupStyle) {
    case 'lakh':
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;

    case 'wan':
      return /(\d)(?=(\d{4})+(?!\d))/g;

    case 'thousand':
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}
function applyThousandSeparator(str, thousandSeparator, thousandsGroupStyle) {
  var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
  var index = str.search(/[1-9]/);
  index = index === -1 ? str.length : index;
  return str.substring(0, index) + str.substring(index, str.length).replace(thousandsGroupRegex, '$1' + thousandSeparator);
} //spilt a float number into different parts beforeDecimal, afterDecimal, and negation

function splitDecimal(numStr) {
  var allowNegative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var hasNagation = numStr[0] === '-';
  var addNegation = hasNagation && allowNegative;
  numStr = numStr.replace('-', '');
  var parts = numStr.split('.');
  var beforeDecimal = parts[0];
  var afterDecimal = parts[1] || '';
  return {
    beforeDecimal: beforeDecimal,
    afterDecimal: afterDecimal,
    hasNagation: hasNagation,
    addNegation: addNegation
  };
}
function fixLeadingZero(numStr) {
  if (!numStr) return numStr;
  var isNegative = numStr[0] === '-';
  if (isNegative) numStr = numStr.substring(1, numStr.length);
  var parts = numStr.split('.');
  var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
  var afterDecimal = parts[1] || '';
  return "".concat(isNegative ? '-' : '').concat(beforeDecimal).concat(afterDecimal ? ".".concat(afterDecimal) : '');
}
/**
 * limit decimal numbers to given scale
 * Not used .fixedTo because that will break with big numbers
 */

function limitToScale(numStr, scale, fixedDecimalScale) {
  var str = '';
  var filler = fixedDecimalScale ? '0' : '';

  for (var i = 0; i <= scale - 1; i++) {
    str += numStr[i] || filler;
  }

  return str;
}
/**
 * This method is required to round prop value to given scale.
 * Not used .round or .fixedTo because that will break with big numbers
 */

function roundToPrecision(numStr, scale, fixedDecimalScale) {
  //if number is empty don't do anything return empty string
  if (['', '-'].indexOf(numStr) !== -1) return numStr;
  var shoudHaveDecimalSeparator = numStr.indexOf('.') !== -1 && scale;

  var _splitDecimal = splitDecimal(numStr),
      beforeDecimal = _splitDecimal.beforeDecimal,
      afterDecimal = _splitDecimal.afterDecimal,
      hasNagation = _splitDecimal.hasNagation;

  var roundedDecimalParts = parseFloat("0.".concat(afterDecimal || '0')).toFixed(scale).split('.');
  var intPart = beforeDecimal.split('').reverse().reduce(function (roundedStr, current, idx) {
    if (roundedStr.length > idx) {
      return (Number(roundedStr[0]) + Number(current)).toString() + roundedStr.substring(1, roundedStr.length);
    }

    return current + roundedStr;
  }, roundedDecimalParts[0]);
  var decimalPart = limitToScale(roundedDecimalParts[1] || '', Math.min(scale, afterDecimal.length), fixedDecimalScale);
  var negation = hasNagation ? '-' : '';
  var decimalSeparator = shoudHaveDecimalSeparator ? '.' : '';
  return "".concat(negation).concat(intPart).concat(decimalSeparator).concat(decimalPart);
}
function omit(obj, keyMaps) {
  var filteredObj = {};
  Object.keys(obj).forEach(function (key) {
    if (!keyMaps[key]) filteredObj[key] = obj[key];
  });
  return filteredObj;
}
/** set the caret positon in an input field **/

function setCaretPosition(el, caretPos) {
  el.value = el.value; // ^ this is used to not only get "focus", but
  // to make sure we don't have it everything -selected-
  // (it causes an issue in chrome, and having it doesn't hurt any other browser)

  if (el !== null) {
    if (el.createTextRange) {
      var range = el.createTextRange();
      range.move('character', caretPos);
      range.select();
      return true;
    } // (el.selectionStart === 0 added for Firefox bug)


    if (el.selectionStart || el.selectionStart === 0) {
      el.focus();
      el.setSelectionRange(caretPos, caretPos);
      return true;
    } // fail city, fortunately this never happens (as far as I've tested) :)


    el.focus();
    return false;
  }
}
/**
  Given previous value and newValue it returns the index
  start - end to which values have changed.
  This function makes assumption about only consecutive
  characters are changed which is correct assumption for caret input.
*/

function findChangedIndex(prevValue, newValue) {
  var i = 0,
      j = 0;
  var prevLength = prevValue.length;
  var newLength = newValue.length;

  while (prevValue[i] === newValue[i] && i < prevLength) {
    i++;
  } //check what has been changed from last


  while (prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] && newLength - j > i && prevLength - j > i) {
    j++;
  }

  return {
    start: i,
    end: prevLength - j
  };
}
/*
  Returns a number whose value is limited to the given range
*/

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function getCurrentCaretPosition(el) {
  /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
  return Math.max(el.selectionStart, el.selectionEnd);
}

var propTypes$1$1 = {
  thousandSeparator: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.oneOf([true])]),
  decimalSeparator: propTypes$1.string,
  allowedDecimalSeparators: propTypes$1.arrayOf(propTypes$1.string),
  thousandsGroupStyle: propTypes$1.oneOf(['thousand', 'lakh', 'wan']),
  decimalScale: propTypes$1.number,
  fixedDecimalScale: propTypes$1.bool,
  displayType: propTypes$1.oneOf(['input', 'text']),
  prefix: propTypes$1.string,
  suffix: propTypes$1.string,
  format: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.func]),
  removeFormatting: propTypes$1.func,
  mask: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.arrayOf(propTypes$1.string)]),
  value: propTypes$1.oneOfType([propTypes$1.number, propTypes$1.string]),
  defaultValue: propTypes$1.oneOfType([propTypes$1.number, propTypes$1.string]),
  isNumericString: propTypes$1.bool,
  customInput: propTypes$1.elementType,
  allowNegative: propTypes$1.bool,
  allowEmptyFormatting: propTypes$1.bool,
  allowLeadingZeros: propTypes$1.bool,
  onValueChange: propTypes$1.func,
  onKeyDown: propTypes$1.func,
  onMouseUp: propTypes$1.func,
  onChange: propTypes$1.func,
  onFocus: propTypes$1.func,
  onBlur: propTypes$1.func,
  type: propTypes$1.oneOf(['text', 'tel', 'password']),
  isAllowed: propTypes$1.func,
  renderText: propTypes$1.func,
  getInputRef: propTypes$1.oneOfType([propTypes$1.func, // for legacy refs
  propTypes$1.shape({
    current: propTypes$1.any
  })])
};
var defaultProps = {
  displayType: 'input',
  decimalSeparator: '.',
  thousandsGroupStyle: 'thousand',
  fixedDecimalScale: false,
  prefix: '',
  suffix: '',
  allowNegative: true,
  allowEmptyFormatting: false,
  allowLeadingZeros: false,
  isNumericString: false,
  type: 'text',
  onValueChange: noop$1,
  onChange: noop$1,
  onKeyDown: noop$1,
  onMouseUp: noop$1,
  onFocus: noop$1,
  onBlur: noop$1,
  isAllowed: returnTrue
};

var NumberFormat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NumberFormat, _React$Component);

  function NumberFormat(props) {
    var _this;

    _classCallCheck$1(this, NumberFormat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberFormat).call(this, props));
    var defaultValue = props.defaultValue; //validate props

    _this.validateProps();

    var formattedValue = _this.formatValueProp(defaultValue);

    _this.state = {
      value: formattedValue,
      numAsString: _this.removeFormatting(formattedValue)
    };
    _this.selectionBeforeInput = {
      selectionStart: 0,
      selectionEnd: 0
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass$1(NumberFormat, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.updateValueIfRequired(prevProps);
    }
  }, {
    key: "updateValueIfRequired",
    value: function updateValueIfRequired(prevProps) {
      var props = this.props,
          state = this.state,
          focusedElm = this.focusedElm;
      var stateValue = state.value,
          _state$numAsString = state.numAsString,
          lastNumStr = _state$numAsString === void 0 ? '' : _state$numAsString; // If only state changed no need to do any thing

      if (prevProps !== props) {
        //validate props
        this.validateProps();
        var lastValueWithNewFormat = this.formatNumString(lastNumStr);
        var formattedValue = props.value === undefined ? lastValueWithNewFormat : this.formatValueProp();
        var numAsString = this.removeFormatting(formattedValue);
        var floatValue = parseFloat(numAsString);
        var lastFloatValue = parseFloat(lastNumStr);

        if ( //while typing set state only when float value changes
        (!isNaN(floatValue) || !isNaN(lastFloatValue)) && floatValue !== lastFloatValue || //can also set state when float value is same and the format props changes
        lastValueWithNewFormat !== stateValue || //set state always when not in focus and formatted value is changed
        focusedElm === null && formattedValue !== stateValue) {
          this.updateValue({
            formattedValue: formattedValue,
            numAsString: numAsString,
            input: focusedElm
          });
        }
      }
    }
    /** Misc methods **/

  }, {
    key: "getFloatString",
    value: function getFloatString() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var decimalScale = this.props.decimalScale;

      var _this$getSeparators = this.getSeparators(),
          decimalSeparator = _this$getSeparators.decimalSeparator;

      var numRegex = this.getNumberRegex(true); //remove negation for regex check

      var hasNegation = num[0] === '-';
      if (hasNegation) num = num.replace('-', ''); //if decimal scale is zero remove decimal and number after decimalSeparator

      if (decimalSeparator && decimalScale === 0) {
        num = num.split(decimalSeparator)[0];
      }

      num = (num.match(numRegex) || []).join('').replace(decimalSeparator, '.'); //remove extra decimals

      var firstDecimalIndex = num.indexOf('.');

      if (firstDecimalIndex !== -1) {
        num = "".concat(num.substring(0, firstDecimalIndex), ".").concat(num.substring(firstDecimalIndex + 1, num.length).replace(new RegExp(escapeRegExp(decimalSeparator), 'g'), ''));
      } //add negation back


      if (hasNegation) num = '-' + num;
      return num;
    } //returned regex assumes decimalSeparator is as per prop

  }, {
    key: "getNumberRegex",
    value: function getNumberRegex(g, ignoreDecimalSeparator) {
      var _this$props = this.props,
          format = _this$props.format,
          decimalScale = _this$props.decimalScale;

      var _this$getSeparators2 = this.getSeparators(),
          decimalSeparator = _this$getSeparators2.decimalSeparator;

      return new RegExp('\\d' + (decimalSeparator && decimalScale !== 0 && !ignoreDecimalSeparator && !format ? '|' + escapeRegExp(decimalSeparator) : ''), g ? 'g' : undefined);
    }
  }, {
    key: "getSeparators",
    value: function getSeparators() {
      var decimalSeparator = this.props.decimalSeparator;
      var _this$props2 = this.props,
          thousandSeparator = _this$props2.thousandSeparator,
          allowedDecimalSeparators = _this$props2.allowedDecimalSeparators;

      if (thousandSeparator === true) {
        thousandSeparator = ',';
      }

      if (!allowedDecimalSeparators) {
        allowedDecimalSeparators = [decimalSeparator, '.'];
      }

      return {
        decimalSeparator: decimalSeparator,
        thousandSeparator: thousandSeparator,
        allowedDecimalSeparators: allowedDecimalSeparators
      };
    }
  }, {
    key: "getMaskAtIndex",
    value: function getMaskAtIndex(index) {
      var _this$props$mask = this.props.mask,
          mask = _this$props$mask === void 0 ? ' ' : _this$props$mask;

      if (typeof mask === 'string') {
        return mask;
      }

      return mask[index] || ' ';
    }
  }, {
    key: "getValueObject",
    value: function getValueObject(formattedValue, numAsString) {
      var floatValue = parseFloat(numAsString);
      return {
        formattedValue: formattedValue,
        value: numAsString,
        floatValue: isNaN(floatValue) ? undefined : floatValue
      };
    }
  }, {
    key: "validateProps",
    value: function validateProps() {
      var mask = this.props.mask; //validate decimalSeparator and thousandSeparator

      var _this$getSeparators3 = this.getSeparators(),
          decimalSeparator = _this$getSeparators3.decimalSeparator,
          thousandSeparator = _this$getSeparators3.thousandSeparator;

      if (decimalSeparator === thousandSeparator) {
        throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: ".concat(thousandSeparator, " (thousandSeparator = {true} is same as thousandSeparator = \",\")\n          decimalSeparator: ").concat(decimalSeparator, " (default value for decimalSeparator is .)\n       "));
      } //validate mask


      if (mask) {
        var maskAsStr = mask === 'string' ? mask : mask.toString();

        if (maskAsStr.match(/\d/g)) {
          throw new Error("\n          Mask ".concat(mask, " should not contain numeric character;\n        "));
        }
      }
    }
    /** Misc methods end **/

    /** caret specific methods **/

  }, {
    key: "setPatchedCaretPosition",
    value: function setPatchedCaretPosition(el, caretPos, currentValue) {
      /* setting caret position within timeout of 0ms is required for mobile chrome,
      otherwise browser resets the caret position after we set it
      We are also setting it without timeout so that in normal browser we don't see the flickering */
      setCaretPosition(el, caretPos);
      setTimeout(function () {
        if (el.value === currentValue) setCaretPosition(el, caretPos);
      }, 0);
    }
    /* This keeps the caret within typing area so people can't type in between prefix or suffix */

  }, {
    key: "correctCaretPosition",
    value: function correctCaretPosition(value, caretPos, direction) {
      var _this$props3 = this.props,
          prefix = _this$props3.prefix,
          suffix = _this$props3.suffix,
          format = _this$props3.format; //if value is empty return 0

      if (value === '') return 0; //caret position should be between 0 and value length

      caretPos = clamp(caretPos, 0, value.length); //in case of format as number limit between prefix and suffix

      if (!format) {
        var hasNegation = value[0] === '-';
        return clamp(caretPos, prefix.length + (hasNegation ? 1 : 0), value.length - suffix.length);
      } //in case if custom format method don't do anything


      if (typeof format === 'function') return caretPos;
      /* in case format is string find the closest # position from the caret position */
      //in case the caretPos have input value on it don't do anything

      if (format[caretPos] === '#' && charIsNumber(value[caretPos])) return caretPos; //if caretPos is just after input value don't do anything

      if (format[caretPos - 1] === '#' && charIsNumber(value[caretPos - 1])) return caretPos; //find the nearest caret position

      var firstHashPosition = format.indexOf('#');
      var lastHashPosition = format.lastIndexOf('#'); //limit the cursor between the first # position and the last # position

      caretPos = clamp(caretPos, firstHashPosition, lastHashPosition + 1);
      var nextPos = format.substring(caretPos, format.length).indexOf('#');
      var caretLeftBound = caretPos;
      var caretRightBound = caretPos + (nextPos === -1 ? 0 : nextPos); //get the position where the last number is present

      while (caretLeftBound > firstHashPosition && (format[caretLeftBound] !== '#' || !charIsNumber(value[caretLeftBound]))) {
        caretLeftBound -= 1;
      }

      var goToLeft = !charIsNumber(value[caretRightBound]) || direction === 'left' && caretPos !== firstHashPosition || caretPos - caretLeftBound < caretRightBound - caretPos;

      if (goToLeft) {
        //check if number should be taken after the bound or after it
        //if number preceding a valid number keep it after
        return charIsNumber(value[caretLeftBound]) ? caretLeftBound + 1 : caretLeftBound;
      }

      return caretRightBound;
    }
  }, {
    key: "getCaretPosition",
    value: function getCaretPosition(inputValue, formattedValue, caretPos) {
      var format = this.props.format;
      var stateValue = this.state.value;
      var numRegex = this.getNumberRegex(true);
      var inputNumber = (inputValue.match(numRegex) || []).join('');
      var formattedNumber = (formattedValue.match(numRegex) || []).join('');
      var j, i;
      j = 0;

      for (i = 0; i < caretPos; i++) {
        var currentInputChar = inputValue[i] || '';
        var currentFormatChar = formattedValue[j] || ''; //no need to increase new cursor position if formatted value does not have those characters
        //case inputValue = 1a23 and formattedValue =  123

        if (!currentInputChar.match(numRegex) && currentInputChar !== currentFormatChar) continue; //When we are striping out leading zeros maintain the new cursor position
        //Case inputValue = 00023 and formattedValue = 23;

        if (currentInputChar === '0' && currentFormatChar.match(numRegex) && currentFormatChar !== '0' && inputNumber.length !== formattedNumber.length) continue; //we are not using currentFormatChar because j can change here

        while (currentInputChar !== formattedValue[j] && j < formattedValue.length) {
          j++;
        }

        j++;
      }

      if (typeof format === 'string' && !stateValue) {
        //set it to the maximum value so it goes after the last number
        j = formattedValue.length;
      } //correct caret position if its outside of editable area


      j = this.correctCaretPosition(formattedValue, j);
      return j;
    }
    /** caret specific methods ends **/

    /** methods to remove formattting **/

  }, {
    key: "removePrefixAndSuffix",
    value: function removePrefixAndSuffix(val) {
      var _this$props4 = this.props,
          format = _this$props4.format,
          prefix = _this$props4.prefix,
          suffix = _this$props4.suffix; //remove prefix and suffix

      if (!format && val) {
        var isNegative = val[0] === '-'; //remove negation sign

        if (isNegative) val = val.substring(1, val.length); //remove prefix

        val = prefix && val.indexOf(prefix) === 0 ? val.substring(prefix.length, val.length) : val; //remove suffix

        var suffixLastIndex = val.lastIndexOf(suffix);
        val = suffix && suffixLastIndex !== -1 && suffixLastIndex === val.length - suffix.length ? val.substring(0, suffixLastIndex) : val; //add negation sign back

        if (isNegative) val = '-' + val;
      }

      return val;
    }
  }, {
    key: "removePatternFormatting",
    value: function removePatternFormatting(val) {
      var format = this.props.format;
      var formatArray = format.split('#').filter(function (str) {
        return str !== '';
      });
      var start = 0;
      var numStr = '';

      for (var i = 0, ln = formatArray.length; i <= ln; i++) {
        var part = formatArray[i] || ''; //if i is the last fragment take the index of end of the value
        //For case like +1 (911) 911 91 91 having pattern +1 (###) ### ## ##

        var index = i === ln ? val.length : val.indexOf(part, start);
        /* in any case if we don't find the pattern part in the value assume the val as numeric string
        This will be also in case if user has started typing, in any other case it will not be -1
        unless wrong prop value is provided */

        if (index === -1) {
          numStr = val;
          break;
        } else {
          numStr += val.substring(start, index);
          start = index + part.length;
        }
      }

      return (numStr.match(/\d/g) || []).join('');
    }
  }, {
    key: "removeFormatting",
    value: function removeFormatting(val) {
      var _this$props5 = this.props,
          format = _this$props5.format,
          removeFormatting = _this$props5.removeFormatting;
      if (!val) return val;

      if (!format) {
        val = this.removePrefixAndSuffix(val);
        val = this.getFloatString(val);
      } else if (typeof format === 'string') {
        val = this.removePatternFormatting(val);
      } else if (typeof removeFormatting === 'function') {
        //condition need to be handled if format method is provide,
        val = removeFormatting(val);
      } else {
        val = (val.match(/\d/g) || []).join('');
      }

      return val;
    }
    /** methods to remove formattting end **/

    /*** format specific methods start ***/

    /**
     * Format when # based string is provided
     * @param  {string} numStr Numeric String
     * @return {string}        formatted Value
     */

  }, {
    key: "formatWithPattern",
    value: function formatWithPattern(numStr) {
      var format = this.props.format;
      var hashCount = 0;
      var formattedNumberAry = format.split('');

      for (var i = 0, ln = format.length; i < ln; i++) {
        if (format[i] === '#') {
          formattedNumberAry[i] = numStr[hashCount] || this.getMaskAtIndex(hashCount);
          hashCount += 1;
        }
      }

      return formattedNumberAry.join('');
    }
    /**
     * @param  {string} numStr Numeric string/floatString] It always have decimalSeparator as .
     * @return {string} formatted Value
     */

  }, {
    key: "formatAsNumber",
    value: function formatAsNumber(numStr) {
      var _this$props6 = this.props,
          decimalScale = _this$props6.decimalScale,
          fixedDecimalScale = _this$props6.fixedDecimalScale,
          prefix = _this$props6.prefix,
          suffix = _this$props6.suffix,
          allowNegative = _this$props6.allowNegative,
          thousandsGroupStyle = _this$props6.thousandsGroupStyle;

      var _this$getSeparators4 = this.getSeparators(),
          thousandSeparator = _this$getSeparators4.thousandSeparator,
          decimalSeparator = _this$getSeparators4.decimalSeparator;

      var hasDecimalSeparator = numStr.indexOf('.') !== -1 || decimalScale && fixedDecimalScale;

      var _splitDecimal = splitDecimal(numStr, allowNegative),
          beforeDecimal = _splitDecimal.beforeDecimal,
          afterDecimal = _splitDecimal.afterDecimal,
          addNegation = _splitDecimal.addNegation; // eslint-disable-line prefer-const
      //apply decimal precision if its defined


      if (decimalScale !== undefined) afterDecimal = limitToScale(afterDecimal, decimalScale, fixedDecimalScale);

      if (thousandSeparator) {
        beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
      } //add prefix and suffix


      if (prefix) beforeDecimal = prefix + beforeDecimal;
      if (suffix) afterDecimal = afterDecimal + suffix; //restore negation sign

      if (addNegation) beforeDecimal = '-' + beforeDecimal;
      numStr = beforeDecimal + (hasDecimalSeparator && decimalSeparator || '') + afterDecimal;
      return numStr;
    }
  }, {
    key: "formatNumString",
    value: function formatNumString() {
      var numStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var _this$props7 = this.props,
          format = _this$props7.format,
          allowEmptyFormatting = _this$props7.allowEmptyFormatting;
      var formattedValue = numStr;

      if (numStr === '' && !allowEmptyFormatting) {
        formattedValue = '';
      } else if (numStr === '-' && !format) {
        formattedValue = '-';
      } else if (typeof format === 'string') {
        formattedValue = this.formatWithPattern(formattedValue);
      } else if (typeof format === 'function') {
        formattedValue = format(formattedValue);
      } else {
        formattedValue = this.formatAsNumber(formattedValue);
      }

      return formattedValue;
    }
  }, {
    key: "formatValueProp",
    value: function formatValueProp(defaultValue) {
      var _this$props8 = this.props,
          format = _this$props8.format,
          decimalScale = _this$props8.decimalScale,
          fixedDecimalScale = _this$props8.fixedDecimalScale,
          allowEmptyFormatting = _this$props8.allowEmptyFormatting;
      var _this$props9 = this.props,
          _this$props9$value = _this$props9.value,
          value = _this$props9$value === void 0 ? defaultValue : _this$props9$value,
          isNumericString = _this$props9.isNumericString;
      var isNonNumericFalsy = !value && value !== 0;

      if (isNonNumericFalsy && allowEmptyFormatting) {
        value = '';
      } // if value is not defined return empty string


      if (isNonNumericFalsy && !allowEmptyFormatting) return '';

      if (typeof value === 'number') {
        value = value.toString();
        isNumericString = true;
      } //change infinity value to empty string


      if (value === 'Infinity' && isNumericString) {
        value = '';
      } //round the number based on decimalScale
      //format only if non formatted value is provided


      if (isNumericString && !format && typeof decimalScale === 'number') {
        value = roundToPrecision(value, decimalScale, fixedDecimalScale);
      }

      var formattedValue = isNumericString ? this.formatNumString(value) : this.formatInput(value);
      return formattedValue;
    }
  }, {
    key: "formatNegation",
    value: function formatNegation() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var allowNegative = this.props.allowNegative;
      var negationRegex = new RegExp('(-)');
      var doubleNegationRegex = new RegExp('(-)(.)*(-)'); // Check number has '-' value

      var hasNegation = negationRegex.test(value); // Check number has 2 or more '-' values

      var removeNegation = doubleNegationRegex.test(value); //remove negation

      value = value.replace(/-/g, '');

      if (hasNegation && !removeNegation && allowNegative) {
        value = '-' + value;
      }

      return value;
    }
  }, {
    key: "formatInput",
    value: function formatInput() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var format = this.props.format; //format negation only if we are formatting as number

      if (!format) {
        value = this.removePrefixAndSuffix(value);
        value = this.formatNegation(value);
      } //remove formatting from number


      value = this.removeFormatting(value);
      return this.formatNumString(value);
    }
    /*** format specific methods end ***/

  }, {
    key: "isCharacterAFormat",
    value: function isCharacterAFormat(caretPos, value) {
      var _this$props10 = this.props,
          format = _this$props10.format,
          prefix = _this$props10.prefix,
          suffix = _this$props10.suffix,
          decimalScale = _this$props10.decimalScale,
          fixedDecimalScale = _this$props10.fixedDecimalScale;

      var _this$getSeparators5 = this.getSeparators(),
          decimalSeparator = _this$getSeparators5.decimalSeparator; //check within format pattern


      if (typeof format === 'string' && format[caretPos] !== '#') return true; //check in number format

      if (!format && (caretPos < prefix.length || caretPos >= value.length - suffix.length || decimalScale && fixedDecimalScale && value[caretPos] === decimalSeparator)) {
        return true;
      }

      return false;
    }
  }, {
    key: "checkIfFormatGotDeleted",
    value: function checkIfFormatGotDeleted(start, end, value) {
      for (var i = start; i < end; i++) {
        if (this.isCharacterAFormat(i, value)) return true;
      }

      return false;
    }
    /**
     * This will check if any formatting got removed by the delete or backspace and reset the value
     * It will also work as fallback if android chome keyDown handler does not work
     **/

  }, {
    key: "correctInputValue",
    value: function correctInputValue(caretPos, lastValue, value) {
      var _this$props11 = this.props,
          format = _this$props11.format,
          allowNegative = _this$props11.allowNegative,
          prefix = _this$props11.prefix,
          suffix = _this$props11.suffix,
          decimalScale = _this$props11.decimalScale;

      var _this$getSeparators6 = this.getSeparators(),
          allowedDecimalSeparators = _this$getSeparators6.allowedDecimalSeparators,
          decimalSeparator = _this$getSeparators6.decimalSeparator;

      var lastNumStr = this.state.numAsString || '';
      var _this$selectionBefore = this.selectionBeforeInput,
          selectionStart = _this$selectionBefore.selectionStart,
          selectionEnd = _this$selectionBefore.selectionEnd;

      var _findChangedIndex = findChangedIndex(lastValue, value),
          start = _findChangedIndex.start,
          end = _findChangedIndex.end;
      /** Check for any allowed decimal separator is added in the numeric format and replace it with decimal separator */


      if (!format && start === end && allowedDecimalSeparators.indexOf(value[selectionStart]) !== -1) {
        var separator = decimalScale === 0 ? '' : decimalSeparator;
        return value.substr(0, selectionStart) + separator + value.substr(selectionStart + 1, value.length);
      }
      /* don't do anyhting if something got added,
       or if value is empty string (when whole input is cleared)
       or whole input is replace with a number
      */


      var leftBound = !!format ? 0 : prefix.length;
      var rightBound = lastValue.length - (!!format ? 0 : suffix.length);

      if (value.length > lastValue.length || !value.length || start === end || selectionStart === 0 && selectionEnd === lastValue.length || selectionStart === leftBound && selectionEnd === rightBound) {
        return value;
      } //if format got deleted reset the value to last value


      if (this.checkIfFormatGotDeleted(start, end, lastValue)) {
        value = lastValue;
      } //for numbers check if beforeDecimal got deleted and there is nothing after decimal,
      //clear all numbers in such case while keeping the - sign


      if (!format) {
        var numericString = this.removeFormatting(value);

        var _splitDecimal2 = splitDecimal(numericString, allowNegative),
            beforeDecimal = _splitDecimal2.beforeDecimal,
            afterDecimal = _splitDecimal2.afterDecimal,
            addNegation = _splitDecimal2.addNegation; // eslint-disable-line prefer-const
        //clear only if something got deleted


        var isBeforeDecimalPoint = caretPos < value.indexOf(decimalSeparator) + 1;

        if (numericString.length < lastNumStr.length && isBeforeDecimalPoint && beforeDecimal === '' && !parseFloat(afterDecimal)) {
          return addNegation ? '-' : '';
        }
      }

      return value;
    }
    /** Update value and caret position */

  }, {
    key: "updateValue",
    value: function updateValue(params) {
      var formattedValue = params.formattedValue,
          input = params.input,
          _params$setCaretPosit = params.setCaretPosition,
          setCaretPosition = _params$setCaretPosit === void 0 ? true : _params$setCaretPosit;
      var numAsString = params.numAsString,
          caretPos = params.caretPos;
      var onValueChange = this.props.onValueChange;
      var lastValue = this.state.value;

      if (input) {
        //set caret position, and value imperatively when element is provided
        if (setCaretPosition) {
          //calculate caret position if not defined
          if (!caretPos) {
            var inputValue = params.inputValue || input.value;
            var currentCaretPosition = getCurrentCaretPosition(input);
            /**
             * set the value imperatively, this is required for IE fix
             * This is also required as if new caret position is beyond the previous value.
             * Caret position will not be set correctly
             */

            input.value = formattedValue; //get the caret position

            caretPos = this.getCaretPosition(inputValue, formattedValue, currentCaretPosition);
          } //set caret position


          this.setPatchedCaretPosition(input, caretPos, formattedValue);
        } else {
          /**
           * if we are not setting caret position set the value imperatively.
           * This is required on onBlur method
           */
          input.value = formattedValue;
        }
      } //calculate numeric string if not passed


      if (numAsString === undefined) {
        numAsString = this.removeFormatting(formattedValue);
      } //update state if value is changed


      if (formattedValue !== lastValue) {
        this.setState({
          value: formattedValue,
          numAsString: numAsString
        }); // trigger onValueChange synchronously, so parent is updated along with the number format. Fix for #277, #287

        onValueChange(this.getValueObject(formattedValue, numAsString));
      }
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      var el = e.target;
      var inputValue = el.value;
      var state = this.state,
          props = this.props;
      var isAllowed = props.isAllowed;
      var lastValue = state.value || '';
      var currentCaretPosition = getCurrentCaretPosition(el);
      inputValue = this.correctInputValue(currentCaretPosition, lastValue, inputValue);
      var formattedValue = this.formatInput(inputValue) || '';
      var numAsString = this.removeFormatting(formattedValue);
      var valueObj = this.getValueObject(formattedValue, numAsString);

      if (!isAllowed(valueObj)) {
        formattedValue = lastValue;
      }

      this.updateValue({
        formattedValue: formattedValue,
        numAsString: numAsString,
        inputValue: inputValue,
        input: el
      });
      props.onChange(e);
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var props = this.props,
          state = this.state;
      var format = props.format,
          onBlur = props.onBlur,
          allowLeadingZeros = props.allowLeadingZeros;
      var numAsString = state.numAsString;
      var lastValue = state.value;
      this.focusedElm = null;

      if (this.focusTimeout) {
        clearTimeout(this.focusTimeout);
      }

      if (!format) {
        // if the numAsString is not a valid number reset it to empty
        if (isNaN(parseFloat(numAsString))) {
          numAsString = '';
        }

        if (!allowLeadingZeros) {
          numAsString = fixLeadingZero(numAsString);
        }

        var formattedValue = this.formatNumString(numAsString); //change the state

        if (formattedValue !== lastValue) {
          // the event needs to be persisted because its properties can be accessed in an asynchronous way
          this.updateValue({
            formattedValue: formattedValue,
            numAsString: numAsString,
            input: e.target,
            setCaretPosition: false
          });
          onBlur(e);
          return;
        }
      }

      onBlur(e);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var el = e.target;
      var key = e.key;
      var selectionStart = el.selectionStart,
          selectionEnd = el.selectionEnd,
          _el$value = el.value,
          value = _el$value === void 0 ? '' : _el$value;
      var expectedCaretPosition;
      var _this$props12 = this.props,
          decimalScale = _this$props12.decimalScale,
          fixedDecimalScale = _this$props12.fixedDecimalScale,
          prefix = _this$props12.prefix,
          suffix = _this$props12.suffix,
          format = _this$props12.format,
          onKeyDown = _this$props12.onKeyDown;
      var ignoreDecimalSeparator = decimalScale !== undefined && fixedDecimalScale;
      var numRegex = this.getNumberRegex(false, ignoreDecimalSeparator);
      var negativeRegex = new RegExp('-');
      var isPatternFormat = typeof format === 'string';
      this.selectionBeforeInput = {
        selectionStart: selectionStart,
        selectionEnd: selectionEnd
      }; //Handle backspace and delete against non numerical/decimal characters or arrow keys

      if (key === 'ArrowLeft' || key === 'Backspace') {
        expectedCaretPosition = selectionStart - 1;
      } else if (key === 'ArrowRight') {
        expectedCaretPosition = selectionStart + 1;
      } else if (key === 'Delete') {
        expectedCaretPosition = selectionStart;
      } //if expectedCaretPosition is not set it means we don't want to Handle keyDown
      //also if multiple characters are selected don't handle


      if (expectedCaretPosition === undefined || selectionStart !== selectionEnd) {
        onKeyDown(e);
        return;
      }

      var newCaretPosition = expectedCaretPosition;
      var leftBound = isPatternFormat ? format.indexOf('#') : prefix.length;
      var rightBound = isPatternFormat ? format.lastIndexOf('#') + 1 : value.length - suffix.length;

      if (key === 'ArrowLeft' || key === 'ArrowRight') {
        var direction = key === 'ArrowLeft' ? 'left' : 'right';
        newCaretPosition = this.correctCaretPosition(value, expectedCaretPosition, direction);
      } else if (key === 'Delete' && !numRegex.test(value[expectedCaretPosition]) && !negativeRegex.test(value[expectedCaretPosition])) {
        while (!numRegex.test(value[newCaretPosition]) && newCaretPosition < rightBound) {
          newCaretPosition++;
        }
      } else if (key === 'Backspace' && !numRegex.test(value[expectedCaretPosition])) {
        /* NOTE: This is special case when backspace is pressed on a
        negative value while the cursor position is after prefix. We can't handle it on onChange because
        we will not have any information of keyPress
        */
        if (selectionStart <= leftBound + 1 && value[0] === '-' && typeof format === 'undefined') {
          var newValue = value.substring(1);
          this.updateValue({
            formattedValue: newValue,
            caretPos: newCaretPosition,
            input: el
          });
        } else if (!negativeRegex.test(value[expectedCaretPosition])) {
          while (!numRegex.test(value[newCaretPosition - 1]) && newCaretPosition > leftBound) {
            newCaretPosition--;
          }

          newCaretPosition = this.correctCaretPosition(value, newCaretPosition, 'left');
        }
      }

      if (newCaretPosition !== expectedCaretPosition || expectedCaretPosition < leftBound || expectedCaretPosition > rightBound) {
        e.preventDefault();
        this.setPatchedCaretPosition(el, newCaretPosition, value);
      }
      /* NOTE: this is just required for unit test as we need to get the newCaretPosition,
              Remove this when you find different solution */


      if (e.isUnitTestRun) {
        this.setPatchedCaretPosition(el, newCaretPosition, value);
      }

      onKeyDown(e);
    }
    /** required to handle the caret position when click anywhere within the input **/

  }, {
    key: "onMouseUp",
    value: function onMouseUp(e) {
      var el = e.target;
      /**
       * NOTE: we have to give default value for value as in case when custom input is provided
       * value can come as undefined when nothing is provided on value prop.
      */

      var selectionStart = el.selectionStart,
          selectionEnd = el.selectionEnd,
          _el$value2 = el.value,
          value = _el$value2 === void 0 ? '' : _el$value2;

      if (selectionStart === selectionEnd) {
        var caretPosition = this.correctCaretPosition(value, selectionStart);

        if (caretPosition !== selectionStart) {
          this.setPatchedCaretPosition(el, caretPosition, value);
        }
      }

      this.props.onMouseUp(e);
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      var _this2 = this;

      // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
      // (onFocus event target selectionStart is always 0 before setTimeout)
      e.persist();
      this.focusedElm = e.target;
      this.focusTimeout = setTimeout(function () {
        var el = e.target;
        var selectionStart = el.selectionStart,
            selectionEnd = el.selectionEnd,
            _el$value3 = el.value,
            value = _el$value3 === void 0 ? '' : _el$value3;

        var caretPosition = _this2.correctCaretPosition(value, selectionStart); //setPatchedCaretPosition only when everything is not selected on focus (while tabbing into the field)


        if (caretPosition !== selectionStart && !(selectionStart === 0 && selectionEnd === value.length)) {
          _this2.setPatchedCaretPosition(el, caretPosition, value);
        }

        _this2.props.onFocus(e);
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props13 = this.props,
          type = _this$props13.type,
          displayType = _this$props13.displayType,
          customInput = _this$props13.customInput,
          renderText = _this$props13.renderText,
          getInputRef = _this$props13.getInputRef;
      var value = this.state.value;
      var otherProps = omit(this.props, propTypes$1$1);

      var inputProps = _extends({
        inputMode: 'numeric'
      }, otherProps, {
        type: type,
        value: value,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onMouseUp: this.onMouseUp,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      });

      if (displayType === 'text') {
        return renderText ? renderText(value) || null : React$2.createElement("span", _extends({}, otherProps, {
          ref: getInputRef
        }), value);
      } else if (customInput) {
        var CustomInput = customInput;
        return React$2.createElement(CustomInput, _extends({}, inputProps, {
          ref: getInputRef
        }));
      }

      return React$2.createElement("input", _extends({}, inputProps, {
        ref: getInputRef
      }));
    }
  }]);

  return NumberFormat;
}(React$2.Component);

NumberFormat.propTypes = propTypes$1$1;
NumberFormat.defaultProps = defaultProps;

var InputMoneyForm = function InputMoneyForm(_ref) {
  var _rest$action;

  var register = _ref.register,
      errors = _ref.errors,
      validate = _ref.validate,
      name = _ref.name,
      required = _ref.required,
      values = _ref.values,
      limit = _ref.limit,
      minimum = _ref.minimum,
      setError = _ref.setError,
      onChange = _ref.onChange,
      isSubmitted = _ref.isSubmitted,
      rest = _objectWithoutPropertiesLoose(_ref, ["register", "errors", "validate", "name", "required", "values", "limit", "minimum", "setError", "onChange", "isSubmitted"]);

  var _useState = useState(false),
      isFieldActive = _useState[0],
      setIsFieldActive = _useState[1];

  var _useState2 = useState(),
      formattedValue = _useState2[0],
      setFormattedValue = _useState2[1];

  var _useState3 = useState(),
      floatValue = _useState3[0],
      setFloatValue = _useState3[1];

  var _useState4 = useState(''),
      message = _useState4[0],
      setMessage = _useState4[1];

  var value = values ? values(name) || rest.defaultValue : rest.value;
  useEffect(function () {
    if (value) {
      if (!isFieldActive) {
        setIsFieldActive(true);
      }
    }
  }, [value]);
  useEffect(function () {
    if (isSubmitted && !value && required) {
      setError(name, {
        type: 'required'
      });
    }
  }, [isSubmitted, value]);
  useEffect(function () {
    setFormattedValue(value);
  }, []);
  useEffect(function () {
    if (value != floatValue || value == 0) {
      setFormattedValue(value);
    }
  }, [value]);

  var handleFocus = function handleFocus() {
    if (!isFieldActive) {
      setIsFieldActive(true);
    }
  };

  var handleBlur = function handleBlur() {
    if (isFieldActive && !value) {
      setIsFieldActive(false);
    }
  };

  function onChanged(values) {
    if (values.floatValue === 0) {
      onChange(parseFloat("" + values.formattedValue));
    } else {
      onChange(values.floatValue);
    }

    setFloatValue(values.floatValue);
    setFormattedValue(values.formattedValue);
  }

  return React$2.createElement("div", {
    style: {
      paddingBottom: message || errors ? 0 : 20
    }
  }, React$2.createElement(Container$1, {
    isFieldActive: isFieldActive,
    requiredText: errors && errors.type === 'required' ? true : false,
    errorMessage: errors,
    containerStyle: rest.containerStyle,
    width: rest.width,
    disabled: rest.disabled,
    style: rest.containerStyle,
    textColor: rest.textColor,
    icon: rest.icon ? true : false,
    iconPosition: rest.iconPosition,
    action: rest.action,
    actionPosition: (_rest$action = rest.action) === null || _rest$action === void 0 ? void 0 : _rest$action.position
  }, rest.icon && React$2.createElement("div", {
    className: "icon"
  }, React$2.createElement(FontAwesomeIcon, {
    icon: rest.icon,
    color: rest.iconColor || colors.brand10
  })), rest.action && React$2.createElement("div", {
    className: "icon-action",
    onClick: rest.action.onClick
  }, React$2.createElement(FontAwesomeIcon, {
    icon: rest.action.icon,
    color: rest.action.iconColor || colors.brand10
  })), React$2.createElement(NumberFormat, {
    value: formattedValue,
    decimalSeparator: ",",
    thousandSeparator: ".",
    onValueChange: onChanged,
    decimalScale: 2,
    inputMode: "decimal",
    prefix: "R$",
    onFocus: handleFocus,
    onBlur: handleBlur,
    placeholder: isFieldActive ? rest.placeholder : '',
    name: name,
    getInputRef: register ? register({
      required: required,
      validate: validate && required ? function (value) {
        if (validate(value)) {
          setMessage(validate(value));
          return false;
        } else {
          setMessage('');
          return true;
        }
      } : limit && required ? function (value) {
        if (value.length > limit) {
          setMessage(limit + " caracteres permitidos.");
          return false;
        } else {
          setMessage('');
          return true;
        }
      } : minimum && required ? function (value) {
        if (value.length < minimum) {
          setMessage(name + " deve ter " + minimum + " ou mais caracteres.");
          return false;
        } else {
          setMessage('');
          return true;
        }
      } : null
    }) : null
  }), React$2.createElement("label", {
    style: rest.labelStyle
  }, React$2.createElement("span", null, rest.label))), errors ? React$2.createElement(LabelError, null, errors.type === 'required' ? 'Obrigatório' : "" + message) : null);
};

function _templateObject9() {
  var data = _taggedTemplateLiteralLoose(["\n    border-top: 1px solid ", ";\n    margin: 0 30px;\n    padding: 20px 0;\n    display: flex;\n    flex-direction: row-reverse;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n    padding: 20px 30px;\n    height: 100%;\n    position: relative;\n\n    .loading-modal {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: rgba(255, 255, 255, 0.8);\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        border-radius: 30px;\n        z-index: 2;\n        position: absolute;\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n    padding: 20px 30px;\n    cursor: pointer;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$3() {
  var data = _taggedTemplateLiteralLoose(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid ", ";\n    font-size: 20px;\n\n    .name-icon-modal {\n        display: flex;\n    }\n\n    & strong {\n        padding: ", ";\n        color: ", ";\n    }\n"]);

  _templateObject6$3 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteralLoose(["\n    transition: bottom 1s ease;\n    width: 90%;\n    background: ", ";\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n"]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteralLoose(["\n    transition: top 0.25s ease;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: ", ";\n    margin: auto;\n    background: ", ";\n    border-radius: 30px;\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteralLoose(["\n                  opacity: 1;\n                  visibility: hidden;\n              "]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteralLoose(["\n                  opacity: 1;\n                  visibility: visible;\n                  position: fixed;\n                  top: 0;\n                  right: 0;\n                  bottom: 0;\n                  left: 0;\n                  background: rgba(0, 0, 0, 0.5);\n                  transition: opacity 0.25s ease;\n                  overflow: auto;\n                  padding: 40px 0;\n                  display: flex;\n                  z-index: 999;\n              "]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n    ", "\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var Background$1 = styled.div(_templateObject$4(), function (props) {
  return props.open ? css$1(_templateObject2$4()) : css$1(_templateObject3$3());
});
var Modal = styled.div(_templateObject4$3(), function (props) {
  return props.witdh ? props.witdh + "%" : '80%';
}, colors.white);
var Dialog$1 = styled.div(_templateObject5$3(), colors.white);
var Header = styled.div(_templateObject6$3(), colors.default20, function (props) {
  return props.iconBack ? '20px 0' : '20px 30px';
}, colors.brand10);
var Icon$1 = styled.div(_templateObject7());
var Body = styled.div(_templateObject8());
var Actions = styled.div(_templateObject9(), colors.default20);

/*!
 * Font Awesome Pro 5.15.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */
var faAngleDown$1 = {
  prefix: 'fal',
  iconName: 'angle-down',
  icon: [256, 512, [], "f107", "M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"]
};
var faAngleLeft = {
  prefix: 'fal',
  iconName: 'angle-left',
  icon: [192, 512, [], "f104", "M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z"]
};
var faAngleUp$1 = {
  prefix: 'fal',
  iconName: 'angle-up',
  icon: [256, 512, [], "f106", "M136.5 185.1l116 117.8c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L128 224.7 27.6 326.9c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17l116-117.8c4.7-4.6 12.3-4.6 17 .1z"]
};
var faTimes = {
  prefix: 'fal',
  iconName: 'times',
  icon: [320, 512, [], "f00d", "M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"]
};

var ModalComponent = function ModalComponent(_ref) {
  var open = _ref.open,
      title = _ref.title,
      children = _ref.children,
      actions = _ref.actions,
      witdh = _ref.witdh,
      onClose = _ref.onClose,
      closeOnDimerClick = _ref.closeOnDimerClick,
      loading = _ref.loading,
      onBack = _ref.onBack;
  useEffect(function () {
    if (open) {
      window.addEventListener('keydown', function (event) {
        return escModal(event);
      });
    } else {
      window.removeEventListener('keydown', function (event) {
        return escModal(event);
      });
    }

    return window.removeEventListener('keydown', function (event) {
      return escModal(event);
    });
  }, [open]);

  function escModal(event) {
    if (open && event.keyCode === 27 && closeOnDimerClick) {
      onClose();
    }
  }

  return React$2.createElement(Background$1, {
    open: open,
    onClick: function onClick() {
      return closeOnDimerClick ? onClose() : null;
    }
  }, React$2.createElement(Modal, {
    witdh: witdh,
    onClick: function onClick(event) {
      return event.stopPropagation();
    }
  }, React$2.createElement(Header, {
    iconBack: onBack ? true : false
  }, React$2.createElement("div", {
    className: "name-icon-modal"
  }, onBack ? React$2.createElement(Icon$1, {
    onClick: function onClick() {
      return onBack();
    }
  }, React$2.createElement(FontAwesomeIcon, {
    icon: faAngleLeft,
    size: "lg",
    color: colors.brand10
  })) : null, React$2.createElement("strong", null, title)), React$2.createElement(Icon$1, {
    onClick: function onClick() {
      return onClose();
    }
  }, React$2.createElement(FontAwesomeIcon, {
    icon: faTimes,
    size: "lg",
    color: colors.brand10
  }))), React$2.createElement(Body, null, loading && React$2.createElement("div", {
    className: "loading-modal"
  }, React$2.createElement(Loader, null)), children), actions && React$2.createElement(Actions, null, actions)));
};

function _templateObject5$4() {
  var data = _taggedTemplateLiteralLoose(["\n    font-size: 10px;\n    margin-left: 0;\n    color: ", ";\n"]);

  _templateObject5$4 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteralLoose(["\n                      color: ", ";\n                  "]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteralLoose(["\n                      color: ", ";\n                  "]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteralLoose(["\n    width: ", ";\n    position: relative;\n\n    opacity: ", ";\n\n    textarea {\n        color: ", ";\n        resize: none;\n        width: 100%;\n        border-radius: 20px;\n        height: ", ";\n        margin: 0px;\n        outline: none;\n        padding: 20px;\n        border-color: ", ";\n\n        &::placeholder {\n            color: ", ";\n        }\n\n        -moz-appearance: none;\n        -webkit-appearance: none;\n    }\n\n    label {\n        position: absolute;\n        bottom: 0px;\n        top: 0px;\n        left: 0px;\n        width: 100%;\n        right: 100%;\n        pointer-events: none;\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: ", ";\n\n        ", "\n    }\n\n    textarea::-webkit-scrollbar {\n        width: 7px;\n        border-radius: 50px;\n    }\n\n    textarea::-webkit-scrollbar-thumb {\n        background-color: ", ";\n        border-radius: 50px;\n    }\n\n    textarea::-webkit-scrollbar-thumb:hover {\n        background-color: ", ";\n    }\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n    font-size: 14px;\n    color: ", ";\n    margin-left: 15px;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Label = styled.span(_templateObject$5(), function (props) {
  if (props.errorMessage) {
    return colors.brand20;
  }

  if (props.labelColor) {
    return props.labelColor;
  }

  return colors.brand10;
});
var Container$2 = styled.div(_templateObject2$5(), function (props) {
  return props.width ? props.width : '100%';
}, function (props) {
  return props.disabled ? '50%' : '100%';
}, function (props) {
  return props.textColor ? props.textColor : colors.gray20;
}, function (props) {
  return props.height ? props.height + "px" : '100px';
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
  return props.isFieldActive ? css$1(_templateObject3$4(), colors.brand10) : css$1(_templateObject4$4(), colors.gray20);
}, colors.brand10, colors.brandTransparent2);
var LabelError$1 = styled.span(_templateObject5$4(), function (props) {
  if (props.errorColor) {
    return props.errorColor;
  }

  return colors.brand20;
});

var TextArea = function TextArea(_ref) {
  var containerStyle = _ref.containerStyle,
      label = _ref.label,
      labelColor = _ref.labelColor,
      labelStyle = _ref.labelStyle,
      errorMessage = _ref.errorMessage,
      errorColor = _ref.errorColor,
      width = _ref.width,
      height = _ref.height,
      textColor = _ref.textColor,
      textAreaRef = _ref.textAreaRef,
      rest = _objectWithoutPropertiesLoose(_ref, ["containerStyle", "label", "labelColor", "labelStyle", "errorMessage", "errorColor", "width", "height", "textColor", "textAreaRef"]);

  return React$2.createElement("div", {
    style: {
      paddingBottom: errorMessage ? 0 : 20
    }
  }, label && React$2.createElement(Label, {
    errorMessage: errorMessage,
    labelColor: labelColor
  }, label), React$2.createElement(Container$2, {
    errorMessage: errorMessage,
    errorColor: errorColor,
    labelStyle: labelStyle,
    containerStyle: containerStyle,
    width: width,
    style: containerStyle,
    disabled: rest.disabled,
    textColor: textColor,
    height: height
  }, React$2.createElement("textarea", Object.assign({}, rest, {
    placeholder: rest.placeholder,
    ref: textAreaRef
  }))), React$2.createElement(LabelError$1, {
    errorColor: errorColor
  }, errorMessage));
};

var TextAreaForm = function TextAreaForm(_ref) {
  var register = _ref.register,
      errors = _ref.errors,
      validate = _ref.validate,
      name = _ref.name,
      required = _ref.required,
      limit = _ref.limit,
      minimum = _ref.minimum,
      rest = _objectWithoutPropertiesLoose(_ref, ["register", "errors", "validate", "name", "required", "limit", "minimum"]);

  var _useState = useState(''),
      message = _useState[0],
      setMessage = _useState[1];

  return React$2.createElement(TextArea, Object.assign({}, rest, {
    name: name,
    errorMessage: errors ? errors.type === 'required' ? 'Obrigatório' : "" + message : '',
    textAreaRef: register ? register({
      required: required,
      validate: validate && required ? function (value) {
        if (validate(value)) {
          setMessage(validate(value));
          return false;
        } else {
          setMessage('');
          return true;
        }
      } : limit && required ? function (value) {
        if (value.length > limit) {
          setMessage(limit + " caracteres permitidos.");
          return false;
        } else {
          setMessage('');
          return true;
        }
      } : minimum && required ? function (value) {
        if (value.length < minimum) {
          setMessage(name + " deve ter " + minimum + " ou mais caracteres.");
          return false;
        } else {
          setMessage('');
          return true;
        }
      } : null
    }) : null
  }));
};

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n    display: flex;\n    align-items: center;\n\n    > input {\n        display: none;\n    }\n\n    label {\n        font-size: ", ";\n        color: ", ";\n        cursor: ", ";\n        opacity: ", ";\n    }\n\n    > input + div {\n        position: relative;\n        cursor: ", ";\n        opacity: ", ";\n        display: flex;\n        align-items: center;\n\n        &:before {\n            content: '';\n            position: absolute;\n            width: ", ";\n            height: ", ";\n            border: 1px solid ", ";\n            background: ", ";\n            border-radius: 5px;\n        }\n        &:after {\n            content: ' ';\n            position: absolute;\n            width: ", ";\n            height: ", ";\n            border: 1px solid ", ";\n            background: ", ";\n            border-radius: 5px;\n            color: ", ";\n            text-align: center;\n            font-size: 12px;\n        }\n    }\n    > input:not(:checked) + div {\n        &:after {\n            opacity: 0;\n            transform: scale(0);\n        }\n    }\n    > input:checked + div {\n        &:after {\n            opacity: 1;\n            transform: scale(1);\n        }\n    }\n\n    span {\n        margin-left: ", ";\n        margin-right: ", ";\n        font-size: ", ";\n        color: ", ";\n        z-index: 1;\n    }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Sizes$2 = {
  mini: 'mini',
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  big: 'big',
  huge: 'huge',
  massive: 'massive'
};

var size$1 = function size(_size) {
  switch (_size) {
    case Sizes$2.mini:
      return '10px';

    case Sizes$2.tiny:
      return '12px';

    case Sizes$2.small:
      return '14px';

    case Sizes$2.medium:
      return '17px';

    case Sizes$2.large:
      return '20px';

    case Sizes$2.big:
      return '23px';

    case Sizes$2.huge:
      return '26px';

    case Sizes$2.massive:
      return '30px';

    default:
      return _size;
  }
};

var sizeChecked = function sizeChecked(size) {
  switch (size) {
    case Sizes$2.mini:
      return '8px';

    case Sizes$2.tiny:
      return '10px';

    case Sizes$2.small:
      return '11px';

    case Sizes$2.medium:
      return '13px';

    case Sizes$2.large:
      return '16px';

    case Sizes$2.big:
      return '19px';

    case Sizes$2.huge:
      return '21px';

    case Sizes$2.massive:
      return '23px';

    default:
      return size;
  }
};

var marginLeft = function marginLeft(size) {
  switch (size) {
    case Sizes$2.mini:
      return '1.5px';

    case Sizes$2.tiny:
      return '1.5px';

    case Sizes$2.small:
      return '2px';

    case Sizes$2.medium:
      return '2.5px';

    case Sizes$2.large:
      return '2.5px';

    case Sizes$2.big:
      return '2.5px';

    case Sizes$2.huge:
      return '3.5px';

    case Sizes$2.massive:
      return '4.5px';

    default:
      return size;
  }
};

var labelSize = function labelSize(size) {
  switch (size) {
    case Sizes$2.mini:
      return '10px';

    case Sizes$2.tiny:
      return '13px';

    case Sizes$2.small:
      return '14px';

    case Sizes$2.medium:
      return '16px';

    case Sizes$2.large:
      return '18px';

    case Sizes$2.big:
      return '20px';

    case Sizes$2.huge:
      return '22px';

    case Sizes$2.massive:
      return '24px';

    default:
      return size;
  }
};

var marginRight = function marginRight(size) {
  switch (size) {
    case Sizes$2.mini:
      return '5px';

    case Sizes$2.tiny:
      return '6px';

    case Sizes$2.small:
      return '7px';

    case Sizes$2.medium:
      return '8px';

    case Sizes$2.large:
      return '9px';

    case Sizes$2.big:
      return '10px';

    case Sizes$2.huge:
      return '11px';

    case Sizes$2.massive:
      return '12px';

    default:
      return size;
  }
};

var Container$3 = styled.div(_templateObject$6(), function (props) {
  if (props.sizeBox) {
    return labelSize(props.sizeBox);
  }

  return '17px';
}, colors.gray20, function (props) {
  return props.disabled ? 'default' : 'pointer';
}, function (props) {
  return props.disabled ? 0.5 : 1;
}, function (props) {
  return props.disabled ? 'default' : 'pointer';
}, function (props) {
  return props.disabled ? 0.5 : 1;
}, function (props) {
  if (props.sizeBox) {
    return size$1(props.sizeBox);
  }

  return '17px';
}, function (props) {
  if (props.sizeBox) {
    return size$1(props.sizeBox);
  }

  return '17px';
}, colors.default20, colors.default20, function (props) {
  if (props.sizeBox) {
    return size$1(props.sizeBox);
  }

  return '17px';
}, function (props) {
  if (props.sizeBox) {
    return size$1(props.sizeBox);
  }

  return '17px';
}, colors.brandDark, colors.brandDark, colors.white, function (props) {
  if (props.sizeBox) {
    return marginLeft(props.sizeBox);
  }

  return '2.5px';
}, function (props) {
  if (props.sizeBox) {
    return marginRight(props.sizeBox);
  }

  return '8px';
}, function (props) {
  if (props.sizeBox) {
    return sizeChecked(props.sizeBox);
  }

  return '13px';
}, function (props) {
  return props.checked ? colors.white : colors.default20;
});

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      labelStyle = _ref.labelStyle,
      sizeBox = _ref.sizeBox,
      rest = _objectWithoutPropertiesLoose(_ref, ["label", "labelStyle", "sizeBox"]);

  return React$2.createElement(Container$3, {
    onClick: function onClick() {
      return !rest.disabled ? rest.onChange ? rest.onChange() : null : null;
    },
    disabled: rest.disabled,
    sizeBox: sizeBox,
    checked: rest.checked
  }, React$2.createElement("input", Object.assign({
    type: "checkbox"
  }, rest)), React$2.createElement("div", null, React$2.createElement("span", null, React$2.createElement(FontAwesomeIcon, {
    icon: faCheck
  })), React$2.createElement("label", {
    style: labelStyle
  }, label)));
};

function _templateObject$7() {
  var data = _taggedTemplateLiteralLoose(["\n    > input {\n        display: none;\n    }\n\n    label {\n        font-size: ", ";\n        color: ", ";\n        cursor: ", ";\n        opacity: ", ";\n    }\n\n    > input + div {\n        position: relative;\n        padding-left: ", ";\n        cursor: ", ";\n        opacity: ", ";\n        display: flex;\n        align-items: center;\n\n        &:before {\n            content: '';\n            position: absolute;\n            left: 0;\n            top: 1px;\n            width: ", ";\n            height: ", ";\n            border: 1px solid ", ";\n            background: ", ";\n            border-radius: 50%;\n        }\n        &:after {\n            content: ' ';\n            position: absolute;\n            left: 4px;\n            top: 5px;\n            width: ", ";\n            height: ", ";\n            border: 1px solid ", ";\n            background: ", ";\n            border-radius: 50%;\n            color: ", ";\n            text-align: center;\n            font-size: 12px;\n        }\n    }\n    > input:not(:checked) + div {\n        &:after {\n            opacity: 0;\n            transform: scale(0);\n        }\n    }\n    > input:checked + div {\n        &:after {\n            opacity: 1;\n            transform: scale(1);\n        }\n    }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Sizes$3 = {
  mini: 'mini',
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  big: 'big',
  huge: 'huge',
  massive: 'massive'
};

var size$2 = function size(_size) {
  switch (_size) {
    case Sizes$3.mini:
      return '10px';

    case Sizes$3.tiny:
      return '12px';

    case Sizes$3.small:
      return '14px';

    case Sizes$3.medium:
      return '17px';

    case Sizes$3.large:
      return '20px';

    case Sizes$3.big:
      return '23px';

    case Sizes$3.huge:
      return '26px';

    case Sizes$3.massive:
      return '30px';

    default:
      return _size;
  }
};

var sizeChecked$1 = function sizeChecked(size) {
  switch (size) {
    case Sizes$3.mini:
      return '2px';

    case Sizes$3.tiny:
      return '4px';

    case Sizes$3.small:
      return '6px';

    case Sizes$3.medium:
      return '9px';

    case Sizes$3.large:
      return '12px';

    case Sizes$3.big:
      return '15px';

    case Sizes$3.huge:
      return '18px';

    case Sizes$3.massive:
      return '22px';

    default:
      return size;
  }
};

var labelSize$1 = function labelSize(size) {
  switch (size) {
    case Sizes$3.mini:
      return '10px';

    case Sizes$3.tiny:
      return '13px';

    case Sizes$3.small:
      return '14px';

    case Sizes$3.medium:
      return '16px';

    case Sizes$3.large:
      return '18px';

    case Sizes$3.big:
      return '20px';

    case Sizes$3.huge:
      return '22px';

    case Sizes$3.massive:
      return '24px';

    default:
      return size;
  }
};

var paddingLeft = function paddingLeft(size) {
  switch (size) {
    case Sizes$3.mini:
      return '15px';

    case Sizes$3.tiny:
      return '18px';

    case Sizes$3.small:
      return '20px';

    case Sizes$3.medium:
      return '25px';

    case Sizes$3.large:
      return '28px';

    case Sizes$3.big:
      return '32px';

    case Sizes$3.huge:
      return '35px';

    case Sizes$3.massive:
      return '40px';

    default:
      return size;
  }
};

var Container$4 = styled.div(_templateObject$7(), function (props) {
  if (props.sizeBox) {
    return labelSize$1(props.sizeBox);
  }

  return '17px';
}, colors.gray20, function (props) {
  return props.disabled ? 'default' : 'pointer';
}, function (props) {
  return props.disabled ? 0.5 : 1;
}, function (props) {
  if (props.sizeBox) {
    return paddingLeft(props.sizeBox);
  }

  return '25px';
}, function (props) {
  return props.disabled ? 'default' : 'pointer';
}, function (props) {
  return props.disabled ? 0.5 : 1;
}, function (props) {
  if (props.sizeBox) {
    return size$2(props.sizeBox);
  }

  return '17px';
}, function (props) {
  if (props.sizeBox) {
    return size$2(props.sizeBox);
  }

  return '17px';
}, colors.default30, colors.default20, function (props) {
  if (props.sizeBox) {
    return sizeChecked$1(props.sizeBox);
  }

  return '9px';
}, function (props) {
  if (props.sizeBox) {
    return sizeChecked$1(props.sizeBox);
  }

  return '9px';
}, colors.gray20, colors.gray20, colors.white);

var Radio = function Radio(_ref) {
  var label = _ref.label,
      labelStyle = _ref.labelStyle,
      sizeBox = _ref.sizeBox,
      rest = _objectWithoutPropertiesLoose(_ref, ["label", "labelStyle", "sizeBox"]);

  return React$2.createElement(Container$4, {
    onClick: function onClick() {
      return !rest.disabled ? rest.onChange ? rest.onChange() : null : null;
    },
    disabled: rest.disabled,
    sizeBox: sizeBox
  }, React$2.createElement("input", Object.assign({
    type: "radio"
  }, rest)), React$2.createElement("div", null, React$2.createElement("label", {
    style: labelStyle
  }, label)));
};

function _templateObject7$1() {
  var data = _taggedTemplateLiteralLoose(["\n    font-size: 10px;\n    color: ", ";\n"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$4() {
  var data = _taggedTemplateLiteralLoose(["\n                          border-radius: 20px;\n                      "]);

  _templateObject6$4 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$5() {
  var data = _taggedTemplateLiteralLoose(["\n                          border-top-left-radius: 20px;\n                          border-top-right-radius: 20px;\n                          border-bottom: 0px;\n                      "]);

  _templateObject5$5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$5() {
  var data = _taggedTemplateLiteralLoose(["\n                      border-radius: 20px;\n                  "]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteralLoose(["\n                      border-top-left-radius: 20px;\n                      border-top-right-radius: 20px;\n                      /* border-bottom: 0px; */\n                  "]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteralLoose(["\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    width: ", ";\n    margin-top: 5px;\n    margin-bottom: -3px;\n\n    > .options-container {\n        position: absolute;\n        background-color: ", ";\n        border: 1px solid\n            ", ";\n        margin: 44px 0;\n        width: ", ";\n        border-top: 0;\n        color: ", ";\n        transition: all 0.3s;\n        border-bottom-left-radius: 20px;\n        border-bottom-right-radius: 20px;\n        overflow-y: auto;\n        max-height: 0;\n        opacity: 0;\n\n        order: 1;\n        -moz-appearance: none;\n        -webkit-appearance: none;\n        z-index: 2;\n    }\n\n    .active {\n        max-height: 258px;\n        opacity: 1;\n    }\n\n    .options-container::-webkit-scrollbar {\n        width: 7px;\n        border-radius: 50px;\n        z-index: -1px;\n    }\n\n    .options-container::-webkit-scrollbar-thumb {\n        background-color: ", ";\n        border-radius: 50px;\n    }\n\n    .options-container::-webkit-scrollbar-thumb:hover {\n        background-color: ", ";\n    }\n\n    .selected {\n        color: ", ";\n        font-weight: ", ";\n        padding: 0;\n        cursor: pointer;\n        background-color: ", ";\n        position: relative;\n        border: ", ";\n\n        order: 0;\n\n        display: flex;\n        align-items: center;\n\n        ", "\n\n        input {\n            padding: 12px 35px 12px 24px;\n            height: ", ";\n            font-size: 16px;\n            border: none;\n            outline: none;\n            width: 100%;\n            text-align: ", ";\n            color: ", ";\n            background-color: ", ";\n            cursor: pointer;\n\n            ", "\n            -moz-appearance: none;\n            -webkit-appearance: none;\n        }\n\n        input::placeholder {\n            color: ", ";\n        }\n    }\n\n    .icon {\n        position: absolute;\n        right: 20px;\n    }\n\n    .option {\n        padding: 12px 24px;\n        cursor: pointer;\n\n        label {\n            cursor: pointer;\n        }\n\n        input {\n            display: none;\n        }\n    }\n\n    .no-value {\n        color: ", ";\n    }\n\n    .no-value:hover {\n        background-color: ", " !important;\n    }\n\n    .option:hover {\n        background-color: ", ";\n    }\n\n    .active-option {\n        background-color: ", ";\n    }\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteralLoose(["\n    font-size: 14px;\n    color: ", ";\n    margin-left: 15px;\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var Label$1 = styled.span(_templateObject$8(), function (props) {
  if (props.errorMessage) {
    return colors.brand20;
  }

  if (props.labelColor) {
    return props.labelColor;
  }

  return colors.brand10;
});
var SelectBox = styled.div(_templateObject2$6(), function (props) {
  return props.width ? props.width + "%" : '100%';
}, colors.white, function (props) {
  return props.error ? colors.brand20 : colors.default20;
}, function (props) {
  return props.width ? props.width + "%" : '100%';
}, function (props) {
  if (props.error) {
    return colors.brand20;
  }

  if (props.brand) {
    return colors.brand10;
  }

  return colors.gray20;
}, colors.brand10, colors.brandTransparent2, function (props) {
  if (props.error) {
    return colors.brand20;
  }

  if (props.brand && props.active && props.value) {
    return colors.brandDark;
  }

  if (props.brand && props.value) {
    return colors.brand10;
  }

  if (props.brand && !props.value) {
    return colors.brandTransparent;
  }

  if (props.value) {
    return colors.gray20;
  }

  return colors.default20;
}, function (props) {
  return props.brand ? 'bold' : 'normal';
}, function (props) {
  if (props.error) {
    return colors.error;
  }

  if (props.brand) {
    return colors.brandLight;
  }

  return colors.white;
}, function (props) {
  if (props.error) {
    return "1px solid " + colors.brand20;
  }

  if (props.brand) {
    return "1px solid " + colors.brandLight;
  }

  return "1px solid " + colors.default20;
}, function (props) {
  return props.active ? css$1(_templateObject3$5()) : css$1(_templateObject4$5());
}, function (props) {
  return props.height ? props.height + "px" : '40px';
}, function (props) {
  return props.textAlign === 'center' ? 'center' : 'space-between';
}, function (props) {
  if (props.error) {
    return colors.brand20;
  }

  if (props.brand && props.active && props.value) {
    return colors.brandDark;
  }

  if (props.brand && props.value) {
    return colors.brand10;
  }

  if (props.brand && !props.value) {
    return colors.brandTransparent;
  }

  if (props.value) {
    return colors.gray20;
  }

  return colors.default20;
}, function (props) {
  if (props.error) {
    return colors.error;
  }

  if (props.brand) {
    return colors.brandLight;
  }

  return colors.white;
}, function (props) {
  return props.active ? css$1(_templateObject5$5()) : css$1(_templateObject6$4());
}, function (props) {
  if (props.error) {
    return colors.brand20;
  }

  if (props.brand) {
    return colors.brandLight;
  }

  return colors.default20;
}, colors.default20, colors.white, colors.hover, colors.hover);
var LabelError$2 = styled.span(_templateObject7$1(), colors.brand20);

var removerAcentos = function removerAcentos(inStr) {
  return inStr.replace(/([àáâãäå])|([ç])|([èéêë])|([ìíîï])|([ñ])|([òóôõöø])|([ß])|([ùúûü])|([ÿ])|([æ])|(['"])/gi, function (a, c, e, i, n, o, s, u, y, ae, apost) {
    if (a) return 'a';
    if (c) return 'c';
    if (e) return 'e';
    if (i) return 'i';
    if (n) return 'n';
    if (o) return 'o';
    if (s) return 's';
    if (u) return 'u';
    if (y) return 'y';
    if (ae) return 'ae';
    if (apost) return '';
    return '';
  });
};
var removerAcentosESpecialChars = function removerAcentosESpecialChars(str) {
  try {
    return removerAcentos(str).replace(/[^a-z0-9 ]/gi, '').trim();
  } catch (ex) {
    return '';
  }
};

var Dropdown = function Dropdown(_ref) {
  var brand = _ref.brand,
      options = _ref.options,
      value = _ref.value,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      textAlign = _ref.textAlign,
      search = _ref.search,
      loading = _ref.loading,
      width = _ref.width,
      errorMessage = _ref.errorMessage,
      label = _ref.label,
      labelColor = _ref.labelColor,
      dropdownRef = _ref.dropdownRef,
      height = _ref.height;

  var _useState = useState(false),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = useState(),
      optionsState = _useState2[0],
      setOptionsState = _useState2[1];

  var _useState3 = useState(0),
      selectedIndex = _useState3[0],
      setSelectedIndex = _useState3[1];

  var _useState4 = useState(),
      item = _useState4[0],
      setItem = _useState4[1];

  useEffect(function () {
    setOptionsState(options);
    setSelectedIndex(options.findIndex(function (option) {
      return option.value === value;
    }));
  }, []);
  useEffect(function () {
    if (optionsState) {
      setSelectedIndex(optionsState.findIndex(function (option) {
        return option.value === value;
      }));
    }

    if (value) {
      setItem(options.filter(function (opt) {
        return opt.value === value;
      })[0]);
    }
  }, [value]);
  return React$2.createElement("div", {
    style: {
      marginBottom: errorMessage ? 5 : 25
    }
  }, label && React$2.createElement(Label$1, {
    errorMessage: errorMessage,
    labelColor: labelColor
  }, label), React$2.createElement(SelectBox, {
    active: active,
    brand: brand,
    value: value,
    textAlign: textAlign,
    search: search,
    onBlur: function onBlur() {
      return setActive(false);
    },
    width: width,
    error: errorMessage,
    ref: dropdownRef,
    height: height
  }, React$2.createElement("div", {
    className: "options-container " + (active ? 'active' : '')
  }, optionsState && optionsState.length === 0 ? React$2.createElement("div", {
    className: "option no-value"
  }, React$2.createElement("input", {
    type: "radio"
  }), React$2.createElement("label", null, "Nenhum resultado encontrado")) : optionsState && optionsState.map(function (option, index) {
    return React$2.createElement("div", {
      key: option.id,
      className: "option " + (index === selectedIndex && 'active-option') + " ",
      id: option.text,
      onClick: function onClick() {
        setItem(option);
        setActive(false);

        _onChange(option.value);
      }
    }, React$2.createElement("input", {
      type: "radio"
    }), React$2.createElement("label", null, option.text));
  })), React$2.createElement("div", {
    className: "selected",
    onClick: function onClick() {
      setActive(!active);
      setOptionsState(options);
    },
    id: "selection"
  }, search ? React$2.createElement(React$2.Fragment, null, React$2.createElement("input", {
    onChange: function onChange(event) {
      setActive(true);

      if (_onChange) {
        _onChange(event.target.value);
      }

      if (event.target.value.trim().length > 0) {
        setOptionsState(optionsState && options.filter(function (option) {
          return option.text.toLowerCase().includes(event.target.value.toLowerCase()) || removerAcentosESpecialChars(option.text).toLowerCase().includes(event.target.value.toLowerCase());
        }));
      } else {
        setOptionsState(options);
      }
    },
    value: value ? item === null || item === void 0 ? void 0 : item.text : '',
    placeholder: placeholder
  }), React$2.createElement("div", {
    className: "icon"
  }, loading ? React$2.createElement(Loader, {
    size: "mini"
  }) : React$2.createElement(FontAwesomeIcon, {
    icon: active ? faAngleUp : faAngleDown,
    size: "lg"
  }))) : React$2.createElement(React$2.Fragment, null, React$2.createElement("input", {
    value: (item === null || item === void 0 ? void 0 : item.text) || placeholder || '',
    readOnly: true
  }), React$2.createElement("div", {
    className: "icon"
  }, loading ? React$2.createElement(Loader, null) : React$2.createElement(FontAwesomeIcon, {
    icon: active ? faAngleUp : faAngleDown,
    size: "lg"
  }))))), errorMessage && React$2.createElement(LabelError$2, null, errorMessage));
};

var DropdownForm = function DropdownForm(_ref) {
  var value = _ref.value,
      clearError = _ref.clearError,
      errors = _ref.errors,
      name = _ref.name,
      register = _ref.register,
      required = _ref.required,
      setValue = _ref.setValue,
      validate = _ref.validate,
      rest = _objectWithoutPropertiesLoose(_ref, ["value", "clearError", "errors", "name", "register", "required", "setValue", "validate"]);

  var _useState = useState(),
      valueDefault = _useState[0],
      setValueDefault = _useState[1];

  var _useState2 = useState(''),
      message = _useState2[0],
      setMessage = _useState2[1];

  useEffect(function () {
    if (!valueDefault) {
      setValue(name, value);
    } else {
      setValue(name, valueDefault);
    }
  }, [valueDefault]);
  useEffect(function () {
    setValueDefault(value);
  }, [value]);
  useEffect(function () {
    if (register) {
      register({
        name: name
      }, {
        required: required,
        validate: validate && required ? function (value) {
          if (validate(value)) {
            setMessage(validate(value));
            return false;
          } else {
            setMessage('');
            return true;
          }
        } : null
      });
    }
  }, [register]);
  return React$2.createElement(Dropdown, Object.assign({}, rest, {
    value: valueDefault,
    onChange: function onChange(value) {
      setValueDefault(value);
      setValue(name, value);

      if (errors && clearError) {
        clearError(name);
      }
    },
    errorMessage: errors ? errors.type === 'required' ? 'Obrigatório' : "" + message : ''
  }));
};

function _templateObject4$6() {
  var data = _taggedTemplateLiteralLoose(["\n    width: ", ";\n    padding: 20px;\n    border: 1px solid ", ";\n    border-top: 0;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n    display: ", ";\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16);\n"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteralLoose(["\n                  border-radius: 30px;\n              "]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteralLoose(["\n                  border-top-left-radius: 20px;\n                  border-top-right-radius: 20px;\n              "]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteralLoose(["\n    display: flex;\n    width: ", ";\n    justify-content: space-between;\n    background-color: ", ";\n    border: 1px solid ", ";\n    padding: 15px 20px;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.16);\n\n    .icon-title {\n        display: flex;\n        align-items: center;\n    }\n\n    .title-subtitle {\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n        margin-left: ", ";\n\n        .title {\n            font-size: ", ";\n            color: ", ";\n        }\n\n        .subtitle {\n            color: ", ";\n            font-size: 12px;\n        }\n    }\n\n    .value-icon {\n        display: flex;\n        align-items: center;\n        flex: 1;\n        justify-content: flex-end;\n\n        .value {\n            margin-right: 20px;\n            color: ", ";\n        }\n    }\n\n    ", "\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var Container$5 = styled.div(_templateObject$9(), function (props) {
  return props.width ? props.width + "%" : '100%';
}, function (props) {
  return props.secundary ? colors.card : colors.white;
}, colors.card, function (props) {
  return props.icon ? '15px' : '0';
}, function (props) {
  return props.subtitle ? '14px' : props.fontSizeTitle ? props.fontSizeTitle : '16px';
}, function (props) {
  return props.colorTitle ? props.colorTitle : "" + colors.gray20;
}, function (props) {
  return props.colorTitle ? props.colorTitle : "" + colors.gray10;
}, function (props) {
  return props.colorValue ? props.colorValue : "" + colors.gray20;
}, function (props) {
  return props.open ? css$1(_templateObject2$7()) : css$1(_templateObject3$6());
});
var Body$1 = styled.div(_templateObject4$6(), function (props) {
  return props.width ? props.width + "%" : '100%';
}, colors.card, function (props) {
  return props.open ? 'block' : 'none';
});

var Accordion = function Accordion(_ref) {
  var title = _ref.title,
      colorTitle = _ref.colorTitle,
      subtitle = _ref.subtitle,
      colorSubtitle = _ref.colorSubtitle,
      value = _ref.value,
      colorValue = _ref.colorValue,
      children = _ref.children,
      secundary = _ref.secundary,
      open = _ref.open,
      onChange = _ref.onChange,
      width = _ref.width,
      icon = _ref.icon,
      colorIcon = _ref.colorIcon,
      fontSizeTitle = _ref.fontSizeTitle;
  return React$2.createElement(React$2.Fragment, null, React$2.createElement(Container$5, {
    colorTitle: colorTitle,
    colorSubtitle: colorSubtitle,
    colorValue: colorValue,
    secundary: secundary,
    subtitle: subtitle,
    open: open,
    onClick: function onClick() {
      return onChange();
    },
    width: width,
    icon: icon ? true : false,
    fontSizeTitle: fontSizeTitle
  }, React$2.createElement("div", {
    className: "icon-title"
  }, icon && React$2.createElement(FontAwesomeIcon, {
    icon: icon,
    size: "lg",
    color: colorIcon ? colorIcon : colors.brand10
  }), React$2.createElement("div", {
    className: "title-subtitle"
  }, React$2.createElement("span", {
    className: "title"
  }, title), subtitle && React$2.createElement("span", {
    className: "subtitle"
  }, subtitle))), React$2.createElement("div", {
    className: "value-icon"
  }, React$2.createElement("span", {
    className: "value"
  }, value), secundary ? React$2.createElement(FontAwesomeIcon, {
    icon: open ? faAngleUp$1 : faAngleDown$1,
    size: "lg"
  }) : React$2.createElement(FontAwesomeIcon, {
    icon: open ? faAngleUp$1 : faAngleDown$1,
    size: "2x",
    color: colors.brand10
  }))), React$2.createElement(Body$1, {
    open: open,
    width: width
  }, children));
};

function _templateObject3$7() {
  var data = _taggedTemplateLiteralLoose(["\n    display: flex !important;\n    flex-direction: row !important;\n\n    .btn {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: center !important;\n        opacity: ", ";\n        width: ", ";\n        border: 1px solid ", " !important;\n        padding: 4px 0 !important;\n\n        span {\n            font-size: ", ";\n        }\n    }\n\n    .left {\n        cursor: ", ";\n        background-color: ", ";\n        border-top-left-radius: 20px !important;\n        border-bottom-left-radius: 20px !important;\n        border-right: 0 !important;\n        transition: 400ms !important;\n\n        span {\n            color: ", ";\n        }\n    }\n\n    .right {\n        cursor: ", ";\n        background-color: ", ";\n        border-top-right-radius: 20px !important;\n        border-bottom-right-radius: 20px !important;\n        border-left: 0 !important;\n        transition: 400ms !important;\n\n        span {\n            color: ", ";\n        }\n    }\n"]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteralLoose(["\n    display: flex !important;\n    flex-direction: row !important;\n\n    .btn {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: center !important;\n        opacity: ", ";\n        width: ", ";\n        border: 1px solid ", " !important;\n        padding: 4px 0 !important;\n\n        span {\n            font-size: ", ";\n        }\n    }\n\n    .left {\n        cursor: ", ";\n        background-color: ", ";\n        border-top-left-radius: 20px !important;\n        border-bottom-left-radius: 20px !important;\n        border-right: 0 !important;\n        transition: 400ms !important;\n\n        span {\n            color: ", ";\n        }\n    }\n\n    .right {\n        cursor: ", ";\n        background-color: ", ";\n        border-top-right-radius: 20px !important;\n        border-bottom-right-radius: 20px !important;\n        border-left: 0 !important;\n        transition: 400ms !important;\n\n        span {\n            color: ", ";\n        }\n    }\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteralLoose(["\n    display: flex !important;\n    flex-direction: row !important;\n    position: relative !important;\n    /* padding-left: ", "; */\n    /* margin-bottom: 12px; */\n    cursor: ", ";\n    font-size: 22px !important;\n    user-select: none !important;\n\n    input {\n        position: absolute !important;\n        opacity: 0 !important;\n        cursor: pointer !important;\n        height: 0 !important;\n        width: 0 !important;\n        display: none !important;\n    }\n\n    input:checked ~ .control {\n        background-color: ", ";\n\n        &:after {\n            left: ", ";\n        }\n    }\n\n    .control {\n        height: ", ";\n        width: ", ";\n        border-radius: ", ";\n        background-color: ", " !important;\n        transition: background-color 0.15s ease-in !important;\n\n        &:after {\n            content: '' !important;\n            position: absolute !important;\n            left: 5px !important;\n            top: 5px !important;\n            height: ", ";\n            width: ", ";\n            border-radius: 50px !important;\n            background-color: white !important;\n            transition: left 0.15s ease-in !important;\n            border: 1px solid ", " !important;\n        }\n    }\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var toggleWidth = 50;
var toggleHeight = 30;
var toggleGutter = 6;
var toggleRadius = toggleHeight / 2;
var toggleControlSsize = toggleHeight - toggleGutter * 2;
var Sizes$4 = {
  mini: 'mini',
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  big: 'big',
  huge: 'huge',
  massive: 'massive'
};

var widthSwitch = function widthSwitch(size) {
  switch (size) {
    case Sizes$4.mini:
      return 30;

    case Sizes$4.tiny:
      return 35;

    case Sizes$4.small:
      return 40;

    case Sizes$4.medium:
      return 50;

    case Sizes$4.large:
      return 60;

    case Sizes$4.big:
      return 70;

    case Sizes$4.huge:
      return 80;

    case Sizes$4.massive:
      return 90;

    default:
      return 50;
  }
};

var heightSwitch = function heightSwitch(size) {
  switch (size) {
    case Sizes$4.mini:
      return 20;

    case Sizes$4.tiny:
      return 22.5;

    case Sizes$4.small:
      return 25;

    case Sizes$4.medium:
      return 30;

    case Sizes$4.large:
      return 35;

    case Sizes$4.big:
      return 40;

    case Sizes$4.huge:
      return 45;

    case Sizes$4.massive:
      return 50;

    default:
      return 30;
  }
};

var sizeGutter = function sizeGutter(size) {
  switch (size) {
    case Sizes$4.mini:
      return 6;

    case Sizes$4.tiny:
      return 6;

    case Sizes$4.small:
      return 6;

    case Sizes$4.medium:
      return 6;

    case Sizes$4.large:
      return 6;

    case Sizes$4.big:
      return 6;

    case Sizes$4.huge:
      return 6;

    case Sizes$4.massive:
      return 6;

    default:
      return 6;
  }
};

var widthToggle = function widthToggle(size) {
  switch (size) {
    case Sizes$4.mini:
      return '40px !important';

    case Sizes$4.tiny:
      return '50px !important';

    case Sizes$4.small:
      return '60px !important';

    case Sizes$4.medium:
      return '70px !important';

    case Sizes$4.large:
      return '80px !important';

    case Sizes$4.big:
      return '90px !important';

    case Sizes$4.huge:
      return '100px !important';

    case Sizes$4.massive:
      return '110px !important';

    default:
      return '70px !important';
  }
};

var fontToggle = function fontToggle(size) {
  switch (size) {
    case Sizes$4.mini:
      return '8px !important';

    case Sizes$4.tiny:
      return '9px !important';

    case Sizes$4.small:
      return '10px !important';

    case Sizes$4.medium:
      return '11px !important';

    case Sizes$4.large:
      return '12px !important';

    case Sizes$4.big:
      return '13px !important';

    case Sizes$4.huge:
      return '14px !important';

    case Sizes$4.massive:
      return '15px !important';

    default:
      return '11px !important';
  }
};

var fontActiveInactive = function fontActiveInactive(size) {
  switch (size) {
    case Sizes$4.mini:
      return '7px !important';

    case Sizes$4.tiny:
      return '8px !important';

    case Sizes$4.small:
      return '9px !important';

    case Sizes$4.medium:
      return '10px !important';

    case Sizes$4.large:
      return '11px !important';

    case Sizes$4.big:
      return '12px !important';

    case Sizes$4.huge:
      return '13px !important';

    case Sizes$4.massive:
      return '14px !important';

    default:
      return '10px !important';
  }
};

var Switch = styled.label(_templateObject$a(), function (props) {
  return props.size ? widthSwitch(props.size) + "px" : toggleWidth + "px";
}, function (props) {
  return props.disabled ? 'normal !important' : 'pointer !important';
}, function (props) {
  return props.disabled ? colors.brandTransparent + " !important" : colors.brandDark + " !important";
}, function (props) {
  return props.size ? widthSwitch(props.size) - (heightSwitch(props.size) - sizeGutter(props.size) * 2) - sizeGutter(props.size) + "px !important" : toggleWidth - toggleControlSsize - toggleGutter + "px !important";
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
}, colors.default10);
var Toggle = styled.div(_templateObject2$8(), function (props) {
  return props.disabled ? '0.5 !important' : '1 !important';
}, function (props) {
  return props.size ? widthToggle(props.size) : '70px !important';
}, colors.card, function (props) {
  return props.size ? fontToggle(props.size) : '11px !important';
}, function (props) {
  return props.disabled ? 'default !important' : !props.checked ? 'default !important' : 'pointer !important';
}, function (props) {
  return !props.checked ? colors.brand10 + " !important" : colors.white + " !important";
}, function (props) {
  return !props.checked ? colors.white + " !important" : colors.gray20 + " !important";
}, function (props) {
  return props.disabled ? 'default !important' : props.checked ? 'default !important' : 'pointer !important';
}, function (props) {
  return props.checked ? colors.brand10 + " !important" : colors.white + " !important";
}, function (props) {
  return props.checked ? colors.white + " !important" : colors.gray20 + " !important";
});
var ActiveInactive = styled.div(_templateObject3$7(), function (props) {
  return props.disabled ? '0.5 !important' : '1 !important';
}, function (props) {
  return props.size ? widthToggle(props.size) : '70px !important';
}, colors.card, function (props) {
  return props.size ? fontActiveInactive(props.size) : '10px !important';
}, function (props) {
  return props.disabled ? 'default !important' : !props.checked ? 'default !important' : 'pointer !important';
}, function (props) {
  return !props.checked ? colors.brand20 + " !important" : colors.white + " !important";
}, function (props) {
  return !props.checked ? colors.white + " !important" : colors.gray20 + " !important";
}, function (props) {
  return props.disabled ? 'default !important' : props.checked ? 'default !important' : 'pointer !important';
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

var Selection = function Selection(_ref) {
  var type = _ref.type,
      checked = _ref.checked,
      onChange = _ref.onChange,
      size = _ref.size,
      disabled = _ref.disabled,
      selectionRef = _ref.selectionRef;

  function renderSwitch() {
    return React$2.createElement(Switch, {
      size: size,
      ref: selectionRef,
      disabled: disabled
    }, React$2.createElement("input", {
      type: "checkbox",
      defaultChecked: checked
    }), React$2.createElement("span", {
      className: "control",
      onClick: function onClick() {
        return !disabled ? onChange ? onChange() : null : null;
      }
    }));
  }

  function renderToggle() {
    return React$2.createElement(Toggle, {
      checked: checked,
      ref: selectionRef,
      size: size,
      disabled: disabled
    }, React$2.createElement("div", {
      className: "btn left",
      onClick: function onClick() {
        return !disabled ? checked ? onChange ? onChange() : null : null : null;
      }
    }, React$2.createElement("span", null, "n\xE3o")), React$2.createElement("div", {
      className: "btn right",
      onClick: function onClick() {
        return !disabled ? !checked ? onChange ? onChange() : null : null : null;
      }
    }, React$2.createElement("span", null, "sim")));
  }

  function renderActiveInactive() {
    return React$2.createElement(ActiveInactive, {
      checked: checked,
      ref: selectionRef,
      size: size,
      disabled: disabled
    }, React$2.createElement("div", {
      className: "btn left",
      onClick: function onClick() {
        return !disabled ? checked ? onChange ? onChange() : null : null : null;
      }
    }, React$2.createElement("span", null, checked ? 'desativar' : 'inativo')), React$2.createElement("div", {
      className: "btn right",
      onClick: function onClick() {
        return !disabled ? !checked ? onChange ? onChange() : null : null : null;
      }
    }, React$2.createElement("span", null, checked ? 'ativo' : 'ativar')));
  }

  switch (type) {
    case TYPES["switch"]:
      return renderSwitch();

    case TYPES.toggle:
      return renderToggle();

    case TYPES.activeInactive:
      return renderActiveInactive();
  }

  return React$2.createElement("div", null);
};

function _templateObject$b() {
  var data = _taggedTemplateLiteralLoose(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    opacity: ", ";\n\n    .btn {\n        width: ", ";\n        font-size: ", ";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: ", ";\n        color: ", ";\n    }\n\n    .left {\n        opacity: ", ";\n\n        cursor: ", ";\n    }\n\n    .right {\n        opacity: ", ";\n\n        cursor: ", ";\n    }\n\n    input {\n        text-align: center;\n        width: ", ";\n        font-size: ", ";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: ", ";\n        border: none;\n        outline: none;\n    }\n\n    input[type='number']::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n    }\n    input[type='number'] {\n        -moz-appearance: textfield;\n        appearance: textfield;\n    }\n\n    input:disabled {\n        background-color: transparent;\n    }\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var Sizes$5 = {
  small: 'small',
  medium: 'medium',
  big: 'big'
};

var widthBtnMoreLess = function widthBtnMoreLess(size) {
  switch (size) {
    case Sizes$5.small:
      return '20px';

    case Sizes$5.medium:
      return '30px';

    case Sizes$5.big:
      return '40px';

    default:
      return '30px';
  }
};

var heightBtnMoreLess = function heightBtnMoreLess(size) {
  switch (size) {
    case Sizes$5.small:
      return '20px';

    case Sizes$5.medium:
      return '30px';

    case Sizes$5.big:
      return '40px';

    default:
      return '30px';
  }
};

var widthValueMoreLess = function widthValueMoreLess(size, value) {
  if (size === Sizes$5.small) {
    if (value < 100) {
      return '15px';
    }

    if (value < 1000) {
      return '20px';
    }

    if (value < 10000) {
      return '25px';
    }

    return '30px';
  }

  if (size === Sizes$5.medium) {
    if (value < 100) {
      return '20px';
    }

    if (value < 1000) {
      return '30px';
    }

    if (value < 10000) {
      return '40px';
    }

    return '50px';
  }

  if (size === Sizes$5.big) {
    if (value < 100) {
      return '30px';
    }

    if (value < 1000) {
      return '40px';
    }

    if (value < 10000) {
      return '55px';
    }

    return '70px';
  }

  return '50px';
};

var fontMoreLess = function fontMoreLess(size) {
  switch (size) {
    case Sizes$5.small:
      return '10px';

    case Sizes$5.medium:
      return '15px';

    case Sizes$5.big:
      return '22px';

    default:
      return '15px';
  }
};

var Container$6 = styled.div(_templateObject$b(), function (props) {
  return props.disabled ? '0.5' : '1';
}, function (props) {
  return props.size ? widthBtnMoreLess(props.size) : '30px';
}, function (props) {
  return props.size ? fontMoreLess(props.size) : '15px';
}, function (props) {
  return props.size ? heightBtnMoreLess(props.size) : '30px';
}, colors.gray20, function (props) {
  return props.noLess ? '0.2' : '1';
}, function (props) {
  return props.disabled || props.noLess ? 'default' : 'pointer';
}, function (props) {
  return props.noMore ? '0.2' : '1';
}, function (props) {
  return props.disabled || props.noMore ? 'default' : 'pointer';
}, function (props) {
  return props.size ? widthValueMoreLess(props.size, props.value) : '15px';
}, function (props) {
  return props.size ? fontMoreLess(props.size) : '15px';
}, colors.gray20);

var MoreLess = function MoreLess(_ref) {
  var size = _ref.size,
      disabled = _ref.disabled,
      value = _ref.value,
      limit = _ref.limit,
      minimum = _ref.minimum,
      more = _ref.more,
      less = _ref.less,
      _onChange = _ref.onChange;

  var _useState = useState(false),
      noLess = _useState[0],
      setNoLess = _useState[1];

  var _useState2 = useState(false),
      noMore = _useState2[0],
      setNoMore = _useState2[1];

  useEffect(function () {
    if (minimum && value <= minimum || value <= 0) {
      setNoLess(true);
    } else {
      setNoLess(false);
    }
  }, [minimum, value]);
  useEffect(function () {
    if (limit && value >= limit) {
      setNoMore(true);
    } else {
      setNoMore(false);
    }
  }, [limit, value]);
  return React$2.createElement(Container$6, {
    limit: limit,
    minimum: minimum,
    value: value,
    size: size,
    disabled: disabled,
    noLess: noLess,
    noMore: noMore
  }, React$2.createElement("div", {
    className: "btn left",
    onClick: function onClick() {
      return !disabled ? less ? noLess ? null : less() : null : null;
    }
  }, React$2.createElement(FontAwesomeIcon, {
    icon: faMinus
  })), React$2.createElement("input", {
    value: value.toString(),
    type: "number",
    onChange: function onChange(event) {
      return _onChange ? _onChange(Number(event.target.value)) : null;
    },
    disabled: disabled || !_onChange
  }), React$2.createElement("div", {
    className: "btn right",
    onClick: function onClick() {
      return !disabled ? noMore ? null : more ? more() : null : null;
    }
  }, React$2.createElement(FontAwesomeIcon, {
    icon: faPlus
  })));
};

function _templateObject2$9() {
  var data = _taggedTemplateLiteralLoose(["\n    background-color: ", ";\n    padding: 12px 25px;\n    border-radius: 30px;\n    border: 1px solid ", ";\n    width: ", ";\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n\n    :hover {\n        background-color: ", ";\n    }\n\n    span {\n        margin-left: 15px;\n        font-size: 15px;\n        color: ", ";\n    }\n"]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteralLoose(["\n    padding: 20px;\n    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.16);\n    background-color: ", ";\n    border-radius: 30px;\n    position: relative;\n\n    width: ", ";\n\n    .loading-card {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: rgba(255,255,255,.8);\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        border-radius: 30px;\n        z-index: 2;\n        position: absolute;\n    }\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var Shadow = styled.div(_templateObject$c(), colors.white, function (props) {
  if (props.width) {
    if (typeof props.width === 'string') {
      return props.width.replace('%', '') + "%";
    } else {
      return props.width + "px";
    }
  }

  return '100%';
});
var Button$1 = styled.a(_templateObject2$9(), colors.card, colors.default30, function (props) {
  if (props.width) {
    if (typeof props.width === 'string') {
      return props.width.replace('%', '') + "%";
    } else {
      return props.width + "px";
    }
  }

  return '100%';
}, colors.default10, function (props) {
  return props.colorText ? props.colorText : colors.brandDark;
});

var Types = {
  shadow: 'shadow',
  button: 'button'
};

var Card = function Card(_ref) {
  var children = _ref.children,
      width = _ref.width,
      type = _ref.type,
      style = _ref.style,
      icon = _ref.icon,
      sizeIcon = _ref.sizeIcon,
      colorIcon = _ref.colorIcon,
      text = _ref.text,
      colorText = _ref.colorText,
      onClick = _ref.onClick,
      loading = _ref.loading,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "width", "type", "style", "icon", "sizeIcon", "colorIcon", "text", "colorText", "onClick", "loading"]);

  function renderShadow() {
    return React$2.createElement(Shadow, {
      width: width,
      style: style
    }, loading && React$2.createElement("div", {
      className: "loading-card"
    }, React$2.createElement(Loader, null)), children);
  }

  function renderButton() {
    return React$2.createElement(Button$1, {
      style: style,
      colorText: colorText,
      onClick: onClick,
      href: rest.href,
      width: width
    }, icon && React$2.createElement(React$2.Fragment, null, React$2.createElement(FontAwesomeIcon, {
      icon: icon,
      color: colorIcon ? colorIcon : colors.brandDark,
      size: sizeIcon ? sizeIcon : 'lg'
    })), React$2.createElement("span", null, text));
  }

  switch (type) {
    case Types.shadow:
      return renderShadow();

    case Types.button:
      return renderButton();

    default:
      return React$2.createElement("div", null);
  }
};

function _templateObject$d() {
  var data = _taggedTemplateLiteralLoose(["\n    display: flex;\n    flex-direction: column;\n\n    input {\n        outline: none;\n        padding: 7px 15px;\n        border-radius: 20px;\n        border: 1px solid\n            ", ";\n        color: ", ";\n        cursor: pointer;\n\n        background-color: ", ";\n\n        font-weight: bold;\n\n        &::placeholder {\n            color: ", ";\n        }\n    }\n\n    span {\n        font-size: 14px;\n        color: ", ";\n        margin-left: 15px;\n        margin-bottom: 3px;\n    }\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var Container$7 = styled.div(_templateObject$d(), function (props) {
  return props.brand ? colors.brandLight : colors.gray10;
}, function (props) {
  return props.brand ? colors.brand10 : colors.gray20;
}, function (props) {
  return props.brand ? colors.brandLight : colors.white;
}, function (props) {
  return props.brand ? colors.brandTransparent : colors.default10;
}, function (props) {
  if (props.labelColor) {
    return props.labelColor;
  }

  return colors.brand10;
});

function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e["default"]:e}var React=_interopDefault(React$2);function _defaults2(e,t){for(var n=Object.getOwnPropertyNames(t),a=0;a<n.length;a++){var i=n[a],r=Object.getOwnPropertyDescriptor(t,i);r&&r.configurable&&e[i]===undefined&&Object.defineProperty(e,i,r);}return e}function _extends$1(){return (_extends$1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);}return e}).apply(this,arguments)}function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),_defaults2(e.prototype.constructor=e,t);}function _objectWithoutPropertiesLoose$2(e,t){if(null==e)return {};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],0<=t.indexOf(n)||(i[n]=e[n]);return i}function _assertThisInitialized$1(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var invariant=function(e,t,n,a,i,r,o,s){if(!e){var l;if(t===undefined)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {var u=[n,a,i,r,o,s],c=0;(l=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation";}throw l.framesToPop=1,l}},invariant_1=invariant;function setInputSelection(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else {var a=e.createTextRange();a.collapse(!0),a.moveStart("character",t),a.moveEnd("character",n-t),a.select();}}function getInputSelection(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else {var a=document.selection.createRange();a.parentElement()===e&&(t=-a.moveStart("character",-e.value.length),n=-a.moveEnd("character",-e.value.length));}return {start:t,end:n,length:n-t}}var defaultFormatChars={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},defaultMaskChar="_";function parseMask(e,t,n){var a="",i="",r=null,o=[];if(t===undefined&&(t=defaultMaskChar),null==n&&(n=defaultFormatChars),!e||"string"!=typeof e)return {maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var s=!1;return e.split("").forEach(function(e){s=!s&&"\\"===e||(s||!n[e]?(o.push(a.length),a.length===o.length-1&&(i+=e)):r=a.length+1,a+=e,!1);}),{maskChar:t,formatChars:n,prefix:i,mask:a,lastEditablePosition:r,permanents:o}}function isPermanentCharacter(e,t){return -1!==e.permanents.indexOf(t)}function isAllowedCharacter(e,t,n){var a=e.mask,i=e.formatChars;if(!n)return !1;if(isPermanentCharacter(e,t))return a[t]===n;var r=i[a[t]];return new RegExp(r).test(n)}function isEmpty(n,e){return e.split("").every(function(e,t){return isPermanentCharacter(n,t)||!isAllowedCharacter(n,t,e)})}function getFilledLength(e,t){var n=e.maskChar,a=e.prefix;if(!n){for(;t.length>a.length&&isPermanentCharacter(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=a.length,r=t.length;r>=a.length;r--){var o=t[r];if(!isPermanentCharacter(e,r)&&isAllowedCharacter(e,r,o)){i=r+1;break}}return i}function isFilled(e,t){return getFilledLength(e,t)===e.mask.length}function formatValue(e,t){var n=e.maskChar,a=e.mask,i=e.prefix;if(!n){for((t=insertString(e,"",t,0)).length<i.length&&(t=i);t.length<a.length&&isPermanentCharacter(e,t.length);)t+=a[t.length];return t}if(t)return insertString(e,formatValue(e,""),t,0);for(var r=0;r<a.length;r++)isPermanentCharacter(e,r)?t+=a[r]:t+=n;return t}function clearRange(n,e,a,t){var i=a+t,r=n.maskChar,o=n.mask,s=n.prefix,l=e.split("");if(r)return l.map(function(e,t){return t<a||i<=t?e:isPermanentCharacter(n,t)?o[t]:r}).join("");for(var u=i;u<l.length;u++)isPermanentCharacter(n,u)&&(l[u]="");return a=Math.max(s.length,a),l.splice(a,i-a),e=l.join(""),formatValue(n,e)}function insertString(r,o,e,s){var l=r.mask,u=r.maskChar,c=r.prefix,t=e.split(""),h=isFilled(r,o);return !u&&s>o.length&&(o+=l.slice(o.length,s)),t.every(function(e){for(;i=e,isPermanentCharacter(r,a=s)&&i!==l[a];){if(s>=o.length&&(o+=l[s]),t=e,n=s,u&&isPermanentCharacter(r,n)&&t===u)return !0;if(++s>=l.length)return !1}var t,n,a,i;return !isAllowedCharacter(r,s,e)&&e!==u||(s<o.length?o=u||h||s<c.length?o.slice(0,s)+e+o.slice(s+1):(o=o.slice(0,s)+e+o.slice(s),formatValue(r,o)):u||(o+=e),++s<l.length)}),o}function getInsertStringLength(a,e,t,i){var r=a.mask,o=a.maskChar,n=t.split(""),s=i;return n.every(function(e){for(;n=e,isPermanentCharacter(a,t=i)&&n!==r[t];)if(++i>=r.length)return !1;var t,n;return (isAllowedCharacter(a,i,e)||e===o)&&i++,i<r.length}),i-s}function getLeftEditablePosition(e,t){for(var n=t;0<=n;--n)if(!isPermanentCharacter(e,n))return n;return null}function getRightEditablePosition(e,t){for(var n=e.mask,a=t;a<n.length;++a)if(!isPermanentCharacter(e,a))return a;return null}function getStringValue(e){return e||0===e?e+"":""}function processChange(e,t,n,a,i){var r=e.mask,o=e.prefix,s=e.lastEditablePosition,l=t,u="",c=0,h=0,f=Math.min(i.start,n.start);if(n.end>i.start?h=(c=getInsertStringLength(e,a,u=l.slice(i.start,n.end),f))?i.length:0:l.length<a.length&&(h=a.length-l.length),l=a,h){if(1===h&&!i.length)f=i.start===n.start?getRightEditablePosition(e,n.start):getLeftEditablePosition(e,n.start);l=clearRange(e,l,f,h);}return l=insertString(e,l,u,f),(f+=c)>=r.length?f=r.length:f<o.length&&!c?f=o.length:f>=o.length&&f<s&&c&&(f=getRightEditablePosition(e,f)),u||(u=null),{value:l=formatValue(e,l),enteredString:u,selection:{start:f,end:f}}}function isWindowsPhoneBrowser(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function isFunction(e){return "function"==typeof e}function getRequestAnimationFrame(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function getCancelAnimationFrame(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function defer(e){return (!!getCancelAnimationFrame()?getRequestAnimationFrame():function(){return setTimeout(e,1e3/60)})(e)}function cancelDefer(e){(getCancelAnimationFrame()||clearTimeout)(e);}var InputElement=function(c){function e(e){var f=c.call(this,e)||this;f.focused=!1,f.mounted=!1,f.previousSelection=null,f.selectionDeferId=null,f.saveSelectionLoopDeferId=null,f.saveSelectionLoop=function(){f.previousSelection=f.getSelection(),f.saveSelectionLoopDeferId=defer(f.saveSelectionLoop);},f.runSaveSelectionLoop=function(){null===f.saveSelectionLoopDeferId&&f.saveSelectionLoop();},f.stopSaveSelectionLoop=function(){null!==f.saveSelectionLoopDeferId&&(cancelDefer(f.saveSelectionLoopDeferId),f.saveSelectionLoopDeferId=null,f.previousSelection=null);},f.getInputDOMNode=function(){if(!f.mounted)return null;var e=reactDom.findDOMNode(_assertThisInitialized$1(_assertThisInitialized$1(f))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},f.getInputValue=function(){var e=f.getInputDOMNode();return e?e.value:null},f.setInputValue=function(e){var t=f.getInputDOMNode();t&&(f.value=e,t.value=e);},f.setCursorToEnd=function(){var e=getFilledLength(f.maskOptions,f.value),t=getRightEditablePosition(f.maskOptions,e);null!==t&&f.setCursorPosition(t);},f.setSelection=function(e,t,n){void 0===n&&(n={});var a=f.getInputDOMNode(),i=f.isFocused();a&&i&&(n.deferred||setInputSelection(a,e,t),null!==f.selectionDeferId&&cancelDefer(f.selectionDeferId),f.selectionDeferId=defer(function(){f.selectionDeferId=null,setInputSelection(a,e,t);}),f.previousSelection={start:e,end:t,length:Math.abs(t-e)});},f.getSelection=function(){return getInputSelection(f.getInputDOMNode())},f.getCursorPosition=function(){return f.getSelection().start},f.setCursorPosition=function(e){f.setSelection(e,e);},f.isFocused=function(){return f.focused},f.getBeforeMaskedValueChangeConfig=function(){var e=f.maskOptions,t=e.mask,n=e.maskChar,a=e.permanents,i=e.formatChars;return {mask:t,maskChar:n,permanents:a,alwaysShowMask:!!f.props.alwaysShowMask,formatChars:i}},f.isInputAutofilled=function(e,t,n,a){var i=f.getInputDOMNode();try{if(i.matches(":-webkit-autofill"))return !0}catch(r){}return !f.focused||a.end<n.length&&t.end===e.length},f.onChange=function(e){var t=_assertThisInitialized$1(_assertThisInitialized$1(f)).beforePasteState,n=_assertThisInitialized$1(_assertThisInitialized$1(f)).previousSelection,a=f.props.beforeMaskedValueChange,i=f.getInputValue(),r=f.value,o=f.getSelection();f.isInputAutofilled(i,o,r,n)&&(r=formatValue(f.maskOptions,""),n={start:0,end:0,length:0}),t&&(n=t.selection,r=t.value,o={start:n.start+i.length,end:n.start+i.length,length:0},i=r.slice(0,n.start)+i+r.slice(n.end),f.beforePasteState=null);var s=processChange(f.maskOptions,i,o,r,n),l=s.enteredString,u=s.selection,c=s.value;if(isFunction(a)){var h=a({value:c,selection:u},{value:r,selection:n},l,f.getBeforeMaskedValueChangeConfig());c=h.value,u=h.selection;}f.setInputValue(c),isFunction(f.props.onChange)&&f.props.onChange(e),f.isWindowsPhoneBrowser?f.setSelection(u.start,u.end,{deferred:!0}):f.setSelection(u.start,u.end);},f.onFocus=function(e){var t=f.props.beforeMaskedValueChange,n=f.maskOptions,a=n.mask,i=n.prefix;if(f.focused=!0,f.mounted=!0,a){if(f.value)getFilledLength(f.maskOptions,f.value)<f.maskOptions.mask.length&&f.setCursorToEnd();else {var r=formatValue(f.maskOptions,i),o=formatValue(f.maskOptions,r),s=getFilledLength(f.maskOptions,o),l=getRightEditablePosition(f.maskOptions,s),u={start:l,end:l};if(isFunction(t)){var c=t({value:o,selection:u},{value:f.value,selection:null},null,f.getBeforeMaskedValueChangeConfig());o=c.value,u=c.selection;}var h=o!==f.getInputValue();h&&f.setInputValue(o),h&&isFunction(f.props.onChange)&&f.props.onChange(e),f.setSelection(u.start,u.end);}f.runSaveSelectionLoop();}isFunction(f.props.onFocus)&&f.props.onFocus(e);},f.onBlur=function(e){var t=f.props.beforeMaskedValueChange,n=f.maskOptions.mask;if(f.stopSaveSelectionLoop(),f.focused=!1,n&&!f.props.alwaysShowMask&&isEmpty(f.maskOptions,f.value)){var a="";if(isFunction(t))a=t({value:a,selection:null},{value:f.value,selection:f.previousSelection},null,f.getBeforeMaskedValueChangeConfig()).value;var i=a!==f.getInputValue();i&&f.setInputValue(a),i&&isFunction(f.props.onChange)&&f.props.onChange(e);}isFunction(f.props.onBlur)&&f.props.onBlur(e);},f.onMouseDown=function(e){if(!f.focused&&document.addEventListener){f.mouseDownX=e.clientX,f.mouseDownY=e.clientY,f.mouseDownTime=(new Date).getTime();var r=function r(e){if(document.removeEventListener("mouseup",r),f.focused){var t=Math.abs(e.clientX-f.mouseDownX),n=Math.abs(e.clientY-f.mouseDownY),a=Math.max(t,n),i=(new Date).getTime()-f.mouseDownTime;(a<=10&&i<=200||a<=5&&i<=300)&&f.setCursorToEnd();}};document.addEventListener("mouseup",r);}isFunction(f.props.onMouseDown)&&f.props.onMouseDown(e);},f.onPaste=function(e){isFunction(f.props.onPaste)&&f.props.onPaste(e),e.defaultPrevented||(f.beforePasteState={value:f.getInputValue(),selection:f.getSelection()},f.setInputValue(""));},f.handleRef=function(e){null==f.props.children&&isFunction(f.props.inputRef)&&f.props.inputRef(e);};var t=e.mask,n=e.maskChar,a=e.formatChars,i=e.alwaysShowMask,r=e.beforeMaskedValueChange,o=e.defaultValue,s=e.value;f.maskOptions=parseMask(t,n,a),null==o&&(o=""),null==s&&(s=o);var l=getStringValue(s);if(f.maskOptions.mask&&(i||l)&&(l=formatValue(f.maskOptions,l),isFunction(r))){var u=e.value;null==e.value&&(u=o),l=r({value:l,selection:null},{value:u=getStringValue(u),selection:null},null,f.getBeforeMaskedValueChangeConfig()).value;}return f.value=l,f}_inheritsLoose(e,c);var t=e.prototype;return t.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=isWindowsPhoneBrowser(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value));},t.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,n=t.beforeMaskedValueChange,a=t.alwaysShowMask,i=t.mask,r=t.maskChar,o=t.formatChars,s=this.maskOptions,l=a||this.isFocused(),u=null!=this.props.value,c=u?getStringValue(this.props.value):this.value,h=e?e.start:null;if(this.maskOptions=parseMask(i,r,o),this.maskOptions.mask){!s.mask&&this.isFocused()&&this.runSaveSelectionLoop();var f=this.maskOptions.mask&&this.maskOptions.mask!==s.mask;if(s.mask||u||(c=this.getInputValue()),(f||this.maskOptions.mask&&(c||l))&&(c=formatValue(this.maskOptions,c)),f){var p=getFilledLength(this.maskOptions,c);(null===h||p<h)&&(h=isFilled(this.maskOptions,c)?p:getRightEditablePosition(this.maskOptions,p));}!this.maskOptions.mask||!isEmpty(this.maskOptions,c)||l||u&&this.props.value||(c="");var d={start:h,end:h};if(isFunction(n)){var m=n({value:c,selection:d},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=m.value,d=m.selection;}this.value=c;var g=this.getInputValue()!==this.value;g?(this.setInputValue(this.value),this.forceUpdate()):f&&this.forceUpdate();var v=!1;null!=d.start&&null!=d.end&&(v=!e||e.start!==d.start||e.end!==d.end),(v||g)&&this.setSelection(d.start,d.end);}else s.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate());},t.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&cancelDefer(this.selectionDeferId),this.stopSaveSelectionLoop();},t.render=function(){var t,e=this.props,n=(e.children),a=_objectWithoutPropertiesLoose$2(e,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(n){isFunction(n)||invariant_1(!1);var i=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],r=_extends$1({},a);i.forEach(function(e){return delete r[e]}),t=n(r),i.filter(function(e){return null!=t.props[e]&&t.props[e]!==a[e]}).length&&invariant_1(!1);}else t=React.createElement("input",_extends$1({ref:this.handleRef},a));var o={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(o.onChange=this.onChange,o.onPaste=this.onPaste,o.onMouseDown=this.onMouseDown),null!=a.value&&(o.value=this.value)),t=React.cloneElement(t,o)},e}(React.Component);var reactInputMask_production_min=InputElement;

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

var warning = function() {};

if (__DEV__) {
  var printWarning$2 = function printWarning(format, args) {
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

  warning = function(condition, format, args) {
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
      printWarning$2.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

function _interopDefault$1 (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React$1 = _interopDefault$1(React$2);

var invariant$2 = _interopDefault$1(browser);
var warning$1 = _interopDefault$1(warning_1);

function _defaults2$1(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
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

  return _extends$2.apply(this, arguments);
}

function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _defaults2$1(subClass, superClass);
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

function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function setInputSelection$1(input, start, end) {
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
function getInputSelection$1(input) {
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

var defaultFormatChars$1 = {
  '9': '[0-9]',
  'a': '[A-Za-z]',
  '*': '[A-Za-z0-9]'
};
var defaultMaskChar$1 = '_';

function parseMask$1 (mask, maskChar, formatChars) {
  var parsedMaskString = '';
  var prefix = '';
  var lastEditablePosition = null;
  var permanents = [];

  if (maskChar === undefined) {
    maskChar = defaultMaskChar$1;
  }

  if (formatChars == null) {
    formatChars = defaultFormatChars$1;
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
function isPermanentCharacter$1(maskOptions, pos) {
  return maskOptions.permanents.indexOf(pos) !== -1;
}
function isAllowedCharacter$1(maskOptions, pos, character) {
  var mask = maskOptions.mask,
      formatChars = maskOptions.formatChars;

  if (!character) {
    return false;
  }

  if (isPermanentCharacter$1(maskOptions, pos)) {
    return mask[pos] === character;
  }

  var ruleChar = mask[pos];
  var charRule = formatChars[ruleChar];
  return new RegExp(charRule).test(character);
}
function isEmpty$1(maskOptions, value) {
  return value.split('').every(function (character, i) {
    return isPermanentCharacter$1(maskOptions, i) || !isAllowedCharacter$1(maskOptions, i, character);
  });
}
function getFilledLength$1(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    while (value.length > prefix.length && isPermanentCharacter$1(maskOptions, value.length - 1)) {
      value = value.slice(0, value.length - 1);
    }

    return value.length;
  }

  var filledLength = prefix.length;

  for (var i = value.length; i >= prefix.length; i--) {
    var character = value[i];
    var isEnteredCharacter = !isPermanentCharacter$1(maskOptions, i) && isAllowedCharacter$1(maskOptions, i, character);

    if (isEnteredCharacter) {
      filledLength = i + 1;
      break;
    }
  }

  return filledLength;
}
function isFilled$1(maskOptions, value) {
  return getFilledLength$1(maskOptions, value) === maskOptions.mask.length;
}
function formatValue$1(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    value = insertString$1(maskOptions, '', value, 0);

    if (value.length < prefix.length) {
      value = prefix;
    }

    while (value.length < mask.length && isPermanentCharacter$1(maskOptions, value.length)) {
      value += mask[value.length];
    }

    return value;
  }

  if (value) {
    var emptyValue = formatValue$1(maskOptions, '');
    return insertString$1(maskOptions, emptyValue, value, 0);
  }

  for (var i = 0; i < mask.length; i++) {
    if (isPermanentCharacter$1(maskOptions, i)) {
      value += mask[i];
    } else {
      value += maskChar;
    }
  }

  return value;
}
function clearRange$1(maskOptions, value, start, len) {
  var end = start + len;
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;
  var arrayValue = value.split('');

  if (!maskChar) {
    // remove any permanent chars after clear range, they will be added back by formatValue
    for (var i = end; i < arrayValue.length; i++) {
      if (isPermanentCharacter$1(maskOptions, i)) {
        arrayValue[i] = '';
      }
    }

    start = Math.max(prefix.length, start);
    arrayValue.splice(start, end - start);
    value = arrayValue.join('');
    return formatValue$1(maskOptions, value);
  }

  return arrayValue.map(function (character, i) {
    if (i < start || i >= end) {
      return character;
    }

    if (isPermanentCharacter$1(maskOptions, i)) {
      return mask[i];
    }

    return maskChar;
  }).join('');
}
function insertString$1(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;
  var arrayInsertStr = insertStr.split('');
  var isInputFilled = isFilled$1(maskOptions, value);

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter$1(maskOptions, pos) || character === mask[pos];
  };

  var isUsableCharacter = function isUsableCharacter(character, pos) {
    return !maskChar || !isPermanentCharacter$1(maskOptions, pos) || character !== maskChar;
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

    var isAllowed = isAllowedCharacter$1(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (!isAllowed) {
      return true;
    }

    if (insertPosition < value.length) {
      if (maskChar || isInputFilled || insertPosition < prefix.length) {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition + 1);
      } else {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition);
        value = formatValue$1(maskOptions, value);
      }
    } else if (!maskChar) {
      value += insertCharacter;
    }

    insertPosition++; // stop iteration if maximum value length reached

    return insertPosition < mask.length;
  });
  return value;
}
function getInsertStringLength$1(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar;
  var arrayInsertStr = insertStr.split('');
  var initialInsertPosition = insertPosition;

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter$1(maskOptions, pos) || character === mask[pos];
  };

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter$1(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (isAllowed) {
      insertPosition++;
    } // stop iteration if maximum value length reached


    return insertPosition < mask.length;
  });
  return insertPosition - initialInsertPosition;
}
function getLeftEditablePosition$1(maskOptions, pos) {
  for (var i = pos; i >= 0; --i) {
    if (!isPermanentCharacter$1(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getRightEditablePosition$1(maskOptions, pos) {
  var mask = maskOptions.mask;

  for (var i = pos; i < mask.length; ++i) {
    if (!isPermanentCharacter$1(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getStringValue$1(value) {
  return !value && value !== 0 ? '' : value + '';
}

function processChange$1(maskOptions, value, selection, previousValue, previousSelection) {
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
    formattedEnteredStringLength = getInsertStringLength$1(maskOptions, previousValue, enteredString, cursorPosition);

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
      cursorPosition = deleteFromRight ? getRightEditablePosition$1(maskOptions, selection.start) : getLeftEditablePosition$1(maskOptions, selection.start);
    }

    newValue = clearRange$1(maskOptions, newValue, cursorPosition, removedLength);
  }

  newValue = insertString$1(maskOptions, newValue, enteredString, cursorPosition);
  cursorPosition = cursorPosition + formattedEnteredStringLength;

  if (cursorPosition >= mask.length) {
    cursorPosition = mask.length;
  } else if (cursorPosition < prefix.length && !formattedEnteredStringLength) {
    cursorPosition = prefix.length;
  } else if (cursorPosition >= prefix.length && cursorPosition < lastEditablePosition && formattedEnteredStringLength) {
    cursorPosition = getRightEditablePosition$1(maskOptions, cursorPosition);
  }

  newValue = formatValue$1(maskOptions, newValue);

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

function isWindowsPhoneBrowser$1() {
  var windows = new RegExp('windows', 'i');
  var phone = new RegExp('phone', 'i');
  var ua = navigator.userAgent;
  return windows.test(ua) && phone.test(ua);
}

function isFunction$1(value) {
  return typeof value === 'function';
}

function getRequestAnimationFrame$1() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
}

function getCancelAnimationFrame$1() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
}

function defer$1(fn) {
  var hasCancelAnimationFrame = !!getCancelAnimationFrame$1();
  var deferFn;

  if (hasCancelAnimationFrame) {
    deferFn = getRequestAnimationFrame$1();
  } else {
    deferFn = function deferFn() {
      return setTimeout(fn, 1000 / 60);
    };
  }

  return deferFn(fn);
}
function cancelDefer$1(deferId) {
  var cancelFn = getCancelAnimationFrame$1() || clearTimeout;
  cancelFn(deferId);
}

var InputElement$1 =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose$1(InputElement, _React$Component);

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
      _this.saveSelectionLoopDeferId = defer$1(_this.saveSelectionLoop);
    };

    _this.runSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId === null) {
        _this.saveSelectionLoop();
      }
    };

    _this.stopSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId !== null) {
        cancelDefer$1(_this.saveSelectionLoopDeferId);
        _this.saveSelectionLoopDeferId = null;
        _this.previousSelection = null;
      }
    };

    _this.getInputDOMNode = function () {
      if (!_this.mounted) {
        return null;
      }

      var input = reactDom.findDOMNode(_assertThisInitialized$2(_assertThisInitialized$2(_this)));
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
      var filledLength = getFilledLength$1(_this.maskOptions, _this.value);
      var pos = getRightEditablePosition$1(_this.maskOptions, filledLength);

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
        setInputSelection$1(input, start, end);
      }

      if (_this.selectionDeferId !== null) {
        cancelDefer$1(_this.selectionDeferId);
      } // deferred selection update is required for pre-Lollipop Android browser,
      // but for consistent behavior we do it for all browsers


      _this.selectionDeferId = defer$1(function () {
        _this.selectionDeferId = null;
        setInputSelection$1(input, start, end);
      });
      _this.previousSelection = {
        start: start,
        end: end,
        length: Math.abs(end - start)
      };
    };

    _this.getSelection = function () {
      var input = _this.getInputDOMNode();

      return getInputSelection$1(input);
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
      var _assertThisInitialize = _assertThisInitialized$2(_assertThisInitialized$2(_this)),
          beforePasteState = _assertThisInitialize.beforePasteState;

      var _assertThisInitialize2 = _assertThisInitialized$2(_assertThisInitialized$2(_this)),
          previousSelection = _assertThisInitialize2.previousSelection;

      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;

      var value = _this.getInputValue();

      var previousValue = _this.value;

      var selection = _this.getSelection(); // autofill replaces entire value, ignore old one
      // https://github.com/sanniassin/react-input-mask/issues/113


      if (_this.isInputAutofilled(value, selection, previousValue, previousSelection)) {
        previousValue = formatValue$1(_this.maskOptions, '');
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

      var changedState = processChange$1(_this.maskOptions, value, selection, previousValue, previousSelection);
      var enteredString = changedState.enteredString;
      var newSelection = changedState.selection;
      var newValue = changedState.value;

      if (isFunction$1(beforeMaskedValueChange)) {
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

      if (isFunction$1(_this.props.onChange)) {
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
          var emptyValue = formatValue$1(_this.maskOptions, prefix);
          var newValue = formatValue$1(_this.maskOptions, emptyValue);
          var filledLength = getFilledLength$1(_this.maskOptions, newValue);
          var cursorPosition = getRightEditablePosition$1(_this.maskOptions, filledLength);
          var newSelection = {
            start: cursorPosition,
            end: cursorPosition
          };

          if (isFunction$1(beforeMaskedValueChange)) {
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

          if (isInputValueChanged && isFunction$1(_this.props.onChange)) {
            _this.props.onChange(event);
          }

          _this.setSelection(newSelection.start, newSelection.end);
        } else if (getFilledLength$1(_this.maskOptions, _this.value) < _this.maskOptions.mask.length) {
          _this.setCursorToEnd();
        }

        _this.runSaveSelectionLoop();
      }

      if (isFunction$1(_this.props.onFocus)) {
        _this.props.onFocus(event);
      }
    };

    _this.onBlur = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var mask = _this.maskOptions.mask;

      _this.stopSaveSelectionLoop();

      _this.focused = false;

      if (mask && !_this.props.alwaysShowMask && isEmpty$1(_this.maskOptions, _this.value)) {
        var newValue = '';

        if (isFunction$1(beforeMaskedValueChange)) {
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

        if (isInputValueChanged && isFunction$1(_this.props.onChange)) {
          _this.props.onChange(event);
        }
      }

      if (isFunction$1(_this.props.onBlur)) {
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

      if (isFunction$1(_this.props.onMouseDown)) {
        _this.props.onMouseDown(event);
      }
    };

    _this.onPaste = function (event) {
      if (isFunction$1(_this.props.onPaste)) {
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
      if (_this.props.children == null && isFunction$1(_this.props.inputRef)) {
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
    _this.maskOptions = parseMask$1(_mask, _maskChar, _formatChars);

    if (defaultValue == null) {
      defaultValue = '';
    }

    if (_value == null) {
      _value = defaultValue;
    }

    var _newValue = getStringValue$1(_value);

    if (_this.maskOptions.mask && (_alwaysShowMask || _newValue)) {
      _newValue = formatValue$1(_this.maskOptions, _newValue);

      if (isFunction$1(_beforeMaskedValueChange)) {
        var oldValue = props.value;

        if (props.value == null) {
          oldValue = defaultValue;
        }

        oldValue = getStringValue$1(oldValue);

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

    this.isWindowsPhoneBrowser = isWindowsPhoneBrowser$1();

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
    var newValue = hasValue ? getStringValue$1(this.props.value) : this.value;
    var cursorPosition = previousSelection ? previousSelection.start : null;
    this.maskOptions = parseMask$1(mask, maskChar, formatChars);

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
      newValue = formatValue$1(this.maskOptions, newValue);
    }

    if (isMaskChanged) {
      var filledLength = getFilledLength$1(this.maskOptions, newValue);

      if (cursorPosition === null || filledLength < cursorPosition) {
        if (isFilled$1(this.maskOptions, newValue)) {
          cursorPosition = filledLength;
        } else {
          cursorPosition = getRightEditablePosition$1(this.maskOptions, filledLength);
        }
      }
    }

    if (this.maskOptions.mask && isEmpty$1(this.maskOptions, newValue) && !showEmpty && (!hasValue || !this.props.value)) {
      newValue = '';
    }

    var newSelection = {
      start: cursorPosition,
      end: cursorPosition
    };

    if (isFunction$1(beforeMaskedValueChange)) {
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
      cancelDefer$1(this.selectionDeferId);
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
        restProps = _objectWithoutPropertiesLoose$3(_this$props2, ["mask", "alwaysShowMask", "maskChar", "formatChars", "inputRef", "beforeMaskedValueChange", "children"]);

    var inputElement;
    process.env.NODE_ENV !== "production" ? warning$1( // parse mask to test against actual mask prop as this.maskOptions
    // will be updated later in componentDidUpdate
    !restProps.maxLength || !parseMask$1(mask, maskChar, formatChars).mask, 'react-input-mask: maxLength property shouldn\'t be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length.') : void 0;

    if (children) {
      !isFunction$1(children) ? process.env.NODE_ENV !== "production" ? invariant$2(false, 'react-input-mask: children must be a function') : invariant$2(false) : void 0;
      var controlledProps = ['onChange', 'onPaste', 'onMouseDown', 'onFocus', 'onBlur', 'value', 'disabled', 'readOnly'];

      var childrenProps = _extends$2({}, restProps);

      controlledProps.forEach(function (propId) {
        return delete childrenProps[propId];
      });
      inputElement = children(childrenProps);
      var conflictProps = controlledProps.filter(function (propId) {
        return inputElement.props[propId] != null && inputElement.props[propId] !== restProps[propId];
      });
      !!conflictProps.length ? process.env.NODE_ENV !== "production" ? invariant$2(false, "react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: " + conflictProps.join(', ')) : invariant$2(false) : void 0;
      process.env.NODE_ENV !== "production" ? warning$1(!inputRef, 'react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead') : void 0;
    } else {
      inputElement = React$1.createElement("input", _extends$2({
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

    inputElement = React$1.cloneElement(inputElement, changedProps);
    return inputElement;
  };

  return InputElement;
}(React$1.Component);

var reactInputMask_development = InputElement$1;

var reactInputMask = createCommonjsModule(function (module) {
if (process.env.NODE_ENV === 'production') {
  module.exports = reactInputMask_production_min;
} else {
  module.exports = reactInputMask_development;
}
});

var Calendar = function Calendar(_ref) {
  var labelColor = _ref.labelColor,
      label = _ref.label,
      brand = _ref.brand,
      rest = _objectWithoutPropertiesLoose(_ref, ["write", "labelColor", "label", "brand"]);

  var CustomInput = React$2.forwardRef(function (props, ref) {
    return React$2.createElement(reactInputMask, {
      ref: ref,
      mask: "99/99/9999",
      onClick: props.onClick,
      value: props.value,
      readOnly: rest.readOnly,
      onChange: props.onChange,
      placeholder: rest.placeholderText
    });
  });
  return React$2.createElement(Container$7, {
    brand: brand,
    labelColor: labelColor
  }, label && React$2.createElement("span", null, label), React$2.createElement("div", null, React$2.createElement(DatePicker, Object.assign({}, rest, {
    locale: "pt-BR",
    customInput: React$2.createElement(CustomInput, {
      onClick: rest.onCalendarOpen,
      value: rest.value,
      onChange: rest.onChange
    }),
    dateFormat: "dd/MM/yyyy",
    readOnly: false,
    onChangeRaw: function onChangeRaw(event) {
      return rest.readOnly ? event.preventDefault() : null;
    }
  }))));
};

export { Accordion, ButtonMain, Calendar, Card, Checkbox, DialogComponent as Dialog, Dropdown, DropdownForm, InputLine, InputLineForm, InputMoneyForm, Loader, ModalComponent as Modal, MoreLess, Radio, Selection, TextArea, TextAreaForm };
//# sourceMappingURL=index.modern.js.map
