'use strict';
var ob_menu = null;
var ob_send = null;
function cont_start (snd1, snd2, fmt) {
var yz = 900;
ob_menu = new Menu(yz, 20, fmt);
if (snd1 != null && snd2 != null)
ob_send = new Send('div6', snd1, snd2); }
