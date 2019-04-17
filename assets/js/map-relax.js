class MapRelax{
    constructor(object){
        this.token = object.token;
        this.container = object.container;
        this.style = object.style;
        this.center = object.center;
        this.zoom = object.zoom;
        this.dataMarkers = object.dataMarkers

        //For mouse/keyboard manipulations
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
    init(){
        //Map token here ----->
        mapboxgl.accessToken = this.token;
        let map = new mapboxgl.Map({
                container: this.container,
                style: this.style,
                center: this.center,
                zoom: this.zoom
            }),
            mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
            
        //Disable zoom
        map.scrollZoom.disable();

        //Marker Generate
        this.createMarkers(mapboxClient, map);

        //KeyBoard Manipulations
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
    generateMarkerHTML(index){
        let marker = document.createElement('div');
            marker.classList.add('map-relax__marker');
            marker.textContent = index+1;

        //Append Circles into marker 
        for( let i = 0; i < 4; i++ ){
            let circle = document.createElement('div');
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
    generatePopupHTML(image,title,description){
        return `<div class="map-popup d-flex">
                    <div class="mbl-col-5 reset">
                        <div class="map-popup__image" style="background-image: url(${image});"></div>
                    </div>
                    <div class="mbl-col-7">
                        <h6 class="f-vb reset-top mb8">${title}</h6>
                        ${description}
                    </div>
                </div>`;
    }

    /**
     * 
     * Function for generating markers on map
     * 
     */
    createMarkers(mapboxClient, map){
        //Loop for create markers
        this.dataMarkers.forEach((dataMarker, index)=>{
            /**
             * 
             * All HTML objects
             * @markerHTML
             * @popupHTML
             * 
             */
            let markerHTML = this.generateMarkerHTML(index),
                popupHTML = new mapboxgl.Popup({ offset: 25 })
                        .setHTML(this.generatePopupHTML(dataMarker.image, dataMarker.title, dataMarker.description));

            //Create marker
            mapboxClient.geocoding.forwardGeocode({
                query: dataMarker.place,
                autocomplete: false,
                limit: 1
            })
            .send()
            .then(function (response) {
                if (response && response.body && response.body.features && response.body.features.length) {
                    let feature = response.body.features[0];

                    new mapboxgl.Marker(markerHTML)
                        .setLngLat(feature.center)
                        .setPopup(popupHTML)
                        .addTo(map);
                }
            });

        });//End of Loop
    }

    //On press CTRL active zoom and buttonPress change to true 
    onCTRLDown(map){ 
        window.addEventListener('keydown', e => {
            if ( e.ctrlKey ){
                map.scrollZoom.enable();
                this.mapAlert.classList.remove('map-relax__alert--active');
                this.buttonPress = true;
            }
        });
    }

    //On keyUp disable zoom and buttonPress change to false
    onCTRLUp(map){         
        window.addEventListener('keyup', () => {
            map.scrollZoom.disable();
            this.buttonPress = false;
        });
    }

    //If buttonPress is false and target of mouse is "Map", alert to press CTRL if want to zoom 
    onMouseWheel(){
        window.addEventListener('mousewheel', e => {
            if ( e.target.closest('.map-relax') && !this.buttonPress ){
                clearTimeout(this.timeout);
                this.mapAlert.classList.add('map-relax__alert--active');
                this.timeout = setTimeout(() => {
                    this.mapAlert.classList.remove('map-relax__alert--active');
                }, 1000);
            }
        });
    }
}//End of class
