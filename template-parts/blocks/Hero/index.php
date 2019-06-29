<?php
$container = $block['container'];
$gapsClasses = GeneralOptions::getAllGapsFromArray($block);
?>
</div>

<?php
    /**
     * Hero Banner Module
     */
    do_action('odstresowani_hero_banner', array(
        'gapsClasses' => $gapsClasses,
        'container' => $container
    ));
?>