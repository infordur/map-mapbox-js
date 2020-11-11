mapboxgl.accessToken =
    "pk.eyJ1IjoieWFjaWMiLCJhIjoiY2toZG1lcmk2MG1mMjJxbjFidHpmZzN6MCJ9.ULfgeKGqMVOjEClEd4YAvg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
});

function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    setupMap([-4.784996, 37.8895728]);
}

function setupMap(latLng) {
    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: latLng,
        zoom: 15,
    });

    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: "metric",
    });

    map.addControl(directions, "top-left");

    var language = new MapboxLanguage({
        defaultLanguage: "es",
    });
    map.addControl(language);
}
