"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OdstresowaniMap =
/*#__PURE__*/
function () {
  function OdstresowaniMap(object) {
    _classCallCheck(this, OdstresowaniMap);

    this.dataMarkers = this.getData(_toConsumableArray(document.querySelector(".".concat(object.dataMarkers.container)).children), object.dataMarkers.id);
    this.token = object.token;
    this.map = object.map;
    this.marker = object.marker !== undefined ? object.marker : null;
    this.popup = object.popup !== undefined ? object.popup : null;
    this.mapBoxClient = mapboxSdk({
      accessToken: object.token
    }); //Variables for alert

    this.alert = object.alert !== undefined ? {
      el: document.querySelector(".".concat(object.alert.el)),
      active: object.alert.active
    } : null;
    this.timeout;
    this.isCTRL = false;
  }

  _createClass(OdstresowaniMap, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.map.scrollZoom.disable();
      this.onCTRLDown();
      this.onCTRLUp();
      if (this.alert) this.onMouseWheel();
      this.dataMarkers.forEach(function (data, index) {
        var markerHTML = _this.marker ? _this.getTemplateMarker(data.image, index) : console.log('Marker is NULL'),
            popupHTML = _this.popup ? _this.getTemplatePopUp(data.image, data.title, data.description) : console.log('PopUp is NULL'),
            popUp = new mapboxgl.Popup({
          offset: 25
        }).setHTML(popupHTML);

        _this.mapBoxClient.geocoding.forwardGeocode({
          query: data.city,
          autocomplete: false,
          limit: 1
        }).send().then(function (response) {
          if (response && response.body && response.body.features && response.body.features.length) {
            var feature = response.body.features[0];
            new mapboxgl.Marker(markerHTML).setLngLat(feature.center).setPopup(popUp).addTo(_this.map);
          }
        });
      });
    }
    /**
     * 
     * On CTRL down, enable zoom
     * 
     */

  }, {
    key: "onCTRLDown",
    value: function onCTRLDown() {
      var _this2 = this;

      window.addEventListener('keydown', function (ev) {
        if (ev.ctrlKey) {
          _this2.map.scrollZoom.enable();

          _this2.isCTRL = true;
          if (_this2.alert) _this2.alert.el.classList.remove(_this2.alert.active);
        }
      });
    }
    /**
     * 
     * On CTRL up, disable zoom
     * 
     */

  }, {
    key: "onCTRLUp",
    value: function onCTRLUp() {
      var _this3 = this;

      window.addEventListener('keyup', function (ev) {
        _this3.map.scrollZoom.disable();

        _this3.isCTRL = false;
      });
    }
    /**
     * 
     * On mouse wheel enable alert
     * 
     */

  }, {
    key: "onMouseWheel",
    value: function onMouseWheel() {
      var _this4 = this;

      window.addEventListener('mousewheel', function (ev) {
        if (ev.target.closest('.maps-relax') && !_this4.isCTRL) {
          clearTimeout(_this4.timeout);

          _this4.alert.el.classList.add(_this4.alert.active);

          _this4.timeout = setTimeout(function () {
            _this4.alert.el.classList.remove(_this4.alert.active);
          }, 1000);
        }
      });
    }
    /**
     * 
     * Generate Template for popup
     * 
     */

  }, {
    key: "getTemplatePopUp",
    value: function getTemplatePopUp(image, title, description) {
      return "<div class=\"maps-popup d-flex\">\n                    <div class=\"mbl-col-5 reset\">\n                        <div class=\"maps-popup__image\" style=\"background-image: url(".concat(image, ");\"></div>\n                    </div>\n                    <div class=\"mbl-col-7\">\n                        <h5 class=\"reset-top mb8 f-vb\">").concat(title, "</h5>\n                        ").concat(description, "\n                    </div>\n                </div>");
    }
    /**
     * 
     * Generate Template for marker
     * 
     */

  }, {
    key: "getTemplateMarker",
    value: function getTemplateMarker(image, index) {
      var markerHTML = document.createElement(this.marker.el);
      this.marker.classes.forEach(function (el) {
        markerHTML.classList.add(el);
      });
      if (this.marker.isNumeric) markerHTML.textContent = index + 1;else if (this.marker.hasImage && image) markerHTML.style.backgroundImage = "url(".concat(image, ")");

      if (this.marker.pulse) {
        for (var i = 0; i < 4; i++) {
          var circle = document.createElement('div');
          circle.classList.add('maps-relax__circle');
          markerHTML.appendChild(circle);
        }
      }

      return markerHTML;
    }
    /**
     * 
     * Get data from HTML
     * 
     */

  }, {
    key: "getData",
    value: function getData(children, id) {
      var dataObject = children,
          markers = [];
      dataObject.forEach(function (el) {
        var el_data = el.dataset,
            el_id = parseInt(el_data.id);

        if (el_id == id) {
          markers.push({
            id: id,
            city: el_data.city,
            title: el_data.title,
            description: el_data.description,
            image: el_data.image
          });
        }
      });
      return markers;
    }
  }]);

  return OdstresowaniMap;
}();

window.addEventListener('load', function () {
  //Token for map
  mapboxgl.accessToken = 'pk.eyJ1IjoiaWx5YW1pc2hraW4iLCJhIjoiY2p1aWRrbDl2MTRrcDQ0cGdlMTN3ZWJ1cCJ9.tTVIhbBmMOhuH_Z5DKUN4A';
  var map_relax = new OdstresowaniMap({
    token: mapboxgl.accessToken,
    //Take data
    dataMarkers: {
      container: 'map-hidden',
      id: 0 //Id must be < 2

    },
    //Map initialization
    map: new mapboxgl.Map({
      container: 'maps-relax__relax',
      style: 'mapbox://styles/ilyamishkin/cjuifjhya0m221fqkauhk7fyv',
      center: [20, 52],
      zoom: 6
    }),
    //Marker configuration
    marker: {
      el: 'div',
      classes: ['maps-relax__marker'],
      pulse: true,
      isNumeric: true,
      hasImage: false
    },
    //PopupConfiguration
    popup: {
      classes: ['maps-popup']
    },
    //AlertBlock
    alert: {
      el: 'maps-relax__alert',
      active: 'maps-relax__alert--active'
    }
  });
  var map_tech = new OdstresowaniMap({
    token: mapboxgl.accessToken,
    //Take data
    dataMarkers: {
      container: 'map-hidden',
      id: 1 //Id must be < 2

    },
    //Map initialization
    map: new mapboxgl.Map({
      container: 'maps-relax__tech',
      style: 'mapbox://styles/ilyamishkin/cjuifjhya0m221fqkauhk7fyv',
      center: [20, 52],
      zoom: 6
    }),
    //Marker configuration
    marker: {
      el: 'div',
      classes: ['maps-relax__marker'],
      pulse: false,
      isNumeric: false,
      hasImage: true
    },
    //PopupConfiguration
    popup: {
      classes: ['maps-popup']
    }
  }); //Init Maps

  map_relax.init();
  map_tech.init();
  var map = new mapboxgl.Compare(map_relax.map, map_tech.map, {});
});