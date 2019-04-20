<?php 
class OdsMap{
    function getData($query){
        $tax = array();
        $postQuerys = new WP_Query(array(
            'post_type' => $query,
        ));
    
        if ( $postQuerys->have_posts() ){
            while ( $postQuerys->have_posts() ){
                $postQuerys->the_post();
                $id = get_the_ID();
                $title = get_the_title();
                $description = $query == 'techniki' ? wp_trim_words(get_the_content(), 20, '...'):get_the_content();
                $image = get_the_post_thumbnail_url($id, 'full');
                $adress = carbon_get_post_meta($id, 'adress');
                $link = !empty(carbon_get_post_meta($id, 'link')) ? carbon_get_post_meta($id, 'link'):get_post_permalink($id);
                
                array_push($tax, array(
                    'type' => $query,
                    'title' => $title,
                    'description' => $description,
                    'image' => $image,
                    'adress' => $adress,
                    'link' => $link,
                ));
            }
        }
        wp_reset_postdata();
        return $tax;
    }
}