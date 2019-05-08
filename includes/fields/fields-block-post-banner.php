<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 *
 * Block Banner for posts
 *
 */
add_action( 'carbon_fields_register_fields', 'crb_register_block_post_banner', 10 );
if ( !function_exists('crb_register_block_post_banner') ){
    function crb_register_block_post_banner(){
        Block::make(__('Blok banner dla postów'))
            ->add_fields(array(
                Field::make('image', 'banner_image', __('Zdjęcie dla banera')),
                Field::make('text', 'banner_autor', __('Podaj autora zdjęcia')),
                Field::make('select', 'banner_size', __('Podaj rozmiar obrazu'))
                    ->set_options( array(
                        'small' => 'Mały',
                        'full' => 'Duży',
                    ))
                    ->set_default_value('small'),
                Field::make('checkbox', 'banner_type', __('Czy to jest gif?'))
                    ->set_option_value( 'Tak' )
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/block-parts/part-banner.php',false, false) );
            });
    }
}