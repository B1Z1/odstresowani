<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 *
 * Block With most viewed posts
 * Im using everywhere
 *
 */
add_action('carbon_fields_register_fields', 'crb_register_block_most_viewed', 10);
if (!function_exists('crb_register_block_most_viewed')) {
    function crb_register_block_most_viewed()
    {
        $posts = GetPosts::getPostsTypes();

        Block::make(__('Blok z najbardziej oglądającymi postami'))
            ->add_fields(FieldsGlobal::getGaps())
            ->add_fields(array(
                Field::make('select', 'most_viewed_posts', __('Wybierz typ postów'))
                    ->set_options($posts),
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/content-most-viewed-3.php', false, false));
            });
    }
}
