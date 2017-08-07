$(function () {

    function initMap() {

        var location = new google.maps.LatLng(19.4000817,-99.1725701);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 18,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = '../assets/InMed/marker.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

        var contentString = '<div class="info-window">' +
                '<h3>Hospital Ángeles México</h3>' +
                '<div class="info-content">' +
                '<a href="https://www.google.com.mx/maps/dir//Hospital+Ángeles+México,+Escandón+I+Secc,+11800+Ciudad+de+México,+CDMX/@19.4000817,-99.1725701,15z/data=!4m15!1m6!3m5!1s0x0:0xe7f4b1a64c52c9bd!2sHospital+Ángeles+México!8m2!3d19.4000817!4d-99.1725701!4m7!1m0!1m5!1m1!1s0x85d1ff6c2510d38b:0xe7f4b1a64c52c9bd!2m2!1d-99.1725701!2d19.4000817">Indicaciones</a>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });


    }

    google.maps.event.addDomListener(window, 'load', initMap);
});
