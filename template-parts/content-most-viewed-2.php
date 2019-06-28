<?php
wp_reset_postdata();

global $currlang;
$post = $block['most_viewed_posts'] ? $block['most_viewed_posts']:'any';

//Arguments for Query
$args_q = array(
    'post_type' => $post,
    'posts_per_page' => 10,
    'numberposts' => 10,
    'orderby' => 'post_views',
    '_shuffle_and_pick' => 2,
    'lang' => $currlang,
);
$posts = new WP_Query($args_q);
?>

<?php if ( $block['most_viewed_posts'] ): ?>
</div>
<?php endif; ?>

    <div class="most-viewed block mt128 mb128">
        <h3 class="reset-top c-text--center mb64"><?php pll_e('Najchętniej czytane'); ?></h3>
        <div class="d-flex fwrap row">
            <?php if ( $posts->have_posts() ): ?>
                <?php while ( $posts->have_posts() ): $posts->the_post(); ?>

                        <?php
                        /**
                         *
                         * Post type action
                         * -> Mini card
                         *
                         */
                        $args['url'] = get_permalink();
                        $args['title'] = get_the_title();
                        $args['describe'] = wp_trim_words(get_the_content(), 20);
                        $args['image'] = get_the_post_thumbnail_url(get_the_ID(), 'full');
                        $args['date'] = get_the_date('j M Y', get_the_ID());
                        $args['category'] = post_get_cat(); ?>
                        <div class="ntb-col-6 mb64">
                            <?php do_action('post_card_block', $args); ?>
                        </div>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
    </div>

<?php if ( $block['most_viewed_posts'] ): ?>
<div class="l-Container">
<?php endif; wp_reset_postdata(); ?>