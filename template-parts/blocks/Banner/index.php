<?php
$autor = $block['author'];
$size = $block['size'] ? $block['size'] : 'full';
$image = wp_get_attachment_image_src($block['image'], 'full')[0];
$icon = wp_get_attachment_image_src(carbon_get_theme_option('general_sygnet_mini'), 'full')[0];
$type = $block['type'];
$gapClasses = GeneralOptions::getAllGapsFromArray($block);
?>
<?php if ($image) : ?>
    </div>
    <section class="m-Banner <?php echo $gapClasses; ?>">
        <div class="m-Banner__image m-Banner--<?php echo $size ?>">
            <img src="<?php echo $image; ?>" class="c-Image <?php if ($type) {
                                                                echo 'c-Image--contain';
                                                            } ?>" alt="Sygnet">
            <div class="m-Banner__sygnet bck-wh flex-kit jcc">
                <img src="<?php echo $icon; ?>" class="c-Image c-Image--36wh c-Image--contain" alt="Sygnet">
            </div>
        </div>
        <?php if ($autor) : ?>
            <div class="m-Banner__title">
                <h4 class="c-text--center f-san c-gt">Autor obrazu: <?php echo $autor; ?></h4>
            </div>
        <?php endif; ?>
    </section>
    <div class="l-Container l-Container--960 header__triger">
<?php endif; ?>