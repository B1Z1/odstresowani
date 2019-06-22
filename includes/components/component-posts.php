<?php
//Public class for getting Posts/Pages/Posts py type
class GetPosts{        
    //Get post types
    static function getPostsTypes(){
        return array(
            '' => 'Nie',
            'post' => 'Artykuły',
            'strefa-wiedzy' => 'Strefa wiedzy',
            'news' => 'News'
        );
    }

    //Get taxonomies
    static function getTaxTypes(){
        return array(
            '' => 'Nie',
            'category' => 'Artykuły',
            'strefa-wiedzy-kategoria' => 'Strefa wiedzy',
            'news-kategoria' => 'News'
        );
    }

    //Query by type
    static function getByPostType($type){
        $query = new WP_Query();
        $pages = $query->query( array(
            'post_type' => $type,
            'posts_per_page' => -1,
            'lang' => 'pl',
        ) );
        $names = array();
        foreach ( $pages as $page ){
            $names[$page->post_title] = $page->post_title;
        }
        wp_reset_query();
        return $names;
    }

    //Query by taxonomy
    static function getTaxonomiesList($name){
        $terms = get_terms([
            'taxonomy' => $name,
            'hide_empty' => false
        ]);
        $names = array();
        $names['nic'] = 'Nic';
        foreach ( $terms as $term ){
            $names[$term->slug] = $term->name;
        }
        wp_reset_query();
        return $names;
    }

}