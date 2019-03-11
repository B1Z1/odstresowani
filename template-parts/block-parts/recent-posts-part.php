<?php
$post_types = array('post','knowledge_zone');
$post_names = array('Aktualności','Strefa wiedzy');
?>
</div>
    <!-- Recent posts slider start -->
    <section class="recent-posts header__triger pt64 pb64">
        <div class="container">
            <div class="row">
                <ul class="recent-posts_pagination pt64 pb64 flex-kit jcc fwrap reset_list">
                </ul>
                <?php foreach ( $post_types as $key => $post_type ): $posts = new WP_Query('post_type=' . $post_type); ?>
                    <!-- Recent posts block start -->
                    <div class="recent-posts_block" data-name="<?php echo $post_names[$key]; ?>" data-title="<?php echo $post_names[$key]; ?>">
                        <div class="swiper-wrapper recent-posts_cards flex-kit">
                            <?php
                            $posts = new WP_Query('post_type=' . $post_type . '&posts_per_page=8');
                            if ( $posts->have_posts() ): ?>

                                <?php while ($posts->have_posts()):
                                    $posts->the_post();
                                    $title = get_the_title();
                                    $url = get_the_permalink();
                                    $image = get_post_thumbnail_id();
                                    ?>
                                    <!-- Card start -->
                                    <div class="swiper-slide mbl-col-12 ntb-col-6">
                                        <div class="card mb32">
                                            <a href="<?php echo $url; ?>" class="reset_link">
                                                <div class="card_image mb32">
                                                    <?php echo wp_get_attachment_image($image, 'full'); ?>
                                                </div>
                                                <div class="card_title f-vb">
                                                    <h2><?php echo $title; ?></h2>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <!-- Card end -->
                                <?php endwhile; ?>

                            <?php endif; wp_reset_postdata(); ?>
                        </div>
                        <div class="recent-posts_pagination pt128 flex-kit jcc"></div>
                    </div>
                    <!--  Recent posts block end  -->
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <!--  Recent posts slider end  -->
<div class="container">