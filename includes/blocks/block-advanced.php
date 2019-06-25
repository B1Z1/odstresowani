<?php
use Carbon_Fields\Field;
use Carbon_Fields\Block;

/**
 *
 * Block advanced
 * Im use this for "Panel stress"
 * And in main page
 *
 */
add_action( 'carbon_fields_register_fields', 'crb_register_block_advanced', 10 );
if ( !function_exists('crb_register_block_advanced') ){
    function crb_register_block_advanced(){
        Block::make(__('Blok zaawansowany'))
            ->add_fields(FieldsGlobal::getGaps())
            ->add_fields(array(
                //Block main options start
                //Header trigger
                Field::make('checkbox', 'advanced_header', __('Czy ma pojawiać się nagłówek strony'))
                    ->set_option_value(true),
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
                include(locate_template('template-parts/blocks/block-advanced.php',false, false) );
            });
    }
}