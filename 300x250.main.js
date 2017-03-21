/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(35);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/* eslint-disable no-unused-vars */
	var zepto = __webpack_require__(3);
	/* eslint-enable no-unused-vars */

	var Banner = function () {
	  function Banner(config) {
	    _classCallCheck(this, Banner);

	    this.wrapperElement = config.wrapperElement;
	    this.preloader = document.getElementById('preloadShape');
	    this.exitHandlerFn = config.exitHandlerFn;
	    this.doBannerFn = config.doBannerFn;
	    this.timeline = new TimelineMax({
	      paused: true,
	      onComplete: this.pauseBanner
	    });
	    this.imageCache = {};
	    this.assetsManifest = config.assetsManifest;

	    // TweenMax.ticker.fps(24);
	    //CSSPlugin.defaultForce3D = true;
	  }

	  _createClass(Banner, [{
	    key: 'start',
	    value: function start() {
	      this.exitHandlerInit();
	      this.preloadImages(this.assetsManifest, this.ready.bind(this));
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	      if (this.preloader) {
	        this.preloader.style.display = 'none';
	      }

	      TweenMax.set(this.wrapperElement, { opacity: 1 });
	      this.doBannerFn(this.timeline);
	      this.timeline.play();
	    }
	  }, {
	    key: 'pauseBanner',
	    value: function pauseBanner() {
	      for (var i = 0, len = TweenMax.ticker._listeners.tick.length; i < len; i += 1) {
	        var e = TweenMax.ticker._listeners.tick[i];
	        TweenMax.ticker.removeEventListener('tick', e.callback);
	      }
	      TweenMax.ticker._listeners = [];
	      TweenMax.ticker.fps(0);
	    }
	  }, {
	    key: 'exitHandlerInit',
	    value: function exitHandlerInit() {
	      this.wrapperElement.addEventListener('click', this.exitHandlerFn, false);
	    }
	  }, {
	    key: 'preloadImages',
	    value: function preloadImages(images, callback, scope) {
	      var self = this;
	      var l = images.manifest.length;
	      var loaded = 0;
	      var img = null;

	      for (var i = 0; i < l; ++i) {
	        img = document.createElement('img');
	        img.src = img.microSrc = images.path + images.manifest[i];
	        /*eslint no-loop-func: 0*/
	        img.onload = function onload() {
	          self.imageCache[this.microSrc] = this;
	          loaded++;
	          if (loaded === l) {
	            setTimeout(function () {

	              if (scope) {
	                callback.call(scope);
	              } else {
	                callback();
	              }
	            });
	          }
	        };
	      }
	    }
	  }, {
	    key: 'getCachedImage',
	    value: function getCachedImage(src) {
	      var _this = this;

	      var cachedImage = void 0;
	      Object.keys(this.imageCache).forEach(function (element) {
	        if (element.indexOf(src) !== -1) {
	          cachedImage = _this.imageCache[element];
	        }
	      });
	      return cachedImage;
	    }
	  }, {
	    key: 'setSpeedTestLogoPosition',
	    value: function setSpeedTestLogoPosition(selector, position, y) {
	      if (position.top === 'under-copy') {
	        selector.style.top = y + 'px';
	      } else {
	        selector.style.top = position.top + 'px';
	      }
	      selector.style.left = position.left + 'px';
	    }
	  }, {
	    key: 'setRubrikCopy',
	    value: function setRubrikCopy(selector, text, position, fontSize) {
	      selector.innerHTML = text;
	      selector.style.fontSize = fontSize + 'px';
	      selector.style.top = position.top + 'px';
	      if (position.right) {
	        selector.style.right = position.right + 'px';
	      } else {
	        selector.style.left = position.left + 'px';
	      }
	    }
	  }]);

	  return Banner;
	}();

	exports.default = Banner;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* Zepto 1.1.6 - zepto event ajax form ie - zeptojs.com/license */

	var Zepto = (function() {
	  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
	    document = window.document,
	    elementDisplay = {}, classCache = {},
	    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
	    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
	    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	    rootNodeRE = /^(?:body|html)$/i,
	    capitalRE = /([A-Z])/g,

	    // special attributes that should be get/set via method calls
	    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

	    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
	    table = document.createElement('table'),
	    tableRow = document.createElement('tr'),
	    containers = {
	      'tr': document.createElement('tbody'),
	      'tbody': table, 'thead': table, 'tfoot': table,
	      'td': tableRow, 'th': tableRow,
	      '*': document.createElement('div')
	    },
	    readyRE = /complete|loaded|interactive/,
	    simpleSelectorRE = /^[\w-]*$/,
	    class2type = {},
	    toString = class2type.toString,
	    zepto = {},
	    camelize, uniq,
	    tempParent = document.createElement('div'),
	    propMap = {
	      'tabindex': 'tabIndex',
	      'readonly': 'readOnly',
	      'for': 'htmlFor',
	      'class': 'className',
	      'maxlength': 'maxLength',
	      'cellspacing': 'cellSpacing',
	      'cellpadding': 'cellPadding',
	      'rowspan': 'rowSpan',
	      'colspan': 'colSpan',
	      'usemap': 'useMap',
	      'frameborder': 'frameBorder',
	      'contenteditable': 'contentEditable'
	    },
	    isArray = Array.isArray ||
	      function(object){ return object instanceof Array }

	  zepto.matches = function(element, selector) {
	    if (!selector || !element || element.nodeType !== 1) return false
	    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
	                          element.oMatchesSelector || element.matchesSelector
	    if (matchesSelector) return matchesSelector.call(element, selector)
	    // fall back to performing a selector:
	    var match, parent = element.parentNode, temp = !parent
	    if (temp) (parent = tempParent).appendChild(element)
	    match = ~zepto.qsa(parent, selector).indexOf(element)
	    temp && tempParent.removeChild(element)
	    return match
	  }

	  function type(obj) {
	    return obj == null ? String(obj) :
	      class2type[toString.call(obj)] || "object"
	  }

	  function isFunction(value) { return type(value) == "function" }
	  function isWindow(obj)     { return obj != null && obj == obj.window }
	  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
	  function isObject(obj)     { return type(obj) == "object" }
	  function isPlainObject(obj) {
	    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
	  }
	  function likeArray(obj) { return typeof obj.length == 'number' }

	  function compact(array) { return filter.call(array, function(item){ return item != null }) }
	  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
	  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
	  function dasherize(str) {
	    return str.replace(/::/g, '/')
	           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
	           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
	           .replace(/_/g, '-')
	           .toLowerCase()
	  }
	  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

	  function classRE(name) {
	    return name in classCache ?
	      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
	  }

	  function maybeAddPx(name, value) {
	    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
	  }

	  function defaultDisplay(nodeName) {
	    var element, display
	    if (!elementDisplay[nodeName]) {
	      element = document.createElement(nodeName)
	      document.body.appendChild(element)
	      display = getComputedStyle(element, '').getPropertyValue("display")
	      element.parentNode.removeChild(element)
	      display == "none" && (display = "block")
	      elementDisplay[nodeName] = display
	    }
	    return elementDisplay[nodeName]
	  }

	  function children(element) {
	    return 'children' in element ?
	      slice.call(element.children) :
	      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
	  }

	  // `$.zepto.fragment` takes a html string and an optional tag name
	  // to generate DOM nodes nodes from the given html string.
	  // The generated DOM nodes are returned as an array.
	  // This function can be overriden in plugins for example to make
	  // it compatible with browsers that don't support the DOM fully.
	  zepto.fragment = function(html, name, properties) {
	    var dom, nodes, container

	    // A special case optimization for a single tag
	    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

	    if (!dom) {
	      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
	      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
	      if (!(name in containers)) name = '*'

	      container = containers[name]
	      container.innerHTML = '' + html
	      dom = $.each(slice.call(container.childNodes), function(){
	        container.removeChild(this)
	      })
	    }

	    if (isPlainObject(properties)) {
	      nodes = $(dom)
	      $.each(properties, function(key, value) {
	        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
	        else nodes.attr(key, value)
	      })
	    }

	    return dom
	  }

	  // `$.zepto.Z` swaps out the prototype of the given `dom` array
	  // of nodes with `$.fn` and thus supplying all the Zepto functions
	  // to the array. Note that `__proto__` is not supported on Internet
	  // Explorer. This method can be overriden in plugins.
	  zepto.Z = function(dom, selector) {
	    dom = dom || []
	    dom.__proto__ = $.fn
	    dom.selector = selector || ''
	    return dom
	  }

	  // `$.zepto.isZ` should return `true` if the given object is a Zepto
	  // collection. This method can be overriden in plugins.
	  zepto.isZ = function(object) {
	    return object instanceof zepto.Z
	  }

	  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
	  // takes a CSS selector and an optional context (and handles various
	  // special cases).
	  // This method can be overriden in plugins.
	  zepto.init = function(selector, context) {
	    var dom
	    // If nothing given, return an empty Zepto collection
	    if (!selector) return zepto.Z()
	    // Optimize for string selectors
	    else if (typeof selector == 'string') {
	      selector = selector.trim()
	      // If it's a html fragment, create nodes from it
	      // Note: In both Chrome 21 and Firefox 15, DOM error 12
	      // is thrown if the fragment doesn't begin with <
	      if (selector[0] == '<' && fragmentRE.test(selector))
	        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // If it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // If a function is given, call it when the DOM is ready
	    else if (isFunction(selector)) return $(document).ready(selector)
	    // If a Zepto collection is given, just return it
	    else if (zepto.isZ(selector)) return selector
	    else {
	      // normalize array if an array of nodes is given
	      if (isArray(selector)) dom = compact(selector)
	      // Wrap DOM nodes.
	      else if (isObject(selector))
	        dom = [selector], selector = null
	      // If it's a html fragment, create nodes from it
	      else if (fragmentRE.test(selector))
	        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // And last but no least, if it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // create a new Zepto collection from the nodes found
	    return zepto.Z(dom, selector)
	  }

	  // `$` will be the base `Zepto` object. When calling this
	  // function just call `$.zepto.init, which makes the implementation
	  // details of selecting nodes and creating Zepto collections
	  // patchable in plugins.
	  $ = function(selector, context){
	    return zepto.init(selector, context)
	  }

	  function extend(target, source, deep) {
	    for (key in source)
	      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
	          target[key] = {}
	        if (isArray(source[key]) && !isArray(target[key]))
	          target[key] = []
	        extend(target[key], source[key], deep)
	      }
	      else if (source[key] !== undefined) target[key] = source[key]
	  }

	  // Copy all but undefined properties from one or more
	  // objects to the `target` object.
	  $.extend = function(target){
	    var deep, args = slice.call(arguments, 1)
	    if (typeof target == 'boolean') {
	      deep = target
	      target = args.shift()
	    }
	    args.forEach(function(arg){ extend(target, arg, deep) })
	    return target
	  }

	  // `$.zepto.qsa` is Zepto's CSS selector implementation which
	  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
	  // This method can be overriden in plugins.
	  zepto.qsa = function(element, selector){
	    var found,
	        maybeID = selector[0] == '#',
	        maybeClass = !maybeID && selector[0] == '.',
	        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
	        isSimple = simpleSelectorRE.test(nameOnly)
	    return (isDocument(element) && isSimple && maybeID) ?
	      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
	      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
	      slice.call(
	        isSimple && !maybeID ?
	          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
	          element.getElementsByTagName(selector) : // Or a tag
	          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
	      )
	  }

	  function filtered(nodes, selector) {
	    return selector == null ? $(nodes) : $(nodes).filter(selector)
	  }

	  $.contains = document.documentElement.contains ?
	    function(parent, node) {
	      return parent !== node && parent.contains(node)
	    } :
	    function(parent, node) {
	      while (node && (node = node.parentNode))
	        if (node === parent) return true
	      return false
	    }

	  function funcArg(context, arg, idx, payload) {
	    return isFunction(arg) ? arg.call(context, idx, payload) : arg
	  }

	  function setAttribute(node, name, value) {
	    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
	  }

	  // access className property while respecting SVGAnimatedString
	  function className(node, value){
	    var klass = node.className || '',
	        svg   = klass && klass.baseVal !== undefined

	    if (value === undefined) return svg ? klass.baseVal : klass
	    svg ? (klass.baseVal = value) : (node.className = value)
	  }

	  // "true"  => true
	  // "false" => false
	  // "null"  => null
	  // "42"    => 42
	  // "42.5"  => 42.5
	  // "08"    => "08"
	  // JSON    => parse if valid
	  // String  => self
	  function deserializeValue(value) {
	    try {
	      return value ?
	        value == "true" ||
	        ( value == "false" ? false :
	          value == "null" ? null :
	          +value + "" == value ? +value :
	          /^[\[\{]/.test(value) ? $.parseJSON(value) :
	          value )
	        : value
	    } catch(e) {
	      return value
	    }
	  }

	  $.type = type
	  $.isFunction = isFunction
	  $.isWindow = isWindow
	  $.isArray = isArray
	  $.isPlainObject = isPlainObject

	  $.isEmptyObject = function(obj) {
	    var name
	    for (name in obj) return false
	    return true
	  }

	  $.inArray = function(elem, array, i){
	    return emptyArray.indexOf.call(array, elem, i)
	  }

	  $.camelCase = camelize
	  $.trim = function(str) {
	    return str == null ? "" : String.prototype.trim.call(str)
	  }

	  // plugin compatibility
	  $.uuid = 0
	  $.support = { }
	  $.expr = { }

	  $.map = function(elements, callback){
	    var value, values = [], i, key
	    if (likeArray(elements))
	      for (i = 0; i < elements.length; i++) {
	        value = callback(elements[i], i)
	        if (value != null) values.push(value)
	      }
	    else
	      for (key in elements) {
	        value = callback(elements[key], key)
	        if (value != null) values.push(value)
	      }
	    return flatten(values)
	  }

	  $.each = function(elements, callback){
	    var i, key
	    if (likeArray(elements)) {
	      for (i = 0; i < elements.length; i++)
	        if (callback.call(elements[i], i, elements[i]) === false) return elements
	    } else {
	      for (key in elements)
	        if (callback.call(elements[key], key, elements[key]) === false) return elements
	    }

	    return elements
	  }

	  $.grep = function(elements, callback){
	    return filter.call(elements, callback)
	  }

	  if (window.JSON) $.parseJSON = JSON.parse

	  // Populate the class2type map
	  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	    class2type[ "[object " + name + "]" ] = name.toLowerCase()
	  })

	  // Define methods that will be available on all
	  // Zepto collections
	  $.fn = {
	    // Because a collection acts like an array
	    // copy over these useful array functions.
	    forEach: emptyArray.forEach,
	    reduce: emptyArray.reduce,
	    push: emptyArray.push,
	    sort: emptyArray.sort,
	    indexOf: emptyArray.indexOf,
	    concat: emptyArray.concat,

	    // `map` and `slice` in the jQuery API work differently
	    // from their array counterparts
	    map: function(fn){
	      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
	    },
	    slice: function(){
	      return $(slice.apply(this, arguments))
	    },

	    ready: function(callback){
	      // need to check if document.body exists for IE as that browser reports
	      // document ready when it hasn't yet created the body element
	      if (readyRE.test(document.readyState) && document.body) callback($)
	      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
	      return this
	    },
	    get: function(idx){
	      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
	    },
	    toArray: function(){ return this.get() },
	    size: function(){
	      return this.length
	    },
	    remove: function(){
	      return this.each(function(){
	        if (this.parentNode != null)
	          this.parentNode.removeChild(this)
	      })
	    },
	    each: function(callback){
	      emptyArray.every.call(this, function(el, idx){
	        return callback.call(el, idx, el) !== false
	      })
	      return this
	    },
	    filter: function(selector){
	      if (isFunction(selector)) return this.not(this.not(selector))
	      return $(filter.call(this, function(element){
	        return zepto.matches(element, selector)
	      }))
	    },
	    add: function(selector,context){
	      return $(uniq(this.concat($(selector,context))))
	    },
	    is: function(selector){
	      return this.length > 0 && zepto.matches(this[0], selector)
	    },
	    not: function(selector){
	      var nodes=[]
	      if (isFunction(selector) && selector.call !== undefined)
	        this.each(function(idx){
	          if (!selector.call(this,idx)) nodes.push(this)
	        })
	      else {
	        var excludes = typeof selector == 'string' ? this.filter(selector) :
	          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
	        this.forEach(function(el){
	          if (excludes.indexOf(el) < 0) nodes.push(el)
	        })
	      }
	      return $(nodes)
	    },
	    has: function(selector){
	      return this.filter(function(){
	        return isObject(selector) ?
	          $.contains(this, selector) :
	          $(this).find(selector).size()
	      })
	    },
	    eq: function(idx){
	      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
	    },
	    first: function(){
	      var el = this[0]
	      return el && !isObject(el) ? el : $(el)
	    },
	    last: function(){
	      var el = this[this.length - 1]
	      return el && !isObject(el) ? el : $(el)
	    },
	    find: function(selector){
	      var result, $this = this
	      if (!selector) result = $()
	      else if (typeof selector == 'object')
	        result = $(selector).filter(function(){
	          var node = this
	          return emptyArray.some.call($this, function(parent){
	            return $.contains(parent, node)
	          })
	        })
	      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
	      else result = this.map(function(){ return zepto.qsa(this, selector) })
	      return result
	    },
	    closest: function(selector, context){
	      var node = this[0], collection = false
	      if (typeof selector == 'object') collection = $(selector)
	      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
	        node = node !== context && !isDocument(node) && node.parentNode
	      return $(node)
	    },
	    parents: function(selector){
	      var ancestors = [], nodes = this
	      while (nodes.length > 0)
	        nodes = $.map(nodes, function(node){
	          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
	            ancestors.push(node)
	            return node
	          }
	        })
	      return filtered(ancestors, selector)
	    },
	    parent: function(selector){
	      return filtered(uniq(this.pluck('parentNode')), selector)
	    },
	    children: function(selector){
	      return filtered(this.map(function(){ return children(this) }), selector)
	    },
	    contents: function() {
	      return this.map(function() { return slice.call(this.childNodes) })
	    },
	    siblings: function(selector){
	      return filtered(this.map(function(i, el){
	        return filter.call(children(el.parentNode), function(child){ return child!==el })
	      }), selector)
	    },
	    empty: function(){
	      return this.each(function(){ this.innerHTML = '' })
	    },
	    // `pluck` is borrowed from Prototype.js
	    pluck: function(property){
	      return $.map(this, function(el){ return el[property] })
	    },
	    show: function(){
	      return this.each(function(){
	        this.style.display == "none" && (this.style.display = '')
	        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
	          this.style.display = defaultDisplay(this.nodeName)
	      })
	    },
	    replaceWith: function(newContent){
	      return this.before(newContent).remove()
	    },
	    wrap: function(structure){
	      var func = isFunction(structure)
	      if (this[0] && !func)
	        var dom   = $(structure).get(0),
	            clone = dom.parentNode || this.length > 1

	      return this.each(function(index){
	        $(this).wrapAll(
	          func ? structure.call(this, index) :
	            clone ? dom.cloneNode(true) : dom
	        )
	      })
	    },
	    wrapAll: function(structure){
	      if (this[0]) {
	        $(this[0]).before(structure = $(structure))
	        var children
	        // drill down to the inmost element
	        while ((children = structure.children()).length) structure = children.first()
	        $(structure).append(this)
	      }
	      return this
	    },
	    wrapInner: function(structure){
	      var func = isFunction(structure)
	      return this.each(function(index){
	        var self = $(this), contents = self.contents(),
	            dom  = func ? structure.call(this, index) : structure
	        contents.length ? contents.wrapAll(dom) : self.append(dom)
	      })
	    },
	    unwrap: function(){
	      this.parent().each(function(){
	        $(this).replaceWith($(this).children())
	      })
	      return this
	    },
	    clone: function(){
	      return this.map(function(){ return this.cloneNode(true) })
	    },
	    hide: function(){
	      return this.css("display", "none")
	    },
	    toggle: function(setting){
	      return this.each(function(){
	        var el = $(this)
	        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
	      })
	    },
	    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
	    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
	    html: function(html){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var originHtml = this.innerHTML
	          $(this).empty().append( funcArg(this, html, idx, originHtml) )
	        }) :
	        (0 in this ? this[0].innerHTML : null)
	    },
	    text: function(text){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var newText = funcArg(this, text, idx, this.textContent)
	          this.textContent = newText == null ? '' : ''+newText
	        }) :
	        (0 in this ? this[0].textContent : null)
	    },
	    attr: function(name, value){
	      var result
	      return (typeof name == 'string' && !(1 in arguments)) ?
	        (!this.length || this[0].nodeType !== 1 ? undefined :
	          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
	        ) :
	        this.each(function(idx){
	          if (this.nodeType !== 1) return
	          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
	          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
	        })
	    },
	    removeAttr: function(name){
	      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
	        setAttribute(this, attribute)
	      }, this)})
	    },
	    prop: function(name, value){
	      name = propMap[name] || name
	      return (1 in arguments) ?
	        this.each(function(idx){
	          this[name] = funcArg(this, value, idx, this[name])
	        }) :
	        (this[0] && this[0][name])
	    },
	    data: function(name, value){
	      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

	      var data = (1 in arguments) ?
	        this.attr(attrName, value) :
	        this.attr(attrName)

	      return data !== null ? deserializeValue(data) : undefined
	    },
	    val: function(value){
	      return 0 in arguments ?
	        this.each(function(idx){
	          this.value = funcArg(this, value, idx, this.value)
	        }) :
	        (this[0] && (this[0].multiple ?
	           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
	           this[0].value)
	        )
	    },
	    offset: function(coordinates){
	      if (coordinates) return this.each(function(index){
	        var $this = $(this),
	            coords = funcArg(this, coordinates, index, $this.offset()),
	            parentOffset = $this.offsetParent().offset(),
	            props = {
	              top:  coords.top  - parentOffset.top,
	              left: coords.left - parentOffset.left
	            }

	        if ($this.css('position') == 'static') props['position'] = 'relative'
	        $this.css(props)
	      })
	      if (!this.length) return null
	      var obj = this[0].getBoundingClientRect()
	      return {
	        left: obj.left + window.pageXOffset,
	        top: obj.top + window.pageYOffset,
	        width: Math.round(obj.width),
	        height: Math.round(obj.height)
	      }
	    },
	    css: function(property, value){
	      if (arguments.length < 2) {
	        var computedStyle, element = this[0]
	        if(!element) return
	        computedStyle = getComputedStyle(element, '')
	        if (typeof property == 'string')
	          return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
	        else if (isArray(property)) {
	          var props = {}
	          $.each(property, function(_, prop){
	            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
	          })
	          return props
	        }
	      }

	      var css = ''
	      if (type(property) == 'string') {
	        if (!value && value !== 0)
	          this.each(function(){ this.style.removeProperty(dasherize(property)) })
	        else
	          css = dasherize(property) + ":" + maybeAddPx(property, value)
	      } else {
	        for (key in property)
	          if (!property[key] && property[key] !== 0)
	            this.each(function(){ this.style.removeProperty(dasherize(key)) })
	          else
	            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
	      }

	      return this.each(function(){ this.style.cssText += ';' + css })
	    },
	    index: function(element){
	      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
	    },
	    hasClass: function(name){
	      if (!name) return false
	      return emptyArray.some.call(this, function(el){
	        return this.test(className(el))
	      }, classRE(name))
	    },
	    addClass: function(name){
	      if (!name) return this
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        classList = []
	        var cls = className(this), newName = funcArg(this, name, idx, cls)
	        newName.split(/\s+/g).forEach(function(klass){
	          if (!$(this).hasClass(klass)) classList.push(klass)
	        }, this)
	        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
	      })
	    },
	    removeClass: function(name){
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        if (name === undefined) return className(this, '')
	        classList = className(this)
	        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
	          classList = classList.replace(classRE(klass), " ")
	        })
	        className(this, classList.trim())
	      })
	    },
	    toggleClass: function(name, when){
	      if (!name) return this
	      return this.each(function(idx){
	        var $this = $(this), names = funcArg(this, name, idx, className(this))
	        names.split(/\s+/g).forEach(function(klass){
	          (when === undefined ? !$this.hasClass(klass) : when) ?
	            $this.addClass(klass) : $this.removeClass(klass)
	        })
	      })
	    },
	    scrollTop: function(value){
	      if (!this.length) return
	      var hasScrollTop = 'scrollTop' in this[0]
	      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
	      return this.each(hasScrollTop ?
	        function(){ this.scrollTop = value } :
	        function(){ this.scrollTo(this.scrollX, value) })
	    },
	    scrollLeft: function(value){
	      if (!this.length) return
	      var hasScrollLeft = 'scrollLeft' in this[0]
	      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
	      return this.each(hasScrollLeft ?
	        function(){ this.scrollLeft = value } :
	        function(){ this.scrollTo(value, this.scrollY) })
	    },
	    position: function() {
	      if (!this.length) return

	      var elem = this[0],
	        // Get *real* offsetParent
	        offsetParent = this.offsetParent(),
	        // Get correct offsets
	        offset       = this.offset(),
	        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

	      // Subtract element margins
	      // note: when an element has margin: auto the offsetLeft and marginLeft
	      // are the same in Safari causing offset.left to incorrectly be 0
	      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
	      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

	      // Add offsetParent borders
	      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
	      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

	      // Subtract the two offsets
	      return {
	        top:  offset.top  - parentOffset.top,
	        left: offset.left - parentOffset.left
	      }
	    },
	    offsetParent: function() {
	      return this.map(function(){
	        var parent = this.offsetParent || document.body
	        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
	          parent = parent.offsetParent
	        return parent
	      })
	    }
	  }

	  // for now
	  $.fn.detach = $.fn.remove

	  // Generate the `width` and `height` functions
	  ;['width', 'height'].forEach(function(dimension){
	    var dimensionProperty =
	      dimension.replace(/./, function(m){ return m[0].toUpperCase() })

	    $.fn[dimension] = function(value){
	      var offset, el = this[0]
	      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
	        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
	        (offset = this.offset()) && offset[dimension]
	      else return this.each(function(idx){
	        el = $(this)
	        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
	      })
	    }
	  })

	  function traverseNode(node, fun) {
	    fun(node)
	    for (var i = 0, len = node.childNodes.length; i < len; i++)
	      traverseNode(node.childNodes[i], fun)
	  }

	  // Generate the `after`, `prepend`, `before`, `append`,
	  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
	  adjacencyOperators.forEach(function(operator, operatorIndex) {
	    var inside = operatorIndex % 2 //=> prepend, append

	    $.fn[operator] = function(){
	      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
	      var argType, nodes = $.map(arguments, function(arg) {
	            argType = type(arg)
	            return argType == "object" || argType == "array" || arg == null ?
	              arg : zepto.fragment(arg)
	          }),
	          parent, copyByClone = this.length > 1
	      if (nodes.length < 1) return this

	      return this.each(function(_, target){
	        parent = inside ? target : target.parentNode

	        // convert all methods to a "before" operation
	        target = operatorIndex == 0 ? target.nextSibling :
	                 operatorIndex == 1 ? target.firstChild :
	                 operatorIndex == 2 ? target :
	                 null

	        var parentInDocument = $.contains(document.documentElement, parent)

	        nodes.forEach(function(node){
	          if (copyByClone) node = node.cloneNode(true)
	          else if (!parent) return $(node).remove()

	          parent.insertBefore(node, target)
	          if (parentInDocument) traverseNode(node, function(el){
	            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
	               (!el.type || el.type === 'text/javascript') && !el.src)
	              window['eval'].call(window, el.innerHTML)
	          })
	        })
	      })
	    }

	    // after    => insertAfter
	    // prepend  => prependTo
	    // before   => insertBefore
	    // append   => appendTo
	    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
	      $(html)[operator](this)
	      return this
	    }
	  })

	  zepto.Z.prototype = $.fn

	  // Export internal API functions in the `$.zepto` namespace
	  zepto.uniq = uniq
	  zepto.deserializeValue = deserializeValue
	  $.zepto = zepto

	  return $
	})()

	window.Zepto = Zepto
	window.$ === undefined && (window.$ = Zepto)

	;(function($){
	  var _zid = 1, undefined,
	      slice = Array.prototype.slice,
	      isFunction = $.isFunction,
	      isString = function(obj){ return typeof obj == 'string' },
	      handlers = {},
	      specialEvents={},
	      focusinSupported = 'onfocusin' in window,
	      focus = { focus: 'focusin', blur: 'focusout' },
	      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

	  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

	  function zid(element) {
	    return element._zid || (element._zid = _zid++)
	  }
	  function findHandlers(element, event, fn, selector) {
	    event = parse(event)
	    if (event.ns) var matcher = matcherFor(event.ns)
	    return (handlers[zid(element)] || []).filter(function(handler) {
	      return handler
	        && (!event.e  || handler.e == event.e)
	        && (!event.ns || matcher.test(handler.ns))
	        && (!fn       || zid(handler.fn) === zid(fn))
	        && (!selector || handler.sel == selector)
	    })
	  }
	  function parse(event) {
	    var parts = ('' + event).split('.')
	    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
	  }
	  function matcherFor(ns) {
	    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
	  }

	  function eventCapture(handler, captureSetting) {
	    return handler.del &&
	      (!focusinSupported && (handler.e in focus)) ||
	      !!captureSetting
	  }

	  function realEvent(type) {
	    return hover[type] || (focusinSupported && focus[type]) || type
	  }

	  function add(element, events, fn, data, selector, delegator, capture){
	    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
	    events.split(/\s/).forEach(function(event){
	      if (event == 'ready') return $(document).ready(fn)
	      var handler   = parse(event)
	      handler.fn    = fn
	      handler.sel   = selector
	      // emulate mouseenter, mouseleave
	      if (handler.e in hover) fn = function(e){
	        var related = e.relatedTarget
	        if (!related || (related !== this && !$.contains(this, related)))
	          return handler.fn.apply(this, arguments)
	      }
	      handler.del   = delegator
	      var callback  = delegator || fn
	      handler.proxy = function(e){
	        e = compatible(e)
	        if (e.isImmediatePropagationStopped()) return
	        e.data = data
	        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
	        if (result === false) e.preventDefault(), e.stopPropagation()
	        return result
	      }
	      handler.i = set.length
	      set.push(handler)
	      if ('addEventListener' in element)
	        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	    })
	  }
	  function remove(element, events, fn, selector, capture){
	    var id = zid(element)
	    ;(events || '').split(/\s/).forEach(function(event){
	      findHandlers(element, event, fn, selector).forEach(function(handler){
	        delete handlers[id][handler.i]
	      if ('removeEventListener' in element)
	        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	      })
	    })
	  }

	  $.event = { add: add, remove: remove }

	  $.proxy = function(fn, context) {
	    var args = (2 in arguments) && slice.call(arguments, 2)
	    if (isFunction(fn)) {
	      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
	      proxyFn._zid = zid(fn)
	      return proxyFn
	    } else if (isString(context)) {
	      if (args) {
	        args.unshift(fn[context], fn)
	        return $.proxy.apply(null, args)
	      } else {
	        return $.proxy(fn[context], fn)
	      }
	    } else {
	      throw new TypeError("expected function")
	    }
	  }

	  $.fn.bind = function(event, data, callback){
	    return this.on(event, data, callback)
	  }
	  $.fn.unbind = function(event, callback){
	    return this.off(event, callback)
	  }
	  $.fn.one = function(event, selector, data, callback){
	    return this.on(event, selector, data, callback, 1)
	  }

	  var returnTrue = function(){return true},
	      returnFalse = function(){return false},
	      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
	      eventMethods = {
	        preventDefault: 'isDefaultPrevented',
	        stopImmediatePropagation: 'isImmediatePropagationStopped',
	        stopPropagation: 'isPropagationStopped'
	      }

	  function compatible(event, source) {
	    if (source || !event.isDefaultPrevented) {
	      source || (source = event)

	      $.each(eventMethods, function(name, predicate) {
	        var sourceMethod = source[name]
	        event[name] = function(){
	          this[predicate] = returnTrue
	          return sourceMethod && sourceMethod.apply(source, arguments)
	        }
	        event[predicate] = returnFalse
	      })

	      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
	          'returnValue' in source ? source.returnValue === false :
	          source.getPreventDefault && source.getPreventDefault())
	        event.isDefaultPrevented = returnTrue
	    }
	    return event
	  }

	  function createProxy(event) {
	    var key, proxy = { originalEvent: event }
	    for (key in event)
	      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

	    return compatible(proxy, event)
	  }

	  $.fn.delegate = function(selector, event, callback){
	    return this.on(event, selector, callback)
	  }
	  $.fn.undelegate = function(selector, event, callback){
	    return this.off(event, selector, callback)
	  }

	  $.fn.live = function(event, callback){
	    $(document.body).delegate(this.selector, event, callback)
	    return this
	  }
	  $.fn.die = function(event, callback){
	    $(document.body).undelegate(this.selector, event, callback)
	    return this
	  }

	  $.fn.on = function(event, selector, data, callback, one){
	    var autoRemove, delegator, $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.on(type, selector, data, fn, one)
	      })
	      return $this
	    }

	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = data, data = selector, selector = undefined
	    if (isFunction(data) || data === false)
	      callback = data, data = undefined

	    if (callback === false) callback = returnFalse

	    return $this.each(function(_, element){
	      if (one) autoRemove = function(e){
	        remove(element, e.type, callback)
	        return callback.apply(this, arguments)
	      }

	      if (selector) delegator = function(e){
	        var evt, match = $(e.target).closest(selector, element).get(0)
	        if (match && match !== element) {
	          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
	          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
	        }
	      }

	      add(element, event, callback, data, selector, delegator || autoRemove)
	    })
	  }
	  $.fn.off = function(event, selector, callback){
	    var $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.off(type, selector, fn)
	      })
	      return $this
	    }

	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = selector, selector = undefined

	    if (callback === false) callback = returnFalse

	    return $this.each(function(){
	      remove(this, event, callback, selector)
	    })
	  }

	  $.fn.trigger = function(event, args){
	    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
	    event._args = args
	    return this.each(function(){
	      // handle focus(), blur() by calling them directly
	      if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
	      // items in the collection might not be DOM elements
	      else if ('dispatchEvent' in this) this.dispatchEvent(event)
	      else $(this).triggerHandler(event, args)
	    })
	  }

	  // triggers event handlers on current element just as if an event occurred,
	  // doesn't trigger an actual event, doesn't bubble
	  $.fn.triggerHandler = function(event, args){
	    var e, result
	    this.each(function(i, element){
	      e = createProxy(isString(event) ? $.Event(event) : event)
	      e._args = args
	      e.target = element
	      $.each(findHandlers(element, event.type || event), function(i, handler){
	        result = handler.proxy(e)
	        if (e.isImmediatePropagationStopped()) return false
	      })
	    })
	    return result
	  }

	  // shortcut methods for `.bind(event, fn)` for each event type
	  ;('focusin focusout focus blur load resize scroll unload click dblclick '+
	  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
	  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
	    $.fn[event] = function(callback) {
	      return (0 in arguments) ?
	        this.bind(event, callback) :
	        this.trigger(event)
	    }
	  })

	  $.Event = function(type, props) {
	    if (!isString(type)) props = type, type = props.type
	    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
	    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
	    event.initEvent(type, bubbles, true)
	    return compatible(event)
	  }

	})(Zepto)

	;(function($){
	  var jsonpID = 0,
	      document = window.document,
	      key,
	      name,
	      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	      scriptTypeRE = /^(?:text|application)\/javascript/i,
	      xmlTypeRE = /^(?:text|application)\/xml/i,
	      jsonType = 'application/json',
	      htmlType = 'text/html',
	      blankRE = /^\s*$/,
	      originAnchor = document.createElement('a')

	  originAnchor.href = window.location.href

	  // trigger a custom event and return false if it was cancelled
	  function triggerAndReturn(context, eventName, data) {
	    var event = $.Event(eventName)
	    $(context).trigger(event, data)
	    return !event.isDefaultPrevented()
	  }

	  // trigger an Ajax "global" event
	  function triggerGlobal(settings, context, eventName, data) {
	    if (settings.global) return triggerAndReturn(context || document, eventName, data)
	  }

	  // Number of active Ajax requests
	  $.active = 0

	  function ajaxStart(settings) {
	    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
	  }
	  function ajaxStop(settings) {
	    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
	  }

	  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
	  function ajaxBeforeSend(xhr, settings) {
	    var context = settings.context
	    if (settings.beforeSend.call(context, xhr, settings) === false ||
	        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
	      return false

	    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
	  }
	  function ajaxSuccess(data, xhr, settings, deferred) {
	    var context = settings.context, status = 'success'
	    settings.success.call(context, data, status, xhr)
	    if (deferred) deferred.resolveWith(context, [data, status, xhr])
	    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
	    ajaxComplete(status, xhr, settings)
	  }
	  // type: "timeout", "error", "abort", "parsererror"
	  function ajaxError(error, type, xhr, settings, deferred) {
	    var context = settings.context
	    settings.error.call(context, xhr, type, error)
	    if (deferred) deferred.rejectWith(context, [xhr, type, error])
	    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
	    ajaxComplete(type, xhr, settings)
	  }
	  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
	  function ajaxComplete(status, xhr, settings) {
	    var context = settings.context
	    settings.complete.call(context, xhr, status)
	    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
	    ajaxStop(settings)
	  }

	  // Empty function, used as default callback
	  function empty() {}

	  $.ajaxJSONP = function(options, deferred){
	    if (!('type' in options)) return $.ajax(options)

	    var _callbackName = options.jsonpCallback,
	      callbackName = ($.isFunction(_callbackName) ?
	        _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
	      script = document.createElement('script'),
	      originalCallback = window[callbackName],
	      responseData,
	      abort = function(errorType) {
	        $(script).triggerHandler('error', errorType || 'abort')
	      },
	      xhr = { abort: abort }, abortTimeout

	    if (deferred) deferred.promise(xhr)

	    $(script).on('load error', function(e, errorType){
	      clearTimeout(abortTimeout)
	      $(script).off().remove()

	      if (e.type == 'error' || !responseData) {
	        ajaxError(null, errorType || 'error', xhr, options, deferred)
	      } else {
	        ajaxSuccess(responseData[0], xhr, options, deferred)
	      }

	      window[callbackName] = originalCallback
	      if (responseData && $.isFunction(originalCallback))
	        originalCallback(responseData[0])

	      originalCallback = responseData = undefined
	    })

	    if (ajaxBeforeSend(xhr, options) === false) {
	      abort('abort')
	      return xhr
	    }

	    window[callbackName] = function(){
	      responseData = arguments
	    }

	    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
	    document.head.appendChild(script)

	    if (options.timeout > 0) abortTimeout = setTimeout(function(){
	      abort('timeout')
	    }, options.timeout)

	    return xhr
	  }

	  $.ajaxSettings = {
	    // Default type of request
	    type: 'GET',
	    // Callback that is executed before request
	    beforeSend: empty,
	    // Callback that is executed if the request succeeds
	    success: empty,
	    // Callback that is executed the the server drops error
	    error: empty,
	    // Callback that is executed on request complete (both: error and success)
	    complete: empty,
	    // The context for the callbacks
	    context: null,
	    // Whether to trigger "global" Ajax events
	    global: true,
	    // Transport
	    xhr: function () {
	      return new window.XMLHttpRequest()
	    },
	    // MIME types mapping
	    // IIS returns Javascript as "application/x-javascript"
	    accepts: {
	      script: 'text/javascript, application/javascript, application/x-javascript',
	      json:   jsonType,
	      xml:    'application/xml, text/xml',
	      html:   htmlType,
	      text:   'text/plain'
	    },
	    // Whether the request is to another domain
	    crossDomain: false,
	    // Default timeout
	    timeout: 0,
	    // Whether data should be serialized to string
	    processData: true,
	    // Whether the browser should be allowed to cache GET responses
	    cache: true
	  }

	  function mimeToDataType(mime) {
	    if (mime) mime = mime.split(';', 2)[0]
	    return mime && ( mime == htmlType ? 'html' :
	      mime == jsonType ? 'json' :
	      scriptTypeRE.test(mime) ? 'script' :
	      xmlTypeRE.test(mime) && 'xml' ) || 'text'
	  }

	  function appendQuery(url, query) {
	    if (query == '') return url
	    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
	  }

	  // serialize payload and append it to the URL for GET requests
	  function serializeData(options) {
	    if (options.processData && options.data && $.type(options.data) != "string")
	      options.data = $.param(options.data, options.traditional)
	    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
	      options.url = appendQuery(options.url, options.data), options.data = undefined
	  }

	  $.ajax = function(options){
	    var settings = $.extend({}, options || {}),
	        deferred = $.Deferred && $.Deferred(),
	        urlAnchor
	    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

	    ajaxStart(settings)

	    if (!settings.crossDomain) {
	      urlAnchor = document.createElement('a')
	      urlAnchor.href = settings.url
	      urlAnchor.href = urlAnchor.href
	      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
	    }

	    if (!settings.url) settings.url = window.location.toString()
	    serializeData(settings)

	    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
	    if (hasPlaceholder) dataType = 'jsonp'

	    if (settings.cache === false || (
	         (!options || options.cache !== true) &&
	         ('script' == dataType || 'jsonp' == dataType)
	        ))
	      settings.url = appendQuery(settings.url, '_=' + Date.now())

	    if ('jsonp' == dataType) {
	      if (!hasPlaceholder)
	        settings.url = appendQuery(settings.url,
	          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
	      return $.ajaxJSONP(settings, deferred)
	    }

	    var mime = settings.accepts[dataType],
	        headers = { },
	        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
	        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
	        xhr = settings.xhr(),
	        nativeSetHeader = xhr.setRequestHeader,
	        abortTimeout

	    if (deferred) deferred.promise(xhr)

	    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
	    setHeader('Accept', mime || '*/*')
	    if (mime = settings.mimeType || mime) {
	      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
	      xhr.overrideMimeType && xhr.overrideMimeType(mime)
	    }
	    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
	      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')

	    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
	    xhr.setRequestHeader = setHeader

	    xhr.onreadystatechange = function(){
	      if (xhr.readyState == 4) {
	        xhr.onreadystatechange = empty
	        clearTimeout(abortTimeout)
	        var result, error = false
	        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
	          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))
	          result = xhr.responseText

	          try {
	            // http://perfectionkills.com/global-eval-what-are-the-options/
	            if (dataType == 'script')    (1,eval)(result)
	            else if (dataType == 'xml')  result = xhr.responseXML
	            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
	          } catch (e) { error = e }

	          if (error) ajaxError(error, 'parsererror', xhr, settings, deferred)
	          else ajaxSuccess(result, xhr, settings, deferred)
	        } else {
	          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
	        }
	      }
	    }

	    if (ajaxBeforeSend(xhr, settings) === false) {
	      xhr.abort()
	      ajaxError(null, 'abort', xhr, settings, deferred)
	      return xhr
	    }

	    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]

	    var async = 'async' in settings ? settings.async : true
	    xhr.open(settings.type, settings.url, async, settings.username, settings.password)

	    for (name in headers) nativeSetHeader.apply(xhr, headers[name])

	    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
	        xhr.onreadystatechange = empty
	        xhr.abort()
	        ajaxError(null, 'timeout', xhr, settings, deferred)
	      }, settings.timeout)

	    // avoid sending empty string (#319)
	    xhr.send(settings.data ? settings.data : null)
	    return xhr
	  }

	  // handle optional data/success arguments
	  function parseArguments(url, data, success, dataType) {
	    if ($.isFunction(data)) dataType = success, success = data, data = undefined
	    if (!$.isFunction(success)) dataType = success, success = undefined
	    return {
	      url: url
	    , data: data
	    , success: success
	    , dataType: dataType
	    }
	  }

	  $.get = function(/* url, data, success, dataType */){
	    return $.ajax(parseArguments.apply(null, arguments))
	  }

	  $.post = function(/* url, data, success, dataType */){
	    var options = parseArguments.apply(null, arguments)
	    options.type = 'POST'
	    return $.ajax(options)
	  }

	  $.getJSON = function(/* url, data, success */){
	    var options = parseArguments.apply(null, arguments)
	    options.dataType = 'json'
	    return $.ajax(options)
	  }

	  $.fn.load = function(url, data, success){
	    if (!this.length) return this
	    var self = this, parts = url.split(/\s/), selector,
	        options = parseArguments(url, data, success),
	        callback = options.success
	    if (parts.length > 1) options.url = parts[0], selector = parts[1]
	    options.success = function(response){
	      self.html(selector ?
	        $('<div>').html(response.replace(rscript, "")).find(selector)
	        : response)
	      callback && callback.apply(self, arguments)
	    }
	    $.ajax(options)
	    return this
	  }

	  var escape = encodeURIComponent

	  function serialize(params, obj, traditional, scope){
	    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
	    $.each(obj, function(key, value) {
	      type = $.type(value)
	      if (scope) key = traditional ? scope :
	        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
	      // handle data in serializeArray() format
	      if (!scope && array) params.add(value.name, value.value)
	      // recurse into nested objects
	      else if (type == "array" || (!traditional && type == "object"))
	        serialize(params, value, traditional, key)
	      else params.add(key, value)
	    })
	  }

	  $.param = function(obj, traditional){
	    var params = []
	    params.add = function(key, value) {
	      if ($.isFunction(value)) value = value()
	      if (value == null) value = ""
	      this.push(escape(key) + '=' + escape(value))
	    }
	    serialize(params, obj, traditional)
	    return params.join('&').replace(/%20/g, '+')
	  }
	})(Zepto)

	;(function($){
	  $.fn.serializeArray = function() {
	    var name, type, result = [],
	      add = function(value) {
	        if (value.forEach) return value.forEach(add)
	        result.push({ name: name, value: value })
	      }
	    if (this[0]) $.each(this[0].elements, function(_, field){
	      type = field.type, name = field.name
	      if (name && field.nodeName.toLowerCase() != 'fieldset' &&
	        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
	        ((type != 'radio' && type != 'checkbox') || field.checked))
	          add($(field).val())
	    })
	    return result
	  }

	  $.fn.serialize = function(){
	    var result = []
	    this.serializeArray().forEach(function(elm){
	      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
	    })
	    return result.join('&')
	  }

	  $.fn.submit = function(callback) {
	    if (0 in arguments) this.bind('submit', callback)
	    else if (this.length) {
	      var event = $.Event('submit')
	      this.eq(0).trigger(event)
	      if (!event.isDefaultPrevented()) this.get(0).submit()
	    }
	    return this
	  }

	})(Zepto)

	;(function($){
	  // __proto__ doesn't exist on IE<11, so redefine
	  // the Z function to use object extension instead
	  if (!('__proto__' in {})) {
	    $.extend($.zepto, {
	      Z: function(dom, selector){
	        dom = dom || []
	        $.extend(dom, $.fn)
	        dom.selector = selector || ''
	        dom.__Z = true
	        return dom
	      },
	      // this is a kludge but works
	      isZ: function(object){
	        return $.type(object) === 'array' && '__Z' in object
	      }
	    })
	  }

	  // getComputedStyle shouldn't freak out when called
	  // without a valid element as argument
	  try {
	    getComputedStyle(undefined)
	  } catch(e) {
	    var nativeGetComputedStyle = getComputedStyle;
	    window.getComputedStyle = function(element){
	      try {
	        return nativeGetComputedStyle(element)
	      } catch(e) {
	        return null
	      }
	    }
	  }
	})(Zepto)
	;

	if (true) {
	  module.exports = Zepto;
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataHandler = function () {
	  function DataHandler() {
	    _classCallCheck(this, DataHandler);
	  }

	  _createClass(DataHandler, [{
	    key: 'setData',
	    value: function setData(content) {
	      this.content = content;
	    }
	  }, {
	    key: 'getData',
	    value: function getData(field) {
	      return this.content[field];
	    }
	  }, {
	    key: 'getCopy',
	    value: function getCopy(frameNumber) {
	      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Copy';

	      var copy = this.content['Frame' + frameNumber + type];
	      var copyFormatted = copy.replace(/(<>)/g, '');
	      copyFormatted = copyFormatted.split('<n>');
	      return copyFormatted;
	    }
	  }, {
	    key: 'getSubcopy',
	    value: function getSubcopy(frameNumber) {
	      var result = this.getCopy(frameNumber, 'Subcopy');
	      return result;
	    }
	  }, {
	    key: 'getYellowCopy',
	    value: function getYellowCopy(frameNumber) {
	      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Copy';

	      var copy = this.content['Frame' + frameNumber + type];
	      var copyYellow = copy.split('<>');
	      for (var i = 0; i < copyYellow.length; i += 1) {
	        copyYellow.splice(i, 1);
	      }
	      var copyTemp = copyYellow;
	      copyYellow = [];
	      for (var _i = 0; _i < copyTemp.length; _i += 1) {
	        copyTemp[_i] = copyTemp[_i].split('<n>');
	        copyYellow = copyYellow.concat(copyTemp[_i]);
	      }
	      return copyYellow;
	    }
	  }, {
	    key: 'getRubrikCopyHTML',
	    value: function getRubrikCopyHTML(frameNumber) {
	      var copy = this.content['Frame' + frameNumber + 'Subcopy'];
	      copy = copy.replace(/(<n>)/g, '<br>');
	      var limit = (copy.match(/<>/g) || []).length;
	      for (var i = 0; i < limit; i += 1) {
	        if (i % 2 === 0) {
	          copy = copy.replace('<>', '<span class="yellow">');
	        } else {
	          copy = copy.replace('<>', '</span>');
	        }
	      }
	      return copy;
	    }
	  }, {
	    key: 'getLineCount',
	    value: function getLineCount(frameNumber) {
	      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Copy';

	      var result = this.getCopy(frameNumber, type).length;
	      return result;
	    }
	  }, {
	    key: 'getCopyAnchorPoint',
	    value: function getCopyAnchorPoint(frameNumber) {
	      return this.content['Frame' + frameNumber + 'CopyAnchorPoint'];
	    }
	  }, {
	    key: 'getCtaCopy',
	    value: function getCtaCopy() {
	      return this.content.Frame5CtaCopy;
	    }
	  }, {
	    key: 'getCtaSubcopy',
	    value: function getCtaSubcopy() {
	      return this.content.Frame5CtaSubcopy;
	    }
	  }, {
	    key: 'getExitUrl',
	    value: function getExitUrl() {
	      return this.content.ExitURL.Url;
	    }
	  }]);

	  return DataHandler;
	}();

	exports.default = DataHandler;

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Firefly = __webpack_require__(7);

	var _Firefly2 = _interopRequireDefault(_Firefly);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DotsMotion = function () {
	  function DotsMotion(config) {
	    _classCallCheck(this, DotsMotion);

	    this.dotContainer = config.dotContainer;
	    this.grid = config.grid;
	    this.everyOtherDotX = config.everyOtherDotX;
	    this.everyOtherDotY = config.everyOtherDotY;
	    this.freq = config.freq;
	    this.dotDelay = config.dotDelay;
	    this.dotDur = config.dotDur;
	    this.dotScale = config.dotScale;
	    this.dotAlpha = config.dotAlpha;
	    this.runAnimation = config.runAnimation;
	    this.canvas = config.canvas;
	    this.delay = config.delay;
	    this.duration = config.duration;
	    this.initDots();
	    this.firefly = new _Firefly2.default(this.movingDots, this.grid, this.dotContainer, this.canvas);
	  }

	  _createClass(DotsMotion, [{
	    key: 'start',
	    value: function start() {
	      var _this = this;

	      this.firefly.run();
	      setTimeout(this.firefly.run.bind(this.firefly), this.delay);

	      setTimeout(function () {
	        _this.firefly.pause();
	      }, this.duration);
	    }
	  }, {
	    key: 'initDots',
	    value: function initDots() {
	      var $dot;
	      var $dotContainer = $(this.dotContainer);
	      var x = 0,
	          y = 0;

	      var dotContainerWidth = this.dotContainer.offsetWidth;
	      var dotContainerHeight = this.dotContainer.offsetHeight;

	      this.movingDots = [[]];

	      while (x * this.grid < dotContainerWidth || y * this.grid < dotContainerHeight) {
	        $dot = $('<div class="dot"></div>');
	        $dot.css({
	          left: x * this.grid + 'px',
	          top: y * this.grid + 'px',
	          display: 'none'
	        });

	        x += 1;
	        if (x * this.grid > dotContainerWidth) {
	          y += 1;
	          this.movingDots.push([]);
	          if (y * this.grid < dotContainerHeight) {
	            x = 0;
	          }
	        }
	        this.movingDots[y].push($dot);
	        $dotContainer.append($dot);
	      }
	    }
	  }]);

	  return DotsMotion;
	}();

	exports.default = DotsMotion;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (dots, grid, dotContainer, canvas) {
	  this.dots = dots;
	  this.grid = grid;
	  this.canvas = canvas;
	  this.dotContainer = $(dotContainer);
	  this.isAnimationRunning = true;
	  this.animations = [[{ x: 7, y: 3, direction: 4 }, { x: 6, y: 3, direction: 4 }, { x: 5, y: 3, direction: 1 }, { x: 5, y: 2, direction: 2 }, { x: 6, y: 2, direction: 2 }, { x: 7, y: 2, direction: 2 }, { x: 8, y: 2, direction: 2 }, { x: 9, y: 2, direction: 2 }], [{ x: 1, y: 3, direction: 2 }, { x: 2, y: 3, direction: 2 }, { x: 3, y: 3, direction: 2 }, { x: 4, y: 3, direction: 1 }, { x: 4, y: 2, direction: 1 }, { x: 4, y: 1, direction: 2 }, { x: 5, y: 1, direction: 2 }, { x: 6, y: 1, direction: 2 }, { x: 7, y: 1, direction: 2 }], [{ x: 1, y: 1, direction: 3 }, { x: 1, y: 2, direction: 3 }, { x: 1, y: 3, direction: 3 }, { x: 1, y: 4, direction: 3 }, { x: 1, y: 5, direction: 3 }, { x: 1, y: 6, direction: 3 }], [{ x: 1, y: 1, direction: 2 }, { x: 2, y: 1, direction: 2 }, { x: 3, y: 1, direction: 2 }, { x: 4, y: 1, direction: 2 }, { x: 5, y: 1, direction: 2 }, { x: 6, y: 1, direction: 2 }], [{ x: 1, y: 1, direction: 3 }, { x: 1, y: 2, direction: 3 }, { x: 1, y: 3, direction: 3 }, { x: 1, y: 4, direction: 2 }, { x: 2, y: 4, direction: 1 }, { x: 2, y: 3, direction: 1 }, { x: 2, y: 2, direction: 1 }, { x: 2, y: 1, direction: 1 }]];

	  this.getAnim = function () {
	    return this.animations[Math.floor(Math.random() * this.animations.length)];
	  };

	  this.getMovement = function (direction) {
	    switch (direction) {
	      case 1:
	        return { x: 0, y: -1 };
	        break;
	      case 2:
	        return { x: 1, y: 0 };
	        break;
	      case 3:
	        return { x: 0, y: 1 };
	        break;
	      case 4:
	        return { x: -1, y: 0 };
	        break;
	    }
	  };

	  this.getRandomVisibleDot = function () {
	    function getRandomInt(min, max) {
	      return Math.floor(Math.random() * (max - min + 1)) + min;
	    }

	    var dotX = getRandomInt(0, Math.round(this.canvas.offsetWidth / this.grid));
	    var dotY = getRandomInt(0, Math.round(this.canvas.offsetHeight / this.grid));
	    var offsetX = Math.floor(-this.dotContainer[0].getBoundingClientRect().left / this.grid);
	    var offsetY = Math.floor(-this.dotContainer[0].getBoundingClientRect().top / this.grid);
	    return { x: dotX + offsetX, y: dotY + offsetY };
	  };

	  this.pause = function () {
	    this.isAnimationRunning = false;
	  };

	  this.run = function () {
	    var self = this;
	    var startY = this.getRandomVisibleDot().y;
	    var startX = this.getRandomVisibleDot().x;
	    var anim = this.getAnim();
	    var t1 = new TimelineMax({ onComplete: reset });

	    function reset() {
	      t1.seek(0);
	      t1.pause();
	      if (self.isAnimationRunning) {
	        self.run();
	      }
	    }

	    for (var i = 0; i < anim.length; i++) {
	      var item = anim[i];
	      var dot = null;
	      var x = this.getMovement(item.direction).x;
	      var y = this.getMovement(item.direction).y;
	      var dotClone;

	      if (typeof dots[item.y + startY + y] == 'undefined' || typeof dots[item.y + startY + y][item.x + startX + x] == 'undefined' || TweenMax.isTweening(dots[item.y + startY][item.x + startX])) {} else {
	        if (typeof dots[item.y + startY + y] !== 'undefined' && typeof dots[item.y + startY + y][item.x + startX + x] !== 'undefined' && i === anim.length - 1) {
	          t1.to(this.dots[item.y + startY + y][item.x + startX + x], 0.15, { opacity: 0 }, 0);
	          t1.set(this.dots[item.y + startY + y][item.x + startX + x], { delay: 0.75, opacity: 0.4 }, 0);
	        }

	        if (typeof dots[item.y + startY] !== 'undefined' && typeof dots[item.y + startY][item.x + startX] !== 'undefined') {
	          dot = dots[item.y + startY][item.x + startX];
	          dot[0].style.display = "block";
	          if (0 === i) {
	            dotClone = dot.clone().appendTo(this.dotContainer);
	            t1.set(dotClone[0], { scale: 0 });
	            t1.to(dotClone[0], 0.75, {
	              scale: 1, opacity: 0.4, onComplete: dotClone.remove.bind(dotClone)
	            }, 0);
	          }
	          t1.to(dot[0], 0.75, { x: x * this.grid, y: y * this.grid, ease: Sine.easeInOut }, 0);
	          t1.to(dot[0], 0.375, { scale: 1.5, alpha: 1, ease: Sine.easeInOut }, 0);
	          t1.to(dot[0], 0.375, { scale: 1, alpha: 0, ease: Sine.easeInOut }, 0.375);
	        }
	      }
	    }
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MaskBuilder = function () {
	  function MaskBuilder() {
	    _classCallCheck(this, MaskBuilder);

	    this.stage = null;
	    this.cursor = {};
	    this.isDrawing = false;
	    this.drawingCanvas = new createjs.Shape();
	    this.overlay = new createjs.Shape();
	    this.overlay.graphics.beginFill('black').beginStroke('red').setStrokeStyle(2);
	    this.overlayCommand = this.overlay.graphics.drawRect(0, 0, 0, 0).command;
	    this.overlay.alpha = 0.5;
	    this.bitmap = null;
	    this.blurSize = 3;
	    this.blurOffset = 10;
	    this.width = $('#copyCanvas').width();
	    this.height = $('#copyCanvas').height();
	    this.image = null;
	  }

	  _createClass(MaskBuilder, [{
	    key: 'init',
	    value: function init() {
	      var elementID = 'canvas' + $('canvas').length;
	      $('<canvas>').attr({
	        id: elementID
	      }).attr({
	        width: this.width,
	        height: this.height
	      }).css({
	        width: '100%',
	        height: '100%',
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        'z-index': 15
	      }).appendTo('#wrapper');
	      var canvas = document.getElementById(elementID);
	      this.stage = new createjs.Stage(canvas);
	      this.image = new Image();
	      this.image.src = $('#background').css('background-image').replace('url(', '').replace(')', '').replace(/"/g, '').replace(/'/g, '');
	      this.bitmap = new createjs.Bitmap(this.image);
	      this.stage.addChild(this.bitmap);
	      this.stage.update();
	      this.drawingCanvas.filters = [new createjs.BlurFilter(this.blurSize, this.blurSize, 1)];
	    }
	  }, {
	    key: 'clearMask',
	    value: function clearMask() {
	      this.drawingCanvas = null;
	      this.drawingCanvas = new createjs.Shape();
	      this.drawingCanvas.filters = [new createjs.BlurFilter(this.blurSize, this.blurSize, 1)];
	      this.stage.update();
	      this.updateCacheImage(false);
	    }
	  }, {
	    key: 'generateMask',
	    value: function generateMask(params) {
	      var container = new createjs.Container();
	      container.alpha = 0;
	      this.bitmap.sourceRect = new createjs.Rectangle(Math.abs(parseInt($('#background').offset().left, 10)), Math.abs(parseInt($('#background').offset().top, 10)), this.width, this.height);
	      this.stage.addChild(this.bitmap);
	      this.updateCacheImage(false);
	      var maskFilter = new createjs.AlphaMaskFilter(this.drawingCanvas.cacheCanvas);
	      this.bitmap.filters = [maskFilter];
	      for (var i = 0; i < params.length; i++) {
	        this.drawingCanvas.graphics.beginFill('black').drawRect(params[i].x - this.blurOffset, params[i].y - this.blurOffset, params[i].width + 2 * this.blurOffset, params[i].height + 2 * this.blurOffset);
	      }
	      container.addChild(this.bitmap);
	      this.stage.addChild(container);
	      this.updateCacheImage(true);
	      return container;
	    }
	  }, {
	    key: 'fade',
	    value: function fade(container, tweenOptions) {
	      var _this = this;

	      var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.25;

	      var onChange = function onChange() {
	        _this.updateCacheImage(true);
	      };
	      var params = { ease: Power2.easeInOut, onUpdate: onChange };
	      for (var attrname in tweenOptions) {
	        params[attrname] = tweenOptions[attrname];
	      }
	      var tl = new TimelineLite().to(container, t, params);
	      return tl;
	    }
	  }, {
	    key: 'updateCacheImage',
	    value: function updateCacheImage(update) {
	      if (update) {
	        this.drawingCanvas.updateCache();
	      } else {
	        this.drawingCanvas.cache(0, 0, this.width, this.height);
	      }
	      var maskFilter = new createjs.AlphaMaskFilter(this.drawingCanvas.cacheCanvas);
	      this.bitmap.filters = [maskFilter];
	      if (update) {
	        this.bitmap.updateCache(0, 0, this.width, this.height);
	      } else {
	        this.bitmap.cache(0, 0, this.width, this.height);
	      }
	      this.stage.update();
	    }
	  }]);

	  return MaskBuilder;
	}();

	exports.default = MaskBuilder;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ParticleText = __webpack_require__(10);
	var EENobbleeRegular = __webpack_require__(11);
	var ControlParticles = __webpack_require__(12);

	var CanvasCopy = function () {
	  function CanvasCopy(config) {
	    _classCallCheck(this, CanvasCopy);

	    this.canvas = config.canvas;
	    this._textContainer = [];
	    this.particles = {};
	    this.circleRadius = config.circleRadius;
	    this.buildTime = config.buildTime;
	    this.fontWeight = config.fontWeight;
	    this.lineHeight = config.lineHeight;
	    this.spreadRadius = config.spreadRadius;
	    this.rightMargin = config.rightMargin;
	    this.stage = new createjs.Stage(this.canvas);
	    this.stage.enableDOMEvents(false);
	    TweenMax.ticker.addEventListener('tick', this.handleTick.bind(this));
	    if (window.devicePixelRatio) {
	      var dpiMultiplier = 1;
	      var height = this.canvas.offsetHeight;
	      var width = this.canvas.offsetWidth;
	      this.canvas.setAttribute('width', Math.round(width * window.devicePixelRatio * dpiMultiplier));
	      this.canvas.setAttribute('height', Math.round(height * window.devicePixelRatio * dpiMultiplier));
	      this.canvas.style.width = width + 'px';
	      this.canvas.style.height = height + 'px';
	      this.stage.scaleX = this.stage.scaleY = window.devicePixelRatio * dpiMultiplier;
	    }
	  }

	  _createClass(CanvasCopy, [{
	    key: 'handleTick',
	    value: function handleTick() {
	      this.stage.update();
	    }
	  }, {
	    key: 'addCopyToStage',
	    value: function addCopyToStage(frameKey) {
	      this.removeCopyFromStage(this.stage);
	      for (var i = 0; i < this.particles[frameKey].length; i++) {
	        this._textContainer.push(this.stage.addChild(this.particles[frameKey][i]));
	      }
	    }
	  }, {
	    key: 'removeCopyFromStage',
	    value: function removeCopyFromStage(stage) {
	      this._textContainer.forEach(function (element) {
	        stage.removeChild(element);
	      });
	      this._textContainer = [];
	    }
	  }, {
	    key: 'createParticleCopy',
	    value: function createParticleCopy(frameKey, particles, textArray, overlayTextArray, xPos, yPos, textColour, overlayTextColour) {
	      var align = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'left';

	      var particleText = new ParticleText(new EENobbleeRegular(), this.fontWeight, textArray, overlayTextArray, align, this.lineHeight);
	      var text = new ControlParticles(particleText.points, textColour, this.circleRadius, this.buildTime, this.spreadRadius, this.canvas.width, this.canvas.height);
	      var overlayText = new ControlParticles(particleText.overlayPoints, overlayTextColour, this.circleRadius, this.buildTime, this.spreadRadius, this.canvas.width, this.canvas.height);
	      text.generate();
	      overlayText.generate();

	      text.addOverlayText(overlayText);

	      if (xPos === 'center') {
	        text.x = (this.canvas.offsetWidth - particleText.maxLineWidth) / 2;
	      } else if (xPos === 'right') {
	        text.x = this.canvas.offsetWidth - particleText.maxLineWidth - this.rightMargin;
	      } else {
	        text.x = xPos;
	      }
	      if (yPos === 'center') {
	        text.y = (this.canvas.offsetHeight - particleText.lineHeight * textArray.length) / 2;
	      } else {
	        text.y = yPos;
	      }
	      text.linesWidth = particleText.linesWidth;
	      text.lineHeight = this.lineHeight;
	      text.delta = particleText.delta;
	      text.maxLineWidth = particleText.maxLineWidth;
	      this[particles] = text;

	      if (!this.particles[frameKey]) {
	        this.particles[frameKey] = [];
	      }
	      this.particles[frameKey].push(text);
	    }
	  }, {
	    key: 'getBoundingBoxes',
	    value: function getBoundingBoxes(copy) {
	      var subcopy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var cta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	      var lineHeight = this[copy].lineHeight;
	      var linesWidth = this[copy].linesWidth;
	      var maxLineWidth = this[copy].maxLineWidth;
	      var x = this[copy].x;
	      var y = this[copy].y;
	      var result = [];
	      var singleLine = void 0,
	          delta = void 0;
	      for (var i = 0; i < linesWidth.length; i++) {
	        delta = this[copy].delta[i] || 0;
	        singleLine = {};
	        singleLine.x = x + delta;
	        singleLine.y = y + lineHeight * i;
	        singleLine.width = linesWidth[i];
	        singleLine.height = lineHeight;
	        result[i] = singleLine;
	      }
	      if (subcopy) {
	        var offset = this[copy].delta[0] ? maxLineWidth - subcopy.clientWidth : 0;
	        result.push({ x: x + offset, y: y + lineHeight * result.length,
	          width: subcopy.clientWidth, height: subcopy.clientHeight });
	      }
	      if (cta) {
	        result.push({
	          x: cta.style.left ? parseInt(cta.style.left, 10) : this.canvas.offsetWidth - (parseInt(cta.style.right, 10) + cta.clientWidth),
	          y: cta.style.top ? parseInt(cta.style.top, 10) : this.canvas.offsetHeight - parseInt(cta.style.bottom, 10) + cta.clientHeight,
	          width: cta.clientWidth,
	          height: cta.clientHeight
	        });
	      }
	      return result;
	    }
	  }]);

	  return CanvasCopy;
	}();

	exports.default = CanvasCopy;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	module.exports = function (_fontClass, _fontSize, _lines, _overlayLines, _align, _lineHeight) {

	  _fontClass = _fontClass;
	  _fontSize = _fontSize || 30;
	  _lines = _lines || ["TEST"];
	  _overlayLines = _overlayLines || ["TEST"];
	  _align = _align || "left";
	  this.lineHeight = _lineHeight || _fontSize;

	  //TODO - Implement default particle size in ControlParticles to save having to resize them according to font size...
	  var $LIGHT = 1;
	  var $REGULAR = 1.6;
	  var $BOLD = 2;

	  var _rows;
	  var _columns;
	  var _spacer;
	  var _xPos;
	  var _yPos;
	  var _text;

	  var _textWidth;
	  var _textHeight;

	  //var _scaleFactor = _fontSize/30;
	  //default font size in the font class is 30, so resizing/repositioning has to be done relative to that.

	  this.points = [];
	  this.overlayPoints = [];
	  this.linesWidth = [];

	  var _letterPos = 0;
	  var _vertOffset = 0;
	  var pointSizeFactor = 30;
	  var newPoints = [];
	  var newOverlayPoints = [];
	  var thisPoint;
	  var LP;
	  var char;
	  this.maxLineWidth = 0;
	  var overlayCharIndex = -1;
	  var overlayTextLength = 0;

	  for (var i = 0; i < _lines.length; i++) {
	    newPoints[i] = [];
	    newOverlayPoints[i] = [];
	    _text = _lines[i];
	    overlayCharIndex = -1;
	    overlayTextLength = 0;
	    _overlayLines.forEach(function (overlayText) {
	      if (overlayCharIndex === -1) {
	        overlayCharIndex = _text.indexOf(overlayText);
	        overlayTextLength = overlayText.length;
	      }
	    });
	    for (var j = 0; j < _text.length; j++) {
	      char = _text.charAt(j);
	      if (char !== " ") {
	        LP = getPoints(char);
	        for (var k = 0; k < LP.length; k++) {
	          thisPoint = LP[k];
	          newPoints[i].push(new createjs.Point(thisPoint[0] * _fontSize / pointSizeFactor + _letterPos, thisPoint[1] * _fontSize / pointSizeFactor + _vertOffset));
	          if (overlayCharIndex !== -1 && j >= overlayCharIndex && j < overlayCharIndex + overlayTextLength) {
	            newOverlayPoints[i].push(new createjs.Point(thisPoint[0] * _fontSize / pointSizeFactor + _letterPos, thisPoint[1] * _fontSize / pointSizeFactor + _vertOffset));
	          }
	        }
	        _letterPos += _fontClass.getSpacing(_text.charAt(j), _text.charAt(j + 1)) * _fontSize / pointSizeFactor;
	      } else {
	        _letterPos += 8 * _fontSize / pointSizeFactor;
	      }
	    }

	    _vertOffset += this.lineHeight;
	    _letterPos = 0;

	    var farL = 0;
	    var farR = 0;
	    for (var p = 0; p < newPoints[i].length; p++) {
	      if (newPoints[i][p].x < farL) {
	        farL = newPoints[i][p].x;
	      }
	      if (newPoints[i][p].x > farR) {
	        farR = newPoints[i][p].x;
	      }
	    }
	    this.linesWidth[i] = farR - farL;
	    if (this.linesWidth[i] > this.maxLineWidth) {
	      this.maxLineWidth = this.linesWidth[i];
	    }
	  }
	  var delta = 0;
	  this.delta = [];
	  var addDelta = function addDelta(el) {
	    el.x += delta;
	  };
	  for (i = 0; i < newPoints.length; i++) {
	    var _points, _overlayPoints;

	    if (_align === 'right') {
	      delta = this.maxLineWidth - this.linesWidth[i];
	      this.delta.push(delta);
	      if (delta > 0) {
	        newPoints[i].forEach(addDelta);
	        newOverlayPoints[i].forEach(addDelta);
	      }
	    } else if (_align === 'center') {
	      delta = (this.maxLineWidth - this.linesWidth[i]) / 2;
	      this.delta.push(delta);
	      if (delta > 0) {
	        newPoints[i].forEach(addDelta);
	        newOverlayPoints[i].forEach(addDelta);
	      }
	    }
	    (_points = this.points).push.apply(_points, _toConsumableArray(newPoints[i]));
	    (_overlayPoints = this.overlayPoints).push.apply(_overlayPoints, _toConsumableArray(newOverlayPoints[i]));
	  }

	  // define the width of the text (furthest right point minus furthest left)


	  // Adjust point positions to account for alignment, now we know the width of the line
	  //for (var q = 0; q < this.points.length; q++) {
	  //  if (_align === "center") {
	  //    this.points[q].x -= _textWidth / 2;
	  //  } else if (_align === "right") {
	  //    this.points[q].x -= _textWidth;
	  //  }
	  //}

	  // PRIVATE METHODS //
	  ////////////////////

	  function getPoints(char) {

	    var pts;

	    if ("ABCEDFGHIiJKLMNOPQRSTUVWXYx".indexOf(char) !== -1) {
	      pts = _fontClass["$" + char].slice(0);
	    } else {
	      switch (char) {
	        case "0":
	          pts = _fontClass.$ZERO.slice(0);
	          break;
	        case "1":
	          pts = _fontClass.$ONE.slice(0);
	          break;
	        case "2":
	          pts = _fontClass.$TWO.slice(0);
	          break;
	        case "3":
	          pts = _fontClass.$THREE.slice(0);
	          break;
	        case "4":
	          pts = _fontClass.$FOUR.slice(0);
	          break;
	        case "5":
	          pts = _fontClass.$FIVE.slice(0);
	          break;
	        case "6":
	          pts = _fontClass.$SIX.slice(0);
	          break;
	        case "7":
	          pts = _fontClass.$SEVEN.slice(0);
	          break;
	        case "8":
	          pts = _fontClass.$EIGHT.slice(0);
	          break;
	        case "9":
	          pts = _fontClass.$NINE.slice(0);
	          break;
	        case ".":
	          pts = _fontClass.$FULL_STOP.slice(0);
	          break;
	        case ">":
	          pts = _fontClass.$GREATER_THAN.slice(0);
	          break;
	        case "<":
	          pts = _fontClass.$LESS_THAN.slice(0);
	          break;
	        case "?":
	          pts = _fontClass.$QUESTION_MARK.slice(0);
	          break;
	        case "!":
	          pts = _fontClass.$EXCLAMATION_MARK.slice(0);
	          break;
	        case "£":
	          pts = _fontClass.$POUND.slice(0);
	          break;
	        case "€":
	          pts = _fontClass.$EURO.slice(0);
	          break;
	        case "%":
	          pts = _fontClass.$PERCENTAGE.slice(0);
	          break;
	        case "&":
	          pts = _fontClass.$AMPERSAND.slice(0);
	          break;
	        case "^":
	          pts = _fontClass.$CIRCUMFLEX.slice(0);
	          break;
	        case "@":
	          pts = _fontClass.$AT_SYMBOL.slice(0);
	          break;
	        case "(":
	          pts = _fontClass.$OPEN_BRACKET.slice(0);
	          break;
	        case ")":
	          pts = _fontClass.$CLOSE_BRACKET.slice(0);
	          break;
	        case "+":
	          pts = _fontClass.$PLUS.slice(0);
	          break;
	        case "=":
	          pts = _fontClass.$EQUALS.slice(0);
	          break;
	        case "-":
	          pts = _fontClass.$DASH.slice(0);
	          break;
	        case "_":
	          pts = _fontClass.$UNDERSCORE.slice(0);
	          break;
	        case "/":
	          pts = _fontClass.$FORWARD_SLASH.slice(0);
	          break;
	        case "\"":
	          pts = _fontClass.$DOUBLE_QUOTE.slice(0);
	          break;
	        case "'":
	          pts = _fontClass.$SINGLE_QUOTE.slice(0);
	          break;
	        case ":":
	          //pts = _fontClass.$COLON.slice(0);
	          pts = _fontClass.$POUND.slice(0);
	          break;
	        case ";":
	          pts = _fontClass.$SEMI_COLON.slice(0);
	          break;
	        case ",":
	          pts = _fontClass.$COMMA.slice(0);
	          break;
	        case "#":
	          pts = _fontClass.$NUMBER_SIGN.slice(0);
	          break;
	        case "®":
	          pts = _fontClass.$REGISTERED_TRADEMARK.slice(0);
	          break;
	        case "™":
	          pts = _fontClass.$TRADE_MARK.slice(0);
	          break;
	        case "*":
	          pts = _fontClass.$ASTERISK.slice(0);
	          break;
	      }
	    }

	    return pts;
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function () {

	  this.$NAME = "EENobbleeRegular";
	  this.$x = [[14.15, 15.6], [12.9, 17.25], [11.7, 18.9], [10.3, 20.55], [9.1, 22.5], [14.15, 28.7], [12.85, 27.15], [11.7, 25.5], [10.45, 23.85], [7.95, 20.55], [6.75, 19], [5.4, 17.25], [4.2, 15.65], [7.9, 23.85], [6.65, 25.5], [5.35, 27.15], [4.2, 28.75]];
	  this.$A = [[20.1, 29], [19.15, 26.9], [18.25, 24.8], [17.3, 22.7], [16.4, 20.6], [15.5, 18.5], [14.6, 16.4], [13.65, 14.3], [12.85, 12.15], [11.8, 10.1], [10.75, 12.15], [9.9, 14.2], [8.95, 16.3], [8.05, 18.45], [7.1, 20.55], [6.2, 22.65], [5.3, 24.75], [4.4, 26.9], [3.55, 29], [8.45, 22.7], [10.65, 22.7], [12.9, 22.7], [15.1, 22.7]];
	  this.$B = [[4.8, 10.1], [4.75, 12.45], [4.75, 14.8], [4.75, 17.2], [4.75, 19.55], [4.75, 21.9], [4.75, 24.25], [4.75, 26.65], [4.75, 29], [7.05, 10.1], [7.1, 19.55], [7.05, 29], [9.35, 10.1], [9.35, 19.55], [9.3, 29], [11.6, 10.1], [11.6, 19.55], [11.55, 29], [13.9, 10.25], [13.95, 19.55], [13.8, 29], [16, 10.8], [15.95, 18.45], [15.95, 20.6], [16.05, 28.5], [17.5, 12.5], [17.75, 14.65], [17.4, 16.85], [17.4, 22.2], [17.9, 24.45], [17.5, 26.75]];
	  this.$C = [[19.85, 12.45], [18, 11.1], [15.8, 10.3], [13.55, 10], [11.35, 10.3], [9.2, 11.1], [7.35, 12.45], [5.85, 14.15], [4.8, 16.2], [4.2, 18.4], [4.2, 20.65], [4.75, 22.9], [5.8, 24.95], [7.3, 26.7], [9.15, 28.05], [11.35, 28.85], [13.55, 29.1], [15.9, 28.85], [18, 28.05], [19.9, 26.7]];
	  this.$D = [[4.8, 10.1], [4.8, 12.5], [4.8, 14.8], [4.8, 17.2], [4.8, 19.55], [4.8, 21.9], [4.8, 24.25], [4.8, 26.65], [4.8, 29], [7, 29], [9.25, 29], [11.55, 28.7], [13.7, 27.9], [15.65, 26.6], [17.15, 24.85], [18.3, 22.85], [18.85, 20.65], [18.85, 18.35], [18.25, 16.15], [17.15, 14.15], [15.6, 12.5], [13.7, 11.15], [11.55, 10.35], [9.25, 10.1], [7, 10.1]];
	  this.$E = [[4.8, 10.1], [4.8, 12.5], [4.8, 14.8], [4.8, 17.2], [4.8, 19.55], [4.8, 21.9], [4.8, 24.25], [4.8, 26.65], [4.8, 29], [7, 10.1], [9.2, 10.1], [11.4, 10.1], [13.6, 10.1], [15.8, 10.1], [6.95, 19.55], [9.05, 19.55], [11.25, 19.55], [13.35, 19.55], [15.5, 19.55], [7, 29], [9.2, 29], [11.4, 29], [13.6, 29], [15.8, 29]];
	  this.$F = [[4.8, 10.1], [4.8, 12.5], [4.8, 14.8], [4.8, 17.2], [4.8, 19.55], [4.8, 21.9], [4.8, 24.25], [4.8, 26.65], [4.8, 29], [7, 10.1], [9.2, 10.1], [11.4, 10.1], [13.6, 10.1], [15.8, 10.1], [6.95, 19.55], [9.05, 19.55], [11.25, 19.55], [13.35, 19.55], [15.5, 19.55]];
	  this.$G = [[19.8, 12.4], [17.95, 11.05], [15.8, 10.25], [13.55, 10], [11.35, 10.25], [9.2, 11.05], [7.3, 12.4], [5.8, 14.1], [4.7, 16.15], [4.2, 18.35], [4.2, 20.65], [4.7, 22.85], [5.8, 24.85], [7.25, 26.65], [9.15, 27.95], [11.25, 28.8], [13.55, 29.1], [15.85, 28.75], [18, 27.9], [19.85, 26.6], [19.85, 24.25], [19.85, 21.9], [19.85, 19.55], [17.45, 19.55], [15.15, 19.55], [12.75, 19.55]];
	  this.$H = [[4.8, 10.1], [4.8, 12.5], [4.8, 14.8], [4.8, 17.2], [4.8, 19.55], [4.8, 21.9], [4.8, 24.25], [4.8, 26.65], [4.8, 29], [7.1, 19.55], [9.4, 19.55], [11.75, 19.55], [14.1, 19.55], [16.45, 19.55], [18.75, 10.1], [18.75, 12.5], [18.75, 14.8], [18.75, 17.2], [18.75, 19.55], [18.75, 21.9], [18.75, 24.25], [18.75, 26.65], [18.75, 29]];
	  this.$I = [[4.35, 10.15], [6.55, 10.15], [8.75, 10.15], [10.9, 10.15], [7.65, 12.3], [7.65, 14.7], [7.65, 17.15], [7.65, 19.55], [7.65, 22], [7.65, 24.4], [7.65, 26.85], [4.35, 29], [6.55, 29], [8.75, 29], [10.9, 29]];
	  this.$i = [[6.8, 9.8], [6.8, 15.8], [6.8, 17.8], [6.8, 19.8], [6.8, 21.8], [6.8, 22.8], [6.8, 24.8], [6.8, 26.8], [6.8, 28.8]];
	  this.$J = [[6.1, 10.1], [8.3, 10.1], [10.5, 10.1], [12.7, 10.1], [12.7, 12.5], [12.7, 14.8], [12.7, 17.2], [12.7, 19.55], [12.7, 21.9], [12.7, 24.25], [12.3, 26.5], [11, 28.3], [8.95, 29.1], [6.7, 29.05], [4.8, 27.9], [3.5, 26.1]];
	  this.$K = [[4.8, 10.1], [4.8, 12.5], [4.8, 14.8], [4.8, 17.2], [4.8, 19.55], [4.8, 21.9], [4.8, 24.25], [4.8, 26.65], [4.8, 29], [7, 19.55], [8.65, 17.95], [10.35, 16.35], [12.05, 14.8], [13.75, 13.2], [15.5, 11.65], [17.2, 10.1], [8.65, 21.1], [10.35, 22.65], [12.05, 24.25], [13.75, 25.8], [15.5, 27.4], [17.2, 29]];
	  this.$L = [[4.8, 10.1], [4.8, 12.5], [4.8, 14.8], [4.8, 17.2], [4.8, 19.55], [4.8, 21.9], [4.8, 24.25], [4.8, 26.65], [4.8, 29], [7, 29], [9.2, 29], [11.4, 29], [13.6, 29], [15.8, 29]];
	  this.$M = [[4.85, 10.1], [4.75, 12.35], [4.85, 14.8], [4.85, 17.2], [4.85, 19.55], [4.85, 21.9], [4.85, 24.3], [4.85, 26.65], [4.85, 29], [6.4, 12.05], [7.35, 13.95], [8.6, 15.95], [9.9, 17.9], [11.15, 19.85], [12.45, 21.75], [13.7, 23.75], [14.95, 21.75], [16.25, 19.85], [17.5, 17.9], [18.75, 15.95], [20.05, 14], [21.05, 11.8], [22.6, 10.1], [22.75, 12.45], [22.6, 14.8], [22.6, 17.2], [22.6, 19.55], [22.6, 21.9], [22.6, 24.3], [22.6, 26.65], [22.6, 29]];
	  this.$N = [[4.8, 10.15], [4.65, 12.25], [4.85, 14.55], [4.85, 16.9], [4.85, 19.35], [4.85, 21.75], [4.85, 24.15], [4.85, 26.55], [4.85, 29], [6.35, 11.95], [7.65, 13.75], [9.15, 15.7], [10.6, 17.65], [12.15, 19.55], [13.6, 21.45], [15.1, 23.4], [16.6, 25.3], [17.8, 27.2], [19.45, 29], [19.55, 26.8], [19.4, 24.6], [19.4, 22.15], [19.4, 19.75], [19.4, 17.35], [19.4, 14.9], [19.4, 12.55], [19.4, 10.15]];
	  this.$O = [[13.55, 10], [15.8, 10.3], [18, 11.05], [19.8, 12.4], [21.35, 14.1], [22.4, 16.15], [22.95, 18.35], [22.95, 20.65], [22.4, 22.85], [21.4, 24.9], [19.85, 26.65], [18, 27.95], [15.85, 28.8], [13.55, 29.1], [11.3, 28.8], [9.15, 27.95], [7.25, 26.65], [5.8, 24.9], [4.7, 22.85], [4.2, 20.65], [4.2, 18.35], [4.75, 16.15], [5.8, 14.1], [7.3, 12.4], [9.2, 11.05], [11.35, 10.3]];
	  this.$P = [[4.8, 10.1], [4.8, 12.5], [4.8, 14.85], [4.8, 17.2], [4.8, 19.6], [4.8, 21.9], [4.8, 24.3], [4.8, 26.65], [4.8, 29], [7, 10.1], [9.2, 10.1], [11.45, 10.1], [13.75, 10.2], [15.95, 11], [17.5, 12.75], [18.45, 14.9], [18.4, 17.2], [17.45, 19.35], [15.85, 21.05], [13.7, 21.8], [11.45, 21.9], [9.2, 21.9], [7, 21.9]];
	  this.$Q = [[16.15, 28.35], [18.3, 27.4], [20.15, 26], [21.6, 24.15], [22.6, 22], [22.95, 19.65], [22.75, 17.3], [22, 15.1], [20.7, 13.1], [18.95, 11.55], [16.85, 10.45], [14.55, 9.9], [12.2, 10], [9.9, 10.6], [7.85, 11.75], [6.2, 13.4], [4.95, 15.4], [4.3, 17.7], [4.2, 20.05], [4.65, 22.35], [5.7, 24.45], [7.25, 26.3], [9.15, 27.6], [11.35, 28.6], [13.5, 29.55], [15.6, 30.55], [17.75, 31.5], [19.95, 32.55], [22.05, 33.5]];
	  this.$R = [[4.8, 10.1], [4.8, 12.5], [4.8, 14.85], [4.8, 17.2], [4.8, 19.6], [4.8, 21.9], [4.8, 24.3], [4.8, 26.65], [4.8, 29], [7, 10.1], [9.2, 10.1], [11.45, 10.1], [13.75, 10.2], [15.95, 11], [17.5, 12.75], [18.4, 14.9], [18.35, 17.2], [17.45, 19.35], [15.9, 21], [13.7, 21.8], [11.45, 21.9], [9.2, 21.9], [7, 21.9], [12.65, 23.85], [14.25, 25.55], [15.85, 27.3], [17.4, 29]];
	  this.$S = [[15.85, 12.55], [14, 11.1], [11.9, 10.2], [9.65, 10.05], [7.4, 10.5], [5.4, 11.6], [4.15, 13.55], [4.4, 15.85], [5.8, 17.65], [7.85, 18.65], [10, 19.25], [12.25, 19.8], [14.35, 20.65], [16.2, 22.15], [16.65, 24.35], [15.95, 26.5], [14.3, 28.1], [12.2, 28.95], [9.9, 29.1], [7.65, 28.75], [5.65, 27.7], [4, 26.1]];
	  this.$T = [[3.45, 10.1], [5.7, 10.1], [8, 10.1], [10.3, 10.1], [12.6, 10.1], [14.85, 10.1], [17.15, 10.1], [10.3, 12.5], [10.3, 14.8], [10.3, 17.2], [10.3, 19.55], [10.3, 21.9], [10.3, 24.25], [10.3, 26.65], [10.3, 29]];
	  this.$U = [[4.65, 10.1], [4.65, 12.5], [4.65, 14.8], [4.65, 17.2], [4.65, 19.55], [4.65, 21.9], [4.95, 24.15], [6, 26.3], [7.75, 27.85], [9.85, 28.8], [12.15, 29.1], [14.4, 28.8], [16.5, 27.85], [18.3, 26.3], [19.3, 24.15], [19.65, 21.9], [19.65, 19.55], [19.65, 17.2], [19.65, 14.8], [19.65, 12.5], [19.65, 10.1]];
	  this.$V = [[3.6, 10.1], [4.45, 12.2], [5.35, 14.25], [6.25, 16.35], [7.1, 18.45], [8, 20.55], [8.9, 22.7], [9.75, 24.85], [10.45, 27], [11.55, 29], [12.6, 27], [13.4, 24.85], [14.2, 22.7], [15.1, 20.55], [16, 18.45], [16.85, 16.35], [17.75, 14.25], [18.65, 12.2], [19.5, 10.1]];
	  this.$W = [[3.9, 10.15], [4.5, 12.5], [5.1, 14.9], [5.7, 17.3], [6.3, 19.7], [6.9, 22.1], [7.5, 24.5], [8, 26.85], [8.85, 29], [9.85, 26.85], [10.55, 24.75], [11.3, 22.65], [12, 20.55], [12.7, 18.45], [13.4, 16.4], [14.15, 14.3], [14.85, 12.2], [15.8, 10.15], [16.75, 12.2], [17.45, 14.3], [18.15, 16.4], [18.85, 18.45], [19.6, 20.55], [20.3, 22.65], [21, 24.75], [21.75, 26.85], [22.7, 29], [23.6, 26.85], [24.1, 24.5], [24.7, 22.1], [25.3, 19.7], [25.9, 17.3], [26.5, 14.9], [27.1, 12.5], [27.7, 10.15]];
	  this.$X = [[3.95, 10.1], [5.3, 11.95], [6.75, 13.85], [8.15, 15.75], [9.55, 17.65], [10.95, 19.55], [12.35, 21.45], [13.75, 23.35], [15.2, 25.2], [16.6, 27.1], [18, 29], [3.95, 29], [5.35, 27.1], [6.75, 25.2], [8.15, 23.35], [9.55, 21.45], [12.35, 17.65], [13.75, 15.75], [15.2, 13.85], [16.6, 11.95], [18, 10.1]];
	  this.$Y = [[3.6, 10.1], [4.9, 11.8], [6.25, 13.5], [7.6, 15.25], [8.9, 16.9], [10.15, 18.6], [11.5, 20.25], [11.5, 22.4], [11.5, 24.65], [11.5, 26.8], [11.5, 29], [12.8, 18.6], [14.1, 16.9], [15.4, 15.25], [16.7, 13.5], [18.05, 11.8], [19.4, 10.1]];
	  this.$Z = [[4.2, 10.1], [6.4, 10.1], [8.6, 10.1], [10.8, 10.1], [13, 10.1], [15.2, 10.05], [17.4, 10.1], [16.2, 11.9], [15, 13.55], [13.8, 15.3], [12.55, 17], [11.35, 18.7], [10.2, 20.4], [8.95, 22.15], [7.8, 23.85], [6.6, 25.55], [5.35, 27.25], [4.2, 29], [6.4, 29.05], [8.6, 29], [10.8, 29], [13, 29], [15.2, 29], [17.4, 29]];
	  this.$ZERO = [[10.6, 10], [8.45, 10.55], [6.7, 11.95], [5.45, 13.9], [4.75, 16.05], [4.5, 18.4], [4.5, 20.65], [4.8, 22.9], [5.6, 25.1], [6.8, 27], [8.5, 28.45], [10.6, 29.1], [12.8, 28.45], [14.5, 27], [15.7, 25.1], [16.45, 22.9], [16.8, 20.65], [16.85, 18.4], [16.5, 16.05], [15.8, 13.9], [14.6, 11.95], [12.8, 10.55]];
	  this.$ONE = [[3.9, 12.55], [5.85, 11.3], [7.8, 10.1], [7.8, 12.5], [7.8, 14.9], [7.8, 17.25], [7.8, 19.6], [7.8, 21.95], [7.8, 24.35], [7.8, 26.65], [7.8, 29]];
	  this.$TWO = [[4.3, 13.8], [5.5, 12], [7.2, 10.7], [9.3, 10.05], [11.45, 10.05], [13.5, 10.75], [15.1, 12.2], [15.65, 14.3], [15.35, 16.45], [14.1, 18.25], [12.35, 19.5], [10.4, 20.55], [8.55, 21.75], [6.85, 23.1], [5.6, 24.9], [4.75, 26.9], [4.65, 29.05], [6.8, 29], [9.05, 29], [11.35, 29], [13.55, 29], [15.75, 29]];
	  this.$THREE = [[4.25, 13.3], [5.45, 11.55], [7.25, 10.4], [9.4, 10.05], [11.5, 10.65], [13.05, 12.15], [13.65, 14.25], [13.25, 16.35], [11.9, 18], [10.05, 19.05], [7.95, 19.05], [11.95, 19.9], [13.7, 21.2], [14.5, 23.15], [14.35, 25.25], [13.4, 27.1], [11.75, 28.45], [9.65, 29.05], [7.5, 28.9], [5.6, 28], [4, 26.55]];
	  this.$FOUR = [[15.25, 10.1], [15.25, 12.2], [13.7, 11.85], [12.45, 13.65], [11, 15.45], [9.6, 17.25], [8.15, 19.05], [6.7, 20.85], [5.3, 22.6], [4, 24.3], [6.15, 24.3], [8.4, 24.25], [10.6, 24.25], [12.9, 24.25], [15.2, 24.2], [15.2, 14.65], [15.2, 17.05], [15.2, 19.45], [15.2, 21.85], [17.45, 24.25], [15.2, 26.6], [15.2, 29]];
	  this.$FIVE = [[12.8, 10.05], [10.6, 10.05], [8.45, 10.05], [6.3, 10.05], [5.9, 12.2], [5.6, 14.45], [5.2, 16.7], [4.9, 18.9], [6.9, 18.05], [9.05, 17.75], [11.2, 18], [13, 19.1], [14.35, 20.85], [14.95, 22.85], [14.8, 25.05], [13.95, 27], [12.3, 28.4], [10.25, 29], [8.1, 28.95], [6.1, 28.1], [4.6, 26.65]];
	  this.$SIX = [[13, 9.95], [11.15, 11.1], [9.5, 12.5], [8, 14.05], [6.7, 15.75], [5.6, 17.6], [4.95, 19.7], [4.6, 21.8], [4.7, 23.95], [5.35, 26], [6.6, 27.75], [8.45, 28.85], [10.55, 29.2], [12.7, 28.7], [14.4, 27.5], [15.65, 25.75], [16.1, 23.6], [15.85, 21.5], [14.7, 19.65], [12.95, 18.4], [10.9, 17.85], [8.8, 18.2], [6.95, 19.2]];
	  this.$SEVEN = [[4.2, 10.15], [6.45, 10.15], [8.65, 10.15], [10.9, 10.15], [13.15, 10.15], [15.4, 10.15], [14.2, 12.1], [12.95, 14.05], [11.75, 16.05], [10.55, 18.15], [9.5, 20.25], [8.45, 22.35], [7.55, 24.55], [6.6, 26.75], [5.95, 28.95]];
	  this.$EIGHT = [[8.65, 10.05], [6.65, 11.2], [5.4, 13.15], [5.1, 15.4], [5.95, 17.55], [7.45, 19.3], [5.65, 20.8], [4.65, 22.9], [4.65, 25.2], [5.65, 27.2], [7.45, 28.7], [9.8, 29.05], [12.05, 28.7], [13.9, 27.2], [14.9, 25.2], [14.9, 22.9], [13.9, 20.8], [12.05, 19.35], [9.8, 19.2], [13.55, 17.55], [14.45, 15.4], [14.15, 13.15], [12.9, 11.2], [10.85, 10.05]];
	  this.$NINE = [[7.35, 29.05], [9.35, 27.85], [11.1, 26.3], [12.6, 24.55], [13.85, 22.55], [14.65, 20.35], [15.3, 18.2], [15.6, 15.9], [15.15, 13.65], [13.95, 11.8], [12.1, 10.5], [9.9, 10.1], [7.7, 10.5], [5.85, 11.8], [4.6, 13.65], [4.15, 15.9], [4.6, 18.15], [5.9, 20], [7.95, 21.1], [10.2, 21.45], [12.45, 20.9]];
	  this.$FULL_STOP = [[3.95, 28.95]];
	  this.$GREATER_THAN = [[4.1, 11], [5.75, 12.45], [7.35, 13.85], [9, 15.2], [10.65, 16.6], [12.25, 18], [13.9, 19.4], [12.25, 20.75], [10.65, 22.1], [9, 23.5], [7.3, 24.9], [5.7, 26.25], [4.05, 27.6]];
	  this.$LESS_THAN = [[13.95, 11.05], [12.25, 12.45], [10.65, 13.8], [9, 15.2], [7.35, 16.6], [5.75, 18], [4.1, 19.35], [5.75, 20.75], [7.35, 22.1], [9, 23.5], [10.65, 24.9], [12.25, 26.3], [13.95, 27.65]];
	  this.$QUESTION_MARK = [[3.7, 12.05], [5.5, 10.55], [7.8, 10], [10.2, 10.1], [12.25, 11.15], [13.4, 13.35], [13.45, 15.7], [12.4, 17.85], [10.55, 19.35], [8.4, 20.35], [8.4, 26.5], [8.4, 28.9]];
	  this.$EXCLAMATION_MARK = [[4.7, 9.55], [4.7, 11.7], [4.7, 13.85], [4.7, 16.05], [4.7, 18.2], [4.7, 20.35], [4.7, 26.75], [4.7, 28.95]];
	  this.$POUND = [[15.75, 12.2], [13.95, 10.75], [11.75, 10.05], [9.45, 10.15], [7.3, 11.1], [5.95, 13], [5.6, 15.25], [5.9, 17.55], [6.45, 19.8], [6.9, 22.1], [6.75, 24.4], [6.25, 26.7], [5.4, 28.9], [7.6, 28.9], [9.8, 28.9], [12, 28.9], [14.2, 28.9], [16.4, 28.9], [4.1, 19.8], [8.75, 19.8], [11.05, 19.8], [13.4, 19.8]];
	  this.$EURO = [[18.35, 11.95], [16.65, 10.7], [14.6, 10.05], [12.45, 9.95], [10.35, 10.35], [8.5, 11.45], [7.25, 13.2], [6.55, 15.25], [6.25, 17.35], [6.3, 19.55], [6.3, 21.65], [6.55, 23.85], [7.3, 25.85], [8.6, 27.55], [10.45, 28.65], [12.55, 29], [14.75, 28.9], [16.8, 28.3], [18.55, 27.1], [4.15, 17.35], [8.4, 17.35], [10.5, 17.35], [12.55, 17.35], [6.25, 21.65], [4.15, 21.65], [8.4, 21.65], [10.5, 21.65], [12.55, 21.65]];
	  this.$PERCENTAGE = [[7.2, 10], [9.3, 10.7], [10.4, 12.6], [10.35, 14.8], [9.3, 16.7], [7.2, 17.4], [5.05, 16.7], [4, 14.8], [4, 12.6], [5.05, 10.7], [16.7, 21.45], [18.8, 22.15], [19.9, 24.05], [19.85, 26.25], [18.8, 28.15], [16.7, 28.85], [14.55, 28.15], [13.5, 26.25], [13.5, 24.05], [14.55, 22.15], [6.1, 26.15], [7.6, 24.4], [9.1, 22.7], [10.6, 21], [12.05, 19.3], [13.55, 17.6], [15.05, 15.85], [16.55, 14.15], [18.05, 12.45]];
	  this.$AMPERSAND = [[17.05, 28.85], [15.45, 27.2], [13.8, 25.5], [12.25, 23.85], [10.6, 22.15], [9, 20.5], [7.4, 18.8], [5.85, 17.2], [4.85, 15.05], [5, 12.8], [6.35, 10.9], [8.5, 10.05], [10.85, 10.2], [12.8, 11.45], [13.7, 13.6], [13.5, 15.9], [12.05, 17.7], [9.85, 18.5], [5.85, 20.6], [4.25, 22.25], [3.65, 24.45], [4.25, 26.7], [6, 28.25], [8.25, 28.9], [10.5, 28.6], [12.35, 27.25], [15.35, 23.8], [16.55, 21.85], [17.65, 19.8]];
	  this.$CIRCUMFLEX = [[4.05, 19.6], [5, 17.65], [5.9, 15.75], [6.9, 13.8], [7.75, 11.9], [8.75, 9.95], [9.7, 11.9], [10.6, 13.8], [11.55, 15.75], [12.5, 17.65], [13.4, 19.6]];
	  this.$AT_SYMBOL = [[17.25, 27], [14.9, 27.15], [12.75, 26.25], [11.4, 24.4], [11.05, 22.05], [11.45, 19.7], [12.75, 17.8], [14.9, 16.9], [17.2, 17.1], [19.05, 18.5], [19.95, 20.7], [20.05, 23.05], [20.55, 25.35], [22.4, 26.65], [24.65, 26], [25.65, 24], [26, 21.7], [25.95, 19.3], [25.55, 17], [24.65, 14.8], [23.3, 12.9], [21.5, 11.45], [19.35, 10.45], [17.05, 9.95], [14.7, 10], [12.4, 10.45], [10.3, 11.35], [8.4, 12.75], [6.85, 14.55], [5.8, 16.65], [5.15, 18.9], [4.9, 21.25], [5, 23.65], [5.45, 25.9], [6.3, 28.1], [7.6, 30.05], [9.25, 31.65], [11.3, 32.85], [13.55, 33.55], [15.9, 33.8], [18.2, 33.6], [20.45, 32.9]];
	  this.$OPEN_BRACKET = [[8.95, 7.05], [7.6, 8.85], [6.45, 10.75], [5.6, 12.8], [4.95, 15], [4.5, 17.2], [4.3, 19.4], [4.25, 21.65], [4.5, 23.9], [5, 26.1], [5.6, 28.2], [6.5, 30.25], [7.6, 32.2], [8.95, 34.05]];
	  this.$CLOSE_BRACKET = [[3.85, 7.05], [5.2, 8.95], [6.3, 10.85], [7.2, 12.95], [7.85, 15.05], [8.3, 17.25], [8.5, 19.5], [8.55, 21.75], [8.3, 23.95], [7.85, 26.15], [7.2, 28.3], [6.35, 30.35], [5.2, 32.3], [3.85, 34.1]];
	  this.$PLUS = [[10.75, 12.7], [10.75, 14.95], [10.75, 17.15], [10.75, 19.35], [10.75, 21.5], [10.75, 23.7], [10.75, 25.9], [4.15, 19.3], [6.35, 19.3], [8.55, 19.3], [12.9, 19.3], [15.1, 19.3], [17.3, 19.3]];
	  this.$EQUALS = [[4.15, 16.7], [6.35, 16.7], [8.55, 16.7], [10.75, 16.7], [12.95, 16.7], [15.1, 16.7], [4.15, 22], [6.35, 22], [8.55, 22], [10.75, 22], [12.95, 22], [15.1, 22]];
	  this.$DASH = [[3.65, 21.3], [5.85, 21.3], [8.1, 21.3]];
	  this.$UNDERSCORE = [[2.9, 32.15], [5.1, 32.15], [7.3, 32.15], [9.5, 32.15], [11.7, 32.15]];
	  this.$FORWARD_SLASH = [[11.05, 9], [10.25, 11.05], [9.4, 13.15], [8.6, 15.25], [7.75, 17.3], [6.95, 19.45], [6.1, 21.5], [5.25, 23.6], [4.45, 25.7], [3.65, 27.75], [2.8, 29.85]];
	  this.$DOUBLE_QUOTE = [[4.85, 9.95], [4.85, 12.25], [4.85, 14.5], [8.25, 9.95], [8.25, 12.25], [8.25, 14.5]];
	  this.$SINGLE_QUOTE = [[4.85, 9.95], [4.85, 12.25], [4.85, 14.5]];
	  this.$COLON = [[4.25, 16.2], [4.25, 28.8]];
	  this.$SEMI_COLON = [[4.3, 16.2], [4.35, 28.9], [4.35, 31.05], [3.15, 32.85]];
	  this.$COMMA = [[4.2, 27.85], [4.2, 30], [3, 31.8]];
	  this.$NUMBER_SIGN = [[11.65, 10.05], [11, 12.15], [10.25, 14.2], [9.65, 16.2], [8.95, 18.25], [8.3, 20.35], [7.6, 22.45], [6.95, 24.55], [6.25, 26.55], [5.55, 28.6], [16.35, 10.1], [15.65, 12.2], [14.95, 14.25], [14.25, 16.25], [13.55, 18.3], [12.85, 20.4], [12.1, 22.5], [11.5, 24.6], [10.8, 26.6], [10.1, 28.65], [6.65, 16.25], [8.95, 16.2], [10.8, 16.25], [13.05, 16.25], [15.1, 16.25], [17.25, 16.25], [4.7, 22.45], [6.85, 22.45], [8.85, 22.4], [11.1, 22.45], [12.95, 22.5], [15.25, 22.45]];
	  this.$REGISTERED_TRADEMARK = [[11.25, 9.9], [9.05, 10.3], [7.15, 11.3], [5.65, 12.85], [4.65, 14.85], [4.25, 17], [4.6, 19.2], [5.6, 21.1], [7.15, 22.65], [9.05, 23.7], [11.25, 23.95], [13.4, 23.75], [15.4, 22.65], [16.9, 21.15], [17.85, 19.2], [18.25, 17], [17.9, 14.9], [16.85, 12.9], [13.4, 10.25], [15.35, 11.3], [9, 13.4], [9, 15.15], [9, 16.95], [9, 18.65], [9, 20.4], [11.05, 13.35], [10.8, 17.55], [12.9, 13.5], [14.15, 14.9], [14.15, 16.65], [12.6, 17.45], [12.15, 19.05], [13.55, 20.4]];
	  this.$ASTERISK = [[6.9, 10.15], [6.85, 11.75], [10.5, 12.15], [9.15, 13.1], [10.5, 16.3], [9.15, 15.55], [6.95, 18.35], [6.95, 16.7], [3.4, 16.3], [4.75, 15.5], [3.4, 12.2], [4.6, 12.95], [6.9, 14.25]];
	  this.$TRADE_MARK = [[18.55, 10.3], [16.75, 11.9], [18.6, 12.6], [18.55, 14.85], [18.5, 17.15], [15.1, 13.45], [13.35, 11.9], [11.6, 10.3], [11.55, 12.6], [11.6, 14.85], [11.6, 17.2], [8.4, 10.3], [4.1, 10.3], [6.25, 10.25], [6.3, 12.6], [6.25, 14.9], [6.25, 17.1]];

	  // PUBLIC METHODS //
	  ///////////////////
	  this.getSize = function (char) {
	    var rect;
	    switch (char) {
	      case "A":
	        rect = new createjs.Rectangle(0, 0, 22, 39);
	        break;
	      case "B":
	        rect = new createjs.Rectangle(0, 0, 19.6, 39);
	        break;
	      case "C":
	        rect = new createjs.Rectangle(0, 0, 21.6, 39);
	        break;
	      case "D":
	        rect = new createjs.Rectangle(0, 0, 20.4, 39);
	        break;
	      case "E":
	        rect = new createjs.Rectangle(0, 0, 17.9, 39);
	        break;
	      case "F":
	        rect = new createjs.Rectangle(0, 0, 17.9, 39);
	        break;
	      case "G":
	        rect = new createjs.Rectangle(0, 0, 21.4, 39);
	        break;
	      case "H":
	        rect = new createjs.Rectangle(0, 0, 20.6, 39);
	        break;
	      case "I":
	        rect = new createjs.Rectangle(0, 0, 13, 39);
	        break;
	      case "i":
	        rect = new createjs.Rectangle(0, 0, 13, 39);
	        break;
	      case "J":
	        rect = new createjs.Rectangle(0, 0, 14.6, 39);
	        break;
	      case "K":
	        rect = new createjs.Rectangle(0, 0, 19.2, 39);
	        break;
	      case "L":
	        rect = new createjs.Rectangle(0, 0, 17.6, 39);
	        break;
	      case "M":
	        rect = new createjs.Rectangle(0, 0, 24.2, 39);
	        break;
	      case "N":
	        rect = new createjs.Rectangle(0, 0, 21.2, 39);
	        break;
	      case "O":
	        rect = new createjs.Rectangle(0, 0, 24.4, 39);
	        break;
	      case "P":
	        rect = new createjs.Rectangle(0, 0, 19.9, 39);
	        break;
	      case "Q":
	        rect = new createjs.Rectangle(0, 0, 24.4, 39);
	        break;
	      case "R":
	        rect = new createjs.Rectangle(0, 0, 19.4, 39);
	        break;
	      case "S":
	        rect = new createjs.Rectangle(0, 0, 18.6, 39);
	        break;
	      case "T":
	        rect = new createjs.Rectangle(0, 0, 18, 39);
	        break;
	      case "U":
	        rect = new createjs.Rectangle(0, 0, 21.6, 39);
	        break;
	      case "V":
	        rect = new createjs.Rectangle(0, 0, 21.2, 39);
	        break;
	      case "W":
	        rect = new createjs.Rectangle(0, 0, 29, 39);
	        break;
	      case "X":
	        rect = new createjs.Rectangle(0, 0, 20, 39);
	        break;
	      case "x":
	        rect = new createjs.Rectangle(0, 0, 14, 39);
	        break;
	      case "Y":
	        rect = new createjs.Rectangle(0, 0, 22, 39);
	        break;
	      case "Z":
	        rect = new createjs.Rectangle(0, 0, 19.2, 39);
	        break;
	      case "1":
	        rect = new createjs.Rectangle(0, 0, 10.6, 39);
	        break;
	      case "2":
	        rect = new createjs.Rectangle(0, 0, 17.6, 39);
	        break;
	      case "3":
	        rect = new createjs.Rectangle(0, 0, 15.6, 39);
	        break;
	      case "4":
	        rect = new createjs.Rectangle(0, 0, 19.2, 39);
	        break;
	      case "5":
	        rect = new createjs.Rectangle(0, 0, 17.4, 39);
	        break;
	      case "6":
	        rect = new createjs.Rectangle(0, 0, 17.2, 39);
	        break;
	      case "7":
	        rect = new createjs.Rectangle(0, 0, 17.2, 39);
	        break;
	      case "8":
	        rect = new createjs.Rectangle(0, 0, 17, 39);
	        break;
	      case "9":
	        rect = new createjs.Rectangle(0, 0, 17.6, 39);
	        break;
	      case "0":
	        rect = new createjs.Rectangle(0, 0, 18.6, 39);
	        break;
	      case ".":
	        rect = new createjs.Rectangle(0, 0, 6, 39);
	        break;
	      case ">":
	        rect = new createjs.Rectangle(0, 0, 16, 39);
	        break;
	      case "<":
	        rect = new createjs.Rectangle(0, 0, 16, 39);
	        break;
	      case "?":
	        rect = new createjs.Rectangle(0, 0, 15.6, 39);
	        break;
	      case "!":
	        rect = new createjs.Rectangle(0, 0, 7.4, 39);
	        break;
	      case "£":
	        rect = new createjs.Rectangle(0, 0, 18.4, 39);
	        break;
	      case "€":
	        rect = new createjs.Rectangle(0, 0, 20.6, 39);
	        break;
	      case "%":
	        rect = new createjs.Rectangle(0, 0, 21.6, 39);
	        break;
	      case "&":
	        rect = new createjs.Rectangle(0, 0, 19, 39);
	        break;
	      case "^":
	        rect = new createjs.Rectangle(0, 0, 15.4, 39);
	        break;
	      case "@":
	        rect = new createjs.Rectangle(0, 0, 27.2, 39);
	        break;
	      case "(":
	        rect = new createjs.Rectangle(0, 0, 11.6, 39);
	        break;
	      case ")":
	        rect = new createjs.Rectangle(0, 0, 11, 39);
	        break;
	      case "+":
	        rect = new createjs.Rectangle(0, 0, 19.2, 39);
	        break;
	      case "=":
	        rect = new createjs.Rectangle(0, 0, 19.2, 39);
	        break;
	      case "-":
	        rect = new createjs.Rectangle(0, 0, 10.6, 39);
	        break;
	      case "_":
	        rect = new createjs.Rectangle(0, 0, 13.4, 39);
	        break;
	      case "/":
	        rect = new createjs.Rectangle(0, 0, 12.8, 39);
	        break;
	      case "\"":
	        rect = new createjs.Rectangle(0, 0, 11.6, 39);
	        break;
	      case "\'":
	        rect = new createjs.Rectangle(0, 0, 7.6, 39);
	        break;
	      case ":":
	        //SWAP THIS BACK OUT WHEN THE POUND SIGN RETRIEVAL IS FIXED
	        //rect = new createjs.Rectangle(0, 0, 7, 39);
	        rect = new createjs.Rectangle(0, 0, 18.4, 39);
	        break;
	      case ";":
	        rect = new createjs.Rectangle(0, 0, 6.8, 39);
	        break;
	      case ",":
	        rect = new createjs.Rectangle(0, 0, 6.8, 39);
	        break;
	      case "#":
	        rect = new createjs.Rectangle(0, 0, 16, 39);
	        break;
	      case "®":
	        rect = new createjs.Rectangle(0, 0, 10, 39);
	        break;
	      case "*":
	        rect = new createjs.Rectangle(0, 0, 14, 39);
	        break;
	      case "™":
	        rect = new createjs.Rectangle(0, 0, 16, 39);
	        break;
	    }
	    return rect;
	  };

	  this.getSpacing = function (char1, char2) {

	    var spacing = this.getSize(char1).width;

	    if (char1 === "A" || char1 === "T" || char1 === "V" || char1 === "W" || char1 === "Y" || char1 === "X" || char1 === "x") {
	      if (char1 === "V" && char2 === "A") {
	        spacing -= 4;
	      } else if (char1 === "A" && char2 === "T") {
	        spacing -= 3;
	      } else if (char1 !== "A" && char2 === "A") {
	        spacing -= 3;
	      } else if (char1 !== "Y" && char2 === "Y") {
	        spacing -= 0.5;
	      } else if (char2 === "C" || char2 === "G" || char2 === "Q") {
	        spacing -= 2;
	      } else if (char1 === "W" && char2 === "O") {
	        spacing -= 1;
	      } else if (char1 === "Y" && char2 === " ") {
	        spacing -= 5;
	      }
	    } else if (char1 === "F" && char2 === "A") {
	      spacing -= 2;
	    } else if (char1 === "C" || char1 === "G" || char1 === "O" || char1 === "Q") {
	      if (char2 === "A") {
	        spacing -= 0;
	      } else if (char2 === "T" || char2 === "V" || char2 === "W" || char2 === "Y") {
	        spacing -= 2;
	      }
	    } else if (char1 === "L") {
	      if (char2 === "Y" || char2 === "V") {
	        spacing -= 4;
	      }
	    } else if (char1 === "®" && char2 === " ") {
	      spacing += 8;
	    } else if (char1 === "™" && char2 === " ") {
	      spacing += 4;
	    }

	    return spacing;
	  };
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	var ControlParticles = function ControlParticles(startPos, col, size, time, rad, canvasWidth, canvasHeight, juggle, wobble) {
	  this.Container_constructor();
	  this._positions = startPos || [];
	  this._circlesArray = [];
	  this._dotRadius = size || 3;
	  this._dotCol = col || "#000fff";
	  this._shouldJuggle = juggle || false;
	  this._shouldWobble = wobble || false;
	  this._isAnimating = false;
	  this._wobbleMax = 0.5;
	  this.dampen = 0.9;
	  this.maxScale = 1;
	  this.minScale = 0.9;
	  this._maxAlpha = 0.75;
	  this._minAlpha = 0.6;
	  this._surplusCircles = [];
	  this.time = time || 0.5;
	  this.rad = rad || 20;
	  this.canvasWidth = canvasWidth;
	  this.canvasHeight = canvasHeight;
	  this.overlayText = [];
	};

	var _p = createjs.extend(ControlParticles, createjs.Container);

	_p.addOverlayText = function (element) {
	  this.addChild(element);
	  this.overlayText.push(element);
	};
	_p.generate = function () {
	  if (this._dotCol !== '#ffffff') {
	    this.generateStatic();
	    return;
	  }
	  for (var i = 0; i < this._positions.length; i++) {
	    var rad = this.rad || 20;
	    var randomRadX = Math.random() * rad * 2 - rad;
	    var randomRadY = Math.random() * rad * 2 - rad;
	    var radius = this._positions[i].r * 0.8;
	    var s = this.makeCircle(radius);
	    this.addChild(s);
	    s.x = this._positions[i].x + randomRadX;
	    s.y = this._positions[i].y + randomRadY;
	    s.origX = this._positions[i].x;
	    s.origY = this._positions[i].y;
	    s.alpha = 0;
	    s.scale = 0;
	    this._circlesArray.push(s);

	    if (this._shouldWobble === true) {
	      s.getChildAt(0).alpha = Math.random() * (this._maxAlpha - this._minAlpha) + this._minAlpha;
	      createjs.Ticker.addEventListener("tick", s.doWobble);
	    }
	  }
	  ;
	};

	_p.generateStatic = function () {
	  for (var i = 0; i < this._positions.length; i++) {
	    var radius = this._positions[i].r * 0.8;
	    var s = this.makeCircle(radius);
	    this.addChild(s);
	    s.x = this._positions[i].x;
	    s.y = this._positions[i].y;
	    s.origX = this._positions[i].x;
	    s.origY = this._positions[i].y;
	    s.alpha = 0;
	    s.scale = 0;
	    this._circlesArray.push(s);
	  }
	};
	_p.completeAnimation = function () {
	  if (this._dotCol === '#ffffff') return;
	  var event = document.createEvent('Event');
	  event.initEvent('animationFinished', true, true);
	  window.dispatchEvent(event);
	};

	_p.startAnimation = function () {
	  var event = document.createEvent('Event');
	  event.initEvent('animationStarted', true, true);
	  window.dispatchEvent(event);
	};
	_p.form = function () {
	  var len = this._circlesArray.length,
	      tl = new TimelineMax({
	    paused: true, onStart: this.startAnimation, onComplete: function () {
	      if (!this.overlayText.length) {
	        this.cache(0, 0, this.canvasWidth, this.canvasHeight, 2);
	      }
	      this.completeAnimation();
	    }.bind(this)
	  }),
	      progDelay,
	      el;
	  if (this._dotCol !== '#ffffff') {
	    for (var i = 0; i < len; i++) {
	      progDelay = i / len;
	      el = this._circlesArray[i];
	      tl.to(el, this.time, { alpha: 1, ease: Sine.easeOut }, this.time / 2);
	    }
	  } else {
	    for (var i = 0; i < len; i++) {
	      progDelay = i / len;
	      el = this._circlesArray[i];
	      tl.to(el, Math.random() + 0.5 * this.time, {
	        scale: 1,
	        alpha: 1,
	        x: el.origX,
	        y: el.origY,
	        ease: Sine.easeOut
	      }, 0);
	    }
	  }
	  tl.play();
	};
	_p.moveIndividualParticle = function (id, targetId, time, delay) {
	  var particle = this._circlesArray[id];
	  var target = this._positions[targetId];
	  TweenMax.to(particle, time, {
	    x: target.x,
	    y: target.y,
	    ease: Power2.easeIn,
	    delay: delay,
	    repeat: -1,
	    yoyo: true,
	    repeatDelay: 2
	  });
	};

	_p.changePositions = function (targetPos) {
	  var oldPositions = this._positions.slice(0);

	  this._positions = targetPos.slice(0);

	  if (oldPositions.length < this._positions.length) {
	    this.generateExtraParticles(oldPositions, this._positions);
	  } else if (oldPositions.length > this._positions.length) {
	    this.spreadSurplusParticles(oldPositions, this._positions);
	  }
	  this.removeSurplusParticles();

	  //this._circlesArray.length = this._positions.length;

	  this._isAnimating = false;
	};

	_p.morph = function (targetPos, style, time, rad) {
	  var style = style || "swirl";
	  var t = time || 1;
	  var rad = rad || 50;
	  var targetPos = targetPos;

	  if (!this._isAnimating) {

	    this._isAnimating = true;

	    var oldPositions = this._positions.slice(0);

	    this._positions = targetPos.slice(0);

	    if (oldPositions.length < this._positions.length) {
	      this.generateExtraParticles(oldPositions, this._positions);
	    } else if (oldPositions.length > this._positions.length) {
	      this.spreadSurplusParticles(oldPositions, this._positions);
	    }

	    var len = this._circlesArray.length;

	    for (var k = 0; k < len; k++) {

	      switch (style) {
	        case "swirl":
	          var swirlPos = {};
	          var randomFactorX = Math.random() * rad * 2;
	          var randomFactorY = Math.random() * rad * 2;
	          swirlPos.x = this._circlesArray[k].x + randomFactorX - rad;
	          swirlPos.y = this._circlesArray[k].y + randomFactorY - rad;
	          var TL = new TimelineLite();
	          if (this._surplusCircles.indexOf(this._circlesArray[k]) < 0) {
	            TL.add([TweenLite.to(this._circlesArray[k], Math.random() * 0.25 + 1.5 * t, {
	              x: swirlPos.x,
	              y: swirlPos.y,
	              delay: Math.random() * 0.1,
	              ease: Circ.easeOut
	            }), TweenLite.to(this._circlesArray[k], Math.random() * 0.25 + 1 * t, {
	              alpha: 0.2,
	              scaleX: 0.1,
	              scaleY: 0.1,
	              delay: Math.random() * 0.1 + 0.25 * t,
	              ease: Linear.easeNone
	            })]);
	            TL.add([TweenLite.to(this._circlesArray[k], Math.random() * 0.25 + 1 * t, {
	              x: this._positions[k].x - 20,
	              y: this._positions[k].y,
	              delay: Math.random() * 0.2,
	              ease: Sine.easeInOut
	            }), TweenLite.to(this._circlesArray[k], Math.random() * 0.25 + 0.75 * t, {
	              alpha: 1,
	              scaleX: 1,
	              scaleY: 1,
	              delay: Math.random() * 0.1,
	              ease: Linear.easeNone
	            })]);
	          } else if (k < len - 1) {
	            TL.add([TweenLite.to(this._circlesArray[k], Math.random() * 0.25 + 1.5 * t, {
	              x: swirlPos.x,
	              y: swirlPos.y,
	              delay: Math.random() * 0.1,
	              ease: Circ.easeOut
	            }), TweenLite.to(this._circlesArray[k], Math.random() * 0.25 + 1 * t, {
	              alpha: 0,
	              scaleX: 0.1,
	              scaleY: 0.1,
	              delay: Math.random() * 0.1 + 0.25 * t,
	              ease: Linear.easeNone
	            })]);
	          } else {
	            TL.add([TweenLite.to(this._circlesArray[k], Math.random() * 0.25 + 1.5 * t, {
	              x: swirlPos.x,
	              y: swirlPos.y,
	              delay: Math.random() * 0.1,
	              ease: Circ.easeOut
	            }), TweenLite.to(this._circlesArray[k], Math.random() * 0.25 + 1 * t, {
	              alpha: 0,
	              scaleX: 0.1,
	              scaleY: 0.1,
	              delay: Math.random() * 0.1 + 0.25 * t,
	              ease: Linear.easeNone,
	              onComplete: this.removeSurplusParticles,
	              onCompleteScope: this
	            })]);
	          }

	          break;
	      }
	    }
	  }
	};

	_p.disperse = function (t, rad) {
	  if (this._dotCol !== '#ffffff') {
	    if (this.cacheID) {
	      this.uncache();
	    }
	    TweenLite.to(this, 0.25, { ease: Power2.easeInOut, alpha: 0 }, 0);
	    return;
	  }
	  this._isAnimating = true;
	  var t = t || 1;
	  var rad = rad || 50;
	  var x,
	      y,
	      el,
	      randomFactorX,
	      randomFactorY,
	      tl = new TimelineMax({
	    paused: true, onUpdate: function () {
	      if (this.cacheID) {
	        this.uncache();
	      }
	    }.bind(this)
	  });
	  for (var i = 0; i < this._circlesArray.length; i++) {
	    el = this._circlesArray[i];
	    randomFactorX = Math.random() * rad * 2;
	    randomFactorY = Math.random() * rad * 2;
	    x = el.x + randomFactorX - rad;
	    y = el.y + randomFactorY - rad;
	    tl.to(el, t, {
	      x: x,
	      y: y,
	      ease: Sine.easeIn
	    }, t * Math.random() * 0.3);
	    tl.to(el, t, {
	      alpha: 0,
	      scaleX: 0,
	      scaleY: 0,
	      ease: Linear.easeNone
	    }, t * Math.random() * 0.3);
	  }
	  tl.play();
	};
	_p.generateExtraParticles = function (oldArray, newArray) {

	  for (var i = oldArray.length; i < newArray.length; i++) {

	    var s = this.makeCircle(21);
	    this.addChild(s);

	    var randCircle = Math.floor(Math.random() * this._circlesArray.length);

	    s.x = this._circlesArray[randCircle].x;
	    s.y = this._circlesArray[randCircle].y;

	    this._circlesArray.push(s);

	    if (this._shouldWobble) {
	      s.alpha = Math.random() * (this._maxAlpha - this._minAlpha) + this._minAlpha;
	      createjs.Ticker.addEventListener("tick", s.doWobble);
	    }
	  }
	};

	_p.spreadSurplusParticles = function (oldArray, newArray) {

	  for (var i = newArray.length; i < oldArray.length; i++) {
	    this._surplusCircles.push(this._circlesArray[i]);
	  }
	  for (i = 0; i < this._surplusCircles.length; i++) {
	    var randPos = Math.round(Math.random() * newArray.length);
	    this._positions.push(newArray[randPos]);
	  }
	};

	_p.removeSurplusParticles = function () {

	  if (this._surplusCircles.length > 0) {
	    for (var i = 0; i < this._surplusCircles.length; i++) {
	      //TODO: Need to check about removing the stage event listeners on 'wobbling' particles
	      this.removeChild(this._surplusCircles[i]);
	    }

	    this._circlesArray.length -= this._surplusCircles.length;
	    this._positions.length -= this._surplusCircles.length;
	    this._surplusCircles = [];
	  }
	  //this._isAnimating = false;
	};

	_p.makeCircle = function (radius) {
	  var c = new createjs.Container();
	  var s = new createjs.Shape();

	  s.name = "circ";
	  s.vx = s.vy = s.vz = 0;

	  c.addChild(s);
	  var g = s.graphics;

	  var _dampen = this.dampen;
	  var _wobbleMax = this._wobbleMax;
	  var _maxAlpha = this._maxAlpha;
	  var _minAlpha = this._minAlpha;
	  var _maxScale = this.maxScale;
	  var _minScale = this.minScale;
	  var myRadius = radius || this._dotRadius;
	  c.doWobble = function (c) {
	    return function () {

	      var thisCircle = c.getChildAt(0);

	      //apply randomness to velocity
	      thisCircle.vx += Math.random() * 0.02 - 0.01;
	      thisCircle.vy += Math.random() * 0.02 - 0.01;
	      thisCircle.vz += Math.random() * 0.01 - 0.005;

	      thisCircle.x += thisCircle.vx;
	      thisCircle.y += thisCircle.vy;
	      thisCircle.scaleX = thisCircle.scaleY += thisCircle.vz;
	      thisCircle.alpha += thisCircle.vz;

	      thisCircle.vx *= _dampen;
	      thisCircle.vy *= _dampen;
	      thisCircle.vz *= _dampen;

	      if (thisCircle.x > _wobbleMax) {
	        thisCircle.x = _wobbleMax;
	      } else if (thisCircle.x < -_wobbleMax) {
	        thisCircle.x = -_wobbleMax;
	      }
	      if (thisCircle.y > _wobbleMax) {
	        thisCircle.y = _wobbleMax;
	      } else if (thisCircle.y < -_wobbleMax) {
	        thisCircle.y = -_wobbleMax;
	      }
	      if (thisCircle.scaleX > _maxScale) {
	        thisCircle.scaleX = thisCircle.scaleY = _maxScale;
	      } else if (thisCircle.scaleX < _minScale) {
	        thisCircle.scaleX = thisCircle.scaleY = _minScale;
	      }

	      if (thisCircle.alpha > _maxAlpha) {
	        thisCircle.alpha = _maxAlpha;
	      } else if (thisCircle.alpha < _minAlpha) {
	        thisCircle.alpha = _minAlpha;
	      }
	    };
	  }(c);
	  g.beginFill(this._dotCol);
	  // g.drawCircle(0,0,this._dotRadius);
	  g.drawCircle(0, 0, myRadius);
	  g.endFill();
	  //s.cache(-this._dotRadius, -this._dotRadius, this._dotRadius*2, this._dotRadius*2);
	  return c;
	};

	module.exports = createjs.promote(ControlParticles, "Container");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ParticleText = __webpack_require__(10);
	var EENobbleeRegular = __webpack_require__(11);
	var ControlParticles = __webpack_require__(12);

	var CtaCopy = function () {
	  function CtaCopy(config) {
	    _classCallCheck(this, CtaCopy);

	    this.canvas = config.canvas;
	    this.ctaHeight = config.ctaHeight;
	    this.fontWeight = config.fontWeight;
	    this.circleRadius = config.circleRadius ? config.circleRadius : 0.8;
	    this.captionSize = config.captionSize ? config.captionSize : 4;
	    this.stage = new createjs.Stage(this.canvas);
	    this.stage.enableDOMEvents(false);
	    this.colour = '#6a737b';
	    this.captionWrapper = document.getElementById('ctaSubcopy');
	    this.captionContent = document.getElementById('ctaSubcopyContent');
	    var dpiMultiplier = 4;
	    var particleText = new ParticleText(new EENobbleeRegular(), this.fontWeight, [config.text], [], 'left', this.fontWeight);
	    var height = this.canvas.offsetHeight;
	    var width = particleText.linesWidth[0] + 1;
	    //TweenMax.ticker.addEventListener('tick', this.handleTick.bind(this));
	    var offset = 0;
	    this.canvas.setAttribute('width', Math.round(width * dpiMultiplier));
	    this.canvas.setAttribute('height', Math.round(height * dpiMultiplier));
	    this.canvas.style.width = width + 'px';
	    this.canvas.style.height = height + 'px';
	    this.stage.scaleX = this.stage.scaleY = dpiMultiplier;
	    offset = dpiMultiplier;
	    this.adjustCaption(config.caption);
	    var particles = new ControlParticles(particleText.points, this.colour, this.circleRadius, 0, 0, this.canvas.width, this.canvas.height);
	    particles.generateStatic();
	    particles.form();
	    particles.x = 0;
	    particles.y = (this.ctaHeight - this.fontWeight) / 2 - offset / 2;
	    this.stage.addChild(particles);
	    //this.handleTick()
	  }

	  _createClass(CtaCopy, [{
	    key: 'handleTick',
	    value: function handleTick() {
	      this.stage.update();
	    }
	  }, {
	    key: 'adjustCaption',
	    value: function adjustCaption(caption) {
	      var _this = this;

	      this.captionContent.innerHTML = caption;
	      this.captionWrapper.style.fontSize = this.captionSize + 'px';
	      var checkOverflow = function checkOverflow(el) {
	        var textWidth = _this.captionContent.offsetWidth;
	        var wrapperWidth = _this.captionWrapper.clientWidth;
	        var isOverflowing = textWidth > wrapperWidth;
	        return isOverflowing;
	      };
	      while (!checkOverflow(this.captionWrapper)) {
	        this.captionWrapper.style.fontSize = parseFloat(this.captionWrapper.style.fontSize, 10) + 1 + 'px';
	      }
	      while (checkOverflow(this.captionWrapper)) {
	        this.captionWrapper.style.fontSize = parseFloat(this.captionWrapper.style.fontSize, 10) - 0.1 + 'px';
	      }
	    }
	  }]);

	  return CtaCopy;
	}();

	exports.default = CtaCopy;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SpriteAnimation = function () {
	  function SpriteAnimation(sequenceImage, frameWidth, frameHeight, container, fps, tweenParams, offsetX, offsetY) {
	    _classCallCheck(this, SpriteAnimation);

	    this.sequenceImage = sequenceImage;
	    this.frameWidth = frameWidth;
	    this.frameHeight = frameHeight;
	    this.container = container;
	    this.container.style.opacity = '0';
	    this.container.style.width = frameWidth + 'px';
	    this.container.style.height = frameHeight + 'px';
	    this.container.style.top = offsetY + 'px';
	    this.container.style.left = offsetX + 'px';
	    this.fps = fps;
	    this.frameCount = 0;
	    this.isVertical = sequenceImage.height > sequenceImage.width;

	    this.timeline = new TimelineMax({
	      paused: true
	    });
	    this.countFrames();
	    this.appendElement();
	    this.createTimeline(tweenParams);
	  }

	  _createClass(SpriteAnimation, [{
	    key: 'appendElement',
	    value: function appendElement() {
	      this.sequenceElement = document.createElement('div');
	      this.sequenceElement.style.width = this.sequenceImage.width + 'px';
	      this.sequenceElement.style.height = this.sequenceImage.height + 'px';
	      this.sequenceElement.style.backgroundImage = 'url(' + this.sequenceImage.src + ')';
	      this.sequenceElement.style.backgroundPosition = '0 0';
	      this.sequenceElement.style.backgroundRepeat = 'no-repeat';
	      this.container.appendChild(this.sequenceElement);
	    }
	  }, {
	    key: 'countFrames',
	    value: function countFrames() {
	      this.frameCount = this.isVertical ? Math.ceil(this.sequenceImage.height / this.frameHeight) - 1 : Math.ceil(this.sequenceImage.width / this.frameWidth) - 1;
	    }
	  }, {
	    key: 'createTimeline',
	    value: function createTimeline() {
	      var additionalParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      this.createPartialTimeline(this.timeline, 0, this.frameCount, additionalParams);
	    }
	  }, {
	    key: 'createPartialTimeline',
	    value: function createPartialTimeline(timeline, start, end) {
	      var additionalParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	      var frameCount = end - start;
	      var initialPosition = this.isVertical ? {
	        y: -(start * this.frameHeight)
	      } : {
	        x: -(start * this.frameWidth)
	      };
	      var tweenParams = this.isVertical ? {
	        y: -(end * this.frameHeight),
	        ease: SteppedEase.config(frameCount)
	      } : { x: -(end * this.frameWidth),
	        ease: SteppedEase.config(frameCount) };
	      for (var attrname in additionalParams) {
	        tweenParams[attrname] = additionalParams[attrname];
	      }
	      timeline.to(this.sequenceElement, 0, initialPosition, 0);
	      timeline.to(this.container, 0, { alpha: 1 }, 0);
	      timeline.to(this.sequenceElement, frameCount / this.fps, tweenParams, 0);
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      this.timeline.play();
	    }
	  }, {
	    key: 'playPart',
	    value: function playPart(start, end) {
	      var additionalParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var playEnd = end ? end : this.frameCount;
	      var timeline = new TimelineMax();
	      this.createPartialTimeline(timeline, start, playEnd, additionalParams);
	      timeline.play();
	    }
	  }, {
	    key: 'dispose',
	    value: function dispose() {
	      this.timeline = null;
	      this.container.parentNode.removeChild(this.container);
	      //this.container.removeChild(this.sequenceElement);
	    }
	  }]);

	  return SpriteAnimation;
	}();

	exports.default = SpriteAnimation;

/***/ },
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Rubrik-Light.eot";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Rubrik-Light.woff";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Rubrik-Light.ttf";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Rubrik-Light.svg";

/***/ },
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _banner = __webpack_require__(2);

	var _banner2 = _interopRequireDefault(_banner);

	var _dataHandler = __webpack_require__(4);

	var _dataHandler2 = _interopRequireDefault(_dataHandler);

	var _fetchData = __webpack_require__(36);

	var _fetchData2 = _interopRequireDefault(_fetchData);

	var _DotsMotion = __webpack_require__(6);

	var _DotsMotion2 = _interopRequireDefault(_DotsMotion);

	var _MaskBuilder = __webpack_require__(8);

	var _MaskBuilder2 = _interopRequireDefault(_MaskBuilder);

	var _CanvasCopy = __webpack_require__(9);

	var _CanvasCopy2 = _interopRequireDefault(_CanvasCopy);

	var _CtaCopy = __webpack_require__(13);

	var _CtaCopy2 = _interopRequireDefault(_CtaCopy);

	var _spriteAnimation = __webpack_require__(14);

	var _spriteAnimation2 = _interopRequireDefault(_spriteAnimation);

	__webpack_require__(37);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var assets = __webpack_require__(42);

	// this value is used to automatically position copy and elements that are right aligned (usually on end frame)
	var elementsRightMargin = 12;
	var elementsLeftMargin = 20;
	var elementsSpacing = 7;
	var ctaFontSize = 14;
	var ctaHeight = 32;
	var fontSize = 18;
	var subCopyFontSize = 3 / 4 * fontSize;
	var lineHeight = 21;
	var topAnchorPoint = 22;
	var ctaSubCopyFontSize = 9;
	var speedTestLogoPositions = [0, { top: 200, left: 250 }, { top: 200, left: 250 }, { top: 'under-copy', left: elementsLeftMargin }, { top: 200, left: 250 }, { top: 200, left: 250 }];
	var frame2CopyHorizontalPosition = 170;

	var wrapper = document.getElementById('wrapper');
	var copyCanvas = document.getElementById('copyCanvas');
	var canvasCopy = new _CanvasCopy2.default({
	  canvas: copyCanvas,
	  circleRadius: 0.9,
	  buildTime: 0.5,
	  fontWeight: fontSize,
	  lineHeight: lineHeight,
	  spreadRadius: 15,
	  rightMargin: elementsRightMargin
	});
	var banner = void 0;
	var data = new _dataHandler2.default();
	var mb = new _MaskBuilder2.default();
	var ctaCopy = null;

	var doBanner = function doBanner(timeline) {
	  var anchorsByFrame = [topAnchorPoint, topAnchorPoint + lineHeight * (data.getCopyAnchorPoint(1) - 1), topAnchorPoint + lineHeight * (data.getCopyAnchorPoint(2) - 1), topAnchorPoint + lineHeight * (data.getCopyAnchorPoint(3) - 1), topAnchorPoint + lineHeight * (data.getCopyAnchorPoint(4) - 1), topAnchorPoint + lineHeight * (data.getCopyAnchorPoint(5) - 1)];
	  var subCopyAnchorsByFrame = [0, anchorsByFrame[1] + lineHeight * data.getLineCount(1) + elementsSpacing - (lineHeight - fontSize), anchorsByFrame[2] + lineHeight * data.getLineCount(2) + elementsSpacing - (lineHeight - fontSize), anchorsByFrame[3] + lineHeight * data.getLineCount(3) + elementsSpacing - (lineHeight - fontSize), anchorsByFrame[4] + lineHeight * data.getLineCount(4) + elementsSpacing - (lineHeight - fontSize), anchorsByFrame[5] + lineHeight * data.getLineCount(5) + elementsSpacing - (lineHeight - fontSize)];

	  canvasCopy.createParticleCopy('frame1', 'copy1', data.getCopy(1, 'Copy'), data.getYellowCopy(1, 'Copy'), elementsLeftMargin, anchorsByFrame[1], '#ffffff', '#fff100');

	  canvasCopy.createParticleCopy('frame2', 'copy2', data.getCopy(2, 'Copy'), data.getYellowCopy(2, 'Copy'), frame2CopyHorizontalPosition, anchorsByFrame[2], '#ffffff', '#fff100');

	  canvasCopy.createParticleCopy('frame3', 'copy3', data.getCopy(3, 'Copy'), data.getYellowCopy(3, 'Copy'), elementsLeftMargin, anchorsByFrame[3], '#ffffff', '#fff100');

	  canvasCopy.createParticleCopy('frame4', 'copy4', data.getCopy(4, 'Copy'), data.getYellowCopy(4, 'Copy'), 'center', 'center', '#ffffff', '#fff100', 'center');

	  canvasCopy.createParticleCopy('frame5', 'copy5', data.getCopy(5, 'Copy'), data.getYellowCopy(5, 'Copy'), 'right', anchorsByFrame[5], '#ffffff', '#fff100', 'right');

	  var mask1 = {};
	  var mask2 = void 0;
	  var mask3 = void 0;
	  var mask4 = void 0;
	  var mask5 = void 0;
	  var speedtestMask = void 0;

	  var background = document.getElementById('background');
	  var eeLogo = document.getElementById('eeLogo');
	  var speedTestLogo = document.getElementById('speedTestLogo');
	  var gridBackground = document.getElementById('gridBackground');
	  var dotContainer = document.getElementById('dotContainer');
	  var ctaContainer = document.getElementById('ctaContainer');
	  var ctaCopyCanvas = document.getElementById('ctaCopyCanvas');
	  var rubrikCopyFrame2 = document.getElementById('rubrikFrame2');
	  var rubrikCopyFrame3 = document.getElementById('rubrikFrame3');
	  var rubrikCopyFrame5 = document.getElementById('rubrikFrame5');

	  banner.setRubrikCopy(rubrikCopyFrame2, data.getRubrikCopyHTML(2), {
	    top: subCopyAnchorsByFrame[2],
	    left: frame2CopyHorizontalPosition
	  }, subCopyFontSize);
	  banner.setRubrikCopy(rubrikCopyFrame3, data.getRubrikCopyHTML(3), {
	    top: subCopyAnchorsByFrame[3],
	    left: elementsLeftMargin
	  }, subCopyFontSize);
	  banner.setRubrikCopy(rubrikCopyFrame5, data.getRubrikCopyHTML(5), {
	    top: subCopyAnchorsByFrame[5],
	    right: elementsRightMargin
	  }, subCopyFontSize);

	  banner.setSpeedTestLogoPosition(speedTestLogo, speedTestLogoPositions[data.getData('SpeedtestLogoFrame')], subCopyAnchorsByFrame[data.getData('SpeedtestLogoFrame')] + elementsSpacing + subCopyFontSize * 1.2 * data.getLineCount(3, 'Subcopy'));

	  // 1.2 = default line height
	  ctaContainer.style.top = subCopyAnchorsByFrame[5] + elementsSpacing + subCopyFontSize * 1.2 * data.getLineCount(5, 'Subcopy') + 'px';
	  ctaContainer.style.right = elementsRightMargin + 'px';
	  /* eslint-disable no-new */
	  ctaCopy = new _CtaCopy2.default({
	    canvas: ctaCopyCanvas,
	    fontWeight: ctaFontSize,
	    ctaHeight: ctaHeight,
	    text: data.getData('Frame5CtaCopy'),
	    caption: data.getData('Frame5CtaSubcopy'),
	    captionSize: ctaSubCopyFontSize
	  });
	  /* eslint-enable no-new */

	  var animationContainer1 = document.getElementById('animationContainer1');
	  var animationContainer2 = document.getElementById('animationContainer2');
	  var animationContainer3 = document.getElementById('animationContainer3');
	  var animationContainer4 = document.getElementById('animationContainer4');
	  var animationContainer5 = document.getElementById('animationContainer5');
	  var animationContainer6 = document.getElementById('animationContainer6');

	  var frame1Animation, flyingAnimation, jumpingAnimation, landingAnimation, armAnimation, backAnimation;
	  frame1Animation = new _spriteAnimation2.default(banner.getCachedImage('SIMO_BUILDING_SEQ'), 180, 225, animationContainer1, 24, {
	    onComplete: function onComplete() {
	      frame1Animation.playPart(91, false, { repeat: -1 });
	    }
	  }, 120, 10);
	  flyingAnimation = new _spriteAnimation2.default(banner.getCachedImage('SIMO_FLYING'), 150, 155, animationContainer2, 24, { repeat: -1 }, 0, 75);
	  jumpingAnimation = new _spriteAnimation2.default(banner.getCachedImage('SIMO_JUMPING'), 155, 240, animationContainer3, 24, {}, 0, 0);
	  landingAnimation = new _spriteAnimation2.default(banner.getCachedImage('SIMO_LANDING'), 170, 240, animationContainer4, 24, {}, 0, 0);
	  armAnimation = new _spriteAnimation2.default(banner.getCachedImage('SIMO_ARM_POINT'), 155, 160, animationContainer5, 24, {}, 15, 80);
	  backAnimation = new _spriteAnimation2.default(banner.getCachedImage('SIMO_BACK_FLY'), 50, 50, animationContainer6, 24, {}, 120, 100);

	  timeline.addLabel('frame1').addLabel('frame2', 'frame1+=4').addLabel('frame3', 'frame2+=3.5').addLabel('frame4', 'frame3+=3.5').addLabel('frame5', 'frame4+=4')

	  //frame 1 tweens
	  .addCallback(function () {
	    frame1Animation.play();
	    mask1 = mb.generateMask(canvasCopy.getBoundingBoxes('copy1'));
	    mb.fade(mask1, { alpha: 1 });
	    canvasCopy.addCopyToStage('frame1');
	    canvasCopy.copy1.form();
	  }, 'frame1').addCallback(function () {
	    canvasCopy.copy1.overlayText[0].form();
	  }, 'frame1+=1')
	  //frame 2 tweens
	  .to([background, gridBackground, dotContainer, mask1, animationContainer1], 0.75, {
	    ease: Power2.easeInOut,
	    x: -140
	  }, 'frame2').to(canvasCopy.copy1, 0.75, { ease: Power2.easeInOut, x: -140 }, 'frame2').addCallback(function () {
	    mb.fade(mask1, { alpha: 0 });
	  }, 'frame2').to(rubrikCopyFrame2, .25, { ease: Power2.easeInOut, alpha: 1 }, 'frame2+=0.75').addCallback(function () {
	    mb.clearMask();
	    mask2 = mb.generateMask(canvasCopy.getBoundingBoxes('copy2', rubrikCopyFrame2));
	    mb.fade(mask2, { alpha: 1 });
	    canvasCopy.addCopyToStage('frame2');
	    canvasCopy.copy2.form();
	  }, 'frame2+=0.75').addCallback(function () {
	    canvasCopy.copy2.overlayText[0].form();
	  }, 'frame2+=1.75')
	  //
	  //frame 3 tweens
	  .addLabel('flyingAnimation', 'frame3+=1.25').to(jumpingAnimation.container, 0, { x: 5 }, 'frame3').to(flyingAnimation.container, 0, { y: -250, x: 140 }, 'frame3').addCallback(function () {
	    frame1Animation.dispose();
	    jumpingAnimation.play();
	  }, 'frame3').addCallback(function () {
	    flyingAnimation.play();
	  }, 'frame3+=0.77').addCallback(function () {
	    mb.fade(mask3, { alpha: 0 }, 0.25);
	  }, 'frame3').to(flyingAnimation.container, 0.75, { y: 0, ease: Power2.easeInOut }, 'frame3+=0.35').addCallback(function () {
	    jumpingAnimation.dispose();
	  }, 'frame3+=2').to(rubrikCopyFrame3, 0.25, { ease: Power2.easeInOut, alpha: 1 }, 'frame3+=0.75').to(background, 0.75, { ease: Power2.easeInOut, y: 500 }, 'frame3+=0.25').to([gridBackground, dotContainer], 1, { ease: Power2.easeInOut, y: 100 }, 'frame3+=0.25').to(canvasCopy.copy2, .5, { ease: Power2.easeInOut, y: 400 }, 'frame3+=0.25').to(rubrikCopyFrame2, .5, { ease: Power2.easeInOut, y: 400, onComplete: function onComplete() {
	      rubrikCopyFrame2.style.display = "none";
	    } }, 'frame3+=0.25').addCallback(function () {
	    mb.clearMask();
	    canvasCopy.addCopyToStage('frame3');
	    canvasCopy.copy3.form();
	  }, 'frame3+=0.75').addCallback(function () {
	    mask3 = mb.generateMask(canvasCopy.getBoundingBoxes('copy3', rubrikCopyFrame3));
	    mb.fade(mask3, { alpha: 1 });
	  }, 'frame3+=1.25').addCallback(function () {
	    canvasCopy.copy3.overlayText[0].form();
	  }, 'frame3+=1.75').to(flyingAnimation.container, 0.75, { ease: Power0.easeNone, x: 142 }, 'flyingAnimation').to(flyingAnimation.container, 0.75, { ease: Power0.easeNone, y: 2 }, 'flyingAnimation+=1.5').to(flyingAnimation.container, 0.75, { ease: Power0.easeNone, x: 137 }, 'flyingAnimation+=2.25').to(flyingAnimation.container, 0.75, { ease: Power0.easeNone, y: -2 }, 'flyingAnimation+=3').to(flyingAnimation.container, 0.75, { ease: Power0.easeNone, x: 140, y: 0 }, 'flyingAnimation+=3.75')
	  //frame 4 tweens
	  .to(flyingAnimation.container, 0.35, { ease: Power2.easeInOut, x: 550 }, 'frame4').addCallback(function () {
	    flyingAnimation.dispose();
	  }, 'frame4+=0.3').to(canvasCopy.copy3, .85, { ease: Power2.easeInOut, x: -500 }, 'frame4').to(rubrikCopyFrame3, .85, { ease: Power2.easeInOut, x: -500, onComplete: function onComplete() {
	      rubrikCopyFrame3.style.display = "none";
	    } }, 'frame4').to(backAnimation.container, 0, { ease: Power2.easeInOut, x: -200, scale: 0.5 }, 'frame4').addCallback(function () {
	    backAnimation.play();
	    mb.fade(mask3, { alpha: 0, x: -200 });
	  }, 'frame4').to(backAnimation.container, 0.75, { ease: Power2.easeInOut, x: 500 }, 'frame4+=0.55').addCallback(function () {
	    backAnimation.dispose();
	  }, 'frame4+=1.75').to([gridBackground, dotContainer], 0.75, { ease: Power2.easeInOut, x: -280 }, 'frame4').addCallback(function () {
	    canvasCopy.addCopyToStage('frame4');
	    mb.clearMask();
	    mask4 = mb.generateMask(canvasCopy.getBoundingBoxes('copy4'));
	    mb.fade(mask4, { alpha: 1 });
	    canvasCopy.copy4.form();
	  }, 'frame4+=0.75').addCallback(function () {
	    canvasCopy.copy4.overlayText[0].form();
	  }, 'frame4+=1.75')
	  //frame 5 tweens
	  .to(canvasCopy.copy4, .75, { y: -300, ease: Power2.easeInOut }, 'frame5').to([background, gridBackground, dotContainer], 0.75, { y: 0, ease: Power2.easeInOut }, 'frame5').to(eeLogo, .75, { alpha: 1, ease: Power2.easeInOut }, 'frame5+=0.75').to(rubrikCopyFrame5, 0, { alpha: 1, ease: Power2.easeInOut }, 'frame5+=0.75').to([ctaContainer], 0.75, { alpha: 1, ease: Power2.easeInOut }, 'frame5+=1.75').addCallback(function () {
	    canvasCopy.addCopyToStage('frame5');
	    canvasCopy.copy5.form();
	    landingAnimation.play();
	  }, 'frame5+=0.75').addCallback(function () {
	    mb.fade(mask4, { alpha: 0, y: -300 });
	  }, 'frame5').addCallback(function () {
	    mb.clearMask();
	    mask5 = mb.generateMask(canvasCopy.getBoundingBoxes('copy5', rubrikCopyFrame5, ctaContainer));
	    mb.fade(mask5, { alpha: 1 });
	    ctaCopy.handleTick();
	    canvasCopy.copy5.overlayText[0].form();
	  }, 'frame5+=1.75').addCallback(function () {
	    landingAnimation.dispose();
	    armAnimation.play();
	  }, 'frame5+=1.85');

	  if (data.getData('SpeedtestLogoFrame') === 2) {
	    timeline.to(speedTestLogo, .25, { ease: Power2.easeInOut, alpha: 1 }, 'frame2+=0.75').addCallback(function () {
	      speedtestMask = mb.generateMask([{
	        x: speedTestLogoPositions[2].left,
	        y: speedTestLogoPositions[2].top,
	        width: speedTestLogo.clientWidth,
	        height: speedTestLogo.clientHeight
	      }]);
	      mb.fade(speedtestMask, { alpha: 1 });
	    }, 'frame2+=0.75').to(speedTestLogo, 0.75, { ease: Power2.easeInOut, y: 730 }, 'frame3+=0.25').addCallback(function () {
	      mb.fade(speedtestMask, { alpha: 0 }, 0.25);
	    }, 'frame3');
	  } else if (data.getData('SpeedtestLogoFrame') === 3) {
	    timeline.to(speedTestLogo, .25, { ease: Power2.easeInOut, alpha: 1 }, 'frame3+=0.75').addCallback(function () {
	      speedtestMask = mb.generateMask([{
	        x: parseInt(speedTestLogo.style.left, 10),
	        y: parseInt(speedTestLogo.style.top, 10),
	        width: speedTestLogo.clientWidth,
	        height: speedTestLogo.clientHeight
	      }]);
	      mb.fade(speedtestMask, { alpha: 1 });
	    }, 'frame3+=1.25').to(speedTestLogo, 0.75, { ease: Power2.easeInOut, x: -500 }, 'frame4').addCallback(function () {
	      mb.fade(speedtestMask, { alpha: 0 }, 0.25);
	    }, 'frame4');
	  } else if (data.getData('SpeedtestLogoFrame') === 4) {
	    timeline.to(speedTestLogo, .25, { ease: Power2.easeInOut, alpha: 1 }, 'frame4+=0.75').addCallback(function () {
	      speedtestMask = mb.generateMask([{
	        x: speedTestLogoPositions[2].left,
	        y: speedTestLogoPositions[2].top,
	        width: speedTestLogo.clientWidth,
	        height: speedTestLogo.clientHeight
	      }]);
	      mb.fade(speedtestMask, { alpha: 1 });
	    }, 'frame4+=0.75').to(speedTestLogo, 0.75, { y: -350, ease: Power2.easeInOut }, 'frame5').addCallback(function () {
	      mb.fade(speedtestMask, { alpha: 0 }, 0.25);
	    }, 'frame5');
	  }
	};
	var initialiseBanner = function initialiseBanner() {
	  data.setData(dynamicContent.dynamicMPU_data[0]);
	  mb.init();

	  var dotsMotion = new _DotsMotion2.default({
	    dotContainer: document.getElementById('dotContainer'),
	    grid: 35,
	    everyOtherDotX: 4,
	    everyOtherDotY: 3,
	    freq: 125,
	    dotDelay: 0.5,
	    dotDur: 0.75,
	    dotScale: 1.8,
	    dotAlpha: 0.6,
	    runAnimation: true,
	    canvas: copyCanvas,
	    delay: 375,
	    duration: 15000
	  });

	  banner = new _banner2.default({
	    wrapperElement: wrapper,
	    exitHandlerFn: function exit() {
	      Enabler.exit('Background Exit', data.getExitUrl());
	    },
	    assetsManifest: assets,
	    doBannerFn: doBanner
	  });
	  dotsMotion.start();
	  banner.start();
	};

	(0, _fetchData2.default)();

	document.getElementById('preloadShape').style.display = 'block';
	if (!Enabler.isPageLoaded()) {
	  Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, initialiseBanner);
	} else {
	  initialiseBanner();
	}

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = fetchData;
	function fetchData() {
	  Enabler.setProfileId(1102694);
	  var devDynamicContent = {};
	  devDynamicContent.dynamicMPU_data = [{}];
	  devDynamicContent.dynamicMPU_data[0]._id = 0;
	  devDynamicContent.dynamicMPU_data[0].ID = 1;
	  devDynamicContent.dynamicMPU_data[0].ReportingLabel = "TestData";
	  devDynamicContent.dynamicMPU_data[0].isDefault = true;
	  devDynamicContent.dynamicMPU_data[0].isActive = true;
	  devDynamicContent.dynamicMPU_data[0].ExitURL = {};
	  devDynamicContent.dynamicMPU_data[0].ExitURL.Url = "http://shop.ee.co.uk/mobile-phones/pay-monthly/samsung-galaxy-s7-edge-32gb-pink-gold/details?bundleNo=-1";
	  devDynamicContent.dynamicMPU_data[0].SpeedtestLogoFrame = 2;
	  devDynamicContent.dynamicMPU_data[0].Frame1Copy = "TRANSFORM<n>YOUR PHONE<n>WITH A<n><>SUPERFAST<n>4G SIM<>";
	  devDynamicContent.dynamicMPU_data[0].Frame1CopyAnchorPoint = 1;
	  devDynamicContent.dynamicMPU_data[0].Frame2Copy = "ON THE <>UK\'S<n>FASTEST<n>NETWORK<>";
	  devDynamicContent.dynamicMPU_data[0].Frame2CopyAnchorPoint = 4;
	  devDynamicContent.dynamicMPU_data[0].Frame2Subcopy = "Rubri<>yellow<><n>test<>yeee<>";
	  devDynamicContent.dynamicMPU_data[0].Frame3Copy = "SAVE A<n>HUGE <>\xA396<>";
	  devDynamicContent.dynamicMPU_data[0].Frame3CopyAnchorPoint = 4;
	  devDynamicContent.dynamicMPU_data[0].Frame3Subcopy = "Ruuub<n><>rfsadfadfadfik<>";
	  devDynamicContent.dynamicMPU_data[0].Frame4Copy = "AND GET <>8GB<> FOR JUST<n><>\xA319.99<> PER MONTH";
	  devDynamicContent.dynamicMPU_data[0].Frame5Copy = "GET <>8GB<><n>JUST <>\xA319.99<><n>PER MONTH";
	  devDynamicContent.dynamicMPU_data[0].Frame5CopyAnchorPoint = 1;
	  devDynamicContent.dynamicMPU_data[0].Frame5Subcopy = "Only until<n><>rfsadfadfadfik<>";
	  devDynamicContent.dynamicMPU_data[0].Frame5CtaCopy = "BUY NOW";
	  devDynamicContent.dynamicMPU_data[0].Frame5CtaSubcopy = "Another No Brainer from EE";
	  Enabler.setDevDynamicContent(devDynamicContent);
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(25)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./styles.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\nSCSS variables are information about icon's compiled state, stored under its original file name\n\n.icon-home {\n  width: $icon-home-width;\n}\n\nThe large array-like variables contain all information about a single icon\n$icon-home: x y offset_x offset_y width height total_width total_height image_path;\n\nAt the bottom of this section, we provide information about the spritesheet itself\n$spritesheet: width height image $spritesheet-sprites;\n*/\n/*\nThe provided mixins are intended to be used with the array-like variables\n\n.icon-home {\n  @include sprite-width($icon-home);\n}\n\n.icon-email {\n  @include sprite($icon-email);\n}\n\nExample usage in HTML:\n\n`display: block` sprite:\n<div class=\"icon-home\"></div>\n\nTo change `display` (e.g. `display: inline-block;`), we suggest using a common CSS class:\n\n// CSS\n.icon {\n  display: inline-block;\n}\n\n// HTML\n<i class=\"icon icon-home\"></i>\n*/\n/*\nThe `sprites` mixin generates identical output to the CSS template\n  but can be overridden inside of SCSS\n\n@include sprites($spritesheet-sprites);\n*/\n@font-face {\n  font-family: 'Rubrik-Light';\n  src: url(" + __webpack_require__(18) + ");\n  src: local(\"\\263A\"), url(" + __webpack_require__(19) + ") format(\"woff\"), url(" + __webpack_require__(20) + ") format(\"truetype\"), url(" + __webpack_require__(21) + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n.rubrik {\n  font-family: Rubrik-Light;\n  color: #fff; }\n\n#preloadShape {\n  position: absolute;\n  width: 298px;\n  height: 248px;\n  left: 0px;\n  top: 0px;\n  cursor: pointer;\n  z-index: 700;\n  display: none;\n  overflow: hidden;\n  border: 1px solid gray; }\n\n#preloadShape .circle {\n  border: 5px solid #ddd;\n  border-bottom-color: #fff100;\n  -webkit-border-radius: 50%;\n     -moz-border-radius: 50%;\n          border-radius: 50%;\n  height: 20px;\n  left: 50%;\n  margin-left: -12.5px;\n  margin-top: -12.5px;\n  position: absolute;\n  top: 50%;\n  -webkit-transition: all 0.7s ease-in-out;\n  -o-transition: all 0.7s ease-in-out;\n  -moz-transition: all 0.7s ease-in-out;\n  transition: all 0.7s ease-in-out;\n  -webkit-animation: spin 0.5s linear infinite;\n     -moz-animation: spin 0.5s linear infinite;\n       -o-animation: spin 0.5s linear infinite;\n          animation: spin 0.5s linear infinite;\n  width: 20px; }\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@-moz-keyframes spin {\n  from {\n    -moz-transform: rotate(0deg);\n         transform: rotate(0deg); }\n  to {\n    -moz-transform: rotate(360deg);\n         transform: rotate(360deg); } }\n\n@-o-keyframes spin {\n  from {\n    -o-transform: rotate(0deg);\n       transform: rotate(0deg); }\n  to {\n    -o-transform: rotate(360deg);\n       transform: rotate(360deg); } }\n\n@keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n       -moz-transform: rotate(0deg);\n         -o-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n       -moz-transform: rotate(360deg);\n         -o-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.yellow {\n  color: #ffec00; }\n\nhtml, body {\n  background-color: #FFFFFF;\n  margin: 0;\n  padding: 0;\n  width: 300px;\n  height: 250px;\n  overflow: hidden; }\n\n#wrapper {\n  opacity: 0;\n  width: 300px;\n  height: 250px;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n#border {\n  /*container css*/\n  position: absolute;\n  z-index: 99;\n  width: 298px;\n  height: 248px;\n  cursor: pointer;\n  overflow: hidden;\n  border: 1px solid gray; }\n\n#copyCanvas {\n  margin: 0;\n  padding: 0;\n  z-index: 30;\n  position: absolute; }\n\n#background {\n  position: absolute;\n  background-image: url(" + __webpack_require__(39) + ");\n  bottom: -41px;\n  left: 0;\n  width: 900px;\n  height: 800px;\n  z-index: 0; }\n\n#eeLogo {\n  position: absolute;\n  background-image: url(images/generated/sprite.png);\n  background-position: 0px 0px;\n  width: 300px;\n  height: 250px;\n  right: 0;\n  z-index: 99;\n  opacity: 0; }\n\n.mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  z-index: 19; }\n\n#speedTestLogo {\n  position: absolute;\n  background-image: url(images/generated/sprite.png);\n  background-position: 0px -260px;\n  width: 37px;\n  height: 39px;\n  z-index: 99;\n  opacity: 0; }\n\n.dot {\n  width: 4px;\n  height: 4px;\n  background-image: url(" + __webpack_require__(40) + ");\n  -webkit-background-size: contain;\n     -moz-background-size: contain;\n       -o-background-size: contain;\n          background-size: contain;\n  position: absolute;\n  opacity: 0.4;\n  z-index: 0;\n  overflow: hidden; }\n\n#dotContainer {\n  position: absolute;\n  width: 527px;\n  height: 340px;\n  top: -94px;\n  left: -35px;\n  overflow: hidden;\n  z-index: 15;\n  opacity: 1; }\n\n#gridBackground {\n  background-image: url(" + __webpack_require__(41) + ");\n  background-repeat: no-repeat;\n  position: absolute;\n  width: 600px;\n  height: 400px;\n  top: -85px;\n  left: 0;\n  overflow: hidden;\n  z-index: 15;\n  opacity: 1; }\n\n#rubrikFrame2 {\n  top: 0;\n  position: absolute;\n  opacity: 0;\n  z-index: 30; }\n\n#rubrikFrame3 {\n  top: 0;\n  position: absolute;\n  opacity: 0;\n  z-index: 30; }\n\n#rubrikFrame5 {\n  top: 0;\n  position: absolute;\n  opacity: 0;\n  z-index: 30;\n  text-align: right; }\n\n#ctaContainer {\n  top: 0px;\n  right: 20px;\n  position: absolute;\n  opacity: 0;\n  z-index: 30; }\n\n#cta {\n  padding: 0 16px;\n  background-color: #ffec00;\n  color: #6a737b;\n  height: 32px; }\n  #cta .cta-arrow {\n    display: block;\n    float: right;\n    margin-top: 11px;\n    width: 7px;\n    height: 11px; }\n    #cta .cta-arrow .cta-arrow-icon {\n      display: block;\n      background-image: url(images/generated/sprite.png);\n      background-position: -47px -260px;\n      width: 14px;\n      height: 22px;\n      -webkit-transform: scale(0.5);\n         -moz-transform: scale(0.5);\n          -ms-transform: scale(0.5);\n           -o-transform: scale(0.5);\n              transform: scale(0.5);\n      -webkit-transform-origin: 0 0;\n         -moz-transform-origin: 0 0;\n          -ms-transform-origin: 0 0;\n           -o-transform-origin: 0 0;\n              transform-origin: 0 0; }\n  #cta #ctaCopyCanvas {\n    height: 32px;\n    margin-right: 6px; }\n\n#ctaSubcopy {\n  margin-top: 3px;\n  z-index: 30;\n  font-size: 8.3px;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  position: absolute;\n  left: 0;\n  right: 0; }\n\n.animation-container {\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 250px;\n  position: absolute;\n  z-index: 30;\n  overflow: hidden; }\n", ""]);

	// exports


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/background.jpg";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/dot.png";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/grid.png";

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = {
		"path": "images/",
		"manifest": [
			"background.jpg",
			"dot.png",
			"grid.png",
			"generated/sprite.png",
			"generated/SIMO_ARM_POINT/SIMO_ARM_POINT.png",
			"generated/SIMO_BUILDING_SEQ/SIMO_BUILDING_SEQ.png",
			"generated/SIMO_BACK_FLY/SIMO_BACK_FLY.png",
			"generated/SIMO_BUILDING_SEQ2/SIMO_BUILDING_SEQ2.png",
			"generated/SIMO_FLYING/SIMO_FLYING.png",
			"generated/SIMO_JUMPING/SIMO_JUMPING.png",
			"generated/SIMO_LANDING/SIMO_LANDING.png"
		]
	};

/***/ }
/******/ ]);