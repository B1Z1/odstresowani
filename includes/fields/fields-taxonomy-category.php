<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

/**
 *
 * Term taxonomy = category
 *
 *
 */
add_action( 'carbon_fields_register_fields', 'crb_register_term_category', 10 );
if ( !function_exists('crb_register_term_category') ){
    function crb_register_term_category(){
        Container::make( 'term_meta', __( 'Category Properties' ) )
            ->where( 'term_taxonomy', '=', 'category' )
            ->add_fields( array(
                Field::make( 'image', 'category_sygnet', __( 'Sygnet kategorii' ) ),
                Field::make( 'image', 'category_image', __( 'Obraz kategorii' ) ),
                Field::make('color', 'category_color', __('Kolor kategorii')),
                Field::make('text', 'category_top', __('Wpisz pozycje kategorii według osiY w procentach (Max: 100%)'))
                    ->set_attribute('type', 'number')
                    ->set_attribute('max', 100),
                Field::make('text', 'category_left', __('Wpisz pozycje kategorii według osiX w procentach (Max: 100%)'))
                    ->set_attribute('type', 'number')
                    ->set_attribute('max', 100),
            ) );
    }
}