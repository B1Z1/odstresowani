<?php
global $currlang;


add_action('odstresowani_footer_start', 'footer_wrapper_start', 10);
if ( !function_exists('footer_wrapper_start') ){
    function footer_wrapper_start(){ ?>
        <footer class="footer">
    <?php }
}

add_action('odstresowani_footer_upper_start', 'footer_upper_start', 10);
if ( !function_exists('footer_upper_start') ){
    function footer_upper_start(){ ?>
    <div class="footer-upper bck-op pt64 pb32 c-wh">
        <div class="container">
            <div class="row">
    <?php }
}

add_action('odstresowani_footer_upper_elements', 'footer_upper_blocks', 10);
if ( !function_exists('footer_upper_blocks') ){
    function footer_upper_blocks(){
        $footer_blocks = carbon_get_theme_option('footer_blocks'); ?>

        <div class="footer-blocks mb64 flex-kit fwrap">
            <?php foreach ( $footer_blocks as $footer_block ): $block = $footer_block['footer_block']; ?>
                <div class="mbl-col-12 tbl-col-6 ntb-col-3">
                    <div class="footer-blocks__block mb32">
                        <ul class="c-list">
                            <?php foreach ( $block as $item ): 
                                $title = $item['footer_block_page']; 
                                $page = get_page_by_title($title);
                                $page = get_post(pll_get_post($page->ID,  $currlang));
                                $url = get_permalink($page->ID);
                                $title = $page->post_title;
                                ?>
                                <li class="c-list__element mb16">
                                    <h3 class="reset f-vr">
                                        <a href="<?php echo $url; ?>" class="c-link">
                                            <?php echo $title; ?>
                                        </a>
                                    </h3>
                                </li>
                            <?php wp_reset_postdata(); endforeach; ?>
                        </ul>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    <?php }
}

add_action('odstresowani_footer_upper_elements', 'footer_upper_social', 20);
if ( !function_exists('footer_upper_social') ){
    function footer_upper_social(){
        $footer_social = carbon_get_theme_option('footer_social');
        ?>

        <div class="clearfix">
            <div class="footer__social ntb-col-12 flex-kit jce fwrap fr">
                <ul class="c-list d-flex">
                    <?php foreach ( $footer_social as $footer_list ): ?>
                        <li class="c-list__element footer__social__el mr16 ml16">
                            <a href="<?php echo $footer_list['footer_social_url']; ?>" class="c-link">
                                <?php $footer_social_icon = wp_get_attachment_image($footer_list['footer_social_image'], 'full'); ?>
                                <?php echo $footer_social_icon; ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>

    <?php }
}

add_action('odstresowani_footer_upper_end', 'footer_upper_end', 10);
if ( !function_exists('footer_upper_end') ){
    function footer_upper_end(){ ?>
            </div>
        </div>
    </div>
    <?php }
}

add_action('odstresowani_footer_bottom_start', 'footer_bottom_start', 10);
if ( !function_exists('footer_bottom_start') ){
    function footer_bottom_start(){ ?>
    <div class="footer-bottom mt32 mb16 c-blck">
        <div class="container">
            <div class="row clearfix">
    <?php }
}

add_action('odstresowani_footer_bottom_elements', 'footer_bottom_rights', 10);
if ( !function_exists('footer_bottom_rights') ){
    function footer_bottom_rights(){ ?>
        <div class="footer__rights ntb-col-4 fl">
            <span>© 2018 Odstresowani.pl  All rights reserved.</span>
        </div>
    <?php }
}

add_action('odstresowani_footer_bottom_elements', 'footer_bottom_links', 10);
if ( !function_exists('footer_bottom_links') ){
    function footer_bottom_links(){
        $footer_bottom_list = carbon_get_theme_option('footer_bottom_blocks');
        ?>
        <div class="ntb-col-8 fr">
            <ul class="c-list footer__politics flex-kit jce fwrap">
                <?php foreach ( $footer_bottom_list as $item ): 
                        $title = $item['footer_bottom_pages']; 
						$page = get_page_by_title($title);
                        $page = get_post(pll_get_post($page->ID,  $currlang));
                        $url = get_permalink($page->ID);
                        $title = $page->post_title; ?>
                    <li class="mr16 ml16"><a href="<?php echo $url; ?>" class="c-link"><?php echo $title; ?></a></li>
                <?php wp_reset_postdata(); endforeach; ?>
            </ul>
        </div>
    <?php }
}

add_action('odstresowani_footer_bottom_end', 'footer_bottom_end', 10);
if ( !function_exists('footer_bottom_end') ){
    function footer_bottom_end(){ ?>
            </div>
        </div>
    </div>
    <?php }
}

add_action('odstresowani_footer_end', 'footer_wrapper_end', 10);
if ( !function_exists('footer_wrapper_end') ){
    function footer_wrapper_end(){ ?>
        </footer>
    <?php }
}


