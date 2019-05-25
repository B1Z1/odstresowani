<?php 
$image = wp_get_attachment_image_src($block['image'], 'full')[0];
$link = $block['link'];
?>
</div>

<section class="l-welcome">
    <div class="bck-gm">
        <div class="l-welcome__phone ntb-col-6">
            <img src="<?php echo $image ?>" class="l-welcome--scale c-image" alt="Odstresowani Welcom Blog">
        </div>
        <div class="l-welcome__content">
            <div class="c-container">
                <div class="d-flex fd-rr">
                    <div class="ntb-col-6">
                        <div class="pt128 pb128 c-op">
                            <h2 class="c-text--right f-vr">Zapraszamy na naszego <a class="c-link c-link--tdu" href="<?php echo $link; ?>">bloga</a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="c-container"></div>