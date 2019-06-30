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
$cat = get_queried_object();
?>

<main class="l-Wrapper">
    <?php
    $container = [
        [
            'title' => $cat->name,
            'description' => $cat->category_description,
            'image' => carbon_get_term_meta($cat->term_id, 'category_image'),
            'buttons' => []
        ]
    ];
    /**
     * Hero Banner Module
     */
    do_action('odstresowani_hero_banner', array(
        'gapClasses' => '',
        'container' => $container
    ));
    ?>

    <div class="l-Container l-Container--posts pt32 header__triger">
        <div class="d-flex fwrap row infinity-scroll">

            <?php if (have_posts()) :  ?>
                <?php while (have_posts()) : the_post(); ?>
                    <?php
                    /**
                     *
                     * Post type action
                     * -> Block
                     *
                     */
                    $args['url'] = get_permalink();
                    $args['title'] = get_the_title();
                    $args['describe'] = wp_trim_words(get_the_content(), 20);
                    $args['image'] = get_the_post_thumbnail_url(get_the_ID(), 'full');
                    $args['date'] = get_the_date('j M Y', get_the_ID());
                    $args['category'] = GeneralOptions::post_get_cat();; ?>
                    <div class="ntb-col-6 pc-col-4 mb64">
                        <?php do_action('post_card_block', $args); ?>
                    </div>
                <?php endwhile; ?>
            <?php endif; ?>
            
        </div>
    </div>
</main>
<!-- ------------------ -->
<!--  Main section end  -->
<!-- ------------------ -->

<?php
get_footer();
