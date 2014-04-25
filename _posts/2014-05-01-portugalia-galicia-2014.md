---
title: portugalia-galicia-2014
layout: post
category: relacje
keywords: żeglowanie, rejs, Portugalia, Galicia, Hiszpania
desc: Relacja z rejsu z Lizbona w Portugalii do A Coruna w Hiszpańskiej Galicii - kwiecień 2014.
---

Trasa
------
<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>

<div class="map_canvas" id="pt-ga-1"></div>
*10.04 - 11.04.2014*

<div class="map_canvas" id="pt-ga-2"></div>
*13.04.2014*

<div class="map_canvas" id="pt-ga-3"></div>
*14.042014*

<div class="map_canvas" id="pt-ga-4"></div>
*15.04.2014*

<div class="map_canvas" id="pt-ga-5"></div>
*17.04 - 18.04.2014*




<script>
function loadKmlLayer(src, map) {
  var kmlLayer = new google.maps.KmlLayer(src, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
}
function initMap(url, id) {
    var mapDiv = document.getElementById(id);
    var map = new google.maps.Map(mapDiv, {
      mapTypeId: google.maps.MapTypeId.TERRAIN
    });        
    loadKmlLayer(url, map);
}
function initialize() {    
    initMap("http://stryjski.net/tracks/2014-04-10-portugal-galicia.kml", 'pt-ga-1');
    initMap("http://stryjski.net/tracks/2014-04-13-portugal-galicia.kml", 'pt-ga-2');
    initMap("http://stryjski.net/tracks/2014-04-14-portugal-galicia.kml", 'pt-ga-3');
    initMap("http://stryjski.net/tracks/2014-04-15-portugal-galicia.kml", 'pt-ga-4');
    initMap("http://stryjski.net/tracks/2014-04-17-portugal-galicia.kml", 'pt-ga-5');
}
google.maps.event.addDomListener(window, 'load', initialize);
</script>