class OdstresowaniMap{
    constructor(object){
        this.dataMarkers = this.getData([... document.querySelector(`.${object.dataMarkers.container}`).children]);
        this.token = object.token;
        this.map = object.map;
        this.marker = object.marker !== undefined ? object.marker:null;
        this.popup = object.popup !== undefined ? object.popup:null;
        this.mapBoxClient = mapboxSdk({ accessToken: object.token });

        //Variables for alert
        this.alert = object.alert !== undefined ? {el:document.querySelector(`.${object.alert.el}`), active: object.alert.active}:null;
        this.timeout;
        this.isCTRL = false;

        //Coordinates for Line draw
        if ( object.lineDraw )
            this.coords = [];
    }

    init(){
        this.map.scrollZoom.disable();
        this.onCTRLDown();
        this.onCTRLUp();
        if ( this.alert )
            this.onMouseWheel();

        this.dataMarkers.forEach((data, index) => {
            let markerHTML = this.marker ? this.getTemplateMarker(data.image, index) : console.log('Marker is NULL'),
                popupHTML = this.popup ? this.getTemplatePopUp(data.image, data.title, data.description):console.log('PopUp is NULL'),
                popUp = new mapboxgl.Popup({ offset: 25 })
                        .setHTML(popupHTML);
            
            if ( data.adress ){
                this.mapBoxClient.geocoding.forwardGeocode({
                    query: data.adress,
                    autocomplete: false,
                    limit: 1
                })
                    .send()
                    .then(response => {
                        if (response && response.body && response.body.features && response.body.features.length) {
                            var feature = response.body.features[0];
                            //Get coordinates from marker
                            if( this.coords )
                                this.coords.push(response.body.features[0].center);
                            new mapboxgl.Marker(markerHTML)
                                .setLngLat(feature.center)
                                .setPopup(popUp)
                                .addTo(this.map);
                        }
                    });
            }
        });   
        if ( this.coords )
            this.lineDraw();
    }

    lineDraw(){
        
        this.map.on('load', ()=>{
            this.map.addLayer({
                "id": "route",
                "type": "line",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": this.coords
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
    onCTRLDown(){
        window.addEventListener('keydown', (ev)=>{
            if ( ev.ctrlKey ){
                this.map.scrollZoom.enable();
                this.isCTRL = true;
                if ( this.alert )
                    this.alert.el.classList.remove(this.alert.active);
            }
        });
    }

    /**
     * 
     * On CTRL up, disable zoom
     * 
     */
    onCTRLUp(){
        window.addEventListener('keyup', (ev)=>{
            this.map.scrollZoom.disable();
            this.isCTRL = false;
        });
    }

    /**
     * 
     * On mouse wheel enable alert
     * 
     */
    onMouseWheel(){
        window.addEventListener('mousewheel', (ev)=>{
            if ( ev.target.closest('.maps-relax') && !this.isCTRL ){
                clearTimeout(this.timeout);
                this.alert.el.classList.add(this.alert.active);
                this.timeout = setTimeout(()=>{
                    this.alert.el.classList.remove(this.alert.active);
                },1000);
            }
        });
    }

    /**
     * 
     * Generate Template for popup
     * 
     */
    getTemplatePopUp(image, title, description){
        return `<div class="maps-popup d-flex">
                    <div class="mbl-col-5 reset">
                        <div class="maps-popup__image" style="background-image: url(${image});"></div>
                    </div>
                    <div class="mbl-col-7">
                        <h5 class="reset-top mb8 f-vb">${title}</h5>
                        ${description}
                    </div>
                </div>`;
    }

    /**
     * 
     * Generate Template for marker
     * 
     */
    getTemplateMarker(image, index){
        let markerHTML = document.createElement(this.marker.el);
        this.marker.classes.forEach(el => {
            markerHTML.classList.add(el);
        });

        if ( this.marker.isNumeric )
            markerHTML.textContent = index + 1;
        else if ( this.marker.hasImage && image )
            markerHTML.style.backgroundImage = `url(${image})`;

        if ( this.marker.pulse ){
            for ( let i = 0; i < 4; i++ ){
                let circle = document.createElement('div');
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
    getData(children){
        let elements = children,
            markers = [];
        elements[0].parentNode.remove();
        elements.forEach((el)=>{
            let dataObject = {
                title: el.dataset.title ? el.dataset.title:null,
                description: el.dataset.description ? el.dataset.description:null,
                image: el.dataset.image ? el.dataset.image:null,
                adress: el.dataset.adress ? el.dataset.adress:null,
            }
            markers.push(dataObject);
        });

        return markers;
    }

}

window.addEventListener('load', function(){
    //Token for map
    mapboxgl.accessToken = 'pk.eyJ1IjoiaWx5YW1pc2hraW4iLCJhIjoiY2p1aWRrbDl2MTRrcDQ0cGdlMTN3ZWJ1cCJ9.tTVIhbBmMOhuH_Z5DKUN4A';
    let map_relax = new OdstresowaniMap({
        token: mapboxgl.accessToken,
        //Take data
        dataMarkers: {
            container: 'map-hidden__relax',
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
            classes: [
                'maps-relax__marker'
            ],
            pulse: true,
            isNumeric: true,
            hasImage: false,
            lineDraw: false
        },
        //PopupConfiguration
        popup: {
            classes: [
                'maps-popup'
            ]
        },
        //AlertBlock
        alert: {
            el: 'maps-relax__alert',
            active: 'maps-relax__alert--active'
        },
        lineDraw: false
    });
    let map_tech = new OdstresowaniMap({
        token: mapboxgl.accessToken,
        //Take data
        dataMarkers: {
            container: 'map-hidden__techs',
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
            classes: [
                'maps-relax__marker'
            ],
            pulse: false,
            isNumeric: false,
            hasImage: true
        },
        //PopupConfiguration
        popup: {
            classes: [
                'maps-popup'
            ]
        },
        //LineDraw
        lineDraw: true
    });

    //Init Maps
    map_relax.init();
    map_tech.init();
    let map = new mapboxgl.Compare(map_relax.map, map_tech.map, {});
});





















































