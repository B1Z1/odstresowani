<?php

//Block Constructor
$advanced_block = new AdvancedBlock();
$gapsClasses = GeneralOptions::getAllGapsFromArray($block);
$generalClasses = $advanced_block->generate_string(
    array(
        $block['advanced_backcolor'] ? $block['advanced_backcolor']:'',
        $block['advanced_header'] ? 'header__triger':'',
    )
);

//Flex constructor
$string_flex_classes = $advanced_block->generate_string(
    array(
        $block['advanced_blockalign'] == 'none' ? '' : $block['advanced_blockalign'],
        $block['advanced_blockjustify'] == 'none' ? '' : $block['advanced_blockjustify'],
    )
);
//Title constructor
$title_html = $advanced_block->generate_title(
    array(
        'text' => $block['advanced_title'],
        'align' => $block['advanced_aligntext_title'] ? $block['advanced_aligntext_title'] : '',
        'size' => $block['advanced_size_title'] ? $block['advanced_size_title'] : '2',
    )
);

//Columns
$columns = $block['advanced_col'];
//Image under the block if exists
$image_under = wp_get_attachment_image_url($block['advanced_blockimage'], 'full');

?>
<!-- Classic block start -->
</div>
<section class="block block-advanced <?php echo $generalClasses . ' ' . $gapsClasses; ?>">

    <div class="c-container">
        
        <?php if ( $title_html ): ?>
            <!-- Title of block start --> 
            <?php echo $title_html; ?>
            <!-- Title of block end --> 
        <?php endif; ?>
        
        <?php if ( $columns ): ?>

            <!-- Main block start -->
            <div class="d-flex fwrap row <?php echo $string_flex_classes ?>">
                <?php foreach ($columns as $column): ?>
                <?php 
                    //Columns classes
                    $string_col_classes = $advanced_block->generate_string(
                        array(
                            $column['advanced_column'] ? "pc-col-{$column['advanced_column']}" : "",
                            $column['advanced_aligntext'] ? $column['advanced_aligntext'] : "",
                            $column['advanced_textcolor'] ? $column['advanced_textcolor'] : "",
                        )
                    );
                    //Column type
                    $col_type = $column['advanced_choose_text'];

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

                    <div class="mbl-col-12 <?php echo $string_col_classes; ?>">
                    
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

                                <ul class="c-list reset">
                                    <?php foreach ( $col_list as $el ): ?>
                                        <?php $list_text = $el['advanced_list_el']; ?>
                                        <li class="pb16"><?php echo $list_text; ?></li>
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

            </div>
            <!-- Main block end -->

        <?php endif; ?>

    </div>

</section>
<div class="c-container">

<!-- Classic block end -->