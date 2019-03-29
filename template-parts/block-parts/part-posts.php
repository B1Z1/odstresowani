<?php
wp_reset_postdata();
global $currlang;

$post_type = $block['posts'];
$post_style = $block['posts_style'];

//Arguments for Query
$paged = get_query_var( 'paged' ) ? absint( get_query_var( 'paged' ) ) : 1;
$args_q = array(
    'post_type' => $post_type,
    'posts_per_page' => 15,
    'lang' => $currlang,
    'paged' => $paged,
);

$posts = new WP_Query($args_q);

/**
 *
 * Pagination
 *
 */
$big = 999999999;
$args_p = array(
    'base'    => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
    'format'  => '?paged=%#%',
    'current' => max( 1, get_query_var('paged') ),
    'total'   => $posts->max_num_pages,
    'prev_text'    => __('Previous'),
    'next_text'    => __('Next'),
);

?>

<section class="block header__triger pt64">

    <?php if ( $post_type == 'ciekawostki' ): ?>

        <div class="block__photo block--texcen c-wh row d-flex fwrap">
            <?php if ( $posts->have_posts() ) {
                while ($posts->have_posts()) {
                    $posts->the_post();
                    $args['describe'] = get_the_title();
                    $args['image'] = get_the_post_thumbnail(get_the_ID(), 'full');
                    $args['date'] = get_the_date('j M Y', get_the_ID());
                    $args['icon'] = wp_get_attachment_image_src(carbon_get_theme_option('general_sygnet_front'), 'full')[0];
                    ?>
                    <div class="tbl-col-10 ntb-col-6 pc-col-4 mauto">
                        <?php
                        /**
                        *
                        * Action gets arguments
                        * @url
                        * @title
                        * @describe
                        * @image
                        * @date
                        * @category
                        *
                        *
                        */
                        do_action('post_card_photo', $args);
                        ?>
                    </div>
                    <?php
                }
            }
            ?>
            <?php if ( paginate_links( $args_p ) ): ?>
                <nav class="block navigation c-blck mt64" role="navigation">
                    <div class="nav-links block--texcen">
                        <?php echo paginate_links( $args_p ); ?>
                    </div>
                </nav>
            <?php endif; ?>
        </div>

    <?php else: ?>

            <h3 class="block--texcen reset f-san">Artykuły</h3>
            <div class="mt64 d-flex fwrap row">
                <?php
                if ( $posts->have_posts() ) {
                    while ($posts->have_posts()) {
                        $posts->the_post();
                        $args['url'] = get_permalink();
                        $args['title'] = get_the_title();
                        $args['describe'] = wp_trim_words(get_the_content(), 20);
                        $args['image'] = get_the_post_thumbnail(get_the_ID(), 'full');
                        $args['date'] = get_the_date('j M Y', get_the_ID());

                        if ($post_type == 'post') {
                            $args['category'] = get_the_category(get_the_ID());
                        } else {
                            $args['category'] = wp_get_post_terms(get_the_ID(), $post_type . '-kategorie');
                        }
                        /**
                         *
                         * Action gets arguments
                         * @url
                         * @title
                         * @describe
                         * @image
                         * @date
                         * @category
                         *
                         *
                         */
                        if ($post_style == 'list') { ?>
                            <div class="mbl-col-12 mb64">
                                <?php do_action('post_card_list', $args); ?>
                            </div>
                        <?php }
                        else { ?>
                            <div class="ntb-col-6 mb64">
                                <?php do_action('post_card_block', $args); ?>
                            </div>
                        <?php }
                    }
                } ?>
            </div>

            <nav class="block navigation" role="navigation">
                <div class="nav-links block--texcen">
                    <?php echo paginate_links( $args_p ); ?>
                </div>
            </nav>

    <?php endif; ?>

</section>

<?php wp_reset_postdata(); ?>