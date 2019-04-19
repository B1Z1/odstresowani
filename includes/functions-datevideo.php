<?php 
function videoByDate($videos){
    $current_day = intval(date('z')) + 1;  //Current day by year
    $current_video = $current_day % count($videos); //Get video from array by current day
    $video = wp_get_attachment_url($videos[$current_video]['hero_video_mp4']); //Get Url of video
    return $video;
}
?>