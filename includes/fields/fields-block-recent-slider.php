<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 *
 * Block Slider recent posts
 * Slider used in main page
 *
 */
add_action('carbon_fields_register_fields', 'crb_register_block_recent_slider', 10);
if (!function_exists('crb_register_block_recent_slider')) {
    function crb_register_block_recent_slider()
    {
        Block::make(__('Ostatnio dodane posty w slajderze'))
            ->add_fields(FieldsGlobal::getGaps())
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/block-parts/part-recent-posts.php', false, false));
            });
    }
}
