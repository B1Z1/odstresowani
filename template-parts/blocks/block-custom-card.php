<?php 

$card_list = $block['list'];
$gapsClasses = GeneralOptions::getAllGapsFromArray($block);
?>

</div>

<div class="l-Container header__triger <?php echo $gapsClasses; ?>">
    <div class="row">
        <div class="d-flex jcc fwrap">
            <?php foreach ( $card_list as $card ):
                $args = [
                    'title' => $card['title'],
                    'url' => $card['url'],
                    'image' => wp_get_attachment_image_src($card['image'], 'full')[0],
                ];
                ?>
                <div class="ntb-col-6">
                    <div class="mb64">
                        <?php do_action('post_card_mini', $args); ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>

<div class="l-Container l-Container--960">