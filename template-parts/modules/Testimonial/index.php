<?php
add_action('odstresowani_module_testiomonial', 'odstresowani_module_testiomonial', 10, 1);
if ( !function_exists('odstresowani_module_testiomonial') ){
    function odstresowani_module_testiomonial($args){ 
        $name = $args['name'];
        $image = $args['image'];
        $description = $args['description'];
        $description = $args['description'];
        $link_text = $args['link_text'];
        $link = $args['link'];
        $gapClasses = $args['gapClasses'];
        ?>
        <section class="m-Testiomonial <?php echo $gapClasses; ?>" data-jsmodule="Testiomonial">
            <h2 class="m-Testiomonial__name c-text--center"><?php echo $name; ?></h2>
            <div class="m-Testiomonial__author-block c-text--center">
                <img src="<?php echo $image; ?>" alt="<?php echo $name; ?>" class="m-Testiomonial__author c-Image">
            </div>
            <p class="m-Testiomonial__description c-text--center">
                <?php echo $description; ?>
            </p>
        </section>
    <?php }
}