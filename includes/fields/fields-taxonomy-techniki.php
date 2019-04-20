<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

/**
 * 
 * Term taxonomy = strefa-wiedzy-kategorie
 * 
 */
add_action( 'carbon_fields_register_fields', 'crb_register_term_techniki', 10 );
if ( !function_exists('crb_register_term_techniki') ){
    function crb_register_term_techniki(){
        Container::make( 'post_meta', __( 'Adres miejsca techniki' ) )
            ->where( 'post_type', '=', 'techniki' )
            ->add_fields( array(
                Field::make( 'text', 'adress', __( 'Adres Techniki' ) )
                    ->set_required(true),
                Field::make( 'image', 'sygnet', __( 'Sygnet na szarym tle' ) )
                    ->set_required(true),
            ) );
    }
}