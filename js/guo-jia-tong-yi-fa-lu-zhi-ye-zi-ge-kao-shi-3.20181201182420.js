(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-12').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-13').attr('src', (dpi>1) ? 'images/wechatimg80-16-2.png' : 'images/wechatimg80-8-2.png');
$('.js-14').attr('src', (dpi>1) ? 'images/wechatimg80-16-3.png' : 'images/wechatimg80-8-3.png');
$('.js-15').attr('src', (dpi>1) ? 'images/wechatimg80-16-4.png' : 'images/wechatimg80-8-4.png');
$('.js-16').attr('src', (dpi>1) ? 'images/wechatimg80-16-5.png' : 'images/wechatimg80-8-5.png');
$('.js-17').attr('src', (dpi>1) ? 'images/wechatimg80-16-6.png' : 'images/wechatimg80-8-6.png');
$('.js-18').attr('src', (dpi>1) ? 'images/wechatimg80-16-7.png' : 'images/wechatimg80-8-7.png');
$('.js-19').attr('src', (dpi>1) ? 'images/wechatimg80-16-8.png' : 'images/wechatimg80-8-8.png');
$('.js-20').attr('src', (dpi>1) ? 'images/wechatimg96-1512.jpeg' : 'images/wechatimg96-756.jpeg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});