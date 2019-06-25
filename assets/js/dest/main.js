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

  function i(l) {
    if (t[l]) return t[l].exports;
    var s = t[l] = {
      i: l,
      l: !1,
      exports: {}
    };
    return e[l].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
  }

  i.m = e, i.c = t, i.d = function (e, t, l) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: l
    });
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var l = Object.create(null);
    if (i.r(l), Object.defineProperty(l, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var s in e) {
      i.d(l, s, function (t) {
        return e[t];
      }.bind(null, s));
    }
    return l;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "", i(i.s = 2);
}({
  2: function _(e, t, i) {
    "use strict";

    i.r(t);

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
                _i = _t.detail ? 120 * _t.detail : _t.deltaY;

            this.removeActiveClass(), _i > 0 && this.fullpage.current < this.fullpage.children.length - 1 ? this.fullpage.current++ : _i < 0 && this.fullpage.current > 0 && this.fullpage.current--, this.addActiveClass(), this.scrollToActive();
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
                i = Number(t.dataset.fullpageTo);
            t.addEventListener("click", function (e) {
              _this4.fullpage.current = i, _this4.addActiveClass(), _this4.scrollToActive();
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
        var e = _toConsumableArray(document.querySelectorAll(".c-container")),
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
            i = document.querySelector(".c-navigation__mobile"),
            l = {
          close: document.querySelector(".c-navigation__close"),
          open: document.querySelector(".c-hamburger")
        };
        return {
          mobileList: function mobileList() {
            t && i && function (t, i) {
              var l = i.close;
              i.open.addEventListener("click", function () {
                e.containClass("c-navigation--mobactive", t) ? e.removeClass("c-navigation--mobactive", t) : e.addClass("c-navigation--mobactive", t);
              }), l.addEventListener("click", function () {
                e.removeClass("c-navigation--mobactive", t);
              });
            }(i, l);
          },
          header_scroll: function header_scroll() {
            t && function (t) {
              var i = _toConsumableArray(document.querySelectorAll(".header__triger")),
                  l = 0 - (window.innerHeight - t.offsetHeight - 50),
                  s = new IntersectionObserver(function (i) {
                i.forEach(function (i) {
                  var l = i.isIntersecting;
                  l ? e.addClass("l-header--active", t) : e.removeClass("l-header--active", t);
                });
              }, {
                threshold: [0],
                rootMargin: "0px 0px ".concat(l, "px 0px")
              });

              i.forEach(function (e) {
                s.observe(e);
              });
            }(t);
          }
        };
      }(),
          i = function () {
        return {
          init: function init(t) {
            !function (t) {
              var i = document.querySelector(".".concat(t.slider_block)),
                  l = _toConsumableArray(document.querySelectorAll(".".concat(t.slider_cards))),
                  s = document.querySelector(".".concat(t.slider_pagination)),
                  o = {
                pag_active: t.classes.pag_active,
                card_active: t.classes.card_active,
                pagination_el: t.classes.pagination_el,
                extra: t.classes.extra
              },
                  n = "" != t.slider_has_back;

              if (i) {
                l.forEach(function (l, r) {
                  var a = l,
                      c = a.dataset.title,
                      d = a.dataset.name,
                      u = "";
                  e.removeClass(o.card_active, a), n && (u = a.querySelector(".".concat(t.slider_has_back)).dataset.back, n = !0), 0 == r && (e.addClass(o.card_active, a), n && (i.style.backgroundImage = "url(".concat(u, ")"))), function (t, i, l, s, o, n) {
                    var r = document.createElement("li"),
                        a = "";
                    e.addClass(o.pagination_el, r), r.className += " ".concat(o.extra), 0 == s && e.addClass(o.pag_active, r), r.dataset.name = i, "" != n ? (a = document.createElement(n.wrapper), "" != n.classes && (a.className += n.classes), a.textContent = l, r.appendChild(a)) : r.textContent = l;
                    t.appendChild(r);
                  }(s, d, c, r, o, t.pagination_wrap);
                });

                var r = _toConsumableArray(s.children);

                r.forEach(function (s) {
                  var a = s,
                      c = a.dataset.name,
                      d = l.find(function (e) {
                    if (e.dataset.name == c) return e;
                  }),
                      u = "";
                  n && (u = d.querySelector(".".concat(t.slider_has_back)).dataset.back), a.addEventListener("click", function () {
                    l.map(function (t) {
                      e.removeClass(o.card_active, t);
                    }), r.map(function (t) {
                      e.removeClass(o.pag_active, t);
                    }), e.addClass(o.card_active, d), e.addClass(o.pag_active, a), n && (i.style.backgroundImage = "url(".concat(u, ")"));
                  });
                });
              }
            }(t);
          }
        };
      }(),
          s = function () {
        return {
          infinityScroll: function infinityScroll(e) {
            !function (e) {
              var t = document.querySelector(e.container),
                  i = t ? _toConsumableArray(t.children) : null;
              var l = [];
              i && (t.innerHTML = "", s(), window.addEventListener("scroll", function (e) {
                var l = 0 - (t.getBoundingClientRect().top - this.innerHeight);
                l > t.offsetHeight && i.length > 0 && s();
              }));

              function s() {
                l = i.slice(0, 9), i.splice(0, 9), l.forEach(function (e) {
                  t.appendChild(e);
                });
              }
            }(e);
          }
        };
      }();

      new i.init({
        slider_block: "prop-slider",
        slider_cards: "prop-slider_card",
        slider_pagination: "prop-slider_pagination",
        slider_has_back: "prop-slider_card__back",
        slider_title: "prop-slider_card__title",
        pagination_wrap: {
          wrapper: "span",
          classes: ""
        },
        classes: {
          pag_active: "prop-slider_pagination__active",
          card_active: "prop-slider_card__active",
          pagination_el: "prop-slider_pagination__el",
          extra: "ml16 mr16"
        }
      });
      setTimeout(function () {
        new i.init({
          slider_block: "swiper-recent_posts",
          slider_cards: "recent-posts_vh",
          slider_pagination: "recent-posts_vh_pagination",
          slider_has_back: "",
          slider_title: "recent-posts_vh",
          pagination_wrap: {
            wrapper: "h3",
            classes: "reset"
          },
          classes: {
            pag_active: "recent-posts_nav__active",
            card_active: "recent-posts_vh__active",
            pagination_el: "recent-posts_nav__el",
            extra: "ml16 mr16"
          }
        });
      }, 500), new t.mobileList(), new s.infinityScroll({
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
                  i = t.dataset.src,
                  l = e.querySelector(".".concat(_this5.controls.container)),
                  s = l.querySelector(".".concat(_this5.controls.play)),
                  o = l.querySelector(".".concat(_this5.controls.stop.el));
              _this5.installCurrentTime(t), t.volume = _this5.currentVolume, _this5.onPlay(s, t, i, o, e), _this5.onStop(t, o, e);
            });
          }
        }, {
          key: "onStop",
          value: function onStop(e, t, i) {
            var _this6 = this;

            t.addEventListener("click", function () {
              _this6.last = void 0, i.classList.remove(_this6.activeElement), setTimeout(function () {
                e.pause(), t.classList.remove(_this6.controls.stop.active), _this6.installCurrentTime(e), i.querySelector(".filter-back").classList.remove("fade");
              }, 500);
            });
          }
        }, {
          key: "onPlay",
          value: function onPlay(e, t, i, l, s) {
            var _this7 = this;

            e.addEventListener("click", function () {
              void 0 !== _this7.last && (_this7.last.querySelector("video").pause(), _this7.installCurrentTime(_this7.last.querySelector("video")), _this7.last.classList.remove(_this7.activeElement), _this7.last.querySelector(".".concat(_this7.controls.stop.el)).classList.remove(_this7.controls.stop.active)), _this7.installCurrentTime(t), s.classList.add(_this7.activeElement), _this7.last = s, t.querySelector('source[type="video/mp4"]').src = i, setTimeout(function () {
                window.scrollTo({
                  top: s.getBoundingClientRect().top + window.scrollY
                }), t.load(), t.play(), l.classList.add(_this7.controls.stop.active), s.querySelector(".filter-back").classList.add("fade");
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
      }), new l("[data-fullpage]", {
        buttons: "[data-fullpage-to]"
      });
    });
  }
});