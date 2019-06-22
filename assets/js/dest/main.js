"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function i(n) {
    if (t[n]) return t[n].exports;
    var r = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
  }

  i.m = e, i.c = t, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
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
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      i.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "", i(i.s = 0);
}([function (e, t, i) {
  "use strict";

  i.r(t);
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
          n = {
        close: document.querySelector(".c-navigation__close"),
        open: document.querySelector(".c-hamburger")
      };
      return {
        mobileList: function mobileList() {
          t && i && function (t, i) {
            var n = i.close;
            i.open.addEventListener("click", function () {
              e.containClass("c-navigation--mobactive", t) ? e.removeClass("c-navigation--mobactive", t) : e.addClass("c-navigation--mobactive", t);
            }), n.addEventListener("click", function () {
              e.removeClass("c-navigation--mobactive", t);
            });
          }(i, n);
        },
        header_scroll: function header_scroll() {
          t && function (t) {
            var i = _toConsumableArray(document.querySelectorAll(".header__triger")),
                n = 0 - (window.innerHeight - t.offsetHeight - 50),
                r = new IntersectionObserver(function (i) {
              i.forEach(function (i) {
                var n = i.isIntersecting;
                n ? e.addClass("l-header--active", t) : e.removeClass("l-header--active", t);
              });
            }, {
              threshold: [0],
              rootMargin: "0px 0px ".concat(n, "px 0px")
            });

            i.forEach(function (e) {
              r.observe(e);
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
                n = _toConsumableArray(document.querySelectorAll(".".concat(t.slider_cards))),
                r = document.querySelector(".".concat(t.slider_pagination)),
                o = {
              pag_active: t.classes.pag_active,
              card_active: t.classes.card_active,
              pagination_el: t.classes.pagination_el,
              extra: t.classes.extra
            },
                a = "" != t.slider_has_back;

            if (i) {
              n.forEach(function (n, s) {
                var l = n,
                    c = l.dataset.title,
                    d = l.dataset.name,
                    u = "";
                e.removeClass(o.card_active, l), a && (u = l.querySelector(".".concat(t.slider_has_back)).dataset.back, a = !0), 0 == s && (e.addClass(o.card_active, l), a && (i.style.backgroundImage = "url(".concat(u, ")"))), function (t, i, n, r, o, a) {
                  var s = document.createElement("li"),
                      l = "";
                  e.addClass(o.pagination_el, s), s.className += " ".concat(o.extra), 0 == r && e.addClass(o.pag_active, s), s.dataset.name = i, "" != a ? (l = document.createElement(a.wrapper), "" != a.classes && (l.className += a.classes), l.textContent = n, s.appendChild(l)) : s.textContent = n;
                  t.appendChild(s);
                }(r, d, c, s, o, t.pagination_wrap);
              });

              var s = _toConsumableArray(r.children);

              s.forEach(function (r) {
                var l = r,
                    c = l.dataset.name,
                    d = n.find(function (e) {
                  if (e.dataset.name == c) return e;
                }),
                    u = "";
                a && (u = d.querySelector(".".concat(t.slider_has_back)).dataset.back), l.addEventListener("click", function () {
                  n.map(function (t) {
                    e.removeClass(o.card_active, t);
                  }), s.map(function (t) {
                    e.removeClass(o.pag_active, t);
                  }), e.addClass(o.card_active, d), e.addClass(o.pag_active, l), a && (i.style.backgroundImage = "url(".concat(u, ")"));
                });
              });
            }
          }(t);
        }
      };
    }(),
        n = function () {
      return {
        infinityScroll: function infinityScroll(e) {
          !function (e) {
            var t = document.querySelector(e.container),
                i = t ? _toConsumableArray(t.children) : null;
            var n = [];
            i && (t.innerHTML = "", r(), window.addEventListener("scroll", function (e) {
              var n = 0 - (t.getBoundingClientRect().top - this.innerHeight);
              n > t.offsetHeight && i.length > 0 && r();
            }));

            function r() {
              n = i.slice(0, 9), i.splice(0, 9), n.forEach(function (e) {
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
    }, 500), new t.mobileList(), new n.relax({
      slide: ".block-relax__slide",
      svg: ".block-relax__logo"
    }), new n.infinityScroll({
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
          var _this = this;

          this.elements.forEach(function (e) {
            var t = e.querySelector(".".concat(_this.video, " video")),
                i = t.dataset.src,
                n = e.querySelector(".".concat(_this.controls.container)),
                r = n.querySelector(".".concat(_this.controls.play)),
                o = n.querySelector(".".concat(_this.controls.stop.el));
            _this.installCurrentTime(t), t.volume = _this.currentVolume, _this.onPlay(r, t, i, o, e), _this.onStop(t, o, e);
          });
        }
      }, {
        key: "onStop",
        value: function onStop(e, t, i) {
          var _this2 = this;

          t.addEventListener("click", function () {
            _this2.last = void 0, i.classList.remove(_this2.activeElement), setTimeout(function () {
              e.pause(), t.classList.remove(_this2.controls.stop.active), _this2.installCurrentTime(e), i.querySelector(".filter-back").classList.remove("fade");
            }, 500);
          });
        }
      }, {
        key: "onPlay",
        value: function onPlay(e, t, i, n, r) {
          var _this3 = this;

          e.addEventListener("click", function () {
            void 0 !== _this3.last && (_this3.last.querySelector("video").pause(), _this3.installCurrentTime(_this3.last.querySelector("video")), _this3.last.classList.remove(_this3.activeElement), _this3.last.querySelector(".".concat(_this3.controls.stop.el)).classList.remove(_this3.controls.stop.active)), _this3.installCurrentTime(t), r.classList.add(_this3.activeElement), _this3.last = r, t.querySelector('source[type="video/mp4"]').src = i, setTimeout(function () {
              window.scrollTo({
                top: r.getBoundingClientRect().top + window.scrollY
              }), t.load(), t.play(), n.classList.add(_this3.controls.stop.active), r.querySelector(".filter-back").classList.add("fade");
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
    });
  });
}]);