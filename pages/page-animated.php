<?php
/**
 *
 * Template name: Szablon z animowanym logiem
 *
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package OdstresowaniPortal
 */

get_header();

?>

    <div class="wrapper">

        <!-- ------------------ -->
        <!-- Main section start -->
        <!-- ------------------ -->

        <main class="main mb64">

            <section class="page">
                <div class="page__title mb160 pt160">
                    <div class="container container-960">
                        <img src="<?php echo get_the_post_thumbnail_url(get_the_ID(),'full'); ?>" alt="Page sygnet" class="post_sygnet">
                    </div>
                </div>

                <div class="container container-960 header__triger">
                    <?php if ( have_posts() ):  ?>

                        <?php while (have_posts()): the_post(); ?>

                            <!--  Breadcrumbs start  --> 
                            <?php yoast_breadcrumb( '<div id="breadcrumbs" class="breadcrumbs reset-top f-vb c-gs mb64">','</div>' ); ?>
                            <!--  Breadcrumbs end  --> 
                            <?php the_content(); ?>

                        <?php endwhile; ?>

                    <?php endif; ?>
                </div>
            </section>

        </main>

        <!-- ------------------ -->
        <!--  Main section end  -->
        <!-- ------------------ -->

<?php
get_footer();
