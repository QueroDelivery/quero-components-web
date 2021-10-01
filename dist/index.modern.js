import 'semantic-ui-css/semantic.min.css';
import React$2, { useState, useEffect } from 'react';
import styled, { css as css$1 } from 'styled-components';
import { Dropdown as Dropdown$1, Table as Table$1, TableRow, TableHeader, TableHeaderCell, TableBody, TableCell, TableFooter, Pagination, Icon as Icon$3 } from 'semantic-ui-react';
import DatePicker, { registerLocale } from 'react-datepicker';
import reactDom from 'react-dom';
import br from 'date-fns/locale/pt-BR';

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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

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

function normalizeIconArgs(icon) {
  // this has everything that it needs to be rendered which means it was probably imported
  // directly from an icon svg package
  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
    return icon;
  }

  if (parse.icon) {
    return parse.icon(icon);
  } // if the icon is null, there's nothing to do


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
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty$1({}, key, value) : {};
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
var convertCurry = convert.bind(null, React$2.createElement);

/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
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

const colors = {
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

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7;
const Sizes = {
  mini: 'mini',
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  big: 'big',
  huge: 'huge',
  massive: 'massive'
};

const size = size => {
  switch (size) {
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
      return size;
  }
};

const textSize = size => {
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

const Button = styled.button(_t || (_t = _`
  font-family: MontSerrat !important;
  position: ${0};
  background-color: ${0};
  height: ${0};
  padding: 0 20px;
  width: ${0};
  border-radius: ${0};
  cursor: pointer;
  border: ${0};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:hover {
    background-color: ${0};

    span {
      color: ${0};
    }
  }
`), props => props.loading ? 'relative' : 'initial', props => {
  if (props.colorBackground) return props.colorBackground;

  if (props.secondary || props.tertiary) {
    return colors.white;
  }

  if (props.noBorder) {
    return 'transparent';
  }

  return colors.brand30;
}, props => props.size ? size(props.size) : '40px', props => {
  if (props.width) {
    if (typeof props.width === 'string') {
      return props.width;
    }

    return `${props.width}px`;
  }

  return 'none';
}, props => {
  if (props.rectangular) return '10px';
  return '30px';
}, props => {
  if (props.secondary) {
    return `1px solid ${colors.brand10}`;
  }

  if (props.tertiary) {
    return `1px solid ${colors.gray10}`;
  }

  return 'none';
}, props => {
  if (props.hoverBackgroundColor) {
    return props.hoverBackgroundColor;
  }

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
}, props => {
  if (props.hoverTextColor) {
    return props.hoverTextColor;
  }

  if (props.secondary) {
    return colors.brand10;
  }

  if (props.backPurple) {
    return colors.white;
  }

  if (props.noBorder) {
    if (props.colorText) {
      return props.colorText;
    }

    return colors.brand10;
  }

  if (props.tertiary) {
    return colors.gray20;
  }

  return colors.brand30;
});
const TextFirst = styled.span(_t2 || (_t2 = _`
  visibility: ${0};
  color: ${0};
  font-weight: ${0};
  font-size: ${0};
  margin-right: 3.5px;
`), props => props.loading ? 'hidden' : 'visible', props => {
  if (props.colorText) {
    return props.colorText;
  }

  if (props.tertiary) {
    return colors.gray20;
  }

  return colors.brand10;
}, props => {
  if (props.firstStrong || props.strong) {
    return 'bold';
  }

  return 'normal';
}, props => props.size ? textSize(props.size) : '14px');
const TextEnd = styled.span(_t3 || (_t3 = _`
  visibility: ${0};
  color: ${0};
  font-weight: ${0};
  font-size: ${0};
`), props => props.loading ? 'hidden' : 'visible', props => {
  if (props.colorText) {
    return props.colorText;
  }

  if (props.tertiary) {
    return colors.gray20;
  }

  return colors.brand10;
}, props => {
  if (props.firstStrong || props.notStrong) {
    return 'normal';
  }

  return 'bold';
}, props => props.size ? textSize(props.size) : '14px');
const Notification = styled.button(_t4 || (_t4 = _`
  font-family: MontSerrat !important;
  background-color: ${0};
  height: 40px;
  width: 100%;
  border-radius: 30px;
  cursor: pointer;
  border: 1px solid ${0};
  outline: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:hover {
    background-color: ${0};
  }

  span {
    color: ${0};
    margin-left: 20px;
    font-weight: bold;
  }
`), colors.brand10, colors.brand30, colors.brandTransparent2, colors.brand30);
const Icon = styled.div(_t5 || (_t5 = _`
  visibility: ${0};
  margin-right: ${0};
  margin-left: ${0};
`), props => props.loading ? 'hidden' : 'visible', props => props.iconPosition === 'left' ? '10px' : '', props => props.iconPosition === 'right' ? '10px' : '');
const Amount = styled.div(_t6 || (_t6 = _`
  font-family: MontSerrat !important;
  background-color: ${0};
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${0};
  font-size: 10px;
`), colors.brand30, colors.brand10);
const LoadingContainer = styled.div(_t7 || (_t7 = _`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`));

let _$1 = t => t,
    _t$1,
    _t2$1;
const Sizes$1 = {
  mini: 'mini',
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  big: 'big',
  huge: 'huge',
  massive: 'massive'
};

const widthLoader = size => {
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

const widthBorder = size => {
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

const Container = styled.div(_t$1 || (_t$1 = _$1`
  width: 100%;
  display: flex;
  justify-content: ${0};
`), props => props.position === 'left' ? 'flex-start' : props.position === 'right' ? 'flex-end' : 'center');
const Load = styled.div(_t2$1 || (_t2$1 = _$1`
  border-width: ${0};
  border-style: solid;
  border-color: ${0};
  border-top-width: ${0};
  border-top-style: solid;
  border-top-color: ${0};

  border-radius: 50%;
  width: ${0};
  height: ${0};
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`), props => {
  if (props.size) {
    return widthBorder(props.size);
  }

  return '3.5px';
}, colors.default20, props => {
  if (props.size) {
    return widthBorder(props.size);
  }

  return '3.5px';
}, props => {
  if (props.color) {
    return props.color;
  }

  return colors.brand10;
}, props => {
  if (props.size) {
    return widthLoader(props.size);
  }

  return '2.5em';
}, props => {
  if (props.size) {
    if (props.size) {
      return widthLoader(props.size);
    }
  }

  return '2.5em';
});

const Loader = ({
  color,
  size,
  className,
  style,
  position
}) => {
  return React$2.createElement(Container, {
    position: position
  }, React$2.createElement(Load, {
    color: color,
    size: size,
    style: style,
    className: className
  }));
};

const ButtonMain = ({
  textFirst,
  textEnd,
  firstStrong,
  notStrong,
  strong,
  loading,
  secondary,
  backPurple,
  children,
  notification,
  amount,
  width,
  icon,
  customIcon,
  iconPosition: _iconPosition = 'right',
  colorIcon,
  noBorder,
  colorText,
  colorBackground,
  tertiary,
  size,
  rectangular,
  typeContent,
  hoverBackgroundColor,
  hoverTextColor,
  iconStyle,
  ...rest
}) => {
  function renderButtonNotification() {
    return React$2.createElement(Notification, Object.assign({}, rest), loading ? React$2.createElement(Loader, {
      size: "tiny"
    }) : children || React$2.createElement("div", {
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
    })), React$2.createElement("span", null, "notifica\u00E7\u00F5es")), React$2.createElement(Amount, null, amount)));
  }

  function renderButtonTypes(type) {
    switch (type) {
      case 'icon':
        return React$2.createElement("div", null, (icon || customIcon) && React$2.createElement(React$2.Fragment, null, customIcon ? React$2.createElement(Icon, {
          loading: loading
        }, customIcon) : React$2.createElement(Icon, {
          loading: loading
        }, React$2.createElement(FontAwesomeIcon, {
          icon: icon,
          color: colorIcon || colors.brand10,
          size: "lg",
          style: { ...iconStyle
          }
        }))));

      default:
        return null;
    }
  }

  function renderButton() {
    return React$2.createElement(Button, Object.assign({}, rest, {
      secondary: secondary,
      backPurple: backPurple,
      width: width,
      icon: icon,
      noBorder: noBorder,
      colorText: colorText,
      colorBackground: colorBackground,
      tertiary: tertiary,
      size: size,
      rectangular: rectangular,
      hoverBackgroundColor: hoverBackgroundColor,
      hoverTextColor: hoverTextColor,
      loading: loading
    }), children || (typeContent ? renderButtonTypes(typeContent) : React$2.createElement(React$2.Fragment, null, (icon || customIcon) && _iconPosition === 'left' && React$2.createElement(React$2.Fragment, null, customIcon ? React$2.createElement(Icon, {
      loading: loading,
      iconPosition: _iconPosition
    }, customIcon) : React$2.createElement(Icon, {
      loading: loading,
      iconPosition: _iconPosition
    }, React$2.createElement(FontAwesomeIcon, {
      icon: icon,
      color: colorIcon || colors.brand10,
      size: "lg",
      style: { ...iconStyle
      }
    }))), React$2.createElement(TextFirst, {
      firstStrong: firstStrong,
      strong: strong,
      notStrong: notStrong,
      colorText: colorText,
      tertiary: tertiary,
      size: size,
      loading: loading
    }, textFirst), React$2.createElement(TextEnd, {
      firstStrong: firstStrong,
      strong: strong,
      notStrong: notStrong,
      colorText: colorText,
      tertiary: tertiary,
      size: size,
      loading: loading
    }, textEnd), (icon || customIcon) && _iconPosition === 'right' && React$2.createElement(React$2.Fragment, null, customIcon ? React$2.createElement(Icon, {
      loading: loading,
      iconPosition: _iconPosition
    }, customIcon) : React$2.createElement(Icon, {
      loading: loading,
      iconPosition: _iconPosition
    }, React$2.createElement(FontAwesomeIcon, {
      icon: icon,
      color: colorIcon || colors.brand10,
      size: "lg",
      style: { ...iconStyle
      }
    }))))), loading && React$2.createElement(LoadingContainer, null, React$2.createElement(Loader, {
      size: "tiny"
    })));
  }

  if (notification) {
    return renderButtonNotification();
  }

  return renderButton();
};

let _$2 = t => t,
    _t$2,
    _t2$2,
    _t3$1,
    _t4$1,
    _t5$1,
    _t6$1,
    _t7$1,
    _t8;
const Background = styled.div(_t$2 || (_t$2 = _$2`
  ${0}
`), props => props.open ? css$1(_t2$2 || (_t2$2 = _$2`
          opacity: 1;
          visibility: visible;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.5);
          transition: opacity 0.25s ease;
          overflow: auto;
          display: flex;
          z-index: 999;
        `)) : css$1(_t3$1 || (_t3$1 = _$2`
          opacity: 1;
          visibility: hidden;
        `)));
const Dialog = styled.div(_t4$1 || (_t4$1 = _$2`
  font-family: MontSerrat !important;
  ${0}
`), props => props.open ? css$1(_t5$1 || (_t5$1 = _$2`
          transition: bottom 0.25s ease;
          width: 97%;
          background: ${0};
          border-top-left-radius: 30px;
          border-top-right-radius: 30px;
          margin-top: auto;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          /* overflow: auto; */

          overflow: ${0};
          padding-bottom: ${0};
          height: ${0};
          max-height: ${0};

          .box-dialog {
            position: relative;
            padding: 20px 20px 0;
            overflow: ${0};

            height: ${0};
            /* max-height: 100%; */
          }

          .loading-dialog {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(255, 255, 255, 0.8);
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 30px;
            z-index: 2;
            position: absolute;
          }
        `), colors.white, () => {
  if (props.maxHeight || props.loading) {
    return 'none';
  }

  return 'auto';
}, () => {
  if (props.maxHeight) {
    return '0';
  }

  return '20px';
}, () => {
  if (props.maxHeight) {
    return '100%';
  }

  return 'auto';
}, () => {
  if (props.maxHeight) {
    if (typeof props.maxHeight === 'string') {
      return props.maxHeight;
    }

    return `${props.maxHeight}px`;
  }

  return '100%';
}, props.loading ? 'hidden' : 'auto', props.title ? `calc(100% - ${props.sizeHeader}px)` : '100%') : css$1(_t6$1 || (_t6$1 = _$2`
          transition: bottom 0.25s ease;
          bottom: -100%;
        `)));
const Header = styled.div(_t7$1 || (_t7$1 = _$2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${0};
  font-size: 1.25rem;

  .name-icon-modal {
    display: flex;
    align-items: center;
  }

  & strong {
    padding: ${0};
    color: ${0};
  }
`), props => props.noBorder ? 'none' : `1px solid ${colors.default20}`, props => props.iconBack ? '1.25rem 0' : '1.25rem 1.875rem', colors.brand10);
const Icon$1 = styled.div(_t8 || (_t8 = _$2`
  padding: 1.25rem 1.875rem;
  cursor: pointer;
`));

const DialogComponent = ({
  open,
  children,
  onClose,
  loading,
  maxHeight,
  title,
  onBack,
  noBorder,
  closeIcon: _closeIcon = false
}) => {
  const [sizeHeader, setSizeHeader] = useState(62);
  useEffect(() => {
    if (document.getElementById('headerDialog')) {
      setSizeHeader(document.getElementById('headerDialog').clientHeight);
    }
  }, [document.getElementById('headerDialog')]);
  return React$2.createElement(Background, {
    open: open,
    onClick: event => {
      event.stopPropagation();
      onClose();
    }
  }, React$2.createElement(Dialog, {
    open: open,
    onClick: event => event.stopPropagation(),
    maxHeight: maxHeight,
    sizeHeader: sizeHeader,
    loading: loading,
    title: title
  }, title ? React$2.createElement(Header, {
    iconBack: !!onBack,
    noBorder: noBorder,
    id: "headerDialog"
  }, React$2.createElement("div", {
    className: "name-icon-modal"
  }, onBack ? React$2.createElement(Icon$1, {
    onClick: () => onBack()
  }, React$2.createElement(FontAwesomeIcon, {
    icon: faAngleLeft,
    size: "lg",
    color: colors.brand10
  })) : null, React$2.createElement("strong", null, title)), _closeIcon && React$2.createElement(Icon$1, {
    onClick: event => {
      event.stopPropagation();
      onClose();
    }
  }, React$2.createElement(FontAwesomeIcon, {
    icon: faTimes,
    style: {
      fontSize: '1.25rem'
    },
    color: colors.brand10
  }))) : null, React$2.createElement("div", {
    className: "box-dialog",
    id: "sizeBody"
  }, loading && React$2.createElement("div", {
    className: "loading-dialog"
  }, React$2.createElement(Loader, null)), children)));
};

let _$3 = t => t,
    _t$3,
    _t2$3,
    _t3$2,
    _t4$2,
    _t5$2,
    _t6$2,
    _t7$2;
const Container$1 = styled.div(_t$3 || (_t$3 = _$3`
  font-family: MontSerrat !important;
  position: relative;
  opacity: ${0};
  width: ${0};

  input {
    font-family: MontSerrat !important;
    color: ${0};
    width: 100%;
    height: 100%;
    padding-top: 20px;
    padding-left: ${0};
    padding-bottom: 5px;
    padding-right: ${0};
    border: none;
    outline: none;
    background-color: transparent;

    &::placeholder {
      color: ${0};
    }
  }

  ${0}

  input:disabled {
    background-color: transparent;
  }

  label {
    font-family: MontSerrat !important;
    position: absolute;
    bottom: 0px;
    top: 0px;
    left: 0px;
    width: 100%;
    right: 100%;
    pointer-events: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${0};

    ${0}
  }

  span {
    font-family: MontSerrat !important;
    position: absolute;
    bottom: 5px;
    left: ${0};
    transition: all 0.3s ease;

    ${0}
  }

  .icon {
    position: absolute;
    bottom: 0;
    padding: 5px 10px;
    ${0}
  }

  .icon-action {
    position: absolute;
    bottom: 0;
    padding: 5px 10px;
    ${0}
    cursor: pointer;
  }
`), props => props.disabled ? '50%' : '100%', props => {
  if (props.width) {
    if (typeof props.width === 'string') {
      return props.width;
    }

    return `${props.width}px`;
  }

  return '100%';
}, props => props.textColor ? props.textColor : colors.gray20, props => {
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
}, props => {
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
}, colors.default10, props => props.date && !props.isFieldActive ? css$1(_t2$3 || (_t2$3 = _$3`
          input::-webkit-calendar-picker-indicator {
            display: none !important;
          }

          input[type='date']::-webkit-input-placeholder {
            display: none !important;
            visibility: hidden !important;
            -webkit-appearance: none;
          }

          input[type='date']::-webkit-datetime-edit-fields-wrapper,
          input[type='date']::-webkit-datetime-edit-fields-wrapper {
            visibility: hidden;
          }
        `)) : null, props => {
  if ((props.requiredText || props.errorMessage) && props.errorColor) {
    return props.errorColor;
  }

  if (props.requiredText || props.errorMessage) {
    return colors.danger20;
  }

  return colors.gray10;
}, props => props.isFieldActive ? css$1(_t3$2 || (_t3$2 = _$3`
            color: ${0};
          `), colors.brand10) : css$1(_t4$2 || (_t4$2 = _$3`
            color: ${0};
          `), colors.gray20), props => {
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
}, props => props.isFieldActive ? css$1(_t5$2 || (_t5$2 = _$3`
            transform: translateY(-100%);
            font-size: 14px;
            color: ${0};
          `), props => {
  if ((props.requiredText || props.errorMessage) && props.errorColor) {
    return props.errorColor;
  }

  if (props.requiredText || props.errorMessage) {
    return colors.danger20;
  }

  return colors.brand10;
}) : css$1(_t6$2 || (_t6$2 = _$3`
            font-size: 16px;
            color: ${0};
          `), props => {
  if ((props.requiredText || props.errorMessage) && props.errorColor) {
    return props.errorColor;
  }

  if (props.requiredText || props.errorMessage) {
    return colors.danger20;
  }

  return colors.gray20;
}), props => props.iconPosition === 'right' && 'right: 0;', props => props.actionPosition && props.actionPosition === 'left' ? 'left: 0;' : 'right: 0;');
const LabelError = styled.span(_t7$2 || (_t7$2 = _$3`
  font-family: MontSerrat !important;
  font-size: 10px;
  margin-left: 0;
  color: ${0};
`), props => {
  if (props.errorColor) {
    return props.errorColor;
  }

  return colors.danger20;
});

const InputLine = ({
  containerStyle,
  label,
  labelStyle,
  errorMessage,
  width,
  textColor,
  inputRef,
  name,
  icon,
  iconPosition,
  iconColor,
  action,
  ...rest
}) => {
  const [isFieldActive, setIsFieldActive] = useState(false);
  useEffect(() => {
    if (rest.value) {
      if (!isFieldActive) {
        setIsFieldActive(true);
      }
    }
  }, [rest.value]);

  const handleFocus = () => {
    if (!isFieldActive) {
      setIsFieldActive(true);
    }
  };

  const handleBlur = () => {
    if (isFieldActive && !rest.value) {
      setIsFieldActive(false);
    }

    if (rest.onBlur) {
      setImmediate(rest.onBlur);
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
    icon: !!icon,
    iconPosition: iconPosition,
    action: action,
    actionPosition: action === null || action === void 0 ? void 0 : action.position,
    date: rest.type === 'date'
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
  })), React$2.createElement("label", null, React$2.createElement("span", {
    style: labelStyle
  }, label))), errorMessage ? React$2.createElement(LabelError, null, errorMessage) : null);
};

const InputLineForm = ({
  register,
  errors,
  validate,
  name,
  required,
  values,
  limit,
  minimum,
  msgErrorValidate,
  ...rest
}) => {
  var _rest$action;

  const [isFieldActive, setIsFieldActive] = useState(false);
  const [message, setMessage] = useState('');
  const value = values ? values(name) || rest.defaultValue : rest.value;
  useEffect(() => {
    if (value) {
      if (!isFieldActive) {
        setIsFieldActive(true);
      }
    }
  }, [value]);

  const handleFocus = () => {
    if (!isFieldActive) {
      setIsFieldActive(true);
    }
  };

  const handleBlur = () => {
    if (isFieldActive && !value) {
      setIsFieldActive(false);
    }

    if (rest.onBlur) {
      setImmediate(rest.onBlur);
    }
  };

  const validadeRegister = valueRegister => {
    let result = true;
    let mensagem = '';

    if (validate) {
      if (validate(valueRegister)) {
        mensagem = validate(valueRegister);
        result = false;
      }
    }

    if (limit) {
      if (valueRegister.length > limit) {
        mensagem = msgErrorValidate ? `${msgErrorValidate}` : `${limit} caracteres permitidos.`;
        result = false;
      }
    }

    if (minimum) {
      if (valueRegister.length < minimum) {
        mensagem = msgErrorValidate ? `${msgErrorValidate}` : `${rest.label || name} deve ter ${minimum} ou mais caracteres.`;
        result = false;
      }
    }

    setMessage(mensagem);
    return result;
  };

  return React$2.createElement("div", {
    style: {
      paddingBottom: message || errors ? 0 : 20
    }
  }, React$2.createElement(Container$1, {
    isFieldActive: isFieldActive,
    requiredText: !!(errors && errors.type === 'required'),
    errorMessage: errors,
    containerStyle: rest.containerStyle,
    width: rest.width,
    disabled: rest.disabled,
    style: rest.containerStyle,
    textColor: rest.textColor,
    icon: !!rest.icon,
    iconPosition: rest.iconPosition,
    action: rest.action,
    actionPosition: (_rest$action = rest.action) === null || _rest$action === void 0 ? void 0 : _rest$action.position,
    date: rest.type === 'date'
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
      required,
      validate: validadeRegister
    }) : null
  })), React$2.createElement("label", null, React$2.createElement("span", {
    style: rest.labelStyle
  }, rest.label))), errors ? React$2.createElement(LabelError, null, errors.type === 'required' ? 'Obrigatório' : `${message}`) : null);
};

let _$4 = t => t,
    _t$4,
    _t2$4,
    _t3$3,
    _t4$3,
    _t5$3,
    _t6$3,
    _t7$3,
    _t8$1,
    _t9;
const Sizes$2 = {
  mini: 'mini',
  tiny: 'tiny',
  small: 'small',
  large: 'large',
  fullscreen: 'fullscreen'
};

const sizeWidth = size => {
  switch (size) {
    case Sizes$2.mini:
      return '35%';

    case Sizes$2.tiny:
      return '45%';

    case Sizes$2.small:
      return '55%';

    case Sizes$2.large:
      return '65%';

    case Sizes$2.fullscreen:
      return '95%';

    default:
      return size;
  }
};

const Background$1 = styled.div(_t$4 || (_t$4 = _$4`
  ${0}
`), props => props.open ? css$1(_t2$4 || (_t2$4 = _$4`
          opacity: 1;
          visibility: visible;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.5);
          transition: opacity 0.25s ease;
          overflow: auto;
          padding: 40px 0;
          display: flex;
          z-index: 999;
        `)) : css$1(_t3$3 || (_t3$3 = _$4`
          opacity: 1;
          visibility: hidden;
        `)));
const Modal = styled.div(_t4$3 || (_t4$3 = _$4`
  font-family: MontSerrat !important;
  transition: top 0.25s ease;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: ${0};
  margin: auto;
  background: ${0};
  border-radius: 30px;
`), props => {
  if (props.width) {
    if (typeof props.width === 'string') {
      return props.width;
    }

    return `${props.width}px`;
  }

  if (props.size) {
    return sizeWidth(props.size);
  }

  return '80%';
}, colors.white);
const Dialog$1 = styled.div(_t5$3 || (_t5$3 = _$4`
  transition: bottom 1s ease;
  width: 90%;
  background: ${0};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`), colors.white);
const Header$1 = styled.div(_t6$3 || (_t6$3 = _$4`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${0};
  font-size: 20px;

  .name-icon-modal {
    display: flex;
    align-items: center;
  }

  & strong {
    padding: ${0};
    color: ${0};
  }
`), props => props.noBorder ? 'none' : `1px solid ${colors.default20}`, props => props.iconBack ? '20px 0' : '20px 30px', colors.brand10);
const Icon$2 = styled.div(_t7$3 || (_t7$3 = _$4`
  padding: 20px 30px;
  cursor: pointer;
`));
const Body = styled.div(_t8$1 || (_t8$1 = _$4`
  padding: 20px 30px;
  height: 100%;
  position: relative;

  .loading-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    z-index: 2;
    position: absolute;
  }
`));
const Actions = styled.div(_t9 || (_t9 = _$4`
  border-top: 1px solid ${0};
  margin: 0 30px;
  padding: 20px 0;
  display: flex;
  flex-direction: row-reverse;
`), colors.default20);

const ModalComponent = ({
  open,
  title,
  children,
  actions,
  width,
  onClose,
  closeOnDimerClick,
  loading,
  onBack,
  size,
  noBorder,
  closeIcon: _closeIcon = true
}) => {
  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', event => escModal(event));
    } else {
      window.removeEventListener('keydown', event => escModal(event));
    }

    return window.removeEventListener('keydown', event => escModal(event));
  }, [open]);

  function escModal(event) {
    if (open && event.key == 'Escape' && closeOnDimerClick) {
      event.stopPropagation();
      onClose();
    }
  }

  return React$2.createElement(Background$1, {
    open: open,
    onClick: event => {
      if (closeOnDimerClick) {
        event.stopPropagation();
        onClose();
      }
    }
  }, React$2.createElement(Modal, {
    size: size,
    width: width,
    onClick: event => event.stopPropagation()
  }, React$2.createElement(Header$1, {
    iconBack: !!onBack,
    noBorder: noBorder
  }, React$2.createElement("div", {
    className: "name-icon-modal"
  }, onBack ? React$2.createElement(Icon$2, {
    onClick: () => onBack()
  }, React$2.createElement(FontAwesomeIcon, {
    icon: faAngleLeft,
    size: "lg",
    color: colors.brand10
  })) : null, React$2.createElement("strong", null, title)), _closeIcon && React$2.createElement(Icon$2, {
    onClick: event => {
      event.stopPropagation();
      onClose();
    }
  }, React$2.createElement(FontAwesomeIcon, {
    icon: faTimes,
    style: {
      fontSize: 20
    },
    color: colors.brand10
  }))), React$2.createElement(Body, null, loading && React$2.createElement("div", {
    className: "loading-modal"
  }, React$2.createElement(Loader, null)), children), actions && React$2.createElement(Actions, null, actions)));
};

let _$5 = t => t,
    _t$5,
    _t2$5,
    _t3$4,
    _t4$4,
    _t5$4,
    _t6$4,
    _t7$4;
const Label = styled.span(_t$5 || (_t$5 = _$5`
  font-family: MontSerrat !important;
  font-size: 14px;
  color: ${0};
  margin-left: 15px;
`), props => {
  if (props.errorMessage) {
    return colors.brand20;
  }

  if (props.labelColor) {
    return props.labelColor;
  }

  return colors.brand10;
});
const Container$2 = styled.div(_t2$5 || (_t2$5 = _$5`
  font-family: MontSerrat !important;
  width: ${0};
  position: relative;

  opacity: ${0};

  textarea {
    font-family: MontSerrat !important;
    color: ${0};
    resize: none;
    width: ${0};

    border-radius: 20px;
    height: ${0};

    margin: 0px;
    outline: none;
    padding: 20px;
    border-color: ${0};

    &::placeholder {
      color: ${0};
    }

    -moz-appearance: none;
    -webkit-appearance: none;
  }

  label {
    position: absolute;
    bottom: 0px;
    top: 0px;
    left: 0px;
    width: 100%;
    right: 100%;
    pointer-events: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${0};

    ${0}
  }

  textarea::-webkit-scrollbar {
    width: 7px;
    border-radius: 50px;
  }

  textarea::-webkit-scrollbar-thumb {
    background-color: ${0};
    border-radius: 50px;
  }

  textarea::-webkit-scrollbar-thumb:hover {
    background-color: ${0};
  }
`), props => props.width ? props.width : '100%', props => props.disabled ? '50%' : '100%', props => props.textColor ? props.textColor : colors.gray20, props => {
  if (props.width) {
    if (typeof props.width === 'string') {
      return props.width;
    }

    return `${props.width}px`;
  }

  return '100%';
}, props => {
  if (props.height) {
    if (typeof props.height === 'string') {
      return props.height;
    }

    return `${props.height}px`;
  }

  return '100%';
}, props => {
  if (props.errorMessage && props.errorColor) {
    return props.errorColor;
  }

  if (props.errorMessage) {
    return colors.danger20;
  }

  return colors.gray10;
}, colors.default10, props => {
  if (props.errorMessage && props.errorColor) {
    return props.errorColor;
  }

  if (props.errorMessage) {
    return colors.danger20;
  }

  return colors.gray10;
}, props => props.isFieldActive ? css$1(_t3$4 || (_t3$4 = _$5`
            color: ${0};
          `), colors.brand10) : css$1(_t4$4 || (_t4$4 = _$5`
            color: ${0};
          `), colors.gray20), colors.brand10, colors.brandTransparent2);
const LabelError$1 = styled.span(_t5$4 || (_t5$4 = _$5`
  font-family: MontSerrat !important;
  font-size: 10px;
  margin-left: 0;
  margin-top: -2px;
  color: ${0};
`), props => {
  if (props.errorColor) {
    return props.errorColor;
  }

  return colors.brand20;
});
const Footer = styled.div(_t6$4 || (_t6$4 = _$5`
  font-family: MontSerrat !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 10px;
`));
const LabelLengthInfo = styled.span(_t7$4 || (_t7$4 = _$5`
  font-size: 10px;
  color: ${0};
`), colors.gray10);

const TextArea = ({
  label,
  labelClassName,
  labelStyle,
  labelColor,
  containerStyle,
  errorMessage,
  errorColor,
  textColor,
  width,
  height,
  lengthInfo,
  ...rest
}) => {
  return React$2.createElement("div", null, label && React$2.createElement(Label, {
    style: labelStyle,
    errorMessage: errorMessage,
    labelColor: labelColor,
    className: labelClassName
  }, label), React$2.createElement(Container$2, {
    errorMessage: errorMessage,
    errorColor: errorColor,
    containerStyle: containerStyle,
    style: containerStyle,
    disabled: rest.disabled,
    textColor: textColor,
    width: width,
    height: height
  }, React$2.createElement("textarea", Object.assign({}, rest))), React$2.createElement(Footer, null, React$2.createElement(LabelError$1, {
    errorColor: errorColor
  }, errorMessage), (lengthInfo || typeof lengthInfo == 'number') && rest.maxLength ? React$2.createElement(LabelLengthInfo, null, `${typeof lengthInfo == 'number' ? lengthInfo : typeof rest.value == 'string' ? rest.value.length : 0}/${rest.maxLength} caracteres`) : null));
};

const TextAreaForm = ({
  register,
  errors,
  validate,
  name,
  required,
  limit,
  minimum,
  ...rest
}) => {
  const [message, setMessage] = useState('');
  return React$2.createElement(TextArea, Object.assign({}, rest, {
    name: name,
    errorMessage: errors ? errors.type === 'required' ? 'Obrigatório' : `${message}` : ''
  }, register({
    required,
    validate: validate && required ? value => {
      if (validate(value)) {
        setMessage(validate(value));
        return false;
      }

      setMessage('');
      return true;
    } : limit && required ? value => {
      if (value.length > limit) {
        setMessage(`${limit} caracteres permitidos.`);
        return false;
      }

      setMessage('');
      return true;
    } : minimum && required ? value => {
      if (value.length < minimum) {
        setMessage(`${name} deve ter ${minimum} ou mais caracteres.`);
        return false;
      }

      setMessage('');
      return true;
    } : null
  })));
};

let _$6 = t => t,
    _t$6;
const Sizes$3 = {
  mini: 'mini',
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  big: 'big',
  huge: 'huge',
  massive: 'massive'
};

const size$1 = size => {
  switch (size) {
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
      return size;
  }
};

const sizeChecked = size => {
  switch (size) {
    case Sizes$3.mini:
      return '8px';

    case Sizes$3.tiny:
      return '10px';

    case Sizes$3.small:
      return '11px';

    case Sizes$3.medium:
      return '13px';

    case Sizes$3.large:
      return '16px';

    case Sizes$3.big:
      return '19px';

    case Sizes$3.huge:
      return '21px';

    case Sizes$3.massive:
      return '23px';

    default:
      return size;
  }
};

const marginLeft = size => {
  switch (size) {
    case Sizes$3.mini:
      return '1px';

    case Sizes$3.tiny:
      return '1.2px';

    case Sizes$3.small:
      return '1.4px';

    case Sizes$3.medium:
      return '2px';

    case Sizes$3.large:
      return '2px';

    case Sizes$3.big:
      return '2px';

    case Sizes$3.huge:
      return '3px';

    case Sizes$3.massive:
      return '4px';

    default:
      return size;
  }
};

const labelSize = size => {
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

const marginRight = size => {
  switch (size) {
    case Sizes$3.mini:
      return '5px';

    case Sizes$3.tiny:
      return '6px';

    case Sizes$3.small:
      return '7px';

    case Sizes$3.medium:
      return '8px';

    case Sizes$3.large:
      return '9px';

    case Sizes$3.big:
      return '10px';

    case Sizes$3.huge:
      return '11px';

    case Sizes$3.massive:
      return '12px';

    default:
      return size;
  }
};

const Container$3 = styled.div(_t$6 || (_t$6 = _$6`
  font-family: MontSerrat !important;
  display: flex;
  align-items: center;

  > input {
    display: none;
  }

  label {
    font-size: ${0};
    color: ${0};
    cursor: ${0};
    opacity: ${0};
  }

  > input + div {
    position: relative;
    cursor: ${0};
    opacity: ${0};
    display: flex;
    align-items: center;

    &:before {
      content: '';
      position: absolute;
      width: ${0};
      height: ${0};
      border: 1px solid ${0};
      background: ${0};
      border-radius: 5px;
    }
    &:after {
      content: ' ';
      position: absolute;
      width: ${0};
      height: ${0};
      border: 1px solid ${0};
      background: ${0};
      border-radius: 5px;
      color: ${0};
      text-align: center;
      font-size: 12px;
    }
  }
  > input:not(:checked) + div {
    &:after {
      opacity: 0;
      transform: scale(0);
    }
  }
  > input:checked + div {
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }

  span {
    margin-left: ${0};
    margin-right: ${0};
    font-size: ${0};
    color: ${0};
    z-index: 1;
  }
`), props => {
  if (props.sizeBox) {
    return labelSize(props.sizeBox);
  }

  return '17px';
}, colors.gray20, props => props.disabled ? 'default' : 'pointer', props => props.disabled ? 0.5 : 1, props => props.disabled ? 'default' : 'pointer', props => props.disabled ? 0.5 : 1, props => {
  if (props.sizeBox) {
    return size$1(props.sizeBox);
  }

  return '17px';
}, props => {
  if (props.sizeBox) {
    return size$1(props.sizeBox);
  }

  return '17px';
}, colors.default20, colors.default20, props => {
  if (props.sizeBox) {
    return size$1(props.sizeBox);
  }

  return '17px';
}, props => {
  if (props.sizeBox) {
    return size$1(props.sizeBox);
  }

  return '17px';
}, colors.brandDark, colors.brandDark, colors.white, props => {
  if (props.sizeBox) {
    return marginLeft(props.sizeBox);
  }

  return '2.5px';
}, props => {
  if (props.sizeBox) {
    return marginRight(props.sizeBox);
  }

  return '8px';
}, props => {
  if (props.sizeBox) {
    return sizeChecked(props.sizeBox);
  }

  return '13px';
}, props => props.checked ? colors.white : colors.default20);

const Checkbox = ({
  label,
  labelStyle,
  sizeBox,
  ...rest
}) => {
  return React$2.createElement(Container$3, {
    onClick: () => !rest.disabled ? rest.onChange ? rest.onChange() : null : null,
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

let _$7 = t => t,
    _t$7;
const Sizes$4 = {
  mini: 'mini',
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  big: 'big',
  huge: 'huge',
  massive: 'massive'
};

const size$2 = size => {
  switch (size) {
    case Sizes$4.mini:
      return '10px';

    case Sizes$4.tiny:
      return '12px';

    case Sizes$4.small:
      return '14px';

    case Sizes$4.medium:
      return '17px';

    case Sizes$4.large:
      return '20px';

    case Sizes$4.big:
      return '23px';

    case Sizes$4.huge:
      return '26px';

    case Sizes$4.massive:
      return '30px';

    default:
      return size;
  }
};

const sizeChecked$1 = size => {
  switch (size) {
    case Sizes$4.mini:
      return '2px';

    case Sizes$4.tiny:
      return '4px';

    case Sizes$4.small:
      return '6px';

    case Sizes$4.medium:
      return '9px';

    case Sizes$4.large:
      return '12px';

    case Sizes$4.big:
      return '15px';

    case Sizes$4.huge:
      return '18px';

    case Sizes$4.massive:
      return '22px';

    default:
      return size;
  }
};

const labelSize$1 = size => {
  switch (size) {
    case Sizes$4.mini:
      return '10px';

    case Sizes$4.tiny:
      return '13px';

    case Sizes$4.small:
      return '14px';

    case Sizes$4.medium:
      return '16px';

    case Sizes$4.large:
      return '18px';

    case Sizes$4.big:
      return '20px';

    case Sizes$4.huge:
      return '22px';

    case Sizes$4.massive:
      return '24px';

    default:
      return size;
  }
};

const paddingLeft = size => {
  switch (size) {
    case Sizes$4.mini:
      return '15px';

    case Sizes$4.tiny:
      return '18px';

    case Sizes$4.small:
      return '20px';

    case Sizes$4.medium:
      return '25px';

    case Sizes$4.large:
      return '28px';

    case Sizes$4.big:
      return '32px';

    case Sizes$4.huge:
      return '35px';

    case Sizes$4.massive:
      return '40px';

    default:
      return size;
  }
};

const paddingTop = size => {
  switch (size) {
    case Sizes$4.mini:
      return '0px';

    case Sizes$4.tiny:
      return '0px';

    case Sizes$4.small:
      return '0px';

    case Sizes$4.medium:
      return '0px';

    case Sizes$4.large:
      return '2px';

    case Sizes$4.big:
      return '2px';

    case Sizes$4.huge:
      return '3px';

    case Sizes$4.massive:
      return '4px';

    default:
      return size;
  }
};

const topBoxBefore = size => {
  switch (size) {
    case Sizes$4.mini:
      return '5px';

    case Sizes$4.tiny:
      return '4px';

    case Sizes$4.small:
      return '3px';

    case Sizes$4.medium:
      return '1px';

    case Sizes$4.large:
      return '0px';

    case Sizes$4.big:
      return '0px';

    case Sizes$4.huge:
      return '0px';

    case Sizes$4.massive:
      return '0px';

    default:
      return size;
  }
};

const topBoxAfter = size => {
  switch (size) {
    case Sizes$4.mini:
      return '9px';

    case Sizes$4.tiny:
      return '8px';

    case Sizes$4.small:
      return '7px';

    case Sizes$4.medium:
      return '5px';

    case Sizes$4.large:
      return '4px';

    case Sizes$4.big:
      return '4px';

    case Sizes$4.huge:
      return '4px';

    case Sizes$4.massive:
      return '4px';

    default:
      return size;
  }
};

const Container$4 = styled.div(_t$7 || (_t$7 = _$7`
  font-family: MontSerrat !important;

  > input {
    display: none;
  }

  label {
    font-size: ${0};
    color: ${0};
    cursor: ${0};
    opacity: ${0};
    padding-top: ${0};
  }

  > input + div {
    position: relative;
    padding-left: ${0};
    cursor: ${0};
    opacity: ${0};
    display: flex;
    align-items: center;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: ${0};
      width: ${0};
      height: ${0};
      border: 1px solid ${0};
      background: ${0};
      border-radius: 50%;
    }
    &:after {
      content: ' ';
      position: absolute;
      left: 4px;
      top: ${0};
      width: ${0};
      height: ${0};
      border: 1px solid ${0};
      background: ${0};
      border-radius: 50%;
      color: ${0};
      text-align: center;
      font-size: 12px;
    }
  }
  > input:not(:checked) + div {
    &:after {
      opacity: 0;
      transform: scale(0);
    }
  }
  > input:checked + div {
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }
`), props => {
  if (props.sizeBox) {
    return labelSize$1(props.sizeBox);
  }

  return '17px';
}, colors.gray20, props => props.disabled ? 'default' : 'pointer', props => props.disabled ? 0.5 : 1, props => {
  if (props.sizeBox) {
    return paddingTop(props.sizeBox);
  }

  return '0px';
}, props => {
  if (props.sizeBox) {
    return paddingLeft(props.sizeBox);
  }

  return '25px';
}, props => props.disabled ? 'default' : 'pointer', props => props.disabled ? 0.5 : 1, props => {
  if (props.sizeBox) {
    return topBoxBefore(props.sizeBox);
  }

  return '1px';
}, props => {
  if (props.sizeBox) {
    return size$2(props.sizeBox);
  }

  return '17px';
}, props => {
  if (props.sizeBox) {
    return size$2(props.sizeBox);
  }

  return '17px';
}, colors.default30, colors.default20, props => {
  if (props.sizeBox) {
    return topBoxAfter(props.sizeBox);
  }

  return '5px';
}, props => {
  if (props.sizeBox) {
    return sizeChecked$1(props.sizeBox);
  }

  return '9px';
}, props => {
  if (props.sizeBox) {
    return sizeChecked$1(props.sizeBox);
  }

  return '9px';
}, colors.gray20, colors.gray20, colors.white);

const Radio = ({
  label,
  labelStyle,
  sizeBox,
  ...rest
}) => {
  return React$2.createElement(Container$4, {
    onClick: () => !rest.disabled ? rest.onChange ? rest.onChange() : null : null,
    disabled: rest.disabled,
    sizeBox: sizeBox
  }, React$2.createElement("input", Object.assign({
    type: "radio"
  }, rest)), React$2.createElement("div", null, React$2.createElement("label", {
    style: labelStyle
  }, label)));
};

let _$8 = t => t,
    _t$8;
const Container$5 = styled.div(_t$8 || (_t$8 = _$8`
  font-family: MontSerrat !important;
  width: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  padding-bottom: ${0};

  label {
    font-size: 14px;
    margin-left: 15px;
    color: ${0};
  }

  /*!
 * # Semantic UI 2.4.0 - Dropdown
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

  /*******************************
            Dropdown
*******************************/

  .ui.dropdown {
    cursor: pointer;
    position: relative;
    display: inline-block;
    outline: none;
    text-align: ${0};
    color: ${0};
    -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
    transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
    transition: box-shadow 0.1s ease, width 0.1s ease;
    transition: box-shadow 0.1s ease, width 0.1s ease,
      -webkit-box-shadow 0.1s ease;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  /*******************************
            Content
*******************************/

  /*--------------
      Menu
---------------*/

  .ui.dropdown .menu {
    cursor: auto;
    position: absolute;
    display: none;
    outline: none;
    top: 100%;
    min-width: -webkit-max-content;
    min-width: -moz-max-content;
    min-width: max-content;
    margin: 0em;
    padding: 0em 0em;
    background: #ffffff;
    font-size: 1em;
    text-shadow: none;
    text-align: left;
    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    border: 1px solid rgba(34, 36, 38, 0.15);
    border-radius: ${0};
    -webkit-transition: opacity 0.1s ease;
    transition: opacity 0.1s ease;
    z-index: 11;
    will-change: transform, opacity;
    /* border-top: ${0};
        border-left: ${0};
        border-right: ${0}; */
  }
  .ui.dropdown .menu > * {
    white-space: nowrap;
  }

  /*--------------
  Hidden Input
---------------*/

  .ui.dropdown > input:not(.search):first-child,
  .ui.dropdown > select {
    display: none !important;
  }

  /*--------------
 Dropdown Icon
---------------*/

  .ui.dropdown > .dropdown.icon {
    position: relative;
    width: auto;
    font-size: 0.85714286em;
    margin: 0em 0em 0em 1em;
  }
  .ui.dropdown .menu > .item .dropdown.icon {
    width: auto;
    float: right;
    margin: 0em 0em 0em 1em;
  }
  .ui.dropdown .menu > .item .dropdown.icon + .text {
    margin-right: 1em;
  }

  /*--------------
      Text
---------------*/

  .ui.dropdown > .text {
    display: inline-block;
    -webkit-transition: none;
    transition: none;
  }

  /*--------------
    Menu Item
---------------*/

  .ui.dropdown .menu > .item {
    position: relative;
    cursor: pointer;
    display: block;
    border: none;
    height: auto;
    text-align: left;
    border-top: none;
    line-height: 1em;
    color: ${0};
    padding: 0.78571429rem 1.14285714rem !important;
    font-size: 1rem;
    text-transform: none;
    font-weight: normal;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-touch-callout: none;
  }
  .ui.dropdown .menu > .item:first-child {
    border-top-width: 0px;
  }

  /*--------------
  Floated Content
---------------*/

  .ui.dropdown > .text > [class*='right floated'],
  .ui.dropdown .menu .item > [class*='right floated'] {
    float: right !important;
    margin-right: 0em !important;
    margin-left: 1em !important;
  }
  .ui.dropdown > .text > [class*='left floated'],
  .ui.dropdown .menu .item > [class*='left floated'] {
    float: left !important;
    margin-left: 0em !important;
    margin-right: 1em !important;
  }
  .ui.dropdown .menu .item > .icon.floated,
  .ui.dropdown .menu .item > .flag.floated,
  .ui.dropdown .menu .item > .image.floated,
  .ui.dropdown .menu .item > img.floated {
    margin-top: 0em;
  }

  /*--------------
  Menu Divider
---------------*/

  .ui.dropdown .menu > .header {
    margin: 1rem 0rem 0.75rem;
    padding: 0em 1.14285714rem;
    color: rgba(0, 0, 0, 0.85);
    font-size: 0.78571429em;
    font-weight: bold;
    text-transform: uppercase;
  }
  .ui.dropdown .menu > .divider {
    border-top: 1px solid rgba(34, 36, 38, 0.1);
    height: 0em;
    margin: 0.5em 0em;
  }
  .ui.dropdown.dropdown .menu > .input {
    width: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 1.14285714rem 0.78571429rem;
    min-width: 10rem;
  }
  .ui.dropdown .menu > .header + .input {
    margin-top: 0em;
  }
  .ui.dropdown .menu > .input:not(.transparent) input {
    padding: 0.5em 1em;
  }
  .ui.dropdown .menu > .input:not(.transparent) .button,
  .ui.dropdown .menu > .input:not(.transparent) .icon,
  .ui.dropdown .menu > .input:not(.transparent) .label {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }

  /*-----------------
  Item Description
-------------------*/

  .ui.dropdown > .text > .description,
  .ui.dropdown .menu > .item > .description {
    float: right;
    margin: 0em 0em 0em 1em;
    color: rgba(0, 0, 0, 0.4);
  }

  /*-----------------
       Message
-------------------*/

  .ui.dropdown .menu > .message {
    padding: 0.78571429rem 1.14285714rem;
    font-weight: normal;
  }
  .ui.dropdown .menu > .message:not(.ui) {
    color: rgba(0, 0, 0, 0.4);
  }

  /*--------------
    Sub Menu
---------------*/

  .ui.dropdown .menu .menu {
    top: 0% !important;
    left: 100%;
    right: auto;
    margin: 0em 0em 0em -0.5em !important;
    border-radius: 0.28571429rem !important;
    z-index: 21 !important;
  }

  /* Hide Arrow */
  .ui.dropdown .menu .menu:after {
    display: none;
  }

  /*--------------
   Sub Elements
---------------*/

  /* Icons / Flags / Labels / Image */
  .ui.dropdown > .text > .icon,
  .ui.dropdown > .text > .label,
  .ui.dropdown > .text > .flag,
  .ui.dropdown > .text > img,
  .ui.dropdown > .text > .image {
    margin-top: 0em;
  }
  .ui.dropdown .menu > .item > .icon,
  .ui.dropdown .menu > .item > .label,
  .ui.dropdown .menu > .item > .flag,
  .ui.dropdown .menu > .item > .image,
  .ui.dropdown .menu > .item > img {
    margin-top: 0em;
  }
  .ui.dropdown > .text > .icon,
  .ui.dropdown > .text > .label,
  .ui.dropdown > .text > .flag,
  .ui.dropdown > .text > img,
  .ui.dropdown > .text > .image,
  .ui.dropdown .menu > .item > .icon,
  .ui.dropdown .menu > .item > .label,
  .ui.dropdown .menu > .item > .flag,
  .ui.dropdown .menu > .item > .image,
  .ui.dropdown .menu > .item > img {
    margin-left: 0em;
    float: none;
    margin-right: 0.78571429rem;
  }

  /*--------------
     Image
---------------*/

  .ui.dropdown > .text > img,
  .ui.dropdown > .text > .image,
  .ui.dropdown .menu > .item > .image,
  .ui.dropdown .menu > .item > img {
    display: inline-block;
    vertical-align: top;
    width: auto;
    margin-top: -0.5em;
    margin-bottom: -0.5em;
    max-height: 2em;
  }

  /*******************************
            Coupling
*******************************/

  /*--------------
      Menu
---------------*/

  /* Remove Menu Item Divider */
  .ui.dropdown .ui.menu > .item:before,
  .ui.menu .ui.dropdown .menu > .item:before {
    display: none;
  }

  /* Prevent Menu Item Border */
  .ui.menu .ui.dropdown .menu .active.item {
    border-left: none;
  }

  /* Automatically float dropdown menu right on last menu item */
  .ui.menu .right.menu .dropdown:last-child .menu,
  .ui.menu .right.dropdown.item .menu,
  .ui.buttons > .ui.dropdown:last-child .menu {
    left: auto;
    right: 0em;
  }

  /*--------------
      Label
---------------*/

  /* Dropdown Menu */
  .ui.label.dropdown .menu {
    min-width: 100%;
  }

  /*--------------
     Button
---------------*/

  /* No Margin On Icon Button */
  .ui.dropdown.icon.button > .dropdown.icon {
    margin: 0em;
  }
  .ui.button.dropdown .menu {
    min-width: 100%;
  }

  /*******************************
              Types
*******************************/

  /*--------------
    Selection
---------------*/

  /* Displays like a select box */
  .ui.selection.dropdown {
    cursor: pointer;
    word-wrap: break-word;
    line-height: 1em;
    white-space: normal;
    outline: 0;
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    min-width: 14em;
    min-height: 2.71428571em;
    background: ${0};
    display: inline-block;
    padding: 0.78571429em 2.6em 0.78571429em 1.1em;
    color: ${0};
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid
      ${0};
    border-radius: ${0};
    -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
    transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
    transition: box-shadow 0.1s ease, width 0.1s ease;
    transition: box-shadow 0.1s ease, width 0.1s ease,
      -webkit-box-shadow 0.1s ease;
    border-radius: ${0};
    border-top: ${0};
    border-left: ${0};
    border-right: ${0};
  }
  .ui.selection.dropdown.visible,
  .ui.selection.dropdown.active {
    z-index: 10;
  }
  select.ui.dropdown {
    height: 38px;
    padding: 0.5em;
    border: 1px solid rgba(34, 36, 38, 0.15);
    visibility: visible;
  }
  .ui.selection.dropdown > .search.icon,
  .ui.selection.dropdown > .delete.icon,
  .ui.selection.dropdown > .dropdown.icon {
    cursor: pointer;
    position: absolute;
    width: auto;
    height: auto;
    line-height: 1.21428571em;
    top: 0.78571429em;
    right: 1em;
    z-index: 3;
    margin: -0.78571429em;
    padding: 0.91666667em;
    opacity: 0.8;
    -webkit-transition: opacity 0.1s ease;
    transition: opacity 0.1s ease;
  }

  /* Compact */
  .ui.compact.selection.dropdown {
    min-width: 0px;
  }

  /*  Selection Menu */
  .ui.selection.dropdown .menu {
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-overflow-scrolling: touch;
    border-top-width: 0px !important;
    width: auto;
    outline: none;
    margin: 0px -1px;
    min-width: calc(100% + 2px);
    width: calc(100% + 2px);
    border-radius: 0em 0em 0.28571429rem 0.28571429rem;
    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    -webkit-transition: opacity 0.1s ease;
    transition: opacity 0.1s ease;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .ui.selection.dropdown .menu:after,
  .ui.selection.dropdown .menu:before {
    display: none;
  }

  /*--------------
    Message
---------------*/

  .ui.selection.dropdown .menu > .message {
    padding: 0.78571429rem 1.14285714rem;
  }
  @media only screen and (max-width: 767px) {
    .ui.selection.dropdown .menu {
      max-height: 8.01428571rem;
    }
  }
  @media only screen and (min-width: 768px) {
    .ui.selection.dropdown .menu {
      max-height: 10.68571429rem;
    }
  }
  @media only screen and (min-width: 992px) {
    .ui.selection.dropdown .menu {
      max-height: 16.02857143rem;
    }
  }
  @media only screen and (min-width: 1920px) {
    .ui.selection.dropdown .menu {
      max-height: 21.37142857rem;
    }
  }

  /* Menu Item */
  .ui.selection.dropdown .menu > .item {
    border-top: 1px solid #fafafa;
    padding: 0.78571429rem 1.04285714rem !important;
    white-space: normal;
    word-wrap: normal;
  }

  /* User Item */
  .ui.selection.dropdown .menu > .hidden.addition.item {
    display: none;
  }

  /* Hover */
  .ui.selection.dropdown:hover {
    border-color: ${0};
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  /* Active */
  .ui.selection.active.dropdown {
    border-color: ${0};
    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
  }
  .ui.selection.active.dropdown .menu {
    border-color: ${0};
    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
  }

  /* Focus */
  .ui.selection.dropdown:focus {
    border-color: ${0};
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ui.selection.dropdown:focus .menu {
    border-color: ${0};
    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
  }

  /* Visible */
  .ui.selection.visible.dropdown > .text:not(.default) {
    font-weight: normal;
    color: ${0};
  }

  /* Visible Hover */
  .ui.selection.active.dropdown:hover {
    border-color: ${0};
    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
  }
  .ui.selection.active.dropdown:hover .menu {
    border-color: ${0};
    -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
  }

  /* Dropdown Icon */
  .ui.active.selection.dropdown > .dropdown.icon,
  .ui.visible.selection.dropdown > .dropdown.icon {
    opacity: '';
    z-index: 3;
  }

  /* Connecting Border */
  .ui.active.selection.dropdown {
    border-bottom-left-radius: 0em !important;
    border-bottom-right-radius: 0em !important;
  }

  /* Empty Connecting Border */
  .ui.active.empty.selection.dropdown {
    border-radius: 0.28571429rem !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
  .ui.active.empty.selection.dropdown .menu {
    border: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }

  /*--------------
   Searchable
---------------*/

  /* Search Selection */
  .ui.search.dropdown {
    min-width: '';
  }

  /* Search Dropdown */
  .ui.search.dropdown > input.search {
    background: none transparent !important;
    border: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    cursor: text;
    top: 0em;
    left: 1px;
    width: 100%;
    outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    padding: inherit;
    color: ${0};
    text-align: ${0};
  }

  /* Text Layering */
  .ui.search.dropdown > input.search {
    position: absolute;
    z-index: 2;
  }
  .ui.search.dropdown > .text {
    cursor: text;
    position: relative;
    left: 1px;
    z-index: 3;
  }

  /* Search Selection */
  .ui.search.selection.dropdown > input.search {
    line-height: 1.21428571em;
    padding: 0.67857143em 2.1em 0.67857143em 1em;
  }

  /* Used to size multi select input to character width */
  .ui.search.selection.dropdown > span.sizer {
    line-height: 1.21428571em;
    padding: 0.67857143em 2.1em 0.67857143em 1em;
    display: none;
    white-space: pre;
  }

  /* Active/Visible Search */
  .ui.search.dropdown.active > input.search,
  .ui.search.dropdown.visible > input.search {
    cursor: auto;
    color: ${0};
  }
  .ui.search.dropdown.active > .text,
  .ui.search.dropdown.visible > .text {
    pointer-events: none;
  }

  /* Filtered Text */
  .ui.active.search.dropdown input.search:focus + .text .icon,
  .ui.active.search.dropdown input.search:focus + .text .flag {
    opacity: 0.45;
  }
  .ui.active.search.dropdown input.search:focus + .text {
    color: rgba(115, 115, 115, 0.87) !important;
  }

  .input.search::placeholder {
    color: ${0};
  }
  /* Search Menu */
  .ui.search.dropdown .menu {
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-overflow-scrolling: touch;
  }
  @media only screen and (max-width: 767px) {
    .ui.search.dropdown .menu {
      max-height: 8.01428571rem;
    }
  }
  @media only screen and (min-width: 768px) {
    .ui.search.dropdown .menu {
      max-height: 10.68571429rem;
    }
  }
  @media only screen and (min-width: 992px) {
    .ui.search.dropdown .menu {
      max-height: 16.02857143rem;
    }
  }
  @media only screen and (min-width: 1920px) {
    .ui.search.dropdown .menu {
      max-height: 21.37142857rem;
    }
  }

  /*--------------
    Multiple
---------------*/

  /* Multiple Selection */
  .ui.multiple.dropdown {
    padding: 0.22619048em 2.1em 0.22619048em 0.35714286em;
  }
  .ui.multiple.dropdown .menu {
    cursor: auto;
  }

  /* Multiple Search Selection */
  .ui.multiple.search.dropdown,
  .ui.multiple.search.dropdown > input.search {
    cursor: text;
  }

  /* Selection Label */
  .ui.multiple.dropdown > .label {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: inline-block;
    vertical-align: top;
    white-space: normal;
    font-size: 1em;
    padding: 0.35714286em 0.78571429em;
    margin: 0.14285714rem 0.28571429rem 0.14285714rem 0.5em;
    -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;
    box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;
    border-radius: 20px;
    color: ${0};
    background-color: ${0};
  }

  /* Dropdown Icon */
  .ui.multiple.dropdown .dropdown.icon {
    margin: '';
    padding: '';
  }

  /* Text */
  .ui.multiple.dropdown > .text {
    position: static;
    padding: 0;
    max-width: 100%;
    margin: 0.45238095em 0em 0.45238095em 0.64285714em;
    line-height: 1.21428571em;
  }
  .ui.multiple.dropdown > .label ~ input.search {
    margin-left: 0.14285714em !important;
  }
  .ui.multiple.dropdown > .label ~ .text {
    display: none;
  }

  /*-----------------
  Multiple Search
-----------------*/

  /* Prompt Text */
  .ui.multiple.search.dropdown > .text {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    padding: inherit;
    margin: 0.45238095em 0em 0.45238095em 0.64285714em;
    line-height: 1.21428571em;
  }
  .ui.multiple.search.dropdown > .label ~ .text {
    display: none;
  }

  /* Search */
  .ui.multiple.search.dropdown > input.search {
    position: static;
    padding: 0;
    max-width: 100%;
    margin: 0.45238095em 0em 0.45238095em 0.64285714em;
    width: 2.2em;
    line-height: 1.21428571em;
  }

  /*--------------
     Inline
---------------*/

  .ui.inline.dropdown {
    cursor: pointer;
    display: inline-block;
    color: inherit;
  }
  .ui.inline.dropdown .dropdown.icon {
    margin: 0em 0.21428571em 0em 0.21428571em;
    vertical-align: baseline;
  }
  .ui.inline.dropdown > .text {
    font-weight: bold;
  }
  .ui.inline.dropdown .menu {
    cursor: auto;
    margin-top: 0.21428571em;
    border-radius: 0.28571429rem;
  }

  /*******************************
            States
*******************************/

  /*--------------------
        Active
----------------------*/

  /* Menu Item Active */
  .ui.dropdown .menu .active.item {
    background: transparent;
    font-weight: bold;
    color: ${0};
    -webkit-box-shadow: none;
    box-shadow: none;
    z-index: 12;
  }

  /*--------------------
        Hover
----------------------*/

  /* Menu Item Hover */
  .ui.dropdown .menu > .item:hover {
    background: rgba(0, 0, 0, 0.05);
    color: ${0};
    z-index: 13;
  }

  /*--------------------
       Loading
---------------------*/

  .ui.loading.dropdown > i.icon {
    height: 1em !important;
  }
  .ui.loading.selection.dropdown > i.icon {
    padding: 1.5em 1.28571429em !important;
  }
  .ui.loading.dropdown > i.icon:before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    margin: -0.64285714em 0em 0em -0.64285714em;
    width: 1.28571429em;
    height: 1.28571429em;
    border-radius: 500rem;
    border: 0.2em solid rgba(0, 0, 0, 0.1);
  }
  .ui.loading.dropdown > i.icon:after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    -webkit-box-shadow: 0px 0px 0px 1px transparent;
    box-shadow: 0px 0px 0px 1px transparent;
    margin: -0.64285714em 0em 0em -0.64285714em;
    width: 1.28571429em;
    height: 1.28571429em;
    -webkit-animation: dropdown-spin 0.6s linear;
    animation: dropdown-spin 0.6s linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: ${0} transparent transparent;
    border-style: solid;
    border-width: 0.2em;
  }

  /* Coupling */
  .ui.loading.dropdown.button > i.icon:before,
  .ui.loading.dropdown.button > i.icon:after {
    display: none;
  }
  @-webkit-keyframes dropdown-spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes dropdown-spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  /*--------------------
     Default Text
----------------------*/

  .ui.dropdown:not(.button) > .default.text,
  .ui.default.dropdown:not(.button) > .text {
    color: ${0};
  }
  .ui.dropdown:not(.button) > input:focus ~ .default.text,
  .ui.default.dropdown:not(.button) > input:focus ~ .text {
    color: ${0};
  }

  /*--------------------
        Loading
----------------------*/

  .ui.loading.dropdown > .text {
    -webkit-transition: none;
    transition: none;
  }

  /* Used To Check Position */
  .ui.dropdown .loading.menu {
    display: block;
    visibility: hidden;
    z-index: -1;
  }
  .ui.dropdown > .loading.menu {
    left: 0px !important;
    right: auto !important;
  }
  .ui.dropdown > .menu .loading.menu {
    left: 100% !important;
    right: auto !important;
  }

  /*--------------------
    Keyboard Select
----------------------*/

  /* Selected Item */
  .ui.dropdown.selected,
  .ui.dropdown .menu .selected.item {
    background: rgba(0, 0, 0, 0.03);
    color: ${0};
  }

  /*--------------------
    Search Filtered
----------------------*/

  /* Filtered Item */
  .ui.dropdown > .filtered.text {
    visibility: hidden;
  }
  .ui.dropdown .filtered.item {
    display: none !important;
  }

  /*--------------------
        Error
----------------------*/

  .ui.dropdown.error,
  .ui.dropdown.error > .text,
  .ui.dropdown.error > .default.text {
    color: #9f3a38;
  }
  .ui.selection.dropdown.error {
    background: ${0};
    border-color: ${0};
  }
  .ui.selection.dropdown.error:hover {
    border-color: ${0};
  }
  .ui.dropdown.error > .menu,
  .ui.dropdown.error > .menu .menu {
    border-color: ${0};
  }
  .ui.dropdown.error > .menu > .item {
    color: ${0};
  }
  .ui.multiple.selection.error.dropdown > .label {
    border-color: ${0};
  }

  /* Item Hover */
  .ui.dropdown.error > .menu > .item:hover {
    background-color: ${0};
  }

  /* Item Active */
  .ui.dropdown.error > .menu .active.item {
    background-color: ${0};
  }

  /*--------------------
        Clear
----------------------*/

  .ui.dropdown > .clear.dropdown.icon {
    opacity: 0.8;
    -webkit-transition: opacity 0.1s ease;
    transition: opacity 0.1s ease;
  }
  .ui.dropdown > .clear.dropdown.icon:hover {
    opacity: 1;
  }

  /*--------------------
        Disabled
----------------------*/

  /* Disabled */
  .ui.disabled.dropdown,
  .ui.dropdown .menu > .disabled.item {
    cursor: default;
    pointer-events: none;
    opacity: 0.45;
  }

  /*******************************
           Variations
*******************************/

  /*--------------
    Direction
---------------*/

  /* Flyout Direction */
  .ui.dropdown .menu {
    left: 0px;
  }

  /* Default Side (Right) */
  .ui.dropdown .right.menu > .menu,
  .ui.dropdown .menu .right.menu {
    left: 100% !important;
    right: auto !important;
    border-radius: 0.28571429rem !important;
  }

  /* Leftward Opening Menu */
  .ui.dropdown > .left.menu {
    left: auto !important;
    right: 0px !important;
  }
  .ui.dropdown > .left.menu .menu,
  .ui.dropdown .menu .left.menu {
    left: auto;
    right: 100%;
    margin: 0em -0.5em 0em 0em !important;
    border-radius: 0.28571429rem !important;
  }
  .ui.dropdown .item .left.dropdown.icon,
  .ui.dropdown .left.menu .item .dropdown.icon {
    width: auto;
    float: left;
    margin: 0em 0em 0em 0em;
  }
  .ui.dropdown .item .left.dropdown.icon,
  .ui.dropdown .left.menu .item .dropdown.icon {
    width: auto;
    float: left;
    margin: 0em 0em 0em 0em;
  }
  .ui.dropdown .item .left.dropdown.icon + .text,
  .ui.dropdown .left.menu .item .dropdown.icon + .text {
    margin-left: 1em;
    margin-right: 0em;
  }

  /*--------------
     Upward
---------------*/

  /* Upward Main Menu */
  .ui.upward.dropdown > .menu {
    top: auto;
    bottom: 100%;
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);
    border-radius: 0.28571429rem 0.28571429rem 0em 0em;
  }

  /* Upward Sub Menu */
  .ui.dropdown .upward.menu {
    top: auto !important;
    bottom: 0 !important;
  }

  /* Active Upward */
  .ui.simple.upward.active.dropdown,
  .ui.simple.upward.dropdown:hover {
    border-radius: 0.28571429rem 0.28571429rem 0em 0em !important;
  }
  .ui.upward.dropdown.button:not(.pointing):not(.floating).active {
    border-radius: 0.28571429rem 0.28571429rem 0em 0em;
  }

  /* Selection */
  .ui.upward.selection.dropdown .menu {
    border-top-width: 1px !important;
    border-bottom-width: 0px !important;
    -webkit-box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);
    box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  .ui.upward.selection.dropdown:hover {
    -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);
  }

  /* Active Upward */
  .ui.active.upward.selection.dropdown {
    border-radius: 0em 0em 20px 20px !important;
  }

  /* Visible Upward */
  .ui.upward.selection.dropdown.visible {
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);
    border-radius: 0em 0em 20px 20px !important;
  }

  /* Visible Hover Upward */
  .ui.upward.active.selection.dropdown:hover {
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
  }
  .ui.upward.active.selection.dropdown:hover .menu {
    -webkit-box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);
    box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);
  }

  /*--------------
     Simple
---------------*/

  /*  Selection Menu */
  .ui.scrolling.dropdown .menu,
  .ui.dropdown .scrolling.menu {
    overflow-x: hidden;
    overflow-y: auto;
  }
  .ui.scrolling.dropdown .menu {
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-overflow-scrolling: touch;
    min-width: 100% !important;
    width: auto !important;
  }
  .ui.dropdown .scrolling.menu {
    position: static;
    overflow-y: auto;
    border: none;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    margin: 0 !important;
    min-width: 100% !important;
    width: auto !important;
    border-top: 1px solid rgba(34, 36, 38, 0.15);
  }
  .ui.scrolling.dropdown .menu .item.item.item,
  .ui.dropdown .scrolling.menu > .item.item.item {
    border-top: none;
  }
  .ui.scrolling.dropdown .menu .item:first-child,
  .ui.dropdown .scrolling.menu .item:first-child {
    border-top: none;
  }
  .ui.dropdown > .animating.menu .scrolling.menu,
  .ui.dropdown > .visible.menu .scrolling.menu {
    display: block;
  }

  /* Scrollbar in IE */
  @media all and (-ms-high-contrast: none) {
    .ui.scrolling.dropdown .menu,
    .ui.dropdown .scrolling.menu {
      min-width: calc(100% - 17px);
    }
  }
  @media only screen and (max-width: 767px) {
    .ui.scrolling.dropdown .menu,
    .ui.dropdown .scrolling.menu {
      max-height: 10.28571429rem;
    }
  }
  @media only screen and (min-width: 768px) {
    .ui.scrolling.dropdown .menu,
    .ui.dropdown .scrolling.menu {
      max-height: 15.42857143rem;
    }
  }
  @media only screen and (min-width: 992px) {
    .ui.scrolling.dropdown .menu,
    .ui.dropdown .scrolling.menu {
      max-height: 20.57142857rem;
    }
  }
  @media only screen and (min-width: 1920px) {
    .ui.scrolling.dropdown .menu,
    .ui.dropdown .scrolling.menu {
      max-height: 20.57142857rem;
    }
  }

  /*--------------
     Simple
---------------*/

  /* Displays without javascript */
  .ui.simple.dropdown .menu:before,
  .ui.simple.dropdown .menu:after {
    display: none;
  }
  .ui.simple.dropdown .menu {
    position: absolute;
    display: block;
    overflow: hidden;
    top: -9999px !important;
    opacity: 0;
    width: 0;
    height: 0;
    -webkit-transition: opacity 0.1s ease;
    transition: opacity 0.1s ease;
  }
  .ui.simple.active.dropdown,
  .ui.simple.dropdown:hover {
    border-bottom-left-radius: 0em !important;
    border-bottom-right-radius: 0em !important;
  }
  .ui.simple.active.dropdown > .menu,
  .ui.simple.dropdown:hover > .menu {
    overflow: visible;
    width: auto;
    height: auto;
    top: 100% !important;
    opacity: 1;
  }
  .ui.simple.dropdown > .menu > .item:active > .menu,
  .ui.simple.dropdown:hover > .menu > .item:hover > .menu {
    overflow: visible;
    width: auto;
    height: auto;
    top: 0% !important;
    left: 100% !important;
    opacity: 1;
  }
  .ui.simple.disabled.dropdown:hover .menu {
    display: none;
    height: 0px;
    width: 0px;
    overflow: hidden;
  }

  /* Visible */
  .ui.simple.visible.dropdown > .menu {
    display: block;
  }

  /*--------------
      Fluid
---------------*/

  .ui.fluid.dropdown {
    display: block;
    width: 100%;
    min-width: 0em;
  }
  .ui.fluid.dropdown > .dropdown.icon {
    float: right;
  }

  /*--------------
    Floating
---------------*/

  .ui.floating.dropdown .menu {
    left: 0;
    right: auto;
    -webkit-box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12),
      0px 2px 10px 0px rgba(34, 36, 38, 0.15) !important;
    box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12),
      0px 2px 10px 0px rgba(34, 36, 38, 0.15) !important;
    border-radius: 0.28571429rem !important;
  }
  .ui.floating.dropdown > .menu {
    margin-top: 0.5em !important;
    border-radius: 0.28571429rem !important;
  }

  /*--------------
     Pointing
---------------*/

  .ui.pointing.dropdown > .menu {
    top: 100%;
    margin-top: 0.78571429rem;
    border-radius: 0.28571429rem;
  }
  .ui.pointing.dropdown > .menu:after {
    display: block;
    position: absolute;
    pointer-events: none;
    content: '';
    visibility: visible;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    width: 0.5em;
    height: 0.5em;
    -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);
    box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);
    background: #ffffff;
    z-index: 2;
  }
  .ui.pointing.dropdown > .menu:after {
    top: -0.25em;
    left: 50%;
    margin: 0em 0em 0em -0.25em;
  }

  /* Top Left Pointing */
  .ui.top.left.pointing.dropdown > .menu {
    top: 100%;
    bottom: auto;
    left: 0%;
    right: auto;
    margin: 1em 0em 0em;
  }
  .ui.top.left.pointing.dropdown > .menu {
    top: 100%;
    bottom: auto;
    left: 0%;
    right: auto;
    margin: 1em 0em 0em;
  }
  .ui.top.left.pointing.dropdown > .menu:after {
    top: -0.25em;
    left: 1em;
    right: auto;
    margin: 0em;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  /* Top Right Pointing */
  .ui.top.right.pointing.dropdown > .menu {
    top: 100%;
    bottom: auto;
    right: 0%;
    left: auto;
    margin: 1em 0em 0em;
  }
  .ui.top.pointing.dropdown > .left.menu:after,
  .ui.top.right.pointing.dropdown > .menu:after {
    top: -0.25em;
    left: auto !important;
    right: 1em !important;
    margin: 0em;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  /* Left Pointing */
  .ui.left.pointing.dropdown > .menu {
    top: 0%;
    left: 100%;
    right: auto;
    margin: 0em 0em 0em 1em;
  }
  .ui.left.pointing.dropdown > .menu:after {
    top: 1em;
    left: -0.25em;
    margin: 0em 0em 0em 0em;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .ui.left:not(.top):not(.bottom).pointing.dropdown > .left.menu {
    left: auto !important;
    right: 100% !important;
    margin: 0em 1em 0em 0em;
  }
  .ui.left:not(.top):not(.bottom).pointing.dropdown > .left.menu:after {
    top: 1em;
    left: auto;
    right: -0.25em;
    margin: 0em 0em 0em 0em;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  /* Right Pointing */
  .ui.right.pointing.dropdown > .menu {
    top: 0%;
    left: auto;
    right: 100%;
    margin: 0em 1em 0em 0em;
  }
  .ui.right.pointing.dropdown > .menu:after {
    top: 1em;
    left: auto;
    right: -0.25em;
    margin: 0em 0em 0em 0em;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  /* Bottom Pointing */
  .ui.bottom.pointing.dropdown > .menu {
    top: auto;
    bottom: 100%;
    left: 0%;
    right: auto;
    margin: 0em 0em 1em;
  }
  .ui.bottom.pointing.dropdown > .menu:after {
    top: auto;
    bottom: -0.25em;
    right: auto;
    margin: 0em;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

  /* Reverse Sub-Menu Direction */
  .ui.bottom.pointing.dropdown > .menu .menu {
    top: auto !important;
    bottom: 0px !important;
  }

  /* Bottom Left */
  .ui.bottom.left.pointing.dropdown > .menu {
    left: 0%;
    right: auto;
  }
  .ui.bottom.left.pointing.dropdown > .menu:after {
    left: 1em;
    right: auto;
  }

  /* Bottom Right */
  .ui.bottom.right.pointing.dropdown > .menu {
    right: 0%;
    left: auto;
  }
  .ui.bottom.right.pointing.dropdown > .menu:after {
    left: auto;
    right: 1em;
  }

  /* Upward pointing */
  .ui.pointing.upward.dropdown .menu,
  .ui.top.pointing.upward.dropdown .menu {
    top: auto !important;
    bottom: 100% !important;
    margin: 0em 0em 0.78571429rem;
    border-radius: 0.28571429rem;
  }
  .ui.pointing.upward.dropdown .menu:after,
  .ui.top.pointing.upward.dropdown .menu:after {
    top: 100% !important;
    bottom: auto !important;
    -webkit-box-shadow: 1px 1px 0px 0px rgba(34, 36, 38, 0.15);
    box-shadow: 1px 1px 0px 0px rgba(34, 36, 38, 0.15);
    margin: -0.25em 0em 0em;
  }

  /* Right Pointing Upward */
  .ui.right.pointing.upward.dropdown:not(.top):not(.bottom) .menu {
    top: auto !important;
    bottom: 0 !important;
    margin: 0em 1em 0em 0em;
  }
  .ui.right.pointing.upward.dropdown:not(.top):not(.bottom) .menu:after {
    top: auto !important;
    bottom: 0 !important;
    margin: 0em 0em 1em 0em;
    -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);
    box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);
  }

  /* Left Pointing Upward */
  .ui.left.pointing.upward.dropdown:not(.top):not(.bottom) .menu {
    top: auto !important;
    bottom: 0 !important;
    margin: 0em 0em 0em 1em;
  }
  .ui.left.pointing.upward.dropdown:not(.top):not(.bottom) .menu:after {
    top: auto !important;
    bottom: 0 !important;
    margin: 0em 0em 1em 0em;
    -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);
    box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);
  }

  /*******************************
         Theme Overrides
*******************************/

  /* Dropdown Carets */
  .ui.dropdown > .dropdown.icon {
    font-family: 'Dropdown';
    line-height: 1;
    height: 1em;
    width: 1.23em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    font-weight: normal;
    font-style: normal;
    text-align: center;
  }
  .ui.dropdown > .dropdown.icon {
    width: auto;
  }
  .ui.dropdown > .dropdown.icon:before {
    content: '\f0d7';
  }

  /* Sub Menu */
  .ui.dropdown .menu .item .dropdown.icon:before {
    content: '\f0da' /*rtl:'\f0d9'*/;
  }
  .ui.dropdown .item .left.dropdown.icon:before,
  .ui.dropdown .left.menu .item .dropdown.icon:before {
    content: '\f0d9' /*rtl:"\f0da"*/;
  }

  /* Vertical Menu Dropdown */
  .ui.vertical.menu .dropdown.item > .dropdown.icon:before {
    content: '\f0da' /*rtl:"\f0d9"*/;
  }
  .ui.dropdown > .clear.icon:before {
    content: '\f00d';
  }

  .ui.selection.active.dropdown .menu::-webkit-scrollbar {
    width: 7px;
    border-radius: 50px;
    z-index: -1px;
  }

  .ui.selection.active.dropdown .menu::-webkit-scrollbar-thumb {
    background-color: ${0};
    border-radius: 50px;
  }

  .ui.selection.active.dropdown .menu::-webkit-scrollbar-thumb:hover {
    background-color: ${0};
  }
  /* Icons for Reference (Subsetted in 2.4.0)
  .dropdown.down:before { content: "\f0d7"; }
  .dropdown.up:before { content: "\f0d8"; }
  .dropdown.left:before { content: "\f0d9"; }
  .dropdown.right:before { content: "\f0da"; }
  .dropdown.close:before { content: "\f00d"; }
*/

  /*******************************
        User Overrides
*******************************/

  small {
    margin-left: 15px;
    font-size: 10px;
    color: ${0};
  }
`), props => props.error ? '' : '20px', props => props.error ? colors.brand20 : props.colorLabel ? props.colorLabel : colors.brand10, props => props.textAlign && props.textAlign === 'center' ? 'center' : 'left', colors.gray20, props => props.line ? '0' : '0.28571429rem', props => props.line ? 'none' : '', props => props.line ? 'none' : '', props => props.line ? 'none' : '', props => props.brand ? colors.brand10 : colors.gray20, props => props.brand ? colors.brandLight : colors.white, props => props.brand ? colors.brand10 : colors.gray20, props => props.brand ? colors.brandLight : props.line ? colors.gray10 : 'rgba(34, 36, 38, 0.15)', props => props.line ? 0 : '0.28571429rem', props => props.line ? 'none' : '20px', props => props.line ? 'none' : '', props => props.line ? 'none' : '', props => props.line ? 'none' : '', props => props.brand ? colors.brandLight : colors.gray10, props => props.brand ? colors.brandTransparent : colors.gray10, props => props.error ? colors.brand20 : props.brand ? colors.brandLight : colors.gray10, props => props.error ? colors.brand20 : props.brand ? colors.brandLight : colors.gray10, props => props.error ? colors.brand20 : props.brand ? colors.brandLight : colors.gray10, props => props.brand ? colors.brandDark : colors.black, props => props.error ? colors.brand20 : props.brand ? colors.brandLight : colors.gray10, props => props.error ? colors.brand20 : props.brand ? colors.brandLight : colors.gray10, props => props.brand ? colors.brand10 : colors.gray20, props => props.textAlign && props.textAlign === 'center' ? 'center' : 'left', props => props.brand ? colors.brandDark : colors.black, props => props.brand ? colors.brandTransparent : colors.gray10, props => props.brand ? colors.brandLight : colors.gray20, props => props.brand ? colors.brand10 : colors.card, props => props.brand ? colors.brandDark : colors.black, props => props.brand ? colors.brandDark : colors.black, colors.brand10, props => props.brand ? colors.brand10 : colors.default20, props => props.brand ? colors.brand10 : colors.default20, props => props.brand ? colors.brandDark : colors.black, props => props.line ? colors.white : colors.error, colors.brand20, colors.brand20, colors.brand20, colors.brand20, colors.brand20, colors.error, colors.error, colors.brand10, colors.brandTransparent2, colors.brand20);

const Dropdown = ({
  options,
  brand,
  textAlign,
  errorMessage,
  label,
  colorLabel,
  line,
  ...rest
}) => {
  return React$2.createElement(Container$5, {
    brand: brand,
    textAlign: textAlign,
    error: errorMessage,
    colorLabel: colorLabel,
    line: line
  }, label && React$2.createElement("label", null, label), React$2.createElement(Dropdown$1, Object.assign({}, rest, {
    selection: true,
    noResultsMessage: "Nenhum resultado encontrado",
    error: !!errorMessage,
    options: options
  })), errorMessage && React$2.createElement("small", null, errorMessage));
};

const DropdownForm = ({
  value,
  clearError,
  errors,
  name,
  register,
  required,
  setValue,
  validate,
  ...rest
}) => {
  const [valueDefault, setValueDefault] = useState();
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (!valueDefault) {
      setValue(name, value);
    } else {
      setValue(name, valueDefault);
    }
  }, [valueDefault]);
  useEffect(() => {
    setValueDefault(value);
  }, [value]);
  useEffect(() => {
    if (register) {
      register({
        name
      }, {
        required,
        validate: validate && required ? value => {
          if (validate(value)) {
            setMessage(validate(value));
            return false;
          }

          setMessage('');
          return true;
        } : null
      });
    }
  }, [register]);
  return React$2.createElement(Dropdown, Object.assign({}, rest, {
    value: valueDefault,
    onChange: (_ev, data) => {
      setValueDefault(data.value);
      setValue(name, value);

      if (errors && clearError) {
        clearError(name);
      }
    },
    line: rest.line,
    errorMessage: errors ? errors.type === 'required' ? 'Obrigatório' : `${message}` : ''
  }));
};

let _$9 = t => t,
    _t$9,
    _t2$6,
    _t3$5,
    _t4$5;
const Container$6 = styled.div(_t$9 || (_t$9 = _$9`
  font-family: MontSerrat !important;
  display: flex;
  width: ${0};
  justify-content: space-between;
  background-color: ${0};
  border: 1px solid ${0};
  padding: 15px 20px;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.16);

  .icon-title {
    display: flex;
    align-items: center;
  }

  .title-subtitle {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: ${0};

    .title {
      font-size: ${0};

      color: ${0};
    }

    .subtitle {
      color: ${0};
      font-size: 12px;
    }
  }

  .value-icon {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;

    .value {
      margin-right: 20px;
      color: ${0};
    }
  }

  ${0}
`), props => {
  if (props.width) {
    if (typeof props.width === 'string') {
      return props.width;
    }

    return `${props.width}px`;
  }

  return '100%';
}, props => props.secondary ? colors.card : colors.white, colors.card, props => props.icon ? '15px' : '0', props => {
  if (props.fontSizeTitle) {
    if (typeof props.fontSizeTitle === 'string') {
      return props.fontSizeTitle;
    }

    return `${props.fontSizeTitle}px`;
  }

  return props.subtitle ? '14px' : '16px';
}, props => props.colorTitle ? props.colorTitle : `${colors.gray20}`, props => props.colorSubtitle ? props.colorSubtitle : `${colors.gray10}`, props => props.colorValue ? props.colorValue : `${colors.gray20}`, props => props.open ? css$1(_t2$6 || (_t2$6 = _$9`
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        `)) : css$1(_t3$5 || (_t3$5 = _$9`
          border-radius: 30px;
        `)));
const Body$1 = styled.div(_t4$5 || (_t4$5 = _$9`
  font-family: MontSerrat !important;
  width: ${0};
  padding: 20px;
  border: 1px solid ${0};
  border-top: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: ${0};
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16);
`), props => props.width ? `${props.width}%` : '100%', colors.card, props => props.open ? 'block' : 'none');

const Accordion = ({
  title,
  colorTitle,
  subtitle,
  colorSubtitle,
  value,
  colorValue,
  children,
  secondary,
  open,
  onChange,
  width,
  icon,
  customIcon,
  colorIcon,
  fontSizeTitle
}) => {
  return React$2.createElement(React$2.Fragment, null, React$2.createElement(Container$6, {
    colorTitle: colorTitle,
    colorSubtitle: colorSubtitle,
    colorValue: colorValue,
    secondary: secondary,
    subtitle: subtitle,
    open: open,
    onClick: () => onChange(),
    width: width,
    icon: !!(icon || customIcon),
    fontSizeTitle: fontSizeTitle
  }, React$2.createElement("div", {
    className: "icon-title"
  }, customIcon || (icon ? React$2.createElement(FontAwesomeIcon, {
    icon: icon,
    size: "lg",
    color: colorIcon || colors.brand10
  }) : null), React$2.createElement("div", {
    className: "title-subtitle"
  }, React$2.createElement("span", {
    className: "title"
  }, title), subtitle && React$2.createElement("span", {
    className: "subtitle"
  }, subtitle))), React$2.createElement("div", {
    className: "value-icon"
  }, React$2.createElement("span", {
    className: "value"
  }, value), secondary ? React$2.createElement(FontAwesomeIcon, {
    icon: open ? faAngleUp : faAngleDown,
    style: {
      fontSize: 20
    }
  }) : React$2.createElement(FontAwesomeIcon, {
    icon: open ? faAngleUp : faAngleDown,
    style: {
      fontSize: 20
    },
    color: colors.brand10
  }))), React$2.createElement(Body$1, {
    open: open,
    width: width
  }, children));
};

let _$a = t => t,
    _t$a,
    _t2$7,
    _t3$6;
const toggleWidth = 50;
const toggleHeight = 30;
const toggleGutter = 5;
const toggleRadius = toggleHeight / 2;
const toggleControlSsize = toggleHeight - toggleGutter * 2;
const Sizes$5 = {
  mini: 'mini',
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  big: 'big',
  huge: 'huge',
  massive: 'massive'
};

const widthSwitch = size => {
  switch (size) {
    case Sizes$5.mini:
      return 30;

    case Sizes$5.tiny:
      return 35;

    case Sizes$5.small:
      return 40;

    case Sizes$5.medium:
      return 50;

    case Sizes$5.large:
      return 60;

    case Sizes$5.big:
      return 70;

    case Sizes$5.huge:
      return 80;

    case Sizes$5.massive:
      return 90;

    default:
      return 50;
  }
};

const heightSwitch = size => {
  switch (size) {
    case Sizes$5.mini:
      return 20;

    case Sizes$5.tiny:
      return 22.5;

    case Sizes$5.small:
      return 25;

    case Sizes$5.medium:
      return 30;

    case Sizes$5.large:
      return 35;

    case Sizes$5.big:
      return 40;

    case Sizes$5.huge:
      return 45;

    case Sizes$5.massive:
      return 50;

    default:
      return 30;
  }
};

const sizeGutter = size => {
  switch (size) {
    case Sizes$5.mini:
      return 5;

    case Sizes$5.tiny:
      return 5;

    case Sizes$5.small:
      return 5;

    case Sizes$5.medium:
      return 5;

    case Sizes$5.large:
      return 5;

    case Sizes$5.big:
      return 5;

    case Sizes$5.huge:
      return 5;

    case Sizes$5.massive:
      return 5;

    default:
      return 5;
  }
};

const widthToggle = size => {
  switch (size) {
    case Sizes$5.mini:
      return '40px !important';

    case Sizes$5.tiny:
      return '50px !important';

    case Sizes$5.small:
      return '60px !important';

    case Sizes$5.medium:
      return '65px !important';

    case Sizes$5.large:
      return '70px !important';

    case Sizes$5.big:
      return '80px !important';

    case Sizes$5.huge:
      return '90px !important';

    case Sizes$5.massive:
      return '100px !important';

    default:
      return '65px !important';
  }
};

const fontToggle = size => {
  switch (size) {
    case Sizes$5.mini:
      return '8px !important';

    case Sizes$5.tiny:
      return '9px !important';

    case Sizes$5.small:
      return '10px !important';

    case Sizes$5.medium:
      return '11px !important';

    case Sizes$5.large:
      return '12px !important';

    case Sizes$5.big:
      return '13px !important';

    case Sizes$5.huge:
      return '14px !important';

    case Sizes$5.massive:
      return '15px !important';

    default:
      return '11px !important';
  }
};

const fontActiveInactive = size => {
  switch (size) {
    case Sizes$5.mini:
      return '7px !important';

    case Sizes$5.tiny:
      return '8px !important';

    case Sizes$5.small:
      return '9px !important';

    case Sizes$5.medium:
      return '10px !important';

    case Sizes$5.large:
      return '11px !important';

    case Sizes$5.big:
      return '12px !important';

    case Sizes$5.huge:
      return '13px !important';

    case Sizes$5.massive:
      return '14px !important';

    default:
      return '10px !important';
  }
};

const Switch = styled.label(_t$a || (_t$a = _$a`
  font-family: MontSerrat !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative !important;
  /* padding-left: ${0}; */
  /* margin-bottom: 12px; */
  cursor: ${0};
  font-size: 22px !important;
  user-select: none !important;

  input {
    position: absolute !important;
    opacity: 0 !important;
    cursor: pointer !important;
    height: 0 !important;
    width: 0 !important;
    display: none !important;
  }

  input:checked ~ .control {
    background-color: ${0};

    &:after {
      left: ${0};
    }
  }

  .control {
    height: ${0};
    width: ${0};
    border-radius: ${0};
    background-color: ${0} !important;
    transition: background-color 0.15s ease-in !important;

    &:after {
      content: '' !important;
      position: absolute !important;
      left: 5px !important;
      top: 5px !important;
      height: ${0};
      width: ${0};
      border-radius: 50px !important;
      background-color: white !important;
      transition: left 0.15s ease-in !important;
      border: 1px solid ${0} !important;
    }
  }
`), props => props.size ? `${widthSwitch(props.size)}px` : `${toggleWidth}px`, props => props.disabled ? 'normal !important' : 'pointer !important', props => props.disabled ? `${colors.brandTransparent} !important` : `${colors.brandDark} !important`, props => props.size ? `${widthSwitch(props.size) - (heightSwitch(props.size) - sizeGutter(props.size) * 2) - sizeGutter(props.size)}px !important` : `${toggleWidth - toggleControlSsize - toggleGutter}px !important`, props => props.size ? `${heightSwitch(props.size)}px !important` : `${toggleHeight}px !important`, props => props.size ? `${widthSwitch(props.size)}px !important` : `${toggleWidth}px !important`, props => props.size ? `${heightSwitch(props.size) / 2}px !important` : `${toggleRadius}px !important`, colors.card, props => props.size ? `${heightSwitch(props.size) - sizeGutter(props.size) * 2}px !important` : `${toggleControlSsize}px !important`, props => props.size ? `${heightSwitch(props.size) - sizeGutter(props.size) * 2}px !important` : `${toggleControlSsize}px !important`, colors.default10);
const Toggle = styled.div(_t2$7 || (_t2$7 = _$a`
  font-family: MontSerrat !important;
  display: flex !important;
  flex-direction: row !important;

  .btn {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    opacity: ${0};
    width: ${0};
    border: 1px solid ${0} !important;
    padding: 4px 0 !important;

    span {
      font-size: ${0};
    }
  }

  .left {
    cursor: ${0};
    background-color: ${0};
    border-top-left-radius: 20px !important;
    border-bottom-left-radius: 20px !important;
    border-right: 0 !important;
    transition: 400ms !important;

    span {
      color: ${0};
    }
  }

  .right {
    cursor: ${0};
    background-color: ${0};
    border-top-right-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
    border-left: 0 !important;
    transition: 400ms !important;

    span {
      color: ${0};
    }
  }
`), props => props.disabled ? '0.5 !important' : '1 !important', props => props.size ? widthToggle(props.size) : '65px !important', colors.card, props => props.size ? fontToggle(props.size) : '11px !important', props => props.disabled ? 'default !important' : !props.checked ? 'default !important' : 'pointer !important', props => !props.checked ? `${colors.brand10} !important` : `${colors.white} !important`, props => !props.checked ? `${colors.white} !important` : `${colors.gray20} !important`, props => props.disabled ? 'default !important' : props.checked ? 'default !important' : 'pointer !important', props => props.checked ? `${colors.brand10} !important` : `${colors.white} !important`, props => props.checked ? `${colors.white} !important` : `${colors.gray20} !important`);
const ActiveInactive = styled.div(_t3$6 || (_t3$6 = _$a`
  font-family: MontSerrat !important;
  display: flex !important;
  flex-direction: row !important;

  .btn {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    opacity: ${0};
    width: ${0};
    border: 1px solid ${0} !important;
    padding: 4px 0 !important;

    span {
      font-size: ${0};
    }
  }

  .left {
    cursor: ${0};
    background-color: ${0};
    border-top-left-radius: 20px !important;
    border-bottom-left-radius: 20px !important;
    border-right: 0 !important;
    transition: 400ms !important;

    span {
      color: ${0};
    }
  }

  .right {
    cursor: ${0};
    background-color: ${0};
    border-top-right-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
    border-left: 0 !important;
    transition: 400ms !important;

    span {
      color: ${0};
    }
  }
`), props => props.disabled ? '0.5 !important' : '1 !important', props => props.size ? widthToggle(props.size) : '70px !important', colors.card, props => props.size ? fontActiveInactive(props.size) : '10px !important', props => props.disabled ? 'default !important' : !props.checked ? 'default !important' : 'pointer !important', props => !props.checked ? `${colors.brand20} !important` : `${colors.white} !important`, props => !props.checked ? `${colors.white} !important` : `${colors.gray20} !important`, props => props.disabled ? 'default !important' : props.checked ? 'default !important' : 'pointer !important', props => props.checked ? `${colors.brandGreen} !important` : `${colors.white} !important`, props => props.checked ? `${colors.white} !important` : `${colors.gray20} !important`);

const TYPES = {
  switch: 'switch',
  toggle: 'toggle',
  activeInactive: 'activeInactive'
};

const Selection = ({
  type,
  checked,
  onChange,
  size,
  disabled,
  selectionRef
}) => {
  function renderSwitch() {
    return React$2.createElement(Switch, {
      size: size,
      ref: selectionRef,
      disabled: disabled
    }, React$2.createElement("input", {
      type: "checkbox",
      checked: checked
    }), React$2.createElement("span", {
      className: "control",
      onClick: () => !disabled ? onChange ? onChange() : null : null
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
      onClick: () => !disabled ? checked ? onChange ? onChange() : null : null : null
    }, React$2.createElement("span", null, "n\u00E3o")), React$2.createElement("div", {
      className: "btn right",
      onClick: () => !disabled ? !checked ? onChange ? onChange() : null : null : null
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
      onClick: () => !disabled ? checked ? onChange ? onChange() : null : null : null
    }, React$2.createElement("span", null, checked ? 'desativar' : 'inativo')), React$2.createElement("div", {
      className: "btn right",
      onClick: () => !disabled ? !checked ? onChange ? onChange() : null : null : null
    }, React$2.createElement("span", null, checked ? 'ativo' : 'ativar')));
  }

  switch (type) {
    case TYPES.switch:
      return renderSwitch();

    case TYPES.toggle:
      return renderToggle();

    case TYPES.activeInactive:
      return renderActiveInactive();

    default:
      return React$2.createElement("div", null);
  }
};

let _$b = t => t,
    _t$b;
const Sizes$6 = {
  small: 'small',
  medium: 'medium',
  big: 'big'
};

const widthBtnMoreLess = size => {
  switch (size) {
    case Sizes$6.small:
      return '20px';

    case Sizes$6.medium:
      return '30px';

    case Sizes$6.big:
      return '40px';

    default:
      return '30px';
  }
};

const heightBtnMoreLess = size => {
  switch (size) {
    case Sizes$6.small:
      return '20px';

    case Sizes$6.medium:
      return '30px';

    case Sizes$6.big:
      return '40px';

    default:
      return '30px';
  }
};

const widthValueMoreLess = (size, value) => {
  if (size === Sizes$6.small) {
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

  if (size === Sizes$6.medium) {
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

  if (size === Sizes$6.big) {
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

const fontMoreLess = size => {
  switch (size) {
    case Sizes$6.small:
      return '10px';

    case Sizes$6.medium:
      return '15px';

    case Sizes$6.big:
      return '22px';

    default:
      return '15px';
  }
};

const Container$7 = styled.div(_t$b || (_t$b = _$b`
  font-family: MontSerrat !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: ${0};

  .btn {
    width: ${0};
    font-size: ${0};
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${0};
    color: ${0};
  }

  .left {
    opacity: ${0};

    cursor: ${0};
  }

  .right {
    opacity: ${0};

    cursor: ${0};
  }

  input {
    text-align: center;
    width: ${0};
    font-size: ${0};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${0};
    border: none;
    outline: none;
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input:disabled {
    background-color: transparent;
  }
`), props => props.disabled ? '0.5' : '1', props => props.size ? widthBtnMoreLess(props.size) : '30px', props => props.size ? fontMoreLess(props.size) : '15px', props => props.size ? heightBtnMoreLess(props.size) : '30px', colors.gray20, props => props.noLess ? '0.2' : '1', props => props.disabled || props.noLess ? 'default' : 'pointer', props => props.noMore ? '0.2' : '1', props => props.disabled || props.noMore ? 'default' : 'pointer', props => props.size ? widthValueMoreLess(props.size, props.value) : '15px', props => props.size ? fontMoreLess(props.size) : '15px', colors.gray20);

const MoreLess = ({
  size,
  disabled,
  value,
  limit,
  minimum,
  more,
  less,
  onChange
}) => {
  const [noLess, setNoLess] = useState(false);
  const [noMore, setNoMore] = useState(false);
  const [sizeState, setSizeState] = useState('medium');
  useEffect(() => {
    if (size) {
      setSizeState(size);
    }
  }, [size]);
  useEffect(() => {
    if (minimum && value <= minimum || value <= 0) {
      setNoLess(true);
    } else {
      setNoLess(false);
    }
  }, [minimum, value]);
  useEffect(() => {
    if (limit && value >= limit) {
      setNoMore(true);
    } else {
      setNoMore(false);
    }
  }, [limit, value]);
  return React$2.createElement(Container$7, {
    limit: limit,
    minimum: minimum,
    value: value,
    size: sizeState,
    disabled: disabled,
    noLess: noLess,
    noMore: noMore
  }, React$2.createElement("div", {
    className: "btn left",
    onClick: () => !disabled ? less ? noLess ? null : less() : null : null
  }, React$2.createElement(FontAwesomeIcon, {
    icon: faMinus
  })), React$2.createElement("input", {
    value: value || value === 0 ? value.toString() : '',
    type: "number",
    onChange: event => onChange ? onChange(Number(event.target.value)) : null,
    disabled: disabled || !onChange
  }), React$2.createElement("div", {
    className: "btn right",
    onClick: () => !disabled ? noMore ? null : more ? more() : null : null
  }, React$2.createElement(FontAwesomeIcon, {
    icon: faPlus
  })));
};

let _$c = t => t,
    _t$c,
    _t2$8,
    _t3$7;
const Shadow = styled.div(_t$c || (_t$c = _$c`
  font-family: MontSerrat !important;
  box-shadow: ${0};

  border: ${0};
  padding: 1.25rem;
  background-color: ${0};
  border-radius: 1.875rem;
  position: relative;

  width: ${0};

  .loading-card {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    z-index: 2;
    position: absolute;
  }
`), props => {
  if (props.type == 'none') {
    return 'none';
  }

  if (props.type == 'border') {
    return 'none';
  }

  if (props.type == 'min-shadow') {
    return '0px 0.125rem 0.25rem #00000029';
  }

  return '0 1.25rem 3.125rem 0 rgba(0, 0, 0, 0.16)';
}, props => {
  var _props$style;

  return props.type == 'border' || (_props$style = props.style) !== null && _props$style !== void 0 && _props$style.borderRadius ? `1px solid  ${colors.default20}` : '';
}, colors.white, props => {
  if (props.width) {
    if (typeof props.width === 'string') {
      return props.width;
    }

    return `${props.width}px`;
  }

  return '100%';
});
const Button$1 = styled.a(_t2$8 || (_t2$8 = _$c`
  font-family: MontSerrat !important;
  background-color: ${0};
  padding: 0.75rem 1.5625rem;
  border-radius: 1.875rem;
  border: 1px solid ${0};
  width: ${0};
  cursor: pointer;
  display: flex;
  align-items: center;

  :hover {
    background-color: ${0};
  }

  span {
    margin-left: 0.9375rem;
    font-size: 0.9375rem;
    color: ${0};
  }
`), colors.card, colors.default30, props => {
  if (props.width) {
    if (typeof props.width === 'string') {
      return props.width;
    }

    return `${props.width}px`;
  }

  return '100%';
}, colors.default10, props => props.colorText ? props.colorText : colors.brandDark);
const Complement = styled.div(_t3$7 || (_t3$7 = _$c`
  font-family: MontSerrat !important;

  color: ${0};
  background-color: ${0};

  border: 1px solid ${0};
  text-align: center;
  margin-top: -1.5625rem;
  padding-top: 1.5625rem;
  width: 100%;

  border-bottom-left-radius: 1.875rem;
  border-bottom-right-radius: 1.875rem;
`), colors.gray20, colors.default10, colors.default20);

const Card = ({
  children,
  width,
  type: _type = 'shadow',
  style,
  icon,
  sizeIcon,
  colorIcon,
  text,
  colorText,
  onClick,
  loading,
  className,
  id,
  complement,
  complementStyle,
  complementClassName,
  ...rest
}) => {
  function renderShadow() {
    if (complement) {
      return React$2.createElement("div", null, React$2.createElement(Shadow, {
        className: className,
        width: width,
        style: style,
        type: _type,
        id: id
      }, loading && React$2.createElement("div", {
        className: "loading-card"
      }, React$2.createElement(Loader, null)), children), React$2.createElement(Complement, {
        className: complementClassName,
        style: complementStyle
      }, complement));
    }

    return React$2.createElement(Shadow, {
      className: className,
      width: width,
      style: style,
      type: _type,
      id: id
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
      width: width,
      className: className,
      id: id
    }, icon && React$2.createElement(React$2.Fragment, null, React$2.createElement(FontAwesomeIcon, {
      icon: icon,
      color: colorIcon || colors.brandDark,
      size: sizeIcon || 'lg'
    })), React$2.createElement("span", null, text));
  }

  switch (_type) {
    case 'shadow'  :
      return renderShadow();

    case 'button':
      return renderButton();

    default:
      return renderShadow();
  }
};

function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e["default"]:e}var React=_interopDefault(React$2);function _defaults2(e,t){for(var n=Object.getOwnPropertyNames(t),a=0;a<n.length;a++){var i=n[a],r=Object.getOwnPropertyDescriptor(t,i);r&&r.configurable&&e[i]===undefined&&Object.defineProperty(e,i,r);}return e}function _extends(){return (_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);}return e}).apply(this,arguments)}function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),_defaults2(e.prototype.constructor=e,t);}function _objectWithoutPropertiesLoose$1(e,t){if(null==e)return {};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],0<=t.indexOf(n)||(i[n]=e[n]);return i}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var invariant=function(e,t,n,a,i,r,o,s){if(!e){var l;if(t===undefined)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {var u=[n,a,i,r,o,s],c=0;(l=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation";}throw l.framesToPop=1,l}},invariant_1=invariant;function setInputSelection(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else {var a=e.createTextRange();a.collapse(!0),a.moveStart("character",t),a.moveEnd("character",n-t),a.select();}}function getInputSelection(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else {var a=document.selection.createRange();a.parentElement()===e&&(t=-a.moveStart("character",-e.value.length),n=-a.moveEnd("character",-e.value.length));}return {start:t,end:n,length:n-t}}var defaultFormatChars={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},defaultMaskChar="_";function parseMask(e,t,n){var a="",i="",r=null,o=[];if(t===undefined&&(t=defaultMaskChar),null==n&&(n=defaultFormatChars),!e||"string"!=typeof e)return {maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var s=!1;return e.split("").forEach(function(e){s=!s&&"\\"===e||(s||!n[e]?(o.push(a.length),a.length===o.length-1&&(i+=e)):r=a.length+1,a+=e,!1);}),{maskChar:t,formatChars:n,prefix:i,mask:a,lastEditablePosition:r,permanents:o}}function isPermanentCharacter(e,t){return -1!==e.permanents.indexOf(t)}function isAllowedCharacter(e,t,n){var a=e.mask,i=e.formatChars;if(!n)return !1;if(isPermanentCharacter(e,t))return a[t]===n;var r=i[a[t]];return new RegExp(r).test(n)}function isEmpty(n,e){return e.split("").every(function(e,t){return isPermanentCharacter(n,t)||!isAllowedCharacter(n,t,e)})}function getFilledLength(e,t){var n=e.maskChar,a=e.prefix;if(!n){for(;t.length>a.length&&isPermanentCharacter(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=a.length,r=t.length;r>=a.length;r--){var o=t[r];if(!isPermanentCharacter(e,r)&&isAllowedCharacter(e,r,o)){i=r+1;break}}return i}function isFilled(e,t){return getFilledLength(e,t)===e.mask.length}function formatValue(e,t){var n=e.maskChar,a=e.mask,i=e.prefix;if(!n){for((t=insertString(e,"",t,0)).length<i.length&&(t=i);t.length<a.length&&isPermanentCharacter(e,t.length);)t+=a[t.length];return t}if(t)return insertString(e,formatValue(e,""),t,0);for(var r=0;r<a.length;r++)isPermanentCharacter(e,r)?t+=a[r]:t+=n;return t}function clearRange(n,e,a,t){var i=a+t,r=n.maskChar,o=n.mask,s=n.prefix,l=e.split("");if(r)return l.map(function(e,t){return t<a||i<=t?e:isPermanentCharacter(n,t)?o[t]:r}).join("");for(var u=i;u<l.length;u++)isPermanentCharacter(n,u)&&(l[u]="");return a=Math.max(s.length,a),l.splice(a,i-a),e=l.join(""),formatValue(n,e)}function insertString(r,o,e,s){var l=r.mask,u=r.maskChar,c=r.prefix,t=e.split(""),h=isFilled(r,o);return !u&&s>o.length&&(o+=l.slice(o.length,s)),t.every(function(e){for(;i=e,isPermanentCharacter(r,a=s)&&i!==l[a];){if(s>=o.length&&(o+=l[s]),t=e,n=s,u&&isPermanentCharacter(r,n)&&t===u)return !0;if(++s>=l.length)return !1}var t,n,a,i;return !isAllowedCharacter(r,s,e)&&e!==u||(s<o.length?o=u||h||s<c.length?o.slice(0,s)+e+o.slice(s+1):(o=o.slice(0,s)+e+o.slice(s),formatValue(r,o)):u||(o+=e),++s<l.length)}),o}function getInsertStringLength(a,e,t,i){var r=a.mask,o=a.maskChar,n=t.split(""),s=i;return n.every(function(e){for(;n=e,isPermanentCharacter(a,t=i)&&n!==r[t];)if(++i>=r.length)return !1;var t,n;return (isAllowedCharacter(a,i,e)||e===o)&&i++,i<r.length}),i-s}function getLeftEditablePosition(e,t){for(var n=t;0<=n;--n)if(!isPermanentCharacter(e,n))return n;return null}function getRightEditablePosition(e,t){for(var n=e.mask,a=t;a<n.length;++a)if(!isPermanentCharacter(e,a))return a;return null}function getStringValue(e){return e||0===e?e+"":""}function processChange(e,t,n,a,i){var r=e.mask,o=e.prefix,s=e.lastEditablePosition,l=t,u="",c=0,h=0,f=Math.min(i.start,n.start);if(n.end>i.start?h=(c=getInsertStringLength(e,a,u=l.slice(i.start,n.end),f))?i.length:0:l.length<a.length&&(h=a.length-l.length),l=a,h){if(1===h&&!i.length)f=i.start===n.start?getRightEditablePosition(e,n.start):getLeftEditablePosition(e,n.start);l=clearRange(e,l,f,h);}return l=insertString(e,l,u,f),(f+=c)>=r.length?f=r.length:f<o.length&&!c?f=o.length:f>=o.length&&f<s&&c&&(f=getRightEditablePosition(e,f)),u||(u=null),{value:l=formatValue(e,l),enteredString:u,selection:{start:f,end:f}}}function isWindowsPhoneBrowser(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function isFunction(e){return "function"==typeof e}function getRequestAnimationFrame(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function getCancelAnimationFrame(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function defer(e){return (!!getCancelAnimationFrame()?getRequestAnimationFrame():function(){return setTimeout(e,1e3/60)})(e)}function cancelDefer(e){(getCancelAnimationFrame()||clearTimeout)(e);}var InputElement=function(c){function e(e){var f=c.call(this,e)||this;f.focused=!1,f.mounted=!1,f.previousSelection=null,f.selectionDeferId=null,f.saveSelectionLoopDeferId=null,f.saveSelectionLoop=function(){f.previousSelection=f.getSelection(),f.saveSelectionLoopDeferId=defer(f.saveSelectionLoop);},f.runSaveSelectionLoop=function(){null===f.saveSelectionLoopDeferId&&f.saveSelectionLoop();},f.stopSaveSelectionLoop=function(){null!==f.saveSelectionLoopDeferId&&(cancelDefer(f.saveSelectionLoopDeferId),f.saveSelectionLoopDeferId=null,f.previousSelection=null);},f.getInputDOMNode=function(){if(!f.mounted)return null;var e=reactDom.findDOMNode(_assertThisInitialized(_assertThisInitialized(f))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},f.getInputValue=function(){var e=f.getInputDOMNode();return e?e.value:null},f.setInputValue=function(e){var t=f.getInputDOMNode();t&&(f.value=e,t.value=e);},f.setCursorToEnd=function(){var e=getFilledLength(f.maskOptions,f.value),t=getRightEditablePosition(f.maskOptions,e);null!==t&&f.setCursorPosition(t);},f.setSelection=function(e,t,n){void 0===n&&(n={});var a=f.getInputDOMNode(),i=f.isFocused();a&&i&&(n.deferred||setInputSelection(a,e,t),null!==f.selectionDeferId&&cancelDefer(f.selectionDeferId),f.selectionDeferId=defer(function(){f.selectionDeferId=null,setInputSelection(a,e,t);}),f.previousSelection={start:e,end:t,length:Math.abs(t-e)});},f.getSelection=function(){return getInputSelection(f.getInputDOMNode())},f.getCursorPosition=function(){return f.getSelection().start},f.setCursorPosition=function(e){f.setSelection(e,e);},f.isFocused=function(){return f.focused},f.getBeforeMaskedValueChangeConfig=function(){var e=f.maskOptions,t=e.mask,n=e.maskChar,a=e.permanents,i=e.formatChars;return {mask:t,maskChar:n,permanents:a,alwaysShowMask:!!f.props.alwaysShowMask,formatChars:i}},f.isInputAutofilled=function(e,t,n,a){var i=f.getInputDOMNode();try{if(i.matches(":-webkit-autofill"))return !0}catch(r){}return !f.focused||a.end<n.length&&t.end===e.length},f.onChange=function(e){var t=_assertThisInitialized(_assertThisInitialized(f)).beforePasteState,n=_assertThisInitialized(_assertThisInitialized(f)).previousSelection,a=f.props.beforeMaskedValueChange,i=f.getInputValue(),r=f.value,o=f.getSelection();f.isInputAutofilled(i,o,r,n)&&(r=formatValue(f.maskOptions,""),n={start:0,end:0,length:0}),t&&(n=t.selection,r=t.value,o={start:n.start+i.length,end:n.start+i.length,length:0},i=r.slice(0,n.start)+i+r.slice(n.end),f.beforePasteState=null);var s=processChange(f.maskOptions,i,o,r,n),l=s.enteredString,u=s.selection,c=s.value;if(isFunction(a)){var h=a({value:c,selection:u},{value:r,selection:n},l,f.getBeforeMaskedValueChangeConfig());c=h.value,u=h.selection;}f.setInputValue(c),isFunction(f.props.onChange)&&f.props.onChange(e),f.isWindowsPhoneBrowser?f.setSelection(u.start,u.end,{deferred:!0}):f.setSelection(u.start,u.end);},f.onFocus=function(e){var t=f.props.beforeMaskedValueChange,n=f.maskOptions,a=n.mask,i=n.prefix;if(f.focused=!0,f.mounted=!0,a){if(f.value)getFilledLength(f.maskOptions,f.value)<f.maskOptions.mask.length&&f.setCursorToEnd();else {var r=formatValue(f.maskOptions,i),o=formatValue(f.maskOptions,r),s=getFilledLength(f.maskOptions,o),l=getRightEditablePosition(f.maskOptions,s),u={start:l,end:l};if(isFunction(t)){var c=t({value:o,selection:u},{value:f.value,selection:null},null,f.getBeforeMaskedValueChangeConfig());o=c.value,u=c.selection;}var h=o!==f.getInputValue();h&&f.setInputValue(o),h&&isFunction(f.props.onChange)&&f.props.onChange(e),f.setSelection(u.start,u.end);}f.runSaveSelectionLoop();}isFunction(f.props.onFocus)&&f.props.onFocus(e);},f.onBlur=function(e){var t=f.props.beforeMaskedValueChange,n=f.maskOptions.mask;if(f.stopSaveSelectionLoop(),f.focused=!1,n&&!f.props.alwaysShowMask&&isEmpty(f.maskOptions,f.value)){var a="";if(isFunction(t))a=t({value:a,selection:null},{value:f.value,selection:f.previousSelection},null,f.getBeforeMaskedValueChangeConfig()).value;var i=a!==f.getInputValue();i&&f.setInputValue(a),i&&isFunction(f.props.onChange)&&f.props.onChange(e);}isFunction(f.props.onBlur)&&f.props.onBlur(e);},f.onMouseDown=function(e){if(!f.focused&&document.addEventListener){f.mouseDownX=e.clientX,f.mouseDownY=e.clientY,f.mouseDownTime=(new Date).getTime();var r=function r(e){if(document.removeEventListener("mouseup",r),f.focused){var t=Math.abs(e.clientX-f.mouseDownX),n=Math.abs(e.clientY-f.mouseDownY),a=Math.max(t,n),i=(new Date).getTime()-f.mouseDownTime;(a<=10&&i<=200||a<=5&&i<=300)&&f.setCursorToEnd();}};document.addEventListener("mouseup",r);}isFunction(f.props.onMouseDown)&&f.props.onMouseDown(e);},f.onPaste=function(e){isFunction(f.props.onPaste)&&f.props.onPaste(e),e.defaultPrevented||(f.beforePasteState={value:f.getInputValue(),selection:f.getSelection()},f.setInputValue(""));},f.handleRef=function(e){null==f.props.children&&isFunction(f.props.inputRef)&&f.props.inputRef(e);};var t=e.mask,n=e.maskChar,a=e.formatChars,i=e.alwaysShowMask,r=e.beforeMaskedValueChange,o=e.defaultValue,s=e.value;f.maskOptions=parseMask(t,n,a),null==o&&(o=""),null==s&&(s=o);var l=getStringValue(s);if(f.maskOptions.mask&&(i||l)&&(l=formatValue(f.maskOptions,l),isFunction(r))){var u=e.value;null==e.value&&(u=o),l=r({value:l,selection:null},{value:u=getStringValue(u),selection:null},null,f.getBeforeMaskedValueChangeConfig()).value;}return f.value=l,f}_inheritsLoose(e,c);var t=e.prototype;return t.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=isWindowsPhoneBrowser(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value));},t.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,n=t.beforeMaskedValueChange,a=t.alwaysShowMask,i=t.mask,r=t.maskChar,o=t.formatChars,s=this.maskOptions,l=a||this.isFocused(),u=null!=this.props.value,c=u?getStringValue(this.props.value):this.value,h=e?e.start:null;if(this.maskOptions=parseMask(i,r,o),this.maskOptions.mask){!s.mask&&this.isFocused()&&this.runSaveSelectionLoop();var f=this.maskOptions.mask&&this.maskOptions.mask!==s.mask;if(s.mask||u||(c=this.getInputValue()),(f||this.maskOptions.mask&&(c||l))&&(c=formatValue(this.maskOptions,c)),f){var p=getFilledLength(this.maskOptions,c);(null===h||p<h)&&(h=isFilled(this.maskOptions,c)?p:getRightEditablePosition(this.maskOptions,p));}!this.maskOptions.mask||!isEmpty(this.maskOptions,c)||l||u&&this.props.value||(c="");var d={start:h,end:h};if(isFunction(n)){var m=n({value:c,selection:d},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=m.value,d=m.selection;}this.value=c;var g=this.getInputValue()!==this.value;g?(this.setInputValue(this.value),this.forceUpdate()):f&&this.forceUpdate();var v=!1;null!=d.start&&null!=d.end&&(v=!e||e.start!==d.start||e.end!==d.end),(v||g)&&this.setSelection(d.start,d.end);}else s.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate());},t.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&cancelDefer(this.selectionDeferId),this.stopSaveSelectionLoop();},t.render=function(){var t,e=this.props,n=(e.children),a=_objectWithoutPropertiesLoose$1(e,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(n){isFunction(n)||invariant_1(!1);var i=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],r=_extends({},a);i.forEach(function(e){return delete r[e]}),t=n(r),i.filter(function(e){return null!=t.props[e]&&t.props[e]!==a[e]}).length&&invariant_1(!1);}else t=React.createElement("input",_extends({ref:this.handleRef},a));var o={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(o.onChange=this.onChange,o.onPaste=this.onPaste,o.onMouseDown=this.onMouseDown),null!=a.value&&(o.value=this.value)),t=React.cloneElement(t,o)},e}(React.Component);var reactInputMask_production_min=InputElement;

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

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _defaults2$1(subClass, superClass);
}

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

function _assertThisInitialized$1(self) {
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

      var input = reactDom.findDOMNode(_assertThisInitialized$1(_assertThisInitialized$1(_this)));
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
      var _assertThisInitialize = _assertThisInitialized$1(_assertThisInitialized$1(_this)),
          beforePasteState = _assertThisInitialize.beforePasteState;

      var _assertThisInitialize2 = _assertThisInitialized$1(_assertThisInitialized$1(_this)),
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
        restProps = _objectWithoutPropertiesLoose$2(_this$props2, ["mask", "alwaysShowMask", "maskChar", "formatChars", "inputRef", "beforeMaskedValueChange", "children"]);

    var inputElement;
    process.env.NODE_ENV !== "production" ? warning$1( // parse mask to test against actual mask prop as this.maskOptions
    // will be updated later in componentDidUpdate
    !restProps.maxLength || !parseMask$1(mask, maskChar, formatChars).mask, 'react-input-mask: maxLength property shouldn\'t be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length.') : void 0;

    if (children) {
      !isFunction$1(children) ? process.env.NODE_ENV !== "production" ? invariant$2(false, 'react-input-mask: children must be a function') : invariant$2(false) : void 0;
      var controlledProps = ['onChange', 'onPaste', 'onMouseDown', 'onFocus', 'onBlur', 'value', 'disabled', 'readOnly'];

      var childrenProps = _extends$1({}, restProps);

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
      inputElement = React$1.createElement("input", _extends$1({
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

let _$d = t => t,
    _t$d;
const Container$8 = styled.div(_t$d || (_t$d = _$d`
  font-family: MontSerrat !important;
  display: flex;
  flex-direction: column;

  input {
    outline: none;
    padding: 7px 15px;
    border-radius: 20px;
    border: 1px solid
      ${0};
    color: ${0};
    cursor: pointer;

    background-color: ${0};

    font-weight: bold;

    &::placeholder {
      color: ${0};
    }
  }

  span {
    font-size: 14px;
    color: ${0};
    margin-left: 15px;
    margin-bottom: 3px;
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    margin-left: -8px !important;
    position: absolute !important;
  }
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    box-sizing: content-box !important;
    position: absolute !important;
    border: 8px solid transparent !important;
    height: 0 !important;
    width: 1px !important;
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    content: '' !important;
    z-index: -1 !important;
    border-width: 8px !important;
    left: -8px !important;
    border-bottom-color: #291f1f !important;
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle {
    top: 0 !important;
    margin-top: -8px !important;
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    border-top: none !important;
    border-bottom-color: #ffffff !important;
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    top: -1px !important;
    border-bottom-color: #aeaeae !important;
  }

  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    bottom: 0 !important;
    margin-bottom: -8px !important;
  }

  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    border-bottom: none !important;
    border-top-color: #fff !important;
  }

  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    bottom: -1px !important;
    border-top-color: #aeaeae !important;
  }

  .react-datepicker-wrapper {
    display: inline-block;
    padding: 0;
    border: 0;
  }

  .react-datepicker {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
    font-size: 0.8rem !important;
    background-color: #fff !important;
    color: #000 !important;
    border: 1px solid #aeaeae !important;
    border-radius: 20px !important;
    display: inline-block !important;
    position: relative !important;
  }

  .react-datepicker--time-only .react-datepicker__triangle {
    left: 35px !important;
  }

  .react-datepicker--time-only .react-datepicker__time-container {
    border-left: 0 !important;
  }

  .react-datepicker--time-only .react-datepicker__time,
  .react-datepicker--time-only .react-datepicker__time-box {
    border-bottom-left-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
  }

  .react-datepicker__triangle {
    position: absolute !important;
    left: 50px !important;
  }

  .react-datepicker-popper {
    z-index: 1 !important;
  }

  .react-datepicker-popper[data-placement^='bottom'] {
    margin-top: 10px !important;
  }

  .react-datepicker-popper[data-placement='bottom-end']
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement='top-end']
    .react-datepicker__triangle {
    left: auto !important;
    right: 50px !important;
  }

  .react-datepicker-popper[data-placement^='top'] {
    margin-bottom: 10px !important;
  }

  .react-datepicker-popper[data-placement^='right'] {
    margin-left: 8px !important;
  }

  .react-datepicker-popper[data-placement^='right']
    .react-datepicker__triangle {
    left: auto !important;
    right: 42px !important;
  }

  .react-datepicker-popper[data-placement^='left'] {
    margin-right: 8px !important;
  }

  .react-datepicker-popper[data-placement^='left'] .react-datepicker__triangle {
    left: 42px !important;
    right: auto !important;
  }

  .react-datepicker__header {
    text-align: center !important;
    background-color: #ffffff !important;
    border-bottom: 1px solid #aeaeae !important;
    border-top-left-radius: 20px !important;
    padding-top: 18px !important;
    position: relative !important;
    padding-bottom: 10px !important;
  }

  .react-datepicker__header--time {
    padding-bottom: 8px !important;
    padding-left: 5px !important;
    padding-right: 5px !important;
  }

  .react-datepicker__header--time:not(.react-datepicker__header--time--only) {
    border-top-left-radius: 0 !important;
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: 20px !important;
  }

  .react-datepicker__year-dropdown-container--select,
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__month-year-dropdown-container--select,
  .react-datepicker__year-dropdown-container--scroll,
  .react-datepicker__month-dropdown-container--scroll,
  .react-datepicker__month-year-dropdown-container--scroll {
    display: inline-block !important;
    margin: 0 2px !important;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 0 !important;
    color: #707070 !important;
    font-weight: bold !important;
    font-size: 0.944rem !important;
  }

  .react-datepicker-time__header {
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    overflow: hidden !important;
  }

  .react-datepicker__navigation {
    background: none !important;
    line-height: 1.7rem !important;
    text-align: center !important;
    cursor: pointer !important;
    position: absolute !important;
    top: 20px !important;
    width: 0 !important;
    padding: 0 !important;
    border: 0.5rem solid transparent !important;
    z-index: 1 !important;
    height: 15px !important;
    width: 20px !important;
    text-indent: -999em !important;
    overflow: hidden !important;
    outline: none !important;
  }

  .react-datepicker__navigation--previous {
    left: 10px !important;
    border-right-color: #9b4dee !important;
  }

  .react-datepicker__navigation--previous:hover {
    border-right-color: rgba(155, 77, 238, 0.2) !important;
  }

  .react-datepicker__navigation--previous--disabled,
  .react-datepicker__navigation--previous--disabled:hover {
    border-right-color: rgba(155, 77, 238, 0.2) !important;
    cursor: default !important;
  }

  .react-datepicker__navigation--next {
    right: 10px !important;
    border-left-color: #9b4dee !important;
  }

  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 95px !important;
  }

  .react-datepicker__navigation--next:hover {
    border-left-color: rgba(155, 77, 238, 0.2) !important;
  }

  .react-datepicker__navigation--next--disabled,
  .react-datepicker__navigation--next--disabled:hover {
    border-left-color: rgba(155, 77, 238, 0.2) !important;
    cursor: default !important;
  }

  .react-datepicker__navigation--years {
    position: relative !important;
    top: 0 !important;
    display: block !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .react-datepicker__navigation--years-previous {
    top: 4px !important;
    border-top-color: #ccc !important;
  }

  .react-datepicker__navigation--years-previous:hover {
    border-top-color: #b3b3b3 !important;
  }

  .react-datepicker__navigation--years-upcoming {
    top: -4px !important;
    border-bottom-color: #ccc !important;
  }

  .react-datepicker__navigation--years-upcoming:hover {
    border-bottom-color: #b3b3b3 !important;
  }

  .react-datepicker__month-container {
    float: left !important;
  }

  .react-datepicker__year {
    margin: 0.4rem !important;
    text-align: center !important;
  }

  .react-datepicker__year-wrapper {
    display: flex !important;
    flex-wrap: wrap !important;
    max-width: 180px !important;
  }

  .react-datepicker__year .react-datepicker__year-text {
    display: inline-block !important;
    width: 4rem !important;
    margin: 2px !important;
  }

  .react-datepicker__month {
    margin: 10px 0.4rem !important;
    text-align: center !important;
  }

  .react-datepicker__month .react-datepicker__month-text,
  .react-datepicker__month .react-datepicker__quarter-text {
    display: inline-block !important;
    width: 4rem !important;
    margin: 2px !important;
  }

  .react-datepicker__input-time-container {
    clear: both !important;
    width: 100% !important;
    float: left !important;
    margin: 5px 0 10px 15px !important;
    text-align: left !important;
  }

  .react-datepicker__input-time-container .react-datepicker-time__caption {
    display: inline-block !important;
    color: #707070 !important;
  }

  .react-datepicker__input-time-container
    .react-datepicker-time__input-container {
    display: inline-block !important;
  }

  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input {
    display: inline-block !important;
    margin-left: 10px !important;
  }

  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input {
    width: 85px !important;
    border-radius: 20px !important;
    padding: 5px 10px !important;
    outline: none !important;
    border-style: solid !important;
    border-width: 1px !important;
    border-color: #707070 !important;
  }

  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type='time']::-webkit-inner-spin-button,
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type='time']::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
  }

  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type='time'] {
    -moz-appearance: textfield !important;
  }

  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__delimiter {
    margin-left: 5px !important;
    display: inline-block !important;
  }

  .react-datepicker__time-container {
    float: right !important;
    border-left: 1px solid #aeaeae !important;
    width: 85px !important;
  }

  .react-datepicker__time-container--with-today-button {
    display: inline !important;
    border: 1px solid #aeaeae !important;
    border-radius: 0.3rem !important;
    position: absolute !important;
    right: -72px !important;
    top: 0 !important;
  }

  .react-datepicker__time-container .react-datepicker__time {
    position: relative !important;
    background: white !important;
    border-bottom-right-radius: 20px !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box {
    width: 85px !important;
    overflow-x: hidden !important;
    margin: 0 auto !important;
    text-align: center !important;
    border-bottom-right-radius: 20px !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list {
    list-style: none !important;
    margin: 0 !important;
    height: calc(195px + (1.7rem / 2)) !important;
    overflow-y: scroll !important;
    padding-right: 0px !important;
    padding-left: 0px !important;
    width: 100% !important;
    box-sizing: content-box !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    height: 30px !important;
    padding: 5px 10px !important;
    white-space: nowrap !important;
    color: #707070 !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item:hover {
    cursor: pointer !important;
    background-color: #f0f0f0 !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: #9b4dee !important;
    color: white !important;
    font-weight: bold !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected:hover {
    background-color: #9b4dee !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--disabled {
    color: #ccc !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--disabled:hover {
    cursor: default !important;
    background-color: transparent !important;
  }

  .react-datepicker__week-number {
    color: #ccc !important;
    display: inline-block !important;
    width: 1.7rem !important;
    line-height: 1.7rem !important;
    text-align: center !important;
    margin: 0.166rem !important;
  }

  .react-datepicker__week-number.react-datepicker__week-number--clickable {
    cursor: pointer !important;
  }

  .react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
    border-radius: 0.3rem !important;
    background-color: #f0f0f0 !important;
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap !important;
    margin-top: 10px !important;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #707070 !important;
    display: inline-block !important;
    width: 1.7rem !important;
    line-height: 1.7rem !important;
    text-align: center !important;
    margin: 0.166rem !important;
    outline: none !important;
  }

  .react-datepicker__month--selected,
  .react-datepicker__month--in-selecting-range,
  .react-datepicker__month--in-range,
  .react-datepicker__quarter--selected,
  .react-datepicker__quarter--in-selecting-range,
  .react-datepicker__quarter--in-range {
    border-radius: 10px !important;
    background-color: #9b4dee !important;
    color: #fff !important;
  }

  .react-datepicker__month--selected:hover,
  .react-datepicker__month--in-selecting-range:hover,
  .react-datepicker__month--in-range:hover,
  .react-datepicker__quarter--selected:hover,
  .react-datepicker__quarter--in-selecting-range:hover,
  .react-datepicker__quarter--in-range:hover {
    background-color: rgba(155, 77, 238, 0.8) !important;
  }

  .react-datepicker__month--disabled,
  .react-datepicker__quarter--disabled {
    color: #ccc !important;
    pointer-events: none !important;
  }

  .react-datepicker__month--disabled:hover,
  .react-datepicker__quarter--disabled:hover {
    cursor: default !important;
    background-color: transparent !important;
  }

  .react-datepicker__day,
  .react-datepicker__month-text,
  .react-datepicker__quarter-text,
  .react-datepicker__year-text {
    cursor: pointer !important;
  }

  .react-datepicker__day:hover {
    border-radius: 50% !important;
    background-color: #f0f0f0 !important;
  }
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    border-radius: 10px !important;
    background-color: #f0f0f0 !important;
  }

  .react-datepicker__day--today,
  .react-datepicker__month-text--today,
  .react-datepicker__quarter-text--today,
  .react-datepicker__year-text--today {
    font-weight: bold !important;
  }

  .react-datepicker__day--highlighted,
  .react-datepicker__month-text--highlighted,
  .react-datepicker__quarter-text--highlighted,
  .react-datepicker__year-text--highlighted {
    border-radius: 0.3rem !important;
    background-color: #3dcc4a !important;
    color: #fff !important;
  }

  .react-datepicker__day--highlighted:hover,
  .react-datepicker__month-text--highlighted:hover,
  .react-datepicker__quarter-text--highlighted:hover,
  .react-datepicker__year-text--highlighted:hover {
    background-color: #32be3f !important;
  }

  .react-datepicker__day--highlighted-custom-1,
  .react-datepicker__month-text--highlighted-custom-1,
  .react-datepicker__quarter-text--highlighted-custom-1,
  .react-datepicker__year-text--highlighted-custom-1 {
    color: magenta !important;
  }

  .react-datepicker__day--highlighted-custom-2,
  .react-datepicker__month-text--highlighted-custom-2,
  .react-datepicker__quarter-text--highlighted-custom-2,
  .react-datepicker__year-text--highlighted-custom-2 {
    color: green !important;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range {
    border-radius: 50% !important;
    background-color: #9b4dee !important;
    color: #fff !important;
    outline: none !important;
  }
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    border-radius: 10px !important;
    background-color: #9b4dee !important;
    color: #fff !important;
    outline: none !important;
  }

  .react-datepicker__day--selected:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--in-range:hover,
  .react-datepicker__month-text--selected:hover,
  .react-datepicker__month-text--in-selecting-range:hover,
  .react-datepicker__month-text--in-range:hover,
  .react-datepicker__quarter-text--selected:hover,
  .react-datepicker__quarter-text--in-selecting-range:hover,
  .react-datepicker__quarter-text--in-range:hover,
  .react-datepicker__year-text--selected:hover,
  .react-datepicker__year-text--in-selecting-range:hover,
  .react-datepicker__year-text--in-range:hover {
    background-color: rgba(155, 77, 238, 0.8) !important;
    outline: none !important;
  }

  .react-datepicker__day--keyboard-selected {
    border-radius: 50% !important;
    background-color: #9b4dee !important;
    color: #fff !important;
    outline: none !important;
  }
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    border-radius: 10px !important;
    background-color: #9b4dee !important;
    color: #fff !important;
    outline: none !important;
  }

  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__month-text--keyboard-selected:hover,
  .react-datepicker__quarter-text--keyboard-selected:hover,
  .react-datepicker__year-text--keyboard-selected:hover {
    background-color: rgba(155, 77, 238, 0.8) !important;
  }

  .react-datepicker__day--in-selecting-range,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__year-text--in-selecting-range {
    background-color: rgba(155, 77, 238, 0.5) !important;
    outline: none !important;
  }

  .react-datepicker__month--selecting-range .react-datepicker__day--in-range,
  .react-datepicker__month--selecting-range
    .react-datepicker__month-text--in-range,
  .react-datepicker__month--selecting-range
    .react-datepicker__quarter-text--in-range,
  .react-datepicker__month--selecting-range
    .react-datepicker__year-text--in-range {
    background-color: #f0f0f0 !important;
    color: #000 !important;
    outline: none !important;
  }

  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    cursor: default !important;
    color: #ccc !important;
  }

  .react-datepicker__day--disabled:hover,
  .react-datepicker__month-text--disabled:hover,
  .react-datepicker__quarter-text--disabled:hover,
  .react-datepicker__year-text--disabled:hover {
    background-color: transparent !important;
  }

  .react-datepicker__month-text.react-datepicker__month--selected:hover,
  .react-datepicker__month-text.react-datepicker__month--in-range:hover,
  .react-datepicker__month-text.react-datepicker__quarter--selected:hover,
  .react-datepicker__month-text.react-datepicker__quarter--in-range:hover,
  .react-datepicker__quarter-text.react-datepicker__month--selected:hover,
  .react-datepicker__quarter-text.react-datepicker__month--in-range:hover,
  .react-datepicker__quarter-text.react-datepicker__quarter--selected:hover,
  .react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover {
    background-color: #9b4dee !important;
  }

  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover {
    background-color: #f0f0f0 !important;
  }

  .react-datepicker__input-container {
    position: relative !important;
    display: inline-block !important;
    width: 100% !important;
  }

  .react-datepicker__year-read-view,
  .react-datepicker__month-read-view,
  .react-datepicker__month-year-read-view {
    border: 1px solid transparent !important;
    border-radius: 0.3rem !important;
  }

  .react-datepicker__year-read-view:hover,
  .react-datepicker__month-read-view:hover,
  .react-datepicker__month-year-read-view:hover {
    cursor: pointer !important;
  }

  .react-datepicker__year-read-view:hover,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__year-read-view:hover,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-read-view:hover,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view:hover,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover,
  .react-datepicker__month-read-view--down-arrow {
    border-top-color: #b3b3b3 !important;
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    border-top-color: #ccc !important;
    float: right !important;
    margin-left: 20px !important;
    top: 5px !important;
    position: relative !important;
    border-width: 0.45rem !important;
  }

  .react-datepicker__year-dropdown,
  .react-datepicker__month-dropdown,
  .react-datepicker__month-year-dropdown {
    background-color: #f0f0f0 !important;
    position: absolute !important;
    width: 50% !important;
    left: 25% !important;
    top: 30px !important;
    z-index: 1 !important;
    text-align: center !important;
    border-radius: 0.3rem !important;
    border: 1px solid #aeaeae !important;
  }

  .react-datepicker__year-dropdown:hover,
  .react-datepicker__month-dropdown:hover,
  .react-datepicker__month-year-dropdown:hover {
    cursor: pointer !important;
  }

  .react-datepicker__year-dropdown--scrollable,
  .react-datepicker__month-dropdown--scrollable,
  .react-datepicker__month-year-dropdown--scrollable {
    height: 150px !important;
    overflow-y: scroll !important;
  }

  .react-datepicker__year-option,
  .react-datepicker__month-option,
  .react-datepicker__month-year-option {
    line-height: 20px !important;
    width: 100% !important;
    display: block !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .react-datepicker__year-option:first-of-type,
  .react-datepicker__month-option:first-of-type,
  .react-datepicker__month-year-option:first-of-type {
    border-top-left-radius: 0.3rem !important;
    border-top-right-radius: 0.3rem !important;
  }

  .react-datepicker__year-option:last-of-type,
  .react-datepicker__month-option:last-of-type,
  .react-datepicker__month-year-option:last-of-type {
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
    border-bottom-left-radius: 0.3rem !important;
    border-bottom-right-radius: 0.3rem !important;
  }

  .react-datepicker__year-option:hover,
  .react-datepicker__month-option:hover,
  .react-datepicker__month-year-option:hover {
    background-color: #ccc !important;
  }

  .react-datepicker__year-option:hover
    .react-datepicker__navigation--years-upcoming,
  .react-datepicker__month-option:hover
    .react-datepicker__navigation--years-upcoming,
  .react-datepicker__month-year-option:hover
    .react-datepicker__navigation--years-upcoming {
    border-bottom-color: #b3b3b3 !important;
  }

  .react-datepicker__year-option:hover
    .react-datepicker__navigation--years-previous,
  .react-datepicker__month-option:hover
    .react-datepicker__navigation--years-previous,
  .react-datepicker__month-year-option:hover
    .react-datepicker__navigation--years-previous {
    border-top-color: #b3b3b3 !important;
  }

  .react-datepicker__year-option--selected,
  .react-datepicker__month-option--selected,
  .react-datepicker__month-year-option--selected {
    position: absolute !important;
    left: 15px !important;
  }

  .react-datepicker__close-icon {
    cursor: pointer !important;
    background-color: transparent !important;
    border: 0 !important;
    outline: 0 !important;
    padding: 0px 6px 0px 0px !important;
    position: absolute !important;
    top: 0 !important;
    right: 0 !important;
    height: 100% !important;
    display: table-cell !important;
    vertical-align: middle !important;
  }

  .react-datepicker__close-icon::after {
    cursor: pointer !important;
    background-color: #9b4dee !important;
    color: #fff !important;
    border-radius: 50% !important;
    height: 16px !important;
    width: 16px !important;
    padding: 2px !important;
    font-size: 12px !important;
    line-height: 1 !important;
    text-align: center !important;
    display: table-cell !important;
    vertical-align: middle !important;
  }

  .react-datepicker__today-button {
    background: rgba(155, 77, 238, 0.1) !important;
    border-top: 1px solid #aeaeae !important;
    cursor: pointer !important;
    text-align: center !important;
    font-weight: bold !important;
    padding: 5px 0 !important;
    clear: left !important;
    border-bottom-left-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
  }

  .react-datepicker__portal {
    position: fixed !important;
    width: 100vw !important;
    height: 100vh !important;
    background-color: rgba(0, 0, 0, 0.8) !important;
    left: 0 !important;
    top: 0 !important;
    justify-content: center !important;
    align-items: center !important;
    display: flex !important;
    z-index: 2147483647 !important;
  }

  .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__day,
  .react-datepicker__portal .react-datepicker__time-name {
    width: 3rem !important;
    line-height: 3rem !important;
  }

  @media (max-width: 400px), (max-height: 550px) {
    .react-datepicker__portal .react-datepicker__day-name,
    .react-datepicker__portal .react-datepicker__day,
    .react-datepicker__portal .react-datepicker__time-name {
      width: 2rem !important;
      line-height: 2rem !important;
    }
  }

  .react-datepicker__portal .react-datepicker__current-month,
  .react-datepicker__portal .react-datepicker-time__header {
    font-size: 1.44rem !important;
  }

  .react-datepicker__portal .react-datepicker__navigation {
    border: 0.81rem solid transparent !important;
  }

  .react-datepicker__portal .react-datepicker__navigation--previous {
    border-right-color: #ccc !important;
  }

  .react-datepicker__portal .react-datepicker__navigation--previous:hover {
    border-right-color: #b3b3b3 !important;
  }

  .react-datepicker__portal .react-datepicker__navigation--previous--disabled,
  .react-datepicker__portal
    .react-datepicker__navigation--previous--disabled:hover {
    border-right-color: #e6e6e6 !important;
    cursor: default !important;
  }

  .react-datepicker__portal .react-datepicker__navigation--next {
    border-left-color: #ccc !important;
  }

  .react-datepicker__portal .react-datepicker__navigation--next:hover {
    border-left-color: #b3b3b3 !important;
  }

  .react-datepicker__portal .react-datepicker__navigation--next--disabled,
  .react-datepicker__portal
    .react-datepicker__navigation--next--disabled:hover {
    border-left-color: #e6e6e6 !important;
    cursor: default !important;
  }
`), props => props.brand ? colors.brandLight : colors.gray10, props => props.brand ? colors.brand10 : colors.gray20, props => props.brand ? colors.brandLight : colors.white, props => props.brand ? colors.brandTransparent : colors.default10, props => {
  if (props.labelColor) {
    return props.labelColor;
  }

  return colors.brand10;
});

registerLocale('pt-BR', br);

const Calendar = ({
  labelColor,
  label,
  brand,
  otherFormatDate,
  ...rest
}) => {
  const CustomInput = React$2.forwardRef((props, ref) => React$2.createElement(reactInputMask, {
    ref: ref,
    mask: "99/99/9999",
    onClick: props.onClick,
    value: props.value,
    readOnly: rest.readOnly,
    onChange: props.onChange,
    placeholder: rest.placeholderText
  }));
  return React$2.createElement(Container$8, {
    brand: brand,
    labelColor: labelColor
  }, label && React$2.createElement("span", null, label), React$2.createElement("div", null, React$2.createElement(DatePicker, Object.assign({}, rest, {
    locale: "pt-BR",
    customInput: otherFormatDate ? undefined : React$2.createElement(CustomInput, {
      onClick: rest.onCalendarOpen,
      value: rest.value,
      onChange: rest.onChange
    }),
    dateFormat: otherFormatDate || 'dd/MM/yyyy',
    readOnly: false,
    onChangeRaw: event => rest.readOnly ? event.preventDefault() : null
  }))));
};

let _$e = t => t,
    _t$e,
    _t2$9,
    _t3$8,
    _t4$6;
const Header$2 = styled.div(_t$e || (_t$e = _$e`
  font-family: MontSerrat !important;
  display: flex;
  margin-bottom: 10px;
`));
const Title = styled.span(_t2$9 || (_t2$9 = _$e`
  font-family: MontSerrat !important;
  flex: 1;
  text-align: left;
  color: ${0};
  font-weight: bold;
`), colors.gray20);
const Message = styled.span(_t3$8 || (_t3$8 = _$e`
  flex: 1;
  text-align: right;
  color: ${0};
`), colors.gray10);
const Container$9 = styled.div(_t4$6 || (_t4$6 = _$e`
  margin-bottom: ${0};

  /*!
 * # Semantic UI 2.4.1 - Table
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

  /*******************************
             Table
*******************************/

  /* Prototype */
  .ui.table {
    width: 100%;
    background: #ffffff;
    margin: 1em 0em;
    border: none !important;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0.28571429rem;
    text-align: left;
    color: #707070;
    border-collapse: separate;
    border-spacing: 0px;
  }
  .ui.table:first-child {
    margin-top: 0em;
  }
  .ui.table:last-child {
    margin-bottom: 0em;
  }

  /*******************************
               Parts
  *******************************/

  /* Table Content */
  .ui.table th,
  .ui.table td {
    -webkit-transition: background 0.1s ease, color 0.1s ease;
    transition: background 0.1s ease, color 0.1s ease;
  }

  /* Headers */
  .ui.table thead {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ui.table thead th {
    cursor: auto;
    background: none !important;
    text-align: inherit;
    color: #9b4dee !important;
    padding: 0.92857143em 0.78571429em;
    vertical-align: inherit;
    font-style: none;
    font-weight: bold;
    text-transform: none;
    border-bottom: 1px solid rgba(34, 36, 38, 0.1);
    border-left: none;
  }
  .ui.table thead tr > th:first-child {
    border-left: none;
  }
  .ui.table thead tr:first-child > th:first-child {
    border-radius: 0.28571429rem 0em 0em 0em;
  }
  .ui.table thead tr:first-child > th:last-child {
    border-radius: 0em 0.28571429rem 0em 0em;
  }
  .ui.table thead tr:first-child > th:only-child {
    border-radius: 0.28571429rem 0.28571429rem 0em 0em;
  }

  /* Footer */
  .ui.table tfoot {
    -webkit-box-shadow: none;
    box-shadow: none;
    margin-top: 20px;
  }
  .ui.table tfoot th {
    cursor: auto;
    border-top: 1px solid rgba(34, 36, 38, 0.15);
    background: #f9fafb;
    text-align: inherit;
    color: rgba(0, 0, 0, 0.87);
    padding: 0.78571429em 0.78571429em;
    vertical-align: middle;
    font-style: normal;
    font-weight: normal;
    text-transform: none;
  }
  .ui.table tfoot tr > th:first-child {
    border-left: none;
  }
  .ui.table tfoot tr:first-child > th:first-child {
    border-radius: 0em 0em 0em 0.28571429rem;
  }
  .ui.table tfoot tr:first-child > th:last-child {
    border-radius: 0em 0em 0.28571429rem 0em;
  }
  .ui.table tfoot tr:first-child > th:only-child {
    border-radius: 0em 0em 0.28571429rem 0.28571429rem;
  }

  /* Table Row */
  .ui.table tr td {
    border-top: 1px solid rgba(34, 36, 38, 0.1);
  }
  .ui.table tr:first-child td {
    border-top: none;
  }

  /* Repeated tbody */
  .ui.table tbody + tbody tr:first-child td {
    border-top: 1px solid rgba(34, 36, 38, 0.1);
  }

  /* Table Cells */
  .ui.table td {
    padding: 0.78571429em 0.78571429em;
    text-align: inherit;
  }

  /* Icons */
  .ui.table > .icon {
    vertical-align: baseline;
  }
  .ui.table > .icon:only-child {
    margin: 0em;
  }

  /* Table Segment */
  .ui.table.segment {
    padding: 0em;
  }
  .ui.table.segment:after {
    display: none;
  }
  .ui.table.segment.stacked:after {
    display: block;
  }

  /* Responsive */
  @media only screen and (max-width: 767px) {
    .ui.table:not(.unstackable) {
      width: 100%;
    }
    .ui.table:not(.unstackable) tbody,
    .ui.table:not(.unstackable) tr,
    .ui.table:not(.unstackable) tr > th,
    .ui.table:not(.unstackable) tr > td {
      width: auto !important;
      display: block !important;
    }
    .ui.table:not(.unstackable) {
      padding: 0em;
    }
    .ui.table:not(.unstackable) thead {
      display: block;
    }
    .ui.table:not(.unstackable) tfoot {
      display: block;
    }
    .ui.table:not(.unstackable) tr {
      padding-top: 1em;
      padding-bottom: 1em;
      -webkit-box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;
      box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;
    }
    .ui.table:not(.unstackable) tr > th,
    .ui.table:not(.unstackable) tr > td {
      background: none;
      border: none !important;
      padding: 0.25em 0.75em !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }
    .ui.table:not(.unstackable) th:first-child,
    .ui.table:not(.unstackable) td:first-child {
      font-weight: bold;
    }

    /* Definition Table */
    .ui.definition.table:not(.unstackable) thead th:first-child {
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }
  }

  /*******************************
              Coupling
  *******************************/

  /* UI Image */
  .ui.table th .image,
  .ui.table th .image img,
  .ui.table td .image,
  .ui.table td .image img {
    max-width: none;
  }

  /*******************************
               Types
  *******************************/

  /*--------------
      Complex
  ---------------*/

  .ui.structured.table {
    border-collapse: collapse;
  }
  .ui.structured.table thead th {
    border-left: none;
    border-right: none;
  }
  .ui.structured.sortable.table thead th {
    border-left: 1px solid rgba(34, 36, 38, 0.15);
    border-right: 1px solid rgba(34, 36, 38, 0.15);
  }
  .ui.structured.basic.table th {
    border-left: none;
    border-right: none;
  }
  .ui.structured.celled.table tr th,
  .ui.structured.celled.table tr td {
    border-left: 1px solid rgba(34, 36, 38, 0.1);
    border-right: 1px solid rgba(34, 36, 38, 0.1);
  }

  /*--------------
     Definition
  ---------------*/

  .ui.definition.table thead:not(.full-width) th:first-child {
    pointer-events: none;
    background: transparent;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: -1px -1px 0px 1px #ffffff;
    box-shadow: -1px -1px 0px 1px #ffffff;
  }
  .ui.definition.table tfoot:not(.full-width) th:first-child {
    pointer-events: none;
    background: transparent;
    font-weight: rgba(0, 0, 0, 0.4);
    color: normal;
    -webkit-box-shadow: 1px 1px 0px 1px #ffffff;
    box-shadow: 1px 1px 0px 1px #ffffff;
  }

  /* Remove Border */
  .ui.celled.definition.table thead:not(.full-width) th:first-child {
    -webkit-box-shadow: 0px -1px 0px 1px #ffffff;
    box-shadow: 0px -1px 0px 1px #ffffff;
  }
  .ui.celled.definition.table tfoot:not(.full-width) th:first-child {
    -webkit-box-shadow: 0px 1px 0px 1px #ffffff;
    box-shadow: 0px 1px 0px 1px #ffffff;
  }

  /* Highlight Defining Column */
  .ui.definition.table tr td:first-child:not(.ignored),
  .ui.definition.table tr td.definition {
    background: none;
    font-weight: bold;
    color: ${0};
    text-transform: '';
    -webkit-box-shadow: '';
    box-shadow: '';
    text-align: '';
    font-size: 1em;
    padding-left: '';
    padding-right: '';
  }

  /* Fix 2nd Column */
  .ui.definition.table thead:not(.full-width) th:nth-child(2) {
    border-left: 1px solid rgba(34, 36, 38, 0.15);
  }
  .ui.definition.table tfoot:not(.full-width) th:nth-child(2) {
    border-left: 1px solid rgba(34, 36, 38, 0.15);
  }
  .ui.definition.table td:nth-child(2) {
    border-left: 1px solid rgba(34, 36, 38, 0.15);
  }

  /*******************************
               States
  *******************************/

  /*--------------
      Positive
  ---------------*/

  .ui.table tr.positive,
  .ui.table td.positive {
    -webkit-box-shadow: 0px 0px 0px #a3c293 inset;
    box-shadow: 0px 0px 0px #a3c293 inset;
  }
  .ui.table tr.positive,
  .ui.table td.positive {
    background: #fcfff5 !important;
    color: #2c662d !important;
  }

  /*--------------
       Negative
  ---------------*/

  .ui.table tr.negative,
  .ui.table td.negative {
    -webkit-box-shadow: 0px 0px 0px #e0b4b4 inset;
    box-shadow: 0px 0px 0px #e0b4b4 inset;
  }
  .ui.table tr.negative,
  .ui.table td.negative {
    background: #fff6f6 !important;
    color: #9f3a38 !important;
  }

  /*--------------
        Error
  ---------------*/

  .ui.table tr.error,
  .ui.table td.error {
    -webkit-box-shadow: 0px 0px 0px #e0b4b4 inset;
    box-shadow: 0px 0px 0px #e0b4b4 inset;
  }
  .ui.table tr.error,
  .ui.table td.error {
    background: #fff6f6 !important;
    color: #9f3a38 !important;
  }

  /*--------------
       Warning
  ---------------*/

  .ui.table tr.warning,
  .ui.table td.warning {
    -webkit-box-shadow: 0px 0px 0px #c9ba9b inset;
    box-shadow: 0px 0px 0px #c9ba9b inset;
  }
  .ui.table tr.warning,
  .ui.table td.warning {
    background: #fffaf3 !important;
    color: #573a08 !important;
  }

  /*--------------
       Active
  ---------------*/

  .ui.table tr.active,
  .ui.table td.active {
    -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.87) inset;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.87) inset;
  }
  .ui.table tr.active,
  .ui.table td.active {
    background: #e0e0e0 !important;
    color: rgba(0, 0, 0, 0.87) !important;
  }

  /*--------------
       Disabled
  ---------------*/

  .ui.table tr.disabled td,
  .ui.table tr td.disabled,
  .ui.table tr.disabled:hover,
  .ui.table tr:hover td.disabled {
    pointer-events: none;
    color: rgba(40, 40, 40, 0.3);
  }

  /*******************************
            Variations
  *******************************/

  /*--------------
      Stackable
  ---------------*/

  @media only screen and (max-width: 991px) {
    .ui[class*='tablet stackable'].table,
    .ui[class*='tablet stackable'].table tbody,
    .ui[class*='tablet stackable'].table tr,
    .ui[class*='tablet stackable'].table tr > th,
    .ui[class*='tablet stackable'].table tr > td {
      width: 100% !important;
      display: block !important;
    }
    .ui[class*='tablet stackable'].table {
      padding: 0em;
    }
    .ui[class*='tablet stackable'].table thead {
      display: block;
    }
    .ui[class*='tablet stackable'].table tfoot {
      display: block;
    }
    .ui[class*='tablet stackable'].table tr {
      padding-top: 1em;
      padding-bottom: 1em;
      -webkit-box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;
      box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;
    }
    .ui[class*='tablet stackable'].table tr > th,
    .ui[class*='tablet stackable'].table tr > td {
      background: none;
      border: none !important;
      padding: 0.25em 0.75em;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }

    /* Definition Table */
    .ui.definition[class*='tablet stackable'].table thead th:first-child {
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }
  }

  /*--------------
   Text Alignment
  ---------------*/

  .ui.table[class*='left aligned'],
  .ui.table [class*='left aligned'] {
    text-align: left;
  }
  .ui.table[class*='center aligned'],
  .ui.table [class*='center aligned'] {
    text-align: center;
  }
  .ui.table[class*='right aligned'],
  .ui.table [class*='right aligned'] {
    text-align: right;
  }

  /*------------------
   Vertical Alignment
  ------------------*/

  .ui.table[class*='top aligned'],
  .ui.table [class*='top aligned'] {
    vertical-align: top;
  }
  .ui.table[class*='middle aligned'],
  .ui.table [class*='middle aligned'] {
    vertical-align: middle;
  }
  .ui.table[class*='bottom aligned'],
  .ui.table [class*='bottom aligned'] {
    vertical-align: bottom;
  }

  /*--------------
      Collapsing
  ---------------*/

  .ui.table th.collapsing,
  .ui.table td.collapsing {
    width: 1px;
    white-space: nowrap;
  }

  /*--------------
       Fixed
  ---------------*/

  .ui.fixed.table {
    table-layout: fixed;
  }
  .ui.fixed.table th,
  .ui.fixed.table td {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /*--------------
     Selectable
  ---------------*/

  .ui.selectable.table tbody tr:hover,
  .ui.table tbody tr td.selectable:hover {
    background: rgba(0, 0, 0, 0.05) !important;
    color: rgba(0, 0, 0, 0.95) !important;
  }
  .ui.selectable.inverted.table tbody tr:hover,
  .ui.inverted.table tbody tr td.selectable:hover {
    background: rgba(255, 255, 255, 0.08) !important;
    color: #ffffff !important;
  }

  /* Selectable Cell Link */
  .ui.table tbody tr td.selectable {
    padding: 0em;
  }
  .ui.table tbody tr td.selectable > a:not(.ui) {
    display: block;
    color: inherit;
    padding: 0.78571429em 0.78571429em;
  }

  /* Other States */
  .ui.selectable.table tr.error:hover,
  .ui.table tr td.selectable.error:hover,
  .ui.selectable.table tr:hover td.error {
    background: #ffe7e7 !important;
    color: #943634 !important;
  }
  .ui.selectable.table tr.warning:hover,
  .ui.table tr td.selectable.warning:hover,
  .ui.selectable.table tr:hover td.warning {
    background: #fff4e4 !important;
    color: #493107 !important;
  }
  .ui.selectable.table tr.active:hover,
  .ui.table tr td.selectable.active:hover,
  .ui.selectable.table tr:hover td.active {
    background: #e0e0e0 !important;
    color: rgba(0, 0, 0, 0.87) !important;
  }
  .ui.selectable.table tr.positive:hover,
  .ui.table tr td.selectable.positive:hover,
  .ui.selectable.table tr:hover td.positive {
    background: #f7ffe6 !important;
    color: #275b28 !important;
  }
  .ui.selectable.table tr.negative:hover,
  .ui.table tr td.selectable.negative:hover,
  .ui.selectable.table tr:hover td.negative {
    background: #ffe7e7 !important;
    color: #943634 !important;
  }

  /*-------------------
        Attached
  --------------------*/

  /* Middle */
  .ui.attached.table {
    top: 0px;
    bottom: 0px;
    border-radius: 0px;
    margin: 0em -1px;
    width: calc(100% - (-1px * 2));
    max-width: calc(100% - (-1px * 2));
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid #d4d4d5;
  }
  .ui.attached + .ui.attached.table:not(.top) {
    border-top: none;
  }

  /* Top */
  .ui[class*='top attached'].table {
    bottom: 0px;
    margin-bottom: 0em;
    top: 0px;
    margin-top: 1em;
    border-radius: 0.28571429rem 0.28571429rem 0em 0em;
  }
  .ui.table[class*='top attached']:first-child {
    margin-top: 0em;
  }

  /* Bottom */
  .ui[class*='bottom attached'].table {
    bottom: 0px;
    margin-top: 0em;
    top: 0px;
    margin-bottom: 1em;
    -webkit-box-shadow: none, none;
    box-shadow: none, none;
    border-radius: 0em 0em 0.28571429rem 0.28571429rem;
  }
  .ui[class*='bottom attached'].table:last-child {
    margin-bottom: 0em;
  }

  /*--------------
       Striped
  ---------------*/

  /* Table Striping */
  .ui.striped.table > tr:nth-child(2n),
  .ui.striped.table tbody tr:nth-child(2n) {
    background-color: rgba(0, 0, 50, 0.02);
  }

  /* Stripes */
  .ui.inverted.striped.table > tr:nth-child(2n),
  .ui.inverted.striped.table tbody tr:nth-child(2n) {
    background-color: rgba(255, 255, 255, 0.05);
  }

  /* Allow striped active hover */
  .ui.striped.selectable.selectable.selectable.table tbody tr.active:hover {
    background: #efefef !important;
    color: rgba(0, 0, 0, 0.95) !important;
  }

  /*--------------
     Single Line
  ---------------*/

  .ui.table[class*='single line'],
  .ui.table [class*='single line'] {
    white-space: nowrap;
  }
  .ui.table[class*='single line'],
  .ui.table [class*='single line'] {
    white-space: nowrap;
  }

  /*-------------------
         Colors
  --------------------*/

  /* Red */
  .ui.red.table {
    border-top: 0.2em solid #db2828;
  }
  .ui.inverted.red.table {
    background-color: #db2828 !important;
    color: #ffffff !important;
  }

  /* Orange */
  .ui.orange.table {
    border-top: 0.2em solid #f2711c;
  }
  .ui.inverted.orange.table {
    background-color: #f2711c !important;
    color: #ffffff !important;
  }

  /* Yellow */
  .ui.yellow.table {
    border-top: 0.2em solid #fbbd08;
  }
  .ui.inverted.yellow.table {
    background-color: #fbbd08 !important;
    color: #ffffff !important;
  }

  /* Olive */
  .ui.olive.table {
    border-top: 0.2em solid #b5cc18;
  }
  .ui.inverted.olive.table {
    background-color: #b5cc18 !important;
    color: #ffffff !important;
  }

  /* Green */
  .ui.green.table {
    border-top: 0.2em solid #21ba45;
  }
  .ui.inverted.green.table {
    background-color: #21ba45 !important;
    color: #ffffff !important;
  }

  /* Teal */
  .ui.teal.table {
    border-top: 0.2em solid #00b5ad;
  }
  .ui.inverted.teal.table {
    background-color: #00b5ad !important;
    color: #ffffff !important;
  }

  /* Blue */
  .ui.blue.table {
    border-top: 0.2em solid #2185d0;
  }
  .ui.inverted.blue.table {
    background-color: #2185d0 !important;
    color: #ffffff !important;
  }

  /* Violet */
  .ui.violet.table {
    border-top: 0.2em solid #6435c9;
  }
  .ui.inverted.violet.table {
    background-color: #6435c9 !important;
    color: #ffffff !important;
  }

  /* Purple */
  .ui.purple.table {
    border-top: 0.2em solid #a333c8;
  }
  .ui.inverted.purple.table {
    background-color: #a333c8 !important;
    color: #ffffff !important;
  }

  /* Pink */
  .ui.pink.table {
    border-top: 0.2em solid #e03997;
  }
  .ui.inverted.pink.table {
    background-color: #e03997 !important;
    color: #ffffff !important;
  }

  /* Brown */
  .ui.brown.table {
    border-top: 0.2em solid #a5673f;
  }
  .ui.inverted.brown.table {
    background-color: #a5673f !important;
    color: #ffffff !important;
  }

  /* Grey */
  .ui.grey.table {
    border-top: 0.2em solid #767676;
  }
  .ui.inverted.grey.table {
    background-color: #767676 !important;
    color: #ffffff !important;
  }

  /* Black */
  .ui.black.table {
    border-top: 0.2em solid #1b1c1d;
  }
  .ui.inverted.black.table {
    background-color: #1b1c1d !important;
    color: #ffffff !important;
  }

  /*--------------
    Column Count
  ---------------*/

  /* Grid Based */
  .ui.one.column.table td {
    width: 100%;
  }
  .ui.two.column.table td {
    width: 50%;
  }
  .ui.three.column.table td {
    width: 33.33333333%;
  }
  .ui.four.column.table td {
    width: 25%;
  }
  .ui.five.column.table td {
    width: 20%;
  }
  .ui.six.column.table td {
    width: 16.66666667%;
  }
  .ui.seven.column.table td {
    width: 14.28571429%;
  }
  .ui.eight.column.table td {
    width: 12.5%;
  }
  .ui.nine.column.table td {
    width: 11.11111111%;
  }
  .ui.ten.column.table td {
    width: 10%;
  }
  .ui.eleven.column.table td {
    width: 9.09090909%;
  }
  .ui.twelve.column.table td {
    width: 8.33333333%;
  }
  .ui.thirteen.column.table td {
    width: 7.69230769%;
  }
  .ui.fourteen.column.table td {
    width: 7.14285714%;
  }
  .ui.fifteen.column.table td {
    width: 6.66666667%;
  }
  .ui.sixteen.column.table td {
    width: 6.25%;
  }

  /* Column Width */
  .ui.table th.one.wide,
  .ui.table td.one.wide {
    width: 6.25%;
  }
  .ui.table th.two.wide,
  .ui.table td.two.wide {
    width: 12.5%;
  }
  .ui.table th.three.wide,
  .ui.table td.three.wide {
    width: 18.75%;
  }
  .ui.table th.four.wide,
  .ui.table td.four.wide {
    width: 25%;
  }
  .ui.table th.five.wide,
  .ui.table td.five.wide {
    width: 31.25%;
  }
  .ui.table th.six.wide,
  .ui.table td.six.wide {
    width: 37.5%;
  }
  .ui.table th.seven.wide,
  .ui.table td.seven.wide {
    width: 43.75%;
  }
  .ui.table th.eight.wide,
  .ui.table td.eight.wide {
    width: 50%;
  }
  .ui.table th.nine.wide,
  .ui.table td.nine.wide {
    width: 56.25%;
  }
  .ui.table th.ten.wide,
  .ui.table td.ten.wide {
    width: 62.5%;
  }
  .ui.table th.eleven.wide,
  .ui.table td.eleven.wide {
    width: 68.75%;
  }
  .ui.table th.twelve.wide,
  .ui.table td.twelve.wide {
    width: 75%;
  }
  .ui.table th.thirteen.wide,
  .ui.table td.thirteen.wide {
    width: 81.25%;
  }
  .ui.table th.fourteen.wide,
  .ui.table td.fourteen.wide {
    width: 87.5%;
  }
  .ui.table th.fifteen.wide,
  .ui.table td.fifteen.wide {
    width: 93.75%;
  }
  .ui.table th.sixteen.wide,
  .ui.table td.sixteen.wide {
    width: 100%;
  }

  /*--------------
      Sortable
  ---------------*/

  .ui.sortable.table thead th {
    cursor: pointer;
    white-space: nowrap;
    border-left: 1px solid rgba(34, 36, 38, 0.15);
    color: rgba(0, 0, 0, 0.87);
  }
  .ui.sortable.table thead th:first-child {
    border-left: none;
  }
  .ui.sortable.table thead th.sorted,
  .ui.sortable.table thead th.sorted:hover {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .ui.sortable.table thead th:after {
    display: none;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
    content: '';
    height: 1em;
    width: auto;
    opacity: 0.8;
    margin: 0em 0em 0em 0.5em;
    font-family: 'Icons';
  }
  .ui.sortable.table thead th.ascending:after {
    content: '\f0d8';
  }
  .ui.sortable.table thead th.descending:after {
    content: '\f0d7';
  }

  /* Hover */
  .ui.sortable.table th.disabled:hover {
    cursor: auto;
    color: rgba(40, 40, 40, 0.3);
  }
  .ui.sortable.table thead th:hover {
    background: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.8);
  }

  /* Sorted */
  .ui.sortable.table thead th.sorted {
    background: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.95);
  }
  .ui.sortable.table thead th.sorted:after {
    display: inline-block;
  }

  /* Sorted Hover */
  .ui.sortable.table thead th.sorted:hover {
    background: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.95);
  }

  /* Inverted */
  .ui.inverted.sortable.table thead th.sorted {
    background: rgba(255, 255, 255, 0.15) -webkit-gradient(linear, left top, left
          bottom, from(transparent), to(rgba(0, 0, 0, 0.05)));
    background: rgba(255, 255, 255, 0.15) -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
    background: rgba(255, 255, 255, 0.15)
      linear-gradient(transparent, rgba(0, 0, 0, 0.05));
    color: #ffffff;
  }
  .ui.inverted.sortable.table thead th:hover {
    background: rgba(255, 255, 255, 0.08) -webkit-gradient(linear, left top, left
          bottom, from(transparent), to(rgba(0, 0, 0, 0.05)));
    background: rgba(255, 255, 255, 0.08) -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
    background: rgba(255, 255, 255, 0.08)
      linear-gradient(transparent, rgba(0, 0, 0, 0.05));
    color: #ffffff;
  }
  .ui.inverted.sortable.table thead th {
    border-left-color: transparent;
    border-right-color: transparent;
  }

  /*--------------
      Inverted
  ---------------*/

  /* Text Color */
  .ui.inverted.table {
    background: #333333;
    color: rgba(255, 255, 255, 0.9);
    border: none;
  }
  .ui.inverted.table th {
    background-color: rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.1) !important;
    color: rgba(255, 255, 255, 0.9) !important;
  }
  .ui.inverted.table tr td {
    border-color: rgba(255, 255, 255, 0.1) !important;
  }
  .ui.inverted.table tr.disabled td,
  .ui.inverted.table tr td.disabled,
  .ui.inverted.table tr.disabled:hover td,
  .ui.inverted.table tr:hover td.disabled {
    pointer-events: none;
    color: rgba(225, 225, 225, 0.3);
  }

  /* Definition */
  .ui.inverted.definition.table tfoot:not(.full-width) th:first-child,
  .ui.inverted.definition.table thead:not(.full-width) th:first-child {
    background: #ffffff;
  }
  .ui.inverted.definition.table tr td:first-child {
    background: rgba(255, 255, 255, 0.02);
    color: #ffffff;
  }

  /*--------------
     Collapsing
  ---------------*/

  .ui.collapsing.table {
    width: auto;
  }

  /*--------------
        Basic
  ---------------*/

  .ui.basic.table {
    background: transparent;
    border: 1px solid rgba(34, 36, 38, 0.15);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ui.basic.table thead,
  .ui.basic.table tfoot {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ui.basic.table th {
    background: transparent;
    border-left: none;
  }
  .ui.basic.table tbody tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ui.basic.table td {
    background: transparent;
  }
  .ui.basic.striped.table tbody tr:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.05) !important;
  }

  /* Very Basic */
  .ui[class*='very basic'].table {
    border: none;
  }
  .ui[class*='very basic'].table:not(.sortable):not(.striped) th,
  .ui[class*='very basic'].table:not(.sortable):not(.striped) td {
    padding: '';
  }
  .ui[class*='very basic'].table:not(.sortable):not(.striped) th:first-child,
  .ui[class*='very basic'].table:not(.sortable):not(.striped) td:first-child {
    padding-left: 0em;
  }
  .ui[class*='very basic'].table:not(.sortable):not(.striped) th:last-child,
  .ui[class*='very basic'].table:not(.sortable):not(.striped) td:last-child {
    padding-right: 0em;
  }
  .ui[class*='very basic'].table:not(.sortable):not(.striped)
    thead
    tr:first-child
    th {
    padding-top: 0em;
  }

  /*--------------
       Celled
  ---------------*/

  .ui.celled.table tr th,
  .ui.celled.table tr td {
    border-left: 1px solid rgba(34, 36, 38, 0.1);
  }
  .ui.celled.table tr th:first-child,
  .ui.celled.table tr td:first-child {
    border-left: none;
  }

  /*--------------
       Padded
  ---------------*/

  .ui.padded.table th {
    padding-left: 1em;
    padding-right: 1em;
  }
  .ui.padded.table th,
  .ui.padded.table td {
    padding: 1em 1em;
  }

  /* Very */
  .ui[class*='very padded'].table th {
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
  .ui[class*='very padded'].table td {
    padding: 1.5em 1.5em;
  }

  /*--------------
       Compact
  ---------------*/

  .ui.compact.table th {
    padding-left: 0.7em;
    padding-right: 0.7em;
  }
  .ui.compact.table td {
    padding: 0.5em 0.7em;
  }

  /* Very */
  .ui[class*='very compact'].table th {
    padding-left: 0.6em;
    padding-right: 0.6em;
  }
  .ui[class*='very compact'].table td {
    padding: 0.4em 0.6em;
  }

  /*--------------
        Sizes
  ---------------*/

  /* Small */
  .ui.small.table {
    font-size: 0.9em;
  }

  /* Standard */
  .ui.table {
    font-size: 1em;
  }

  /* Large */
  .ui.large.table {
    font-size: 1.1em;
  }

  /*******************************
           Site Overrides
  *******************************/
`), props => props.hasMore || props.hasPagination ? '20px' : '0', colors.brand10);

const TableComponent = ({
  children,
  title,
  titleStyle,
  message,
  messageStyle,
  hasMore,
  pagination,
  ...rest
}) => {
  return React$2.createElement("div", null, title || message ? React$2.createElement(Header$2, null, React$2.createElement(Title, {
    style: titleStyle
  }, title), React$2.createElement(Message, {
    style: messageStyle
  }, message)) : null, React$2.createElement(Container$9, {
    hasMore: !!hasMore,
    hasPagination: !!pagination
  }, React$2.createElement(Table$1, Object.assign({}, rest), children)), hasMore ? React$2.createElement(ButtonMain, {
    secondary: true,
    textFirst: "ver a",
    textEnd: "lista completa",
    onClick: () => hasMore()
  }) : null, pagination ? React$2.createElement("div", null, React$2.createElement("br", null), pagination) : null);
};

const Table = TableComponent;
Table.Row = TableRow;
Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Body = TableBody;
Table.Cell = TableCell;
Table.Footer = TableFooter;

let _$f = t => t,
    _t$f;
const Container$a = styled.div(_t$f || (_t$f = _$f`
  font-family: MontSerrat !important;

  /*--------------
   Pagination
---------------*/

  .ui.pagination.menu {
    margin: 0em;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle;
  }
  .ui.pagination.menu .item:last-child {
    border-radius: 0em 0.28571429rem 0.28571429rem 0em;
  }
  .ui.compact.menu .item:last-child {
    border-radius: 0em 0.28571429rem 0.28571429rem 0em;
  }
  .ui.pagination.menu .item:last-child:before {
    display: none;
  }
  .ui.pagination.menu .item {
    font-family: MontSerrat !important;
    min-width: 3em;
    text-align: center;
  }
  .ui.pagination.menu .icon.item i.icon {
    vertical-align: top;
  }

  /* Active */
  .ui.pagination.menu .active.item {
    border-top: none;
    padding-top: 0.92857143em;
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.95);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`));

const PaginationComponent = ({
  page,
  totalCount,
  limit,
  onPageChange,
  mini
}) => {
  return React$2.createElement(Container$a, null, React$2.createElement(Pagination, {
    totalPages: Math.ceil(totalCount / limit),
    size: mini ? 'mini' : 'small',
    ellipsisItem: {
      content: React$2.createElement(Icon$3, {
        name: "ellipsis horizontal"
      }),
      icon: true
    },
    firstItem: {
      content: React$2.createElement(Icon$3, {
        name: "angle double left"
      }),
      icon: true
    },
    lastItem: {
      content: React$2.createElement(Icon$3, {
        name: "angle double right"
      }),
      icon: true
    },
    prevItem: {
      content: React$2.createElement(Icon$3, {
        name: "angle left"
      }),
      icon: true
    },
    nextItem: {
      content: React$2.createElement(Icon$3, {
        name: "angle right"
      }),
      icon: true
    },
    onPageChange: (_ev, data) => onPageChange(data.activePage),
    activePage: page
  }));
};

export { Accordion, ButtonMain, Calendar, Card, Checkbox, DialogComponent as Dialog, Dropdown, DropdownForm, InputLine, InputLineForm, Loader, ModalComponent as Modal, MoreLess, PaginationComponent as Pagination, Radio, Selection, Table, TextArea, TextAreaForm };
//# sourceMappingURL=index.modern.js.map
