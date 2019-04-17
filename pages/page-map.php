<?php
/**
 * 
 * Template name: Miejsca relaxu
 * 
 */

get_header();

$markers_relax = carbon_get_theme_option('map');
$markers_techs = carbon_get_theme_option('techs');
$all_markers = [$markers_relax, $markers_techs];

?>
<!-- : Map script init start : -->
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css' rel='stylesheet' />
<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.js'></script>
<script src='https://unpkg.com/es6-promise@4.2.4/dist/es6-promise.auto.min.js'></script>
<script src="https://unpkg.com/@mapbox/mapbox-sdk/umd/mapbox-sdk.min.js"></script>
<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-compare/v0.1.0/mapbox-gl-compare.js'></script>
<link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-compare/v0.1.0/mapbox-gl-compare.css' type='text/css' />
<!-- : Map script init end : -->

<div class="wrapper">

    <!-- ------------------ -->
    <!-- Main section start -->
    <!-- ------------------ -->

    <main class="main">
        <div class="maps-relax">
            <div id="maps-relax__relax" class="maps-relax__map">
                <div class="maps-relax__alert d-flex aic jcc">
                    <h3>Kliknij CTRL i przekręć kółkiem aby zoomować</h3>
                </div>
            </div>
            <div id="maps-relax__tech" class="maps-relax__map"></div>
        </div>
    </main>

    <!-- ------------------ -->
    <!--  Main section end  -->
    <!-- ------------------ -->

    <div class="map-hidden">
        <?php foreach ( $all_markers as $parent_key => $elements ): ?>
            <?php foreach ( $elements as $key => $marker ):
                        $city = $marker['map_city'];
                        $title = $marker['map_title']; 
                        $description = $marker['map_description']; 
                        $image = wp_get_attachment_image_url($marker['map_image'], 'full'); ?>
                <div data-id="<?php echo $parent_key; ?>"
                        data-city="<?php echo $city; ?>" 
                        data-title="<?php echo $title; ?>" 
                        data-description="<?php echo $description; ?>" 
                        data-image="<?php echo $image; ?>"></div>
            <?php endforeach; ?>
        <?php endforeach; ?>
    </div>

<script src="<?php echo get_template_directory_uri(); ?>/assets/js/updated/map-relax.js"></script>
<?php
get_footer();