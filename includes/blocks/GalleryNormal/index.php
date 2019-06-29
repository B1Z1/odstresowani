<?php
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 * Custom Cards Builder
 */
add_action( 'carbon_fields_register_fields', 'crb_register_gallery_normal', 10 );
if ( !function_exists('crb_register_gallery_normal') ){
    function crb_register_gallery_normal(){
        Block::make(__('Galeria Postów'))
            ->add_fields(FieldsGlobal::getGaps())
            ->add_fields(array(
                Field::make('text', 'title', __('Tytuł modulu')),
                Field::make('select', 'post_type', __('Wybierz typ póstów'))
                    ->set_options(GetPosts::getPostsTypes())
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/blocks/GalleryNormal/index.php',false, false) );
            });
    }
}