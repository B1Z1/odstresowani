<?php
$container = $block['container'];
$gapsClasses = GeneralOptions::getAllGapsFromArray($block);
?>

</div>

<div class="l-Container header__triger <?php echo $gapsClasses; ?>">
    <div class="m-CustomCards">
        <div class="row d-flex jcc fwrap">
            <?php if (count($container) > 0) : ?>
                <?php foreach ($container as $element) :
                    $args = [
                        'title' => $element['title'],
                        'url' => $element['url'],
                        'image' => wp_get_attachment_image_src($element['image'], 'full')[0],
                    ];
                    ?>
                    <div class="ntb-col-6">
                        <div class="mb64">
                            <?php
                            /**
                             * Post Card Mini
                             */
                            do_action('post_card_mini', $args);
                            ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>
</div>

<div class="l-Container l-Container--960">