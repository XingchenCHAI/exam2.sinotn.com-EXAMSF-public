(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-30').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-31').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-32').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-33').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-34').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-35').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-36').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-37').attr('src', (dpi>1) ? 'images/wechatimg80-16.png' : 'images/wechatimg80-8.png');
$('.js-38').attr('src', (dpi>1) ? 'images/wechatimg98-1516.jpeg' : 'images/wechatimg98-758.jpeg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});