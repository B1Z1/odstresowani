<?php
$slides = $block['page_slide'];
?>
</div>
    <!-- Slider of proposition start -->
    <section class="prop-slider pt64 pb64 c-wh">
        <div class="filter-back bck-blck"></div>
        <div class="c-container">
            <div class="row">
                <div class="prop-slider_content tbl-col-8 ntb-col-6">
                    <div class="prop-slider_container">
                        <?php foreach ( $slides as $key => $slide ):
                            $title = $slide['page_slide_page'];
                            $page = get_page_by_title($title);
                            $page = get_post(pll_get_post($page->ID, pll_current_language()));
                            $name = $title . '_' . $key;
                            $url = get_the_permalink($page->ID);
                            $back = wp_get_attachment_image_src($slide['page_slide_image'], 'full')[0];
                            $content = $slide['page_slide_content'];
                            $title = $page->post_title;
                        ?>
                        <!-- Card of prop slider start -->
                        <div data-name="<?php echo $name; ?>" data-title="<?php echo $title; ?>" class="prop-slider_card">
                            <div class="prop-slider_card__back" data-back="<?php echo $back; ?>"></div>
                            <a href="<?php echo $url; ?>" class="c-link h1 f-vr">
                                <span class="prop-slider_card__title reset-margin pr16 pl16"><?php echo $title; ?></span>
                            </a>
                            <h3 class="f-vr"><?php echo $content; ?></h3>
                        </div>
                        <!-- Card of prop slider end -->
                        <?php endforeach; ?>
                    </div>
                    <ul class="c-list prop-slider_pagination flex-kit jcc fwrap">
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- Slider of proposition end -->
<div class="c-container">