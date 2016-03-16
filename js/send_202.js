'use strict';
function Send (div, da1, da2) {
this.div = div;
this.da1 = da1;
this.da2 = da2;
this.ele1 = null;
this.ele2 = null;
this.dxele = [];
this.ifn1 = './img/ref1_icon_021g1.png'; 
this.ifn2 = './img/ref1_icon_021g2.png'; 
this.k3n = 43;
this.k3d = 'ZQRkdTapuS4ysUParLwGwrzvl9Y/VG6hOkiAJHb0xNRqMQE+eIHCrUmocFWItfDr51gXeK73Ln8j2B=C';
this.create(); }
Send.prototype.destroy = function () {
var div;
var ele;
div = document.getElementById(this.div);
while ((ele = this.d6ele.pop()) != null)
div.removeChild(ele);
return(false); }
Send.prototype.create = function () {
var xo;
var yo;
var img;
var div;
var divx;
var xz = 64; 
var yz = 55;
divx = document.getElementById(this.div);
xo = 0;
yo = 0;
div = document.createElement('div');
div.id = 'divxa';
div.setAttribute('onclick','send_fnc()');
div.setAttribute('onmouseover','send_ovr()');
div.setAttribute('onmouseout','send_out()');
div.style.position = 'absolute';
div.style.top = yo+'px';
div.style.left = xo+'px';
div.style.width = xz+'px';
div.style.height = yz+'px';
div.style.margin = '0px';
div.style.border = 'none';
div.style.padding = '0px';
div.style.cursor = 'pointer';
img = document.createElement('img');
img.id = 'ifn1';
img.src = this.ifn1;
img.setAttribute("alt", "Icon 1");
img.setAttribute('width', xz);
img.setAttribute('height', yz);
img.style.opacity = '1.0';
img.style.position = 'absolute';
img.style.top = 0+'px';
img.style.left = 0+'px';
img.style.opacity = '1.0';
div.appendChild(img);
img = document.createElement('img');
img.id = 'ifn2';
img.src = this.ifn2;
img.setAttribute("alt", "Icon 2");
img.setAttribute('width', xz);
img.setAttribute('height', yz);
img.style.opacity = '1.0';
img.style.position = 'absolute';
img.style.top = 0+'px';
img.style.left = 0+'px';
img.style.opacity = '0.0';
div.appendChild(img);
divx.appendChild(div);
this.dxele.push(div);
xo = 60;
yo = 30;
var div = document.createElement("div");
div.id = 'txtxa';
div.setAttribute('onclick','send_fnc()');
div.setAttribute('onmouseover','send_ovr()');
div.setAttribute('onmouseout','send_out()');
div.style.position = 'absolute';
div.style.top = yo+'px';
div.style.left = xo+'px';
div.style.margin = '0px';
div.style.border = 'none';
div.style.padding = '0px';
div.style.cursor = 'pointer';
div.style.fontSize = '16px';
div.style.textAlign = 'left';
div.style.color = '#000000';
div.style.textDecoration = 'underline';
div.innerHTML = window.atob(this.k3s(this.da1));
divx.appendChild(div);
this.dxele.push(div); }
Send.prototype.k3s = function (da) {
var i;
var tx = '';
i = 0;
while (i < da.length)
tx += this.k3d.charAt(da.charCodeAt(i++) - this.k3n);
return(tx); }
Send.prototype.fnc = function () {
window.location = window.atob(this.k3s(this.da2));
return(false); }
function send_fnc () {
ob_send.fnc(); }
function send_out () {
var ele;
ele = document.getElementById('ifn2');
ele.style.opacity = '0.0';
return(false); }
function send_ovr () {
var ele;
ele = document.getElementById('ifn2');
ele.style.opacity = '1.0';
return(false); }
