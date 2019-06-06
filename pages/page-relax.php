<?php 
/**
 * 
 * Template name: Relax
 * 
 */
get_header();

$rest_relax_link = carbon_get_theme_option('rest_api_markers');
$rest_relax_category_link = carbon_get_theme_option('rest_api_markers_category');
?>
<!-- : Map script init start : -->
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css' rel='stylesheet' />
<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.js'></script>
<script src='https://unpkg.com/es6-promise@4.2.4/dist/es6-promise.auto.min.js'></script>
<script src="https://unpkg.com/@mapbox/mapbox-sdk/umd/mapbox-sdk.min.js"></script>
<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-compare/v0.1.0/mapbox-gl-compare.js'></script>
<link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-compare/v0.1.0/mapbox-gl-compare.css' type='text/css' />
<!-- : Map script init end : -->

    <!-- ------------------ -->
    <!-- Main section start -->
    <!-- ------------------ -->

    <main class="main">
        <div class="c-wrapper c-wrapper--fullscreen">
            <div id="c-map__relax" class="c-map" data-map-init></div>
        </div>
    </main>

    <!-- ------------------ -->
    <!--  Main section end  -->
    <!-- ------------------ -->

    <div data-rest-link="<?php echo $rest_relax_link; ?>"></div>
    <div data-rest-category-link="<?php echo $rest_relax_category_link; ?>"></div>

    <?php wp_footer(); ?>

    </body>
</html>