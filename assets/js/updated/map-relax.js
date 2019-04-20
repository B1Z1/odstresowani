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

    this.dataMarkers = this.getData(_toConsumableArray(document.querySelector(".".concat(object.dataMarkers.container)).children));
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
    this.isCTRL = false; //Coordinates for Line draw

    if (object.lineDraw) this.coords = [];
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

        if (data.adress) {
          _this.mapBoxClient.geocoding.forwardGeocode({
            query: data.adress,
            autocomplete: false,
            limit: 1
          }).send().then(function (response) {
            if (response && response.body && response.body.features && response.body.features.length) {
              var feature = response.body.features[0]; //Get coordinates from marker

              if (_this.coords) _this.coords.push(response.body.features[0].center);
              new mapboxgl.Marker(markerHTML).setLngLat(feature.center).setPopup(popUp).addTo(_this.map);
            }
          });
        }
      });
      if (this.coords) this.lineDraw();
    }
  }, {
    key: "lineDraw",
    value: function lineDraw() {
      var _this2 = this;

      this.map.on('load', function () {
        _this2.map.addLayer({
          "id": "route",
          "type": "line",
          "source": {
            "type": "geojson",
            "data": {
              "type": "Feature",
              "properties": {},
              "geometry": {
                "type": "LineString",
                "coordinates": _this2.coords
              }
            }
          },
          "layout": {
            "line-join": "round",
            "line-cap": "round"
          },
          "paint": {
            "line-color": "#5fa73f",
            "line-width": 4
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
      var _this3 = this;

      window.addEventListener('keydown', function (ev) {
        if (ev.ctrlKey) {
          _this3.map.scrollZoom.enable();

          _this3.isCTRL = true;
          if (_this3.alert) _this3.alert.el.classList.remove(_this3.alert.active);
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
      var _this4 = this;

      window.addEventListener('keyup', function (ev) {
        _this4.map.scrollZoom.disable();

        _this4.isCTRL = false;
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
      var _this5 = this;

      window.addEventListener('mousewheel', function (ev) {
        if (ev.target.closest('.maps-relax') && !_this5.isCTRL) {
          clearTimeout(_this5.timeout);

          _this5.alert.el.classList.add(_this5.alert.active);

          _this5.timeout = setTimeout(function () {
            _this5.alert.el.classList.remove(_this5.alert.active);
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
    value: function getData(children) {
      var elements = children,
          markers = [];
      elements[0].parentNode.remove();
      elements.forEach(function (el) {
        var dataObject = {
          title: el.dataset.title ? el.dataset.title : null,
          description: el.dataset.description ? el.dataset.description : null,
          image: el.dataset.image ? el.dataset.image : null,
          adress: el.dataset.adress ? el.dataset.adress : null
        };
        markers.push(dataObject);
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
      container: 'map-hidden__relax'
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
      hasImage: false,
      lineDraw: false
    },
    //PopupConfiguration
    popup: {
      classes: ['maps-popup']
    },
    //AlertBlock
    alert: {
      el: 'maps-relax__alert',
      active: 'maps-relax__alert--active'
    },
    lineDraw: false
  });
  var map_tech = new OdstresowaniMap({
    token: mapboxgl.accessToken,
    //Take data
    dataMarkers: {
      container: 'map-hidden__techs'
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
    },
    //LineDraw
    lineDraw: true
  }); //Init Maps

  map_relax.init();
  map_tech.init();
  var map = new mapboxgl.Compare(map_relax.map, map_tech.map, {});
});