<?php
/**
 * OdstresowaniPortal functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package OdstresowaniPortal
 */
$currlang = pll_current_language();


/**
 *
 * Shuffle posts
 *
 */
add_filter('the_posts', 'shuffle_the_posts', 10, 2);
if ( !function_exists( 'shuffle_the_posts' ) ){
    function shuffle_the_posts($posts, WP_Query $query){
        if ( $pick = $query->get('_shuffle_and_pick') ){
            shuffle($posts);
            $posts = array_splice( $posts, 0, (int)$pick );
        }
        return $posts;
    }
}

/**
 * 
 * Components
 * 
 */
require get_template_directory() . '/includes/components/component-advanced-block.php';
require get_template_directory() . '/includes/components/component-data-video.php';
require get_template_directory() . '/includes/components/component-map.php';

/**
 *
 * Require Nav menu
 *
 */
require get_template_directory() . '/includes/functions-nav-menu.php';

/**
 *
 * Require Taxonomies
 *  ->Miejsca
 *  ->Knowledge
 *
 */
require get_template_directory() . '/includes/taxonomies/taxonomy-places.php';
require get_template_directory() . '/includes/taxonomies/taxonomy-knowledge.php';
/**
 * Enqueue scripts and styles.
 */
require  get_template_directory() . '/includes/functions-enqueue.php';

/**
 *
 * Require theme support
 *
 */
require get_template_directory() . '/includes/functions-theme-support.php';

/**
 *
 * Require Carbon fields
 *
 */
require get_template_directory() . '/includes/functions-fields.php';
require get_template_directory() . '/includes/fields/fields-theme-options.php';
require get_template_directory() . '/includes/fields/fields-taxonomy-category.php';
require get_template_directory() . '/includes/fields/fields-taxonomy-places.php';
require get_template_directory() . '/includes/fields/fields-taxonomy-page.php';
require get_template_directory() . '/includes/fields/fields-navmenu.php';
//Blocks
require get_template_directory() . '/includes/fields/fields-block-banner.php';
require get_template_directory() . '/includes/fields/fields-block-advanced.php';
require get_template_directory() . '/includes/fields/fields-block-page-slider.php';
require get_template_directory() . '/includes/fields/fields-block-recent-slider.php';
require get_template_directory() . '/includes/fields/fields-block-all-posts.php';
require get_template_directory() . '/includes/fields/fields-block-most-viewed.php';
require get_template_directory() . '/includes/fields/fields-block-post-banner.php';
require get_template_directory() . '/includes/fields/fields-block-operation-river.php';
require get_template_directory() . '/includes/fields/fields-block-image-gallery.php';
require get_template_directory() . '/includes/fields/fields-block-video-gallery.php';
require get_template_directory() . '/includes/fields/fields-block-map.php';
require get_template_directory() . '/includes/fields/fields-block-gallery-image.php';
require get_template_directory() . '/includes/fields/fields-block-custom-card.php';
require get_template_directory() . '/includes/fields/fields-block-welcome.php';

/**
 *
 * Require Footer Hooks
 *
 */
require get_template_directory() . '/includes/hooks/functions-header.php';
/**
 *
 * Require Footer Hooks
 *
 */
require get_template_directory() . '/includes/hooks/functions-footer.php';
/**
 *
 * Require Posts Hooks
 *
 */
require get_template_directory() . '/includes/hooks/functions-posts.php';
/**
 *
 * Require Translations
 *
 */
require get_template_directory() . '/includes/functions-translates.php';
/**
 *
 * Require ShortCodes
 *
 */
require get_template_directory() . '/includes/functions-shortcodes.php';


