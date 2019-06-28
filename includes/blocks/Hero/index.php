<?php
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 *
 * Banner block
 * Hero banner for main page/maybe for smthing else
 *
 */
add_action( 'carbon_fields_register_fields', 'crb_register_block_banner', 10 );
if ( !function_exists('crb_register_block_banner') ){
    function crb_register_block_banner(){
        Block::make(__('Hero Banner'))
            ->add_fields(FieldsGlobal::getGaps())
            ->add_fields(array(
                Field::make('complex', 'container', __('Kontejnery dla hero bannera'))
                    ->set_max(2)
                    ->add_fields('side', array(
                        Field::make('text', 'title', __('Tytuł')),
                        Field::make('textarea', 'describe', __('Opis')),
                        Field::make('text', 'button_text', __('Tekst Przycisku')),
                        Field::make('text', 'button_link', __('Link')),
                        Field::make('image', 'image', __('Tło'))
                    ))
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/blocks/Hero/index.php',false, false) );
            });
    }
}