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
                        Field::make('checkbox', 'markers_which', __('Czy chcesz wybrać gotowy zestaw?'))
                            ->set_option_value( 'Tak' ),
                        Field::make('complex', 'markers_new', __('Nowe Markery'))
                            ->set_conditional_logic( array(
                                    array(
                                        'field' => 'markers_which',
                                        'value' => false,
                                    )
                            ) )
                            ->add_fields(array(
                                Field::make('text', 'markers_new_title',  __('Tytuł'))
                                    ->set_required(true),
                                Field::make('textarea', 'markers_new_description',  __('Opis'))
                                    ->set_required(true),
                                Field::make('image', 'markers_new_image',  __('Obrazek')),
                                Field::make('text', 'markers_new_adress',  __('Miejsce'))
                                    ->set_required(true),
                                Field::make('text', 'markers_new_link',  __('Link jeśli jest potrzebny')),
                            )),
                        Field::make('select', 'markers_ready', __('Wybierz zestaw'))
                            ->set_conditional_logic( array(
                                    array(
                                        'field' => 'markers_which',
                                        'value' => true,
                                    )
                            ) )
                            ->set_options(array(
                                'techniki' => 'Techniki',
                                'miejsca_relaxu' => 'Miejsca Relaxu',
                            ))
                            ->set_required(true),
                    ))
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/block-parts/part-map.php',false, false) );
            });
    }
}