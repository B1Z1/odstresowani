<?php 
add_action('odstresowani_module_social_navigation', 'odstresowani_module_social_navigation', 10, 1);
if ( !function_exists('odstresowani_module_social_navigation') ){
    function odstresowani_module_social_navigation($block){ ?>
        <nav class="c-navigation fr">
            <ul class="c-list d-flex">
                <?php foreach ($block as $element) : 
                    $link = $element['footer_social_url'];
                    $icon = wp_get_attachment_image_url($element['footer_social_image'], 'full');
                    ?>
                    <li class="c-list__element mr16 ml16">
                        <a href="<?php echo $link; ?>" class="c-Link c-Link--diblock">
                            <img src="<?php echo $icon; ?>" alt="Icon" class="c-Image c-Image--24wh">
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </nav>
    <?php }
}