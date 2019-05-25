<?php
/**
 *
 * Template name: Strona Kontaktowa
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

$video_mp4 = wp_get_attachment_url(carbon_get_theme_option('contact_film_mp4'));
$video_ogg = wp_get_attachment_url(carbon_get_theme_option('contact_film_ogg')); ?>

    <div class="wrapper">

        <!-- ------------------ -->
        <!-- Main section start -->
        <!-- ------------------ -->

        <main class="main">

            <section class="contact block block--hidden pt128 pb128 c-wh">
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
                <div class="contact__content post block">
                    <div class="c-container">
                        <div class="row">
                            <div class="ntb-col-10 mauto">
                                <?php if ( have_posts() ):  ?>
                                    <?php while (have_posts()): the_post(); ?>
                                        <?php the_content(); ?>
                                    <?php endwhile; ?>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

        <!-- ------------------ -->
        <!--  Main section end  -->
        <!-- ------------------ -->

<?php
get_footer();
