<?php
$back_image = wp_get_attachment_image_src($block['hero_image'], 'full')[0];
$title = $block['hero_heading'];
$content = $block['hero_content'];
$link = $block['hero_url'];

?>
</div>
    <!-- Hero banner start -->
    <section class="hero c-wh" <?php if ( $back_image ): ?>style="background-image: url( <?php echo $back_image; ?> )"<?php endif; ?>>
        <div class="filter_back bck-blck"></div>
        <div class="hero_content">
            <div class="container">
                <?php if ( $title ): ?>
                    <h3 class="reset_top f-san"><?php echo $title; ?></h3>
                <?php endif; ?>
                <?php if ( $content ): ?>
                    <h1 class="reset"><?php echo $content; ?></h1>
                <?php endif; ?>
                <?php if ( $link ): ?>
                    <div class="hero_links f-vb mt64">
                        <a href="<?php echo $link; ?>" class="hero_links__more reset_link">Czytaj więcej</a>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
    <!-- Hero banner end -->
<div class="container">