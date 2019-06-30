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
        <section class="m-Testimonial <?php echo $gapClasses; ?>" data-jsmodule="Testiomonial">
            <div class="c-text-size--h2">
                <button class="m-Testimonial__button c-Button f-vr d-ib" data-testimonial-button>Zobacz naszego terapeutę</button>
            </div>

            <h2 class="m-Testimonial__name c-text--center" data-testimonial-name><?php echo $name; ?></h2>
            <div class="m-Testimonial__author-block c-text--center">
                <div class="m-Testimonial__author" data-testimonial-author>
                    <img src="<?php echo $image; ?>" alt="<?php echo $name; ?>" class="c-Image">
                </div>
                <svg class="m-Testimonial__wave" data-testimonial-wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1168.496 94.965">
                    <defs>
                        <style>
                            .cls-1 {
                                fill: none;
                                stroke: #0052c3;
                                stroke-width: 3px;
                            }
                        </style>
                    </defs>
                    <path id="Path_1130" class="cls-1" d="M0,0S282.992-27.768,518.793-.033C522.582-49.387,558.407-65.3,585.857-65.3c16.936,0,61.383,13.262,63.277,65.268C918.992,59.749,1168,0,1168,0" transform="translate(0.146 66.801)"/>
                    <rect x="0" y="0" width="100%" height="100%" fill="white" data-testimonial-rect></rect>
                </svg>
            </div>
            <p class="m-Testimonial__description c-text--center" data-testimonial-description>
                <?php echo $description; ?>
            </p>
        </section>
    <?php }
}