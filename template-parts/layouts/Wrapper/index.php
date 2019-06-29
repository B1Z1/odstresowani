<?php 

add_action('odstresowani_layout_wrapper_start', 'odstresowani_layout_wrapper_start', 10);
if ( !function_exists('odstresowani_layout_wrapper_start') ){
    function odstresowani_layout_wrapper_start(){ ?>
        <div class="l-Wrapper">
    <?php }
}

add_action('odstresowani_layout_wrapper_end', 'odstresowani_layout_wrapper_end', 10);
if ( !function_exists('odstresowani_layout_wrapper_end') ){
    function odstresowani_layout_wrapper_end(){ ?>
        </div>
    <?php }
}