<?php 
class OdsMap{
    function getData($query){
        $tax = array();
        wp_reset_postdata();
        $posts = new WP_Query(array(
            'post_type' => $query,
        ));
    
        if ( $posts->have_posts() ){
            while ( $posts->have_posts() ){
                $posts->the_post();
                array_push($tax, array(
                    'type' => $query,
                    'title' => get_the_title(),
                    'description' => get_the_content(),
                    'image' => get_the_post_thumbnail_url(get_the_ID(), 'full'),
                    'adress' => carbon_get_post_meta(get_the_ID(), 'adress'),
                ));
            }
        }
        wp_reset_postdata();
        return $tax;
    }

    function getMerged($elements){
        $merged = array();
        foreach ( $elements as $element ){
            $merged = array_merge($merged, $element);
        }
        return $merged;
    }

}