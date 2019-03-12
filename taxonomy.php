<?php
/**
 * The template for displaying Category pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
get_header(); ?>

    <section id="primary" class="content-area">
        <div id="content" class="site-content" role="main">

            <?php if ( have_posts() ) : ?>

                <header class="archive-header">
                    <h1 class="archive-title"><?php printf( __( 'Category Archives: %s', 'twentyfourteen' ), single_cat_title( '', false ) ); ?></h1>

                    <?php
                    // Show an optional term description.
                    $term_description = term_description();
                    if ( ! empty( $term_description ) ) :
                        printf( '<div class="taxonomy-description">%s</div>', $term_description );
                    endif;
                    ?>
                </header><!-- .archive-header -->

                <?php
                // Start the Loop.
                while ( have_posts() ) :
                    the_post();
                    /*
                    * Include the post format-specific template for the content. If you want to
                    * use this in a child theme, then include a file called content-___.php
                    * (where ___ is the post format) and that will be used instead.
                    */
                    the_content();
                endwhile;
            endif;
            ?>
        </div><!-- #content -->
    </section><!-- #primary -->

<?php
get_footer();