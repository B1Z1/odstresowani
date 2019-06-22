<?php

/**
 * 
 * This is the block gallery of images
 * That block gallery created for insert
 * Images. Used in "Operation river"
 * 
 */
$images = $block['mini_images'];
$gapsClasses = GeneralOptions::getAllGapsFromArray($block);

?>

<div class="block d-flex jcc fwrap <?php echo $gapsClasses; ?>">
    <?php foreach ($images as $image) :
        $img = wp_get_attachment_image($image['mini_images_image'], 'full', false, array('class' => 'block-image__el block-image__el--contain'));
        $size = $image['mini_images_size'];
        $link = $image['mini_images_url'];
        if ($link) {
            $img = '<a href="' . $link . '">' . $img . '</a>';
        }
        ?>
        <div class="mbl-col-8 tbl-col-<?Php echo $size; ?>">
            <div class="block-image block-image--256">
                <?php echo $img; ?>
            </div>
        </div>
    <?php endforeach; ?>
</div>