<?php
add_action('odstresowani_module_horizontal_navigation', 'odstresowani_module_horizontal_navigation', 10, 1);
if (!function_exists('odstresowani_module_horizontal_navigation')) {
    function odstresowani_module_horizontal_navigation($block)
    {
        global $currlang;
        ?>
        <nav class="c-navigation">
            <ul class="c-list flex-kit jce fwrap">
                <?php foreach ($block as $item) :
                    $title = $item['footer_bottom_pages'];
                    $page = get_page_by_title($title);
                    $page = get_post(pll_get_post($page->ID,  $currlang));
                    $url = get_permalink($page->ID);
                    $title = $page->post_title; ?>
                    <li class="mr16 ml16"><a href="<?php echo $url; ?>" class="c-Link"><?php echo $title; ?></a></li>
                    <?php wp_reset_postdata();
                endforeach; ?>
            </ul>
        </nav>
    <?php }
}
