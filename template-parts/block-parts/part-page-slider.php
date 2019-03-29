<?php
$slides = $block['page_slide'];
?>
</div>
    <!-- Slider of proposition start -->
    <section class="prop-slider pt64 pb64 c-wh">
        <div class="filter_back bck-blck"></div>
        <div class="container">
            <div class="row">
                <div class="prop-slider_content tbl-col-8 ntb-col-6">
                    <div class="prop-slider_container">
                        <?php foreach ( $slides as $key => $slide ):
                            $title = $slide['page_slide_page'];
                            $page = get_page_by_title($title);
                            $name = $title . '_' . $key;
                            $url = get_the_permalink($page->ID);
                            $back = wp_get_attachment_image_src($slide['page_slide_image'], 'full')[0];
                            $content = $slide['page_slide_content'];
                        ?>
                        <!-- Card of prop slider start -->
                        <div data-name="<?php echo $name; ?>" data-title="<?php echo $title; ?>" class="prop-slider_card">
                            <div class="prop-slider_card__back" data-back="<?php echo $back; ?>"></div>
                            <a href="<?php echo $url; ?>" class="reset_link">
                                <h2 class="prop-slider_card__title reset_top reset_bottom pr16 pl16 f-48"><?php echo $title; ?></h2>
                            </a>
                            <h3><?php echo $content; ?></h3>
                        </div>
                        <!-- Card of prop slider end -->
                        <?php endforeach; ?>
                    </div>
                    <ul class="prop-slider_pagination flex-kit jcc fwrap reset_list">
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- Slider of proposition end -->
<div class="container">