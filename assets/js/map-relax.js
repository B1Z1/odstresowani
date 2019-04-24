class OdstresowaniMap{
    constructor(object){
        this.dataMarkers = this.getData([... document.querySelector(`.${object.dataMarkers.container}`).children]);
        if ( this.dataMarkers !== null ){
            this.token = object.token;
            this.map = object.map;
            this.marker = object.marker !== undefined ? object.marker:null;
            this.popup = object.popup !== undefined ? object.popup:null;
            this.mapBoxClient = mapboxSdk({ accessToken: object.token });

            //Coordinates for Line draw
            if ( object.lineDraw )
                this.coords = [];
            this.init();
        }
        else {
            return null;
        }
    }

    init(){
        this.dataMarkers.forEach((data, index) => {
            let markerHTML = this.marker ? this.getTemplateMarker(data.image, index) : console.log('Marker is NULL'),
                popupHTML = this.popup ? this.getTemplatePopUp(data.image, data.title, data.description, data.link):console.log('PopUp is NULL'),
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
     * Generate Template for popup
     * 
     */
    getTemplatePopUp(image, title, description, link){
        return `<div class="maps-popup d-flex">
                    <div class="mbl-col-5 reset">
                        <div class="maps-popup__image" style="background-image: url(${image});"></div>
                    </div>
                    <div class="mbl-col-7">
                        <h5 class="reset-top mb8 f-vb"><a ${ link ? `href="${link}"` : '' } class="link link--underline reset-link">${title}</a></h5>
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
        else if ( this.marker.alert ){
            markerHTML.textContent = '!';
            markerHTML.classList.add('maps-marker--alert');
        }

        if ( this.marker.pulse ){
            for ( let i = 0; i < 4; i++ ){
                let circle = document.createElement('div');
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
    getData(children){
        let elements = children,
            markers = [];

        if ( elements === undefined || elements.length === 0 ){ 
            return null;
        }
        elements.forEach((el)=>{
            let dataObject = {
                title: el.dataset.title ? el.dataset.title:null,
                description: el.dataset.description ? el.dataset.description:null,
                image: el.dataset.image ? el.dataset.image:null,
                adress: el.dataset.adress ? el.dataset.adress:null,
                link: el.dataset.link ? el.dataset.link:null,
            }
            markers.push(dataObject);
        });

        return markers;
    }

}























































