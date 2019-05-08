<!-- Load Facebook SDK for JavaScript -->
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>

<div class="flex-kit fwrap jcc mt64 mb32">
    <div class="c-gs f-vb p">
        <a class="link-share reset-link mr16 fb-share-button" href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>"  data-href="<?php echo get_home_url(); ?>" target="_blank"><i class="fab fa-facebook-f mr16"></i> udostępnij</a>
    </div>
    <link rel="canonical" href="<?php the_permalink(); ?>">
    <div class="c-gs f-vb p">
        <a class="link-share reset-link twitter-share-button ml16" target="_blank" href="https://twitter.com/intent/tweet?text=<?php wp_strip_all_tags(the_title()); ?> <?php the_permalink(); ?>"><i class="fab fa-twitter mr16"></i> udostępnij</a>
    </div>
</div>
