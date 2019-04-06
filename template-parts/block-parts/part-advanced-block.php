<?php
//Padding top
$pt = $block['advanced_pt'] == 'none' ? '':$block['advanced_pt'];

//Padding bottom
$pb = $block['advanced_pb'] == 'none' ? '':$block['advanced_pb'];

//Margin top
$mt = $block['advanced_mt'] == 'none' ? '':$block['advanced_mt'];

//Margin bottom
$mb = $block['advanced_mb'] == 'none' ? '':$block['advanced_mb'];

//Header triger
$header_triger = $block['advanced_header'] ? 'header__triger':'';

//Title of block
$title = $block['advanced_title'];

//Title align
$title_align = $block['advanced_aligntext_title'];

//Image under the block if exists
$image_under = wp_get_attachment_image_url($block['advanced_blockimage'], 'full');

//Background color of block
$back_color_class = $block['advanced_backcolor'];

//Block classes
$block_classes = ' ' . $back_color_class . ' '  . $pt . ' ' . $pb . ' ' . $mt . ' ' . $mb . ' ' . $header_triger;

//Align blocks
$align_class = $block['advanced_blockalign']; 

//Justify blocks
$justify_class = $block['advanced_blockjustify']; 

//Columns
$columns = $block['advanced_col'];

?>
<!-- Classic block start -->
</div>
<section class="block block-advanced<?php echo $block_classes; ?>">

    <div class="container">
        
        <?php if ( $title ): ?>
            <!-- Title of block start --> 
            <h2 class="block__title reset-bottom f-48" <?php if ( $title_align ):  ?> style="text-align: <?php echo $title_align; ?>" <?php endif; ?>><?php echo $title; ?></h2>
            <!-- Title of block end --> 
        <?php endif; ?>
        
        <!-- Main block start -->
        <div class="d-flex fwrap row <?php echo $align_class . ' ' . $justify_class; ?> mt64">

            <?php if ( $columns ): ?>

                <?php foreach ($columns as $column): ?>
                <?php 
                    //Column size
                    $col_size = $column['advanced_column'];
                    //Column type
                    $col_type = $column['advanced_choose_text'];
                    //Column align text
                    $col_align = $column['advanced_aligntext'];
                    //Text color of block
                    $col_color_class = $column['advanced_textcolor'];

                    //Get variables by type of column
                    switch ( $col_type ) {
                        case 'text':
                            $col_content = $column['advanced_content'];
                            $col_icon = wp_get_attachment_image_url($column['advanced_image_under_text'], 'full');
                            break;
                        case 'list':
                            $col_list = $column['advanced_list'];
                            break;
                        case 'hidden':
                            $col_hidden_title = $column['advanced_hidden_title'];
                            $col_hidden_describe = $column['advanced_hidden_describe'];
                            break;
                        case 'image':
                            $col_image = wp_get_attachment_image_url($column['advanced_img'], 'full');
                            break;
                        case 'animated_image':
                            $col_animated_image = $column['advanced_imgtype'];
                            break;
                    }
                ?>

                    <div class="mbl-col-12 pc-col-<?php echo $col_size . ' ' . $col_color_class; ?>" style="text-align: <?php echo $col_align ?>" >
                    
                        <?php
                            //If column type == text
                            if ( $col_type == 'text' ){ ?>

                                <?php echo $col_content; ?>
        
                                <?php if ( $col_icon ): ?>

                                    <img src="<?php echo $col_icon; ?>" alt="Odstresowani Image" class="block-advanced__icon">

                                <?php endif; ?>

                            <?php }

                            //If column type == list
                            else if( $col_type == 'list'  ){ ?>

                                <ul class="block-list reset reset-list">

                                    <?php foreach ( $col_list as $el ): ?>

                                        <?php $list_text = $el['advanced_list_el']; ?>
                                        <li class="block-list__el block-list__el--underline pb16"><?php echo $list_text; ?></li>

                                    <?php endforeach; ?>

                                </ul>

                            <?php }

                            //If column type == hidden
                            else if ( $col_type == 'hidden' ){ ?>

                                <div class="block-hidden mb64">
                                    <p class="block-hidden__title"><?php echo $col_hidden_title; ?></p>
                                    <p class="block-hidden__describe reset-top"><?php echo $col_hidden_describe; ?></p>
                                </div>

                            <?php }
                            else if ( $col_type == 'image' ){ ?>
                                <img src="<?php echo $col_image; ?>" alt="Image Odstresowani" class="block-image block-image__advanced">
                            <?php }
                            //If column type == animated_image
                            else { 
                                switch ( $col_animated_image ) {
                                    case 'head':
                                        get_template_part('template-parts/animation-block/anime', 'head');
                                        break;
                                    case 'brain':
                                        get_template_part('template-parts/animation-block/anime', 'brain');
                                        break;
                                    case 'team':
                                        get_template_part('template-parts/animation-block/anime', 'team');
                                        break;
                                }
                            }
                        ?>

                    </div>

                <?php endforeach; ?>

            <?php endif; ?>

        </div>
        <!-- Main block end -->

    </div>

    
    <?php if ( $image_under ): ?>
        <!-- Image block start -->
        <img src="<?php echo $image_under; ?>" alt="Odstresowani Image" class="block-image__underblock">
        <!--  Image block end  -->
    <?php endif; ?>

</section>
<div class="container">

<!-- Classic block end -->