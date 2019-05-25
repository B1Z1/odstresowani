<?php
/**
 * The template for displaying all single "techniki" posts
 *
 */

get_header();
?>

    <div class="wrapper">

    <!-- ------------------ -->
    <!-- Main section start -->
    <!-- ------------------ -->

    <main class="main mb64">
        <article class="post">

            <?php if ( have_posts() ):  ?>

                <?php while (have_posts()): the_post();
                    $cat_sygnet = wp_get_attachment_image_src(carbon_get_post_meta(get_the_ID(), 'sygnet'), 'full')[0];
                    ?>

                    <div class="post__title mb160 pt128 pb160 bck-gm">
                        <div class="c-container">
                            <h3 class="reset f-san"><?php the_title(); ?></h3>
                            <?php if ( $cat_sygnet ): ?>
                                <img src="<?php echo $cat_sygnet; ?>" alt="Category sygnet" class="post__sygnet">
                            <?php endif; ?>
                        </div>
                    </div>
                    <div class="c-container c-container--960 post__content header__triger">
                        <!--  Breadcrumbs start  --> 
                        <?php yoast_breadcrumb( '<div id="breadcrumbs" class="breadcrumbs reset-top f-vb c-gs mb64">','</div>' ); ?>
                        <!--  Breadcrumbs end  --> 
                        <?php the_content(); ?>
                        <?php get_template_part('template-parts/content', 'share'); ?>
                    </div>
                    <div class="post__avatar mt64 mb64 mauto">
                        <img src="<?php echo get_avatar_url(get_the_author_meta('id')); ?>" alt="Avatar">
                    </div>

                <?php endwhile; ?>

            <?php endif; ?>

        </article>
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
