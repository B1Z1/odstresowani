<?php 
$card_list = $block['list'];
?>

</div>

<div class="c-container">
    <div class="row">
        <div class="mt64">
            <div class="d-flex fwrap">
                <?php foreach ( $card_list as $card ):
                    $args = [
                        'title' => $card['title'],
                        'url' => $card['url'],
                        'image' => wp_get_attachment_image_src($card['image'], 'full')[0],
                    ];
                    ?>
                    <div class="ntb-col-6">
                        <?php do_action('post_card_mini', $args); ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</div>

<div class="c-container c-container--960">