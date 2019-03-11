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
function ods_get_pages(){
    /**
     *
     * Query all pages
     *
     */
    $pages = new WP_Query();
    $pages = $pages->query( array(
        'post_type' => 'page',
    ) );
    $pages_url_object = array();

    foreach ( $pages as $page ){
        $pages_url_object[$page->ID] = $page->post_title;

    }

    return $pages_url_object;
}

add_action( 'carbon_fields_register_fields', 'crb_attach_theme_options' );
function crb_attach_theme_options() {
    $page_ids = ods_get_pages();
    /**
     *
     * Category container
     *
     */
    Container::make( 'term_meta', __( 'Category Properties' ) )
        ->where( 'term_taxonomy', '=', 'category' )
        ->add_fields( array(
            Field::make( 'image', 'category_image', __( 'Thumbnail' ) ),
        ) );
    /**
     *
     * Theme options container
     *
     */
    Container::make( 'theme_options', __( 'Theme Options' ) )
        ->add_tab( 'Opcje generalne', array(
            Field::make( 'image', 'general_logo_front', 'Strona przodowa logotypu' ),
            Field::make( 'image', 'general_logo_back', 'Strona tylna logotypu' ),
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
                ))
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
    Block::make(__('Banner'))
        ->add_fields(array(
            Field::make('image', 'hero_image', __('Zdjęcie na tle')),
            Field::make('text', 'hero_heading', __('Tytuł'))
                ->set_attribute('maxLength', '60'),
            Field::make('text', 'hero_content', __('Mały opis'))
                ->set_attribute('maxLength', '140'),
            Field::make('text', 'hero_url', __('Link czytaj więcej')),
        ))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/hero-part.php',false, false) );
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
            include(locate_template('template-parts/block-parts/advanced-block-part.php',false, false) );
        });
    /**
     *
     * Block Slider for pages
     *
     */
    Block::make(__('Blok Slider dla stron'))
        ->add_fields(array(
            Field::make('complex', 'page_slide', __('Slajd dla strony'))
                ->add_fields(array(
                    Field::make('image', 'page_slide_image', __('Tło slajdu')),
                    Field::make('select', 'page_slide_page', __('Strona slajdu'))
                        ->set_options( $page_ids ),
                    Field::make('textarea', 'page_slide_content', __('Krótki opis tego slajdu'))
                        ->set_attribute('maxLength', '140'),
                ))
        ))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/page-slider-part.php',false, false) );
        });
    /**
     *
     * Block Slider recent posts
     *
     */
    Block::make(__('Ostatnio dodane posty'))
        ->set_render_callback(function ($block) {
            include(locate_template('template-parts/block-parts/recent-posts-part.php',false, false) );
        });
}