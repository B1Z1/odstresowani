<?php
use Carbon_Fields\Container;
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
                Field::make('select', 'hero_check', __('Wybierz co chcesz'))
                    ->set_options(array(
                    'photo' => 'Zdjęcie',
                    'video' => 'Video',
                    )),
                Field::make('complex', 'hero_videos', __('Filmiki na codzien, może być tylko 7'))
                    ->add_fields(array(
                        Field::make( 'file', 'hero_video_mp4', __('Wybierz filmik MP4') )
                    ))
                    ->set_conditional_logic(array(
                        'relation' => 'OR',
                        array(
                            'field' => 'hero_check',
                            'value' => 'video',
                            'compare' => '=',
                        )
                    )),
                Field::make( 'image', 'hero_photo', __('Wybierz zdjęcie') )
                    ->set_conditional_logic(array(
                        'relation' => 'OR',
                        array(
                            'field' => 'hero_check',
                            'value' => 'photo',
                            'compare' => '=',
                        )
                    )),
                Field::make('text', 'hero_heading', __('Tytuł'))
                    ->set_attribute('maxLength', '60'),
                Field::make('text', 'hero_content', __('Mały opis'))
                    ->set_attribute('maxLength', '140'),
                Field::make('text', 'hero_link', __('Link'))
                    ->set_attribute('maxLength', '140'),
                Field::make('text', 'hero_button-text', __('Text buttonu'))
                    ->set_attribute('maxLength', '140')
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/block-parts/part-hero.php',false, false) );
            });
    }
}