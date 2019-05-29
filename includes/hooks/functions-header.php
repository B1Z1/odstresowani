<?php
$locations = get_nav_menu_locations();

/**
 * @param $items
 * @param $item
 * @param $url
 * @param $title
 *
 * Submenu function
 *
 */
function submenu($items, $item){
    $parent = $item->ID;
    $children = array();
    ?>
    <?php
    foreach ( $items as $sub_item ){
        if ( $parent == $sub_item->menu_item_parent ) {
            $sub_url = $sub_item->url;
            $sub_title = $sub_item->title;
            $sub = array( 'url' => $sub_url, 'title' => $sub_title);
            array_push($children, $sub);
        }
    }
    ?>
    <?php if ( !empty($children) ): ?>
        <nav class="c-navigation c-navigation__submenu c-wh bck-gradient--operative">
            <div class="c-container c-container--968">
                <ul class="c-list mauto pt32 pb32 flex-kit">
                    <?php foreach ( $children as $child ): ?>
                        <li class="c-list__element mr16 ml16">
                            <a href="<?php echo $child['url']; ?>" class="c-link c-link__circle c-link--backbefwhite"><?php echo $child['title']; ?></a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </nav>
    <?php endif; ?>
<?php } 

/**
 * @param $item
 * @param $url
 * @param $title
 *
 * Submenu with posts function
 *
 */
function submenu_category($post_type, $url, $title){
    $categories = get_terms(array(
        'taxonomy' => $post_type,
    ));
    ?>
    <li class="c-navigation__trigger c-list__element mr16 ml16">
        <a href="<?php echo $url; ?>" class="c-link c-link__circle"><?php echo $title; ?></a>
        <nav class="c-navigation__submenu pt24 pr24 pb24 pl24 c-wh bck-gradient--operative">
            <div class="d-flex fwrap row">
                <div class="ntb-col-1">
                    <div class="f-vb mr24 mt8 mb8">Kategorie</div>
                </div>
                <div class="ntb-col-9">
                    <ul class="c-list header-menu__list d-flex fwrap">
                        <?php foreach ( $categories as $category ):
                            $title = $category->name;
                            $url = get_term_link($category->slug, $post_type);
                            $active = ' c-link--catactive'; ?>
                            <li class="c-list__element mr16 mb8">
                                <a href="<?php echo $url; ?>" class="c-link c-link__category<?php
                                if ( is_tax($post_type, $category->slug) || is_category($category->slug) ){
                                    echo $active;
                                }; ?>"><?php echo $title; ?></a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div class="ntb-col-2">
                    <?php get_search_form(); ?>
                </div>
            </div>
        </nav>
    </li>
<?php }

add_action('odstresowani_header_mobile_nav', 'nav_mobile', 10);
if ( !function_exists('nav_mobile') ) {
    function nav_mobile(){ global $locations;
        $location = 'header_mb';
        $items = wp_get_nav_menu_items($locations[$location]);
        $urls = array();
        $categories = array();

        /**
         *
         * Im foreach the $items array for sort normal links and links with categories
         * When it has sorted, I'm merging this two arrays in one $page
         *
         */
        if ( $items ){
            foreach ($items as $key => $item){
                $have_children = carbon_get_nav_menu_item_meta($item->ID, 'menu_cat');
                if ( $have_children ){
                    $categories[$key] = array(
                        'url' => $item->url,
                        'title' => $item->title,
                        'cat' => $have_children,
                    );
                }
                else{
                    $urls[$key] = array(
                        'url' => $item->url,
                        'title' => $item->title,
                        'cat' => false,
                    );
                }
            }
        }
        $pages = array_merge($urls, $categories); ?>

        <?php if ( $items ): ?>

            <!-- Mobile menu start -->
            <nav class="c-navigation__mobile c-blck bck-wh p32">
                <div class="c-navigation__close">
                    <?php $close_button = carbon_get_theme_option('general_close_button'); ?>
                    <img src="<?php echo wp_get_attachment_image_src($close_button, 'full')[0]; ?>" class="c-image" alt="Close button">
                </div>
                <ul class="c-list c-list--tabcol2">
                    <?php foreach ($pages as $page):
                        $url = $page['url'];
                        $title = $page['title'];
                        if ( $page['cat'] ){
                            $cat_tax = $page['cat'];
                            $categories = get_terms(array(
                                'taxonomy' => $cat_tax,
                            ));
                        }
                        ?>
                        <?php if ( $cat_tax ): ?>
                            </ul>
                            <h3 class="mt16 mb16 f-vb"><a href="<?php echo $url; ?>" class="c-link"><?php echo $title; ?></a></h3>
                            <ul class="c-list c-list--tabcol2">

                                <?php foreach ($categories as $category):
                                    $title_tax = $category->name;
                                    $url_tax = get_term_link($category->slug, $cat_tax); ?>

                                    <li class="c-list__element">
                                        <a href="<?php echo $url_tax; ?>" class="c-link"><?php echo $title_tax; ?></a>
                                    </li>

                                <?php endforeach; ?>
                        <?php else: ?>
                            <li class="c-list__element mb16">
                                <a href="<?php echo $url; ?>" class="c-link"><?php echo $title; ?></a>
                            </li>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </ul>
            </nav>
            <!-- Mobile menu end -->
        <?php endif; ?>
    <?php }
}

add_action('odstresowani_header_wrapper_start', 'header_wrapper_start', 10);
if ( !function_exists('header_wrapper_start') ){
function header_wrapper_start(){ ?>
    <header class="l-header c-flip c-wh">
        <div class="flex-kit jcsb row">
<?php }
}

add_action('odstresowani_header_inside', 'header_sygnet', 10);
if ( !function_exists('header_sygnet') ){
    function header_sygnet(){ ?>
            <figure class="l-header__logo mbl-col-9 tbl-col-6 pc-col-3">
                <a href="<?php echo get_home_url(); ?>" class="c-link flex-kit">
                    <div class="l-header__sygnets c-flip__container">
                        <?php
                        $sygnet_front = wp_get_attachment_image_src(carbon_get_theme_option('general_sygnet_front'), 'full')[0];
                        $sygnet_back = wp_get_attachment_image_src(carbon_get_theme_option('general_sygnet_back'), 'full')[0];
                        ?>
                        <?php if ( $sygnet_front ): ?>
                            <img class="c-image c-image--contain c-flip__front" src="<?php echo $sygnet_front; ?>" alt="Sygnet">
                        <?php endif; ?>
                        <?php if ( $sygnet_back ): ?>
                            <img class="c-image c-image--contain c-flip__back" src="<?php echo $sygnet_back; ?>" alt="Sygnet">
                        <?php endif; ?>
                    </div>
                    <h4 class="reset f-vb"><?php echo get_bloginfo('name'); ?></h4>
                </a>
            </figure>
    <?php }
}

add_action('odstresowani_header_inside', 'header_menu', 20);
if ( !function_exists('header_menu') ){
    function header_menu(){ global $locations;
        $location = 'header';
        $items = wp_get_nav_menu_items($locations[$location]);
        ?>
            <div class="l-header__menu mbl-col-6">
                <nav class="c-navigation row">
                    <ul class="c-list flex-kit jcc">
                        <?php if ( $items ): ?>
                            <?php foreach ( $items as $item ):
                                $url = $item->url;
                                $title = $item->title;
                                $post_type = carbon_get_nav_menu_item_meta($item->ID, 'menu_cat');
                            ?>
                                <?php if ( $post_type ): submenu_category($post_type, $url, $title);
                                elseif ( $item->menu_item_parent == 0 ): ?>
                                    <li class="c-navigation__trigger c-list__element mr16 ml16">
                                        <a href="<?php echo $url; ?>" class="c-link c-link__circle"><?php echo $title; ?></a>
                                        <?php submenu($items, $item);  ?>
                                    </li>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </ul>
                </nav>
            </div>
    <?php }
}

add_action('odstresowani_header_inside', 'header_extra_menu', 30);
if ( !function_exists('header_extra_menu') ){
    function header_extra_menu(){ global $locations;
        $location = 'header_extra';
        $items = wp_get_nav_menu_items($locations[$location]);
        ?>
            <div class="l-header__extra mbl-col-3 tbl-col-6 pc-col-3">
                <div class="clearfix">
                    <div class="c-hamburger fr">
                        <i class="fas fa-bars"></i>
                    </div>
                    <nav class="c-navigation__extra f-vb fr">
                        <ul class="c-list flex-kit">
                            <?php if ( $items ): ?>
                                <?php foreach ($items as $item):
                                    $url = $item->url;
                                    $title = $item->title;
                                    ?>
                                    <li class="mr16 ml16"><a href="<?php echo $url; ?>" class="c-link"><?php echo $title; ?></a></li>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </ul>
                    </nav>
                </div>
            </div>
    <?php }
}

add_action('odstresowani_header_wrapper_end', 'header_wrapper_end', 10);
if ( !function_exists('header_wrapper_end') ){
    function header_wrapper_end(){ ?>
            </div>
        </header>
    <?php }
}


