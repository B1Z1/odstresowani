<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

/**
 * 
 * Term taxonomy = relax
 * 
 */
add_action( 'carbon_fields_register_fields', 'crb_register_term_relax', 10 );
if ( !function_exists('crb_register_term_relax') ){
    function crb_register_term_relax(){
        Container::make( 'post_meta', __( 'Obowiązkowe punkty' ) )
            ->where( 'post_type', '=', 'relax' )
            ->add_fields( array(
                Field::make( 'text', 'adress', __( 'Adres Miejsca' ) ) 
                    ->set_required(true),
                Field::make('text', 'phone',  __('Numer telefonu')),
            ) );
    }
}