//Import AXIOS
import axios from 'axios';

export default class{
    constructor(object){
        this.element = document.querySelector(object.element);
        this.link = document.querySelector(object.link.element).dataset[object.link.data];
        this.needData = object.data;
        this.data = [];

        //Init MapBoxGL
        mapboxgl.accessToken = object.mapboxGl.accessToken;
        this.map = new mapboxgl.Map({
            container: this.element.id,
            style: object.mapboxGl.mapStyle, 
            center: object.mapboxGl.center, 
            zoom: object.mapboxGl.zoom
        });


        this.init();
    }

    init(){
        axios.get(this.link)
            .then( response => {
                let data = response.data;
                data.forEach( el => {
                    this.data.push(this.getData(el));
                });
            })
            .catch( error => {
                console.log(error)
            });
        console.log(this.data);
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