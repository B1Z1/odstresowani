"use strict";

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

  function n(l) {
    if (t[l]) return t[l].exports;
    var o = t[l] = {
      i: l,
      l: !1,
      exports: {}
    };
    return e[l].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, l) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: l
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var l = Object.create(null);
    if (n.r(l), Object.defineProperty(l, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(l, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return l;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 2);
}({
  2: function _(e, t, n) {
    "use strict";

    n.r(t);

    var l =
    /*#__PURE__*/
    function () {
      function l(e, t) {
        _classCallCheck(this, l);

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
        }, this.fullpage.children = this.fullpage.container.children, this.init();
      }

      _createClass(l, [{
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
                _n = _t.detail ? 120 * _t.detail : _t.deltaY;

            this.removeActiveClass(), _n > 0 && this.fullpage.current < this.fullpage.children.length - 1 ? this.fullpage.current++ : _n < 0 && this.fullpage.current > 0 && this.fullpage.current--, this.addActiveClass(), this.scrollToActive();
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
                n = Number(t.dataset.fullpageTo);
            t.addEventListener("click", function (e) {
              _this4.fullpage.current = n, _this4.addActiveClass(), _this4.scrollToActive();
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

      return l;
    }();

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
            n = document.querySelector(".c-navigation__mobile"),
            l = {
          close: document.querySelector(".c-navigation__close"),
          open: document.querySelector(".c-hamburger")
        };
        return {
          mobileList: function mobileList() {
            t && n && function (t, n) {
              var l = n.close;
              n.open.addEventListener("click", function () {
                e.containClass("c-navigation--mobactive", t) ? e.removeClass("c-navigation--mobactive", t) : e.addClass("c-navigation--mobactive", t);
              }), l.addEventListener("click", function () {
                e.removeClass("c-navigation--mobactive", t);
              });
            }(n, l);
          },
          header_scroll: function header_scroll() {
            t && function (t) {
              var n = _toConsumableArray(document.querySelectorAll(".header__triger")),
                  l = 0 - (window.innerHeight - t.offsetHeight - 50),
                  o = new IntersectionObserver(function (n) {
                n.forEach(function (n) {
                  var l = n.isIntersecting;
                  l ? e.addClass("l-header--active", t) : e.removeClass("l-header--active", t);
                });
              }, {
                threshold: [0],
                rootMargin: "0px 0px ".concat(l, "px 0px")
              });

              n.forEach(function (e) {
                o.observe(e);
              });
            }(t);
          }
        };
      }(),
          n = function () {
        return {
          infinityScroll: function infinityScroll(e) {
            !function (e) {
              var t = document.querySelector(e.container),
                  n = t ? _toConsumableArray(t.children) : null;
              var l = [];
              n && (t.innerHTML = "", o(), window.addEventListener("scroll", function (e) {
                var l = 0 - (t.getBoundingClientRect().top - this.innerHeight);
                l > t.offsetHeight && n.length > 0 && o();
              }));

              function o() {
                l = n.slice(0, 9), n.splice(0, 9), l.forEach(function (e) {
                  t.appendChild(e);
                });
              }
            }(e);
          }
        };
      }();

      new t.mobileList(), new n.infinityScroll({
        container: ".infinity-scroll"
      }), new t.header_scroll();
      new l("[data-fullpage]", {
        buttons: "[data-fullpage-to]"
      });
    });
  }
});