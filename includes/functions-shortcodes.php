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
    return "<div class='block d-flex aic mt16 mb16'>
                <span class='c-wh d-ib'>
                    <a href='{$a['link']}' class='c-Link c-Button__normal'>{$a['text']}</a>
                </span>
                <h2 class='reset-top reset-bottom d-ib pl32 f-vb'>{$a['price']} zł</h2>
            </div>";
}
add_shortcode( 'Przycisk_zakupu', 'buy_button' );

function buttons( $atts ){
    $words = [
        'read_more' => pll__('Czytaj więcej'),
        'contact_wu' => pll__('Kontakt z nami')
    ];
    $a = shortcode_atts( array(
        'button-link' => '',
        'link' => ''
    ), $atts);
    return "<div class='c-text--center mt64 mb64'>
                <span class='mr16 c-wh f-vb d-ib'>
                    <a href='{$a['button-link']}' class='c-Link c-Button__operative c-Button--br4'>{$words['contact_wu']}</a>
                </span>
                albo
                <span class='ml16 c-op f-vb c-text--ttu'>
                    <a href='{$a['link']}' class='c-Link c-Link--tdu'>{$words['read_more']}</a>
                </span>
            </div>";
}
add_shortcode( 'Linki', 'buttons' );
?>