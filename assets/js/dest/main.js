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

  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
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
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      n.d(i, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 0);
}([function (e, t, n) {
  "use strict";

  n.r(t);
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
          n = document.querySelector(".c-navigation__mobile"),
          i = {
        close: document.querySelector(".c-navigation__close"),
        open: document.querySelector(".c-hamburger")
      };
      return {
        mobileList: function mobileList() {
          t && n && function (t, n) {
            var i = n.close;
            n.open.addEventListener("click", function () {
              e.containClass("c-navigation--mobactive", t) ? e.removeClass("c-navigation--mobactive", t) : e.addClass("c-navigation--mobactive", t);
            }), i.addEventListener("click", function () {
              e.removeClass("c-navigation--mobactive", t);
            });
          }(n, i);
        },
        header_scroll: function header_scroll() {
          t && function (t) {
            var n = _toConsumableArray(document.querySelectorAll(".header__triger")),
                i = 0 - (window.innerHeight - t.offsetHeight - 50),
                r = new IntersectionObserver(function (n) {
              n.forEach(function (n) {
                var i = n.isIntersecting;
                i ? e.addClass("l-header--active", t) : e.removeClass("l-header--active", t);
              });
            }, {
              threshold: [0],
              rootMargin: "0px 0px ".concat(i, "px 0px")
            });

            n.forEach(function (e) {
              r.observe(e);
            });
          }(t);
        }
      };
    }(),
        n = function () {
      return {
        init: function init(t) {
          !function (t) {
            var n = document.querySelector(".".concat(t.slider_block)),
                i = _toConsumableArray(document.querySelectorAll(".".concat(t.slider_cards))),
                r = document.querySelector(".".concat(t.slider_pagination)),
                o = {
              pag_active: t.classes.pag_active,
              card_active: t.classes.card_active,
              pagination_el: t.classes.pagination_el,
              extra: t.classes.extra
            },
                a = "" != t.slider_has_back;

            if (n) {
              i.forEach(function (i, l) {
                var s = i,
                    c = s.dataset.title,
                    d = s.dataset.name,
                    u = "";
                e.removeClass(o.card_active, s), a && (u = s.querySelector(".".concat(t.slider_has_back)).dataset.back, a = !0), 0 == l && (e.addClass(o.card_active, s), a && (n.style.backgroundImage = "url(".concat(u, ")"))), function (t, n, i, r, o, a) {
                  var l = document.createElement("li"),
                      s = "";
                  e.addClass(o.pagination_el, l), l.className += " ".concat(o.extra), 0 == r && e.addClass(o.pag_active, l), l.dataset.name = n, "" != a ? (s = document.createElement(a.wrapper), "" != a.classes && (s.className += a.classes), s.textContent = i, l.appendChild(s)) : l.textContent = i;
                  t.appendChild(l);
                }(r, d, c, l, o, t.pagination_wrap);
              });

              var l = _toConsumableArray(r.children);

              l.forEach(function (r) {
                var s = r,
                    c = s.dataset.name,
                    d = i.find(function (e) {
                  if (e.dataset.name == c) return e;
                }),
                    u = "";
                a && (u = d.querySelector(".".concat(t.slider_has_back)).dataset.back), s.addEventListener("click", function () {
                  i.map(function (t) {
                    e.removeClass(o.card_active, t);
                  }), l.map(function (t) {
                    e.removeClass(o.pag_active, t);
                  }), e.addClass(o.card_active, d), e.addClass(o.pag_active, s), a && (n.style.backgroundImage = "url(".concat(u, ")"));
                });
              });
            }
          }(t);
        }
      };
    }(),
        i = function () {
      return {
        relax: function relax(e) {
          !function (e) {
            var t = _toConsumableArray(document.querySelectorAll(e.svg));

            _toConsumableArray(document.querySelectorAll(e.slide)).forEach(function (e, n) {
              var i = e.dataset.image;
              t[n].contentDocument.querySelector("image").setAttribute("xlink:href", i);
            });
          }(e);
        },
        infinityScroll: function infinityScroll(e) {
          !function (e) {
            var t = document.querySelector(e.container),
                n = t ? _toConsumableArray(t.children) : null;
            var i = [];
            n && (t.innerHTML = "", r(), window.addEventListener("scroll", function (e) {
              var i = 0 - (t.getBoundingClientRect().top - this.innerHeight);
              i > t.offsetHeight && n.length > 0 && r();
            }));

            function r() {
              i = n.slice(0, 9), n.splice(0, 9), i.forEach(function (e) {
                t.appendChild(e);
              });
            }
          }(e);
        }
      };
    }();

    new n.init({
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
      new n.init({
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
    }, 500), new t.mobileList(), new i.relax({
      slide: ".block-relax__slide",
      svg: ".block-relax__logo"
    }), new i.infinityScroll({
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
                n = t.dataset.src,
                i = e.querySelector(".".concat(_this.controls.container)),
                r = i.querySelector(".".concat(_this.controls.play)),
                o = i.querySelector(".".concat(_this.controls.stop.el));
            _this.installCurrentTime(t), t.volume = _this.currentVolume, _this.onPlay(r, t, n, o, e), _this.onStop(t, o, e);
          });
        }
      }, {
        key: "onStop",
        value: function onStop(e, t, n) {
          var _this2 = this;

          t.addEventListener("click", function () {
            _this2.last = void 0, n.classList.remove(_this2.activeElement), setTimeout(function () {
              e.pause(), t.classList.remove(_this2.controls.stop.active), _this2.installCurrentTime(e), n.querySelector(".filter-back").classList.remove("fade");
            }, 500);
          });
        }
      }, {
        key: "onPlay",
        value: function onPlay(e, t, n, i, r) {
          var _this3 = this;

          e.addEventListener("click", function () {
            void 0 !== _this3.last && (_this3.last.querySelector("video").pause(), _this3.installCurrentTime(_this3.last.querySelector("video")), _this3.last.classList.remove(_this3.activeElement), _this3.last.querySelector(".".concat(_this3.controls.stop.el)).classList.remove(_this3.controls.stop.active)), _this3.installCurrentTime(t), r.classList.add(_this3.activeElement), _this3.last = r, t.querySelector('source[type="video/mp4"]').src = n, setTimeout(function () {
              window.scrollTo({
                top: r.getBoundingClientRect().top + window.scrollY
              }), t.load(), t.play(), i.classList.add(_this3.controls.stop.active), r.querySelector(".filter-back").classList.add("fade");
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