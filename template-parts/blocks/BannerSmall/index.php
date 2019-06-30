<?php 
$image = wp_get_attachment_image_src($block['image'], 'full')[0];
$link = $block['link'];
$enjoy_text = pll__('Zapraszamy na naszego');
$blog_text = pll__('bloga');
$gapClasses = GeneralOptions::getAllGapsFromArray($block);
?>

</div>

<section class="m-Welcome <?php echo $gapClasses; ?>">
    <div class="bck-gm">
        <div class="m-Welcome__phone ntb-col-6">
            <img src="<?php echo $image ?>" class="m-Welcome__image c-Image" alt="Odstresowani Welcom Blog">
        </div>
        <div class="m-Welcome__content">
            <div class="l-Container">
                <div class="d-flex fd-rr">
                    <div class="ntb-col-6">
                        <div class="pt128 pb128 c-op">
                            <h2 class="c-text--right f-vr"><?php echo $enjoy_text; ?> <a class="c-Link c-Link--tdu" href="<?php echo $link; ?>"><?php echo $blog_text; ?></a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="l-Container">