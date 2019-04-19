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
        );
    }
    //Get taxonomies
    public function getTaxTypes(){
        return array(
            '' => 'Nie',
            'category' => 'Artykuły',
            'strefa-wiedzy-kategorie' => 'Strefa wiedzy',
        );
    }
    //Query by type
    public function getByType($type){
        $query = new WP_Query();
        $pages = $query->query( array(
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
}
/**
 *
 * Get ids of page for footer list
 *
 */
$get = new GetPosts;