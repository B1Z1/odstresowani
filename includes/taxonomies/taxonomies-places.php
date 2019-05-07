<?php
/**
 *
 * Register new post type "Miejsca"
 *
 */
add_action( 'init', 'register_places' );
function register_places(){
    register_post_type('places', array(
        'label'  => 'Miejsca',
        'labels' => array(
            'name'               => 'Miejsca',
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
        'public'              => true,
        'publicly_queryable'  => false,
        'show_in_menu'        => true,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-format-aside',
        'supports'            => array('title', 'editor', 'thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
        'show_in_rest'        => false,
        'rewrite'             => true,
        'query_var'           => true,
    ) );
}

/**
 *
 * Register taxonomy "places-kategorie" for "Miejsca"
 *
 */
add_action( 'init', 'register_taxonomy_places' );
function register_taxonomy_places(){
    register_taxonomy('places-kategorie', 'places', array(
        'label'                 => 'Kategorie Miejsca',
        'labels'                => array(
            'name'              => 'Kategorie',
            'singular_name'     => 'Kategoria',
            'search_items'      => 'Szukaj kategorie',
            'all_items'         => 'Wszystkie kategorie',
            'view_item '        => 'Zobacz kategorie',
            'parent_item'       => 'Rodzic',
            'parent_item_colon' => 'Rodzic: ',
            'edit_item'         => 'Edytuj',
            'update_item'       => 'Aktualizuj',
            'add_new_item'      => 'Dodaj',
            'new_item_name'     => 'Nowa',
            'menu_name'         => 'Kategorie',
        ),
        'public'                => true,
        'publicly_queryable'  => false,
        'show_in_rest'          => true, 
        'hierarchical'          => false,
        'rewrite'               => true,
        'query_var'             => true,
        'show_admin_column'     => false, 
    ) );
}