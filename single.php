<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package OdstresowaniPortal
 */

get_header();
?>

<main class="l-Wrapper mb64">
    <article class="l-Post">

        <?php if (have_posts()) :  ?>

            <?php while (have_posts()) : the_post();
                $cat_image_id = GeneralOptions::post_category_sygnet();
                $cat_sygnet = wp_get_attachment_image_src($cat_image_id, 'full')[0];
                ?>

                <!-- Post Title -->
                <div class="l-Post__title">
                    <?php
                    /**
                     *  GreyTitle Module
                     */
                    do_action('odstresowani_GreyTitle', get_the_title(), $cat_sygnet);
                    ?>
                </div>

                <?php
                /**
                 * Yoast Breadcrumbs Module 
                 */
                get_template_part('template-parts/modules/Breadcrumbs/index');
                ?>

                <!-- Post Content -->
                <div class="l-Post__content header__triger m-WYSIWYG">
                    <div class="l-Container l-Container--960">
                        <?php the_content(); ?>
                        <?php get_template_part('template-parts/content', 'share'); ?>
                    </div>
                </div>

                <!-- Post Avatar -->
                <div class="l-Post__avatar mt64 mb64 mauto">
                    <img src="<?php echo get_avatar_url(get_the_author_meta('id')); ?>" alt="Avatar">
                </div>

            <?php endwhile; ?>

        <?php endif; ?>

    </article>
    <div class="l-Container">
        <?php
        /**
         *
         *  Most viewed posts
         *
         */
        get_template_part('template-parts/content', 'most-viewed-2');
        ?>
    </div>
</main>
<?php
get_footer();
