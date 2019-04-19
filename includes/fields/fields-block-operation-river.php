<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 *
 * Block Form for "Operacja rzeka"
 *
 */
add_action( 'carbon_fields_register_fields', 'crb_register_block_operation_river', 10 );
if ( !function_exists('crb_register_block_operation_river') ){
    function crb_register_block_operation_river(){
        Block::make(__('Operacja rzeka'))
            ->add_fields(array(
                Field::make('rich_text', 'operation_text', __('Tekst nad przyciskiem')),
                Field::make('text', 'operation_button', __('Tekst przycisku')),
                Field::make('text', 'operation_form', __('Shortcode formy')),
                Field::make('text', 'operation_text_scroll', __('Tekst dla scrollu')),
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/block-parts/part-operation-river.php',false, false) );
            });
    }
}