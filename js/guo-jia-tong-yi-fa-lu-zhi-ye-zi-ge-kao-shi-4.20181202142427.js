(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-21').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-22').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-23').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-24').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-25').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-26').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-27').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-28').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-29').attr('src', (dpi>1) ? 'images/wechatimg97-1516.jpeg' : 'images/wechatimg97-758.jpeg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});