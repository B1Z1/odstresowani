<?php
$autor = $block['banner_autor'];
$size = $block['banner_size'] ? $block['banner_size']:'full';
$image = wp_get_attachment_image_src($block['banner_image'], 'full')[0];
$icon = wp_get_attachment_image_src( carbon_get_theme_option('general_sygnet_mini'), 'full' )[0];
$type = $block['banner_type'];
$gapsClasses = GeneralOptions::getAllGapsFromArray($block);
?>
<?php if ( $image ): ?>
    </div>
        <section class="l-pubimage <?php echo $gapsClasses; ?>">
            <div class="l-pubimage__container l-pubimage--<?php echo $size ?>">
                <img src="<?php echo $image; ?>" class="c-Image <?php if ( $type ){ echo 'c-Image--contain'; } ?>" alt="Sygnet">
                <div class="l-pubimage__sygnet bck-wh flex-kit jcc">
                    <img src="<?php echo $icon; ?>" class="c-Image c-Image--36wh c-Image--contain" alt="Sygnet">
                </div>
            </div>
            <?php if ( $autor ): ?>
                <h4 class="block--texcen f-san c-gt">Autor obrazu: <?php echo $autor; ?></h4>
            <?php endif; ?>
        </section>
    <div class="l-Container l-Container--960 header__triger">
<?php endif; ?>
