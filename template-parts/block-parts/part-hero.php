<?php
$check = $block['hero_check']; //Which options is need video:photo
$links = carbon_get_theme_option('footer_social'); //Link if exist
$title = $block['hero_heading']; //Title of block
$content = $block['hero_content']; //Content of block
$link = $block['hero_url'];
if ($check == 'video') {
    $videos = $block['hero_videos'];
    $video = videoByDate($videos); //Get video by date of year
} else {
    $back_image = wp_get_attachment_image_url($block['hero_photo'], 'full'); //Get image
}
$gapsClasses = GeneralOptions::getAllGapsFromArray($block);
?>
</div>
<!-- Hero banner start -->
<section class="hero c-wh <?php echo $gapsClasses; ?>" <?php if ($back_image) : ?>style="background-image: url( <?php echo $back_image; ?> )" <?php endif; ?>>
    <div class="filter filter-back filter--zmax bck-blck"></div>

    <?php if ($check == 'video') : ?>

        <video class="filter filter-video" muted autoplay loop>
            <source src="<?php echo $video; ?>" type="video/mp4">
            Your browser does not support the video tag.
        </video>

    <?php endif; ?>

    <div class="hero__content">
        <div class="c-container">

            <?php if ($title) : ?>

                <h3 class="reset-top f-san"><?php echo $title; ?></h3>

            <?php endif; ?>

            <?php if ($content) : ?>

                <h1 class="reset f-vr"><?php echo $content; ?></h1>

            <?php endif; ?>

        </div>
    </div>
</section>
<!-- Hero banner end -->
<div class="c-container">