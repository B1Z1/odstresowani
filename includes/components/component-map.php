<?php 

/**
 * 
 * Map component with getting and setting data to block map
 * 
 */

class CMap{
    private $maps;
    private $mapsData;
    private $termType;

    function __construct($object){
        $this->maps = $object['maps'];
        $this->termType = $object['termType'];
        $this->mapsData = array();
    }

    public function init(){
        foreach ( $this->maps as $key => $map ){
            //Map options
            $mapTitle = $map['map_title'];
            $markerType = $map['markers_which'];
            $markerParameters = array(
                'pulse' => $map['marker_pulse'] ? 'true':'false',
                'isnumeric' => $map['marker_isnumeric'] ? 'true':'false',
                'hasimage' => $map['marker_hasimage'] ? 'true':'false',
                'linedraw' => $map['marker_linedraw'] ? 'true':'false',
                'alert' => $map['marker_alert'] ? 'true':'false',
            ); //All parametres for marker
            $categoryData = new WP_Query(array(
                'post_type' => 'miejsca',
                'tax_query' => array(
                    'taxonomy' => $this->termType,
                    'field'    => 'slug',
                    'terms' => $map['markers_category']
                )
            ));
            $markers = $this->getCategoryData($categoryData);
            array_push($this->mapsData, array(
                'id' => $key + 1,
                'title' => $mapTitle,
                'type' => $markerType,
                'markerParametres' => $markerParameters,
                'markers' => $markers
            ));
        }      
        return $this->mapsData;
    }

    //Thanks this funciton, we can get all information about post and push to array
    private function getCategoryData($object){
        $markers = array();
        $data = $object;

        if ( $data->have_posts() ){
            while ( $data->have_posts() ){
                $data->the_post();
                $markerTitle = get_the_title();
                $markerDescription = get_the_content() ?
                                     wp_trim_words(get_the_content(), 25, '...') :
                                     null;
                $markerImage = wp_get_attachment_image_url(get_the_ID(), 'full') ?
                               wp_get_attachment_image_url(get_the_ID(), 'full') :
                               null;
                $markerLink = carbon_get_post_meta(get_the_ID(), 'link') ? 
                             carbon_get_post_meta(get_the_ID(), 'link') :
                             get_the_permalink();
                $markerAdress = carbon_get_post_meta(get_the_ID(), 'adress') ? 
                                carbon_get_post_meta(get_the_ID(), 'adress') :
                                null;
                $markerFullAdress = carbon_get_post_meta(get_the_ID(), 'full_adress') ?
                                    carbon_get_post_meta(get_the_ID(), 'full_adress'):
                                    null;
                $markerPhone = carbon_get_post_meta(get_the_ID(), 'phone') ?
                               carbon_get_post_meta(get_the_ID(), 'phone') :
                               null;
                $markerSygnet = carbon_get_post_meta(get_the_ID(), 'sygnet') ?
                                wp_get_attachment_image_url(carbon_get_post_meta(get_the_ID(), 'sygnet'), 'full') :
                                null;

                array_push($markers, array(
                    'title' => $markerTitle,
                    'description' => $markerDescription,
                    'image' => $markerImage,
                    'link' => $markerLink,
                    'adress' => $markerAdress,
                    'fullAdress' => $markerFullAdress,
                    'phone' => $markerPhone,
                    'sygnet' => $markerSygnet
                ));
            }
        }
        return $markers;
    }

}
