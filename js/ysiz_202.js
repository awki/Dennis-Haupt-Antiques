'use strict';
function getyz (id) {
var ix;
var id;
var ele
var rec;
ele = document.getElementById(id);
rec = ele.getBoundingClientRect();
return(rec.height); }
function setyz (yz) {
var ele;
ele = document.getElementById('rt00');
ele.style.height = yz+'px';
ele = document.getElementById('id00');
ele.style.height = yz+'px';
ele = document.getElementById('mn00');
ele.style.height = yz+'px'; }
