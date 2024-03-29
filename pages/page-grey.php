<?php

/**
 *
 * Template name: Szablon z szarym tłem
 *
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package OdstresowaniPortal
 */

get_header();

$sygnet = wp_get_attachment_image_src(carbon_get_post_meta(get_the_ID(), 'page_sygnet'), 'full')[0];
?>

<?php if (have_posts()) :  ?>

    <?php while (have_posts()) : the_post(); ?>
        <main class="l-Wrapper mb64">
            <article class="l-Page">
                <div class="l-Page__title">
                    <?php
                    /**
                     *  GreyTitle Module
                     */
                    do_action('odstresowani_GreyTitle', get_the_title(), $sygnet);
                    ?>
                </div>

                <div class="l-Page__breadcrumbs">
                    <?php
                    /**
                     * Yoast Breadcrumbs Module 
                     */
                    get_template_part('template-parts/modules/Breadcrumbs/index');
                    ?>
                </div>

                <div class="l-Page__content m-WYSIWYG">
                    <div class="l-Container l-Container--960 header__triger">
                        <?php the_content(); ?>
                        <?php get_template_part('template-parts/content', 'share'); ?>
                    </div>
                </div>
            </article>
        </main>
    <?php endwhile; ?>

<?php endif; ?>

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

<?php
get_footer();
