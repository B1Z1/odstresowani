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

    if (this.dataMarkers !== null) {
      this.token = object.token;
      this.map = object.map;
      this.marker = object.marker !== undefined ? object.marker : null;
      this.popup = object.popup !== undefined ? object.popup : null;
      this.mapBoxClient = mapboxSdk({
        accessToken: object.token
      }); //Coordinates for Line draw

      if (object.lineDraw) this.coords = [];
      this.init();
    } else {
      return null;
    }
  }

  _createClass(OdstresowaniMap, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.dataMarkers.forEach(function (data, index) {
        var markerHTML = _this.marker ? _this.getTemplateMarker(data.image, index) : console.log('Marker is NULL'),
            popupHTML = _this.popup ? _this.getPopUpByType(data) : console.log('PopUp is NULL'),
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
     * Generate Template for popup
     * 
     */

  }, {
    key: "getPopUpByType",
    value: function getPopUpByType(data) {
      var type = data.type,
          title = data.title,
          description = data.description,
          image = data.image,
          phone = data.phone,
          full_adress = data.full_adress,
          link = data.link;

      switch (type) {
        case 'default':
          return this.popUpTemplateNormal(title, description, link, image);

        case 'default_without_image':
          return this.popUpTemplateWithoutImage(title, description, phone, image);
      }
    }
    /**
     * 
     * 
     * Template PopUp: Normal
     * 
     */

  }, {
    key: "popUpTemplateNormal",
    value: function popUpTemplateNormal(title, description, link, image) {
      return "<div class=\"maps-popup d-flex\">\n                    <div class=\"mbl-col-5 reset\">\n                        ".concat(image ? "<div class=\"maps-popup__image\" style=\"background-image: url(".concat(image, ");\"></div>") : '', "\n                    </div>\n                    <div class=\"mbl-col-7\">\n                        <h5 class=\"reset-top mb8 f-vb\"><a ").concat(link ? "href=\"".concat(link, "\"") : '', " class=\"c-link c-link--tdu\">").concat(title, "</a></h5>\n                        ").concat(description, "\n                    </div>\n                </div>");
    }
    /**
     * 
     * 
     * Template PopUp: River
     * 
     */

  }, {
    key: "popUpTemplateWithoutImage",
    value: function popUpTemplateWithoutImage(title, description, phone, full_adress) {
      return "<div class=\"maps-popup row\">\n                    <div class=\"mbl-col-12\">\n                        <h5 class=\"reset\">".concat(title, "</h5>\n                    </div>\n                    <div class=\"mbl-col-12\">\n                        ").concat(description, "\n                    </div>\n                    ").concat(phone ? "<div class=\"mbl-col-6\">\n                            Telefon: ".concat(phone, "\n                        </div>") : '', "\n                    ").concat(full_adress ? "<div class=\"mbl-col-6\">\n                            Adress: ".concat(full_adress, "\n                        </div>") : '', "\n                </div>");
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
      if (this.marker.isNumeric) markerHTML.textContent = index + 1;else if (this.marker.hasImage && image) markerHTML.style.backgroundImage = "url(".concat(image, ")");else if (this.marker.alert) {
        markerHTML.textContent = '!';
        markerHTML.classList.add('maps-marker--alert');
      }

      if (this.marker.pulse) {
        for (var i = 0; i < 4; i++) {
          var circle = document.createElement('div');
          circle.classList.add('maps-marker__circle');
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

      if (elements === undefined || elements.length === 0) {
        return null;
      }

      elements.forEach(function (el) {
        var dataObject = {
          type: el.dataset.type ? el.dataset.type : null,
          title: el.dataset.title ? el.dataset.title : null,
          description: el.dataset.description ? el.dataset.description : null,
          image: el.dataset.image ? el.dataset.image : null,
          phone: el.dataset.phone ? el.dataset.phone : null,
          full_adress: el.dataset.full_adress ? el.dataset.full_adress : null,
          adress: el.dataset.adress ? el.dataset.adress : null,
          link: el.dataset.link ? el.dataset.link : null
        };
        markers.push(dataObject);
      });
      return markers;
    }
  }]);

  return OdstresowaniMap;
}();