<?php 

/**
 * 
 * Button price shortcode
 * 
 */
function buy_button( $atts ){
    $a = shortcode_atts( array(
		'price' => '',
        'link' => '',
        'text' => '',
	), $atts );
    return "<div class='block d-flex aic jcc mt16 mb16'>
                <span class='c-wh'><a href='{$a['link']}' class='d-ib reset-link button--br4 pt8 pr32 pb8 pl32 bck-gradient--blue'>{$a['text']}</a></span>
                <h2 class='reset-top reset-bottom d-ib pl32 f-vb'>{$a['price']} zł</h2>
            </div>";
}
add_shortcode( 'Przycisk_zakupu', 'buy_button' );