<?php
global $currlang;
$post_types = array('post', 'strefa-wiedzy'); 
$post_names = array(pll__('Aktualności'), pll__('Strefa Wiedzy'));
?>
</div>
<!-- Recent posts slider start -->
<section class="recent-posts swiper-recent_posts header__triger">
    <div class="mt64 pt128 pb128 bck-gm">
        <div class="c-container">
            <div class="row">
                <div class="pb128">
                    <ul class="c-list recent-posts_vh_pagination flex-kit jcc fwrap">
                    </ul>
                </div>
                <?php foreach ( $post_types as $key => $post_type ): ?>

                    <!-- Recent posts block start -->
                    <div class="recent-posts_vh recent-posts_vh__active" data-name="<?php echo $post_names[$key]; ?>" data-title="<?php echo $post_names[$key]; ?>">
                        <div class="swiper-wrapper recent-posts_cards">
                            <?php
                            $posts = new WP_Query('post_type=' . $post_type . '&posts_per_page=8&lang=' . $currlang );
                            if ( $posts->have_posts() ): ?>

                                <?php while ($posts->have_posts()):
                                    $posts->the_post();
                                    $args = [
                                        'image' => get_the_post_thumbnail_url(get_the_ID(), 'full'),
                                        'title' => get_the_title(),
                                        'url' => get_the_permalink()
                                    ];
                                    ?>

                                    <!-- Card start -->
                                    <div class="swiper-slide mbl-col-12 ntb-col-6">
                                        <?php
                                        /**
                                         *
                                         * Post type action
                                         * -> Mini card
                                         *
                                         */
                                        do_action('post_card_mini', $args);
                                        ?>
                                    </div>
                                    <!-- Card end -->

                                <?php endwhile; ?>

                            <?php endif; wp_reset_postdata(); ?>
                        </div>
                        <div class="recent-posts_vh_pagination pt128 flex-kit jcc"></div>
                    </div>
                    <!--  Recent posts block end  -->

            <?php endforeach; ?>
            </div>
        </div>
    </div>
    <script>
            let recent_blocks = [... document.querySelectorAll('.recent-posts_vh')],
                recentPosts = {};

            recent_blocks.forEach(function (el, index) {
                recentPosts[index] = new Swiper(el, {
                    speed: 400,
                    slidesPerView: 2,
                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        el: '.recent-posts_vh_pagination',
                        type: 'bullets',
                        clickable: 'true',
                    },
                    breakpoints: {
                        // when window width is <= 640px
                        768: {
                            slidesPerView: 1,
                        }
                    }
                });
            });

    </script>
</section>
<!--  Recent posts slider end  -->
<div class="c-container">