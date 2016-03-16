'use strict';
function zoom (pct) {
document.body.style.zoom = pct+'%'; }
function zsize () {
var xz = window.innerWidth;
var yz = window.innerHeight;
var pr = window.devicePixelRatio;
var zm = 32000 / (pr * xz);
return(zm); }
var ob_menu = null;
var ob_send = null;
function home_start (snd1, snd2, fmt) {
var yz;
yz = getyz('bt00') + 101 + 100;
if (yz < 960)
yz = 960;
setyz(yz);
ob_menu = new Menu(yz, 40, fmt);
if (snd1 != null && snd2 != null)
ob_send = new Send('div6', snd1, snd2); }
