<?php

/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package OdstresowaniPortal
 */

get_header();
?>

<main class="l-Wrapper">
    <div class="l-Container">
        <?php if (have_posts()) :  ?>
            <?php while (have_posts()) : the_post(); ?>
                <div class="m-WYSIWYG">
                    <?php the_content(); ?>
                </div>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
</main>

<?php
get_footer();
