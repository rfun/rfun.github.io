$(document).ready(function() {
    $('.slider1').slider({ min: 0, max: 20, animate: true, value: 4 });
    $('.slider2').slider({ min: 0, max: 100, animate: true, value: 35 });
    $('.slider3').slider({ min: 0, max: 10, animate: true, value: 5 });

    $('.slider1 .slider2 .slider3').slider('pips');
    $('.slider1 .slider2 .slider3').slider('float');

});

function initMap() {
    var map;
    var style = [{
        stylers: [
            { saturation: "-100" },
            { lightness: "20" }
        ]
    }, {
        featureType: "transit",
        stylers: [
            { visibility: "off" }
        ]
    }, {
        featureType: "road",
        stylers: [
            { lightness: "50" },
            { visibility: "on" }
        ]
    }, {
        featureType: "landscape",
        stylers: [
            { lightness: "50" }
        ]
    }]
    var options = {
        zoom: 15,
        center: new google.maps.LatLng(40.232873, -111.659274),
        mapTypeId: 'roadmap',
        disableDefaultUI: false
    };

    map = new google.maps.Map($('#map')[0], options);
    map.setOptions({
        styles: style
    });
};