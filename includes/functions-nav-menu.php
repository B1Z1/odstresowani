<?php
// This theme uses wp_nav_menu() in one location.
register_nav_menus( array(
    'header' => esc_html__( 'Główne menu', 'odstresowani' ),
    'header_extra' => esc_html__( 'Główne menu prawa część', 'odstresowani' ),
    'header_mb' => esc_html__( 'Główne menu mobilne', 'odstresowani' ),
) );

/**
 * Class ListStyles
 *
 * This is object for Generate Class List
 *
 */
class MenuClass{
    function __construct($args)
    {
        $this->term = $args['term'] ? $args['term']:'';
        $this->depth = $args['depth'] ? $args['depth']:1;
        $this->ul = $args['ul_classes'] ? $args['ul_classes']:'';
        $this->li = $args['li_classes'] ? $args['li_classes']:'';
        $this->link = $args['link_classes'] ? $args['link_classes']:'';
        $this->ul_sub = $args['ul_classes_sub'] ? $args['ul_classes_sub']:'';
        $this->block_sub = $args['block_classes_sub'] ? $args['block_classes_sub']:'';
    }

    function generate_class($classes){
        if ( $classes ){
            return 'class = "' . $classes . '"';
        }
        else false;
    }

    function generate_link($url, $title, $classes){
        return '<a href="' . $url . '" ' . $classes . '>' . $title . '</a>';
    }

}


if ( !function_exists('odstresowani_menu' ) ){
    function odstresowani_menu($args){
        /**
         *
         * Generate all classes
         *
         */
        $classes = new MenuClass($args);
        $ul_class = $classes->generate_class($classes->ul);
        $li_class = $classes->generate_class($classes->li);
        $link_class = $classes->generate_class($classes->link);

        /**
         *
         * Classes for sub menus
         *
         */
        $ul_class_sub = $classes->generate_class($classes->ul_sub);
        $block_class_sub = $classes->generate_class($classes->block_sub);

        /**
         *
         * General settings
         *
         */
        $term = $classes->term;
        $depth = $classes->depth;


        $locations = get_nav_menu_locations();
        $menu = wp_get_nav_menu_object($locations[$term]);
        $menu_items = wp_get_nav_menu_items($menu->term_id);



        $menu_list = '<ul ' . $ul_class . ' >';
        foreach ((array)$menu_items as $key => $menu_item) {
            if ( $menu_item->menu_item_parent == 0 ) {
                $menu_list .= '<li ' . $li_class . '>';

                $menu_list .= $classes->generate_link($menu_item->url, $menu_item->title, $link_class);

                if ( $depth == 2 ){
                    foreach ((array)$menu_items as $key_sub => $menu_item_sub) {
                        if ( $menu_item_sub->menu_item_parent == $menu_item->ID ) {
                            /**
                             *
                             * Container
                             *
                             */
                            $menu_list .= '<div ' . $block_class_sub . '><div class="container">';

                            /**
                             *
                             * List
                             *
                             */
                            $menu_list .= '<ul ' . $ul_class_sub . '>';

                            /**
                             *
                             * Element in list
                             *
                             */
                            $menu_list .= '<li ' . $li_class . '>';
                            $menu_list .= $classes->generate_link($menu_item_sub->url, $menu_item_sub->title, $link_class);
                            $menu_list .= '</li>';

                            /**
                             *
                             * List
                             *
                             */
                            $menu_list .= '</ul>';

                            /**
                             *
                             * Container
                             *
                             */
                            $menu_list .= '</div></div>';
                        }
                    }
                }

                $menu_list .= '</li>';
            }
        }
        $menu_list .= '</ul>';



        /**
         *
         * Remove object
         *
         */
        unset($classes);
        return $menu_list;
    }
}