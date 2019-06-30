<?php
add_action('odstresowani_button_normal', 'odstresowani_button_normal', 10, 3);
if (!function_exists('odstresowani_button_normal')) {
    function odstresowani_button_normal($tag, $link = '', $text)
    { ?>
        <<?php echo $tag; ?> <?php if ($link) : ?>href="<?php echo $link; ?>" <?php endif; ?> class="c-Link c-Button__normal d-ib"><?php echo $text; ?></<?php echo $tag; ?>>
    <?php }
}
