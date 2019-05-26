<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 *
 * Banner block
 * Custom cards for main page/maybe for smthing else
 *
 */
add_action( 'carbon_fields_register_fields', 'crb_register_custom_card', 10 );
if ( !function_exists('crb_register_custom_card') ){
    function crb_register_custom_card(){
        Block::make(__('Block z Kartkami własnego wyrobu'))
            ->add_fields(array(
                Field::make('complex', 'list', __('Dodaj Karte'))
                    ->add_fields(array(
                        Field::make('image', 'image', __('Dodaj zdjęcie')),
                        Field::make('text', 'title', __('Wpisz tytuł')),
                        Field::make('text', 'url', __('Wstaw link'))
                    ))
                    ->set_max( 2 )
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/block-parts/part-custom-card.php',false, false) );
            });
    }
}