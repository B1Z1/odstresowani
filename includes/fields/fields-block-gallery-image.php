<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 * 
 * 
 * Genoraport block
 * 
 */
add_action( 'carbon_fields_register_fields', 'crb_register_block_gallery_image', 10 );
if ( !function_exists('crb_register_block_gallery_image') ){
    function crb_register_block_gallery_image(){
        Block::make(__('Slajder Orbazków'))
            ->add_fields(FieldsGlobal::getGaps())
            ->add_fields(array(
                Field::make('complex', 'gallery', __('Obrazki'))
                    ->add_fields(array(
                        Field::make('image', 'gallery_image', __('Obrazek'))
                    ))
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/block-parts/part-gallery-image.php',false, false) );
            });

    }
}