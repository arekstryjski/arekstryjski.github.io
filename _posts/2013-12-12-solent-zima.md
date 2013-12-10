---
title: Zimowe Żeglowanie
layout: post
category: relacje
keywords: żeglowanie, zima, Solent 
desc: Pierwsze weekendowe rejsy SetSail - Solent zima 2013
---

<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>

Treść...

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
function initialize() 
{
    var solent4 = document.getElementById('solent4');
    var map4 = new google.maps.Map(solent4, {
      center: new google.maps.LatLng(50.7017, -1.2868),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    });        
    loadKmlLayer("http://0.0.0.0:4000/tracks/2013-12-08-solent.kmz", map4);
}

google.maps.event.addDomListener(window, 'load', initialize);
</script>