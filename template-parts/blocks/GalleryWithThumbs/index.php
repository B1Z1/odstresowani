<?php 
$gallery = $block['gallery'];
$gapClasses = GeneralOptions::getAllGapsFromArray($block); ?>
?>

</div>

<div class="m-GalleryWithThumbs <?php echo $gapClasses; ?>">
    
    <!-- : Upper Swiper Start : -->
    <div class="m-GalleryWithThumbs__top">
        <!-- : Buttons Start : -->
        <div class="m-GalleryWithThumbs__next"><img src="<?php echo get_template_directory_uri() ?>/assets/img/arrows/next.svg" alt="Następny" class="c-Image"></div>
        <div class="m-GalleryWithThumbs__prev"><img src="<?php echo get_template_directory_uri() ?>/assets/img/arrows/back.svg" alt="Zeszły" class="c-Image"></div>
        <!-- : Buttons End : -->

        <div class="swiper-wrapper">
            <?php foreach ( $gallery as $element ): 
                $image = wp_get_attachment_image_url($element['gallery_image'], 'full');
                ?>
                <div class="swiper-slide">
                    <img src="<?php echo $image; ?>" alt="Operacja Rzeka" class="c-Image">
                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <!-- : Upper Swiper End : -->

    <!-- : Bottom Swiper Start : -->
    <div class="m-GalleryWithThumbs__bottom mt16">
        <div class="swiper-wrapper">
            <?php foreach ( $gallery as $element ): 
                $image = wp_get_attachment_image_url($element['gallery_image'], 'full');
                ?>
                <div class="swiper-slide m-GalleryWithThumbs__thumb">
                    <img src="<?php echo $image; ?>" alt="Operacja Rzeka" class="c-Image">
                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <!-- : Bottom Swiper End : -->

    <script>
    var galleryThumbs = new Swiper('.m-GalleryWithThumbs__bottom', {
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
    var galleryTop = new Swiper('.m-GalleryWithThumbs__top', {
        spaceBetween: 16,
        allowTouchMove: false,
        navigation: {
            nextEl: '.m-GalleryWithThumbs__next',
            prevEl: '.m-GalleryWithThumbs__prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
    </script>

</div>

<div class="l-Container">