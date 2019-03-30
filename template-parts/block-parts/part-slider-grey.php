<?php
$elements = $block['grey_slider'];
$sygnet = wp_get_attachment_image(carbon_get_theme_option('general_sygnet_mini'), 'full');
?>
</div>
    <section class="recent-posts pb32">


                <div class="recent-posts_s496 f-vb">
                    <div class="swiper-wrapper">
                        <?php foreach ( $elements as $element ):
                            $post = get_page_by_title($element['grey_slider_post'], 'OBJECT', array('post', 'strefa-wiedzy', 'trudne-sprawy'));
                            $title = $post->post_title;
                            $url = get_permalink($post->ID);
                            $image = get_the_post_thumbnail($post->ID, 'full'); ?>

                                <!-- Swiper slide start -->
                                <div class="swiper-slide card flex-kit fwrap bck-gm">
                                    <div class="card_wrapper ntb-col-6 reset">
                                        <div class="card_image card_image__swiper">
                                            <div class="filter_grad__black"></div>
                                            <?php echo $image; ?>
                                        </div>
                                    </div>
                                    <div class="ntb-col-4 reset">
                                        <div class="pt32 pr16 pb64 pl64">
                                            <div class="card_title">
                                                <h2 class="reset-top mb32"><?php echo $title; ?></h2>
                                            </div>
                                            <div class="card_more">
                                                <a href="<?php echo $url; ?>" class="link link-more link-more--black reset-link">Czytaj więcej</a>
                                            </div>
                                        </div>
                                    </div>
                                    <?php if ( $sygnet ): ?>
                                        <div class="icon bck-wh">
                                            <div class="icon_sygnet">
                                                <?php echo $sygnet; ?>
                                            </div>
                                        </div>
                                    <?php endif; ?>
                                </div>
                                <!--  Swiper slide end  -->

                            <?php endforeach; ?>
                    </div>
                    <div class="recent-posts_s496_pagination flex-kit jcc mb32"></div>
                </div>


        <script>
            let recentPostsGrey = new Swiper('.recent-posts_s496', {
                slidesPerView: 1,
                draggable: false,
                pagination: {
                    el: '.recent-posts_s496_pagination',
                    type: 'bullets',
                    clickable: 'true',
                },
                autoplay: {
                    delay: 5000,
                },
                effect: 'fade',
            });
        </script>
    </section>
<div class="container">