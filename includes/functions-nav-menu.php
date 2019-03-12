<?php
// This theme uses wp_nav_menu() in one location.
register_nav_menus( array(
    'header' => esc_html__( 'Główne menu', 'odstresowani' ),
    'header_extra' => esc_html__( 'Główne menu prawa część', 'odstresowani' ),
    'header_mb' => esc_html__( 'Główne menu mobilne', 'odstresowani' ),
) );
