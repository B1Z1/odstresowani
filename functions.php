<?php
/**
 * OdstresowaniPortal functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package OdstresowaniPortal
 */
/**
 *
 * Require Nav menu
 *
 */
require get_template_directory() . '/includes/functions-nav-menu.php';

/**
 *
 * Require Taxonomies
 *
 */
require get_template_directory() . '/includes/functions-taxonomies.php';

/**
 * Enqueue scripts and styles.
 */
require  get_template_directory() . '/includes/functions-enqueue.php';

/**
 *
 * Require theme support
 *
 */
require get_template_directory() . '/includes/functions-theme-support.php';

/**
 *
 * Require Carbon fields
 *
 */
require get_template_directory() . '/includes/functions-fields.php';

/**
 *
 * Require Footer Hooks
 *
 */
require get_template_directory() . '/includes/hooks/functions-footer.php';
