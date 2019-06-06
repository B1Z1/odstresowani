<?php 
/**
 * 
 * Template name: Relax
 * 
 */
?>


<script src="<?php echo get_template_directory_uri(); ?>/assets/lib/Axios/axios.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/updated/map-relax.js"></script>
<script>
    axios.get('http://odstresowani.portal.local.pl/wp-json/wp/v2/markers')
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{console.log(error)});
</script>