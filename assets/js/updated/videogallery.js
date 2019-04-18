"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VideoGallery =
/*#__PURE__*/
function () {
  function VideoGallery(object) {
    _classCallCheck(this, VideoGallery);

    this.elements = document.querySelectorAll(".".concat(object.element.container)) ? _toConsumableArray(document.querySelectorAll(".".concat(object.element.container))) : null;
    this.active = object.element.active; //Video

    this.video = object.video;
    this.controls = object.controls; //Remember last element for remove active class

    this.last;
    if (this.elements) this.init();
  }

  _createClass(VideoGallery, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.elements.forEach(function (element, index) {
        var video = element.querySelector(".".concat(_this.video, " video")),
            controls = element.querySelector(".".concat(_this.controls.container)),
            play = controls.querySelector(".".concat(_this.controls.play)),
            stop = controls.querySelector(".".concat(_this.controls.stop.el));
        video.currentTime = 1;

        _this.onPlay(play, video, stop, element);

        _this.onStop(play, video, stop, element);
      });
    }
  }, {
    key: "onStop",
    value: function onStop(play, video, stop, element) {
      var _this2 = this;

      stop.addEventListener('click', function (ev) {
        _this2.last = undefined;
        element.classList.remove(_this2.active);
        setTimeout(function () {
          video.pause();
          stop.classList.remove(_this2.controls.stop.active);
          video.currentTime = 1;
          element.querySelector('.filter-back').style.visibility = 'visible';
          element.querySelector('.filter-back').style.opacity = .7;
        }, 500);
      });
    }
  }, {
    key: "onPlay",
    value: function onPlay(play, video, stop, element) {
      var _this3 = this;

      play.addEventListener('click', function (ev) {
        if (_this3.last !== undefined) {
          _this3.last.classList.remove(_this3.active);

          _this3.last.querySelector('video').pause();

          _this3.last.querySelector('video').currentTime = 1;

          _this3.last.querySelector(".".concat(_this3.controls.stop.el)).classList.remove(_this3.controls.stop.active);
        }

        video.currentTime = 1;
        element.classList.add(_this3.active);
        _this3.last = element;
        setTimeout(function () {
          window.scrollTo(0, element.getBoundingClientRect().top + window.scrollY);
          video.play();
          stop.classList.add(_this3.controls.stop.active);
          element.querySelector('.filter-back').style.visibility = 'hidden';
          element.querySelector('.filter-back').style.opacity = 0;
        }, 500);
      });
    }
  }]);

  return VideoGallery;
}();

window.addEventListener('load', function () {
  var videogallery = new VideoGallery({
    element: {
      container: 'block-videogallery__element',
      active: 'block-videogallery__element--active'
    },
    video: 'block-videogallery__video',
    controls: {
      container: 'block-videogallery__controls',
      play: 'video-controls__play',
      stop: {
        el: 'video-controls__stop',
        active: 'video-controls__stop--active'
      }
    }
  });
});