<?php
/**
 *
 * Get taxonomy/category of post
 *
 */
if ( !function_exists( 'post_get_cat' ) ) {
    function post_get_cat(){
        $post_type = get_post_type();
        $post_term = '';
        $pll_id = pll_get_term(get_the_ID());

        switch ($post_type){
            //If ever have added new post type, add this here
            case 'news': 
                $post_term = $post_type . '-kategoria';
            break;
            case 'strefa-wiedzy': 
                $post_term = $post_type . '-kategoria';
            break;
        }

        if ( $post_term != '' ){
            $post_cat = get_the_terms($pll_id, $post_term);
        }
        else {
            $post_cat = get_the_terms($pll_id, 'category');
        }
        return $post_cat;
    }
}

/**
 *
 * Function
 * -> get image of post
 *
 */
if ( !function_exists( 'post_category_sygnet' ) ){
    function post_category_sygnet(){
        $post_cat = post_get_cat();

        if ( $post_cat == 'post' ){
            $cat_image_id = carbon_get_term_meta($post_cat[0], 'category_sygnet');
        }
        else{
            $cat_image_id = carbon_get_term_meta($post_cat[0]->term_id, 'category_sygnet');
        }

        return $cat_image_id;
    }
}

/**
 *
 * Hook
 * -> card normal
 *
 */
add_action('post_card_block', 'post_card_block', 10, 1);
if ( !function_exists( 'post_card_block' ) ){
    function post_card_block($args){
        $wave = wp_get_attachment_url(carbon_get_theme_option('general_post_wave'), 'full');
        $url = $args['url'];
        $title = $args['title'];
        $describe = $args['describe'];
        $image = $args['image'];
        $date = $args['date'];
        $category = $args['category'];

        if ( $category->name ){
            $cat_list = '';
            foreach ($category as $key => $cat){
                $cat_list .= $cat->name . ', ';
            }
            $cat_list = substr($cat_list, 0, -2);
        }
        ?>

        <!-- Post card for posts start -->

        <a href="<?php echo $url; ?>" class="c-link">
            <div class="c-card">
                <div class="c-card__image c-card--192">
                    <?php if ( $image ): ?>
                        <img src="<?php echo $image; ?>" alt="<?php echo $title; ?>" class="c-Image">
                    <?php endif; ?>
                </div>
                <div class="c-card__title mt16">
                    <h3 class="reset f-vb"><?php echo $title; ?></h3>
                </div>
                <ul class="c-list flex-kit c-gt mt16">
                    <?php if ( $cat_list ): ?>
                        <li class="c-card__cat pr16 mr16 f-san">
                            <?php if ( $wave ): ?>
                                <object data="<?php echo $wave; ?>" class="c-Image__wave" type="image/svg+xml"></object>
                            <?php endif; ?>
                            <span class="c-text-size--h6">
                                <?php echo $cat_list; ?>
                            </span>
                        </li>
                    <?php endif; ?>
                    <li class="c-card__date">
                        <span class="c-text-size--h6">
                            <i class="mr8 far fa-calendar-alt"></i>
                            <?php echo $date; ?>
                        </span>
                    </li>
                </ul>
                <div class="c-card__describe mt32">
                    <span class="c-text-size--h4 f-vr"><?php echo $describe; ?></span>
                </div>
            </div>
        </a>

        <!--  Post card for posts end  -->

    <?php }
}

/**
 *
 * Hook
 * -> card mini
 *
 */
add_action('post_card_mini', 'post_card_mini', 10, 1);
if ( !function_exists( 'post_card_mini' ) ){
    function post_card_mini($args){
        $image = $args['image'];
        $title = $args['title'];
        $url = $args['url'];
        ?>
        <a href="<?php echo $url; ?>" class="c-link">
            <div class="c-card mb32">
                <div class="c-card__image c-card--192 mb32">
                    <?php if ( $image ): ?>
                        <img src="<?php echo $image; ?>" alt="<?php echo $title; ?>" class="c-Image">
                    <?php endif; ?>
                </div>
                <div class="c-card__title c-text--center">
                    <h2 class="f-vb"><?php echo $title; ?></h2>
                </div>
            </div>
        </a>
    <?php }
}




