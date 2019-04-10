<?php 
wp_reset_query();

$relax_items = new WP_Query(array( 'post_type' => 'relax' )); ?>
</div>

<div class="block block-relax">

	<div class="swiper-wrapper">
		<?php if ( $relax_items->have_posts() ): ?>
			<?php while ( $relax_items->have_posts() ): $relax_items->the_post();  
			$image_url = get_the_post_thumbnail_url();
			?>

				<div class="block-relax__slide swiper-slide clearfix" data-image="<?php echo $image_url; ?>" style="background-image: url(<?php echo $image_url; ?>)">
					<div class="tbl-col-8 pc-col-6 fr pl32 bck-gm">
						<div class="block-relax__content">
							<h2 class="block--texcen f-vb mt64"><?php echo the_title(); ?></h2>
							<?php echo the_content(); ?>
						</div>
					</div>
				</div>

			<?php endwhile; ?>
		<?php wp_reset_query(); endif; ?>
	</div>
	<div class="swiper-pagination block-relax__pagination"></div>

</div>
<script>
	var galleryTop = new Swiper('.block-relax', {
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			dynamicBullets: true,
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="block-relax__link ' + className + '"><object class="block-relax__logo" data="<?php echo get_template_directory_uri(); ?>/assets/img/Sygnet.svg" type="image/svg+xml"></object></span>';
			}
		},
	});
</script>

<div class="container header__triger">