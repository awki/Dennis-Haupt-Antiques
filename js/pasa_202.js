'use strict';
var ob_menu = null;
var ob_send = null;
var ob_gmap = null;
function pasa_start (snd1, snd2, lat, lon, fmt) {
var yz = 900;
ob_menu = new Menu(yz, 20, fmt);
if (snd1 != null && snd2 != null)
ob_send = new Send('div6', snd1, snd2);
ob_gmap = gmap_init(lat, lon); }
function gmap_init (lat, lon) {
var map = null;
var location = new google.maps.LatLng(lat, lon);
var mapOptions = {
zoom: 13,
center: location,
scrollwheel: false,
mapTypeId: google.maps.MapTypeId.ROADMAP }
map = new google.maps.Map(document.getElementById("mapcanvas"), mapOptions);
var marker = new google.maps.Marker( {
position: location,
map: map,
title: 'Dennis Haupt Antiques'
} );
return(map); }
