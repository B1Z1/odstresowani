<?php
$imageClasses = 'c-Image c-Image--contain';

$container = $block['container'];
$gapsClasses = GeneralOptions::getAllGapsFromArray($block); ?>

<div class="b-SmallGallery d-flex jcc fwrap <?php echo $gapsClasses; ?>">
    <?php foreach ($container as $element) :
        $image = wp_get_attachment_image($element['image'], 'full', false, array('class' => $imageClasses));
        $link = $element['link'];
        if ($link) {
            $image = '<a href="' . $link . '">' . $image . '</a>';
        }
        ?>
        <div class="mbl-col-8 tbl-col-2">
            <div class="b-SmallGallery__item">
                <?php echo $image; ?>
            </div>
        </div>
    <?php endforeach; ?>
</div>