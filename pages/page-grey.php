<?php
/**
 *
 * Template name: Szablon z szarym tłem
 *
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package OdstresowaniPortal
 */

get_header();

$sygnet = carbon_get_post_meta(get_the_ID(), 'page_sygnet');
?>

    <div class="c-wrapper">

        <!-- ------------------ -->
        <!-- Main section start -->
        <!-- ------------------ -->

        <main class="main mb64">
            <section class="page">
                <div class="page__title mb160 pt128 pb160 bck-gm">
                    <div class="c-container c-container--960">
                        <h3 class="reset f-san"><?php the_title(); ?></h3>
                        <img src="<?php echo wp_get_attachment_image_src($sygnet,'full')[0]; ?>" alt="Page sygnet" class="post__sygnet">
                    </div>
                </div>
                <?php 
                    /**
                     * Yoast Breadcrumbs Module 
                     */
                    get_template_part('template-parts/modules/Breadcrumbs/index');
                ?>
                <div class="page__content">
                    <div class="c-container c-container--960 header__triger">

                        <?php if ( have_posts() ):  ?>

                            <?php while (have_posts()): the_post(); ?>
                                
                                <?php the_content(); ?>
                                <?php get_template_part('template-parts/content', 'share'); ?>

                            <?php endwhile; ?>

                        <?php endif; ?>

                    </div>
                </div>
            </section>

            <div class="c-container">
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
