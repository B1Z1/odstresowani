<?php 
/**
 * 
 * Genoraport block
 * 
 */
$raport = wp_get_attachment_image_url($block['genoraport_image'], 'full');
$arrow = wp_get_attachment_image_url($block['genoraport_arrow'], 'full');
$doc =  wp_get_attachment_url($block['genoraport_document']);
$text = $block['genoraport_text'];
$gapsClasses = GeneralOptions::getAllGapsFromArray($block); 
?>

<section class="block <?php echo $gapsClasses; ?>">
    <div class="flex-kit fwrap jcc">
        <div class="pc-col-5">
            <div class="block-genoraport f-vb c-op">
                <img src="<?php echo $arrow; ?>" class="block-image block-genoraport__arrow" alt="">
                <p><?php echo $text; ?></p>
            </div>
        </div>
        <div class="pc-col-7">
            <a href="<?php echo $doc; ?>">
                <img src="<?php echo $raport ?>" class="block-image block-image--boxsh" alt="Genoraport">
            </a>
        </div>
    </div>
</section>