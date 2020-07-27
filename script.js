function initMap() {
    // generate map
    var options = {
        zoom: 12,
        center: {
            lat: 10.8231,
            lng: 106.6297
        }
    };
    var map = new google.maps.Map(document.getElementById('map'), options);

    // listen for click on map
    google.maps.event.addListener(map, 'click', function(event) {
        addMarkers({
            coords: event.latLng
        })
    })

    // add markers
    function addMarkers(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: props.iconImage,
            title: 'Tớ là Trúc'
        });

        // generate click event 
        var infoWindow = new google.maps.InfoWindow({
            content: '<h1>' + props.content + '</h1>'
        });
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    }

    // save many infos into array
    var markers = [{
        coords: {
            lat: 10.811919,
            lng: 106.679920
        },
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: 'Tớ là Trúc'
    }];

    // loop for array
    for (var i = 0; i < markers.length; i++) {
        addMarkers(markers[i]);
    }
}