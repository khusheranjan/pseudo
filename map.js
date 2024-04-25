
var map = L.map('map').setView([17.527053, 78.536904], 20); // Initialize the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // Add OpenStreetMap tiles to the map

var selectedCoordinates = null;

/*map.on('click', function(e) {
    selectedCoordinates = e.latlng;
    console.log(selectedCoordinates); // Display the selected coordinates in the console

    var lat = selectedCoordinates.lat;
    var lon = selectedCoordinates.lng;
    var apiEndpoint = 'https://api.airvisual.com/v2/nearest_city';
    var apiKey = 'be2eccdc-ec2a-4cf1-b48c-964ce5922ae5'; // Replace with your IQAir API key
    var parameters = {
        lat: lat,
        lon: lon,
        key: apiKey
    };

    fetch(apiEndpoint + '?' + new URLSearchParams(parameters))
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            var airQuality = data.data;
            if (airQuality) {
                console.log('Air Quality Index: ' + airQuality.current.pollution.aqius);
            }
            var Temperature = data.data;
            if (Temperature) {
                console.log('Temperature: ' + Temperature.current.weather.tp);
            }
            
        })
        .catch(error => console.error('Error:', error));
});
*/

map.on('click', function(e) {
    selectedCoordinates = e.latlng;
    console.log(selectedCoordinates); // Display the selected coordinates in the console

    var lat = selectedCoordinates.lat;
    var lon = selectedCoordinates.lng;
    var apiEndpoint = `http://api.geonames.org/findNearbyPlaceNameJSON?formatted=true&lat=${lat}&lng=${lon}&username=khusheranjan&style=full`;
    
    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.geonames && data.geonames.length > 0) {
                var population = data.geonames[0].population;
                console.log('Population: ' + population);
            }
        })
        .catch(error => console.error('Error:', error));
});

