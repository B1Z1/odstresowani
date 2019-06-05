<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

/**
 * 
 * Term taxonomy = page
 * 
 */
add_action( 'carbon_fields_register_fields', 'crb_register_term_page', 10 );
if ( !function_exists('crb_register_term_page') ){
    function crb_register_term_page(){
        Container::make( 'post_meta', __( 'Category Properties' ) )
            ->where( 'post_type', '=', 'page' )
            ->add_fields( array(
                Field::make( 'image', 'page_sygnet', __( 'Sygnet strony' ) ),
                Field::make('complex', 'seo_keywords', __('Kluczowe słowa'))
                    ->add_fields(array(
                        Field::make('text', 'word', __('Słowo kluczowe'))
                    ))
            ) );
    }
}