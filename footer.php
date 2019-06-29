<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package OdstresowaniPortal
 */

global $currlang;
$footer_blocks = carbon_get_theme_option('footer_blocks');
$footer_bottom_list = carbon_get_theme_option('footer_bottom_blocks');
$footer_social = carbon_get_theme_option('footer_social');
?>

<!-- ---------------------- -->
<!--  Footer section start  -->
<!-- ---------------------- -->

<?php
/**
 * Wrapper Start
 */
do_action('odstresowani_layout_wrapper_start');
?>

<footer class="l-Footer">
    <!-- Footer Upper Side -->
    <div class="l-Footer__upper">
        <div class="bck-gradient--operative pt64 pb32 c-wh">
            <?php
            /**
             * Container Start
             */
            do_action('odstresowani_layout_container_start');
            ?>
                <div class="row">
                    <div class="l-Footer__blocks d-flex jcsa fwrap mb64">
                        <?php foreach ($footer_blocks as $element) : 
                            $title = $element['footer_title'];
                            $block = $element['footer_block']; 
                            ?>
                            <div class="mbl-col-12 tbl-col-6 ntb-col-3">
                                <nav class="c-navigation mb32">
                                    <!-- :Title Of block Start: -->
                                    <?php if ($title): ?>
                                        <h3 class="f-vb mb16"><?php echo $title; ?></h3>
                                    <?php endif; ?>
                                    <!-- :Title Of block End: -->

                                    <!-- :Blocks Start: -->
                                    <?php if ($block): ?>
                                        <ul class="c-list">
                                            <?php foreach ($block as $item) :
                                                $title = $item['footer_block_page'];
                                                $page = get_page_by_title($title);
                                                $page = get_post(pll_get_post($page->ID,  $currlang));
                                                $url = get_permalink($page->ID);
                                                $title = $page->post_title;
                                                ?>
                                                <li class="c-list__element mb16">
                                                    <h3 class="reset f-vr">
                                                        <a href="<?php echo $url; ?>" class="c-link">
                                                            <?php echo $title; ?>
                                                        </a>
                                                    </h3>
                                                </li>
                                                <?php wp_reset_postdata(); ?>
                                            <?php endforeach; ?>
                                        </ul>
                                    <?php endif; ?>
                                    <!-- :Blocks End: -->
                                </nav>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <div class="l-Footer__social mbl-col-12 clearfix">
                        <nav class="c-navigation fr">
                            <ul class="c-list d-flex">
                                <?php foreach ($footer_social as $footer_list) : ?>
                                    <li class="c-list__element mr16 ml16">
                                        <a href="<?php echo $footer_list['footer_social_url']; ?>" class="c-link c-link--diblock">
                                            <?php $footer_social_icon = wp_get_attachment_image_url($footer_list['footer_social_image'], 'full'); ?>
                                            <img src="<?php echo $footer_social_icon; ?>" alt="Icon" class="c-Image c-Image--24wh">
                                        </a>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </nav>
                    </div>
                </div>
            <?php
            /**
             * Container End
             */
            do_action('odstresowani_layout_container_end');
            ?>
        </div>
    </div>
    <!-- Footer Upper Side End -->

    <div class="l-Footer__bottom mt32 mb16 c-blck">
        <?php
        /**
         * Container Start
         */
        do_action('odstresowani_layout_container_start');
        ?>

            <div class="row flex-kit aic jcsb fwrap">
                <div class="l-Footer__rights ntb-col-4">
                    <span>© 2018 Odstresowani.pl All rights reserved.</span>
                </div>

                <div class="l-Footer__politics ntb-col-8">
                    <nav class="c-navigation">
                        <ul class="c-list flex-kit jce fwrap">
                            <?php foreach ($footer_bottom_list as $item) :
                                $title = $item['footer_bottom_pages'];
                                $page = get_page_by_title($title);
                                $page = get_post(pll_get_post($page->ID,  $currlang));
                                $url = get_permalink($page->ID);
                                $title = $page->post_title; ?>
                                <li class="mr16 ml16"><a href="<?php echo $url; ?>" class="c-link"><?php echo $title; ?></a></li>
                                <?php wp_reset_postdata();
                            endforeach; ?>
                        </ul>
                    </nav>
                </div>
            </div>

        <?php
        /**
         * Container End
         */
        do_action('odstresowani_layout_container_end');
        ?>
    </div>
</footer>
<?php
/**
 * Wrapper End
 */
do_action('odstresowani_layout_wrapper_end');
?>

<!-- -------------------- -->
<!--  Footer section end  -->
<!-- -------------------- -->

<?php wp_footer(); ?>

</body>

</html>