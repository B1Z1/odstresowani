<?php 
$image = wp_get_attachment_image_src($block['image'], 'full')[0];
$text = $block['text'];
$gapClasses = GeneralOptions::getAllGapsFromArray($block);

$args = [
    'gapClasses' => $gapClasses,
    'image' => $image,
    'text' => $text
];

/**
 * SmallBanner Module
 */
do_action('odstresowani_module_banner_small', $args);
?>
