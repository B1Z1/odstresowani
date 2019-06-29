"use strict";

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function s(i) {
    if (t[i]) return t[i].exports;
    var a = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(a.exports, a, a.exports, s), a.l = !0, a.exports;
  }

  s.m = e, s.c = t, s.d = function (e, t, i) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, s.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (s.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) {
      s.d(i, a, function (t) {
        return e[t];
      }.bind(null, a));
    }
    return i;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "", s(s.s = 2);
}({
  2: function _(e, t, s) {
    "use strict";

    s.r(t);

    var i =
    /*#__PURE__*/
    function () {
      function i(e, t) {
        _classCallCheck(this, i);

        this.global = {
          behavior: "smooth",
          timeout: 300,
          breakPoint: 1320,
          classes: {
            active: "fullpage--active"
          },
          mouseEvent: /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel"
        }, this.scrollBlock = !1, this.buttons = _toConsumableArray(document.querySelectorAll(t.buttons)), this.fullpage = {
          container: document.querySelector(e),
          current: 0
        }, this.fullpage.container && (this.fullpage.children = this.fullpage.container.children, this.init());
      }

      _createClass(i, [{
        key: "init",
        value: function init() {
          var _this = this;

          window.outerWidth > this.global.breakPoint && this.start(), window.addEventListener("resize", function (e) {
            window.outerWidth < _this.global.breakPoint ? (_this.toggleScroll(!1), window.removeEventListener(_this.global.mouseEvent, function (e) {
              _this.onMouseWheelEvent(e);
            }, {
              passive: !1
            })) : _this.start();
          });
        }
      }, {
        key: "start",
        value: function start() {
          var _this2 = this;

          this.toggleScroll(!0), this.buttons.length > 0 && this.buttonClick(), this.addActiveClass(), this.scrollToActive(), window.addEventListener(this.global.mouseEvent, function (e) {
            _this2.onMouseWheelEvent(e);
          }, {
            passive: !1
          });
        }
      }, {
        key: "onMouseWheelEvent",
        value: function onMouseWheelEvent(e) {
          if (e.preventDefault(), !this.scrollBlock) {
            this.blockFakeScroll();

            var _t = window.event || e,
                _s = _t.detail ? 120 * _t.detail : _t.deltaY;

            this.removeActiveClass(), _s > 0 && this.fullpage.current < this.fullpage.children.length - 1 ? this.fullpage.current++ : _s < 0 && this.fullpage.current > 0 && this.fullpage.current--, this.addActiveClass(), this.scrollToActive();
          }
        }
      }, {
        key: "blockFakeScroll",
        value: function blockFakeScroll() {
          var _this3 = this;

          this.scrollBlock = !0, setTimeout(function () {
            _this3.scrollBlock = !1;
          }, this.global.timeout);
        }
      }, {
        key: "buttonClick",
        value: function buttonClick() {
          var _this4 = this;

          this.buttons.forEach(function (e) {
            var t = e,
                s = Number(t.dataset.fullpageTo);
            t.addEventListener("click", function (e) {
              _this4.fullpage.current = s, _this4.addActiveClass(), _this4.scrollToActive();
            });
          });
        }
      }, {
        key: "addActiveClass",
        value: function addActiveClass() {
          this.fullpage.children[this.fullpage.current].classList.add(this.global.classes.active);
        }
      }, {
        key: "removeActiveClass",
        value: function removeActiveClass() {
          this.fullpage.children[this.fullpage.current].classList.remove(this.global.classes.active);
        }
      }, {
        key: "scrollToActive",
        value: function scrollToActive() {
          window.scrollTo(0, this.fullpage.children[this.fullpage.current].offsetTop);
        }
      }, {
        key: "toggleScroll",
        value: function toggleScroll(e) {
          document.body.style.overflow = e ? "hidden" : "visible", document.documentElement.style.overflow = e ? "hidden" : "visible";
        }
      }]);

      return i;
    }();

    var a = "undefined" == typeof document ? {
      body: {},
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      activeElement: {
        blur: function blur() {},
        nodeName: ""
      },
      querySelector: function querySelector() {
        return null;
      },
      querySelectorAll: function querySelectorAll() {
        return [];
      },
      getElementById: function getElementById() {
        return null;
      },
      createEvent: function createEvent() {
        return {
          initEvent: function initEvent() {}
        };
      },
      createElement: function createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function setAttribute() {},
          getElementsByTagName: function getElementsByTagName() {
            return [];
          }
        };
      },
      location: {
        hash: ""
      }
    } : document,
        n = "undefined" == typeof window ? {
      document: a,
      navigator: {
        userAgent: ""
      },
      location: {},
      history: {},
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      getComputedStyle: function getComputedStyle() {
        return {
          getPropertyValue: function getPropertyValue() {
            return "";
          }
        };
      },
      Image: function Image() {},
      Date: function Date() {},
      screen: {},
      setTimeout: function setTimeout() {},
      clearTimeout: function clearTimeout() {}
    } : window;

    var r = function r(e) {
      _classCallCheck(this, r);

      var t = this;

      for (var _s2 = 0; _s2 < e.length; _s2 += 1) {
        t[_s2] = e[_s2];
      }

      return t.length = e.length, this;
    };

    function l(e, t) {
      var s = [];
      var i = 0;
      if (e && !t && e instanceof r) return e;
      if (e) if ("string" == typeof e) {
        var _n, _r;

        var _l = e.trim();

        if (_l.indexOf("<") >= 0 && _l.indexOf(">") >= 0) {
          var _e = "div";

          for (0 === _l.indexOf("<li") && (_e = "ul"), 0 === _l.indexOf("<tr") && (_e = "tbody"), 0 !== _l.indexOf("<td") && 0 !== _l.indexOf("<th") || (_e = "tr"), 0 === _l.indexOf("<tbody") && (_e = "table"), 0 === _l.indexOf("<option") && (_e = "select"), (_r = a.createElement(_e)).innerHTML = _l, i = 0; i < _r.childNodes.length; i += 1) {
            s.push(_r.childNodes[i]);
          }
        } else for (_n = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || a).querySelectorAll(e.trim()) : [a.getElementById(e.trim().split("#")[1])], i = 0; i < _n.length; i += 1) {
          _n[i] && s.push(_n[i]);
        }
      } else if (e.nodeType || e === n || e === a) s.push(e);else if (e.length > 0 && e[0].nodeType) for (i = 0; i < e.length; i += 1) {
        s.push(e[i]);
      }
      return new r(s);
    }

    function o(e) {
      var t = [];

      for (var _s3 = 0; _s3 < e.length; _s3 += 1) {
        -1 === t.indexOf(e[_s3]) && t.push(e[_s3]);
      }

      return t;
    }

    l.fn = r.prototype, l.Class = r, l.Dom7 = r;
    "resize scroll".split(" ");
    var d = {
      addClass: function addClass(e) {
        if (void 0 === e) return this;
        var t = e.split(" ");

        for (var _e2 = 0; _e2 < t.length; _e2 += 1) {
          for (var _s4 = 0; _s4 < this.length; _s4 += 1) {
            void 0 !== this[_s4] && void 0 !== this[_s4].classList && this[_s4].classList.add(t[_e2]);
          }
        }

        return this;
      },
      removeClass: function removeClass(e) {
        var t = e.split(" ");

        for (var _e3 = 0; _e3 < t.length; _e3 += 1) {
          for (var _s5 = 0; _s5 < this.length; _s5 += 1) {
            void 0 !== this[_s5] && void 0 !== this[_s5].classList && this[_s5].classList.remove(t[_e3]);
          }
        }

        return this;
      },
      hasClass: function hasClass(e) {
        return !!this[0] && this[0].classList.contains(e);
      },
      toggleClass: function toggleClass(e) {
        var t = e.split(" ");

        for (var _e4 = 0; _e4 < t.length; _e4 += 1) {
          for (var _s6 = 0; _s6 < this.length; _s6 += 1) {
            void 0 !== this[_s6] && void 0 !== this[_s6].classList && this[_s6].classList.toggle(t[_e4]);
          }
        }

        return this;
      },
      attr: function attr(e, t) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

        for (var _s7 = 0; _s7 < this.length; _s7 += 1) {
          if (2 === arguments.length) this[_s7].setAttribute(e, t);else for (var _t2 in e) {
            this[_s7][_t2] = e[_t2], this[_s7].setAttribute(_t2, e[_t2]);
          }
        }

        return this;
      },
      removeAttr: function removeAttr(e) {
        for (var _t3 = 0; _t3 < this.length; _t3 += 1) {
          this[_t3].removeAttribute(e);
        }

        return this;
      },
      data: function data(e, t) {
        var s;

        if (void 0 !== t) {
          for (var _i = 0; _i < this.length; _i += 1) {
            (s = this[_i]).dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), s.dom7ElementDataStorage[e] = t;
          }

          return this;
        }

        if (s = this[0]) {
          if (s.dom7ElementDataStorage && e in s.dom7ElementDataStorage) return s.dom7ElementDataStorage[e];

          var _t4 = s.getAttribute("data-".concat(e));

          return _t4 || void 0;
        }
      },
      transform: function transform(e) {
        for (var _t5 = 0; _t5 < this.length; _t5 += 1) {
          var _s8 = this[_t5].style;
          _s8.webkitTransform = e, _s8.transform = e;
        }

        return this;
      },
      transition: function transition(e) {
        "string" != typeof e && (e = "".concat(e, "ms"));

        for (var _t6 = 0; _t6 < this.length; _t6 += 1) {
          var _s9 = this[_t6].style;
          _s9.webkitTransitionDuration = e, _s9.transitionDuration = e;
        }

        return this;
      },
      on: function on() {
        var _e6, _e7;

        for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
          e[_key] = arguments[_key];
        }

        var t = e[0],
            s = e[1],
            i = e[2],
            a = e[3];

        function n(e) {
          var t = e.target;
          if (!t) return;
          var a = e.target.dom7EventData || [];
          if (a.indexOf(e) < 0 && a.unshift(e), l(t).is(s)) i.apply(t, a);else {
            var _e5 = l(t).parents();

            for (var _t7 = 0; _t7 < _e5.length; _t7 += 1) {
              l(_e5[_t7]).is(s) && i.apply(_e5[_t7], a);
            }
          }
        }

        function r(e) {
          var t = e && e.target && e.target.dom7EventData || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }

        "function" == typeof e[1] && ((_e6 = e, _e7 = _slicedToArray(_e6, 3), t = _e7[0], i = _e7[1], a = _e7[2], _e6), s = void 0), a || (a = !1);
        var o = t.split(" ");
        var d;

        for (var _e8 = 0; _e8 < this.length; _e8 += 1) {
          var _t8 = this[_e8];
          if (s) for (d = 0; d < o.length; d += 1) {
            var _e9 = o[d];
            _t8.dom7LiveListeners || (_t8.dom7LiveListeners = {}), _t8.dom7LiveListeners[_e9] || (_t8.dom7LiveListeners[_e9] = []), _t8.dom7LiveListeners[_e9].push({
              listener: i,
              proxyListener: n
            }), _t8.addEventListener(_e9, n, a);
          } else for (d = 0; d < o.length; d += 1) {
            var _e10 = o[d];
            _t8.dom7Listeners || (_t8.dom7Listeners = {}), _t8.dom7Listeners[_e10] || (_t8.dom7Listeners[_e10] = []), _t8.dom7Listeners[_e10].push({
              listener: i,
              proxyListener: r
            }), _t8.addEventListener(_e10, r, a);
          }
        }

        return this;
      },
      off: function off() {
        var _e11, _e12;

        for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          e[_key2] = arguments[_key2];
        }

        var t = e[0],
            s = e[1],
            i = e[2],
            a = e[3];
        "function" == typeof e[1] && ((_e11 = e, _e12 = _slicedToArray(_e11, 3), t = _e12[0], i = _e12[1], a = _e12[2], _e11), s = void 0), a || (a = !1);
        var n = t.split(" ");

        for (var _e13 = 0; _e13 < n.length; _e13 += 1) {
          var _t9 = n[_e13];

          for (var _e14 = 0; _e14 < this.length; _e14 += 1) {
            var _n2 = this[_e14];

            var _r2 = void 0;

            if (!s && _n2.dom7Listeners ? _r2 = _n2.dom7Listeners[_t9] : s && _n2.dom7LiveListeners && (_r2 = _n2.dom7LiveListeners[_t9]), _r2 && _r2.length) for (var _e15 = _r2.length - 1; _e15 >= 0; _e15 -= 1) {
              var _s10 = _r2[_e15];
              i && _s10.listener === i ? (_n2.removeEventListener(_t9, _s10.proxyListener, a), _r2.splice(_e15, 1)) : i && _s10.listener && _s10.listener.dom7proxy && _s10.listener.dom7proxy === i ? (_n2.removeEventListener(_t9, _s10.proxyListener, a), _r2.splice(_e15, 1)) : i || (_n2.removeEventListener(_t9, _s10.proxyListener, a), _r2.splice(_e15, 1));
            }
          }
        }

        return this;
      },
      trigger: function trigger() {
        for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          e[_key3] = arguments[_key3];
        }

        var t = e[0].split(" "),
            s = e[1];

        for (var _i2 = 0; _i2 < t.length; _i2 += 1) {
          var _r3 = t[_i2];

          for (var _t10 = 0; _t10 < this.length; _t10 += 1) {
            var _i3 = this[_t10];

            var _l2 = void 0;

            try {
              _l2 = new n.CustomEvent(_r3, {
                detail: s,
                bubbles: !0,
                cancelable: !0
              });
            } catch (e) {
              (_l2 = a.createEvent("Event")).initEvent(_r3, !0, !0), _l2.detail = s;
            }

            _i3.dom7EventData = e.filter(function (e, t) {
              return t > 0;
            }), _i3.dispatchEvent(_l2), _i3.dom7EventData = [], delete _i3.dom7EventData;
          }
        }

        return this;
      },
      transitionEnd: function transitionEnd(e) {
        var t = ["webkitTransitionEnd", "transitionend"],
            s = this;
        var i;

        function a(n) {
          if (n.target === this) for (e.call(this, n), i = 0; i < t.length; i += 1) {
            s.off(t[i], a);
          }
        }

        if (e) for (i = 0; i < t.length; i += 1) {
          s.on(t[i], a);
        }
        return this;
      },
      outerWidth: function outerWidth(e) {
        if (this.length > 0) {
          if (e) {
            var _e16 = this.styles();

            return this[0].offsetWidth + parseFloat(_e16.getPropertyValue("margin-right")) + parseFloat(_e16.getPropertyValue("margin-left"));
          }

          return this[0].offsetWidth;
        }

        return null;
      },
      outerHeight: function outerHeight(e) {
        if (this.length > 0) {
          if (e) {
            var _e17 = this.styles();

            return this[0].offsetHeight + parseFloat(_e17.getPropertyValue("margin-top")) + parseFloat(_e17.getPropertyValue("margin-bottom"));
          }

          return this[0].offsetHeight;
        }

        return null;
      },
      offset: function offset() {
        if (this.length > 0) {
          var _e18 = this[0],
              _t11 = _e18.getBoundingClientRect(),
              _s11 = a.body,
              _i4 = _e18.clientTop || _s11.clientTop || 0,
              _r4 = _e18.clientLeft || _s11.clientLeft || 0,
              _l3 = _e18 === n ? n.scrollY : _e18.scrollTop,
              _o = _e18 === n ? n.scrollX : _e18.scrollLeft;

          return {
            top: _t11.top + _l3 - _i4,
            left: _t11.left + _o - _r4
          };
        }

        return null;
      },
      css: function css(e, t) {
        var s;

        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (s = 0; s < this.length; s += 1) {
              for (var _t12 in e) {
                this[s].style[_t12] = e[_t12];
              }
            }

            return this;
          }

          if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }

        if (2 === arguments.length && "string" == typeof e) {
          for (s = 0; s < this.length; s += 1) {
            this[s].style[e] = t;
          }

          return this;
        }

        return this;
      },
      each: function each(e) {
        if (!e) return this;

        for (var _t13 = 0; _t13 < this.length; _t13 += 1) {
          if (!1 === e.call(this[_t13], _t13, this[_t13])) return this;
        }

        return this;
      },
      html: function html(e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;

        for (var _t14 = 0; _t14 < this.length; _t14 += 1) {
          this[_t14].innerHTML = e;
        }

        return this;
      },
      text: function text(e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

        for (var _t15 = 0; _t15 < this.length; _t15 += 1) {
          this[_t15].textContent = e;
        }

        return this;
      },
      is: function is(e) {
        var t = this[0];
        var s, i;
        if (!t || void 0 === e) return !1;

        if ("string" == typeof e) {
          if (t.matches) return t.matches(e);
          if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
          if (t.msMatchesSelector) return t.msMatchesSelector(e);

          for (s = l(e), i = 0; i < s.length; i += 1) {
            if (s[i] === t) return !0;
          }

          return !1;
        }

        if (e === a) return t === a;
        if (e === n) return t === n;

        if (e.nodeType || e instanceof r) {
          for (s = e.nodeType ? [e] : e, i = 0; i < s.length; i += 1) {
            if (s[i] === t) return !0;
          }

          return !1;
        }

        return !1;
      },
      index: function index() {
        var e,
            t = this[0];

        if (t) {
          for (e = 0; null !== (t = t.previousSibling);) {
            1 === t.nodeType && (e += 1);
          }

          return e;
        }
      },
      eq: function eq(e) {
        if (void 0 === e) return this;
        var t = this.length;
        var s;
        return new r(e > t - 1 ? [] : e < 0 ? (s = t + e) < 0 ? [] : [this[s]] : [this[e]]);
      },
      append: function append() {
        var t;

        for (var _s12 = 0; _s12 < arguments.length; _s12 += 1) {
          t = _s12 < 0 || arguments.length <= _s12 ? undefined : arguments[_s12];

          for (var _e19 = 0; _e19 < this.length; _e19 += 1) {
            if ("string" == typeof t) {
              var _s13 = a.createElement("div");

              for (_s13.innerHTML = t; _s13.firstChild;) {
                this[_e19].appendChild(_s13.firstChild);
              }
            } else if (t instanceof r) for (var _s14 = 0; _s14 < t.length; _s14 += 1) {
              this[_e19].appendChild(t[_s14]);
            } else this[_e19].appendChild(t);
          }
        }

        return this;
      },
      prepend: function prepend(e) {
        var t, s;

        for (t = 0; t < this.length; t += 1) {
          if ("string" == typeof e) {
            var _i5 = a.createElement("div");

            for (_i5.innerHTML = e, s = _i5.childNodes.length - 1; s >= 0; s -= 1) {
              this[t].insertBefore(_i5.childNodes[s], this[t].childNodes[0]);
            }
          } else if (e instanceof r) for (s = 0; s < e.length; s += 1) {
            this[t].insertBefore(e[s], this[t].childNodes[0]);
          } else this[t].insertBefore(e, this[t].childNodes[0]);
        }

        return this;
      },
      next: function next(e) {
        return this.length > 0 ? e ? this[0].nextElementSibling && l(this[0].nextElementSibling).is(e) ? new r([this[0].nextElementSibling]) : new r([]) : this[0].nextElementSibling ? new r([this[0].nextElementSibling]) : new r([]) : new r([]);
      },
      nextAll: function nextAll(e) {
        var t = [];
        var s = this[0];
        if (!s) return new r([]);

        for (; s.nextElementSibling;) {
          var _i6 = s.nextElementSibling;
          e ? l(_i6).is(e) && t.push(_i6) : t.push(_i6), s = _i6;
        }

        return new r(t);
      },
      prev: function prev(e) {
        if (this.length > 0) {
          var _t16 = this[0];
          return e ? _t16.previousElementSibling && l(_t16.previousElementSibling).is(e) ? new r([_t16.previousElementSibling]) : new r([]) : _t16.previousElementSibling ? new r([_t16.previousElementSibling]) : new r([]);
        }

        return new r([]);
      },
      prevAll: function prevAll(e) {
        var t = [];
        var s = this[0];
        if (!s) return new r([]);

        for (; s.previousElementSibling;) {
          var _i7 = s.previousElementSibling;
          e ? l(_i7).is(e) && t.push(_i7) : t.push(_i7), s = _i7;
        }

        return new r(t);
      },
      parent: function parent(e) {
        var t = [];

        for (var _s15 = 0; _s15 < this.length; _s15 += 1) {
          null !== this[_s15].parentNode && (e ? l(this[_s15].parentNode).is(e) && t.push(this[_s15].parentNode) : t.push(this[_s15].parentNode));
        }

        return l(o(t));
      },
      parents: function parents(e) {
        var t = [];

        for (var _s16 = 0; _s16 < this.length; _s16 += 1) {
          var _i8 = this[_s16].parentNode;

          for (; _i8;) {
            e ? l(_i8).is(e) && t.push(_i8) : t.push(_i8), _i8 = _i8.parentNode;
          }
        }

        return l(o(t));
      },
      closest: function closest(e) {
        var t = this;
        return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function find(e) {
        var t = [];

        for (var _s17 = 0; _s17 < this.length; _s17 += 1) {
          var _i9 = this[_s17].querySelectorAll(e);

          for (var _e20 = 0; _e20 < _i9.length; _e20 += 1) {
            t.push(_i9[_e20]);
          }
        }

        return new r(t);
      },
      children: function children(e) {
        var t = [];

        for (var _s18 = 0; _s18 < this.length; _s18 += 1) {
          var _i10 = this[_s18].childNodes;

          for (var _s19 = 0; _s19 < _i10.length; _s19 += 1) {
            e ? 1 === _i10[_s19].nodeType && l(_i10[_s19]).is(e) && t.push(_i10[_s19]) : 1 === _i10[_s19].nodeType && t.push(_i10[_s19]);
          }
        }

        return new r(o(t));
      },
      remove: function remove() {
        for (var _e21 = 0; _e21 < this.length; _e21 += 1) {
          this[_e21].parentNode && this[_e21].parentNode.removeChild(this[_e21]);
        }

        return this;
      },
      add: function add() {
        var t = this;
        var s, i;

        for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          e[_key4] = arguments[_key4];
        }

        for (s = 0; s < e.length; s += 1) {
          var _a = l(e[s]);

          for (i = 0; i < _a.length; i += 1) {
            t[t.length] = _a[i], t.length += 1;
          }
        }

        return t;
      },
      styles: function styles() {
        return this[0] ? n.getComputedStyle(this[0], null) : {};
      }
    };
    Object.keys(d).forEach(function (e) {
      l.fn[e] = d[e];
    });

    var c = {
      deleteProps: function deleteProps(e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (e) {}

          try {
            delete t[e];
          } catch (e) {}
        });
      },
      nextTick: function nextTick(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return setTimeout(e, t);
      },
      now: function now() {
        return Date.now();
      },
      getTranslate: function getTranslate(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "x";
        var s, i, a;
        var r = n.getComputedStyle(e, null);
        return n.WebKitCSSMatrix ? ((i = r.transform || r.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function (e) {
          return e.replace(",", ".");
        }).join(", ")), a = new n.WebKitCSSMatrix("none" === i ? "" : i)) : s = (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = n.WebKitCSSMatrix ? a.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === t && (i = n.WebKitCSSMatrix ? a.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), i || 0;
      },
      parseUrlQuery: function parseUrlQuery(e) {
        var t = {};
        var s,
            i,
            a,
            r,
            l = e || n.location.href;
        if ("string" == typeof l && l.length) for (r = (i = (l = l.indexOf("?") > -1 ? l.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
          return "" !== e;
        })).length, s = 0; s < r; s += 1) {
          a = i[s].replace(/#\S+/g, "").split("="), t[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
        }
        return t;
      },
      isObject: function isObject(e) {
        return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
      },
      extend: function extend() {
        var t = Object(arguments.length <= 0 ? undefined : arguments[0]);

        for (var _s20 = 1; _s20 < arguments.length; _s20 += 1) {
          var _i11 = _s20 < 0 || arguments.length <= _s20 ? undefined : arguments[_s20];

          if (null != _i11) {
            var _e22 = Object.keys(Object(_i11));

            for (var _s21 = 0, _a2 = _e22.length; _s21 < _a2; _s21 += 1) {
              var _a3 = _e22[_s21],
                  _n3 = Object.getOwnPropertyDescriptor(_i11, _a3);

              void 0 !== _n3 && _n3.enumerable && (c.isObject(t[_a3]) && c.isObject(_i11[_a3]) ? c.extend(t[_a3], _i11[_a3]) : !c.isObject(t[_a3]) && c.isObject(_i11[_a3]) ? (t[_a3] = {}, c.extend(t[_a3], _i11[_a3])) : t[_a3] = _i11[_a3]);
            }
          }
        }

        return t;
      }
    },
        p = function () {
      var e = a.createElement("div");
      return {
        touch: n.Modernizr && !0 === n.Modernizr.touch || !!(n.navigator.maxTouchPoints > 0 || "ontouchstart" in n || n.DocumentTouch && a instanceof n.DocumentTouch),
        pointerEvents: !!(n.navigator.pointerEnabled || n.PointerEvent || "maxTouchPoints" in n.navigator && n.navigator.maxTouchPoints > 0),
        prefixedPointerEvents: !!n.navigator.msPointerEnabled,
        transition: function () {
          var t = e.style;
          return "transition" in t || "webkitTransition" in t || "MozTransition" in t;
        }(),
        transforms3d: n.Modernizr && !0 === n.Modernizr.csstransforms3d || function () {
          var t = e.style;
          return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t;
        }(),
        flexbox: function () {
          var t = e.style,
              s = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" ");

          for (var _e23 = 0; _e23 < s.length; _e23 += 1) {
            if (s[_e23] in t) return !0;
          }

          return !1;
        }(),
        observer: "MutationObserver" in n || "WebkitMutationObserver" in n,
        passiveListener: function () {
          var e = !1;

          try {
            var _t17 = Object.defineProperty({}, "passive", {
              get: function get() {
                e = !0;
              }
            });

            n.addEventListener("testPassiveListener", null, _t17);
          } catch (e) {}

          return e;
        }(),
        gestures: "ongesturestart" in n
      };
    }(),
        h = function () {
      return {
        isIE: !!n.navigator.userAgent.match(/Trident/g) || !!n.navigator.userAgent.match(/MSIE/g),
        isEdge: !!n.navigator.userAgent.match(/Edge/g),
        isSafari: function () {
          var e = n.navigator.userAgent.toLowerCase();
          return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent)
      };
    }();

    var u =
    /*#__PURE__*/
    function () {
      function u() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, u);

        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
          t.on(e, t.params.on[e]);
        });
      }

      _createClass(u, [{
        key: "on",
        value: function on(e, t, s) {
          var i = this;
          if ("function" != typeof t) return i;
          var a = s ? "unshift" : "push";
          return e.split(" ").forEach(function (e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][a](t);
          }), i;
        }
      }, {
        key: "once",
        value: function once(e, t, s) {
          var i = this;
          if ("function" != typeof t) return i;

          function a() {
            for (var _len5 = arguments.length, s = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              s[_key5] = arguments[_key5];
            }

            t.apply(i, s), i.off(e, a), a.f7proxy && delete a.f7proxy;
          }

          return a.f7proxy = t, i.on(e, a, s);
        }
      }, {
        key: "off",
        value: function off(e, t) {
          var s = this;
          return s.eventsListeners ? (e.split(" ").forEach(function (e) {
            void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].length && s.eventsListeners[e].forEach(function (i, a) {
              (i === t || i.f7proxy && i.f7proxy === t) && s.eventsListeners[e].splice(a, 1);
            });
          }), s) : s;
        }
      }, {
        key: "emit",
        value: function emit() {
          var t = this;
          if (!t.eventsListeners) return t;
          var s, i, a;

          for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            e[_key6] = arguments[_key6];
          }

          return "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0], i = e.slice(1, e.length), a = t) : (s = e[0].events, i = e[0].data, a = e[0].context || t), (Array.isArray(s) ? s : s.split(" ")).forEach(function (e) {
            if (t.eventsListeners && t.eventsListeners[e]) {
              var _s22 = [];
              t.eventsListeners[e].forEach(function (e) {
                _s22.push(e);
              }), _s22.forEach(function (e) {
                e.apply(a, i);
              });
            }
          }), t;
        }
      }, {
        key: "useModulesParams",
        value: function useModulesParams(e) {
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (s) {
            var i = t.modules[s];
            i.params && c.extend(e, i.params);
          });
        }
      }, {
        key: "useModules",
        value: function useModules() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (s) {
            var i = t.modules[s],
                a = e[s] || {};
            i.instance && Object.keys(i.instance).forEach(function (e) {
              var s = i.instance[e];
              t[e] = "function" == typeof s ? s.bind(t) : s;
            }), i.on && t.on && Object.keys(i.on).forEach(function (e) {
              t.on(e, i.on[e]);
            }), i.create && i.create.bind(t)(a);
          });
        }
      }], [{
        key: "installModule",
        value: function installModule(e) {
          var s = this;
          s.prototype.modules || (s.prototype.modules = {});
          var i = e.name || "".concat(Object.keys(s.prototype.modules).length, "_").concat(c.now());

          for (var _len7 = arguments.length, t = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
            t[_key7 - 1] = arguments[_key7];
          }

          return s.prototype.modules[i] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
            s.prototype[t] = e.proto[t];
          }), e["static"] && Object.keys(e["static"]).forEach(function (t) {
            s[t] = e["static"][t];
          }), e.install && e.install.apply(s, t), s;
        }
      }, {
        key: "use",
        value: function use(e) {
          var s = this;

          for (var _len8 = arguments.length, t = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
            t[_key8 - 1] = arguments[_key8];
          }

          return Array.isArray(e) ? (e.forEach(function (e) {
            return s.installModule(e);
          }), s) : s.installModule.apply(s, [e].concat(t));
        }
      }, {
        key: "components",
        set: function set(e) {
          this.use && this.use(e);
        }
      }]);

      return u;
    }();

    var m = {
      updateSize: function updateSize() {
        var e = this;
        var t, s;
        var i = e.$el;
        t = void 0 !== e.params.width ? e.params.width : i[0].clientWidth, s = void 0 !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), s = s - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), c.extend(e, {
          width: t,
          height: s,
          size: e.isHorizontal() ? t : s
        }));
      },
      updateSlides: function updateSlides() {
        var e = this,
            t = e.params,
            s = e.$wrapperEl,
            i = e.size,
            a = e.rtlTranslate,
            r = e.wrongRTL,
            l = e.virtual && t.virtual.enabled,
            o = l ? e.virtual.slides.length : e.slides.length,
            d = s.children(".".concat(e.params.slideClass)),
            h = l ? e.virtual.slides.length : d.length;
        var u = [];
        var m = [],
            f = [];
        var g = t.slidesOffsetBefore;
        "function" == typeof g && (g = t.slidesOffsetBefore.call(e));
        var v = t.slidesOffsetAfter;
        "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
        var b = e.snapGrid.length,
            w = e.snapGrid.length;
        var y,
            x,
            E = t.spaceBetween,
            T = -g,
            S = 0,
            C = 0;
        if (void 0 === i) return;
        "string" == typeof E && E.indexOf("%") >= 0 && (E = parseFloat(E.replace("%", "")) / 100 * i), e.virtualSize = -E, a ? d.css({
          marginLeft: "",
          marginTop: ""
        }) : d.css({
          marginRight: "",
          marginBottom: ""
        }), t.slidesPerColumn > 1 && (y = Math.floor(h / t.slidesPerColumn) === h / e.params.slidesPerColumn ? h : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (y = Math.max(y, t.slidesPerView * t.slidesPerColumn)));
        var $ = t.slidesPerColumn,
            M = y / $,
            k = Math.floor(h / t.slidesPerColumn);

        for (var _s23 = 0; _s23 < h; _s23 += 1) {
          x = 0;

          var _a4 = d.eq(_s23);

          if (t.slidesPerColumn > 1) {
            var _i12 = void 0,
                _n4 = void 0,
                _r5 = void 0;

            "column" === t.slidesPerColumnFill ? (_r5 = _s23 - (_n4 = Math.floor(_s23 / $)) * $, (_n4 > k || _n4 === k && _r5 === $ - 1) && (_r5 += 1) >= $ && (_r5 = 0, _n4 += 1), _i12 = _n4 + _r5 * y / $, _a4.css({
              "-webkit-box-ordinal-group": _i12,
              "-moz-box-ordinal-group": _i12,
              "-ms-flex-order": _i12,
              "-webkit-order": _i12,
              order: _i12
            })) : _n4 = _s23 - (_r5 = Math.floor(_s23 / M)) * M, _a4.css("margin-".concat(e.isHorizontal() ? "top" : "left"), 0 !== _r5 && t.spaceBetween && "".concat(t.spaceBetween, "px")).attr("data-swiper-column", _n4).attr("data-swiper-row", _r5);
          }

          if ("none" !== _a4.css("display")) {
            if ("auto" === t.slidesPerView) {
              var _s24 = n.getComputedStyle(_a4[0], null),
                  _i13 = _a4[0].style.transform,
                  _r6 = _a4[0].style.webkitTransform;

              if (_i13 && (_a4[0].style.transform = "none"), _r6 && (_a4[0].style.webkitTransform = "none"), t.roundLengths) x = e.isHorizontal() ? _a4.outerWidth(!0) : _a4.outerHeight(!0);else if (e.isHorizontal()) {
                var _e24 = parseFloat(_s24.getPropertyValue("width")),
                    _t18 = parseFloat(_s24.getPropertyValue("padding-left")),
                    _i14 = parseFloat(_s24.getPropertyValue("padding-right")),
                    _a5 = parseFloat(_s24.getPropertyValue("margin-left")),
                    _n5 = parseFloat(_s24.getPropertyValue("margin-right")),
                    _r7 = _s24.getPropertyValue("box-sizing");

                x = _r7 && "border-box" === _r7 ? _e24 + _a5 + _n5 : _e24 + _t18 + _i14 + _a5 + _n5;
              } else {
                var _e25 = parseFloat(_s24.getPropertyValue("height")),
                    _t19 = parseFloat(_s24.getPropertyValue("padding-top")),
                    _i15 = parseFloat(_s24.getPropertyValue("padding-bottom")),
                    _a6 = parseFloat(_s24.getPropertyValue("margin-top")),
                    _n6 = parseFloat(_s24.getPropertyValue("margin-bottom")),
                    _r8 = _s24.getPropertyValue("box-sizing");

                x = _r8 && "border-box" === _r8 ? _e25 + _a6 + _n6 : _e25 + _t19 + _i15 + _a6 + _n6;
              }
              _i13 && (_a4[0].style.transform = _i13), _r6 && (_a4[0].style.webkitTransform = _r6), t.roundLengths && (x = Math.floor(x));
            } else x = (i - (t.slidesPerView - 1) * E) / t.slidesPerView, t.roundLengths && (x = Math.floor(x)), d[_s23] && (e.isHorizontal() ? d[_s23].style.width = "".concat(x, "px") : d[_s23].style.height = "".concat(x, "px"));

            d[_s23] && (d[_s23].swiperSlideSize = x), f.push(x), t.centeredSlides ? (T = T + x / 2 + S / 2 + E, 0 === S && 0 !== _s23 && (T = T - i / 2 - E), 0 === _s23 && (T = T - i / 2 - E), Math.abs(T) < .001 && (T = 0), t.roundLengths && (T = Math.floor(T)), C % t.slidesPerGroup == 0 && u.push(T), m.push(T)) : (t.roundLengths && (T = Math.floor(T)), C % t.slidesPerGroup == 0 && u.push(T), m.push(T), T = T + x + E), e.virtualSize += x + E, S = x, C += 1;
          }
        }

        var P;

        if (e.virtualSize = Math.max(e.virtualSize, i) + v, a && r && ("slide" === t.effect || "coverflow" === t.effect) && s.css({
          width: "".concat(e.virtualSize + t.spaceBetween, "px")
        }), p.flexbox && !t.setWrapperSize || (e.isHorizontal() ? s.css({
          width: "".concat(e.virtualSize + t.spaceBetween, "px")
        }) : s.css({
          height: "".concat(e.virtualSize + t.spaceBetween, "px")
        })), t.slidesPerColumn > 1 && (e.virtualSize = (x + t.spaceBetween) * y, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? s.css({
          width: "".concat(e.virtualSize + t.spaceBetween, "px")
        }) : s.css({
          height: "".concat(e.virtualSize + t.spaceBetween, "px")
        }), t.centeredSlides)) {
          P = [];

          for (var _s25 = 0; _s25 < u.length; _s25 += 1) {
            var _i16 = u[_s25];
            t.roundLengths && (_i16 = Math.floor(_i16)), u[_s25] < e.virtualSize + u[0] && P.push(_i16);
          }

          u = P;
        }

        if (!t.centeredSlides) {
          P = [];

          for (var _s26 = 0; _s26 < u.length; _s26 += 1) {
            var _a7 = u[_s26];
            t.roundLengths && (_a7 = Math.floor(_a7)), u[_s26] <= e.virtualSize - i && P.push(_a7);
          }

          u = P, Math.floor(e.virtualSize - i) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - i);
        }

        if (0 === u.length && (u = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? a ? d.css({
          marginLeft: "".concat(E, "px")
        }) : d.css({
          marginRight: "".concat(E, "px")
        }) : d.css({
          marginBottom: "".concat(E, "px")
        })), t.centerInsufficientSlides) {
          var _e26 = 0;

          if (f.forEach(function (s) {
            _e26 += s + (t.spaceBetween ? t.spaceBetween : 0);
          }), (_e26 -= t.spaceBetween) < i) {
            var _t20 = (i - _e26) / 2;

            u.forEach(function (e, s) {
              u[s] = e - _t20;
            }), m.forEach(function (e, s) {
              m[s] = e + _t20;
            });
          }
        }

        c.extend(e, {
          slides: d,
          snapGrid: u,
          slidesGrid: m,
          slidesSizesGrid: f
        }), h !== o && e.emit("slidesLengthChange"), u.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== w && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
      },
      updateAutoHeight: function updateAutoHeight(e) {
        var t = this,
            s = [];
        var i,
            a = 0;
        if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
          var _e27 = t.activeIndex + i;

          if (_e27 > t.slides.length) break;
          s.push(t.slides.eq(_e27)[0]);
        } else s.push(t.slides.eq(t.activeIndex)[0]);

        for (i = 0; i < s.length; i += 1) {
          if (void 0 !== s[i]) {
            var _e28 = s[i].offsetHeight;
            a = _e28 > a ? _e28 : a;
          }
        }

        a && t.$wrapperEl.css("height", "".concat(a, "px"));
      },
      updateSlidesOffset: function updateSlidesOffset() {
        var e = this,
            t = e.slides;

        for (var _s27 = 0; _s27 < t.length; _s27 += 1) {
          t[_s27].swiperSlideOffset = e.isHorizontal() ? t[_s27].offsetLeft : t[_s27].offsetTop;
        }
      },
      updateSlidesProgress: function updateSlidesProgress() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
        var t = this,
            s = t.params,
            i = t.slides,
            a = t.rtlTranslate;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        var n = -e;
        a && (n = e), i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

        for (var _e29 = 0; _e29 < i.length; _e29 += 1) {
          var _r9 = i[_e29],
              _l4 = (n + (s.centeredSlides ? t.minTranslate() : 0) - _r9.swiperSlideOffset) / (_r9.swiperSlideSize + s.spaceBetween);

          if (s.watchSlidesVisibility) {
            var _a8 = -(n - _r9.swiperSlideOffset),
                _l5 = _a8 + t.slidesSizesGrid[_e29];

            (_a8 >= 0 && _a8 < t.size || _l5 > 0 && _l5 <= t.size || _a8 <= 0 && _l5 >= t.size) && (t.visibleSlides.push(_r9), t.visibleSlidesIndexes.push(_e29), i.eq(_e29).addClass(s.slideVisibleClass));
          }

          _r9.progress = a ? -_l4 : _l4;
        }

        t.visibleSlides = l(t.visibleSlides);
      },
      updateProgress: function updateProgress() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
        var t = this,
            s = t.params,
            i = t.maxTranslate() - t.minTranslate();
        var a = t.progress,
            n = t.isBeginning,
            r = t.isEnd;
        var l = n,
            o = r;
        0 === i ? (a = 0, n = !0, r = !0) : (n = (a = (e - t.minTranslate()) / i) <= 0, r = a >= 1), c.extend(t, {
          progress: a,
          isBeginning: n,
          isEnd: r
        }), (s.watchSlidesProgress || s.watchSlidesVisibility) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), r && !o && t.emit("reachEnd toEdge"), (l && !n || o && !r) && t.emit("fromEdge"), t.emit("progress", a);
      },
      updateSlidesClasses: function updateSlidesClasses() {
        var e = this,
            t = e.slides,
            s = e.params,
            i = e.$wrapperEl,
            a = e.activeIndex,
            n = e.realIndex,
            r = e.virtual && s.virtual.enabled;
        var l;
        t.removeClass("".concat(s.slideActiveClass, " ").concat(s.slideNextClass, " ").concat(s.slidePrevClass, " ").concat(s.slideDuplicateActiveClass, " ").concat(s.slideDuplicateNextClass, " ").concat(s.slideDuplicatePrevClass)), (l = r ? e.$wrapperEl.find(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(a, "\"]")) : t.eq(a)).addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? i.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(n, "\"]")).addClass(s.slideDuplicateActiveClass) : i.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(n, "\"]")).addClass(s.slideDuplicateActiveClass));
        var o = l.nextAll(".".concat(s.slideClass)).eq(0).addClass(s.slideNextClass);
        s.loop && 0 === o.length && (o = t.eq(0)).addClass(s.slideNextClass);
        var d = l.prevAll(".".concat(s.slideClass)).eq(0).addClass(s.slidePrevClass);
        s.loop && 0 === d.length && (d = t.eq(-1)).addClass(s.slidePrevClass), s.loop && (o.hasClass(s.slideDuplicateClass) ? i.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass) : i.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? i.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass) : i.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass));
      },
      updateActiveIndex: function updateActiveIndex(e) {
        var t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            i = t.slidesGrid,
            a = t.snapGrid,
            n = t.params,
            r = t.activeIndex,
            l = t.realIndex,
            o = t.snapIndex;
        var d,
            p = e;

        if (void 0 === p) {
          for (var _e30 = 0; _e30 < i.length; _e30 += 1) {
            void 0 !== i[_e30 + 1] ? s >= i[_e30] && s < i[_e30 + 1] - (i[_e30 + 1] - i[_e30]) / 2 ? p = _e30 : s >= i[_e30] && s < i[_e30 + 1] && (p = _e30 + 1) : s >= i[_e30] && (p = _e30);
          }

          n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
        }

        if ((d = a.indexOf(s) >= 0 ? a.indexOf(s) : Math.floor(p / n.slidesPerGroup)) >= a.length && (d = a.length - 1), p === r) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
        var h = parseInt(t.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
        c.extend(t, {
          snapIndex: d,
          realIndex: h,
          previousIndex: r,
          activeIndex: p
        }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== h && t.emit("realIndexChange"), t.emit("slideChange");
      },
      updateClickedSlide: function updateClickedSlide(e) {
        var t = this,
            s = t.params,
            i = l(e.target).closest(".".concat(s.slideClass))[0];
        var a = !1;
        if (i) for (var _e31 = 0; _e31 < t.slides.length; _e31 += 1) {
          t.slides[_e31] === i && (a = !0);
        }
        if (!i || !a) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
        t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(l(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = l(i).index(), s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
      }
    };
    var f = {
      getTranslate: function getTranslate() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? "x" : "y";
        var t = this.params,
            s = this.rtlTranslate,
            i = this.translate,
            a = this.$wrapperEl;
        if (t.virtualTranslate) return s ? -i : i;
        var n = c.getTranslate(a[0], e);
        return s && (n = -n), n || 0;
      },
      setTranslate: function setTranslate(e, t) {
        var s = this,
            i = s.rtlTranslate,
            a = s.params,
            n = s.$wrapperEl,
            r = s.progress;
        var l,
            o = 0,
            d = 0;
        s.isHorizontal() ? o = i ? -e : e : d = e, a.roundLengths && (o = Math.floor(o), d = Math.floor(d)), a.virtualTranslate || (p.transforms3d ? n.transform("translate3d(".concat(o, "px, ").concat(d, "px, 0px)")) : n.transform("translate(".concat(o, "px, ").concat(d, "px)"))), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d;
        var c = s.maxTranslate() - s.minTranslate();
        (l = 0 === c ? 0 : (e - s.minTranslate()) / c) !== r && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function minTranslate() {
        return -this.snapGrid[0];
      },
      maxTranslate: function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
      }
    };
    var g = {
      setTransition: function setTransition(e, t) {
        this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var t = arguments.length > 1 ? arguments[1] : undefined;
        var s = this,
            i = s.activeIndex,
            a = s.params,
            n = s.previousIndex;
        a.autoHeight && s.updateAutoHeight();
        var r = t;

        if (r || (r = i > n ? "next" : i < n ? "prev" : "reset"), s.emit("transitionStart"), e && i !== n) {
          if ("reset" === r) return void s.emit("slideResetTransitionStart");
          s.emit("slideChangeTransitionStart"), "next" === r ? s.emit("slideNextTransitionStart") : s.emit("slidePrevTransitionStart");
        }
      },
      transitionEnd: function transitionEnd() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var t = arguments.length > 1 ? arguments[1] : undefined;
        var s = this,
            i = s.activeIndex,
            a = s.previousIndex;
        s.animating = !1, s.setTransition(0);
        var n = t;

        if (n || (n = i > a ? "next" : i < a ? "prev" : "reset"), s.emit("transitionEnd"), e && i !== a) {
          if ("reset" === n) return void s.emit("slideResetTransitionEnd");
          s.emit("slideChangeTransitionEnd"), "next" === n ? s.emit("slideNextTransitionEnd") : s.emit("slidePrevTransitionEnd");
        }
      }
    };
    var v = {
      slideTo: function slideTo() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        var i = arguments.length > 3 ? arguments[3] : undefined;
        var a = this;
        var n = e;
        n < 0 && (n = 0);
        var r = a.params,
            l = a.snapGrid,
            o = a.slidesGrid,
            d = a.previousIndex,
            c = a.activeIndex,
            h = a.rtlTranslate;
        if (a.animating && r.preventInteractionOnTransition) return !1;
        var u = Math.floor(n / r.slidesPerGroup);
        u >= l.length && (u = l.length - 1), (c || r.initialSlide || 0) === (d || 0) && s && a.emit("beforeSlideChangeStart");
        var m = -l[u];
        if (a.updateProgress(m), r.normalizeSlideIndex) for (var _e32 = 0; _e32 < o.length; _e32 += 1) {
          -Math.floor(100 * m) >= Math.floor(100 * o[_e32]) && (n = _e32);
        }

        if (a.initialized && n !== c) {
          if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
          if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (c || 0) !== n) return !1;
        }

        var f;
        return f = n > c ? "next" : n < c ? "prev" : "reset", h && -m === a.translate || !h && m === a.translate ? (a.updateActiveIndex(n), r.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== r.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(s, f), a.transitionEnd(s, f)), !1) : (0 !== t && p.transition ? (a.setTransition(t), a.setTranslate(m), a.updateActiveIndex(n), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, f), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
          a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(s, f));
        }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))) : (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(n), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, f), a.transitionEnd(s, f)), !0);
      },
      slideToLoop: function slideToLoop() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        var i = arguments.length > 3 ? arguments[3] : undefined;
        var a = this;
        var n = e;
        return a.params.loop && (n += a.loopedSlides), a.slideTo(n, t, s, i);
      },
      slideNext: function slideNext() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = arguments.length > 2 ? arguments[2] : undefined;
        var i = this,
            a = i.params,
            n = i.animating;
        return a.loop ? !n && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + a.slidesPerGroup, e, t, s)) : i.slideTo(i.activeIndex + a.slidesPerGroup, e, t, s);
      },
      slidePrev: function slidePrev() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = arguments.length > 2 ? arguments[2] : undefined;
        var i = this,
            a = i.params,
            n = i.animating,
            r = i.snapGrid,
            l = i.slidesGrid,
            o = i.rtlTranslate;

        if (a.loop) {
          if (n) return !1;
          i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
        }

        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }

        var c = d(o ? i.translate : -i.translate),
            p = r.map(function (e) {
          return d(e);
        }),
            h = (l.map(function (e) {
          return d(e);
        }), r[p.indexOf(c)], r[p.indexOf(c) - 1]);
        var u;
        return void 0 !== h && (u = l.indexOf(h)) < 0 && (u = i.activeIndex - 1), i.slideTo(u, e, t, s);
      },
      slideReset: function slideReset() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = arguments.length > 2 ? arguments[2] : undefined;
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function slideToClosest() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = arguments.length > 2 ? arguments[2] : undefined;
        var i = this;
        var a = i.activeIndex;
        var n = Math.floor(a / i.params.slidesPerGroup);

        if (n < i.snapGrid.length - 1) {
          var _e33 = i.rtlTranslate ? i.translate : -i.translate,
              _t21 = i.snapGrid[n];

          _e33 - _t21 > (i.snapGrid[n + 1] - _t21) / 2 && (a = i.params.slidesPerGroup);
        }

        return i.slideTo(a, e, t, s);
      },
      slideToClickedSlide: function slideToClickedSlide() {
        var e = this,
            t = e.params,
            s = e.$wrapperEl,
            i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
        var a,
            n = e.clickedIndex;

        if (t.loop) {
          if (e.animating) return;
          a = parseInt(l(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(a, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), c.nextTick(function () {
            e.slideTo(n);
          })) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(a, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), c.nextTick(function () {
            e.slideTo(n);
          })) : e.slideTo(n);
        } else e.slideTo(n);
      }
    };
    var b = {
      loopCreate: function loopCreate() {
        var e = this,
            t = e.params,
            s = e.$wrapperEl;
        s.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass)).remove();
        var i = s.children(".".concat(t.slideClass));

        if (t.loopFillGroupWithBlank) {
          var _e34 = t.slidesPerGroup - i.length % t.slidesPerGroup;

          if (_e34 !== t.slidesPerGroup) {
            for (var _i17 = 0; _i17 < _e34; _i17 += 1) {
              var _e35 = l(a.createElement("div")).addClass("".concat(t.slideClass, " ").concat(t.slideBlankClass));

              s.append(_e35);
            }

            i = s.children(".".concat(t.slideClass));
          }
        }

        "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = i.length), e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > i.length && (e.loopedSlides = i.length);
        var n = [],
            r = [];
        i.each(function (t, s) {
          var a = l(s);
          t < e.loopedSlides && r.push(s), t < i.length && t >= i.length - e.loopedSlides && n.push(s), a.attr("data-swiper-slide-index", t);
        });

        for (var _e36 = 0; _e36 < r.length; _e36 += 1) {
          s.append(l(r[_e36].cloneNode(!0)).addClass(t.slideDuplicateClass));
        }

        for (var _e37 = n.length - 1; _e37 >= 0; _e37 -= 1) {
          s.prepend(l(n[_e37].cloneNode(!0)).addClass(t.slideDuplicateClass));
        }
      },
      loopFix: function loopFix() {
        var e = this,
            t = e.params,
            s = e.activeIndex,
            i = e.slides,
            a = e.loopedSlides,
            n = e.allowSlidePrev,
            r = e.allowSlideNext,
            l = e.snapGrid,
            o = e.rtlTranslate;
        var d;
        e.allowSlidePrev = !0, e.allowSlideNext = !0;
        var c = -l[s] - e.getTranslate();
        s < a ? (d = i.length - 3 * a + s, d += a, e.slideTo(d, 0, !1, !0) && 0 !== c && e.setTranslate((o ? -e.translate : e.translate) - c)) : ("auto" === t.slidesPerView && s >= 2 * a || s >= i.length - a) && (d = -i.length + s + a, d += a, e.slideTo(d, 0, !1, !0) && 0 !== c && e.setTranslate((o ? -e.translate : e.translate) - c));
        e.allowSlidePrev = n, e.allowSlideNext = r;
      },
      loopDestroy: function loopDestroy() {
        var e = this.$wrapperEl,
            t = this.params,
            s = this.slides;
        e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), s.removeAttr("data-swiper-slide-index");
      }
    };
    var w = {
      setGrabCursor: function setGrabCursor(e) {
        if (p.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked) return;
        var t = this.el;
        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
      },
      unsetGrabCursor: function unsetGrabCursor() {
        p.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "");
      }
    };
    var y = {
      appendSlide: function appendSlide(e) {
        var t = this,
            s = t.$wrapperEl,
            i = t.params;
        if (i.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var _t22 = 0; _t22 < e.length; _t22 += 1) {
          e[_t22] && s.append(e[_t22]);
        } else s.append(e);
        i.loop && t.loopCreate(), i.observer && p.observer || t.update();
      },
      prependSlide: function prependSlide(e) {
        var t = this,
            s = t.params,
            i = t.$wrapperEl,
            a = t.activeIndex;
        s.loop && t.loopDestroy();
        var n = a + 1;

        if ("object" == _typeof(e) && "length" in e) {
          for (var _t23 = 0; _t23 < e.length; _t23 += 1) {
            e[_t23] && i.prepend(e[_t23]);
          }

          n = a + e.length;
        } else i.prepend(e);

        s.loop && t.loopCreate(), s.observer && p.observer || t.update(), t.slideTo(n, 0, !1);
      },
      addSlide: function addSlide(e, t) {
        var s = this,
            i = s.$wrapperEl,
            a = s.params,
            n = s.activeIndex;
        var r = n;
        a.loop && (r -= s.loopedSlides, s.loopDestroy(), s.slides = i.children(".".concat(a.slideClass)));
        var l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        var o = r > e ? r + 1 : r;
        var d = [];

        for (var _t24 = l - 1; _t24 >= e; _t24 -= 1) {
          var _e38 = s.slides.eq(_t24);

          _e38.remove(), d.unshift(_e38);
        }

        if ("object" == _typeof(t) && "length" in t) {
          for (var _e39 = 0; _e39 < t.length; _e39 += 1) {
            t[_e39] && i.append(t[_e39]);
          }

          o = r > e ? r + t.length : r;
        } else i.append(t);

        for (var _e40 = 0; _e40 < d.length; _e40 += 1) {
          i.append(d[_e40]);
        }

        a.loop && s.loopCreate(), a.observer && p.observer || s.update(), a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
      },
      removeSlide: function removeSlide(e) {
        var t = this,
            s = t.params,
            i = t.$wrapperEl,
            a = t.activeIndex;
        var n = a;
        s.loop && (n -= t.loopedSlides, t.loopDestroy(), t.slides = i.children(".".concat(s.slideClass)));
        var r,
            l = n;

        if ("object" == _typeof(e) && "length" in e) {
          for (var _s28 = 0; _s28 < e.length; _s28 += 1) {
            r = e[_s28], t.slides[r] && t.slides.eq(r).remove(), r < l && (l -= 1);
          }

          l = Math.max(l, 0);
        } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < l && (l -= 1), l = Math.max(l, 0);

        s.loop && t.loopCreate(), s.observer && p.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
      },
      removeAllSlides: function removeAllSlides() {
        var e = this,
            t = [];

        for (var _s29 = 0; _s29 < e.slides.length; _s29 += 1) {
          t.push(_s29);
        }

        e.removeSlide(t);
      }
    };

    var x = function () {
      var e = n.navigator.userAgent,
          t = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        windows: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        cordova: n.cordova || n.phonegap,
        phonegap: n.cordova || n.phonegap
      },
          s = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
          i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
          r = e.match(/(iPad).*OS\s([\d_]+)/),
          l = e.match(/(iPod)(.*OS\s([\d_]+))?/),
          o = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);

      if (s && (t.os = "windows", t.osVersion = s[2], t.windows = !0), i && !s && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || o || l) && (t.os = "ios", t.ios = !0), o && !l && (t.osVersion = o[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), l && (t.osVersion = l[3] ? l[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (o || r || l) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
        var _e41 = t.osVersion.split("."),
            _s30 = a.querySelector('meta[name="viewport"]');

        t.minimalUi = !t.webView && (l || o) && (1 * _e41[0] == 7 ? 1 * _e41[1] >= 1 : 1 * _e41[0] > 7) && _s30 && _s30.getAttribute("content").indexOf("minimal-ui") >= 0;
      }

      return t.pixelRatio = n.devicePixelRatio || 1, t;
    }();

    function E() {
      var e = this,
          t = e.params,
          s = e.el;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
          a = e.allowSlidePrev,
          n = e.snapGrid;

      if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
        var _s31 = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());

        e.setTranslate(_s31), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
      } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);

      e.allowSlidePrev = a, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
    }

    var T = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsInverse: !1,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0
    };
    var S = {
      update: m,
      translate: f,
      transition: g,
      slide: v,
      loop: b,
      grabCursor: w,
      manipulation: y,
      events: {
        attachEvents: function attachEvents() {
          var e = this,
              t = e.params,
              s = e.touchEvents,
              i = e.el,
              r = e.wrapperEl;
          e.onTouchStart = function (e) {
            var t = this,
                s = t.touchEventsData,
                i = t.params,
                r = t.touches;
            if (t.animating && i.preventInteractionOnTransition) return;
            var o = e;
            if (o.originalEvent && (o = o.originalEvent), s.isTouchEvent = "touchstart" === o.type, !s.isTouchEvent && "which" in o && 3 === o.which) return;
            if (!s.isTouchEvent && "button" in o && o.button > 0) return;
            if (s.isTouched && s.isMoved) return;
            if (i.noSwiping && l(o.target).closest(i.noSwipingSelector ? i.noSwipingSelector : ".".concat(i.noSwipingClass))[0]) return void (t.allowClick = !0);
            if (i.swipeHandler && !l(o).closest(i.swipeHandler)[0]) return;
            r.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, r.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
            var d = r.currentX,
                p = r.currentY,
                h = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                u = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;

            if (!h || !(d <= u || d >= n.screen.width - u)) {
              if (c.extend(s, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
              }), r.startX = d, r.startY = p, s.touchStartTime = c.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, i.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
                var _e42 = !0;

                l(o.target).is(s.formElements) && (_e42 = !1), a.activeElement && l(a.activeElement).is(s.formElements) && a.activeElement !== o.target && a.activeElement.blur();

                var _n7 = _e42 && t.allowTouchMove && i.touchStartPreventDefault;

                (i.touchStartForcePreventDefault || _n7) && o.preventDefault();
              }

              t.emit("touchStart", o);
            }
          }.bind(e), e.onTouchMove = function (e) {
            var t = this,
                s = t.touchEventsData,
                i = t.params,
                n = t.touches,
                r = t.rtlTranslate;
            var o = e;
            if (o.originalEvent && (o = o.originalEvent), !s.isTouched) return void (s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", o));
            if (s.isTouchEvent && "mousemove" === o.type) return;
            var d = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                p = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
            if (o.preventedByNestedSwiper) return n.startX = d, void (n.startY = p);
            if (!t.allowTouchMove) return t.allowClick = !1, void (s.isTouched && (c.extend(n, {
              startX: d,
              startY: p,
              currentX: d,
              currentY: p
            }), s.touchStartTime = c.now()));
            if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop) if (t.isVertical()) {
              if (p < n.startY && t.translate <= t.maxTranslate() || p > n.startY && t.translate >= t.minTranslate()) return s.isTouched = !1, void (s.isMoved = !1);
            } else if (d < n.startX && t.translate <= t.maxTranslate() || d > n.startX && t.translate >= t.minTranslate()) return;
            if (s.isTouchEvent && a.activeElement && o.target === a.activeElement && l(o.target).is(s.formElements)) return s.isMoved = !0, void (t.allowClick = !1);
            if (s.allowTouchCallbacks && t.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
            n.currentX = d, n.currentY = p;
            var h = n.currentX - n.startX,
                u = n.currentY - n.startY;
            if (t.params.threshold && Math.sqrt(Math.pow(h, 2) + Math.pow(u, 2)) < t.params.threshold) return;

            if (void 0 === s.isScrolling) {
              var _e43;

              t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : h * h + u * u >= 25 && (_e43 = 180 * Math.atan2(Math.abs(u), Math.abs(h)) / Math.PI, s.isScrolling = t.isHorizontal() ? _e43 > i.touchAngle : 90 - _e43 > i.touchAngle);
            }

            if (s.isScrolling && t.emit("touchMoveOpposite", o), void 0 === s.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (s.startMoving = !0)), s.isScrolling) return void (s.isTouched = !1);
            if (!s.startMoving) return;
            t.allowClick = !1, o.preventDefault(), i.touchMoveStopPropagation && !i.nested && o.stopPropagation(), s.isMoved || (i.loop && t.loopFix(), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", o)), t.emit("sliderMove", o), s.isMoved = !0;
            var m = t.isHorizontal() ? h : u;
            n.diff = m, m *= i.touchRatio, r && (m = -m), t.swipeDirection = m > 0 ? "prev" : "next", s.currentTranslate = m + s.startTranslate;
            var f = !0,
                g = i.resistanceRatio;

            if (i.touchReleaseOnEdges && (g = 0), m > 0 && s.currentTranslate > t.minTranslate() ? (f = !1, i.resistance && (s.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + s.startTranslate + m, g))) : m < 0 && s.currentTranslate < t.maxTranslate() && (f = !1, i.resistance && (s.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - s.startTranslate - m, g))), f && (o.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.threshold > 0) {
              if (!(Math.abs(m) > i.threshold || s.allowThresholdMove)) return void (s.currentTranslate = s.startTranslate);
              if (!s.allowThresholdMove) return s.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, s.currentTranslate = s.startTranslate, void (n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
            }

            i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === s.velocities.length && s.velocities.push({
              position: n[t.isHorizontal() ? "startX" : "startY"],
              time: s.touchStartTime
            }), s.velocities.push({
              position: n[t.isHorizontal() ? "currentX" : "currentY"],
              time: c.now()
            })), t.updateProgress(s.currentTranslate), t.setTranslate(s.currentTranslate));
          }.bind(e), e.onTouchEnd = function (e) {
            var t = this,
                s = t.touchEventsData,
                i = t.params,
                a = t.touches,
                n = t.rtlTranslate,
                r = t.$wrapperEl,
                l = t.slidesGrid,
                o = t.snapGrid;
            var d = e;
            if (d.originalEvent && (d = d.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", d), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
            i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            var p = c.now(),
                h = p - s.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), h < 300 && p - s.lastClickTime > 300 && (s.clickTimeout && clearTimeout(s.clickTimeout), s.clickTimeout = c.nextTick(function () {
              t && !t.destroyed && t.emit("click", d);
            }, 300)), h < 300 && p - s.lastClickTime < 300 && (s.clickTimeout && clearTimeout(s.clickTimeout), t.emit("doubleTap", d))), s.lastClickTime = c.now(), c.nextTick(function () {
              t.destroyed || (t.allowClick = !0);
            }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === a.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
            var u;

            if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, u = i.followFinger ? n ? t.translate : -t.translate : -s.currentTranslate, i.freeMode) {
              if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
              if (u > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));

              if (i.freeModeMomentum) {
                if (s.velocities.length > 1) {
                  var _e45 = s.velocities.pop(),
                      _a10 = s.velocities.pop(),
                      _n8 = _e45.position - _a10.position,
                      _r10 = _e45.time - _a10.time;

                  t.velocity = _n8 / _r10, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (_r10 > 150 || c.now() - _e45.time > 300) && (t.velocity = 0);
                } else t.velocity = 0;

                t.velocity *= i.freeModeMomentumVelocityRatio, s.velocities.length = 0;

                var _e44 = 1e3 * i.freeModeMomentumRatio;

                var _a9 = t.velocity * _e44;

                var _l6 = t.translate + _a9;

                n && (_l6 = -_l6);

                var _d2,
                    _p = !1;

                var _h = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;

                var _u;

                if (_l6 < t.maxTranslate()) i.freeModeMomentumBounce ? (_l6 + t.maxTranslate() < -_h && (_l6 = t.maxTranslate() - _h), _d2 = t.maxTranslate(), _p = !0, s.allowMomentumBounce = !0) : _l6 = t.maxTranslate(), i.loop && i.centeredSlides && (_u = !0);else if (_l6 > t.minTranslate()) i.freeModeMomentumBounce ? (_l6 - t.minTranslate() > _h && (_l6 = t.minTranslate() + _h), _d2 = t.minTranslate(), _p = !0, s.allowMomentumBounce = !0) : _l6 = t.minTranslate(), i.loop && i.centeredSlides && (_u = !0);else if (i.freeModeSticky) {
                  var _e46;

                  for (var _t25 = 0; _t25 < o.length; _t25 += 1) {
                    if (o[_t25] > -_l6) {
                      _e46 = _t25;
                      break;
                    }
                  }

                  _l6 = -(_l6 = Math.abs(o[_e46] - _l6) < Math.abs(o[_e46 - 1] - _l6) || "next" === t.swipeDirection ? o[_e46] : o[_e46 - 1]);
                }
                if (_u && t.once("transitionEnd", function () {
                  t.loopFix();
                }), 0 !== t.velocity) _e44 = n ? Math.abs((-_l6 - t.translate) / t.velocity) : Math.abs((_l6 - t.translate) / t.velocity);else if (i.freeModeSticky) return void t.slideToClosest();
                i.freeModeMomentumBounce && _p ? (t.updateProgress(_d2), t.setTransition(_e44), t.setTranslate(_l6), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(function () {
                  t && !t.destroyed && s.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(_d2), r.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  }));
                })) : t.velocity ? (t.updateProgress(_l6), t.setTransition(_e44), t.setTranslate(_l6), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                }))) : t.updateProgress(_l6), t.updateActiveIndex(), t.updateSlidesClasses();
              } else if (i.freeModeSticky) return void t.slideToClosest();

              return void ((!i.freeModeMomentum || h >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()));
            }

            var m = 0,
                f = t.slidesSizesGrid[0];

            for (var _e47 = 0; _e47 < l.length; _e47 += i.slidesPerGroup) {
              void 0 !== l[_e47 + i.slidesPerGroup] ? u >= l[_e47] && u < l[_e47 + i.slidesPerGroup] && (m = _e47, f = l[_e47 + i.slidesPerGroup] - l[_e47]) : u >= l[_e47] && (m = _e47, f = l[l.length - 1] - l[l.length - 2]);
            }

            var g = (u - l[m]) / f;

            if (h > i.longSwipesMs) {
              if (!i.longSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(m + i.slidesPerGroup) : t.slideTo(m)), "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(m + i.slidesPerGroup) : t.slideTo(m));
            } else {
              if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection && t.slideTo(m + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(m);
            }
          }.bind(e), e.onClick = function (e) {
            var t = this;
            t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
          }.bind(e);
          var o = "container" === t.touchEventsTarget ? i : r,
              d = !!t.nested;

          if (p.touch || !p.pointerEvents && !p.prefixedPointerEvents) {
            if (p.touch) {
              var _i18 = !("touchstart" !== s.start || !p.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };

              o.addEventListener(s.start, e.onTouchStart, _i18), o.addEventListener(s.move, e.onTouchMove, p.passiveListener ? {
                passive: !1,
                capture: d
              } : d), o.addEventListener(s.end, e.onTouchEnd, _i18);
            }

            (t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !p.touch && x.ios) && (o.addEventListener("mousedown", e.onTouchStart, !1), a.addEventListener("mousemove", e.onTouchMove, d), a.addEventListener("mouseup", e.onTouchEnd, !1));
          } else o.addEventListener(s.start, e.onTouchStart, !1), a.addEventListener(s.move, e.onTouchMove, d), a.addEventListener(s.end, e.onTouchEnd, !1);

          (t.preventClicks || t.preventClicksPropagation) && o.addEventListener("click", e.onClick, !0), e.on(x.ios || x.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", E, !0);
        },
        detachEvents: function detachEvents() {
          var e = this,
              t = e.params,
              s = e.touchEvents,
              i = e.el,
              n = e.wrapperEl,
              r = "container" === t.touchEventsTarget ? i : n,
              l = !!t.nested;

          if (p.touch || !p.pointerEvents && !p.prefixedPointerEvents) {
            if (p.touch) {
              var _i19 = !("onTouchStart" !== s.start || !p.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };

              r.removeEventListener(s.start, e.onTouchStart, _i19), r.removeEventListener(s.move, e.onTouchMove, l), r.removeEventListener(s.end, e.onTouchEnd, _i19);
            }

            (t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !p.touch && x.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), a.removeEventListener("mousemove", e.onTouchMove, l), a.removeEventListener("mouseup", e.onTouchEnd, !1));
          } else r.removeEventListener(s.start, e.onTouchStart, !1), a.removeEventListener(s.move, e.onTouchMove, l), a.removeEventListener(s.end, e.onTouchEnd, !1);

          (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(x.ios || x.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", E);
        }
      },
      breakpoints: {
        setBreakpoint: function setBreakpoint() {
          var e = this,
              t = e.activeIndex,
              s = e.initialized,
              _e$loopedSlides = e.loopedSlides,
              i = _e$loopedSlides === void 0 ? 0 : _e$loopedSlides,
              a = e.params,
              n = a.breakpoints;
          if (!n || n && 0 === Object.keys(n).length) return;
          var r = e.getBreakpoint(n);

          if (r && e.currentBreakpoint !== r) {
            var _l7 = r in n ? n[r] : void 0;

            _l7 && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
              var t = _l7[e];
              void 0 !== t && (_l7[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
            });

            var _o2 = _l7 || e.originalParams,
                _d3 = _o2.direction && _o2.direction !== a.direction,
                _p2 = a.loop && (_o2.slidesPerView !== a.slidesPerView || _d3);

            _d3 && s && e.changeDirection(), c.extend(e.params, _o2), c.extend(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev
            }), e.currentBreakpoint = r, _p2 && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", _o2);
          }
        },
        getBreakpoint: function getBreakpoint(e) {
          var t = this;
          if (!e) return;
          var s = !1;
          var i = [];
          Object.keys(e).forEach(function (e) {
            i.push(e);
          }), i.sort(function (e, t) {
            return parseInt(e, 10) - parseInt(t, 10);
          });

          for (var _e48 = 0; _e48 < i.length; _e48 += 1) {
            var _a11 = i[_e48];
            t.params.breakpointsInverse ? _a11 <= n.innerWidth && (s = _a11) : _a11 >= n.innerWidth && !s && (s = _a11);
          }

          return s || "max";
        }
      },
      checkOverflow: {
        checkOverflow: function checkOverflow() {
          var e = this,
              t = e.isLocked;
          e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update());
        }
      },
      classes: {
        addClasses: function addClasses() {
          var e = this.classNames,
              t = this.params,
              s = this.rtl,
              i = this.$el,
              a = [];
          a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), p.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), s && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), x.android && a.push("android"), x.ios && a.push("ios"), (h.isIE || h.isEdge) && (p.pointerEvents || p.prefixedPointerEvents) && a.push("wp8-".concat(t.direction)), a.forEach(function (s) {
            e.push(t.containerModifierClass + s);
          }), i.addClass(e.join(" "));
        },
        removeClasses: function removeClasses() {
          var e = this.$el,
              t = this.classNames;
          e.removeClass(t.join(" "));
        }
      },
      images: {
        loadImage: function loadImage(e, t, s, i, a, r) {
          var l;

          function o() {
            r && r();
          }

          e.complete && a ? o() : t ? ((l = new n.Image()).onload = o, l.onerror = o, i && (l.sizes = i), s && (l.srcset = s), t && (l.src = t)) : o();
        },
        preloadImages: function preloadImages() {
          var e = this;

          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
          }

          e.imagesToLoad = e.$el.find("img");

          for (var _s32 = 0; _s32 < e.imagesToLoad.length; _s32 += 1) {
            var _i20 = e.imagesToLoad[_s32];
            e.loadImage(_i20, _i20.currentSrc || _i20.getAttribute("src"), _i20.srcset || _i20.getAttribute("srcset"), _i20.sizes || _i20.getAttribute("sizes"), !0, t);
          }
        }
      }
    },
        C = {};

    var $ =
    /*#__PURE__*/
    function (_u2) {
      _inherits($, _u2);

      function $() {
        var _e49, _e50;

        var _this5;

        _classCallCheck(this, $);

        var t, s;

        for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          e[_key9] = arguments[_key9];
        }

        1 === e.length && e[0].constructor && e[0].constructor === Object ? s = e[0] : (_e49 = e, _e50 = _slicedToArray(_e49, 2), t = _e50[0], s = _e50[1], _e49), s || (s = {}), s = c.extend({}, s), t && !s.el && (s.el = t), _this5 = _possibleConstructorReturn(this, _getPrototypeOf($).call(this, s)), Object.keys(S).forEach(function (e) {
          Object.keys(S[e]).forEach(function (t) {
            $.prototype[t] || ($.prototype[t] = S[e][t]);
          });
        });

        var i = _assertThisInitialized(_this5);

        void 0 === i.modules && (i.modules = {}), Object.keys(i.modules).forEach(function (e) {
          var t = i.modules[e];

          if (t.params) {
            var _e51 = Object.keys(t.params)[0],
                _i21 = t.params[_e51];
            if ("object" != _typeof(_i21) || null === _i21) return;
            if (!(_e51 in s && "enabled" in _i21)) return;
            !0 === s[_e51] && (s[_e51] = {
              enabled: !0
            }), "object" != _typeof(s[_e51]) || "enabled" in s[_e51] || (s[_e51].enabled = !0), s[_e51] || (s[_e51] = {
              enabled: !1
            });
          }
        });
        var a = c.extend({}, T);
        i.useModulesParams(a), i.params = c.extend({}, a, C, s), i.originalParams = c.extend({}, i.params), i.passedParams = c.extend({}, s), i.$ = l;
        var n = l(i.params.el);
        if (!(t = n[0])) return _possibleConstructorReturn(_this5);

        if (n.length > 1) {
          var _e52 = [];
          return _possibleConstructorReturn(_this5, (n.each(function (t, i) {
            var a = c.extend({}, s, {
              el: i
            });

            _e52.push(new $(a));
          }), _e52));
        }

        t.swiper = i, n.data("swiper", i);
        var r = n.children(".".concat(i.params.wrapperClass));
        return _possibleConstructorReturn(_this5, (c.extend(i, {
          $el: n,
          el: t,
          $wrapperEl: r,
          wrapperEl: r[0],
          classNames: [],
          slides: l(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function isHorizontal() {
            return "horizontal" === i.params.direction;
          },
          isVertical: function isVertical() {
            return "vertical" === i.params.direction;
          },
          rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
          rtlTranslate: "horizontal" === i.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
          wrongRTL: "-webkit-box" === r.css("display"),
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: i.params.allowSlideNext,
          allowSlidePrev: i.params.allowSlidePrev,
          touchEvents: function () {
            var e = ["touchstart", "touchmove", "touchend"];
            var t = ["mousedown", "mousemove", "mouseup"];
            return p.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : p.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), i.touchEventsTouch = {
              start: e[0],
              move: e[1],
              end: e[2]
            }, i.touchEventsDesktop = {
              start: t[0],
              move: t[1],
              end: t[2]
            }, p.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop;
          }(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            formElements: "input, select, option, textarea, button, video",
            lastClickTime: c.now(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: i.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), i.useModules(), i.params.init && i.init(), i));
      }

      _createClass($, [{
        key: "slidesPerViewDynamic",
        value: function slidesPerViewDynamic() {
          var e = this.params,
              t = this.slides,
              s = this.slidesGrid,
              i = this.size,
              a = this.activeIndex;
          var n = 1;

          if (e.centeredSlides) {
            var _e53,
                _s33 = t[a].swiperSlideSize;

            for (var _r11 = a + 1; _r11 < t.length; _r11 += 1) {
              t[_r11] && !_e53 && (n += 1, (_s33 += t[_r11].swiperSlideSize) > i && (_e53 = !0));
            }

            for (var _r12 = a - 1; _r12 >= 0; _r12 -= 1) {
              t[_r12] && !_e53 && (n += 1, (_s33 += t[_r12].swiperSlideSize) > i && (_e53 = !0));
            }
          } else for (var _e54 = a + 1; _e54 < t.length; _e54 += 1) {
            s[_e54] - s[a] < i && (n += 1);
          }

          return n;
        }
      }, {
        key: "update",
        value: function update() {
          var e = this;
          if (!e || e.destroyed) return;
          var t = e.snapGrid,
              s = e.params;

          function i() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
          }

          var a;
          s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (a = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }
      }, {
        key: "changeDirection",
        value: function changeDirection(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var s = this,
              i = s.params.direction;
          return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? s : ("vertical" === i && (s.$el.removeClass("".concat(s.params.containerModifierClass, "vertical wp8-vertical")).addClass("".concat(s.params.containerModifierClass).concat(e)), (h.isIE || h.isEdge) && (p.pointerEvents || p.prefixedPointerEvents) && s.$el.addClass("".concat(s.params.containerModifierClass, "wp8-").concat(e))), "horizontal" === i && (s.$el.removeClass("".concat(s.params.containerModifierClass, "horizontal wp8-horizontal")).addClass("".concat(s.params.containerModifierClass).concat(e)), (h.isIE || h.isEdge) && (p.pointerEvents || p.prefixedPointerEvents) && s.$el.addClass("".concat(s.params.containerModifierClass, "wp8-").concat(e))), s.params.direction = e, s.slides.each(function (t, s) {
            "vertical" === e ? s.style.width = "" : s.style.height = "";
          }), s.emit("changeDirection"), t && s.update(), s);
        }
      }, {
        key: "init",
        value: function init() {
          var e = this;
          e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"));
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var s = this,
              i = s.params,
              a = s.$el,
              n = s.$wrapperEl,
              r = s.slides;
          return void 0 === s.params || s.destroyed ? null : (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), a.removeAttr("style"), n.removeAttr("style"), r && r.length && r.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
            s.off(e);
          }), !1 !== e && (s.$el[0].swiper = null, s.$el.data("swiper", null), c.deleteProps(s)), s.destroyed = !0, null);
        }
      }], [{
        key: "extendDefaults",
        value: function extendDefaults(e) {
          c.extend(C, e);
        }
      }, {
        key: "extendedDefaults",
        get: function get() {
          return C;
        }
      }, {
        key: "defaults",
        get: function get() {
          return T;
        }
      }, {
        key: "Class",
        get: function get() {
          return u;
        }
      }, {
        key: "$",
        get: function get() {
          return l;
        }
      }]);

      return $;
    }(u);

    var M = {
      name: "device",
      proto: {
        device: x
      },
      "static": {
        device: x
      }
    },
        k = {
      name: "support",
      proto: {
        support: p
      },
      "static": {
        support: p
      }
    },
        P = {
      name: "browser",
      proto: {
        browser: h
      },
      "static": {
        browser: h
      }
    },
        z = {
      name: "resize",
      create: function create() {
        var e = this;
        c.extend(e, {
          resize: {
            resizeHandler: function resizeHandler() {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function orientationChangeHandler() {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            }
          }
        });
      },
      on: {
        init: function init() {
          n.addEventListener("resize", this.resize.resizeHandler), n.addEventListener("orientationchange", this.resize.orientationChangeHandler);
        },
        destroy: function destroy() {
          n.removeEventListener("resize", this.resize.resizeHandler), n.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
        }
      }
    };
    var L = {
      func: n.MutationObserver || n.WebkitMutationObserver,
      attach: function attach(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var s = this,
            i = new (0, L.func)(function (e) {
          if (1 === e.length) return void s.emit("observerUpdate", e[0]);

          var t = function t() {
            s.emit("observerUpdate", e[0]);
          };

          n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0);
        });
        i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), s.observer.observers.push(i);
      },
      init: function init() {
        var e = this;

        if (p.observer && e.params.observer) {
          if (e.params.observeParents) {
            var _t26 = e.$el.parents();

            for (var _s34 = 0; _s34 < _t26.length; _s34 += 1) {
              e.observer.attach(_t26[_s34]);
            }
          }

          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren
          }), e.observer.attach(e.$wrapperEl[0], {
            attributes: !1
          });
        }
      },
      destroy: function destroy() {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }), this.observer.observers = [];
      }
    };
    var I = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      },
      create: function create() {
        c.extend(this, {
          observer: {
            init: L.init.bind(this),
            attach: L.attach.bind(this),
            destroy: L.destroy.bind(this),
            observers: []
          }
        });
      },
      on: {
        init: function init() {
          this.observer.init();
        },
        destroy: function destroy() {
          this.observer.destroy();
        }
      }
    };
    var D = {
      update: function update(e) {
        var t = this,
            _t$params = t.params,
            s = _t$params.slidesPerView,
            i = _t$params.slidesPerGroup,
            a = _t$params.centeredSlides,
            _t$params$virtual = t.params.virtual,
            n = _t$params$virtual.addSlidesBefore,
            r = _t$params$virtual.addSlidesAfter,
            _t$virtual = t.virtual,
            l = _t$virtual.from,
            o = _t$virtual.to,
            d = _t$virtual.slides,
            p = _t$virtual.slidesGrid,
            h = _t$virtual.renderSlide,
            u = _t$virtual.offset;
        t.updateActiveIndex();
        var m = t.activeIndex || 0;
        var f, g, v;
        f = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", a ? (g = Math.floor(s / 2) + i + n, v = Math.floor(s / 2) + i + r) : (g = s + (i - 1) + n, v = i + r);
        var b = Math.max((m || 0) - v, 0),
            w = Math.min((m || 0) + g, d.length - 1),
            y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

        function x() {
          t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
        }

        if (c.extend(t.virtual, {
          from: b,
          to: w,
          offset: y,
          slidesGrid: t.slidesGrid
        }), l === b && o === w && !e) return t.slidesGrid !== p && y !== u && t.slides.css(f, "".concat(y, "px")), void t.updateProgress();
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
          offset: y,
          from: b,
          to: w,
          slides: function () {
            var e = [];

            for (var _t27 = b; _t27 <= w; _t27 += 1) {
              e.push(d[_t27]);
            }

            return e;
          }()
        }), void x();
        var E = [],
            T = [];
        if (e) t.$wrapperEl.find(".".concat(t.params.slideClass)).remove();else for (var _e55 = l; _e55 <= o; _e55 += 1) {
          (_e55 < b || _e55 > w) && t.$wrapperEl.find(".".concat(t.params.slideClass, "[data-swiper-slide-index=\"").concat(_e55, "\"]")).remove();
        }

        for (var _t28 = 0; _t28 < d.length; _t28 += 1) {
          _t28 >= b && _t28 <= w && (void 0 === o || e ? T.push(_t28) : (_t28 > o && T.push(_t28), _t28 < l && E.push(_t28)));
        }

        T.forEach(function (e) {
          t.$wrapperEl.append(h(d[e], e));
        }), E.sort(function (e, t) {
          return t - e;
        }).forEach(function (e) {
          t.$wrapperEl.prepend(h(d[e], e));
        }), t.$wrapperEl.children(".swiper-slide").css(f, "".concat(y, "px")), x();
      },
      renderSlide: function renderSlide(e, t) {
        var s = this,
            i = s.params.virtual;
        if (i.cache && s.virtual.cache[t]) return s.virtual.cache[t];
        var a = i.renderSlide ? l(i.renderSlide.call(s, e, t)) : l("<div class=\"".concat(s.params.slideClass, "\" data-swiper-slide-index=\"").concat(t, "\">").concat(e, "</div>"));
        return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (s.virtual.cache[t] = a), a;
      },
      appendSlide: function appendSlide(e) {
        var t = this;
        if ("object" == _typeof(e) && "length" in e) for (var _s35 = 0; _s35 < e.length; _s35 += 1) {
          e[_s35] && t.virtual.slides.push(e[_s35]);
        } else t.virtual.slides.push(e);
        t.virtual.update(!0);
      },
      prependSlide: function prependSlide(e) {
        var t = this,
            s = t.activeIndex;
        var i = s + 1,
            a = 1;

        if (Array.isArray(e)) {
          for (var _s36 = 0; _s36 < e.length; _s36 += 1) {
            e[_s36] && t.virtual.slides.unshift(e[_s36]);
          }

          i = s + e.length, a = e.length;
        } else t.virtual.slides.unshift(e);

        if (t.params.virtual.cache) {
          var _e56 = t.virtual.cache,
              _s37 = {};
          Object.keys(_e56).forEach(function (t) {
            _s37[parseInt(t, 10) + a] = _e56[t];
          }), t.virtual.cache = _s37;
        }

        t.virtual.update(!0), t.slideTo(i, 0);
      },
      removeSlide: function removeSlide(e) {
        var t = this;
        if (null == e) return;
        var s = t.activeIndex;
        if (Array.isArray(e)) for (var _i22 = e.length - 1; _i22 >= 0; _i22 -= 1) {
          t.virtual.slides.splice(e[_i22], 1), t.params.virtual.cache && delete t.virtual.cache[e[_i22]], e[_i22] < s && (s -= 1), s = Math.max(s, 0);
        } else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < s && (s -= 1), s = Math.max(s, 0);
        t.virtual.update(!0), t.slideTo(s, 0);
      },
      removeAllSlides: function removeAllSlides() {
        var e = this;
        e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
      }
    };
    var O = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function create() {
        c.extend(this, {
          virtual: {
            update: D.update.bind(this),
            appendSlide: D.appendSlide.bind(this),
            prependSlide: D.prependSlide.bind(this),
            removeSlide: D.removeSlide.bind(this),
            removeAllSlides: D.removeAllSlides.bind(this),
            renderSlide: D.renderSlide.bind(this),
            slides: this.params.virtual.slides,
            cache: {}
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var e = this;
          if (!e.params.virtual.enabled) return;
          e.classNames.push("".concat(e.params.containerModifierClass, "virtual"));
          var t = {
            watchSlidesProgress: !0
          };
          c.extend(e.params, t), c.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update();
        },
        setTranslate: function setTranslate() {
          this.params.virtual.enabled && this.virtual.update();
        }
      }
    };
    var A = {
      handle: function handle(e) {
        var t = this,
            s = t.rtlTranslate;
        var i = e;
        i.originalEvent && (i = i.originalEvent);
        var r = i.keyCode || i.charCode;
        if (!t.allowSlideNext && (t.isHorizontal() && 39 === r || t.isVertical() && 40 === r)) return !1;
        if (!t.allowSlidePrev && (t.isHorizontal() && 37 === r || t.isVertical() && 38 === r)) return !1;

        if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || a.activeElement && a.activeElement.nodeName && ("input" === a.activeElement.nodeName.toLowerCase() || "textarea" === a.activeElement.nodeName.toLowerCase()))) {
          if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
            var _e57 = !1;

            if (t.$el.parents(".".concat(t.params.slideClass)).length > 0 && 0 === t.$el.parents(".".concat(t.params.slideActiveClass)).length) return;

            var _i23 = n.innerWidth,
                _a12 = n.innerHeight,
                _r13 = t.$el.offset();

            s && (_r13.left -= t.$el[0].scrollLeft);
            var _l8 = [[_r13.left, _r13.top], [_r13.left + t.width, _r13.top], [_r13.left, _r13.top + t.height], [_r13.left + t.width, _r13.top + t.height]];

            for (var _t29 = 0; _t29 < _l8.length; _t29 += 1) {
              var _s38 = _l8[_t29];
              _s38[0] >= 0 && _s38[0] <= _i23 && _s38[1] >= 0 && _s38[1] <= _a12 && (_e57 = !0);
            }

            if (!_e57) return;
          }

          t.isHorizontal() ? (37 !== r && 39 !== r || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === r && !s || 37 === r && s) && t.slideNext(), (37 === r && !s || 39 === r && s) && t.slidePrev()) : (38 !== r && 40 !== r || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === r && t.slideNext(), 38 === r && t.slidePrev()), t.emit("keyPress", r);
        }
      },
      enable: function enable() {
        this.keyboard.enabled || (l(a).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
      },
      disable: function disable() {
        this.keyboard.enabled && (l(a).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
      }
    };
    var H = {
      name: "keyboard",
      params: {
        keyboard: {
          enabled: !1,
          onlyInViewport: !0
        }
      },
      create: function create() {
        c.extend(this, {
          keyboard: {
            enabled: !1,
            enable: A.enable.bind(this),
            disable: A.disable.bind(this),
            handle: A.handle.bind(this)
          }
        });
      },
      on: {
        init: function init() {
          var e = this;
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy: function destroy() {
          var e = this;
          e.keyboard.enabled && e.keyboard.disable();
        }
      }
    };
    var B = {
      lastScrollTime: c.now(),
      event: n.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
        var e = "onwheel" in a;

        if (!e) {
          var _t30 = a.createElement("div");

          _t30.setAttribute("onwheel", "return;"), e = "function" == typeof _t30.onwheel;
        }

        return !e && a.implementation && a.implementation.hasFeature && !0 !== a.implementation.hasFeature("", "") && (e = a.implementation.hasFeature("Events.wheel", "3.0")), e;
      }() ? "wheel" : "mousewheel",
      normalize: function normalize(e) {
        var t = 0,
            s = 0,
            i = 0,
            a = 0;
        return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), i = 10 * t, a = 10 * s, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || a) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, a *= 40) : (i *= 800, a *= 800)), i && !t && (t = i < 1 ? -1 : 1), a && !s && (s = a < 1 ? -1 : 1), {
          spinX: t,
          spinY: s,
          pixelX: i,
          pixelY: a
        };
      },
      handleMouseEnter: function handleMouseEnter() {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function handleMouseLeave() {
        this.mouseEntered = !1;
      },
      handle: function handle(e) {
        var t = e;
        var s = this,
            i = s.params.mousewheel;
        if (!s.mouseEntered && !i.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        var a = 0;
        var r = s.rtlTranslate ? -1 : 1,
            l = B.normalize(t);
        if (i.forceToAxis) {
          if (s.isHorizontal()) {
            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
            a = l.pixelX * r;
          } else {
            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
            a = l.pixelY;
          }
        } else a = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * r : -l.pixelY;
        if (0 === a) return !0;

        if (i.invert && (a = -a), s.params.freeMode) {
          s.params.loop && s.loopFix();

          var _e58 = s.getTranslate() + a * i.sensitivity;

          var _n9 = s.isBeginning,
              _r14 = s.isEnd;
          if (_e58 >= s.minTranslate() && (_e58 = s.minTranslate()), _e58 <= s.maxTranslate() && (_e58 = s.maxTranslate()), s.setTransition(0), s.setTranslate(_e58), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!_n9 && s.isBeginning || !_r14 && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = c.nextTick(function () {
            s.slideToClosest();
          }, 300)), s.emit("scroll", t), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(), _e58 === s.minTranslate() || _e58 === s.maxTranslate()) return !0;
        } else {
          if (c.now() - s.mousewheel.lastScrollTime > 60) if (a < 0) {
            if (s.isEnd && !s.params.loop || s.animating) {
              if (i.releaseOnEdges) return !0;
            } else s.slideNext(), s.emit("scroll", t);
          } else if (s.isBeginning && !s.params.loop || s.animating) {
            if (i.releaseOnEdges) return !0;
          } else s.slidePrev(), s.emit("scroll", t);
          s.mousewheel.lastScrollTime = new n.Date().getTime();
        }

        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
      },
      enable: function enable() {
        var e = this;
        if (!B.event) return !1;
        if (e.mousewheel.enabled) return !1;
        var t = e.$el;
        return "container" !== e.params.mousewheel.eventsTarged && (t = l(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(B.event, e.mousewheel.handle), e.mousewheel.enabled = !0, !0;
      },
      disable: function disable() {
        var e = this;
        if (!B.event) return !1;
        if (!e.mousewheel.enabled) return !1;
        var t = e.$el;
        return "container" !== e.params.mousewheel.eventsTarged && (t = l(e.params.mousewheel.eventsTarged)), t.off(B.event, e.mousewheel.handle), e.mousewheel.enabled = !1, !0;
      }
    };
    var N = {
      update: function update() {
        var e = this,
            t = e.params.navigation;
        if (e.params.loop) return;
        var _e$navigation = e.navigation,
            s = _e$navigation.$nextEl,
            i = _e$navigation.$prevEl;
        i && i.length > 0 && (e.isBeginning ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), s && s.length > 0 && (e.isEnd ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
      },
      onPrevClick: function onPrevClick(e) {
        e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
      },
      onNextClick: function onNextClick(e) {
        e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
      },
      init: function init() {
        var e = this,
            t = e.params.navigation;
        if (!t.nextEl && !t.prevEl) return;
        var s, i;
        t.nextEl && (s = l(t.nextEl), e.params.uniqueNavElements && "string" == typeof t.nextEl && s.length > 1 && 1 === e.$el.find(t.nextEl).length && (s = e.$el.find(t.nextEl))), t.prevEl && (i = l(t.prevEl), e.params.uniqueNavElements && "string" == typeof t.prevEl && i.length > 1 && 1 === e.$el.find(t.prevEl).length && (i = e.$el.find(t.prevEl))), s && s.length > 0 && s.on("click", e.navigation.onNextClick), i && i.length > 0 && i.on("click", e.navigation.onPrevClick), c.extend(e.navigation, {
          $nextEl: s,
          nextEl: s && s[0],
          $prevEl: i,
          prevEl: i && i[0]
        });
      },
      destroy: function destroy() {
        var e = this,
            _e$navigation2 = e.navigation,
            t = _e$navigation2.$nextEl,
            s = _e$navigation2.$prevEl;
        t && t.length && (t.off("click", e.navigation.onNextClick), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", e.navigation.onPrevClick), s.removeClass(e.params.navigation.disabledClass));
      }
    };
    var G = {
      update: function update() {
        var e = this,
            t = e.rtl,
            s = e.params.pagination;
        if (!s.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
        var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            a = e.pagination.$el;
        var n;
        var r = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

        if (e.params.loop ? ((n = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > i - 1 - 2 * e.loopedSlides && (n -= i - 2 * e.loopedSlides), n > r - 1 && (n -= r), n < 0 && "bullets" !== e.params.paginationType && (n = r + n)) : n = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
          var _i24 = e.pagination.bullets;

          var _r15, _o3, _d4;

          if (s.dynamicBullets && (e.pagination.bulletSize = _i24.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(e.isHorizontal() ? "width" : "height", "".concat(e.pagination.bulletSize * (s.dynamicMainBullets + 4), "px")), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += n - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), _r15 = n - e.pagination.dynamicBulletIndex, _d4 = ((_o3 = _r15 + (Math.min(_i24.length, s.dynamicMainBullets) - 1)) + _r15) / 2), _i24.removeClass("".concat(s.bulletActiveClass, " ").concat(s.bulletActiveClass, "-next ").concat(s.bulletActiveClass, "-next-next ").concat(s.bulletActiveClass, "-prev ").concat(s.bulletActiveClass, "-prev-prev ").concat(s.bulletActiveClass, "-main")), a.length > 1) _i24.each(function (e, t) {
            var i = l(t),
                a = i.index();
            a === n && i.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= _r15 && a <= _o3 && i.addClass("".concat(s.bulletActiveClass, "-main")), a === _r15 && i.prev().addClass("".concat(s.bulletActiveClass, "-prev")).prev().addClass("".concat(s.bulletActiveClass, "-prev-prev")), a === _o3 && i.next().addClass("".concat(s.bulletActiveClass, "-next")).next().addClass("".concat(s.bulletActiveClass, "-next-next")));
          });else {
            if (_i24.eq(n).addClass(s.bulletActiveClass), s.dynamicBullets) {
              var _e59 = _i24.eq(_r15),
                  _t31 = _i24.eq(_o3);

              for (var _e60 = _r15; _e60 <= _o3; _e60 += 1) {
                _i24.eq(_e60).addClass("".concat(s.bulletActiveClass, "-main"));
              }

              _e59.prev().addClass("".concat(s.bulletActiveClass, "-prev")).prev().addClass("".concat(s.bulletActiveClass, "-prev-prev")), _t31.next().addClass("".concat(s.bulletActiveClass, "-next")).next().addClass("".concat(s.bulletActiveClass, "-next-next"));
            }
          }

          if (s.dynamicBullets) {
            var _a13 = Math.min(_i24.length, s.dynamicMainBullets + 4),
                _n10 = (e.pagination.bulletSize * _a13 - e.pagination.bulletSize) / 2 - _d4 * e.pagination.bulletSize,
                _r16 = t ? "right" : "left";

            _i24.css(e.isHorizontal() ? _r16 : "top", "".concat(_n10, "px"));
          }
        }

        if ("fraction" === s.type && (a.find(".".concat(s.currentClass)).text(s.formatFractionCurrent(n + 1)), a.find(".".concat(s.totalClass)).text(s.formatFractionTotal(r))), "progressbar" === s.type) {
          var _t32;

          _t32 = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";

          var _i25 = (n + 1) / r;

          var _l9 = 1,
              _o4 = 1;
          "horizontal" === _t32 ? _l9 = _i25 : _o4 = _i25, a.find(".".concat(s.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_l9, ") scaleY(").concat(_o4, ")")).transition(e.params.speed);
        }

        "custom" === s.type && s.renderCustom ? (a.html(s.renderCustom(e, n + 1, r)), e.emit("paginationRender", e, a[0])) : e.emit("paginationUpdate", e, a[0]), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass);
      },
      render: function render() {
        var e = this,
            t = e.params.pagination;
        if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
        var s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            i = e.pagination.$el;
        var a = "";

        if ("bullets" === t.type) {
          var _n11 = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

          for (var _s39 = 0; _s39 < _n11; _s39 += 1) {
            t.renderBullet ? a += t.renderBullet.call(e, _s39, t.bulletClass) : a += "<".concat(t.bulletElement, " class=\"").concat(t.bulletClass, "\"></").concat(t.bulletElement, ">");
          }

          i.html(a), e.pagination.bullets = i.find(".".concat(t.bulletClass));
        }

        "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : "<span class=\"".concat(t.currentClass, "\"></span>") + " / " + "<span class=\"".concat(t.totalClass, "\"></span>"), i.html(a)), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : "<span class=\"".concat(t.progressbarFillClass, "\"></span>"), i.html(a)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
      },
      init: function init() {
        var e = this,
            t = e.params.pagination;
        if (!t.el) return;
        var s = l(t.el);
        0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && 1 === e.$el.find(t.el).length && (s = e.$el.find(t.el)), "bullets" === t.type && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (s.addClass("".concat(t.modifierClass).concat(t.type, "-dynamic")), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", ".".concat(t.bulletClass), function (t) {
          t.preventDefault();
          var s = l(this).index() * e.params.slidesPerGroup;
          e.params.loop && (s += e.loopedSlides), e.slideTo(s);
        }), c.extend(e.pagination, {
          $el: s,
          el: s[0]
        }));
      },
      destroy: function destroy() {
        var e = this.params.pagination;
        if (!e.el || !this.pagination.el || !this.pagination.$el || 0 === this.pagination.$el.length) return;
        var t = this.pagination.$el;
        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", ".".concat(e.bulletClass));
      }
    };
    var X = {
      setTranslate: function setTranslate() {
        var e = this;
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        var t = e.scrollbar,
            s = e.rtlTranslate,
            i = e.progress,
            a = t.dragSize,
            n = t.trackSize,
            r = t.$dragEl,
            l = t.$el,
            o = e.params.scrollbar;
        var d = a,
            c = (n - a) * i;
        s ? (c = -c) > 0 ? (d = a - c, c = 0) : -c + a > n && (d = n + c) : c < 0 ? (d = a + c, c = 0) : c + a > n && (d = n - c), e.isHorizontal() ? (p.transforms3d ? r.transform("translate3d(".concat(c, "px, 0, 0)")) : r.transform("translateX(".concat(c, "px)")), r[0].style.width = "".concat(d, "px")) : (p.transforms3d ? r.transform("translate3d(0px, ".concat(c, "px, 0)")) : r.transform("translateY(".concat(c, "px)")), r[0].style.height = "".concat(d, "px")), o.hide && (clearTimeout(e.scrollbar.timeout), l[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
          l[0].style.opacity = 0, l.transition(400);
        }, 1e3));
      },
      setTransition: function setTransition(e) {
        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function updateSize() {
        var e = this;
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        var t = e.scrollbar,
            s = t.$dragEl,
            i = t.$el;
        s[0].style.width = "", s[0].style.height = "";
        var a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            r = n * (a / e.size);
        var l;
        l = "auto" === e.params.scrollbar.dragSize ? a * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? s[0].style.width = "".concat(l, "px") : s[0].style.height = "".concat(l, "px"), i[0].style.display = n >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), c.extend(t, {
          trackSize: a,
          divider: n,
          moveDivider: r,
          dragSize: l
        }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
      },
      setDragPosition: function setDragPosition(e) {
        var t = this.scrollbar,
            s = this.rtlTranslate,
            i = t.$el,
            a = t.dragSize,
            n = t.trackSize;
        var r, l;
        l = ((r = this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - i.offset()[this.isHorizontal() ? "left" : "top"] - a / 2) / (n - a), l = Math.max(Math.min(l, 1), 0), s && (l = 1 - l);
        var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * l;
        this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
      },
      onDragStart: function onDragStart(e) {
        var t = this.params.scrollbar,
            s = this.scrollbar,
            i = this.$wrapperEl,
            a = s.$el,
            n = s.$dragEl;
        this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), i.transition(100), n.transition(100), s.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e);
      },
      onDragMove: function onDragMove(e) {
        var t = this.scrollbar,
            s = this.$wrapperEl,
            i = t.$el,
            a = t.$dragEl;
        this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), s.transition(0), i.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
      },
      onDragEnd: function onDragEnd(e) {
        var t = this,
            s = t.params.scrollbar,
            i = t.scrollbar,
            a = i.$el;
        t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, s.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = c.nextTick(function () {
          a.css("opacity", 0), a.transition(400);
        }, 1e3)), t.emit("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
      },
      enableDraggable: function enableDraggable() {
        var e = this;
        if (!e.params.scrollbar.el) return;
        var t = e.scrollbar,
            s = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            n = e.params,
            r = t.$el[0],
            l = !(!p.passiveListener || !n.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            o = !(!p.passiveListener || !n.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        p.touch ? (r.addEventListener(s.start, e.scrollbar.onDragStart, l), r.addEventListener(s.move, e.scrollbar.onDragMove, l), r.addEventListener(s.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, l), a.addEventListener(i.move, e.scrollbar.onDragMove, l), a.addEventListener(i.end, e.scrollbar.onDragEnd, o));
      },
      disableDraggable: function disableDraggable() {
        var e = this;
        if (!e.params.scrollbar.el) return;
        var t = e.scrollbar,
            s = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            n = e.params,
            r = t.$el[0],
            l = !(!p.passiveListener || !n.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            o = !(!p.passiveListener || !n.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        p.touch ? (r.removeEventListener(s.start, e.scrollbar.onDragStart, l), r.removeEventListener(s.move, e.scrollbar.onDragMove, l), r.removeEventListener(s.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, l), a.removeEventListener(i.move, e.scrollbar.onDragMove, l), a.removeEventListener(i.end, e.scrollbar.onDragEnd, o));
      },
      init: function init() {
        var e = this;
        if (!e.params.scrollbar.el) return;
        var t = e.scrollbar,
            s = e.$el,
            i = e.params.scrollbar;
        var a = l(i.el);
        e.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === s.find(i.el).length && (a = s.find(i.el));
        var n = a.find(".".concat(e.params.scrollbar.dragClass));
        0 === n.length && (n = l("<div class=\"".concat(e.params.scrollbar.dragClass, "\"></div>")), a.append(n)), c.extend(t, {
          $el: a,
          el: a[0],
          $dragEl: n,
          dragEl: n[0]
        }), i.draggable && t.enableDraggable();
      },
      destroy: function destroy() {
        this.scrollbar.disableDraggable();
      }
    };
    var Y = {
      setTransform: function setTransform(e, t) {
        var s = this.rtl,
            i = l(e),
            a = s ? -1 : 1,
            n = i.attr("data-swiper-parallax") || "0";
        var r = i.attr("data-swiper-parallax-x"),
            o = i.attr("data-swiper-parallax-y");
        var d = i.attr("data-swiper-parallax-scale"),
            c = i.attr("data-swiper-parallax-opacity");

        if (r || o ? (r = r || "0", o = o || "0") : this.isHorizontal() ? (r = n, o = "0") : (o = n, r = "0"), r = r.indexOf("%") >= 0 ? "".concat(parseInt(r, 10) * t * a, "%") : "".concat(r * t * a, "px"), o = o.indexOf("%") >= 0 ? "".concat(parseInt(o, 10) * t, "%") : "".concat(o * t, "px"), null != c) {
          var _e61 = c - (c - 1) * (1 - Math.abs(t));

          i[0].style.opacity = _e61;
        }

        if (null == d) i.transform("translate3d(".concat(r, ", ").concat(o, ", 0px)"));else {
          var _e62 = d - (d - 1) * (1 - Math.abs(t));

          i.transform("translate3d(".concat(r, ", ").concat(o, ", 0px) scale(").concat(_e62, ")"));
        }
      },
      setTranslate: function setTranslate() {
        var e = this,
            t = e.$el,
            s = e.slides,
            i = e.progress,
            a = e.snapGrid;
        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, s) {
          e.parallax.setTransform(s, i);
        }), s.each(function (t, s) {
          var n = s.progress;
          e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - i * (a.length - 1)), n = Math.min(Math.max(n, -1), 1), l(s).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, s) {
            e.parallax.setTransform(s, n);
          });
        });
      },
      setTransition: function setTransition() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
        var t = this.$el;
        t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, s) {
          var i = l(s);
          var a = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (a = 0), i.transition(a);
        });
      }
    };
    var V = {
      getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
            s = e.targetTouches[0].pageY,
            i = e.targetTouches[1].pageX,
            a = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(a - s, 2));
      },
      onGestureStart: function onGestureStart(e) {
        var t = this,
            s = t.params.zoom,
            i = t.zoom,
            a = i.gesture;

        if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !p.gestures) {
          if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
          i.fakeGestureTouched = !0, a.scaleStart = V.getDistanceBetweenTouches(e);
        }

        a.$slideEl && a.$slideEl.length || (a.$slideEl = l(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = t.slides.eq(t.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent(".".concat(s.containerClass)), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), t.zoom.isScaling = !0) : a.$imageEl = void 0;
      },
      onGestureChange: function onGestureChange(e) {
        var t = this.params.zoom,
            s = this.zoom,
            i = s.gesture;

        if (!p.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          s.fakeGestureMoved = !0, i.scaleMove = V.getDistanceBetweenTouches(e);
        }

        i.$imageEl && 0 !== i.$imageEl.length && (p.gestures ? s.scale = e.scale * s.currentScale : s.scale = i.scaleMove / i.scaleStart * s.currentScale, s.scale > i.maxRatio && (s.scale = i.maxRatio - 1 + Math.pow(s.scale - i.maxRatio + 1, .5)), s.scale < t.minRatio && (s.scale = t.minRatio + 1 - Math.pow(t.minRatio - s.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(".concat(s.scale, ")")));
      },
      onGestureEnd: function onGestureEnd(e) {
        var t = this.params.zoom,
            s = this.zoom,
            i = s.gesture;

        if (!p.gestures) {
          if (!s.fakeGestureTouched || !s.fakeGestureMoved) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !x.android) return;
          s.fakeGestureTouched = !1, s.fakeGestureMoved = !1;
        }

        i.$imageEl && 0 !== i.$imageEl.length && (s.scale = Math.max(Math.min(s.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(".concat(s.scale, ")")), s.currentScale = s.scale, s.isScaling = !1, 1 === s.scale && (i.$slideEl = void 0));
      },
      onTouchStart: function onTouchStart(e) {
        var t = this.zoom,
            s = t.gesture,
            i = t.image;
        s.$imageEl && 0 !== s.$imageEl.length && (i.isTouched || (x.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
      },
      onTouchMove: function onTouchMove(e) {
        var t = this,
            s = t.zoom,
            i = s.gesture,
            a = s.image,
            n = s.velocity;
        if (!i.$imageEl || 0 === i.$imageEl.length) return;
        if (t.allowClick = !1, !a.isTouched || !i.$slideEl) return;
        a.isMoved || (a.width = i.$imageEl[0].offsetWidth, a.height = i.$imageEl[0].offsetHeight, a.startX = c.getTranslate(i.$imageWrapEl[0], "x") || 0, a.startY = c.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (a.startX = -a.startX, a.startY = -a.startY));
        var r = a.width * s.scale,
            l = a.height * s.scale;

        if (!(r < i.slideWidth && l < i.slideHeight)) {
          if (a.minX = Math.min(i.slideWidth / 2 - r / 2, 0), a.maxX = -a.minX, a.minY = Math.min(i.slideHeight / 2 - l / 2, 0), a.maxY = -a.minY, a.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.isMoved && !s.isScaling) {
            if (t.isHorizontal() && (Math.floor(a.minX) === Math.floor(a.startX) && a.touchesCurrent.x < a.touchesStart.x || Math.floor(a.maxX) === Math.floor(a.startX) && a.touchesCurrent.x > a.touchesStart.x)) return void (a.isTouched = !1);
            if (!t.isHorizontal() && (Math.floor(a.minY) === Math.floor(a.startY) && a.touchesCurrent.y < a.touchesStart.y || Math.floor(a.maxY) === Math.floor(a.startY) && a.touchesCurrent.y > a.touchesStart.y)) return void (a.isTouched = !1);
          }

          e.preventDefault(), e.stopPropagation(), a.isMoved = !0, a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX, a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY, a.currentX < a.minX && (a.currentX = a.minX + 1 - Math.pow(a.minX - a.currentX + 1, .8)), a.currentX > a.maxX && (a.currentX = a.maxX - 1 + Math.pow(a.currentX - a.maxX + 1, .8)), a.currentY < a.minY && (a.currentY = a.minY + 1 - Math.pow(a.minY - a.currentY + 1, .8)), a.currentY > a.maxY && (a.currentY = a.maxY - 1 + Math.pow(a.currentY - a.maxY + 1, .8)), n.prevPositionX || (n.prevPositionX = a.touchesCurrent.x), n.prevPositionY || (n.prevPositionY = a.touchesCurrent.y), n.prevTime || (n.prevTime = Date.now()), n.x = (a.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2, n.y = (a.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2, Math.abs(a.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0), Math.abs(a.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0), n.prevPositionX = a.touchesCurrent.x, n.prevPositionY = a.touchesCurrent.y, n.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(".concat(a.currentX, "px, ").concat(a.currentY, "px,0)"));
        }
      },
      onTouchEnd: function onTouchEnd() {
        var e = this.zoom,
            t = e.gesture,
            s = e.image,
            i = e.velocity;
        if (!t.$imageEl || 0 === t.$imageEl.length) return;
        if (!s.isTouched || !s.isMoved) return s.isTouched = !1, void (s.isMoved = !1);
        s.isTouched = !1, s.isMoved = !1;
        var a = 300,
            n = 300;
        var r = i.x * a,
            l = s.currentX + r,
            o = i.y * n,
            d = s.currentY + o;
        0 !== i.x && (a = Math.abs((l - s.currentX) / i.x)), 0 !== i.y && (n = Math.abs((d - s.currentY) / i.y));
        var c = Math.max(a, n);
        s.currentX = l, s.currentY = d;
        var p = s.width * e.scale,
            h = s.height * e.scale;
        s.minX = Math.min(t.slideWidth / 2 - p / 2, 0), s.maxX = -s.minX, s.minY = Math.min(t.slideHeight / 2 - h / 2, 0), s.maxY = -s.minY, s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX), s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY), t.$imageWrapEl.transition(c).transform("translate3d(".concat(s.currentX, "px, ").concat(s.currentY, "px,0)"));
      },
      onTransitionEnd: function onTransitionEnd() {
        var e = this.zoom,
            t = e.gesture;
        t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
      },
      toggle: function toggle(e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t["in"](e);
      },
      "in": function _in(e) {
        var t = this,
            s = t.zoom,
            i = t.params.zoom,
            a = s.gesture,
            n = s.image;
        if (a.$slideEl || (a.$slideEl = t.clickedSlide ? l(t.clickedSlide) : t.slides.eq(t.activeIndex), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent(".".concat(i.containerClass))), !a.$imageEl || 0 === a.$imageEl.length) return;
        var r, o, d, c, p, h, u, m, f, g, v, b, w, y, x, E, T, S;
        a.$slideEl.addClass("".concat(i.zoomedSlideClass)), void 0 === n.touchesStart.x && e ? (r = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, o = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (r = n.touchesStart.x, o = n.touchesStart.y), s.scale = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, s.currentScale = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, e ? (T = a.$slideEl[0].offsetWidth, S = a.$slideEl[0].offsetHeight, p = (d = a.$slideEl.offset().left) + T / 2 - r, h = (c = a.$slideEl.offset().top) + S / 2 - o, f = a.$imageEl[0].offsetWidth, g = a.$imageEl[0].offsetHeight, v = f * s.scale, b = g * s.scale, x = -(w = Math.min(T / 2 - v / 2, 0)), E = -(y = Math.min(S / 2 - b / 2, 0)), (u = p * s.scale) < w && (u = w), u > x && (u = x), (m = h * s.scale) < y && (m = y), m > E && (m = E)) : (u = 0, m = 0), a.$imageWrapEl.transition(300).transform("translate3d(".concat(u, "px, ").concat(m, "px,0)")), a.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(s.scale, ")"));
      },
      out: function out() {
        var e = this,
            t = e.zoom,
            s = e.params.zoom,
            i = t.gesture;
        i.$slideEl || (i.$slideEl = e.clickedSlide ? l(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent(".".concat(s.containerClass))), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("".concat(s.zoomedSlideClass)), i.$slideEl = void 0);
      },
      enable: function enable() {
        var e = this,
            t = e.zoom;
        if (t.enabled) return;
        t.enabled = !0;
        var s = !("touchstart" !== e.touchEvents.start || !p.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        p.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, s), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, s), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, s)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, s), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, s), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, s)), e.$wrapperEl.on(e.touchEvents.move, ".".concat(e.params.zoom.containerClass), t.onTouchMove);
      },
      disable: function disable() {
        var e = this,
            t = e.zoom;
        if (!t.enabled) return;
        e.zoom.enabled = !1;
        var s = !("touchstart" !== e.touchEvents.start || !p.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        p.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, s), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, s), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, s)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, s), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, s), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, s)), e.$wrapperEl.off(e.touchEvents.move, ".".concat(e.params.zoom.containerClass), t.onTouchMove);
      }
    };
    var F = {
      loadInSlide: function loadInSlide(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = this,
            i = s.params.lazy;
        if (void 0 === e) return;
        if (0 === s.slides.length) return;
        var a = s.virtual && s.params.virtual.enabled ? s.$wrapperEl.children(".".concat(s.params.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")) : s.slides.eq(e);
        var n = a.find(".".concat(i.elementClass, ":not(.").concat(i.loadedClass, "):not(.").concat(i.loadingClass, ")"));
        !a.hasClass(i.elementClass) || a.hasClass(i.loadedClass) || a.hasClass(i.loadingClass) || (n = n.add(a[0])), 0 !== n.length && n.each(function (e, n) {
          var r = l(n);
          r.addClass(i.loadingClass);
          var o = r.attr("data-background"),
              d = r.attr("data-src"),
              c = r.attr("data-srcset"),
              p = r.attr("data-sizes");
          s.loadImage(r[0], d || o, c, p, !1, function () {
            if (null != s && s && (!s || s.params) && !s.destroyed) {
              if (o ? (r.css("background-image", "url(\"".concat(o, "\")")), r.removeAttr("data-background")) : (c && (r.attr("srcset", c), r.removeAttr("data-srcset")), p && (r.attr("sizes", p), r.removeAttr("data-sizes")), d && (r.attr("src", d), r.removeAttr("data-src"))), r.addClass(i.loadedClass).removeClass(i.loadingClass), a.find(".".concat(i.preloaderClass)).remove(), s.params.loop && t) {
                var _e63 = a.attr("data-swiper-slide-index");

                if (a.hasClass(s.params.slideDuplicateClass)) {
                  var _t33 = s.$wrapperEl.children("[data-swiper-slide-index=\"".concat(_e63, "\"]:not(.").concat(s.params.slideDuplicateClass, ")"));

                  s.lazy.loadInSlide(_t33.index(), !1);
                } else {
                  var _t34 = s.$wrapperEl.children(".".concat(s.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(_e63, "\"]"));

                  s.lazy.loadInSlide(_t34.index(), !1);
                }
              }

              s.emit("lazyImageReady", a[0], r[0]);
            }
          }), s.emit("lazyImageLoad", a[0], r[0]);
        });
      },
      load: function load() {
        var e = this,
            t = e.$wrapperEl,
            s = e.params,
            i = e.slides,
            a = e.activeIndex,
            n = e.virtual && s.virtual.enabled,
            r = s.lazy;
        var o = s.slidesPerView;

        function d(e) {
          if (n) {
            if (t.children(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")).length) return !0;
          } else if (i[e]) return !0;

          return !1;
        }

        function c(e) {
          return n ? l(e).attr("data-swiper-slide-index") : l(e).index();
        }

        if ("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children(".".concat(s.slideVisibleClass)).each(function (t, s) {
          var i = n ? l(s).attr("data-swiper-slide-index") : l(s).index();
          e.lazy.loadInSlide(i);
        });else if (o > 1) for (var _t35 = a; _t35 < a + o; _t35 += 1) {
          d(_t35) && e.lazy.loadInSlide(_t35);
        } else e.lazy.loadInSlide(a);
        if (r.loadPrevNext) if (o > 1 || r.loadPrevNextAmount && r.loadPrevNextAmount > 1) {
          var _t36 = r.loadPrevNextAmount,
              _s40 = o,
              _n12 = Math.min(a + _s40 + Math.max(_t36, _s40), i.length),
              _l10 = Math.max(a - Math.max(_s40, _t36), 0);

          for (var _t37 = a + o; _t37 < _n12; _t37 += 1) {
            d(_t37) && e.lazy.loadInSlide(_t37);
          }

          for (var _t38 = _l10; _t38 < a; _t38 += 1) {
            d(_t38) && e.lazy.loadInSlide(_t38);
          }
        } else {
          var _i26 = t.children(".".concat(s.slideNextClass));

          _i26.length > 0 && e.lazy.loadInSlide(c(_i26));

          var _a14 = t.children(".".concat(s.slidePrevClass));

          _a14.length > 0 && e.lazy.loadInSlide(c(_a14));
        }
      }
    };
    var q = {
      LinearSpline: function LinearSpline(e, t) {
        var s = function () {
          var e, t, s;
          return function (i, a) {
            for (t = -1, e = i.length; e - t > 1;) {
              i[s = e + t >> 1] <= a ? t = s : e = s;
            }

            return e;
          };
        }();

        var i, a;
        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
          return e ? (a = s(this.x, e), i = a - 1, (e - this.x[i]) * (this.y[a] - this.y[i]) / (this.x[a] - this.x[i]) + this.y[i]) : 0;
        }, this;
      },
      getInterpolateFunction: function getInterpolateFunction(e) {
        var t = this;
        t.controller.spline || (t.controller.spline = t.params.loop ? new q.LinearSpline(t.slidesGrid, e.slidesGrid) : new q.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function setTranslate(e, t) {
        var s = this,
            i = s.controller.control;
        var a, n;

        function r(e) {
          var t = s.rtlTranslate ? -s.translate : s.translate;
          "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), n = -s.controller.spline.interpolate(-t)), n && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), n = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, s), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        if (Array.isArray(i)) for (var _e64 = 0; _e64 < i.length; _e64 += 1) {
          i[_e64] !== t && i[_e64] instanceof $ && r(i[_e64]);
        } else i instanceof $ && t !== i && r(i);
      },
      setTransition: function setTransition(e, t) {
        var s = this,
            i = s.controller.control;
        var a;

        function n(t) {
          t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && c.nextTick(function () {
            t.updateAutoHeight();
          }), t.$wrapperEl.transitionEnd(function () {
            i && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
          }));
        }

        if (Array.isArray(i)) for (a = 0; a < i.length; a += 1) {
          i[a] !== t && i[a] instanceof $ && n(i[a]);
        } else i instanceof $ && t !== i && n(i);
      }
    };
    var R = {
      makeElFocusable: function makeElFocusable(e) {
        return e.attr("tabIndex", "0"), e;
      },
      addElRole: function addElRole(e, t) {
        return e.attr("role", t), e;
      },
      addElLabel: function addElLabel(e, t) {
        return e.attr("aria-label", t), e;
      },
      disableEl: function disableEl(e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function enableEl(e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function onEnterKey(e) {
        var t = this,
            s = t.params.a11y;
        if (13 !== e.keyCode) return;
        var i = l(e.target);
        t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(s.lastSlideMessage) : t.a11y.notify(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(s.firstSlideMessage) : t.a11y.notify(s.prevSlideMessage)), t.pagination && i.is(".".concat(t.params.pagination.bulletClass)) && i[0].click();
      },
      notify: function notify(e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function updateNavigation() {
        var e = this;
        if (e.params.loop) return;
        var _e$navigation3 = e.navigation,
            t = _e$navigation3.$nextEl,
            s = _e$navigation3.$prevEl;
        s && s.length > 0 && (e.isBeginning ? e.a11y.disableEl(s) : e.a11y.enableEl(s)), t && t.length > 0 && (e.isEnd ? e.a11y.disableEl(t) : e.a11y.enableEl(t));
      },
      updatePagination: function updatePagination() {
        var e = this,
            t = e.params.a11y;
        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (s, i) {
          var a = l(i);
          e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
        });
      },
      init: function init() {
        var e = this;
        e.$el.append(e.a11y.liveRegion);
        var t = e.params.a11y;
        var s, i;
        e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), s && (e.a11y.makeElFocusable(s), e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.nextSlideMessage), s.on("keydown", e.a11y.onEnterKey)), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", ".".concat(e.params.pagination.bulletClass), e.a11y.onEnterKey);
      },
      destroy: function destroy() {
        var e = this;
        var t, s;
        e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), s && s.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", ".".concat(e.params.pagination.bulletClass), e.a11y.onEnterKey);
      }
    };
    var W = {
      init: function init() {
        var e = this;
        if (!e.params.history) return;
        if (!n.history || !n.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
        var t = e.history;
        t.initialized = !0, t.paths = W.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || n.addEventListener("popstate", e.history.setHistoryPopState));
      },
      destroy: function destroy() {
        var e = this;
        e.params.history.replaceState || n.removeEventListener("popstate", e.history.setHistoryPopState);
      },
      setHistoryPopState: function setHistoryPopState() {
        this.history.paths = W.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
      },
      getPathValues: function getPathValues() {
        var e = n.location.pathname.slice(1).split("/").filter(function (e) {
          return "" !== e;
        }),
            t = e.length;
        return {
          key: e[t - 2],
          value: e[t - 1]
        };
      },
      setHistory: function setHistory(e, t) {
        if (!this.history.initialized || !this.params.history.enabled) return;
        var s = this.slides.eq(t);
        var i = W.slugify(s.attr("data-history"));
        n.location.pathname.includes(e) || (i = "".concat(e, "/").concat(i));
        var a = n.history.state;
        a && a.value === i || (this.params.history.replaceState ? n.history.replaceState({
          value: i
        }, null, i) : n.history.pushState({
          value: i
        }, null, i));
      },
      slugify: function slugify(e) {
        return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
      },
      scrollToSlide: function scrollToSlide(e, t, s) {
        var i = this;
        if (t) for (var _a15 = 0, _n13 = i.slides.length; _a15 < _n13; _a15 += 1) {
          var _n14 = i.slides.eq(_a15);

          if (W.slugify(_n14.attr("data-history")) === t && !_n14.hasClass(i.params.slideDuplicateClass)) {
            var _t39 = _n14.index();

            i.slideTo(_t39, e, s);
          }
        } else i.slideTo(0, e, s);
      }
    };
    var j = {
      onHashCange: function onHashCange() {
        var e = this,
            t = a.location.hash.replace("#", "");

        if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var _s41 = e.$wrapperEl.children(".".concat(e.params.slideClass, "[data-hash=\"").concat(t, "\"]")).index();

          if (void 0 === _s41) return;
          e.slideTo(_s41);
        }
      },
      setHash: function setHash() {
        var e = this;
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && n.history && n.history.replaceState) n.history.replaceState(null, null, "#".concat(e.slides.eq(e.activeIndex).attr("data-hash")) || "");else {
          var _t40 = e.slides.eq(e.activeIndex),
              _s42 = _t40.attr("data-hash") || _t40.attr("data-history");

          a.location.hash = _s42 || "";
        }
      },
      init: function init() {
        var e = this;
        if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
        e.hashNavigation.initialized = !0;
        var t = a.location.hash.replace("#", "");

        if (t) {
          var _s43 = 0;

          for (var _i27 = 0, _a16 = e.slides.length; _i27 < _a16; _i27 += 1) {
            var _a17 = e.slides.eq(_i27);

            if ((_a17.attr("data-hash") || _a17.attr("data-history")) === t && !_a17.hasClass(e.params.slideDuplicateClass)) {
              var _t41 = _a17.index();

              e.slideTo(_t41, _s43, e.params.runCallbacksOnInit, !0);
            }
          }
        }

        e.params.hashNavigation.watchState && l(n).on("hashchange", e.hashNavigation.onHashCange);
      },
      destroy: function destroy() {
        var e = this;
        e.params.hashNavigation.watchState && l(n).off("hashchange", e.hashNavigation.onHashCange);
      }
    };
    var _ = {
      run: function run() {
        var e = this,
            t = e.slides.eq(e.activeIndex);
        var s = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = c.nextTick(function () {
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
        }, s);
      },
      start: function start() {
        return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
      },
      stop: function stop() {
        var e = this;
        return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
      },
      pause: function pause(e) {
        var t = this;
        t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())));
      }
    };
    var U = {
      setTranslate: function setTranslate() {
        var e = this,
            t = e.slides;

        for (var _s44 = 0; _s44 < t.length; _s44 += 1) {
          var _t42 = e.slides.eq(_s44);

          var _i28 = -_t42[0].swiperSlideOffset;

          e.params.virtualTranslate || (_i28 -= e.translate);
          var _a18 = 0;
          e.isHorizontal() || (_a18 = _i28, _i28 = 0);

          var _n15 = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(_t42[0].progress), 0) : 1 + Math.min(Math.max(_t42[0].progress, -1), 0);

          _t42.css({
            opacity: _n15
          }).transform("translate3d(".concat(_i28, "px, ").concat(_a18, "px, 0px)"));
        }
      },
      setTransition: function setTransition(e) {
        var t = this,
            s = t.slides,
            i = t.$wrapperEl;

        if (s.transition(e), t.params.virtualTranslate && 0 !== e) {
          var _e65 = !1;

          s.transitionEnd(function () {
            if (_e65) return;
            if (!t || t.destroyed) return;
            _e65 = !0, t.animating = !1;
            var s = ["webkitTransitionEnd", "transitionend"];

            for (var _e66 = 0; _e66 < s.length; _e66 += 1) {
              i.trigger(s[_e66]);
            }
          });
        }
      }
    };
    var K = {
      setTranslate: function setTranslate() {
        var e = this.$el,
            t = this.$wrapperEl,
            s = this.slides,
            i = this.width,
            a = this.height,
            n = this.rtlTranslate,
            r = this.size,
            o = this.params.cubeEffect,
            d = this.isHorizontal(),
            c = this.virtual && this.params.virtual.enabled;
        var p,
            u = 0;
        o.shadow && (d ? (0 === (p = t.find(".swiper-cube-shadow")).length && (p = l('<div class="swiper-cube-shadow"></div>'), t.append(p)), p.css({
          height: "".concat(i, "px")
        })) : 0 === (p = e.find(".swiper-cube-shadow")).length && (p = l('<div class="swiper-cube-shadow"></div>'), e.append(p)));

        for (var _e67 = 0; _e67 < s.length; _e67 += 1) {
          var _t43 = s.eq(_e67);

          var _i29 = _e67;
          c && (_i29 = parseInt(_t43.attr("data-swiper-slide-index"), 10));

          var _a19 = 90 * _i29,
              _p3 = Math.floor(_a19 / 360);

          n && (_a19 = -_a19, _p3 = Math.floor(-_a19 / 360));

          var _h2 = Math.max(Math.min(_t43[0].progress, 1), -1);

          var _m = 0,
              _f = 0,
              _g = 0;
          _i29 % 4 == 0 ? (_m = 4 * -_p3 * r, _g = 0) : (_i29 - 1) % 4 == 0 ? (_m = 0, _g = 4 * -_p3 * r) : (_i29 - 2) % 4 == 0 ? (_m = r + 4 * _p3 * r, _g = r) : (_i29 - 3) % 4 == 0 && (_m = -r, _g = 3 * r + 4 * r * _p3), n && (_m = -_m), d || (_f = _m, _m = 0);

          var _v = "rotateX(".concat(d ? 0 : -_a19, "deg) rotateY(").concat(d ? _a19 : 0, "deg) translate3d(").concat(_m, "px, ").concat(_f, "px, ").concat(_g, "px)");

          if (_h2 <= 1 && _h2 > -1 && (u = 90 * _i29 + 90 * _h2, n && (u = 90 * -_i29 - 90 * _h2)), _t43.transform(_v), o.slideShadows) {
            var _e68 = d ? _t43.find(".swiper-slide-shadow-left") : _t43.find(".swiper-slide-shadow-top"),
                _s45 = d ? _t43.find(".swiper-slide-shadow-right") : _t43.find(".swiper-slide-shadow-bottom");

            0 === _e68.length && (_e68 = l("<div class=\"swiper-slide-shadow-".concat(d ? "left" : "top", "\"></div>")), _t43.append(_e68)), 0 === _s45.length && (_s45 = l("<div class=\"swiper-slide-shadow-".concat(d ? "right" : "bottom", "\"></div>")), _t43.append(_s45)), _e68.length && (_e68[0].style.opacity = Math.max(-_h2, 0)), _s45.length && (_s45[0].style.opacity = Math.max(_h2, 0));
          }
        }

        if (t.css({
          "-webkit-transform-origin": "50% 50% -".concat(r / 2, "px"),
          "-moz-transform-origin": "50% 50% -".concat(r / 2, "px"),
          "-ms-transform-origin": "50% 50% -".concat(r / 2, "px"),
          "transform-origin": "50% 50% -".concat(r / 2, "px")
        }), o.shadow) if (d) p.transform("translate3d(0px, ".concat(i / 2 + o.shadowOffset, "px, ").concat(-i / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(o.shadowScale, ")"));else {
          var _e69 = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              _t44 = 1.5 - (Math.sin(2 * _e69 * Math.PI / 360) / 2 + Math.cos(2 * _e69 * Math.PI / 360) / 2),
              _s46 = o.shadowScale,
              _i30 = o.shadowScale / _t44,
              _n16 = o.shadowOffset;

          p.transform("scale3d(".concat(_s46, ", 1, ").concat(_i30, ") translate3d(0px, ").concat(a / 2 + _n16, "px, ").concat(-a / 2 / _i30, "px) rotateX(-90deg)"));
        }
        var m = h.isSafari || h.isUiWebView ? -r / 2 : 0;
        t.transform("translate3d(0px,0,".concat(m, "px) rotateX(").concat(this.isHorizontal() ? 0 : u, "deg) rotateY(").concat(this.isHorizontal() ? -u : 0, "deg)"));
      },
      setTransition: function setTransition(e) {
        var t = this.$el,
            s = this.slides;
        s.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
      }
    };
    var Z = {
      setTranslate: function setTranslate() {
        var e = this,
            t = e.slides,
            s = e.rtlTranslate;

        for (var _i31 = 0; _i31 < t.length; _i31 += 1) {
          var _a20 = t.eq(_i31);

          var _n17 = _a20[0].progress;
          e.params.flipEffect.limitRotation && (_n17 = Math.max(Math.min(_a20[0].progress, 1), -1));

          var _r17 = -180 * _n17,
              _o5 = 0,
              _d5 = -_a20[0].swiperSlideOffset,
              _c = 0;

          if (e.isHorizontal() ? s && (_r17 = -_r17) : (_c = _d5, _d5 = 0, _o5 = -_r17, _r17 = 0), _a20[0].style.zIndex = -Math.abs(Math.round(_n17)) + t.length, e.params.flipEffect.slideShadows) {
            var _t45 = e.isHorizontal() ? _a20.find(".swiper-slide-shadow-left") : _a20.find(".swiper-slide-shadow-top"),
                _s47 = e.isHorizontal() ? _a20.find(".swiper-slide-shadow-right") : _a20.find(".swiper-slide-shadow-bottom");

            0 === _t45.length && (_t45 = l("<div class=\"swiper-slide-shadow-".concat(e.isHorizontal() ? "left" : "top", "\"></div>")), _a20.append(_t45)), 0 === _s47.length && (_s47 = l("<div class=\"swiper-slide-shadow-".concat(e.isHorizontal() ? "right" : "bottom", "\"></div>")), _a20.append(_s47)), _t45.length && (_t45[0].style.opacity = Math.max(-_n17, 0)), _s47.length && (_s47[0].style.opacity = Math.max(_n17, 0));
          }

          _a20.transform("translate3d(".concat(_d5, "px, ").concat(_c, "px, 0px) rotateX(").concat(_o5, "deg) rotateY(").concat(_r17, "deg)"));
        }
      },
      setTransition: function setTransition(e) {
        var t = this,
            s = t.slides,
            i = t.activeIndex,
            a = t.$wrapperEl;

        if (s.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
          var _e70 = !1;

          s.eq(i).transitionEnd(function () {
            if (_e70) return;
            if (!t || t.destroyed) return;
            _e70 = !0, t.animating = !1;
            var s = ["webkitTransitionEnd", "transitionend"];

            for (var _e71 = 0; _e71 < s.length; _e71 += 1) {
              a.trigger(s[_e71]);
            }
          });
        }
      }
    };
    var Q = {
      setTranslate: function setTranslate() {
        var e = this.width,
            t = this.height,
            s = this.slides,
            i = this.$wrapperEl,
            a = this.slidesSizesGrid,
            n = this.params.coverflowEffect,
            r = this.isHorizontal(),
            o = this.translate,
            d = r ? e / 2 - o : t / 2 - o,
            c = r ? n.rotate : -n.rotate,
            h = n.depth;

        for (var _e72 = 0, _t46 = s.length; _e72 < _t46; _e72 += 1) {
          var _t47 = s.eq(_e72),
              _i32 = a[_e72],
              _o6 = (d - _t47[0].swiperSlideOffset - _i32 / 2) / _i32 * n.modifier;

          var _p4 = r ? c * _o6 : 0,
              _u3 = r ? 0 : c * _o6,
              _m2 = -h * Math.abs(_o6),
              _f2 = r ? 0 : n.stretch * _o6,
              _g2 = r ? n.stretch * _o6 : 0;

          Math.abs(_g2) < .001 && (_g2 = 0), Math.abs(_f2) < .001 && (_f2 = 0), Math.abs(_m2) < .001 && (_m2 = 0), Math.abs(_p4) < .001 && (_p4 = 0), Math.abs(_u3) < .001 && (_u3 = 0);

          var _v2 = "translate3d(".concat(_g2, "px,").concat(_f2, "px,").concat(_m2, "px)  rotateX(").concat(_u3, "deg) rotateY(").concat(_p4, "deg)");

          if (_t47.transform(_v2), _t47[0].style.zIndex = 1 - Math.abs(Math.round(_o6)), n.slideShadows) {
            var _e73 = r ? _t47.find(".swiper-slide-shadow-left") : _t47.find(".swiper-slide-shadow-top"),
                _s48 = r ? _t47.find(".swiper-slide-shadow-right") : _t47.find(".swiper-slide-shadow-bottom");

            0 === _e73.length && (_e73 = l("<div class=\"swiper-slide-shadow-".concat(r ? "left" : "top", "\"></div>")), _t47.append(_e73)), 0 === _s48.length && (_s48 = l("<div class=\"swiper-slide-shadow-".concat(r ? "right" : "bottom", "\"></div>")), _t47.append(_s48)), _e73.length && (_e73[0].style.opacity = _o6 > 0 ? _o6 : 0), _s48.length && (_s48[0].style.opacity = -_o6 > 0 ? -_o6 : 0);
          }
        }

        if (p.pointerEvents || p.prefixedPointerEvents) {
          i[0].style.perspectiveOrigin = "".concat(d, "px 50%");
        }
      },
      setTransition: function setTransition(e) {
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
      }
    };
    var J = {
      init: function init() {
        var e = this,
            t = e.params.thumbs,
            s = e.constructor;
        t.swiper instanceof s ? (e.thumbs.swiper = t.swiper, c.extend(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), c.extend(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })) : c.isObject(t.swiper) && (e.thumbs.swiper = new s(c.extend({}, t.swiper, {
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
      },
      onThumbClick: function onThumbClick() {
        var e = this,
            t = e.thumbs.swiper;
        if (!t) return;
        var s = t.clickedIndex,
            i = t.clickedSlide;
        if (i && l(i).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
        if (null == s) return;
        var a;

        if (a = t.params.loop ? parseInt(l(t.clickedSlide).attr("data-swiper-slide-index"), 10) : s, e.params.loop) {
          var _t48 = e.activeIndex;
          e.slides.eq(_t48).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, _t48 = e.activeIndex);

          var _s49 = e.slides.eq(_t48).prevAll("[data-swiper-slide-index=\"".concat(a, "\"]")).eq(0).index(),
              _i33 = e.slides.eq(_t48).nextAll("[data-swiper-slide-index=\"".concat(a, "\"]")).eq(0).index();

          a = void 0 === _s49 ? _i33 : void 0 === _i33 ? _s49 : _i33 - _t48 < _t48 - _s49 ? _i33 : _s49;
        }

        e.slideTo(a);
      },
      update: function update(e) {
        var t = this,
            s = t.thumbs.swiper;
        if (!s) return;
        var i = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;

        if (t.realIndex !== s.realIndex) {
          var _a21,
              _n18 = s.activeIndex;

          if (s.params.loop) {
            s.slides.eq(_n18).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, _n18 = s.activeIndex);

            var _e74 = s.slides.eq(_n18).prevAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index(),
                _i34 = s.slides.eq(_n18).nextAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index();

            _a21 = void 0 === _e74 ? _i34 : void 0 === _i34 ? _e74 : _i34 - _n18 == _n18 - _e74 ? _n18 : _i34 - _n18 < _n18 - _e74 ? _i34 : _e74;
          } else _a21 = t.realIndex;

          s.visibleSlidesIndexes.indexOf(_a21) < 0 && (s.params.centeredSlides ? _a21 = _a21 > _n18 ? _a21 - Math.floor(i / 2) + 1 : _a21 + Math.floor(i / 2) - 1 : _a21 > _n18 && (_a21 = _a21 - i + 1), s.slideTo(_a21, e ? 0 : void 0));
        }

        var a = 1;
        var n = t.params.thumbs.slideThumbActiveClass;
        if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (a = t.params.slidesPerView), s.slides.removeClass(n), s.params.loop) for (var _e75 = 0; _e75 < a; _e75 += 1) {
          s.$wrapperEl.children("[data-swiper-slide-index=\"".concat(t.realIndex + _e75, "\"]")).addClass(n);
        } else for (var _e76 = 0; _e76 < a; _e76 += 1) {
          s.slides.eq(t.realIndex + _e76).addClass(n);
        }
      }
    };
    var ee = [M, k, P, z, I, O, H, {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarged: "container"
        }
      },
      create: function create() {
        c.extend(this, {
          mousewheel: {
            enabled: !1,
            enable: B.enable.bind(this),
            disable: B.disable.bind(this),
            handle: B.handle.bind(this),
            handleMouseEnter: B.handleMouseEnter.bind(this),
            handleMouseLeave: B.handleMouseLeave.bind(this),
            lastScrollTime: c.now()
          }
        });
      },
      on: {
        init: function init() {
          this.params.mousewheel.enabled && this.mousewheel.enable();
        },
        destroy: function destroy() {
          this.mousewheel.enabled && this.mousewheel.disable();
        }
      }
    }, {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock"
        }
      },
      create: function create() {
        c.extend(this, {
          navigation: {
            init: N.init.bind(this),
            update: N.update.bind(this),
            destroy: N.destroy.bind(this),
            onNextClick: N.onNextClick.bind(this),
            onPrevClick: N.onPrevClick.bind(this)
          }
        });
      },
      on: {
        init: function init() {
          this.navigation.init(), this.navigation.update();
        },
        toEdge: function toEdge() {
          this.navigation.update();
        },
        fromEdge: function fromEdge() {
          this.navigation.update();
        },
        destroy: function destroy() {
          this.navigation.destroy();
        },
        click: function click(e) {
          var t = this,
              _t$navigation = t.navigation,
              s = _t$navigation.$nextEl,
              i = _t$navigation.$prevEl;

          if (t.params.navigation.hideOnClick && !l(e.target).is(i) && !l(e.target).is(s)) {
            var _e77;

            s ? _e77 = s.hasClass(t.params.navigation.hiddenClass) : i && (_e77 = i.hasClass(t.params.navigation.hiddenClass)), !0 === _e77 ? t.emit("navigationShow", t) : t.emit("navigationHide", t), s && s.toggleClass(t.params.navigation.hiddenClass), i && i.toggleClass(t.params.navigation.hiddenClass);
          }
        }
      }
    }, {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function formatFractionCurrent(e) {
            return e;
          },
          formatFractionTotal: function formatFractionTotal(e) {
            return e;
          },
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock"
        }
      },
      create: function create() {
        c.extend(this, {
          pagination: {
            init: G.init.bind(this),
            render: G.render.bind(this),
            update: G.update.bind(this),
            destroy: G.destroy.bind(this),
            dynamicBulletIndex: 0
          }
        });
      },
      on: {
        init: function init() {
          this.pagination.init(), this.pagination.render(), this.pagination.update();
        },
        activeIndexChange: function activeIndexChange() {
          var e = this;
          e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update();
        },
        snapIndexChange: function snapIndexChange() {
          var e = this;
          e.params.loop || e.pagination.update();
        },
        slidesLengthChange: function slidesLengthChange() {
          var e = this;
          e.params.loop && (e.pagination.render(), e.pagination.update());
        },
        snapGridLengthChange: function snapGridLengthChange() {
          var e = this;
          e.params.loop || (e.pagination.render(), e.pagination.update());
        },
        destroy: function destroy() {
          this.pagination.destroy();
        },
        click: function click(e) {
          var t = this;

          if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !l(e.target).hasClass(t.params.pagination.bulletClass)) {
            !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
          }
        }
      }
    }, {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag"
        }
      },
      create: function create() {
        c.extend(this, {
          scrollbar: {
            init: X.init.bind(this),
            destroy: X.destroy.bind(this),
            updateSize: X.updateSize.bind(this),
            setTranslate: X.setTranslate.bind(this),
            setTransition: X.setTransition.bind(this),
            enableDraggable: X.enableDraggable.bind(this),
            disableDraggable: X.disableDraggable.bind(this),
            setDragPosition: X.setDragPosition.bind(this),
            onDragStart: X.onDragStart.bind(this),
            onDragMove: X.onDragMove.bind(this),
            onDragEnd: X.onDragEnd.bind(this),
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }
        });
      },
      on: {
        init: function init() {
          this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
        },
        update: function update() {
          this.scrollbar.updateSize();
        },
        resize: function resize() {
          this.scrollbar.updateSize();
        },
        observerUpdate: function observerUpdate() {
          this.scrollbar.updateSize();
        },
        setTranslate: function setTranslate() {
          this.scrollbar.setTranslate();
        },
        setTransition: function setTransition(e) {
          this.scrollbar.setTransition(e);
        },
        destroy: function destroy() {
          this.scrollbar.destroy();
        }
      }
    }, {
      name: "parallax",
      params: {
        parallax: {
          enabled: !1
        }
      },
      create: function create() {
        c.extend(this, {
          parallax: {
            setTransform: Y.setTransform.bind(this),
            setTranslate: Y.setTranslate.bind(this),
            setTransition: Y.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
        },
        init: function init() {
          this.params.parallax.enabled && this.parallax.setTranslate();
        },
        setTranslate: function setTranslate() {
          this.params.parallax.enabled && this.parallax.setTranslate();
        },
        setTransition: function setTransition(e) {
          this.params.parallax.enabled && this.parallax.setTransition(e);
        }
      }
    }, {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      },
      create: function create() {
        var e = this,
            t = {
          enabled: !1,
          scale: 1,
          currentScale: 1,
          isScaling: !1,
          gesture: {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
          },
          image: {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
          },
          velocity: {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
          }
        };
        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (s) {
          t[s] = V[s].bind(e);
        }), c.extend(e, {
          zoom: t
        });
        var s = 1;
        Object.defineProperty(e.zoom, "scale", {
          get: function get() {
            return s;
          },
          set: function set(t) {
            if (s !== t) {
              var _s50 = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                  _i35 = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;

              e.emit("zoomChange", t, _s50, _i35);
            }

            s = t;
          }
        });
      },
      on: {
        init: function init() {
          var e = this;
          e.params.zoom.enabled && e.zoom.enable();
        },
        destroy: function destroy() {
          this.zoom.disable();
        },
        touchStart: function touchStart(e) {
          this.zoom.enabled && this.zoom.onTouchStart(e);
        },
        touchEnd: function touchEnd(e) {
          this.zoom.enabled && this.zoom.onTouchEnd(e);
        },
        doubleTap: function doubleTap(e) {
          var t = this;
          t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e);
        },
        transitionEnd: function transitionEnd() {
          var e = this;
          e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
        }
      }
    }, {
      name: "lazy",
      params: {
        lazy: {
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      },
      create: function create() {
        c.extend(this, {
          lazy: {
            initialImageLoaded: !1,
            load: F.load.bind(this),
            loadInSlide: F.loadInSlide.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var e = this;
          e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
        },
        init: function init() {
          var e = this;
          e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
        },
        scroll: function scroll() {
          var e = this;
          e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
        },
        resize: function resize() {
          var e = this;
          e.params.lazy.enabled && e.lazy.load();
        },
        scrollbarDragMove: function scrollbarDragMove() {
          var e = this;
          e.params.lazy.enabled && e.lazy.load();
        },
        transitionStart: function transitionStart() {
          var e = this;
          e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
        },
        transitionEnd: function transitionEnd() {
          var e = this;
          e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
        }
      }
    }, {
      name: "controller",
      params: {
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      },
      create: function create() {
        c.extend(this, {
          controller: {
            control: this.params.controller.control,
            getInterpolateFunction: q.getInterpolateFunction.bind(this),
            setTranslate: q.setTranslate.bind(this),
            setTransition: q.setTransition.bind(this)
          }
        });
      },
      on: {
        update: function update() {
          var e = this;
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        resize: function resize() {
          var e = this;
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        observerUpdate: function observerUpdate() {
          var e = this;
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        setTranslate: function setTranslate(e, t) {
          this.controller.control && this.controller.setTranslate(e, t);
        },
        setTransition: function setTransition(e, t) {
          this.controller.control && this.controller.setTransition(e, t);
        }
      }
    }, {
      name: "a11y",
      params: {
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}"
        }
      },
      create: function create() {
        var e = this;
        c.extend(e, {
          a11y: {
            liveRegion: l("<span class=\"".concat(e.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"))
          }
        }), Object.keys(R).forEach(function (t) {
          e.a11y[t] = R[t].bind(e);
        });
      },
      on: {
        init: function init() {
          this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
        },
        toEdge: function toEdge() {
          this.params.a11y.enabled && this.a11y.updateNavigation();
        },
        fromEdge: function fromEdge() {
          this.params.a11y.enabled && this.a11y.updateNavigation();
        },
        paginationUpdate: function paginationUpdate() {
          this.params.a11y.enabled && this.a11y.updatePagination();
        },
        destroy: function destroy() {
          this.params.a11y.enabled && this.a11y.destroy();
        }
      }
    }, {
      name: "history",
      params: {
        history: {
          enabled: !1,
          replaceState: !1,
          key: "slides"
        }
      },
      create: function create() {
        c.extend(this, {
          history: {
            init: W.init.bind(this),
            setHistory: W.setHistory.bind(this),
            setHistoryPopState: W.setHistoryPopState.bind(this),
            scrollToSlide: W.scrollToSlide.bind(this),
            destroy: W.destroy.bind(this)
          }
        });
      },
      on: {
        init: function init() {
          var e = this;
          e.params.history.enabled && e.history.init();
        },
        destroy: function destroy() {
          var e = this;
          e.params.history.enabled && e.history.destroy();
        },
        transitionEnd: function transitionEnd() {
          var e = this;
          e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
        }
      }
    }, {
      name: "hash-navigation",
      params: {
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      },
      create: function create() {
        c.extend(this, {
          hashNavigation: {
            initialized: !1,
            init: j.init.bind(this),
            destroy: j.destroy.bind(this),
            setHash: j.setHash.bind(this),
            onHashCange: j.onHashCange.bind(this)
          }
        });
      },
      on: {
        init: function init() {
          var e = this;
          e.params.hashNavigation.enabled && e.hashNavigation.init();
        },
        destroy: function destroy() {
          var e = this;
          e.params.hashNavigation.enabled && e.hashNavigation.destroy();
        },
        transitionEnd: function transitionEnd() {
          var e = this;
          e.hashNavigation.initialized && e.hashNavigation.setHash();
        }
      }
    }, {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1
        }
      },
      create: function create() {
        var e = this;
        c.extend(e, {
          autoplay: {
            running: !1,
            paused: !1,
            run: _.run.bind(e),
            start: _.start.bind(e),
            stop: _.stop.bind(e),
            pause: _.pause.bind(e),
            onTransitionEnd: function onTransitionEnd(t) {
              e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
            }
          }
        });
      },
      on: {
        init: function init() {
          var e = this;
          e.params.autoplay.enabled && e.autoplay.start();
        },
        beforeTransitionStart: function beforeTransitionStart(e, t) {
          var s = this;
          s.autoplay.running && (t || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(e) : s.autoplay.stop());
        },
        sliderFirstMove: function sliderFirstMove() {
          var e = this;
          e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
        },
        destroy: function destroy() {
          var e = this;
          e.autoplay.running && e.autoplay.stop();
        }
      }
    }, {
      name: "effect-fade",
      params: {
        fadeEffect: {
          crossFade: !1
        }
      },
      create: function create() {
        c.extend(this, {
          fadeEffect: {
            setTranslate: U.setTranslate.bind(this),
            setTransition: U.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          if ("fade" !== this.params.effect) return;
          this.classNames.push("".concat(this.params.containerModifierClass, "fade"));
          var e = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          c.extend(this.params, e), c.extend(this.originalParams, e);
        },
        setTranslate: function setTranslate() {
          "fade" === this.params.effect && this.fadeEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "fade" === this.params.effect && this.fadeEffect.setTransition(e);
        }
      }
    }, {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      },
      create: function create() {
        c.extend(this, {
          cubeEffect: {
            setTranslate: K.setTranslate.bind(this),
            setTransition: K.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          if ("cube" !== this.params.effect) return;
          this.classNames.push("".concat(this.params.containerModifierClass, "cube")), this.classNames.push("".concat(this.params.containerModifierClass, "3d"));
          var e = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
          };
          c.extend(this.params, e), c.extend(this.originalParams, e);
        },
        setTranslate: function setTranslate() {
          "cube" === this.params.effect && this.cubeEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "cube" === this.params.effect && this.cubeEffect.setTransition(e);
        }
      }
    }, {
      name: "effect-flip",
      params: {
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      },
      create: function create() {
        c.extend(this, {
          flipEffect: {
            setTranslate: Z.setTranslate.bind(this),
            setTransition: Z.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          if ("flip" !== this.params.effect) return;
          this.classNames.push("".concat(this.params.containerModifierClass, "flip")), this.classNames.push("".concat(this.params.containerModifierClass, "3d"));
          var e = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          c.extend(this.params, e), c.extend(this.originalParams, e);
        },
        setTranslate: function setTranslate() {
          "flip" === this.params.effect && this.flipEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "flip" === this.params.effect && this.flipEffect.setTransition(e);
        }
      }
    }, {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: !0
        }
      },
      create: function create() {
        c.extend(this, {
          coverflowEffect: {
            setTranslate: Q.setTranslate.bind(this),
            setTransition: Q.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          "coverflow" === this.params.effect && (this.classNames.push("".concat(this.params.containerModifierClass, "coverflow")), this.classNames.push("".concat(this.params.containerModifierClass, "3d")), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
        },
        setTranslate: function setTranslate() {
          "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
        }
      }
    }, {
      name: "thumbs",
      params: {
        thumbs: {
          swiper: null,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-container-thumbs"
        }
      },
      create: function create() {
        c.extend(this, {
          thumbs: {
            swiper: null,
            init: J.init.bind(this),
            update: J.update.bind(this),
            onThumbClick: J.onThumbClick.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var e = this.params.thumbs;
          e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
        },
        slideChange: function slideChange() {
          this.thumbs.swiper && this.thumbs.update();
        },
        update: function update() {
          this.thumbs.swiper && this.thumbs.update();
        },
        resize: function resize() {
          this.thumbs.swiper && this.thumbs.update();
        },
        observerUpdate: function observerUpdate() {
          this.thumbs.swiper && this.thumbs.update();
        },
        setTransition: function setTransition(e) {
          var t = this.thumbs.swiper;
          t && t.setTransition(e);
        },
        beforeDestroy: function beforeDestroy() {
          var e = this.thumbs.swiper;
          e && this.thumbs.swiperCreated && e && e.destroy();
        }
      }
    }];
    void 0 === $.use && ($.use = $.Class.use, $.installModule = $.Class.installModule), $.use(ee);
    var te = $;
    window.addEventListener("load", function () {
      !function () {
        var e = _toConsumableArray(document.querySelectorAll(".l-Container")),
            t = _toConsumableArray(document.querySelectorAll("p"));

        e.forEach(function (e) {
          0 == e.children.length && e.remove();
        }), t.forEach(function (e) {
          0 == e.childNodes.length && e.remove();
        });
      }();

      var e = {
        addClass: function addClass(e, t) {
          t.classList.add(e);
        },
        removeClass: function removeClass(e, t) {
          t.classList.remove(e);
        },
        toggleClass: function toggleClass(e, t) {
          t.classList.toggle(e);
        },
        containClass: function containClass(e, t) {
          return t.classList.contains(e);
        }
      },
          t = function () {
        var t = document.querySelector(".l-header"),
            s = document.querySelector(".c-navigation__mobile"),
            i = {
          close: document.querySelector(".c-navigation__close"),
          open: document.querySelector(".c-hamburger")
        };
        return {
          mobileList: function mobileList() {
            t && s && function (t, s) {
              var i = s.close;
              s.open.addEventListener("click", function () {
                e.containClass("c-navigation--mobactive", t) ? e.removeClass("c-navigation--mobactive", t) : e.addClass("c-navigation--mobactive", t);
              }), i.addEventListener("click", function () {
                e.removeClass("c-navigation--mobactive", t);
              });
            }(s, i);
          },
          header_scroll: function header_scroll() {
            t && function (t) {
              var s = _toConsumableArray(document.querySelectorAll(".header__triger")),
                  i = 0 - (window.innerHeight - t.offsetHeight - 50),
                  a = new IntersectionObserver(function (s) {
                s.forEach(function (s) {
                  var i = s.isIntersecting;
                  i ? e.addClass("l-header--active", t) : e.removeClass("l-header--active", t);
                });
              }, {
                threshold: [0],
                rootMargin: "0px 0px ".concat(i, "px 0px")
              });

              s.forEach(function (e) {
                a.observe(e);
              });
            }(t);
          }
        };
      }(),
          s = function () {
        return {
          infinityScroll: function infinityScroll(e) {
            !function (e) {
              var t = document.querySelector(e.container),
                  s = t ? _toConsumableArray(t.children) : null;
              var i = [];
              s && (t.innerHTML = "", a(), window.addEventListener("scroll", function (e) {
                var i = 0 - (t.getBoundingClientRect().top - this.innerHeight);
                i > t.offsetHeight && s.length > 0 && a();
              }));

              function a() {
                i = s.slice(0, 9), s.splice(0, 9), i.forEach(function (e) {
                  t.appendChild(e);
                });
              }
            }(e);
          }
        };
      }();

      new t.mobileList(), new s.infinityScroll({
        container: ".infinity-scroll"
      }), new t.header_scroll();
      new i("[data-fullpage]", {
        buttons: "[data-fullpage-to]"
      });

      _toConsumableArray(document.querySelectorAll("[data-module-gallery-normal]")).forEach(function (e) {
        var t = e.querySelector("[data-gallery-normal-swiper]");
        new te(t, {
          direction: "horizontal",
          loop: "true",
          slidesPerView: 2,
          spaceBetween: 32
        });
      });
    });
  }
});