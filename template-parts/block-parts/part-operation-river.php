<?php 
    $button_text = $block['operation_button'];
    $form_shortcode = $block['operation_form'];
    $scroll_text = $block['operation_text_scroll'];
    $text = $block['operation_text'];
    $sygnet = carbon_get_theme_option('general_sygnet_back');
?>

<div id="block-operation" class="block-operation pt64 mb32">
    <?php echo $text; ?>
    <button class="button button--br4 button-river bck-gradient--blue c-wh pt8 pr32 pb8 pl32">
        <h4 class="reset"><?php echo __($button_text); ?></h4>
    </button>
 
    <div class="block-operation__wrapper">
        <?php echo do_shortcode($form_shortcode); ?>
    </div> 
</div>

<a href="#block-operation" class="button-scroll reset-link">
    <span class="button-scroll__text"><?php echo $scroll_text; ?></span>
    <img src="<?php echo wp_get_attachment_image_url($sygnet, 'full'); ?>" alt="Sygnet Odstresowani" class="button-scroll__sygnet">
</a>

<?php
    /*
    *
    * This is the form for Contact Form 7 shortcode
    *

    <div class="d-flex fwrap row">
        <div class="ntb-col-4 form-operation__visibility form-operation__visibility--disabled">
            [text* operation-name class:form__input class:form-operation__input placeholder "Imię i nazwisko"]
        </div>
        <div class="ntb-col-4 form-operation__visibility form-operation__visibility--disabled">
            [tel* operation-phone class:form__input class:form-operation__input placeholder "Numer telefonu"]
        </div>
        <div class="ntb-col-4 form-operation__visibility form-operation__visibility--disabled">
            [email* operation-mail class:form__input class:form-operation__input placeholder "Adres email"]
        </div>
        <div class="pc-col-12 form-operation__visibility form-operation__visibility--disabled">
            [text* operation-phone class:form__input class:form-operation__input placeholder "Nazwa miejscowości"]
        </div>
        <div class="pc-col-12 form-operation__visibility form-operation__visibility--disabled mb8">
            <h3 class="reset-bottom mt16">Forma uczęstnictwa:</h3>
            [radio operation-usability use_label_element class:form__radio class:form-operation__radio default:1 "Chce zorganizować sztab" "Chcę wziąć udział jako wolontariusz"]
        </div>
        <div class="pc-col-12 form-operation__visibility form-operation__visibility--disabled">
            <h3 class="reset">Forma aktywności:</h3>
            [radio operation-activity use_label_element class:form__radio class:form-operation__radio default:1 "Chcę posprzątać rzekę" "Inne miejsce"]
        </div>
        <div class="pc-col-12 form-operation__visibility form-operation__visibility--disabled mt16">
            [acceptance operation-accept class:form__checkbox class:form-operation__checkbox] Wyrażam zgodę na przetwarzanie i archiwizację danych [/acceptance]<a href="http://odstresowani.portal.local.pl/wp-content/uploads/2019/03/Dane-osobowe-zgoda.pdf" class="link-icon ml8"><img src="http://odstresowani.portal.local.pl/wp-content/uploads/2019/03/download.png" class="link-icon__icon" alt="PDF Icon"></a>
        </div>
        <div class="pc-col-12 form-operation__visibility form-operation__visibility--disabled mt8">
            [acceptance acceptance-282 class:form__checkbox class:form-operation__checkbox] Zapoznałem się i akceptuję ogólne warunki Operacji Rzeka 2019 [/acceptance]<a href="http://odstresowani.portal.local.pl/wp-content/uploads/2019/03/Warunki-zgoda.pdf" class="link-icon ml8"><img src="http://odstresowani.portal.local.pl/wp-content/uploads/2019/03/download.png" class="link-icon__icon" alt="PDF Icon"></a>
        </div>
    </div>
    [submit class:button class:form-operation__button "Wyślij zgłoszenie"]

    */
?>