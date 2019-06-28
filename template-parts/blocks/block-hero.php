<?php
$container = $block['container'];
$gapsClasses = GeneralOptions::getAllGapsFromArray($block);
?>
</div>
<!-- Hero banner start -->
<section class="m-Hero c-text--center d-flex fwrap c-wh <?php echo $gapsClasses; ?>" <?php if ($back_image) : ?>style="background-image: url( <?php echo $back_image; ?> )" <?php endif; ?>>
    <?php foreach ($container as $element) :
        $title = $element['title'];
        $describe = $element['describe'];
        $image = wp_get_attachment_image_url($element['image'], 'full');
        $buttonText = $element['button_text'];
        $buttonLink = $element['button_link'];
        if (count($container) === 1)
            $columnClass = 'ntb-col-12';
        else
            $columnClass = 'ntb-col-6';
        ?>
        <div class="m-Hero__side <?php echo $columnClass; ?> d-flex fd-col aic jcc" style="background-image: url(<?php echo $image; ?>);">
            <div class="filter-back bck-gradient--operative"></div>
            <div class="m-Hero__content">
                <?php if ($title) : ?>
                    <h2 class="m-Hero__title mb16"><?php echo $title; ?></h2>
                <?php endif; ?>
                <?php if ($describe) : ?>
                    <h4 class="m-Hero__describe f-vr mt0"><?php echo $describe; ?></h4>
                <?php endif; ?>
                <?php if ($buttonLink && $buttonText) : ?>
                    <a href="<?php echo $buttonLink; ?>" class='c-link c-button__buy c-button--br4 bck-gradient--blue'><?php echo $buttonText; ?></a>
                <?php endif; ?>
            </div>
        </div>
    <?php endforeach; ?>
</section>
<!-- Hero banner end -->
<div class="l-Container">