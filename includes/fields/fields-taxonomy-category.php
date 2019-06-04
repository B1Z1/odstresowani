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
                Field::make('select', 'category_check', __('Wybierz typ filu'))
                    ->add_options(array(
                        'film' => 'Filmik',
                        'image' => 'Obraz'
                    )),
                Field::make('image', 'category_image', __('Wybierz Obrazek'))
                    ->set_conditional_logic(array(
                        'relation' => 'AND',
                        array(
                            'field' => 'category_check',
                            'value' => 'image',
                            'compare' => '='
                        )
                    )),
                Field::make( 'file', 'category_video', __( 'Wybierz filmik' ) )
                    ->set_conditional_logic(array(
                        'relation' => 'AND',
                        array(
                            'field' => 'category_check',
                            'value' => 'film',
                            'compare' => '='
                        )
                    )),
            ) );
    }
}

/**
 *
 * Term taxonomy = Category Knowledge Zone
 *
 *
 */
add_action( 'carbon_fields_register_fields', 'crb_register_term_knowledge', 10 );
if ( !function_exists('crb_register_term_knowledge') ){
    function crb_register_term_knowledge(){
        Container::make( 'term_meta', __( 'Category Properties' ) )
            ->where( 'term_taxonomy', '=', 'strefa-wiedzy-kategoria' )
            ->add_fields( array(
                Field::make( 'image', 'category_sygnet', __( 'Sygnet kategorii' ) ),
                Field::make('select', 'category_check', __('Wybierz typ filu'))
                    ->add_options(array(
                        'film' => 'Filmik',
                        'image' => 'Obraz'
                    )),
                Field::make('image', 'category_image', __('Wybierz Obrazek'))
                    ->set_conditional_logic(array(
                        'relation' => 'AND',
                        array(
                            'field' => 'category_check',
                            'value' => 'image',
                            'compare' => '='
                        )
                    )),
                Field::make( 'file', 'category_video', __( 'Wybierz filmik' ) )
                    ->set_conditional_logic(array(
                        'relation' => 'AND',
                        array(
                            'field' => 'category_check',
                            'value' => 'film',
                            'compare' => '='
                        )
                    )),
            ) );
    }
}

/**
 *
 * Term taxonomy = Category Actual
 *
 *
 */
add_action( 'carbon_fields_register_fields', 'crb_register_term_actual', 10 );
if ( !function_exists('crb_register_term_actual') ){
    function crb_register_term_actual(){
        Container::make( 'term_meta', __( 'Category Properties' ) )
            ->where( 'term_taxonomy', '=', 'news-kategoria' )
            ->add_fields( array(
                Field::make( 'image', 'category_sygnet', __( 'Sygnet kategorii' ) ),
                Field::make('select', 'category_check', __('Wybierz typ filu'))
                    ->add_options(array(
                        'film' => 'Filmik',
                        'image' => 'Obraz'
                    )),
                Field::make('image', 'category_image', __('Wybierz Obrazek'))
                    ->set_conditional_logic(array(
                        'relation' => 'AND',
                        array(
                            'field' => 'category_check',
                            'value' => 'image',
                            'compare' => '='
                        )
                    )),
                Field::make( 'file', 'category_video', __( 'Wybierz filmik' ) )
                    ->set_conditional_logic(array(
                        'relation' => 'AND',
                        array(
                            'field' => 'category_check',
                            'value' => 'film',
                            'compare' => '='
                        )
                    )),
            ) );
    }
}