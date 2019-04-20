<?php
/**
 * 
 * Template name: Miejsca relaxu
 * 
 */

get_header();

$mapData = new OdsMap();

$relax_markers = $mapData->getData('miejsca_relaxu');
$techs_markers = $mapData->getData('techniki');


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
                <h3 class="maps-title maps-title__relax f-vb">Miejsca Relaxu</h3>
            </div>
            <div id="maps-relax__tech" class="maps-relax__map maps-relax__tech">
                <h3 class="maps-title maps-title__techs f-vb">Techniki</h3>
            </div>
        </div>
    </main>

    <!-- ------------------ -->
    <!--  Main section end  -->
    <!-- ------------------ -->

    <div class="map-hidden">
        <div class="map-hidden__relax">
            <?php foreach ( $relax_markers as $key => $marker ): 
                    $type = $marker['type'];
                    $title = $marker['title'];
                    $description = $marker['description']; 
                    $image = $marker['image'];  
                    $adress = $marker['adress'];  
                    $link = $marker['link'];  ?>
                    <div data-type="<?php echo $type; ?>"
                        data-title="<?php echo $title; ?>" 
                        data-description="<?php echo $description; ?>" 
                        data-image="<?php echo $image; ?>"
                        data-adress="<?php echo $adress; ?>"
                        data-link="<?php echo $link; ?>"></div>
            <?php endforeach; ?>
        </div>
        <div class="map-hidden__techs">
            <?php foreach ( $techs_markers as $key => $marker ): 
                    $type = $marker['type'];
                    $title = $marker['title'];
                    $description = $marker['description']; 
                    $image = $marker['image'];  
                    $adress = $marker['adress'];
                    $link = $marker['link'];  ?>
                    <div data-type="<?php echo $type; ?>"
                        data-title="<?php echo $title; ?>" 
                        data-description="<?php echo $description; ?>" 
                        data-image="<?php echo $image; ?>"
                        data-adress="<?php echo $adress; ?>"
                        data-link="<?php echo $link; ?>"></div>
            <?php endforeach; ?>
        </div>
    </div>

<script src="<?php echo get_template_directory_uri(); ?>/assets/js/updated/map-relax.js"></script>
<?php
wp_footer();