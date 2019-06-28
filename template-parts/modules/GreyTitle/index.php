<?php 
add_action('odstresowani_GreyTitle', 'odstresowani_GreyTitle', 10, 2);
if ( !function_exists('odstresowani_GreyTitle') ){
    function odstresowani_GreyTitle($title, $image){ ?>
        <div class="m-GreyTitle mb160 pt128 pb160 bck-gm">
            <div class="l-Container">
                <h3 class="m-GreyTitle__text f-san"><?php echo $title; ?></h3>
                <?php if ( $image ): ?>
                    <img src="<?php echo $image; ?>" alt="Category sygnet" class="m-GreyTitle__image">
                <?php endif; ?>
            </div>
        </div>
    <?php }
}

