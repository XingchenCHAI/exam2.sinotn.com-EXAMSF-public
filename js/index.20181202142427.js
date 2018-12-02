(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/wechatimg81-1092.jpeg' : 'images/wechatimg81-546.jpeg');
$('.js-2').attr('src', (dpi>1) ? 'images/wechatimg85-1110.jpeg' : 'images/wechatimg85-555.jpeg');
$('.js-3').attr('src', (dpi>1) ? 'images/wechatimg84-756.jpeg' : 'images/wechatimg84-378.jpeg');
$('.js-4').attr('src', (dpi>1) ? 'images/wechatimg86-676.jpeg' : 'images/wechatimg86-338.jpeg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('form').h5Validate();
});