<?php
$container = $block['container'];
$gapsClasses = GeneralOptions::getAllGapsFromArray($block);
?>
</div>
<!-- Hero banner start -->
<section class="m-Hero d-flex fwrap c-wh <?php echo $gapsClasses; ?>" <?php if ($back_image) : ?>style="background-image: url( <?php echo $back_image; ?> )" <?php endif; ?>>
    <?php foreach($container as $element): 
        $title = $element['title'];
        $describe = $element['describe'];
        $image = $element['image'];
        $buttonText = $element['buttonText'];
        $buttonLink = $element['buttonLink'];
        if ( count($container) === 1 )
            $columnClass = 'ntb-col-12';
        else
            $columnClass = 'ntb-col-6';
        ?>
        <div class="<?php echo $columnClass; ?>">
            <div class="m-Hero__side">
                <div class="d-flex aic jcc">
                    
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</section>
<!-- Hero banner end -->
<div class="c-container">