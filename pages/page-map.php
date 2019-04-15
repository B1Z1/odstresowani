<?php
/**
 * 
 * Template name: Miejsca relaxu
 * 
 */

get_header();

$marks = carbon_get_theme_option('map');

?>
<!-- : Map script init start : -->
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css' rel='stylesheet' />
<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.js'></script>
<script src='https://unpkg.com/es6-promise@4.2.4/dist/es6-promise.auto.min.js'></script>
<script src="https://unpkg.com/@mapbox/mapbox-sdk/umd/mapbox-sdk.min.js"></script>
<!-- : Map script init end : -->

    <div class="wrapper">

        <!-- ------------------ -->
        <!-- Main section start -->
        <!-- ------------------ -->

        <main class="main">
            <div id="map-relax" class="map-relax">
                <div class="map-relax__alert d-flex aic jcc">
                    <h3>Kliknij CTRL i przekręć kółkiem aby zoomować</h3>
                </div>
            </div>
        </main>

        <!-- ------------------ -->
        <!--  Main section end  -->
        <!-- ------------------ -->

<script>
    //Map token here ----->
    mapboxgl.accessToken = 'pk.eyJ1IjoiaWx5YW1pc2hraW4iLCJhIjoiY2p1aWRrbDl2MTRrcDQ0cGdlMTN3ZWJ1cCJ9.tTVIhbBmMOhuH_Z5DKUN4A';

    // : Init map :
    let map = new mapboxgl.Map({
        container: 'map-relax',
        style: 'mapbox://styles/ilyamishkin/cjuifjhya0m221fqkauhk7fyv',
        center: [21,52],
        zoom: 6
    }),
        mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken }),
        dataMarkers = [],
        mapAlert = document.querySelector('.map-relax__alert'), //Alert when
        buttonPress = false, //Variable for button press
        timeout; //Variable for cancel and add timeout

    //Disable zoom
    map.scrollZoom.disable();

    //Init data for map
    <?php foreach ( $marks as $key => $mark ): 
        $name = $mark['map_city'];
        $description = $mark['map_description']; 
    ?>
    dataMarkers.push({'place':'<?php echo $name; ?>', 'description': '<?php echo $description; ?>'});
    <?php endforeach; ?>

    //Loop for create markers
    dataMarkers.forEach(function(dataMarker, index){
        //Marker object
        let marker = document.createElement('div');
        marker.classList.add('map-relax__marker');
        marker.textContent = index+1;

        //Append Circles into marker 
        for( let i = 0; i < 4; i++ ){
            let circle = document.createElement('div');
            circle.classList.add('map-relax__circle');
            marker.appendChild(circle);
        }

        //Create popup
        let popup = new mapboxgl.Popup({ offset: 25 })
                    .setText(dataMarker.description);

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
                    new mapboxgl.Marker(marker)
                    .setLngLat(feature.center)
                    .setPopup(popup)
                    .addTo(map);
                }
            });
    });

    //On press CTRL active zoom and buttonPress change to true  
    window.addEventListener('keydown', function(e){
        if ( e.ctrlKey ){
            map.scrollZoom.enable();
            mapAlert.classList.remove('map-relax__alert--active');
            buttonPress = true;
        }
    });

    //On keyUp disable zoom and buttonPress change to false
    window.addEventListener('keyup', function(e){
        map.scrollZoom.disable();
        buttonPress = false;
    });

    //If buttonPress is false and target of mouse is "Map", alert to press CTRL if want to zoom 
    window.addEventListener('mousewheel', function(e){
        if ( e.target.closest('.map-relax') && !buttonPress ){
            clearTimeout(timeout);
            mapAlert.classList.add('map-relax__alert--active');
            timeout = setTimeout(() => {
                mapAlert.classList.remove('map-relax__alert--active');
            }, 1000);
        }
    });

</script>
<?php
get_footer();
