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
        <meta name="google-site-verification" content="WFfJTDxTZhwxKydCHAiYvlCrmvloY4iQjCfaVy1L35c" />
        <!-- FontAwesome include -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

        <!-- Facebook Meta properties start -->
        <?php if ( is_single() ): if( have_posts() ): while ( have_posts() ): the_post(); ?>
            <meta property="og:url"           content="<?php the_permalink(); ?>" />
            <meta property="og:type"          content="article" />
            <meta property="og:title"         content="<?php the_title(); ?>" />
            <meta property="og:description"   content="<?php echo wp_strip_all_tags(wp_trim_words(get_the_content(), 32)); ?>" />
            <meta property="og:image"         content="<?php echo get_the_post_thumbnail_url(); ?>" />
        <?php endwhile; endif; endif; ?>
        <!-- Facebook Meta properties end -->

		<!-- Google Tag Manager -->
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-N4MN495');</script>
		<!-- End Google Tag Manager -->
		
        <?php wp_head(); ?>
    </head>

    <body <?php body_class(); ?>>
		
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4MN495"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->
		
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