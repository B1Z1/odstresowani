<?php 
$gallery = $block['videogallery'];
?>

<?php if ( $gallery ): ?>

    </div>
    <div class="block block--texcen block-videogallery">
        <?php foreach( $gallery as $post ): 
            $name = $post['videogallery_name'];
            $poster = wp_get_attachment_url($post['videogallery_poster'], 'full');
            $video_mp4 = wp_get_attachment_url($post['videogallery_film_mp4']);
            ?>
            <div class="block-videogallery__element pt64 pb64">
                <span class="block-videogallery__name f-48 c-wh"><?php echo $name; ?></span>

                <div class="block-videogallery__video">
                    <video class="filter filter-video" data-src="<?php echo $video_mp4; ?>" poster="<?php echo $poster; ?>">
                        <source src="" type="video/mp4">
                        Twoja przeglądarka nie obsługuje dany typ filmiku
                    </video>
                </div>
                
                <div class="filter filter-back filter-back__video bck-blck"></div>

                <div class="block-videogallery__controls video-controls">
                    <div class="video-controls__button video-controls__play bck-wh c-op"><i class="video-controls__icon fas fa-play"></i></div>
                    <div class="video-controls__button video-controls__stop bck-wh c-op"><i class="video-controls__icon fas fa-stop"></i></div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/updated/videogallery.js"></script>
    <div class="container header__triger">

<?php endif; ?>