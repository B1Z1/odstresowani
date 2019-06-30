<?php 
$gapClasses = GeneralOptions::getAllGapsFromArray($block);
$args = [
    'gapClasses' => $gapClasses,
    'name' => $block['name'],
    'image' => wp_get_attachment_image_src($block['image'], 'full')[0],
    'description' => $block['description'],
    'link_text' => $block['link_text'],
    'link' => $block['link']
];

/**
 * Testiomonial Module
 */
do_action('odstresowani_module_testiomonial', $args);