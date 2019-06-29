<?php 
add_action('odstresowani_module_gallery_normal', 'odstresowani_module_gallery_normal', 10, 1); 
if ( !function_exists('odstresowani_module_gallery_normal') ){
    function odstresowani_module_gallery_normal($args){ 
        $gapClasses = $args['gapClasses'];
        $posts = $args['posts'];
        $moduleTitle = $args['moduleTitle'];
        /**
         * Container Layout End
         * */
        do_action('odstresowani_layout_container_end'); ?>

            <div class="m-GalleryNormal bck-gm <?php echo $gapClasses; ?>">
                <?php 
                /**
                 * Container Layout Start
                 * */
                do_action('odstresowani_layout_container_start');
                ?>

                    <h2 class="m-GalleryNormal__title f-vr reset-top"><?php echo $moduleTitle; ?></h2>
                    <div class="m-GalleryNormal__swiper">
                        
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

