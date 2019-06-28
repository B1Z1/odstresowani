<?php 
$gallery = $block['gallery'];
$gapsClasses = GeneralOptions::getAllGapsFromArray($block); ?>
?>

</div>

<div class="l-gallery-image <?php echo $gapsClasses; ?>">
    
    <!-- : Upper Swiper Start : -->
    <div class="l-gallery-image__top">

        <!-- : Buttons Start : -->
        <div class="l-gallery-image__next"><img src="<?php echo get_template_directory_uri() ?>/assets/img/arrows/next.svg" alt="" class="c-image"></div>
        <div class="l-gallery-image__prev"><img src="<?php echo get_template_directory_uri() ?>/assets/img/arrows/back.svg" alt="" class="c-image"></div>
        <!-- : Buttons End : -->

        <div class="swiper-wrapper">
            <?php foreach ( $gallery as $element ): 
                $image = wp_get_attachment_image_url($element['gallery_image'], 'full');
                ?>
                <div class="swiper-slide">
                    <img src="<?php echo $image; ?>" alt="Operacja Rzeka" class="c-image">
                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <!-- : Upper Swiper End : -->

    <!-- : Bottom Swiper Start : -->
    <div class="l-gallery-image__bottom mt16">
        <div class="swiper-wrapper">
            <?php foreach ( $gallery as $element ): 
                $image = wp_get_attachment_image_url($element['gallery_image'], 'full');
                ?>
                <div class="swiper-slide l-gallery-image__thumb">
                    <img src="<?php echo $image; ?>" alt="Operacja Rzeka" class="c-image">
                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <!-- : Bottom Swiper End : -->

    <script>
    var galleryThumbs = new Swiper('.l-gallery-image__bottom', {
        spaceBetween: 16,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        allowTouchMove: false,
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
            425: {
                slidesPerView: 2,
            }
        }
    });
    var galleryTop = new Swiper('.l-gallery-image__top', {
        spaceBetween: 16,
        allowTouchMove: false,
        navigation: {
            nextEl: '.l-gallery-image__next',
            prevEl: '.l-gallery-image__prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
    </script>

</div>

<div class="l-Container">