<?php
wp_reset_postdata();
global $currlang;

$post = $block['most_viewed_posts'] ? $block['most_viewed_posts'] : 'any';

//Arguments for Query
$args_q = array(
    'post_type' => $post,
    'posts_per_page' => 10,
    'numberposts' => 10,
    'orderby' => 'post_views',
    '_shuffle_and_pick' => 3,
    'lang' => $currlang,
);
$posts = new WP_Query($args_q);
$gapsClasses = GeneralOptions::getAllGapsFromArray($block);

?>

<?php if ($block['most_viewed_posts']) : ?>
    </div>
<?php endif; ?>

<div class="most-viewed block <?php echo $gapsClasses; ?>">
    <h3 class="reset-top c-text--center mb64"><?php pll_e('Najchętniej czytane'); ?></h3>
    <div class="d-flex fwrap row jcc">
        <?php if ($posts->have_posts()) : ?>
            <?php while ($posts->have_posts()) : $posts->the_post(); ?>

                <div class="ntb-col-6 pc-col-4">
                    <?php
                    /**
                     *
                     * Post type action
                     * -> Mini card
                     *
                     */
                    $args['image'] = get_the_post_thumbnail_url(get_the_ID(), 'full');
                    $args['title'] = get_the_title();
                    $args['url'] = get_permalink();
                    do_action('post_card_mini', $args);
                    ?>
                </div>

            <?php endwhile; ?>
        <?php endif; ?>
    </div>
</div>

<?php if ($block['most_viewed_posts']) : ?>
    <div class="l-Container">
<?php endif; ?>