//Import AXIOS
import axios from 'axios';

export default class{
    constructor(object){
        this.element = document.querySelector(object.element);
        this.linkElement = document.querySelector(object.link.element);
        this.categoryElement = document.querySelector(object.categoryLink.element);

        if ( this.element && this.linkElement && this.categoryElement ){
            //Type of post
            this.type = object.type;

            //Rest links to posts and categories
            this.link = this.linkElement.dataset[object.link.data];
            this.linkCategory = this.categoryElement.dataset[object.categoryLink.data];

            this.needData = object.data;

            //Data markers
            this.data = [];
            //Category Data
            this.dataCategory = [];

            this.linkElement.remove();
            this.categoryElement.remove();

            //Access Token for map
            this.accessToken = object.mapboxGl.accessToken;

            //Init MapBoxGL
            mapboxgl.accessToken = this.accessToken;
            this.map = new mapboxgl.Map({
                container: this.element.id,
                style: object.mapboxGl.mapStyle, 
                center: object.mapboxGl.center, 
                zoom: object.mapboxGl.zoom
            });


            this.init();
        }
    }

    init(){
        axios.get(this.link)
            .then( response => {
                let data = response.data;
                data.forEach( el => {
                    this.data.push(this.getData(el));
                });
                this.generateMarkers();
            })
            .catch( error => {
                console.log(error)
            });

        axios.get(this.linkCategory)
            .then( response => {
                response.data.forEach( el => {
                    this.dataCategory.push(this.getCategoryData(el));
                })
            })
            .catch( error =>{
                console.log(error);
            });    

    }

    /**
     * 
     * Generate all markers on the map
     * 
     */
    generateMarkers(){
        let mapboxClient = mapboxSdk({ accessToken: this.accessToken });
        

        this.data.forEach( (el, index) => {
            let marker = el;
            
            mapboxClient.geocoding.forwardGeocode({
                query: marker._adress,
                autocomplete: false,
                limit: 1
            }) 
            .send()
            .then( response => {
                if (response && response.body && response.body.features && response.body.features.length) {
                    let feature = response.body.features[0],
                        marker = this.markerTemplates(index + 1);
                    new mapboxgl.Marker(marker)
                        .setLngLat(feature.center)
                        .addTo(this.map);
                    console.log(this.map);                    
                }
            });
        });
    }

    markerTemplates(index, name = 'classic'){
        switch ( name ){
            case 'classic': return this.classicMarker(index);
        }
    }

    /**
     * 
     * @param {*} index 
     * Template for classic marker 
     * 
     */
    classicMarker(index){
        let element = document.createElement('div');
        element.classList.add('c-marker');
        element.textContent = index;

        for ( let i = 0; i <= 2; i++ ){
            let circle = document.createElement('div');
            circle.classList.add('c-marker__circle');
            element.appendChild(circle);
        }

        return element;
    }

    /**
     * 
     * @param {*} element 
     * Function gets data from all categories
     * This will be need for filter by category id
     * 
     */
    getCategoryData(element){
        return  {    
                    id: element.id,
                    name: element.name
                };
    }

    /**
     * 
     * @param {*} element 
     * 
     * Function gets element from response
     * and pushing data for global variable
     * 
     */
    getData(element){
        let localData = {};

        this.needData.forEach( data => {
            switch ( data ){
                case 'title': 
                    localData[data] = element.title['rendered'];
                break;

                case 'content': 
                    localData[data] = element.content['rendered'];
                break;

                case 'categories': 
                    localData[data] = element[`${this.type}-category`];
                break;

                case 'image': 
                    let restImage = element._links['wp:featuredmedia'][0]['href'];
                    axios.get(restImage)
                        .then( response => {
                            localData[data] = response.data['source_url'];
                        })
                        .catch( error => {
                            console.log(error);
                        });
                break;

                default:
                    localData[data] = element[data];
                break;
            }
        });

        return localData;
    }
}