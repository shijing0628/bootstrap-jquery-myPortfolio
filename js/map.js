// Initialize and add the map
function initMap() {
 // The location of winnipeg
 var winnipeg = { lat: 49.895077, lng: -97.138451 };
 // The map, centered at winnipeg
 var map = new google.maps.Map(
  document.getElementById('map'), { zoom: 4, center: winnipeg });
 // The marker, positioned at winnipeg
 var marker = new google.maps.Marker({ position: winnipeg, map: map });
}