<?php 
    $reviews = $block['reviews']; 
    $block_title = $block['reviews_title'];
?>

</div>
<div class="block pt64 pb64 bck-gm">
    <div class="container">
        <!-- Title of block start --> 
        <h2 class="block__title reset-bottom f-48"><?php echo $block_title; ?></h2>
        <!-- Title of block end -->
        <?php foreach( $reviews as $review ): ?>
        <?php 
        $text = $review['reviews_text'];
        $name = $review['reviews_name'];
        $image = wp_get_attachment_image_url($review['reviews_image'], 'full');
        ?>
            <div class="block-review block--texcen pt32 pb32">
                <p class="block-review__content"><?php echo $text; ?></p>
                <h2 class="block-review__author reset-bottom"><?php echo $name; ?></h2>
                <img src="<?php echo $image; ?>" class="block-review__avatar mt16">
            </div>
        <?php endforeach; ?>
    </div>
</div>
<div class="container">