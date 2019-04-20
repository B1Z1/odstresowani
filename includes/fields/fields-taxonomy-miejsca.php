<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

/**
 * 
 * Term taxonomy = strefa-wiedzy-kategorie
 * 
 */
add_action( 'carbon_fields_register_fields', 'crb_register_term_miejsca', 10 );
if ( !function_exists('crb_register_term_miejsca') ){
    function crb_register_term_miejsca(){
        Container::make( 'post_meta', __( 'Adres miejsca relaxu' ) )
            ->where( 'post_type', '=', 'miejsca_relaxu' )
            ->add_fields( array(
                Field::make( 'text', 'adress', __( 'Adres Miejsca' ) ),
            ) );
    }
}