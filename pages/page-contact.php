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

    <div class="c-wrapper">

        <!-- ------------------ -->
        <!-- Main section start -->
        <!-- ------------------ -->

        <main class="main">

            <section class="l-contact">
                <div class="pt64 pb128 c-gt bck-gm">
                    <div class="c-container c-container--480">
                        <h3 class="f-vb">
                            <span class="c-op f-vb">
                                Zarejestruj się
                            </span>
                        </h3>

                        <form class="l-contact__form">
                            <ul class="c-list">
                                <li class="c-list__element mb32">
                                    <input type="text" name="name" placeholder="Imię*" class="c-input c-input__classic">
                                </li>
                                <li class="c-list__element mb32">
                                    <input type="text" name="surname" placeholder="Nazwisko*" class="c-input c-input__classic">
                                </li>
                                <li class="c-list__element mb32">
                                    <input type="email" name="email" placeholder="E-Mail*" class="c-input c-input__classic">
                                </li>
                                <li class="c-list__element mb32">
                                    <textarea class="c-textarea c-textarea__classic" name="massage" placeholder="Wiadomość*"></textarea>
                                </li>
                                <li class="c-list__element mb32">
                                    <button class="c-button c-button__operative c-button--full">
                                        <span class="f-vb pt16 pb16 d-ib">
                                            Wyślij wiadomość
                                        </span>
                                    </button>              
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </section>

        </main>

        <!-- ------------------ -->
        <!--  Main section end  -->
        <!-- ------------------ -->

<?php
get_footer();
