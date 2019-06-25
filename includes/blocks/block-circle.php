<?php
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
            ->add_fields(FieldsGlobal::getGaps())
            ->add_fields(array(
                Field::make('image', 'image', __('Obraz')),
                Field::make('text', 'title', __('Tytuł')),
                Field::make('textarea', 'describe', __('Opis'))
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/blocks/block-custom-card.php',false, false) );
            });
    }
}