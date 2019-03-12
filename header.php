<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package OdstresowaniPortal
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="profile" href="https://gmpg.org/xfn/11">
        <!-- FontAwesome include -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        <?php wp_head(); ?>
    </head>

    <body <?php body_class(); ?>>


    <!-- ------------ -->
    <!-- Header start -->
    <!-- ------------ -->

    <?php

    /**
     *
     * Mobile nav menu hook
     * @nav_mobile - 10
     *
     */
    do_action('odstresowani_header_mobile_nav');

    /**
     *
     * Header wrapper start
     * @header_wrapper_start - 10
     *
     */
    do_action('odstresowani_header_wrapper_start');

    /**
     *
     * Header inside hook
     * @header_sygnet - 10
     * @header_menu - 20
     * @header_extra_menu - 30
     *
     */
    do_action('odstresowani_header_inside');

    /**
     *
     * Header wrapper end
     * @header_wrapper_end - 10
     *
     */
    do_action('odstresowani_header_wrapper_end');
    ?>

    <!-- ------------ -->
    <!-- Header start -->
    <!-- ------------ -->