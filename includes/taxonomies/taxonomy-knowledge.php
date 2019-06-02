<?php
/**
 *
 * Register new post type "Strefa wiedzy"
 *
 */
register_post_type('strefa-wiedzy', array(
    'label'  => 'Strefa wiedzy',
    'labels' => array(
        'name'               => 'Strefa wiedzy',
        'singular_name'      => 'Strefa wiedzy',
        'add_new'            => 'Dodaj post',
        'add_new_item'       => 'Dodawanie postu',
        'edit_item'          => 'Redagowanie postu',
        'new_item'           => 'Nowy post',
        'view_item'          => 'Obejrzeć post',
        'search_items'       => 'Szukać według nazwy',
        'not_found'          => 'Nie znaleziono',
        'not_found_in_trash' => 'Nie znaleziono w koszu',
    ),
    'publicly_queryable'  => true,
    'public'              => true,
    'show_in_menu'        => true,
    'menu_position'       => 5,
    'menu_icon'           => 'dashicons-format-aside',
    'supports'            => array('title','editor','thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
    'show_in_rest'        => true,
    'rewrite'             => true,
    'query_var'           => true,
) );


/**
 * 
 * Register "Miejsca kategorie" taxonomy for "Miejsca"
 * 
 */
register_taxonomy('strefa-wiedzy-kategoria', array('strefa-wiedzy'), array(
    'label'                 => 'Kategorie', // определяется параметром $labels->name
    'labels'                => array(
        'name'              => 'Kategorie',
        'singular_name'     => 'Kategoria',
        'search_items'      => 'Szukaj',
        'all_items'         => 'Wszystkie',
        'view_item '        => 'Obejrzeć',
        'parent_item'       => 'Rodzic',
        'parent_item_colon' => 'Rodzic:',
        'edit_item'         => 'Edytuj',
        'update_item'       => 'Odnów',
        'add_new_item'      => 'Dodaj nowy',
        'new_item_name'     => 'Nowa nazwa',
        'menu_name'         => 'Kategorie',
    ),
    'public'                => true,
    'publicly_queryable'    => true, // равен аргументу public
    'show_in_rest'          => true, // добавить в REST API
    'hierarchical'          => true,
    'rewrite'               => true,
) );
