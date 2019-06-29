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

        <a href="<?php echo $url; ?>" class="c-Link">
            <div class="c-Card">
                <div class="c-Card__image c-Card--192">
                    <?php if ($image) : ?>
                        <img src="<?php echo $image; ?>" alt="<?php echo $title; ?>" class="c-Image">
                    <?php endif; ?>
                </div>
                <div class="c-Card__title mt16">
                    <h3 class="reset f-vb"><?php echo $title; ?></h3>
                </div>
                <ul class="c-list flex-kit c-gt mt16">
                    <?php if ($cat_list) : ?>
                        <li class="c-Card__cat pr16 mr16 f-san">
                            <?php if ($wave) : ?>
                                <object data="<?php echo $wave; ?>" class="c-Image__wave" type="image/svg+xml"></object>
                            <?php endif; ?>
                            <span class="c-text-size--h6">
                                <?php echo $cat_list; ?>
                            </span>
                        </li>
                    <?php endif; ?>
                    <li class="c-Card__date">
                        <span class="c-text-size--h6">
                            <i class="mr8 far fa-calendar-alt"></i>
                            <?php echo $date; ?>
                        </span>
                    </li>
                </ul>
                <div class="c-Card__describe mt32">
                    <span class="c-text-size--h4 f-vr"><?php echo $describe; ?></span>
                </div>
            </div>
        </a>

    <?php }
}
