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

?>

            <!-- ---------------------- -->
            <!--  Footer section start  -->
            <!-- ---------------------- -->
            <?php

            /**
             *
             * Start Wrapper for footer
             * @footer_wrapper_start - 10
             *
             */
            do_action('odstresowani_footer_start');

            /**
             *
             *
             * Start Wrapper for upper footer
             * @footer_upper_start - 10
             *
             */
            do_action('odstresowani_footer_upper_start');

            /**
             *
             *
             * Blocks and social list footer
             * @footer_upper_blocks - 10
             * @footer_upper_social - 20
             *
             */
            do_action('odstresowani_footer_upper_elements');

            /**
             *
             *
             * End Wrapper for upper footer
             * @footer_upper_start - 10
             *
             */
            do_action('odstresowani_footer_upper_end');

            /**
             *
             *
             * Start Wrapper for bottom footer
             * @footer_bottom_start - 10
             *
             */
            do_action('odstresowani_footer_bottom_start');

            /**
             *
             * Footer bottom elements
             * @footer_bottom_rights - 10
             * @footer_bottom_links - 20
             *
             */
            do_action('odstresowani_footer_bottom_elements');

            /**
             *
             *
             * End Wrapper for bottom footer
             * @footer_bottom_end - 10
             *
             */
            do_action('odstresowani_footer_bottom_end');


            /**
             *
             * Wrapper for footer
             * @footer_wrapper_start
             *
             */
            do_action('odstresowani_footer_end');
            ?>

        <!-- -------------------- -->
        <!--  Footer section end  -->
        <!-- -------------------- -->

        </div>

    <?php wp_footer(); ?>

    </body>
</html>
