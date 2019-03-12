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
function submenu($items,$item, $url, $title){
        $parent = $item->menu_item_parent;
        ?>
        <div class="header_submenu c-blck bck-gs">
            <div class="container container_968">
                <ul class="header_submenu__list header_list reset_list pt32 pb32 flex-kit">
                    <?php foreach ( $items as $sub_item ): ?>
                        <?php if ( $parent = $sub_item->menu_item_parent ):
                            $sub_url = $sub_item->url;
                            $sub_title = $sub_item->title;
                            ?>
                            <li class="mr16 ml16"><a href="<?php echo $sub_url; ?>" class="header_menu__hover reset_link"><?php echo $sub_title; ?></a></li>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
<?php }

/**
 * @param $item
 * @param $url
 * @param $title
 *
 * Submenu with posts function
 *
 */
function submenu_category($item, $url, $title){
    $page_term = carbon_get_post_meta($item->object_id, 'page_type_posts');
    $categories = get_categories(array(
            'taxonomy' => $page_term,
    ));
    ?>
    <li class="mr16 ml16"><a href="<?php echo $url; ?>" class="header_menu__hover reset_link"><?php echo $title; ?></a>
        <div class="header_submenu pt32 pr24 pb32 pl24 c-wh bck-op">
            <ul class="header_submenu__list header_list reset_list flex-kit">
                <li class="f-vb mr24">Kategorie</li>
                <?php foreach ( $categories as $cateogory ):
                    $title = $cateogory->cat_name;
                    $url = get_term_link($cateogory->slug, $page_term);
                    $active = ' link_category__active';
                    ?>
                    <li class="mr16">
                        <a href="<?php echo $url; ?>" class="link link_category reset_link<?php echo is_tax($page_term,$cateogory->slug) ? $active:''; ?>"><?php echo $title; ?></a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </li>
<?php }

add_action('odstresowani_header_mobile_nav', 'nav_mobile', 10);
if ( !function_exists('nav_mobile') ) {
    function nav_mobile(){ global $locations;
        $location = 'header_mb';
        $items = wp_get_nav_menu_items($locations[$location]);
        ?>
        <!-- Mobile menu start -->
        <nav class="header_mobilenav c-blck bck-wh p32">
            <div class="header_mobilenav__close">
                <?php $close_button = carbon_get_theme_option('general_close_button'); ?>
                <img src="<?php echo wp_get_attachment_image_src($close_button, 'full')[0]; ?>" alt="Close button">
            </div>
            <ul class="header_mobilenav__list reset_list">
            <?php foreach ($items as $item):
                $url = $item->url;
                $title = $item->title;
                ?>
                <li><a href="<?php echo $url; ?>" class="reset_link"><?php echo $title; ?></a></li>
            <?php endforeach; ?>
            </ul>
        </nav>
        <!-- Mobile menu end -->
    <?php }
}

add_action('odstresowani_header_wrapper_start', 'header_wrapper_start', 10);
if ( !function_exists('header_wrapper_start') ){
    function header_wrapper_start(){ ?>
        <header class="header mr16 ml16 pt32 pr24 pb16 pl24 c-wh">
            <div class="flex-kit jcsb row">
    <?php }
}

add_action('odstresowani_header_inside', 'header_sygnet', 10);
if ( !function_exists('header_sygnet') ){
    function header_sygnet(){ ?>
        <div class="header_logo mbl-col-10 pc-col-3">
            <figure class="f-vb">
                <a href="<?php echo get_home_url(); ?>" class="flex-kit reset_link">
                    <div class="header_sygnets">
                        <?php
                        $logo_front = carbon_get_theme_option('general_logo_front');
                        $logo_back = carbon_get_theme_option('general_logo_back');
                        ?>
                        <?php if ( $logo_front ): ?>
                            <img class="header_sygnet header_sygnet__white" src="<?php echo wp_get_attachment_image_src($logo_front, 'full')[0]; ?>" alt="Sygnet">
                        <?php endif; ?>
                        <?php if ( $logo_back ): ?>
                            <img class="header_sygnet header_sygnet__black" src="<?php echo wp_get_attachment_image_src($logo_back, 'full')[0]; ?>" alt="Sygnet">
                        <?php endif; ?>
                    </div>
                    <h4 class="reset"><?php echo get_bloginfo('name'); ?></h4>
                </a>
            </figure>
        </div>
    <?php }
}

add_action('odstresowani_header_inside', 'header_menu', 20);
if ( !function_exists('header_menu') ){
    function header_menu(){ global $locations;
        $location = 'header';
        $items = wp_get_nav_menu_items($locations[$location]);
    ?>
        <div class="header_menu mbl-col-6">
            <nav class="row">
                <ul class="header_list reset_list flex-kit jcc">
                    <?php foreach ( $items as $item ):
                        $url = $item->url;
                        $title = $item->title;
                        $is_post = carbon_get_nav_menu_item_meta($item->ID, 'menu_cat');
                        ?>
                        <?php if ( $is_post ):
                            submenu_category($item, $url, $title);
                        elseif ( $item->menu_item_parent == 0 ): ?>
                            <li class="mr16 ml16">
                                <a href="<?php echo $url; ?>" class="header_menu__hover reset_link"><?php echo $title; ?></a>
                                <?php submenu($items,$item, $url, $title);  ?>
                            </li>
                        <?php endif; ?>
                    <?php endforeach; ?>
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
        <div class="mbl-col-2 pc-col-3">
            <div class="clearfix">
                <div class="header_hamburger ml32 fr">
                    <i class="fas fa-bars"></i>
                </div>
                <nav class="header_extramenu f-vb fr">
                    <ul class="header_list reset_list flex-kit">
                    <?php foreach ($items as $item):
                        $url = $item->url;
                        $title = $item->title;
                        ?>
                        <li class="mr16 ml16"><a href="<?php echo $url; ?>" class="reset_link"><?php echo $title; ?></a></li>
                    <?php endforeach; ?>
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


