<?php 
wp_reset_postdata();

$args = [
    'gapClasses' => GeneralOptions::getAllGapsFromArray($block),
    'moduleTitle' => $block['title'],
    'posts' => get_posts([
        'post_type' => $block['post_type'],
        'numberposts' => 10
    ]) 
];
/**
 * GalleryNormal Module
 */
do_action('odstresowani_module_gallery_normal', $args);
?>
