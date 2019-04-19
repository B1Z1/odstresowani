<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

/**
 *
 * Nav menu items
 *
 */
add_action( 'carbon_fields_register_fields', 'crb_register_navmenu', 10 );
if ( !function_exists('crb_register_navmenu') ){
    function crb_register_navmenu(){
        global $get;
        $posts_tax = $get->getTaxTypes();

        Container::make( 'nav_menu_item', __( 'Menu Settings' ) )
            ->add_fields( array(
                Field::make( 'select', 'menu_cat', __( 'Czy to jest strona z postami?' ) )
                    ->set_options($posts_tax),
            ));
    }
}