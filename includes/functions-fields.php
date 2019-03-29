<?php
add_action( 'after_setup_theme', 'crb_load' );
function crb_load() {
    require_once( get_template_directory() . '/plugins/carbon-fields/vendor/autoload.php' );
    \Carbon_Fields\Carbon_Fields::boot();
}



use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 *
 * Get ids of page for footer list
 *
 */
function ods_get_pages($type){
    /**
     *
     * Query all pages
     *
     */
    $pages = new WP_Query();
    $pages = $pages->query( array(
        'post_type' => $type,
		'posts_per_page' => -1,
    ) );
    $pages_url_object = array();

    foreach ( $pages as $page ){
        $pages_url_object[$page->post_title] = $page->post_title;

    }
    wp_reset_query();
    return $pages_url_object;
}

add_action( 'carbon_fields_register_fields', 'crb_attach_theme_options' );
function crb_attach_theme_options() {
    $posts = array(
        '' => 'Nie',
        'post' => 'Artykuły',
        'strefa-wiedzy' => 'Strefa wiedzy',
        'ciekawostki' => 'Ciekawostki',
        'trudne-sprawy' => 'Trudne sprawy',
    );
    $posts_tax = array(
        '' => 'Nie',
        'category' => 'Artykuły',
        'strefa-wiedzy-kategorie' => 'Strefa wiedzy',
        'trudne-sprawy-kategorie' => 'Trudne sprawy',
    );
    $page_ids = ods_get_pages('page');
    $posts_ids = ods_get_pages('post');
    $knowledge_ids = ods_get_pages('strefa-wiedzy');
    $posts_ids = array_merge($posts_ids, $knowledge_ids);
    /**
     *
     * Category container
     *
     *
     */
    Container::make( 'term_meta', __( 'Category Properties' ) )
        ->where( 'term_taxonomy', '=', 'category' )
        ->add_fields( array(
            Field::make( 'image', 'category_sygnet', __( 'Sygnet kategorii' ) ),
            Field::make( 'image', 'category_image', __( 'Obraz kategorii' ) ),
        ) );
    Container::make( 'term_meta', __( 'Category Properties' ) )
        ->where( 'term_taxonomy', '=', 'strefa-wiedzy-kategorie' )
        ->add_fields( array(
            Field::make( 'image', 'category_sygnet', __( 'Sygnet kategorii' ) ),
            Field::make( 'image', 'category_image', __( 'Obraz kategorii' ) ),
            Field::make('color', 'category_color', __('Kolor kategorii')),
            Field::make('text', 'category_top', __('Wpisz pozycje kategorii według osiY w procentach (Max: 100%)'))
                ->set_attribute('type', 'number')
                ->set_attribute('max', 100),
            Field::make('text', 'category_left', __('Wpisz pozycje kategorii według osiX w procentach (Max: 100%)'))
                ->set_attribute('type', 'number')
                ->set_attribute('max', 100),
        ) );
    Container::make( 'term_meta', __( 'Category Properties' ) )
        ->where( 'term_taxonomy', '=', 'trudne-sprawy-kategorie' )
        ->add_fields( array(
            Field::make( 'image', 'category_sygnet', __( 'Sygnet kategorii' ) ),
            Field::make( 'image', 'category_image', __( 'Obraz kategorii' ) ),
        ) );
    /**
     *
     * Nav menu items
     *
     */
    Container::make( 'nav_menu_item', __( 'Menu Settings' ) )
        ->add_fields( array(
            Field::make( 'select', 'menu_cat', __( 'Czy to jest strona z postami?' ) )
                ->set_options($posts_tax),
        ));
    /**
     *
     * Theme options container
     *
     */
    Container::make( 'theme_options', __( 'Theme Options' ) )
        ->add_tab( 'Opcje generalne', array(
            Field::make( 'image', 'general_sygnet_front', 'Strona przodowa logotypu' ),
            Field::make( 'image', 'general_sygnet_back', 'Strona tylna logotypu' ),
            Field::make( 'image', 'general_sygnet_mini', 'Miniaturka logotypu na postach' ),
            Field::make( 'image', 'general_sygnet_search', 'Logotyp na stronie z wyszukiwaniem' ),
            Field::make( 'image', 'general_close_button', 'Przycisk zamknięcia' ),
        ))
        ->add_tab('Stopka strony', array(
            Field::make('complex', 'footer_social', __('Social linki'))
                ->add_fields( array(
                    Field::make('text', 'footer_social_url', __('Link do social strony')),
                    Field::make('image', 'footer_social_image', __('Ikonka linku'))
                )),
            Field::make( 'complex', 'footer_blocks', __( 'Bloki stopki' ) )
                ->add_fields( array(
                    Field::make( 'complex', 'footer_block', __( 'Strony bloku' ) )
                        ->add_fields( array(
                            Field::make( 'select', 'footer_block_page', __( 'Wybierz strone' ) )
                                ->set_options( $page_ids )
                        )),
                )),
            Field::make( 'complex', 'footer_bottom_blocks', __( 'Linki na dolnej części stopki' ) )
                ->add_fields( array(
                    Field::make( 'select', 'footer_bottom_pages', __( 'Wybierz strone' ) )
                        ->set_options( $page_ids )
                )),
        ))
        ->add_tab('Kontakt strona', array(
           Field::make('file', 'contact_film_mp4', __('Video na tle MP4')),
           Field::make('file', 'contact_film_ogg', __('Video na tle OGG')),
        ))
        ->add_tab('Strona wyszukiwania', array(
           Field::make('file', 'search_film_mp4', __('Video na tle MP4')),
           Field::make('file', 'search_film_ogg', __('Video na tle OGG')),
        ))
        ->add_tab('Strona 404', array(
           Field::make('file', '404_film_mp4', __('Video na tle MP4')),
           Field::make('file', '404_film_ogg', __('Video na tle OGG')),
        ));

    /**
     *
     * Blocks
     *
     */
    /**
     *
     * Banner block
     *
     */
    Block::make(__('Hero Banner'))
        ->add_fields(array(
            Field::make('select', 'hero_check', __('Wybierz co chcesz'))
                ->set_options(array(
                   'photo' => 'Zdjęcie',
                   'video' => 'Video',
                )),
            Field::make( 'file', 'hero_video_mp4', __('Wybierz filmik MP4') )
                ->set_conditional_logic(array(
                    'relation' => 'OR',
                    array(
                        'field' => 'hero_check',
                        'value' => 'video',
                        'compare' => '=',
                    )
                )),
            Field::make( 'file', 'hero_video_ogg', __('Wybierz filmik OGG') )
                ->set_conditional_logic(array(
                    'relation' => 'OR',
                    array(
                        'field' => 'hero_check',
                        'value' => 'video',
                        'compare' => '=',
                    )
                )),
            Field::make( 'image', 'hero_photo', __('Wybierz zdjęcie') )
                ->set_conditional_logic(array(
                    'relation' => 'OR',
                    array(
                        'field' => 'hero_check',
                        'value' => 'photo',
                        'compare' => '=',
                    )
                )),
            Field::make('text', 'hero_heading', __('Tytuł'))
                ->set_attribute('maxLength', '60'),
            Field::make('text', 'hero_content', __('Mały opis'))
                ->set_attribute('maxLength', '140'),
            Field::make('text', 'hero_url', __('Link czytaj więcej')),
        ))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/part-hero.php',false, false) );
        });
    /**
     *
     * Block advanced
     *
     */
    Block::make(__('Blok zaawansowany'))
        ->add_fields(array(
            Field::make('select', 'advanced_pt', __('Marginez górny w pikselach'))
                ->set_options(array(
                   'pt128' => '128',
                   'pt64' => '64',
                   'pt32' => '32',
                )),
            Field::make('select', 'advanced_pb', __('Marginez dolny w pikselach'))
                ->set_options(array(
                    'pb128' => '128',
                    'pb64' => '64',
                    'pb32' => '32',
                )),
            Field::make('rich_text', 'advanced_text', __('Text wewnątrz bloku')),
        ))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/part-advanced-block.php',false, false) );
        });
    /**
     *
     * Block Slider for pages
     *
     */
    Block::make(__('Blok slajder dla stron'))
        ->add_fields(array(
            Field::make('complex', 'page_slide', __('Slajd dla strony'))
                ->add_fields(array(
                    Field::make('image', 'page_slide_image', __('Tło slajdu')),
                    Field::make('select', 'page_slide_page', __('Strona slajdu'))
                        ->set_options( $page_ids ),
                    Field::make('textarea', 'page_slide_content', __('Krótki opis tego slajdu'))
                        ->set_attribute('maxLength', '300'),
                ))
        ))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/part-page-slider.php',false, false) );
        });
    /**
     *
     * Block Slider recent posts
     *
     */
    Block::make(__('Ostatnio dodane posty w slajderze'))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/part-recent-posts.php',false, false) );
        });

    /**
     *
     * Block Slider recent posts on grey background and fullwidth
     *
     */
    Block::make(__('Slajder postów na szarym tle'))
        ->add_fields(array(
            Field::make('complex', 'grey_slider', __('Slajd dla strony'))
                ->add_fields(array(
                    Field::make('select', 'grey_slider_post', __('Wybierz post dla slajdera'))
                        ->set_options($posts_ids),
                ))
        ))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/part-slider-grey.php',false, false) );
        });

    /**
     *
     * Block With all posts
     *
     */
    Block::make(__('Blok ze wszystkimi postami'))
        ->add_fields(array(
            Field::make('select', 'posts', __('Wybierz typ postów'))
                ->set_options($posts),
            Field::make('select', 'posts_style', __('Wybierz pozycjonowanie postów (Działa na wszystkie oprócz ciekawostek)'))
                ->set_options( array(
                    '' => 'Nic',
                    'list' => 'List',
                    'blocks' => 'Kafelki',
                ) ),
        ))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/part-posts.php',false, false) );
        });

    /**
     *
     * Block With most viewed posts
     *
     */
    Block::make(__('Blok z najbardziej oglądającymi postami'))
        ->add_fields(array(
            Field::make('select', 'most_viewed_posts', __('Wybierz typ postów'))
                ->set_options($posts),
        ))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/content-most-viewed-3.php',false, false) );
        });

    /**
     *
     * Block Banner for posts
     *
     */
    Block::make(__('Blok banner dla postów'))
        ->add_fields(array(
            Field::make('image', 'banner_image', __('Zdjęcie dla banera')),
            Field::make('text', 'banner_autor', __('Podaj autora zdjęcia')),
            Field::make('select', 'banner_size', __('Podaj rozmiar obrazu'))
                ->set_options( array(
                    'small' => 'Mały',
                    'full' => 'Duży',
                ))
                ->set_default_value('small'),

        ))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/part-banner.php',false, false) );
        });

}