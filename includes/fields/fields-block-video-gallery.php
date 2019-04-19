<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 * 
 * 
 * Video gallery block
 * 
 */
add_action( 'carbon_fields_register_fields', 'crb_register_block_video_gallery', 10 );
if ( !function_exists('crb_register_block_video_gallery') ){
    function crb_register_block_video_gallery(){
        Block::make(__('Wideo galeria'))
            ->add_fields(array(
                Field::make('complex', 'videogallery', __('Tekst nad przyciskiem'))
                    ->add_fields(array(
                        Field::make('file', 'videogallery_film_mp4', __('Filmik MP4')),
                        Field::make('text', 'videogallery_name', __('Imię i nazwisko authora')),
                        Field::make('image', 'videogallery_poster', __('Poster Filmiku')),
                    ))
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/block-parts/part-videogallery.php',false, false) );
            });
    }
}