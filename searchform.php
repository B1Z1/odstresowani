<form role="search" method="get" class="searchform mt8" action="<?php echo esc_url( home_url( '/' ) ); ?>">
    <input type="text" class="searchform__input" placeholder="Wyszukaj..." value="<?php echo get_search_query(); ?>" name="s" required>
    <button type="submit" class="searchform__button" value="<?php echo esc_attr_x( 'Search', 'submit button' ); ?>"><i class="fas fa-search"></i></button>
</form>