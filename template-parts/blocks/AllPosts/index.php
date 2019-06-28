<?php
wp_reset_postdata();
global $currlang;

$post_type = $block['posts'];
//Arguments for Query
$args_q = array(
    'post_type' => $post_type,
    'posts_per_page' => -1,
    'lang' => $currlang,
);
$posts = new WP_Query($args_q);
$gapsClasses = GeneralOptions::getAllGapsFromArray($block);
?>

<section class="m-AllPosts header__triger <?php echo $gapsClasses; ?>">


    <div class="d-flex fwrap row infinity-scroll">
        <?php
        if ($posts->have_posts()) {
            while ($posts->have_posts()) {
                $posts->the_post();
                $args['url'] = get_permalink();
                $args['title'] = get_the_title();
                $args['describe'] = wp_trim_words(get_the_content(), 20);
                $args['image'] = get_the_post_thumbnail_url(get_the_ID(), 'full');
                $args['date'] = get_the_date('j M Y', get_the_ID());

                if ($post_type == 'post') {
                    $args['category'] = get_the_category(get_the_ID());
                } else {
                    $args['category'] = wp_get_post_terms(get_the_ID(), $post_type . '-kategorie');
                }
                $column = $block['posts_position']; ?>
                <div class="ntb-col-6 pc-col-<?php echo $column ?> mb64">
                    <?php do_action('post_card_block', $args); ?>
                </div>
            <?php }
        } ?>
    </div>

</section>

<?php wp_reset_postdata(); ?>