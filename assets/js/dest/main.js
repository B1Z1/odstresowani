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

  function l(n) {
    if (t[n]) return t[n].exports;
    var i = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(i.exports, i, i.exports, l), i.l = !0, i.exports;
  }

  l.m = e, l.c = t, l.d = function (e, t, n) {
    l.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, l.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, t) {
    if (1 & t && (e = l(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (l.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) {
      l.d(n, i, function (t) {
        return e[t];
      }.bind(null, i));
    }
    return n;
  }, l.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(t, "a", t), t;
  }, l.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, l.p = "", l(l.s = 2);
}({
  2: function _(e, t, l) {
    "use strict";

    l.r(t);

    var n =
    /*#__PURE__*/
    function () {
      function n(e, t) {
        _classCallCheck(this, n);

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

      _createClass(n, [{
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
                _l = _t.detail ? 120 * _t.detail : _t.deltaY;

            this.removeActiveClass(), _l > 0 && this.fullpage.current < this.fullpage.children.length - 1 ? this.fullpage.current++ : _l < 0 && this.fullpage.current > 0 && this.fullpage.current--, this.addActiveClass(), this.scrollToActive();
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
                l = Number(t.dataset.fullpageTo);
            t.addEventListener("click", function (e) {
              _this4.fullpage.current = l, _this4.addActiveClass(), _this4.scrollToActive();
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

      return n;
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
            l = document.querySelector(".c-navigation__mobile"),
            n = {
          close: document.querySelector(".c-navigation__close"),
          open: document.querySelector(".c-hamburger")
        };
        return {
          mobileList: function mobileList() {
            t && l && function (t, l) {
              var n = l.close;
              l.open.addEventListener("click", function () {
                e.containClass("c-navigation--mobactive", t) ? e.removeClass("c-navigation--mobactive", t) : e.addClass("c-navigation--mobactive", t);
              }), n.addEventListener("click", function () {
                e.removeClass("c-navigation--mobactive", t);
              });
            }(l, n);
          },
          header_scroll: function header_scroll() {
            t && function (t) {
              var l = _toConsumableArray(document.querySelectorAll(".header__triger")),
                  n = 0 - (window.innerHeight - t.offsetHeight - 50),
                  i = new IntersectionObserver(function (l) {
                l.forEach(function (l) {
                  var n = l.isIntersecting;
                  n ? e.addClass("l-header--active", t) : e.removeClass("l-header--active", t);
                });
              }, {
                threshold: [0],
                rootMargin: "0px 0px ".concat(n, "px 0px")
              });

              l.forEach(function (e) {
                i.observe(e);
              });
            }(t);
          }
        };
      }(),
          l = function () {
        return {
          init: function init(t) {
            !function (t) {
              var l = document.querySelector(".".concat(t.slider_block)),
                  n = _toConsumableArray(document.querySelectorAll(".".concat(t.slider_cards))),
                  i = document.querySelector(".".concat(t.slider_pagination)),
                  a = {
                pag_active: t.classes.pag_active,
                card_active: t.classes.card_active,
                pagination_el: t.classes.pagination_el,
                extra: t.classes.extra
              },
                  o = "" !== t.slider_has_back;

              if (l) {
                n.forEach(function (n, s) {
                  var r = n,
                      c = r.dataset.title,
                      u = r.dataset.name,
                      d = "";
                  e.removeClass(a.card_active, r), o && (d = r.querySelector(".".concat(t.slider_has_back)).dataset.back, o = !0), 0 == s && (e.addClass(a.card_active, r), o && (l.style.backgroundImage = "url(".concat(d, ")"))), function (t, l, n, i, a, o) {
                    var s = document.createElement("li"),
                        r = "";
                    e.addClass(a.pagination_el, s), s.className += " ".concat(a.extra), 0 == i && e.addClass(a.pag_active, s), s.dataset.name = l, "" != o ? (r = document.createElement(o.wrapper), "" != o.classes && (r.className += o.classes), r.textContent = n, s.appendChild(r)) : s.textContent = n;
                    t.appendChild(s);
                  }(i, u, c, s, a, t.pagination_wrap);
                });

                var s = _toConsumableArray(i.children);

                s.forEach(function (i) {
                  var r = i,
                      c = r.dataset.name,
                      u = n.find(function (e) {
                    if (e.dataset.name == c) return e;
                  }),
                      d = "";
                  o && (d = u.querySelector(".".concat(t.slider_has_back)).dataset.back), r.addEventListener("click", function () {
                    n.map(function (t) {
                      e.removeClass(a.card_active, t);
                    }), s.map(function (t) {
                      e.removeClass(a.pag_active, t);
                    }), e.addClass(a.card_active, u), e.addClass(a.pag_active, r), o && (l.style.backgroundImage = "url(".concat(d, ")"));
                  });
                });
              }
            }(t);
          }
        };
      }(),
          i = function () {
        return {
          infinityScroll: function infinityScroll(e) {
            !function (e) {
              var t = document.querySelector(e.container),
                  l = t ? _toConsumableArray(t.children) : null;
              var n = [];
              l && (t.innerHTML = "", i(), window.addEventListener("scroll", function (e) {
                var n = 0 - (t.getBoundingClientRect().top - this.innerHeight);
                n > t.offsetHeight && l.length > 0 && i();
              }));

              function i() {
                n = l.slice(0, 9), l.splice(0, 9), n.forEach(function (e) {
                  t.appendChild(e);
                });
              }
            }(e);
          }
        };
      }();

      setTimeout(function () {
        new l.init({
          slider_block: "m-TabGallery",
          slider_cards: "m-TabGallery__slider",
          slider_pagination: "m-TabGallery__navigation",
          slider_has_back: "",
          pagination_wrap: {
            wrapper: "h3",
            classes: "reset"
          },
          classes: {
            pag_active: "m-TabGallery__navigation--active",
            card_active: "m-TabGallery__slider--active",
            pagination_el: "m-TabGallery__navigation__element",
            extra: "ml16 mr16"
          }
        });
      }, 500), new t.mobileList(), new i.infinityScroll({
        container: ".infinity-scroll"
      }), new t.header_scroll();
      new n("[data-fullpage]", {
        buttons: "[data-fullpage-to]"
      });
    });
  }
});