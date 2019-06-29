<?php 

add_action('odstresowani_layout_container_start', 'odstresowani_layout_container_start', 10);
if ( !function_exists('odstresowani_layout_container_start') ){
    function odstresowani_layout_container_start(){ ?>
        <div class="l-Container">
    <?php }
}

add_action('odstresowani_layout_container_end', 'odstresowani_layout_container_end', 10);
if ( !function_exists('odstresowani_layout_container_end') ){
    function odstresowani_layout_container_end(){ ?>
        </div>
    <?php }
}