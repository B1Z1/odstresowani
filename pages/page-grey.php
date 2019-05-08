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

    <div class="wrapper">

        <!-- ------------------ -->
        <!-- Main section start -->
        <!-- ------------------ -->

        <main class="main mb64">
            <section class="page">
                <div class="page__title mb160 pt128 pb160 bck-gm">
                    <div class="container container-960">
                        <h3 class="reset f-san"><?php the_title(); ?></h3>
                        <img src="<?php echo wp_get_attachment_image_src($sygnet,'full')[0]; ?>" alt="Page sygnet" class="post__sygnet">
                    </div>
                </div>
                <div class="page__content">
                    <div class="container container-960 header__triger">

                        <?php if ( have_posts() ):  ?>

                            <?php while (have_posts()): the_post(); ?>

                                <!--  Breadcrumbs start  --> 
                                <?php yoast_breadcrumb( '<div id="breadcrumbs" class="breadcrumbs reset-top f-vb c-gs mb64 p">','</div>' ); ?>
                                <!--  Breadcrumbs end  --> 
                                
                                <?php the_content(); ?>
                                <?php get_template_part('template-parts/content', 'share'); ?>

                            <?php endwhile; ?>

                        <?php endif; ?>

                    </div>
                </div>
            </section>

            <div class="container">
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
