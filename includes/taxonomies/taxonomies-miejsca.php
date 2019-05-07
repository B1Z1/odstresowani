<?php
/**
 *
 * Register new post type "Miejsca relaxu"
 *
 */
add_action( 'init', 'register_miejsca' );
function register_miejsca(){
    register_post_type('miejsca_relaxu', array(
        'label'  => 'Miejsca',
        'labels' => array(
            'name'               => 'Miejsca Relaxu',
            'singular_name'      => 'Posty',
            'add_new'            => 'Dodaj post',
            'add_new_item'       => 'Dodawanie postu',
            'edit_item'          => 'Redagowanie postu',
            'new_item'           => 'Nowy post',
            'view_item'          => 'Obejrzeć post',
            'search_items'       => 'Szukać według nazwy',
            'not_found'          => 'Nie znaleziono',
            'not_found_in_trash' => 'Nie znaleziono w koszu',
        ),
        'publicly_queryable'  => false,
        'public'              => true,
        'show_in_menu'        => true,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-format-aside',
        'supports'            => array('title','editor','thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
        'show_in_rest'        => false,
        'rewrite'             => true,
        'query_var'           => true,
    ) );
}