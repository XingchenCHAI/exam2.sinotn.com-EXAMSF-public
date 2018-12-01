(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-8').attr('src', (dpi>1) ? 'images/wechatimg89-1870.jpeg' : 'images/wechatimg89-935.jpeg');
$('.js-9').attr('src', (dpi>1) ? 'images/wechatimg90-1810.jpeg' : 'images/wechatimg90-905.jpeg');
$('.js-10').attr('src', (dpi>1) ? 'images/wechatimg91-1808.jpeg' : 'images/wechatimg91-904.jpeg');
$('.js-11').attr('src', (dpi>1) ? 'images/wechatimg92-1806.jpeg' : 'images/wechatimg92-903.jpeg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});