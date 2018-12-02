(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-66').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-67').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-68').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-69').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-70').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-71').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-72').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-73').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-74').attr('src', (dpi>1) ? 'images/wechatimg102-1512.jpeg' : 'images/wechatimg102-756.jpeg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});