"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MapRelax =
/*#__PURE__*/
function () {
  function MapRelax(object) {
    _classCallCheck(this, MapRelax);

    this.token = object.token;
    this.container = object.container;
    this.style = object.style;
    this.center = object.center;
    this.zoom = object.zoom;
    this.dataMarkers = object.dataMarkers; //For mouse/keyboard manipulations

    this.mapAlert = document.querySelector(object.mapAlert), //Alert when mousewheel without controll
    this.buttonPress = false, //Variable for button press
    this.timeout; //Variable for cancel and add timeout
    //Initialize the map

    this.init();
  }
  /**
   * 
   * Init map
   * Used functions:
   *  @createMarkers
   *  @onCTRLDown
   *  @onCTRLUp
   *  @onMouseWheel
   * 
   */


  _createClass(MapRelax, [{
    key: "init",
    value: function init() {
      //Map token here ----->
      mapboxgl.accessToken = this.token;
      var map = new mapboxgl.Map({
        container: this.container,
        style: this.style,
        center: this.center,
        zoom: this.zoom
      }),
          mapboxClient = mapboxSdk({
        accessToken: mapboxgl.accessToken
      }); //Disable zoom

      map.scrollZoom.disable(); //Marker Generate

      this.createMarkers(mapboxClient, map); //KeyBoard Manipulations

      this.onCTRLDown(map);
      this.onCTRLUp(map);
      this.onMouseWheel();
    }
    /**
     * 
     * Generate HTML template for marker 
     * Used variables:
     *  @index
     * Used functions
     *  -
     */

  }, {
    key: "generateMarkerHTML",
    value: function generateMarkerHTML(index) {
      var marker = document.createElement('div');
      marker.classList.add('map-relax__marker');
      marker.textContent = index + 1; //Append Circles into marker 

      for (var i = 0; i < 4; i++) {
        var circle = document.createElement('div');
        circle.classList.add('map-relax__circle');
        marker.appendChild(circle);
      }

      return marker;
    }
    /**
     * 
     * Generate HTML template for popup 
     * Used variables:
     *  @image
     *  @title
     *  @description
     * Used functions
     *  -
     * 
     */

  }, {
    key: "generatePopupHTML",
    value: function generatePopupHTML(image, title, description) {
      return "<div class=\"map-popup d-flex\">\n                    <div class=\"mbl-col-5 reset\">\n                        <div class=\"map-popup__image\" style=\"background-image: url(".concat(image, ");\"></div>\n                    </div>\n                    <div class=\"mbl-col-7\">\n                        <h6 class=\"f-vb reset-top mb8\">").concat(title, "</h6>\n                        ").concat(description, "\n                    </div>\n                </div>");
    }
    /**
     * 
     * Function for generating markers on map
     * 
     */

  }, {
    key: "createMarkers",
    value: function createMarkers(mapboxClient, map) {
      var _this = this;

      //Loop for create markers
      this.dataMarkers.forEach(function (dataMarker, index) {
        /**
         * 
         * All HTML objects
         * @markerHTML
         * @popupHTML
         * 
         */
        var markerHTML = _this.generateMarkerHTML(index),
            popupHTML = new mapboxgl.Popup({
          offset: 25
        }).setHTML(_this.generatePopupHTML(dataMarker.image, dataMarker.title, dataMarker.description)); //Create marker


        mapboxClient.geocoding.forwardGeocode({
          query: dataMarker.place,
          autocomplete: false,
          limit: 1
        }).send().then(function (response) {
          if (response && response.body && response.body.features && response.body.features.length) {
            var feature = response.body.features[0];
            new mapboxgl.Marker(markerHTML).setLngLat(feature.center).setPopup(popupHTML).addTo(map);
          }
        });
      }); //End of Loop
    } //On press CTRL active zoom and buttonPress change to true 

  }, {
    key: "onCTRLDown",
    value: function onCTRLDown(map) {
      var _this2 = this;

      window.addEventListener('keydown', function (e) {
        if (e.ctrlKey) {
          map.scrollZoom.enable();

          _this2.mapAlert.classList.remove('map-relax__alert--active');

          _this2.buttonPress = true;
        }
      });
    } //On keyUp disable zoom and buttonPress change to false

  }, {
    key: "onCTRLUp",
    value: function onCTRLUp(map) {
      var _this3 = this;

      window.addEventListener('keyup', function () {
        map.scrollZoom.disable();
        _this3.buttonPress = false;
      });
    } //If buttonPress is false and target of mouse is "Map", alert to press CTRL if want to zoom 

  }, {
    key: "onMouseWheel",
    value: function onMouseWheel() {
      var _this4 = this;

      window.addEventListener('mousewheel', function (e) {
        if (e.target.closest('.map-relax') && !_this4.buttonPress) {
          clearTimeout(_this4.timeout);

          _this4.mapAlert.classList.add('map-relax__alert--active');

          _this4.timeout = setTimeout(function () {
            _this4.mapAlert.classList.remove('map-relax__alert--active');
          }, 1000);
        }
      });
    }
  }]);

  return MapRelax;
}(); //End of class