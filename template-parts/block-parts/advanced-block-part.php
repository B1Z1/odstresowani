<?php
$pt = $block['advanced_pt'];
$pb = $block['advanced_pb'];
$classes = $pt . ' ' . $pb . ' ';
$content = $block['advanced_text'];

?>
<!-- Classic block start -->
<div class="container header__triger <?php echo $classes; ?>" style="text-align: center">
    <div class="row">
        <section class="block tbl-col-8">
            <?php echo $content; ?>
        </section>
    </div>
</div>
<!-- Classic block end -->