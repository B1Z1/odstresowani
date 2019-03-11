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

    <div class="wrapper">
        <?php if ( have_posts() ):  ?>
            <?php while (have_posts()): the_post();
                $category = get_the_category();
                $cat_image_id = carbon_get_term_meta($category[0]->term_id, 'category_image');
            ?>

        <!-- ------------------ -->
        <!-- Main section start -->
        <!-- ------------------ -->

        <main class="header__triger main mb64">
            <div class="post">
                <div class="post_title mt32 mb160 pt128 pb160 bck-gm">
                    <div class="container">
                        <h3 class="reset f-san"><?php the_title(); ?></h3>
                        <img src="<?php echo wp_get_attachment_image_src($cat_image_id, 'full')[0]; ?>" alt="Category sygnet" class="post_sygnet">
                    </div>
                </div>
                <div class="container container_960">
                    <?php the_content(); ?>
                </div>
            </div>
        </main>

        <!-- ------------------ -->
        <!--  Main section end  -->
        <!-- ------------------ -->

            <?php endwhile; ?>
        <?php endif; ?>
<?php
get_footer();
