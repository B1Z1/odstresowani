<?php
/**
 *
 * Template name: Szablon z "Mind" kategoriami
 *
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package OdstresowaniPortal
 */

get_header();

$categories = get_terms('strefa-wiedzy-kategorie', array(
    'hide_empty' => false,
));
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
                                $args_p = array(
                                    'post_type' => 'strefa-wiedzy',
                                    'strefa-wiedzy-kategorie' => $category->slug,
                                    'posts_per_page' => 4,
                                    'numberposts' => 4,
                                    'orderby' => 'post_views',
                                );
                                $posts = new WP_Query($args_p);
                                if ( $posts->have_posts() ):
                                    while ( $posts->have_posts() ): $posts->the_post(); ?>

                                        <li><a href="<?php the_permalink(); ?>" class="reset-link"><?php echo wp_trim_words(get_the_title(), 2, '...'); ?></a></li>

                                    <?php endwhile; ?>
                                <?php wp_reset_postdata(); endif; ?>
                            </ul>
                        </div>
                    <?php endforeach; ?>
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
