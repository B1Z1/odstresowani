<?php 
$maps = $block['maps'];
$maps_data = array();
$map_object = new OdsMap();

foreach ( $maps as $key => $map ){
    $map_title = $map['map_title'];
    $markers_type = $map['markers_which'];
    $markers = array();
    $marker_parameters = array(
        'pulse' => $map['marker_pulse'] ? 'true':'false',
        'isnumeric' => $map['marker_isnumeric'] ? 'true':'false',
        'hasimage' => $map['marker_hasimage'] ? 'true':'false',
        'linedraw' => $map['marker_linedraw'] ? 'true':'false',
        'alert' => $map['marker_alert'] ? 'true':'false',
    );
    switch ( $markers_type ){
        case 'normal': 
            foreach ( $map['markers_normal'] as $key_2 => $marker ){
                array_push($markers, array(
                    'title' => $marker['marker_title'],
                    'description' => $marker['marker_description'],
                    'image' => wp_get_attachment_image_url($marker['marker_image'], 'full'),
                    'adress' => $marker['marker_adress'],
                    'link' => $marker['marker_link'],
                ));
            }
        break;
        case 'river':
            foreach ( $map['markers_river'] as $key_2 => $marker ){
                array_push($markers, array(
                    'title' => $marker['marker_title'],
                    'description' => $marker['marker_description'],
                    'phone' => $marker['marker_phone'],
                    'full_adress' => $marker['marker_full_adress'],
                    'adress' => $marker['marker_adress'],
                ));
            }
        break;
        case 'pack':
            $markers = $map_object->getData($map['markers_ready']);
        break;
    }
    array_push($maps_data, array(
        'id' => $key + 1,
        'type' => $markers_type,
        'title' => $map_title,
        'marker_parameters' => $marker_parameters,
        'markers' => $markers,
    ));
}



?>

<div class="maps">
    <?php foreach ( $maps_data as $data ): 
        $id = $data['id'];
        $title = $data['title'];
        $position = '';
        if ( count($maps_data) > 1 ){
            $position = $id === 1 ? 'left':'right';
        }
        else{
            $position = 'center';
        }
         ?>
        <div id="maps-<?php echo $id; ?>" class="maps__map maps__<?php echo $id; ?>">
            <h3 class="map-title map-title--<?php echo $position; ?> f-vb"><?php echo $title; ?></h3>
        </div>
    <?php endforeach; ?>
</div>

 
<div class="map-hidden">
    <?php foreach ( $maps_data as $data ): 
        $id = $data['id'];
        $type = $data['type']; ?>
        <div class="map-hidden__<?php echo $id; ?>">
        <?php foreach ( $data['markers'] as $marker ): 
            $title = $marker['title'];
            $description = $marker['description']; 
            $image = $marker['image'];  
            $phone = $marker['phone'];  
            $full_adress = $marker['full_adress'];  
            $adress = $marker['adress'];  
            $link = $marker['link']; ?>
            <div 
                data-type="<?php echo $type; ?>" 
                data-title="<?php echo $title; ?>" 
                data-description="<?php echo $description; ?>" 
                data-image="<?php echo $image; ?>"
                data-phone="<?php echo $phone; ?>"
                data-full_adress="<?php echo $full_adress; ?>"
                data-adress="<?php echo $adress; ?>"
                data-link="<?php echo $link; ?>"></div>
        <?php endforeach; ?>
        </div>
    <?php endforeach; ?>
</div>

<script>

window.addEventListener('load', function(){
    //Token for map
    mapboxgl.accessToken = 'pk.eyJ1IjoiaWx5YW1pc2hraW4iLCJhIjoiY2p1aWRrbDl2MTRrcDQ0cGdlMTN3ZWJ1cCJ9.tTVIhbBmMOhuH_Z5DKUN4A';
    <?php foreach ( $maps_data as $data ): 
        $id = $data['id'];
        $parameters = $data['marker_parameters'];
        ?>
    let map_<?php echo $id; ?> = new OdstresowaniMap({
        token: mapboxgl.accessToken,
        //Take data
        dataMarkers: {
            container: 'map-hidden__<?php echo $id; ?>',
        },
        //Map initialization
        map: new mapboxgl.Map({
                container: 'maps-<?php echo $id; ?>',
                style: 'mapbox://styles/ilyamishkin/cjuifjhya0m221fqkauhk7fyv',
                center: [20, 52],
                zoom: 6
            }),
        //Marker configuration
        marker: {
            el: 'div',
            classes: [
                'maps-marker'
            ],
            pulse: <?php echo $parameters['pulse']; ?>,
            isNumeric: <?php echo $parameters['isnumeric']; ?>,
            hasImage: <?php echo $parameters['hasimage']; ?>,
            alert: <?php echo $parameters['alert']; ?>
        },
        //PopupConfiguration
        popup: {
            classes: [
                'maps-popup'
            ]
        },
        lineDraw: <?php echo $parameters['linedraw']; ?>
    });
    <?php endforeach; ?>
    <?php if ( count($maps_data) > 1 ): ?>
        if ( map_1.dataMarkers !== null && map_2.dataMarkers !== null){
            let map = new mapboxgl.Compare(map_1.map, map_2.map, {});
        }
    <?php endif; ?>
});

</script>