<?php
$container = $block['container'];
$gapClasses = GeneralOptions::getAllGapsFromArray($block);
?>
</div>

<?php
    /**
     * Hero Banner Module
     */
    do_action('odstresowani_hero_banner', array(
        'gapClasses' => $gapClasses,
        'container' => $container
    ));
?>