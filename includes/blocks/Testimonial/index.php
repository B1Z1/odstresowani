<?php
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 * Block image gallery
 */
add_action('carbon_fields_register_fields', 'crb_register_block_testimonial', 10);
if (!function_exists('crb_register_block_testimonial')) {
    function crb_register_block_testimonial()
    {
        Block::make(__('Testimonial'))
            ->add_fields(FieldsGlobal::getGaps())
            ->add_fields(array(
                Field::make('text', 'name', __('Imię Nazwisko')),
                Field::make('image', 'image', __('Obraz')),
                Field::make('textarea', 'description', __('Opis')),
                Field::make('text', 'link_text', __('Tekst przycisku')),
                Field::make('text', 'link', __('Link'))
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/blocks/Testimonial/index.php', false, false));
            });
    }
}
