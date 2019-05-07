<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 *
 * Block with map markers
 * That block used when page template is map
 *
 */
add_action( 'carbon_fields_register_fields', 'crb_register_block_map', 10 );
if ( !function_exists('crb_register_block_map') ){
    function crb_register_block_map(){
        global $getPosts;
        $categories = $getPosts->getTaxonomiesList('miejsca-kategorie');
        
        Block::make(__('Block z markerami'))
            ->add_fields(array(
                Field::make('complex', 'maps', __('Mapa'))
                    ->set_max(2)
                    ->add_fields(array(
                        Field::make('text', 'map_title', __('Tytuł mapy'))
                            ->set_required(true),
                        Field::make('checkbox', 'marker_pulse', __('Pulsowanie markera?'))
                            ->set_option_value( 'Tak' ),
                        Field::make('checkbox', 'marker_isnumeric', __('Czy marker numeryczny?'))
                            ->set_option_value( 'Tak' ),
                        Field::make('checkbox', 'marker_hasimage', __('Czy marker ma mieć obrazek?'))
                            ->set_option_value( 'Tak' ),
                        Field::make('checkbox', 'marker_linedraw', __('Czy markery łączyć linią?'))
                            ->set_option_value( 'Tak' ),
                        Field::make('checkbox', 'marker_alert', __('Czy to są alertowe markery?'))
                            ->set_option_value( 'Tak' ),
                        Field::make('select', 'markers_which', __('Jaki to ma być marker?'))
                            ->set_options( array(
                                'default' => 'Z obrazkiem',
                                'default_without_image' => 'Bez obrazku'
                            ) ),
                        Field::make('select', 'markers_category', __('Kategoria'))
                            ->set_options($categories),
                    ))
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/block-parts/part-map.php',false, false) );
            });
    }
}