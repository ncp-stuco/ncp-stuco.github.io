!function(t){t.fn.easyTabs=function(e){var a=jQuery.extend({fadeSpeed:"fast",defaultContent:1,activeClass:"active"},e);t(this).each(function(){function e(){t(s+" .easytabs-tab-content").hide()}function n(n){e(),t(s+" .tabs li").removeClass(a.activeClass),t(s+" .tabs li a[href=#"+n+"]").closest("li").addClass(a.activeClass),"none"!=a.fadeSpeed?t(s+" #"+n).fadeIn(a.fadeSpeed):t(s+" #"+n).show()}var s="#"+this.id;if(""==a.defaultContent&&(a.defaultContent=1),"number"==typeof a.defaultContent)f=t(s+" .tabs li:eq("+(a.defaultContent-1)+") a").attr("href").substr(1);else var f=a.defaultContent;t(s+" .tabs li a").each(function(){var e=t(this).attr("href").substr(1);t("#"+e).addClass("easytabs-tab-content")}),e(),n(f),t(s+" .tabs li").click(function(){return n(t(this).find("a").attr("href").substr(1)),!1})})}}(jQuery);