---
title: Solent zimą
layout: post
category: relacje
keywords: żeglowanie, zima, Solent 
desc: Pierwsze weekendowe rejsy SetSail - Solent zima 2013
---

<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>

Treść...

<div class="map_canvas" id="solent1"></div>

<div class="map_canvas" id="solent2"></div>

<div class="map_canvas" id="solent3"></div>

<div class="map_canvas" id="solent4"></div>


<script>
function loadKmlLayer(src, map) 
{
  var kmlLayer = new google.maps.KmlLayer(src, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
}

function initMap(url, id) 
{
    var mapDiv = document.getElementById(id);
    var map = new google.maps.Map(mapDiv, {
      mapTypeId: google.maps.MapTypeId.TERRAIN
    });        
    loadKmlLayer(url, map);
}
function initialize() 
{    
    initMap("http://stryjski.net/tracks/2013-11-08-solent.kmz", 'solent1');
    initMap("http://stryjski.net/tracks/2013-11-09-solent.kmz", 'solent2');
    initMap("http://stryjski.net/tracks/2013-12-07-solent.kmz", 'solent3');
    initMap("http://stryjski.net/tracks/2013-12-08-solent.kmz", 'solent4');
}

google.maps.event.addDomListener(window, 'load', initialize);
</script>