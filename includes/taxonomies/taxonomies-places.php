<?php
/**
 *
 * Register new post type "Miejsca"
 *
 */
add_action( 'init', 'register_post_miejsca' );
function register_post_miejsca(){
    register_post_type('miejsca', array(
        'label'  => 'Miejsca',
        'labels' => array(
            'name'               => 'Miejsca',
            'singular_name'      => 'Miejsca',
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
        'show_in_rest'        => false,
        'rewrite'             => true,
        'query_var'           => true,
    ) );
}

/**
 * 
 * Register "Miejsca kategorie" taxonomy for "Miejsca"
 * 
 */
add_action( 'init', 'create_taxonomy_miejsca' );
function create_taxonomy_miejsca(){
	register_taxonomy('miejsca-kategorie', array('miejsca'), array(
		'label'                 => 'Miejsca kategorie', // определяется параметром $labels->name
		'labels'                => array(
			'name'              => 'Miejsca kategorie',
			'singular_name'     => 'Miejsca kategoria',
			'search_items'      => 'Szukaj',
			'all_items'         => 'Wszystkie',
			'view_item '        => 'Obejrzeć',
			'parent_item'       => 'Rodzic',
			'parent_item_colon' => 'Rodzic:',
			'edit_item'         => 'Edytuj',
			'update_item'       => 'Odnów',
			'add_new_item'      => 'Dodaj nowy',
			'new_item_name'     => 'Nowa nazwa',
			'menu_name'         => 'Miejsca kategorie',
		),
		'public'                => true,
		'publicly_queryable'    => false, // равен аргументу public
		'show_in_rest'          => true, // добавить в REST API
		'hierarchical'          => false,
		'rewrite'               => true,
	) );
}