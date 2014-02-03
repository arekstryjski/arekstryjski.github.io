---
title: Solent zimą (2)
layout: post
category: relacje
keywords: żeglowanie, zima, Solent, Wight
desc: Rejs szkoleniowy SetSail na Solent, luty 2014.
---

Trasa
------
<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
<div class="map_canvas" id="solent1"></div>
*sobota, 1 luty 2014*

<div class="map_canvas" id="solent2"></div>
*niedziela, 2 luty 2014*




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
    initMap("http://stryjski.net/tracks/2014-02-01-solent.kml", 'solent1');
    initMap("http://stryjski.net/tracks/2014-02-02-solent.kml", 'solent2');
}
google.maps.event.addDomListener(window, 'load', initialize);
</script>