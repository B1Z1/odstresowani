<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package OdstresowaniPortal
 */

get_header();
$cat = get_queried_object();
$cat_image = wp_get_attachment_image_src(carbon_get_term_meta($cat->term_id, 'category_image'), 'full')[0];
?>

    <div class="wrapper">

    <!-- ------------------ -->
    <!-- Main section start -->
    <!-- ------------------ -->

    <main class="main">

        <!-- Hero banner start -->
        <section class="hero hero_center c-wh mb64" <?php if ( $cat_image ): ?>style="background-image: url( <?php echo $cat_image; ?> )"<?php endif; ?>>
            <div class="filter-back bck-blck"></div>
            <div class="hero_content">
                <div class="container">
                    <h3 class="reset-top f-san"><?php echo single_cat_title(); ?></h3>
                    <?php if ( category_description() ): ?>
                        <h1 class="reset"><?php echo wp_strip_all_tags(category_description()); ?></h1>
                    <?php endif; ?>
                </div>
            </div>
        </section>
        <!-- Hero banner end -->

        <div class="pt32 container header__triger">
            <div class="d-flex fwrap row">
                <?php if ( have_posts() ):  ?>
                    <?php while (have_posts()): the_post(); ?>
                        <?php
                        /**
                         *
                         * Post type action
                         * -> Block
                         *
                         */
                        $args['url'] = get_permalink();
                        $args['title'] = get_the_title();
                        $args['describe'] = wp_trim_words(get_the_content(), 20);
                        $args['image'] = get_the_post_thumbnail(get_the_ID(), 'full');
                        $args['date'] = get_the_date('j M Y', get_the_ID());
                        $args['category'] = post_get_cat();

                        if ( $cat->taxonomy == 'trudne-sprawy-kategorie' ){ ?>
                            <div class="mbl-col-12 mb64">
                                <?php do_action('post_card_list', $args); ?>
                            </div>
                        <?php }
                        else{ ?>
                            <div class="ntb-col-6 mb64">
                                <?php do_action('post_card_block', $args); ?>
                            </div>
                        <?php }
                        ?>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>

            <?php
            /**
             *
             * Pagination
             *
             */
            $args_p = array(
                'show_all'     => false,
                'end_size'     => 1,
                'mid_size'     => 1,
                'prev_next'    => true,
                'prev_text'    => __('« Previous'),
                'next_text'    => __('Next »'),
            );
            the_posts_pagination();
            ?>

        </div>

    </main>
    <!-- ------------------ -->
    <!--  Main section end  -->
    <!-- ------------------ -->

<?php
get_footer();
