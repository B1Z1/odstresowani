<?php
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 * Block image gallery
 */
add_action('carbon_fields_register_fields', 'crb_register_block_image_gallery', 10);
if (!function_exists('crb_register_block_image_gallery')) {
    function crb_register_block_image_gallery()
    {
        Block::make(__('Galeria obrazków'))
            ->add_fields(FieldsGlobal::getGaps())
            ->add_fields(array(
                Field::make('complex', 'container', __('Galeria obrazków'))
                    ->add_fields(array(
                        Field::make('image', 'image', __('Obrazek')),
                        Field::make('text', 'link', __('Link')),
                    )),
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/blocks/SmallGallery/index.php', false, false));
            });
    }
}
