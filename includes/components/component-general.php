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

        foreach ($types as $key => $type) {
            if ( $array[$type] !== 'none' )
                $string .= $key === count($types) - 1 ? "{$array[$type]}":"{$array[$type]} ";
        }

        return $string;
    }
}
