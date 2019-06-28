<?php
global $currlang;


add_action('odstresowani_footer_start', 'footer_wrapper_start', 10);
if ( !function_exists('footer_wrapper_start') ){
    function footer_wrapper_start(){ ?>
        <div class="l-Wrapper">
            <footer class="l-footer">
    <?php }
}

add_action('odstresowani_footer_upper_start', 'footer_upper_start', 10);
if ( !function_exists('footer_upper_start') ){
    function footer_upper_start(){ ?>
    <div class="l-footer__upper bck-gradient--operative pt64 pb32 c-wh">
        <div class="l-Container">
            <div class="row">
    <?php }
}

add_action('odstresowani_footer_upper_elements', 'footer_upper_blocks', 10);
if ( !function_exists('footer_upper_blocks') ){
    function footer_upper_blocks(){
        $footer_blocks = carbon_get_theme_option('footer_blocks'); ?>

        <div class="l-footer__blocks d-flex jcsa fwrap mb64">
            <?php foreach ( $footer_blocks as $footer_block ): $block = $footer_block['footer_block']; ?>
                <div class="mbl-col-12 tbl-col-6 ntb-col-3">
                    <nav class="c-navigation mb32">
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
                    </nav>
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

        <div class="l-footer__social mbl-col-12 clearfix">
            <nav class="c-navigation fr">
                <ul class="c-list d-flex">
                    <?php foreach ( $footer_social as $footer_list ): ?>
                        <li class="c-list__element mr16 ml16">
                            <a href="<?php echo $footer_list['footer_social_url']; ?>" class="c-link c-link--diblock">
                                <?php $footer_social_icon = wp_get_attachment_image_url($footer_list['footer_social_image'], 'full'); ?>
                                <img src="<?php echo $footer_social_icon; ?>" alt="Icon" class="c-Image c-Image--24wh">
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </nav>
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
        <div class="l-footer__bottom mt32 mb16 c-blck">
            <div class="l-Container">
                <div class="row flex-kit aic jcsb fwrap">
    <?php }
}

add_action('odstresowani_footer_bottom_elements', 'footer_bottom_rights', 10);
if ( !function_exists('footer_bottom_rights') ){
    function footer_bottom_rights(){ ?>
        <div class="l-footer__rights ntb-col-4">
            <span>© 2018 Odstresowani.pl  All rights reserved.</span>
        </div>
    <?php }
}

add_action('odstresowani_footer_bottom_elements', 'footer_bottom_links', 10);
if ( !function_exists('footer_bottom_links') ){
    function footer_bottom_links(){
        $footer_bottom_list = carbon_get_theme_option('footer_bottom_blocks');
        ?>
        <div class="l-footer__politics ntb-col-8">
            <nav class="c-navigation">
                <ul class="c-list flex-kit jce fwrap">
                    <?php foreach ( $footer_bottom_list as $item ): 
                            $title = $item['footer_bottom_pages']; 
                            $page = get_page_by_title($title);
                            $page = get_post(pll_get_post($page->ID,  $currlang));
                            $url = get_permalink($page->ID);
                            $title = $page->post_title; ?>
                        <li class="mr16 ml16"><a href="<?php echo $url; ?>" class="c-link"><?php echo $title; ?></a></li>
                    <?php wp_reset_postdata(); endforeach; ?>
                </ul>
            </nav>
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


