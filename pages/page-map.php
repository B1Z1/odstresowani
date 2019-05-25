<?php
/**
 * 
 * Template name: Miejsca relaxu
 * 
 */

get_header();
?>
<!-- : Map script init start : -->
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css' rel='stylesheet' />
<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.js'></script>
<script src='https://unpkg.com/es6-promise@4.2.4/dist/es6-promise.auto.min.js'></script>
<script src="https://unpkg.com/@mapbox/mapbox-sdk/umd/mapbox-sdk.min.js"></script>
<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-compare/v0.1.0/mapbox-gl-compare.js'></script>
<link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-compare/v0.1.0/mapbox-gl-compare.css' type='text/css' />
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/updated/map-relax.js"></script>
<!-- : Map script init end : -->
<div class="c-wrapper">

    <!-- ------------------ -->
    <!-- Main section start -->
    <!-- ------------------ -->
    
    <main class="main">
        <?php if ( have_posts() ): ?>
            <?php while (have_posts()): the_post();?>
                <?php the_content(); ?>
            <?php endwhile; ?>
        <?php endif; ?>
    </main>

    <!-- ------------------ -->
    <!--  Main section end  -->
    <!-- ------------------ -->

<?php
wp_footer();