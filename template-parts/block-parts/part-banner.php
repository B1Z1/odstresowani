<?php
$autor = $block['banner_autor'];
$size = $block['banner_size'] ? $block['banner_size']:'full';
$image = wp_get_attachment_image_src($block['banner_image'], 'full')[0];
$icon = wp_get_attachment_image_src( carbon_get_theme_option('general_sygnet_mini'), 'full' )[0];
?>
<?php if ( $image ): ?>
    </div>
        <div class="block mt128 mb64">
            <div class="block_image block_image__<?php echo $size ?>">
                <img src="<?php echo $image; ?>" class="block_image__el" alt="Sygnet">
                <div class="icon bck-wh">
                    <div class="icon_sygnet">
                        <img src="<?php echo $icon; ?>" alt="Sygnet">
                    </div>
                </div>
            </div>
            <?php if ( $autor ): ?>
                <h4 class="block_texcen f-san c-gt">Autor obrazu: <?php echo $autor; ?></h4>
            <?php endif; ?>
        </div>
    <div class="container container_960 header__triger">
<?php endif; ?>
