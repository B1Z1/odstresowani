<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package OdstresowaniPortal
 */

get_header();
?>

    <div class="l-Wrapper">

    <!-- ------------------ -->
    <!-- Main section start -->
    <!-- ------------------ -->

    <main class="main mb64">
        <article class="post">

            <?php if ( have_posts() ):  ?>

                <?php while (have_posts()): the_post();
                    $cat_image_id = post_category_sygnet();
                    $cat_sygnet = wp_get_attachment_image_src($cat_image_id, 'full')[0];
                    ?>

                    <div class="post__title mb160 pt128 pb160 bck-gm">
                        <div class="l-Container">
                            <h3 class="reset f-san"><?php the_title(); ?></h3>
                            <?php if ( $cat_sygnet ): ?>
                                <img src="<?php echo $cat_sygnet; ?>" alt="Category sygnet" class="post__sygnet">
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php 
                        /**
                         * Yoast Breadcrumbs Module 
                         */
                        get_template_part('template-parts/modules/Breadcrumbs/index');
                    ?>
                    <div class="post__content header__triger">
                        <div class="l-Container l-Container--960">
                            <?php the_content(); ?>
                            <?php get_template_part('template-parts/content', 'share'); ?>
                        </div> 
                    </div>
                    <div class="post__avatar mt64 mb64 mauto">
                        <img src="<?php echo get_avatar_url(get_the_author_meta('id')); ?>" alt="Avatar">
                    </div>

                <?php endwhile; ?>

            <?php endif; ?>

        </article>
        <div class="l-Container">
        <?php
            /**
             *
             *  Most viewed posts
             *
             */
            get_template_part('template-parts/content', 'most-viewed-2');
        ?>
        </div>
    </main>

    <!-- ------------------ -->
    <!--  Main section end  -->
    <!-- ------------------ -->

<?php
get_footer();
