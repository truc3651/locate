function initMap() {
    x = navigator.geolocation;
    x.getCurrentPosition(success, failer);

    function success(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var coords = new google.maps.LatLng(lat, lng);

        var options = {
            zoom: 15,
            center: coords
        }

        var map = new google.maps.Map(document.getElementById('map'), options);
        var marker = new google.maps.Marker({
            position: coords,
            map: map
        });
    }

    function failer() {

    }
}