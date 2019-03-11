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

    <!-- Mobile menu start -->
    <nav class="header_mobilenav c-blck bck-wh p32">
        <div class="header_mobilenav__close">
            <?php $close_button = carbon_get_theme_option('general_close_button'); ?>
            <img src="<?php echo wp_get_attachment_image_src($close_button, 'full')[0]; ?>" alt="Close button">
        </div>
        <?php
        $args = array(
           'term' => 'header_mb',
           'depth' => 1,
           'ul_classes' => 'header_mobilenav__list reset_list',
           'link_classes' => 'reset_link',
        );
        echo odstresowani_menu($args);
        ?>
    </nav>
    <!-- Mobile menu end -->

    <header class="header flex-kit jcsb mr16 ml16 pt32 pr24 pb16 pl24 c-wh">
        <figure class="header_logo f-vb">
            <a href="<?php echo get_home_url(); ?>" class="flex-kit reset_link">
                <div class="header_sygnets">
                    <?php
                        $logo_front = carbon_get_theme_option('general_logo_front');
                        $logo_back = carbon_get_theme_option('general_logo_back');
                    ?>
                    <?php if ( $logo_front ): ?>
                        <img class="header_sygnet header_sygnet__white" src="<?php echo wp_get_attachment_image_src($logo_front, 'full')[0]; ?>" alt="Sygnet">
                    <?php endif; ?>
                    <?php if ( $logo_back ): ?>
                        <img class="header_sygnet header_sygnet__black" src="<?php echo wp_get_attachment_image_src($logo_back, 'full')[0]; ?>" alt="Sygnet">
                    <?php endif; ?>
                </div>
                <h4 class="reset"><?php echo get_bloginfo('name'); ?></h4>
            </a>
        </figure>
        <div class="header_menu">
            <div class="container">
                <nav class="row">
                    <?php
                    $args = array(
                        'term' => 'header',
                        'depth' => 2,
                        'ul_classes' => 'header_list reset_list flex-kit jcc',
                        'li_classes' => 'mr16 ml16',
                        'link_classes' => 'header_menu__hover reset_link',
                        'block_classes_sub' => 'header_submenu c-blck bck-gs',
                        'ul_classes_sub' => 'header_submenu__list header_list reset_list pt32 pb32 flex-kit',
                    );
                    echo odstresowani_menu($args);
                    ?>
                </nav>
            </div>
        </div>
        <div class="clearfix">
            <div class="header_hamburger ml32 fr">
                <i class="fas fa-bars"></i>
            </div>
            <nav class="header_extramenu f-vb fr">
                <?php
                $args = array(
                    'term' => 'header_extra',
                    'depth' => 1,
                    'ul_classes' => 'header_list reset_list flex-kit',
                    'li_classes' => 'mr16 ml16',
                    'link_classes' => 'reset_link',
                );
                echo odstresowani_menu($args);
                ?>
            </nav>
        </div>
    </header>

    <!-- ------------ -->
    <!-- Header start -->
    <!-- ------------ -->