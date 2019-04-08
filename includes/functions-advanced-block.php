<?php 

class AdvancedBlock{
    function __construct(){}
    
    //Generate String
    public function generate_string($array){
        $string = '';

        foreach ( $array as $key => $class ){
            $string .= $class;
            $string .= $class != '' ? ' ':'';

            if ( $key == ( count($array) - 1 ) ){
                $string = substr($string, 0, -1);
            }
        }

        return $string;
    }

    //Generate title for block
    public function generate_title($args){
        return $args['text'] ? "<h{$args['size']} class='block__title reset-bottom {$args['align']}'>{$args['text']}</h{$args['size']}>" : "";
    }

}


//Title classes generate
