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
    this.activeElement = object.element.active; //Video

    this.video = object.video;
    this.controls = object.controls; //Start for video

    this.currentTime = 1; //Remember last element for remove active class

    this.last; //<- this variable changes from undefined to element <->

    if (this.elements) this.init();
  }

  _createClass(VideoGallery, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.elements.forEach(function (element, index) {
        var video = element.querySelector(".".concat(_this.video, " video")),
            //Take from video block -> video tag
        controls = element.querySelector(".".concat(_this.controls.container)),
            //Control block
        play = controls.querySelector(".".concat(_this.controls.play)),
            //Take from control block -> play button
        stop = controls.querySelector(".".concat(_this.controls.stop.el)); //Take from control block -> stop button
        //Install current time for view

        _this.installCurrentTime(video); //Init function for play button


        _this.onPlay(play, video, stop, element); //Init function for stop button        


        _this.onStop(video, stop, element);
      });
    }
  }, {
    key: "onStop",
    value: function onStop(video, stop, element) {
      var _this2 = this;

      stop.addEventListener('click', function (ev) {
        _this2.last = undefined; //Reset last element

        element.classList.remove(_this2.activeElement); //Remove from element active class

        setTimeout(function () {
          video.pause(); //Pause the video

          stop.classList.remove(_this2.controls.stop.active); //Remove from stop button active class

          _this2.installCurrentTime(video); //Install current time for view


          element.querySelector('.filter-back').classList.remove('fade'); //Remove "fade" class from filter 
        }, 500);
      });
    }
  }, {
    key: "onPlay",
    value: function onPlay(play, video, stop, element) {
      var _this3 = this;

      play.addEventListener('click', function (ev) {
        if (_this3.last !== undefined) {
          _this3.last.querySelector('video').pause(); //Pause the video


          _this3.installCurrentTime(_this3.last.querySelector('video')); //Install current time for view


          _this3.last.classList.remove(_this3.activeElement); //Remove active class from Video Block


          _this3.last.querySelector(".".concat(_this3.controls.stop.el)).classList.remove(_this3.controls.stop.active); //Remove from stop button active class

        }

        _this3.installCurrentTime(video); //Install current time for view


        element.classList.add(_this3.activeElement); //Add active class to element

        _this3.last = element; //Save last element to detach

        setTimeout(function () {
          window.scrollTo(0, element.getBoundingClientRect().top + window.scrollY); //Scroll window to video position

          video.play();
          stop.classList.add(_this3.controls.stop.active); //Add to stop button active class

          element.querySelector('.filter-back').classList.add('fade'); //Add "fade" class from filter 
        }, 500);
      });
    } //Install currentTime

  }, {
    key: "installCurrentTime",
    value: function installCurrentTime(element) {
      element.currentTime = this.currentTime;
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