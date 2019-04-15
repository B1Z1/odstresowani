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
            case 'strefa-wiedzy': $post_term = 'strefa-wiedzy-kategorie'; break;
            case 'trudne-sprawy': $post_term = 'trudne-sprawy-kategorie'; break;
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

        if ( $category ){
            $cat_list = '';
            foreach ($category as $key => $cat){
                $cat_list .= $cat->name . ', ';
            }
            $cat_list = substr($cat_list, 0, -2);
        }

        ?>

        <!-- Post card for posts start -->

        <a href="<?php echo $url; ?>" class="reset-link">
            <div class="card">
                <div class="card__image card__image--192">
                    <?php echo $image; ?>
                </div>
                <div class="card__title mt16">
                    <h2 class="reset f-vb"><?php echo $title; ?></h2>
                </div>
                <ul class="flex-kit reset-list c-gt mt16">
                    <?php if ( $cat_list ): ?>
                        <li class="card__cat f-san">
                            <?php if ( $wave ): ?>
                                <object data="<?php echo $wave; ?>" class="card__wave" type="image/svg+xml"></object>
                            <?php endif; ?>
                            <h4 class="reset">
                                <?php echo $cat_list; ?>
                            </h4>
                        </li>
                    <?php endif; ?>
                    <li class="card__date">
                        <h4 class="reset">
                            <i class="far fa-calendar-alt"></i>
                            <?php echo $date; ?>
                        </h4>
                    </li>
                </ul>
                <div class="card__describe mt32">
                    <h4 class="reset"><?php echo $describe; ?></h4>
                </div>
            </div>
        </a>

        <!--  Post card for posts end  -->

    <?php }
}

/**
 *
 * Hook
 * -> card photo
 *
 */
add_action('post_card_photo', 'post_card_photo', 10, 1);
if ( !function_exists( 'post_card_photo' ) ){
    function post_card_photo($args){
        $describe = $args['describe'];
        $image = $args['image'];
        $date = $args['date'];
        $icon = $args['icon'];
        ?>
        <!-- Post card for posts start -->

        <div class="card bck-gt pt16 pr16 pb32 pl16 mb64">
            <div class="card__image card__image--192">
                <?php echo $image; ?>
                <div class="icon bck-gt">
                    <div class="icon__sygnet">
                        <img src="<?php echo $icon; ?>" alt="Sygnet">
                    </div>
                </div>
            </div>
            <div class="card__describe mbl-col-12 mauto pt32 f-san">
                <h4 class="reset"><?php echo $describe; ?></h4>
            </div>
            <div class="card__date card__date--abr">
                <?php echo $date; ?>
            </div>
        </div>

        <!--  Post card for posts end  -->

<?php }
}

/**
 *
 * Hook
 * -> card list
 *
 */
add_action('post_card_list', 'post_card_list', 10, 1);
if ( !function_exists( 'post_card_list' ) ){
    function post_card_list($args){
        $url = $args['url'];
        $title = $args['title'];
        $describe = $args['describe'];
        $image = $args['image'];
        $date = $args['date'];
        $category = $args['category'];

        if ( $category ){
            $cat_list = '';
            foreach ($category as $key => $cat){
                $cat_list .= $cat->name . ', ';
            }
            $cat_list = substr($cat_list, 0, -2);
        }
        ?>

        <!-- Post card for posts start -->

        <a href="<?php echo $url; ?>" class="reset-link mb32">
            <div class="card flex-kit fwrap row">
                <div class="ntb-col-5 pc-col-6">
                    <div class="card__image card__image--328">
                        <?php echo $image; ?>
                    </div>
                </div>
                <div class="ntb-col-7 pc-col-6">
                    <div class="card__title mt16">
                        <h2 class="reset f-vb"><?php echo $title; ?></h2>
                    </div>
                    <ul class="flex-kit reset-list c-gt mt16">
                        <?php if ( $cat_list ): ?>
                            <li class="card__cat f-san">
                        <span>
                            <?php echo $cat_list; ?>
                        </span>
                            </li>
                        <?php endif; ?>
                        <li class="card__date">
                        <span>
                             <i class="far fa-calendar-alt"></i>
                            <?php echo $date; ?>
                        </span>
                        </li>
                    </ul>
                    <div class="card__describe mt32">
                        <h4 class="reset"><?php echo $describe; ?></h4>
                    </div>
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
        $url= $args['url'];
        ?>
        <div class="card mb32">
            <a href="<?php echo $url; ?>" class="reset-link">
                <div class="card__image card__image--192 mb32">
                    <?php echo $image; ?>
                </div>
                <div class="card__title card__image--center">
                    <h2 class="f-vb"><?php echo $title; ?></h2>
                </div>
            </a>
        </div>
    <?php }
}




