<?php
/**
 *
 *
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

$video_mp4 = wp_get_attachment_url(carbon_get_theme_option('404_film_mp4'));
$video_ogg = wp_get_attachment_url(carbon_get_theme_option('404_film_ogg')); ?>

    <!-- ------------------ -->
    <!-- Main section start -->
    <!-- ------------------ -->

    <main class="main">

        <section class="er404 m16 block block--hidden c-wh">
            <div class="filter filter-back filter--zmax bck-blck"></div>

            <?php if ( $video_mp4 ): ?>
                <video class="filter filter-video" muted autoplay loop>
                    <source src="<?php echo $video_mp4; ?>" type="video/mp4">
                    <?php if ( $video_ogg ): ?>
                        <source src="<?php echo $video_ogg; ?>" type="video/ogg">
                    <?php endif; ?>
                    Your browser does not support the video tag.
                </video>
            <?php endif; ?>

            <div class="er404__content block flex-kit jcc">
                <h3><span class="er404__404">404</span>Nie możemy znależć twojej strony</h3>
            </div>
        </section>

    </main>

    <!-- ------------------ -->
    <!--  Main section end  -->
    <!-- ------------------ -->

    <?php wp_footer(); ?>

    </body>
</html>