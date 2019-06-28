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

  function l(i) {
    if (t[i]) return t[i].exports;
    var o = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(o.exports, o, o.exports, l), o.l = !0, o.exports;
  }

  l.m = e, l.c = t, l.d = function (e, t, i) {
    l.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
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
    var i = Object.create(null);
    if (l.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      l.d(i, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return i;
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
        }, this.fullpage.children = this.fullpage.container.children, this.init();
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

      return i;
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
            i = {
          close: document.querySelector(".c-navigation__close"),
          open: document.querySelector(".c-hamburger")
        };
        return {
          mobileList: function mobileList() {
            t && l && function (t, l) {
              var i = l.close;
              l.open.addEventListener("click", function () {
                e.containClass("c-navigation--mobactive", t) ? e.removeClass("c-navigation--mobactive", t) : e.addClass("c-navigation--mobactive", t);
              }), i.addEventListener("click", function () {
                e.removeClass("c-navigation--mobactive", t);
              });
            }(l, i);
          },
          header_scroll: function header_scroll() {
            t && function (t) {
              var l = _toConsumableArray(document.querySelectorAll(".header__triger")),
                  i = 0 - (window.innerHeight - t.offsetHeight - 50),
                  o = new IntersectionObserver(function (l) {
                l.forEach(function (l) {
                  var i = l.isIntersecting;
                  i ? e.addClass("l-header--active", t) : e.removeClass("l-header--active", t);
                });
              }, {
                threshold: [0],
                rootMargin: "0px 0px ".concat(i, "px 0px")
              });

              l.forEach(function (e) {
                o.observe(e);
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
                  i = _toConsumableArray(document.querySelectorAll(".".concat(t.slider_cards))),
                  o = document.querySelector(".".concat(t.slider_pagination)),
                  n = {
                pag_active: t.classes.pag_active,
                card_active: t.classes.card_active,
                pagination_el: t.classes.pagination_el,
                extra: t.classes.extra
              },
                  s = "" !== t.slider_has_back;

              if (l) {
                i.forEach(function (i, a) {
                  var r = i,
                      c = r.dataset.title,
                      u = r.dataset.name,
                      d = "";
                  e.removeClass(n.card_active, r), s && (d = r.querySelector(".".concat(t.slider_has_back)).dataset.back, s = !0), 0 == a && (e.addClass(n.card_active, r), s && (l.style.backgroundImage = "url(".concat(d, ")"))), function (t, l, i, o, n, s) {
                    var a = document.createElement("li"),
                        r = "";
                    e.addClass(n.pagination_el, a), a.className += " ".concat(n.extra), 0 == o && e.addClass(n.pag_active, a), a.dataset.name = l, "" != s ? (r = document.createElement(s.wrapper), "" != s.classes && (r.className += s.classes), r.textContent = i, a.appendChild(r)) : a.textContent = i;
                    t.appendChild(a);
                  }(o, u, c, a, n, t.pagination_wrap);
                });

                var a = _toConsumableArray(o.children);

                a.forEach(function (o) {
                  var r = o,
                      c = r.dataset.name,
                      u = i.find(function (e) {
                    if (e.dataset.name == c) return e;
                  }),
                      d = "";
                  s && (d = u.querySelector(".".concat(t.slider_has_back)).dataset.back), r.addEventListener("click", function () {
                    i.map(function (t) {
                      e.removeClass(n.card_active, t);
                    }), a.map(function (t) {
                      e.removeClass(n.pag_active, t);
                    }), e.addClass(n.card_active, u), e.addClass(n.pag_active, r), s && (l.style.backgroundImage = "url(".concat(d, ")"));
                  });
                });
              }
            }(t);
          }
        };
      }(),
          o = function () {
        return {
          infinityScroll: function infinityScroll(e) {
            !function (e) {
              var t = document.querySelector(e.container),
                  l = t ? _toConsumableArray(t.children) : null;
              var i = [];
              l && (t.innerHTML = "", o(), window.addEventListener("scroll", function (e) {
                var i = 0 - (t.getBoundingClientRect().top - this.innerHeight);
                i > t.offsetHeight && l.length > 0 && o();
              }));

              function o() {
                i = l.slice(0, 9), l.splice(0, 9), i.forEach(function (e) {
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
      }, 500), new t.mobileList(), new o.infinityScroll({
        container: ".infinity-scroll"
      }), new t.header_scroll();
      new (
      /*#__PURE__*/
      function () {
        function _class(e) {
          _classCallCheck(this, _class);

          this.elements = document.querySelectorAll(".".concat(e.element.container)) ? _toConsumableArray(document.querySelectorAll(".".concat(e.element.container))) : null, this.activeElement = e.element.active, this.video = e.video, this.controls = e.controls, this.currentTime = 1, this.currentVolume = .1, this.last, this.elements && this.init();
        }

        _createClass(_class, [{
          key: "init",
          value: function init() {
            var _this5 = this;

            this.elements.forEach(function (e) {
              var t = e.querySelector(".".concat(_this5.video, " video")),
                  l = t.dataset.src,
                  i = e.querySelector(".".concat(_this5.controls.container)),
                  o = i.querySelector(".".concat(_this5.controls.play)),
                  n = i.querySelector(".".concat(_this5.controls.stop.el));
              _this5.installCurrentTime(t), t.volume = _this5.currentVolume, _this5.onPlay(o, t, l, n, e), _this5.onStop(t, n, e);
            });
          }
        }, {
          key: "onStop",
          value: function onStop(e, t, l) {
            var _this6 = this;

            t.addEventListener("click", function () {
              _this6.last = void 0, l.classList.remove(_this6.activeElement), setTimeout(function () {
                e.pause(), t.classList.remove(_this6.controls.stop.active), _this6.installCurrentTime(e), l.querySelector(".filter-back").classList.remove("fade");
              }, 500);
            });
          }
        }, {
          key: "onPlay",
          value: function onPlay(e, t, l, i, o) {
            var _this7 = this;

            e.addEventListener("click", function () {
              void 0 !== _this7.last && (_this7.last.querySelector("video").pause(), _this7.installCurrentTime(_this7.last.querySelector("video")), _this7.last.classList.remove(_this7.activeElement), _this7.last.querySelector(".".concat(_this7.controls.stop.el)).classList.remove(_this7.controls.stop.active)), _this7.installCurrentTime(t), o.classList.add(_this7.activeElement), _this7.last = o, t.querySelector('source[type="video/mp4"]').src = l, setTimeout(function () {
                window.scrollTo({
                  top: o.getBoundingClientRect().top + window.scrollY
                }), t.load(), t.play(), i.classList.add(_this7.controls.stop.active), o.querySelector(".filter-back").classList.add("fade");
              }, 500);
            });
          }
        }, {
          key: "installCurrentTime",
          value: function installCurrentTime(e) {
            e.currentTime = this.currentTime;
          }
        }]);

        return _class;
      }())({
        element: {
          container: "block-videogallery__element",
          active: "block-videogallery__element--active"
        },
        video: "block-videogallery__video",
        controls: {
          container: "block-videogallery__controls",
          play: "video-controls__play",
          stop: {
            el: "video-controls__stop",
            active: "video-controls__stop--active"
          }
        }
      }), new i("[data-fullpage]", {
        buttons: "[data-fullpage-to]"
      });
    });
  }
});