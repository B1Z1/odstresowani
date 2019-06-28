<?php
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 *
 * Block Banner for posts
 *
 */
add_action('carbon_fields_register_fields', 'crb_register_block_post_banner', 10);
if (!function_exists('crb_register_block_post_banner')) {
    function crb_register_block_post_banner()
    {
        Block::make(__('Blok banner dla postów'))
            ->add_fields(FieldsGlobal::getGaps())
            ->add_fields(array(
                Field::make('image', 'image', __('Zdjęcie dla banera')),
                Field::make('text', 'author', __('Podaj autora zdjęcia')),
                Field::make('select', 'size', __('Podaj rozmiar obrazu'))
                    ->set_options(array(
                        'small' => 'Mały',
                        'full' => 'Duży',
                        '2xfull' => 'Podwójnie Duży'
                    ))
                    ->set_default_value('small'),
                Field::make('checkbox', 'type', __('Czy to jest gif?'))
                    ->set_option_value('Tak')
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/blocks/Banner/index.php', false, false));
            });
    }
}
