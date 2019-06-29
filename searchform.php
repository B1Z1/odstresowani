<form role="search" method="get" class="m-SearchForm" action="<?php echo esc_url( home_url( '/' ) ); ?>">
    <input type="text" class="m-SearchForm__input" placeholder="Wyszukaj..." value="<?php echo get_search_query(); ?>" name="s" required>
    <button type="submit" class="m-SearchForm__button" value="<?php echo esc_attr_x( 'Search', 'submit button' ); ?>"><i class="fas fa-search"></i></button>
</form>