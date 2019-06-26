<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

/**
 *
 * Theme options container
 *
 */
add_action( 'carbon_fields_register_fields', 'crb_register_theme_options', 10 );
if ( !function_exists('crb_register_theme_options') ){
    function crb_register_theme_options(){
    $page_ids = GetPosts::getByPostType('page');

    Container::make( 'theme_options', __( 'Theme Options' ) )
        ->add_tab( 'Opcje generalne', array(
            Field::make( 'image', 'general_sygnet_front', 'Strona przodowa logotypu' ),
            Field::make( 'image', 'general_sygnet_back', 'Strona tylna logotypu' ),
            Field::make( 'image', 'general_sygnet_mini', 'Miniaturka logotypu na postach' ),
            Field::make( 'image', 'general_sygnet_search', 'Logotyp na stronie z wyszukiwaniem' ),
            Field::make( 'image', 'general_close_button', 'Przycisk zamknięcia' ),
            Field::make( 'image', 'general_post_wave', 'Linia pod postem' ),
        ))
        ->add_tab('Stopka strony', array(
            Field::make('complex', 'footer_social', __('Social linki'))
                ->add_fields( array(
                    Field::make('text', 'footer_social_url', __('Link do social strony')),
                    Field::make('image', 'footer_social_image', __('Ikonka linku'))
                )),
            Field::make( 'complex', 'footer_blocks', __( 'Bloki stopki' ) )
                ->add_fields( array(
                    Field::make( 'complex', 'footer_block', __( 'Strony bloku' ) )
                        ->add_fields( array(
                            Field::make( 'select', 'footer_block_page', __( 'Wybierz strone' ) )
                                ->set_options( $page_ids )
                        )),
                )),
            Field::make( 'complex', 'footer_bottom_blocks', __( 'Linki na dolnej części stopki' ) )
                ->add_fields( array(
                    Field::make( 'select', 'footer_bottom_pages', __( 'Wybierz strone' ) )
                        ->set_options( $page_ids )
                )),
        ))
        ->add_tab('Strona wyszukiwania', array(
            Field::make('file', 'search_film_mp4', __('Video na tle MP4')),
            Field::make('file', 'search_film_ogg', __('Video na tle OGG')),
        ))
        ->add_tab('Strona 404', array(
            Field::make('file', '404_film_mp4', __('Video na tle MP4')),
            Field::make('file', '404_film_ogg', __('Video na tle OGG')),
        ));
    }
}

