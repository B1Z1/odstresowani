<?php


add_action( 'after_setup_theme', 'crb_load' );
function crb_load() {
    require_once( get_template_directory() . '/plugins/carbon-fields/vendor/autoload.php' );
    \Carbon_Fields\Carbon_Fields::boot();
}

//Public class for getting Posts/Pages/Posts py type
class GetPosts{
    function __construct(){}
        
    //Get post types
    public function getPostsTypes(){
        return array(
            '' => 'Nie',
            'post' => 'Artykuły',
            'strefa-wiedzy' => 'Strefa wiedzy',
            'news' => 'News'
        );
    }

    //Get taxonomies
    public function getTaxTypes(){
        return array(
            '' => 'Nie',
            'category' => 'Artykuły',
            'strefa-wiedzy-kategoria' => 'Strefa wiedzy',
            'news-kategoria' => 'News'
        );
    }

    //Query by type
    public function getByPostType($type){
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
    public function getTaxonomiesList($name){
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
/**
 *
 * Get ids of page for footer list
 *
 */
$getPosts = new GetPosts;