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
        'lang' => 'pl',
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
     * Term taxonomy = category
     *
     *
     */
    Container::make( 'term_meta', __( 'Category Properties' ) )
        ->where( 'term_taxonomy', '=', 'category' )
        ->add_fields( array(
            Field::make( 'image', 'category_sygnet', __( 'Sygnet kategorii' ) ),
            Field::make( 'image', 'category_image', __( 'Obraz kategorii' ) ),
        ) );
    /**
     * 
     * Term taxonomy = strefa-wiedzy-kategorie
     * 
     */
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
    /**
     * 
     * Term taxonomy = trudne-sprawy-kategorie
     * 
     */
    Container::make( 'term_meta', __( 'Category Properties' ) )
        ->where( 'term_taxonomy', '=', 'trudne-sprawy-kategorie' )
        ->add_fields( array(
            Field::make( 'image', 'category_sygnet', __( 'Sygnet kategorii' ) ),
            Field::make( 'image', 'category_image', __( 'Obraz kategorii' ) ),
        ) );
    /**
     * 
     * Term taxonomy = page
     * 
     */
    Container::make( 'post_meta', __( 'Category Properties' ) )
        ->where( 'post_type', '=', 'page' )
        ->add_fields( array(
            Field::make( 'image', 'page_sygnet', __( 'Sygnet strony' ) ),
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
            Field::make( 'image', 'general_post_wave', 'Linia pod postem' ),
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
     * Hero banner for main page/maybe for smthing else
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
     * Im use this for "Panel stress"
     * And in main page
     *
     */
    Block::make(__('Blok zaawansowany'))
        ->add_fields(array(
            //Block main options start

            //Header trigger
            Field::make('checkbox', 'advanced_header', __('Czy ma pojawiać się nagłówek strony'))
                ->set_option_value(true),

            //Padding top of block
            Field::make('select', 'advanced_pt', __('Marginez wewnętrzny górny w pikselach'))
                ->set_options(array(
                   'pt160' => '160',
                   'pt128' => '128',
                   'pt64' => '64',
                   'pt32' => '32',
                   'none' => '0',
                )),


            //Padding bottom of block
            Field::make('select', 'advanced_pb', __('Marginez wewnętrzny dolny w pikselach'))
                ->set_options(array(
                    'pb160' => '160',
                    'pb128' => '128',
                    'pb64' => '64',
                    'pb32' => '32',
                    'none' => '0',
                )),

            //Margin top of block
            Field::make('select', 'advanced_mt', __('Marginez górny w pikselach'))
                ->set_options(array(
                   'mt224' => '224',
                   'mt160' => '160',
                   'mt128' => '128',
                   'mt64' => '64',
                   'mt32' => '32',
                   'none' => '0',
                )),

            //Margin bottom of block
            Field::make('select', 'advanced_mb', __('Marginez dolny w pikselach'))
                ->set_options(array(
                    'mb224' => '224',
                    'mb160' => '160',
                    'mb128' => '128',
                    'mb64' => '64',
                    'mb32' => '32',
                    'none' => '0',
                )),

            //Title of block
            Field::make('textarea', 'advanced_title', __('Tytuł bloku')),

            //Size of title
            Field::make('select', 'advanced_size_title', __('Rozmiar nagłówku'))
            ->set_options(array(
               '1' => '1',
               '2' => '2',
               '3' => '3',
               '4' => '4',
               '5' => '5',
               '6' => '6',
            )),

            //Text align for title
            Field::make('select', 'advanced_aligntext_title', __('Pozycjonowanie nagłówku'))
                ->set_options(array(
                    'block--texleft' => 'Lewo',
                    'block--texcen' => 'Centr',
                    'block--texright' => 'Prawo',
                )),

            //If has image, give for him position absolute and go to bottom of block
            Field::make('image', 'advanced_blockimage', __('Obrazek pod blokiem')),

            //Background colors of Block
            Field::make('select', 'advanced_backcolor', __('Kolor tła bloku'))
                ->set_options(array(
                    'bck-gm' => 'Ciemno szary',
                    'bck-gs' => 'Srednio szary',
                    'bck-gt' => 'Jasno szary',
                    'bck-wh' => 'Biały',
                )),

            //Justify elements of Columns
            Field::make('select', 'advanced_blockjustify', __('Pozycjonowanie wedlug OX bloków'))
                ->set_options(array(
                    'jcs' => 'Początek',
                    'jcc' => 'Środek',
                    'jce' => 'Koniec',
                    'jcsb' => 'Pomiędzy',
                )),

            //Align elements of Columns
            Field::make('select', 'advanced_blockalign', __('Pozycjonowanie wedlug OY bloków'))
                ->set_options(array(
                    '' => 'Początek',
                    'aic' => 'Środek',
                    'aie' => 'Koniec',
                )),
            //Block main options end

            //Block columns options start
            Field::make('complex', 'advanced_col', __('Kolumny'))
                ->add_fields(array(

                    //Choose column size
                    Field::make('select', 'advanced_column', __('Rozmiar bloku'))
                    ->set_options(array(
                        '1' => '1 Kolumna',
                        '2' => '2 Kolumny',
                        '3' => '3 Kolumny',
                        '4' => '4 Kolumny',
                        '5' => '5 Kolumn',
                        '6' => '6 Kolumn',
                        '7' => '7 Kolumn',
                        '8' => '8 Kolumn',
                        '9' => '9 Kolumn',
                        '10' => '10 Kolumn',
                        '11' => '11 Kolumn',
                        '12' => '12 Kolumn',
                    )),

                    //Choose color text
                    Field::make('select', 'advanced_textcolor', __('Kolor textu bloku'))
                        ->set_options(array(
                            'c-gm' => 'Ciemno szary',
                            'c-gs' => 'Srednio szary',
                            'c-gt' => 'Jasno szary',
                            'c-wh' => 'Biały',
                            'c-blck' => 'Czarny',
                        )),

                    //Choose align text
                    Field::make('select', 'advanced_aligntext', __('Pozycjonowanie tekstu'))
                    ->set_options(array(
                        'block--texleft' => 'Lewo',
                        'block--texcen' => 'Centr',
                        'block--texright' => 'Prawo',
                    )),

                    //Choose type of column
                    Field::make('select', 'advanced_choose_text', __('Lista/Text'))
                        ->set_options(array(
                            'list' => 'Lista',
                            'text' => 'Text',
                            'animated_image' => 'Obraz animowany',
                            'image' => 'Obraz',
                            'hidden' => 'Bloki z ukrytym tekstem',
                        )),

                    //If type of column "animated_image" generate options for this images
                    Field::make('select', 'advanced_imgtype', __('Obrazek animowany'))
                        ->set_conditional_logic(array(
                            'relation' => 'OR',
                            array(
                                'field' => 'advanced_choose_text',
                                'value' => 'animated_image',
                                'compare' => '=',
                            ),
                        ))
                        ->set_options(array(
                            'head' => 'Głowa',
                            'brain' => 'Mózg',
                            'team' => 'Ludziki z lampką',
                        )),

                    //If type of column "image" generate image chooser
                    Field::make('image', 'advanced_img', __('Obrazek'))
                        ->set_conditional_logic(array(
                            'relation' => 'OR',
                            array(
                                'field' => 'advanced_choose_text',
                                'value' => 'image',
                                'compare' => '=',
                            ),
                        )),

                    //If type of column "text" generate rich text
                    Field::make('rich_text', 'advanced_content', __('Tekst'))
                        ->set_conditional_logic(array(
                            'relation' => 'OR',
                            array(
                                'field' => 'advanced_choose_text',
                                'value' => 'text',
                                'compare' => '=',
                            ),
                        )),

                    //If type of column "text" generate image under the text
                    Field::make('image', 'advanced_image_under_text', __('Obrazek pod tekstem'))
                        ->set_conditional_logic(array(
                            'relation' => 'OR',
                            array(
                                'field' => 'advanced_choose_text',
                                'value' => 'text',
                                'compare' => '=',
                            ),
                        )),

                    //If type of column "hidden" generate text for this column
                    Field::make('text', 'advanced_hidden_title', __('Tytuł ukrytej kolumny'))
                        ->set_conditional_logic(array(
                            'relation' => 'OR',
                            array(
                                'field' => 'advanced_choose_text',
                                'value' => 'hidden',
                                'compare' => '=',
                            ),
                        )),

                    //If type of column "hidden" generate hidden text for this column
                    Field::make('text', 'advanced_hidden_describe', __('Opis ukrytej kolumny'))
                        ->set_conditional_logic(array(
                            'relation' => 'OR',
                            array(
                                'field' => 'advanced_choose_text',
                                'value' => 'hidden',
                                'compare' => '=',
                            ),
                        )),

                    //If type of column "list" generate complex list blocks
                    Field::make('complex', 'advanced_list', __('Lista'))
                        ->set_conditional_logic(array(
                            'relation' => 'OR',
                            array(
                                'field' => 'advanced_choose_text',
                                'value' => 'list',
                                'compare' => '=',
                            ),
                        ))
                        ->add_fields(array(
                            Field::make('text', 'advanced_list_el', __('Text listy'))
                        )),
                )),
                //Block columns options end
        ))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/part-advanced-block.php',false, false) );
        });

    /**
     * 
     * Block Last Reviews for product
     * 
     */
    Block::make(__('Blok z opiniami'))
        ->add_fields(array(
            Field::make('text', 'reviews_title', __('Tytuł')),
            Field::make('complex', 'reviews', __('Block dla opinii'))
                ->add_fields(array(
                    Field::make('textarea', 'reviews_text', __('Opinia')),
                    Field::make('text', 'reviews_name', __('Autor opinii')),
                    Field::make('image', 'reviews_image', __('Zdjęcie opinii')),
                )),
        ))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/part-review.php',false, false) );
        });


    /**
     *
     * Block Slider for pages
     * Slider for pages in main page
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
     * Slider used in main page
     *
     */
    Block::make(__('Ostatnio dodane posty w slajderze'))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/part-recent-posts.php',false, false) );
        });


    /**
     *
     * Block With all posts
     * This blocks used in archive pages 
     * 
     */
    Block::make(__('Blok ze wszystkimi postami'))
        ->add_fields(array(
            Field::make('select', 'posts', __('Wybierz typ postów'))
                ->set_options($posts),
            Field::make('select', 'posts_position', __('Wybierz rozmiar postów'))
                ->set_options(array(
                    '3' => '4 na linie',
                    '4' => '3 na linie',
                    '6' => '2 na linie',
                )),
        ))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/part-posts.php',false, false) );
        });

    /**
     *
     * Block With most viewed posts
     * Im using everywhere
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

    /**
     *
     * Block Form for "Operacja rzeka"
     *
     */
    Block::make(__('Operacja rzeka'))
        ->add_fields(array(
            Field::make('rich_text', 'operation_text', __('Tekst nad przyciskiem')),
            Field::make('text', 'operation_button', __('Tekst przycisku')),
            Field::make('text', 'operation_form', __('Shortcode formy')),
            Field::make('text', 'operation_text_scroll', __('Tekst dla scrollu')),
        ))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/part-operation-river.php',false, false) );
        });

    /**
     *
     * Block Form for "Operacja rzeka"
     *
     */
    Block::make(__('Galeria obrazków'))
        ->add_fields(array(
            Field::make('complex', 'mini_images', __('Tekst nad przyciskiem'))
                ->add_fields(array(
                    Field::make('image', 'mini_images_image', __('Obrazek')),
                    Field::make('text', 'mini_images_url', __('Link')),
                    Field::make('select', 'mini_images_size', __('Rozmiar po szerokości obrazku'))
                        ->set_options(array(
                            '1' => '1 Kolumna',
                            '2' => '2 Kolumny',
                            '3' => '3 Kolumny',
                            '4' => '4 Kolumny',
                            '5' => '5 Kolumn',
                            '6' => '6 Kolumn',
                            '7' => '7 Kolumn',
                            '8' => '8 Kolumn',
                            '9' => '9 Kolumn',
                            '10' => '10 Kolumn',
                            '11' => '11 Kolumn',
                            '12' => '12 Kolumn',
                        )),
                )),
        ))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/part-mini-images.php',false, false) );
        });

    /**
     * 
     * 
     * Genoraport block
     * 
     */
    Block::make(__('Genoraport'))
        ->add_fields(array(
            Field::make('image', 'genoraport_image', __('Obraz raportu')),
            Field::make('image', 'genoraport_arrow', __('Strzalka')),
            Field::make('file', 'genoraport_document', __('PDF dla genraportu')),
            Field::make('text', 'genoraport_text', __('Text dla pobrania')),
        ))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/part-genoraport.php',false, false) );
        });

}