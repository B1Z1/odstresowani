<?php

class GeneralOptions
{

    //Getting all keywords from meta "seo_kreywords"
    function getKeywords($keywords)
    {
        $new_keywords = '';
        foreach ($keywords as $key => $word) {
            if ($word['word']) {
                $new_keywords .= $key === 0 ? '' : ' ';
                $new_keywords .= $word['word'];
            }
        }
        return $new_keywords;
    }

    static public function getAllGapsFromArray($array)
    {
        $types = array('mt', 'mb', 'pt', 'pb');
        $string = '';

        foreach ($types as $type) {
            if ( $array[$type] && $array[$type] !== 'none' )
                $string .= "{$array[$type]} ";
        }
        $string = substr($string, 0, -1);
        return $string;
    }

    static public function post_get_cat(){
        $post_type = get_post_type();
        $post_term = '';
        $pll_id = pll_get_term(get_the_ID());

        switch ($post_type){
            //If ever have added new post type, add this here
            case 'news': 
                $post_term = $post_type . '-kategoria';
            break;
            case 'strefa-wiedzy': 
                $post_term = $post_type . '-kategoria';
            break;
        }

        if ( $post_term != '' ){
            $post_cat = get_the_terms($pll_id, $post_term);
        }
        else {
            $post_cat = get_the_terms($pll_id, 'category');
        }
        return $post_cat;
    }

    static public function post_category_sygnet(){
        $post_cat = post_get_cat();

        if ( $post_cat == 'post' ){
            $cat_image_id = carbon_get_term_meta($post_cat[0], 'category_sygnet');
        }
        else{
            $cat_image_id = carbon_get_term_meta($post_cat[0]->term_id, 'category_sygnet');
        }

        return $cat_image_id;
    }
}