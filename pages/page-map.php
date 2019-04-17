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
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/updated/map-relax.js"></script>
<script>
    //Init Markers data
    let dataMarkers = [];
    //Init data for map
    <?php foreach ( $marks as $key => $mark ): 
        $name = $mark['map_city'];
        $title = $mark['map_title']; 
        $description = $mark['map_description']; 
        $image = wp_get_attachment_image_url($mark['map_image'], 'full');
    ?>
    dataMarkers.push({
        'place':'<?php echo $name; ?>', 
        'title': '<?php echo $title; ?>',
        'description': '<?php echo $description; ?>',
        'image': '<?php echo $image; ?>',
        });
    <?php endforeach; ?>

    //Init map
    window.addEventListener('load', function() {
        var map = new MapRelax({
            token: 'pk.eyJ1IjoiaWx5YW1pc2hraW4iLCJhIjoiY2p1aWRrbDl2MTRrcDQ0cGdlMTN3ZWJ1cCJ9.tTVIhbBmMOhuH_Z5DKUN4A',
            container: 'map-relax',
            style: 'mapbox://styles/ilyamishkin/cjuifjhya0m221fqkauhk7fyv',
            center: [21,52],
            zoom: 6,
            dataMarkers: dataMarkers,
            //Alert element
            mapAlert: '.map-relax__alert',
        });
    });
</script>
<?php
get_footer();
