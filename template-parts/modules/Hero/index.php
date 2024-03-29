<?php
add_action('odstresowani_hero_banner', 'odstresowani_hero_banner', 10, 1);
if ( !function_exists('odstresowani_hero_banner') ){
    function odstresowani_hero_banner($args){ 
        $gapClasses = $args['gapClasses'];
        $container = $args['container'];
        ?>
        <!-- Hero banner start -->
        <section class="m-Hero c-text--center d-flex fwrap c-wh <?php echo $gapClasses; ?>">
            <?php foreach ($container as $element) :
                $title = $element['title'];
                $describe = $element['describe'];
                $buttons = $element['buttons'];
                $image = wp_get_attachment_image_url($element['image'], 'full');
                if (count($container) === 1)
                    $columnClass = 'ntb-col-12';
                else
                    $columnClass = 'ntb-col-6';
                ?>
                <div class="m-Hero__side <?php echo $columnClass; ?> d-flex fd-col aic jcc" style="background-image: url(<?php echo $image; ?>);">
                    <div class="m-Hero__content">
                        <?php if ($title) : ?>
                            <h2 class="m-Hero__title mb16 f-vr"><?php echo $title; ?></h2>
                        <?php endif; ?>

                        <?php if ($describe) : ?>
                            <h4 class="m-Hero__describe mt0 f-vr"><?php echo $describe; ?></h4>
                        <?php endif; ?>

                        <?php if (count($buttons) > 0) : ?>
                            <ul class="m-Hero__buttons c-list c-wh d-flex jcc aic fwrap">
                                <?php foreach ($buttons as $button) :
                                    $link = $button['link'];
                                    $text = $button['text'];
                                    ?>
                                    <li class="c-list__element mr32 c-text-size--normal">
                                        <?php
                                        /**
                                         * Button Normal Component
                                         */
                                        do_action('odstresowani_button_normal', 'a', $link, $text);
                                        ?>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </section>
        <!-- Hero banner end -->
    <?php }
}