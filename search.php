<?php

/**
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

$sygnet = wp_get_attachment_image_src(carbon_get_theme_option('general_sygnet_search'), 'full')[0]; ?>

<main class="l-Wrapper">
    <div class="l-Search">
        <?php if (have_posts()) : ?>

            <div class="l-Search__title">
                <?php
                /**
                 *  GreyTitle Module
                 */
                $title = 'Posty szukane według: "' . get_search_query() . '"';
                do_action('odstresowani_GreyTitle', $title, $sygnet);
                ?>
            </div>
            <!-- Search block -->


            <div class="l-Search__content header__triger">
                <div class="d-flex fwrap infinity-scroll">

                    <?php while (have_posts()) : the_post(); ?>

                        <div class="pc-col-4">
                            <?php
                            /**
                             *
                             * Post type action
                             * -> Block
                             *
                             */
                            $args['url'] = get_permalink();
                            $args['title'] = get_the_title();
                            $args['image'] = get_the_post_thumbnail_url(get_the_ID(), 'full');

                            do_action('post_card_mini', $args);
                            ?>
                        </div>

                    <?php endwhile; ?>

                </div>
            </div>

            <!-- Search block -->

        <?php else : ?>

            <?php
            $video_mp4 = wp_get_attachment_url(carbon_get_theme_option('search_film_mp4'));
            $video_ogg = wp_get_attachment_url(carbon_get_theme_option('search_film_ogg')); ?>

            <!-- Search not fount -->
            <section class="l-Search__notfound block block--hidden pt128 pb128 c-wh">
                <div class="filter filter-back filter--zmax bck-blck"></div>

                <?php if ($video_mp4) : ?>
                    <video class="filter filter-video" muted autoplay loop>
                        <source src="<?php echo $video_mp4; ?>" type="video/mp4">
                        <?php if ($video_ogg) : ?>
                            <source src="<?php echo $video_ogg; ?>" type="video/ogg">
                        <?php endif; ?>
                        Your browser does not support the video tag.
                    </video>
                <?php endif; ?>

                <div class="l-Search__content block">
                    <div class="l-Container">
                        <div class="row">
                            <div class="ntb-col-6">
                                <h1 class="reset">Nie znależliśmy posta, którego właśnie szukałeś</h1>
                                <h3 class="reset-top">Spróbuj wpisać coś innego</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Search not fount -->
        <?php endif; ?>
    </div>
</main>

<!-- ------------------ -->
<!--  Main section end  -->
<!-- ------------------ -->

<?php
get_footer();
