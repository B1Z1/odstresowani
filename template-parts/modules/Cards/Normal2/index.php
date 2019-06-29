<?php

add_action('odstresowani_module_card_normal2', 'odstresowani_module_card_normal2', 10, 1);
if (!function_exists('odstresowani_module_card_normal2')) {
    function odstresowani_module_card_normal2($args)
    {
        $title = $args['title'];
        $categories = $args['categories'];
        $image = $args['image'];
        $description = $args['description'];
        $link = $args['link']; ?>

        <a href="<?php echo $link; ?>" class="c-Link d-ib mb32">
            <div class="c-Card c-Card__normal2">
                <div class="c-Card__content">
                    <?php if ( $image ): ?>
                        <div class="c-Card__image">
                            <img src="<?php echo $image; ?>" alt="<?php echo $title ?>" class="c-Image">
                        </div>
                    <?php endif; ?>
                    <?php if ( $categories ): ?>
                        <div class="c-Card__categories f-vr c-gm">
                            <span><?php echo $categories; ?></span>
                        </div>
                    <?php endif; ?>
                    <?php if ( $description ): ?>
                        <div class="c-Card__description">
                            <span class="f-vr c-wh c-text-size--normal">
                                <?php echo $description; ?>
                            </span>
                        </div>
                    <?php endif; ?>
                </div>
                <h3 class="c-Card__title reset-bottom f-vb mt16"><?php echo $title; ?></h3>
            </div>
        </a>

    <?php }
}
