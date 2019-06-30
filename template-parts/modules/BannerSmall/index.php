<?php
add_action('odstresowani_module_banner_small', 'odstresowani_module_banner_small', 10, 2);
if (!function_exists('odstresowani_module_banner_small')) {
    function odstresowani_module_banner_small($args)
    { 
        $gapClasses = $args['gapClasses'];
        $image = $args['image'];
        $text = $args['text'];
        ?>
        <?php do_action('odstresowani_layout_container_end') ?>        

        <section class="m-BannerSmall <?php echo $gapClasses; ?>">
            <div class="bck-gm">
                <div class="m-BannerSmall__phone ntb-col-6">
                    <img src="<?php echo $image ?>" class="m-BannerSmall__image c-Image" alt="Odstresowani Welcom Blog">
                </div>
                <div class="m-BannerSmall__content">
                    <div class="l-Container">
                        <div class="d-flex fd-rr">
                            <div class="ntb-col-6">
                                <div class="pt128 pb128 c-op c-text--right">
                                    <?php echo $text; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <?php do_action('odstresowani_layout_container_start') ?>
        <?php }
    }
