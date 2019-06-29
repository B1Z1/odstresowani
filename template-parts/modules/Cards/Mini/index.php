<?php

/**
 *
 * Hook
 * -> card mini
 *
 */
add_action('post_card_mini', 'post_card_mini', 10, 1);
if (!function_exists('post_card_mini')) {
    function post_card_mini($args)
    {
        $image = $args['image'];
        $title = $args['title'];
        $url = $args['url'];
        ?>
        <a href="<?php echo $url; ?>" class="c-Link">
            <div class="c-Card mb32">
                <div class="c-Card__image c-Card--192 mb32">
                    <?php if ($image) : ?>
                        <img src="<?php echo $image; ?>" alt="<?php echo $title; ?>" class="c-Image">
                    <?php endif; ?>
                </div>
                <div class="c-Card__title c-text--center">
                    <h2 class="f-vb"><?php echo $title; ?></h2>
                </div>
            </div>
        </a>
    <?php }
}
