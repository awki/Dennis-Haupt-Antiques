'use strict';
var SMDPTH = 0;
var SMDPIX = 1;
var SMDDSC = 2;
function social (si) {
var pag = '';
var org = '';
var pth = '';
var pho = '';
var dsc = '';
var url = '';
var win = null;
pth = smd[SMDPTH]; 
pho = smd[SMDPIX]; 
dsc = smd[SMDDSC]; 
if (pth == 'null' && pho == 'null' && dsc == 'null')
return;
if (dsc == 'null')
dsc = 'Dennis Haupt Antiques, craftsman furniture, fine art, artifacts, and antiques.'
pag = window.location.href;
org = window.location.origin;
if (si == 0)  {
url += 'https://www.facebook.com/sharer/sharer.php?';
url += 'u='+pag; }
else if (si == 1)  {
url += 'https://twitter.com/intent/tweet?';
url += 'text=';
url += encodeURIComponent(dsc+' '+pag); }
else if (si == 2)  {
url += 'https://pinterest.com/pin/create/button/?';
url += 'url='+encodeURI(pag);
if (pho != 'null')
url += '&'+'media='+encodeURI(org+pth+pho);
url += '&'+'description='+encodeURI(dsc); }
else if (si == 3)  {
url += 'https://plus.google.com/share?';
url += 'url='+pag; }
if (0) {
win = window.open(url, '_blank', 'Height=600, Width=600');
win.focus(); }
else {
win = window.open(url, '_self'); } }
function smf2 (se, si) {
var sm = document.getElementById('sm'+si);
var sib = document.getElementById('sm'+si+'b');
if (si > 3)
return;
if (se == 0)  {
sib.style.opacity = '1.0';
sm.style.cursor = 'default'; }
else if (se == 1) {
sib.style.opacity = '0.75';
sm.style.cursor = 'pointer'; }
else if (se == 2 && si < 4) {
social(si); } }
function bkf (en, bn) {
if (en != 2)
return;
if (bn == 0) {
window.history.back(); }
else if (bn == 1) {
window.history.forward(); } }
function aro (en, bn) {
var ele = document.getElementById('aid'+bn);
if (en == 0) {
ele.style.opacity = '0.8'; }
else if (en == 1) {
ele.style.opacity = '1.0'; }
else if (en == 2) {
if (bn == 0) {
window.history.back(); }
else if (bn == 1) {
window.history.forward(); } } }
