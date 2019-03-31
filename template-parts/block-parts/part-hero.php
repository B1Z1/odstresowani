<?php

$check = $block['hero_check'];

if ( $check == 'video' ){
    $video_mp4 = wp_get_attachment_url($block['hero_video_mp4']);
    $video_ogg = wp_get_attachment_url($block['hero_video_ogg']);
}
else{
    $back_image = wp_get_attachment_image_url($block['hero_photo'], 'full');
}

$title = $block['hero_heading'];
$content = $block['hero_content'];
$link = $block['hero_url'];

?>
</div>
    <!-- Hero banner start -->
    <section class="hero c-wh" <?php if ( $back_image ): ?>style="background-image: url( <?php echo $back_image; ?> )"<?php endif; ?>>
        <div class="filter filter-back filter--zmax bck-blck"></div>

        <?php if ( $check == 'video' ): ?>

            <video class="filter filter-video" muted autoplay loop>
                <source src="<?php echo $video_mp4; ?>" type="video/mp4">
                <?php if ( $video_ogg ): ?>
                    <source src="<?php echo $video_ogg; ?>" type="video/ogg">
                <?php endif; ?>
                Your browser does not support the video tag.
            </video>
        <?php endif; ?>

        <div class="hero_content">
            <div class="container">

                <?php if ( $title ): ?>

                    <h3 class="reset-top f-san"><?php echo $title; ?></h3>

                <?php endif; ?>

                <?php if ( $content ): ?>

                    <h1 class="reset"><?php echo $content; ?></h1>

                <?php endif; ?>

                <?php if ( $link ): ?>

                    <div class="hero_links f-vb mt64">
                        <a href="<?php echo $link; ?>" class="link link-more reset-link">Czytaj więcej</a>
                    </div>

                <?php endif; ?>
            </div>
        </div>
    </section>
    <!-- Hero banner end -->
<div class="container">