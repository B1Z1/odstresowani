<?php
/**
 *
 * Register new post type "Strefa wiedzy"
 *
 */
add_action( 'init', 'register_post_types' );
function register_post_types(){
    register_post_type('strefa-wiedzy', array(
        'label'  => 'Strefa wiedzy',
        'labels' => array(
            'name'               => 'Strefa wiedzy',
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
        'show_in_menu'        => true,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-format-aside',
        'supports'            => array('title','editor','thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
        'show_in_rest'        => true,
        'rewrite'             => true,
        'query_var'           => true,
    ) );
}

/**
 *
 * Register taxonomy "Kategorie" for "Strefa wiedzy"
 *
 */
add_action( 'init', 'create_taxonomy' );
function create_taxonomy(){
    register_taxonomy('strefa-wiedzy-kategorie', 'strefa-wiedzy', array(
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
        'show_in_rest'          => true, // добавить в REST API
        'hierarchical'          => true,
        'rewrite'               => true,
        'query_var' => true,
        'capabilities'          => array(),
        'show_admin_column'     => false, // Позволить или нет авто-создание колонки таксономии в таблице ассоциированного типа записи. (с версии 3.5)
    ) );
}