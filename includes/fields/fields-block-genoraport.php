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
add_action( 'carbon_fields_register_fields', 'crb_register_block_genoraport', 10 );
if ( !function_exists('crb_register_block_genoraport') ){
    function crb_register_block_genoraport(){
        Block::make(__('Genoraport'))
            ->add_fields(FieldsGlobal::getGaps())
            ->add_fields(array(
                Field::make('image', 'genoraport_image', __('Obraz raportu')),
                Field::make('image', 'genoraport_arrow', __('Strzalka')),
                Field::make('file', 'genoraport_document', __('PDF dla genraportu')),
                Field::make('text', 'genoraport_text', __('Text dla pobrania')),
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/block-parts/part-genoraport.php',false, false) );
            });

    }
}