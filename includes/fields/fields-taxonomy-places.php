<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

/**
 * 
 * Term taxonomy = miejsca
 * 
 */
add_action( 'carbon_fields_register_fields', 'crb_register_term_miejsca', 10 );
if ( !function_exists('crb_register_term_miejsca') ){
    function crb_register_term_miejsca(){
        Container::make( 'post_meta', __( 'Obowiązkowe punkty' ) )
            ->where( 'post_type', '=', 'markers' )
            ->add_fields( array(
                Field::make( 'text', 'adress', __( 'Adres Miejsca' ) ) 
                    ->set_required(true),
                Field::make('text', 'full_adress',  __('Adres dokładny')),
                Field::make('text', 'link', __( 'Link do danego miejsca' )),
                Field::make('text', 'phone',  __('Numer telefonu')),
                Field::make('image', 'sygnet', __( 'Sygnet na szarym tle' ))
            ) );
    }
}