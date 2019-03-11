<?php
/**
 * Enqueue scripts and styles.
 */
function odstresowani_scripts() {
    /**
     *
     * Styles
     *
     */
    wp_enqueue_style('odstresowani-main-style', get_template_directory_uri() . '/assets/css/style.min.css');
    wp_enqueue_style('odstresowani-swiper-style', get_template_directory_uri() . '/assets/lib/Swiper/css/swiper.min.css');

    /**
     *
     * Scripts
     *
     */
    wp_enqueue_script( 'odstresowani-main-script',get_template_directory_uri() . '/assets/js/updated/main.js' );
    wp_enqueue_script( 'odstresowani-swiper-script',get_template_directory_uri() . '/assets/lib/Swiper/js/swiper.min.js' );
}
add_action( 'wp_enqueue_scripts', 'odstresowani_scripts' );