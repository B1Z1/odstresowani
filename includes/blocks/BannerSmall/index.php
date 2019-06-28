<?php
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 * 
 * 
 * Video gallery block
 * 
 */
add_action('carbon_fields_register_fields', 'crb_register_block_welcome', 10);
if (!function_exists('crb_register_block_welcome')) {
    function crb_register_block_welcome()
    {
        Block::make(__('Mały banner'))
            ->add_fields(FieldsGlobal::getGaps())
            ->add_fields(array(
                Field::make('text', 'link', __('Link do blogu')),
                Field::make('image', 'image', __('Obrazek'))
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/blocks/BannerSmall/index.php', false, false));
            });
    }
}
