<?php
/**
 * OdstresowaniPortal functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package OdstresowaniPortal
 */
$currlang = pll_current_language();
$INDEX = 'index.php';

//Libs
require get_template_directory() . '/includes/functions-fields.php';

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
require get_template_directory() . '/includes/components/component-general.php';
require get_template_directory() . '/includes/components/component-data-video.php';
require get_template_directory() . '/includes/components/component-global-fields.php';
require get_template_directory() . '/includes/components/component-posts.php';

/**
 *
 * Require Nav menu
 *
 */
require get_template_directory() . '/includes/functions-nav-menu.php';

/**
 *
 * Require Taxonomies
 *  ->Knowledge
 *  ->News
 *
 */
require get_template_directory() . '/includes/taxonomies/taxonomy-knowledge.php';
require get_template_directory() . '/includes/taxonomies/taxonomy-news.php';

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
require get_template_directory() . '/includes/fields/fields-theme-options.php';
require get_template_directory() . '/includes/fields/fields-taxonomy-category.php';
require get_template_directory() . '/includes/fields/fields-taxonomy-places.php';
require get_template_directory() . '/includes/fields/fields-taxonomy-page.php';
require get_template_directory() . '/includes/fields/fields-navmenu.php';
//Blocks
require get_template_directory() . '/includes/blocks/Hero/' . $INDEX;
require get_template_directory() . '/includes/blocks/SmallGallery/' . $INDEX;
require get_template_directory() . '/includes/blocks/AllPosts/' . $INDEX;
require get_template_directory() . '/includes/blocks/CustomCard/' . $INDEX;
require get_template_directory() . '/includes/blocks/GalleryWithThumbs/' . $INDEX;
require get_template_directory() . '/includes/blocks/Banner/' . $INDEX;
require get_template_directory() . '/includes/blocks/TabGallery/' . $INDEX;
require get_template_directory() . '/includes/blocks/BannerSmall/' . $INDEX;

/**
 *
 * Require Footer Hooks
 *
 */
require get_template_directory() . '/includes/hooks/functions-header.php';

/**
 * Require Cards Hooks
 */
require get_template_directory() . '/includes/hooks/Cards/card-mini.php';
require get_template_directory() . '/includes/hooks/Cards/card-normal.php';

/**
 * Layouts
 */
require get_template_directory() . '/template-parts/layouts/Wrapper/' . $INDEX;
require get_template_directory() . '/template-parts/layouts/Container/' . $INDEX;

/**
 * Modules
 */
require get_template_directory() . '/template-parts/modules/Hero/' . $INDEX;
require get_template_directory() . '/template-parts/modules/GreyTitle/' . $INDEX;
require get_template_directory() . '/template-parts/modules/Navigations/Normal/' . $INDEX;
require get_template_directory() . '/template-parts/modules/Navigations/Horizontal/' . $INDEX;
require get_template_directory() . '/template-parts/modules/Navigations/Social/' . $INDEX;

/**
 * Components
 */
require get_template_directory() . '/template-parts/components/Buttons/Normal/' . $INDEX;
 

/**
 * Require Translations
 */
require get_template_directory() . '/includes/functions-translates.php';

/**
 * Require ShortCodes
 */
require get_template_directory() . '/includes/functions-shortcodes.php';

