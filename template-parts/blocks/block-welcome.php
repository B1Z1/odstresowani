<?php 
$image = wp_get_attachment_image_src($block['image'], 'full')[0];
$link = $block['link'];
$enjoy_text = pll__('Zapraszamy na naszego');
$blog_text = pll__('bloga');
$gapsClasses = GeneralOptions::getAllGapsFromArray($block);
?>

</div>

<section class="l-welcome <?php echo $gapsClasses; ?>">
    <div class="bck-gm">
        <div class="l-welcome__phone ntb-col-6">
            <img src="<?php echo $image ?>" class="l-welcome__image c-Image" alt="Odstresowani Welcom Blog">
        </div>
        <div class="l-welcome__content">
            <div class="l-Container">
                <div class="d-flex fd-rr">
                    <div class="ntb-col-6">
                        <div class="pt128 pb128 c-op">
                            <h2 class="c-text--right f-vr"><?php echo $enjoy_text; ?> <a class="c-link c-link--tdu" href="<?php echo $link; ?>"><?php echo $blog_text; ?></a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="l-Container">