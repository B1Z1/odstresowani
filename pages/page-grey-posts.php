<?php
/**
 *
 * Template name: Szablon z szarym tłem dla postow
 *
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package OdstresowaniPortal
 */

get_header();
$categories = get_terms([
    'taxonomy' => 'category',
    'hide_empty' => true
]);
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
                <!-- Mind Component Start -->
                <div class="container container-960 header__triger">
                    <!--  Breadcrumbs start  --> 
                    <?php yoast_breadcrumb( '<div id="breadcrumbs" class="breadcrumbs reset-top f-vb c-gs mb64">','</div>' ); ?>
                    <!--  Breadcrumbs end  --> 
                    <div class="page__mind">
                        <?php foreach ( $categories as $category ):
                            $cat_id = pll_get_term($category->term_id);
                            $title = $category->name;
                            $url = get_term_link($cat_id);
                            $color = carbon_get_term_meta($cat_id, 'category_color');
                            $top = carbon_get_term_meta($cat_id, 'category_top') . '%';
                            $left = carbon_get_term_meta($cat_id, 'category_left') . '%';

                            $font_s = 1 + ( $category->count / 80 ) . 'rem';

                            ?>
                            <style>
                                .mind_<?php echo $cat_id; ?>{
                                    top: <?php echo $top; ?>;
                                    left: <?php echo $left; ?>;
                                }
                                .mind__cat_<?php echo $cat_id; ?>{
                                    color: <?php echo $color; ?>;
                                    font-size: <?php echo $font_s; ?>;
                                }
                            </style>
                            <div class="mind mind_<?php echo $cat_id; ?>">
                                <a href="<?php echo $url; ?>" class="mind__cat mind__cat_<?php echo $cat_id; ?> reset-link f-vb"><?php echo $title; ?></a>
                                <ul class="mind__posts">
                                    <?php
                                    wp_reset_postdata();
                                    $args_p = array(
                                        'cat' => $cat_id,
                                        'posts_per_page' => 4,
                                        'numberposts' => 4,
                                        'orderby' => [
                                                'post_views' => 'ASC', 
                                                'date' => 'ASC'
                                            ]
                                    );
                                    $recent_posts = new WP_Query($args_p);
                                    if ( $recent_posts->have_posts() ):
                                        while ( $recent_posts->have_posts() ): $recent_posts->the_post(); ?>

                                            <li><a href="<?php the_permalink(); ?>" class="reset-link"><?php echo wp_trim_words(get_the_title(), 2, '...'); ?></a></li>

                                        <?php endwhile; ?>
                                    <?php endif; wp_reset_postdata(); ?>
                                </ul>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <!-- Mind Component End -->
                <!-- Main Content Start -->
                <div class="page__content">
                    <div class="container container-posts header__triger">
                        
                        <?php if ( have_posts() ):  ?>

                            <?php while (have_posts()): the_post(); ?>
                                
                                <?php the_content(); ?>

                            <?php endwhile; ?>

                        <?php endif; ?>

                    </div>
                </div>
                <!-- Main Content End -->
            </section>
        </main>

        <!-- ------------------ -->
        <!--  Main section end  -->
        <!-- ------------------ -->

<?php
get_footer();
