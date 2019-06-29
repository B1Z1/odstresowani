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
                            <?php
                            /**
                             * Navigation module
                             */
                            $args = [
                                'title' => $title,
                                'block' => $block
                            ];
                            do_action('odstresowani_module_navigation', $args);
                            ?>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="l-Footer__social mbl-col-12 clearfix">
                    <?php
                    /**
                     * Navigation Social Module
                     */
                    do_action('odstresowani_module_social_navigation', $footer_social);
                    ?>
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
                <?php
                /**
                 * Navigation Horizontal Module
                 */
                do_action('odstresowani_module_horizontal_navigation', $footer_bottom_list);
                ?>
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