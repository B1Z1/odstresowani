<?php
add_action('odstresowani_module_gallery_normal', 'odstresowani_module_gallery_normal', 10, 1);
if (!function_exists('odstresowani_module_gallery_normal')) {
    function odstresowani_module_gallery_normal($args)
    {
        $gapClasses = $args['gapClasses'];
        $posts = $args['posts'];
        $moduleTitle = $args['moduleTitle'];
        /**
         * Container Layout End
         * */
        do_action('odstresowani_layout_container_end'); ?>

        <div class="m-GalleryNormal bck-gm <?php echo $gapClasses; ?>" data-module-gallery-normal>
            <?php
            /**
             * Container Layout Start
             * */
            do_action('odstresowani_layout_container_start');
            ?>

            <h2 class="m-GalleryNormal__title f-vr reset-top"><?php echo $moduleTitle; ?></h2>
            <div class="m-GalleryNormal__swiper" data-gallery-normal-swiper>
                <div class="swiper-wrapper">
                    <?php foreach ($posts as $post) :
                        $ID = $post->ID;
                        $title = $post->post_title;
                        $category = '';
                        $description = wp_trim_words($post->post_content, 20);
                        $link = get_permalink($ID);
                        $image = wp_get_attachment_image_src(get_post_thumbnail_id($ID), 'full')[0];

                        if (get_post_type($ID) == 'post') {
                            $categories = get_the_category($ID);
                            foreach ($categories as $key => $element) {
                                if (count($categories) - 1 != $key)
                                    $category .= "{$element->name}, ";
                                else
                                    $category .= "{$element->name}";
                            }
                        }
                        $args = [
                            'title' => $title,
                            'categories' => $category,
                            'image' => $image,
                            'description' => $description,
                            'link' => $link
                        ];
                        ?>
                        <div class="swiper-slide">
                            <?php
                            /**
                             * Card Normal 2 Module
                             */
                            do_action('odstresowani_module_card_normal2', $args);
                            ?>
                        </div>
                    <?php endforeach; ?>

                </div>
                <!-- Pagination -->
                <div class="m-GalleryNormal__pagination" data-gallery-normal-pagination></div>
            </div>

            <?php
            /**
             * Container Layout End
             * */
            do_action('odstresowani_layout_container_end');
            ?>
        </div>

        <?php
        /**
         * Container Layout Start
         * */
        do_action('odstresowani_layout_container_start');
    }
}
