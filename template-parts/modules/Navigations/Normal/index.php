<?php 
add_action('odstresowani_module_navigation', 'odstresowani_module_navigation', 10, 1);
if ( !function_exists('odstresowani_module_navigation') ){
    function odstresowani_module_navigation($args){ 
        global $currlang;
        $block = $args['block'];
        $title = $args['title'];
        ?>
        <nav class="c-navigation mb32">
            <!-- :Title Of block Start: -->
            <?php if ($title) : ?>
                <h3 class="f-vb mb16"><?php echo $title; ?></h3>
            <?php endif; ?>
            <!-- :Title Of block End: -->

            <!-- :Blocks Start: -->
            <?php if ($block) : ?>
                <ul class="c-list">
                    <?php foreach ($block as $item) :
                        $title = $item['footer_block_page'];
                        $page = get_page_by_title($title);
                        $page = get_post(pll_get_post($page->ID,  $currlang));
                        $url = get_permalink($page->ID);
                        $title = $page->post_title;
                        ?>
                        <li class="c-list__element mb16">
                            <h3 class="reset f-vr">
                                <a href="<?php echo $url; ?>" class="c-Link">
                                    <?php echo $title; ?>
                                </a>
                            </h3>
                        </li>
                        <?php wp_reset_postdata(); ?>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
            <!-- :Blocks End: -->
        </nav>
    <?php }
}