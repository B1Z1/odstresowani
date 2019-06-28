<?php
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 *
 * Block With all posts
 * This blocks used in archive pages 
 * 
 */
add_action('carbon_fields_register_fields', 'crb_register_block_all_posts', 10);
if (!function_exists('crb_register_block_all_posts')) {
    function crb_register_block_all_posts()
    {
        $posts = GetPosts::getPostsTypes();

        Block::make(__('Blok ze wszystkimi postami'))
            ->add_fields(FieldsGlobal::getGaps())
            ->add_fields(array(
                Field::make('select', 'posts', __('Wybierz typ postów'))
                    ->set_options($posts),
                Field::make('select', 'posts_position', __('Wybierz rozmiar postów'))
                    ->set_options(array(
                        '3' => '4 na linie',
                        '4' => '3 na linie',
                        '6' => '2 na linie',
                    )),
            ))
            ->set_render_callback(function ($block) {
                include(locate_template('template-parts/blocks/AllPosts/index.php', false, false));
            });
    }
}
