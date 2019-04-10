<?php
/**
 *
 * Register new post type "Strefa wiedzy" start
 *
 */
add_action( 'init', 'register_strefa_wiedzy' );
function register_strefa_wiedzy(){
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
        'supports'            => array('comments', 'author', 'title','editor','thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
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
add_action( 'init', 'register_strefa_wiedzy_kategorie' );
function register_strefa_wiedzy_kategorie(){
    register_taxonomy('strefa-wiedzy-kategorie', 'strefa-wiedzy', array(
        'label'                 => 'Kategorie',
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
        'query_var'             => true,
        'show_admin_column'     => false, // Позволить или нет авто-создание колонки таксономии в таблице ассоциированного типа записи. (с версии 3.5)
    ) );
}

/**
 *
 * Register new post type "Strefa wiedzy" end
 *
 */

/**
 *
 * Register new post type "Ciekawostki" start
 *
 */
add_action( 'init', 'register_relax' );
function register_relax(){
    register_post_type('relax', array(
        'label'  => 'Techniki relaksacyjne',
        'labels' => array(
            'name'               => 'Techniki relaksacyjne',
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
        'publicly_queryable' => true,
        'menu_position'       => 6,
        'menu_icon'           => 'dashicons-smiley',
        'supports'            => array('title','thumbnail', 'editor'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
        'rewrite'             => true,
        'query_var'           => true,
    ) );
}

/**
 *
 * Register new post type "Ciekawostki" end
 *
 */
/**
 *
 * Register new post type "Trudne sprawy" start
 *
 */
add_action( 'init', 'register_trudne_sprawy' );
function register_trudne_sprawy(){
    register_post_type('trudne-sprawy', array(
        'label'  => 'Trudne sprawy',
        'labels' => array(
            'name'               => 'Trudne sprawy',
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
        'menu_position'       => 7,
        'menu_icon'           => 'dashicons-format-aside',
        'supports'            => array('comments ', 'author','title','editor','thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
        'show_in_rest'        => true,
        'rewrite'             => true,
        'query_var'           => true,
    ) );
}

/**
 *
 * Register taxonomy "Kategorie" for "Trudne sprawy"
 *
 */
add_action( 'init', 'register_trudne_sprawy_kategorie' );
function register_trudne_sprawy_kategorie(){
    register_taxonomy('trudne-sprawy-kategorie', 'trudne-sprawy', array(
        'label'                 => 'Kategorie',
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
        'query_var'             => true,
        'show_admin_column'     => false, // Позволить или нет авто-создание колонки таксономии в таблице ассоциированного типа записи. (с версии 3.5)
    ) );
}

/**
 *
 * Register new post type "Trudne sprawy" end
 *
 */