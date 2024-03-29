<?php
/**
 *
 * Template name: Strona Kontaktowa
 *
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
        <section class="l-contact">
            <div class="pt64 pb128 c-gt bck-gm">
                <div class="l-Container l-Container--480">
                    <h3 class="f-vb">
                        <span class="c-op f-vb">
                            <?php echo pll__('Wyślij do nas swoją wiadomość'); ?>
                        </span>
                    </h3>
                    <?php echo do_shortcode('[contact-form-7 id="1781" title="Formularz"]'); ?>
                </div>
            </div>
        </section>
    </main>

<?php
get_footer();

/**
 * 
 * Contact Form plugin template
 * 
 */

// <ul class="c-list">
//     <li class="c-list__element mb32">
//         [text* name class:c-input class:c-input__classic placeholder "Imię*"]
//     </li>
//     <li class="c-list__element mb32">
//         [text* surname class:c-input class:c-input__classic placeholder "Nazwisko*"]
//     </li>
//     <li class="c-list__element mb32">
//         [email* email class:c-input class:c-input__classic placeholder "E-Mail*"]
//     </li>
//     <li class="c-list__element mb32">
//         [textarea* massage class:c-textarea class:c-textarea__classic placeholder "Wiadomość*"]
//     </li>
//     <li class="c-list__element mb32">
//         [submit class:c-Button class:c-Button__operative class:c-Button--full class:f-vb class:pt32 class:pb32 class:d-ib "Wyślij wiadomość"]             
//     </li>
// </ul>