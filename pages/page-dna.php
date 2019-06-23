<?php
/**
 * 
 * Template name: iDNA Stress
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package OdstresowaniPortal
 */

get_header();
?>

    <div class="c-wrapper">

        <!-- ------------------ -->
        <!-- Main section start -->
        <!-- ------------------ -->

        <div data-dna-three></div>

        <!-- ------------------ -->
        <!--  Main section end  -->
        <!-- ------------------ -->
<script src="<?php echo get_template_directory_uri() . '/assets/lib/Three/three.js/build/three.min.js' ?>"></script>
<script src="<?php echo get_template_directory_uri() . '/assets/lib/Three/zlib/bin/inflate.min.js' ?>"></script>
<script src="<?php echo get_template_directory_uri() . '/assets/lib/Three/three.js/examples/js/loaders/FBXLoader.js' ?>"></script>
<?php
get_footer();
