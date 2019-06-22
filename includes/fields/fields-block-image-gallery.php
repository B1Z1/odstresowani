<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 *
 * Block image gallery
 *
 */
add_action('carbon_fields_register_fields', 'crb_register_block_image_gallery', 10);
if (!function_exists('crb_register_block_image_gallery')) {
    function crb_register_block_image_gallery()
    {
        Block::make(__('Galeria obrazków'))
            ->add_fields(array(
                Field::make('complex', 'mini_images', __('Tekst nad przyciskiem'))
                    ->add_fields(FieldsGlobal::getGaps())
                    ->add_fields(array(
                        Field::make('image', 'mini_images_image', __('Obrazek')),
                        Field::make('text', 'mini_images_url', __('Link')),
                        Field::make('select', 'mini_images_size', __('Rozmiar po szerokości obrazku'))
                            ->set_options(array(
                                '1' => '1 Kolumna',
                                '2' => '2 Kolumny',
                                '3' => '3 Kolumny',
                                '4' => '4 Kolumny',
                                '5' => '5 Kolumn',
                                '6' => '6 Kolumn',
                                '7' => '7 Kolumn',
                                '8' => '8 Kolumn',
                                '9' => '9 Kolumn',
                                '10' => '10 Kolumn',
                                '11' => '11 Kolumn',
                                '12' => '12 Kolumn',
                            )),
                    )),
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/block-parts/part-mini-images.php', false, false));
            });
    }
}
