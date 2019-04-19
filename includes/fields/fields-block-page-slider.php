<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 *
 * Nav menu items
 *
 */
add_action( 'carbon_fields_register_fields', 'crb_register_block_page_slider', 10 );
if ( !function_exists('crb_register_block_page_slider') ){
    function crb_register_block_page_slider(){
        global $get;
        $page_ids = $get->getByType('page');
        /**
         *
         * Block Slider for pages
         * Slider for pages in main page
         *
         */
        Block::make(__('Blok slajder dla stron'))
            ->add_fields(array(
                Field::make('complex', 'page_slide', __('Slajd dla strony'))
                    ->add_fields(array(
                        Field::make('image', 'page_slide_image', __('Tło slajdu')),
                        Field::make('select', 'page_slide_page', __('Strona slajdu'))
                            ->set_options( $page_ids ),
                        Field::make('textarea', 'page_slide_content', __('Krótki opis tego slajdu'))
                            ->set_attribute('maxLength', '300'),
                    ))
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/block-parts/part-page-slider.php',false, false) );
            });
    }
}