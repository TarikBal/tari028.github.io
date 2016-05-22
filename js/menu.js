$('.c-toggle').click(function(){
	 if ($("#c-button--slide-top").hasClass("c-closethis")) {
		$(".c-menu__close").trigger( "click" );

	 }
	 else{
		$("#c-button--slide-top").trigger( "click" );

	 }
});
(function(window){'use strict';function extend(a,b){for(var key in b){if(b.hasOwnProperty(key)){a[key]=b[key]}}
return a}
function each(collection,callback){for(var i=0;i<collection.length;i++){var item=collection[i];callback(item)}}
function Menu(options){this.options=extend({},this.options);extend(this.options,options);this._init()}
Menu.prototype.options={wrapper:'#o-wrapper',type:'slide-left',menuOpenerClass:'.c-button',maskId:'#c-mask'};Menu.prototype._init=function(){this.body=document.body;this.wrapper=document.querySelector(this.options.wrapper);this.mask=document.querySelector(this.options.maskId);this.menu=document.querySelector('#c-menu--'+this.options.type);this.closeBtn=this.menu.querySelector('.c-menu__close');this.menuOpeners=document.querySelectorAll(this.options.menuOpenerClass);this._initEvents()};Menu.prototype._initEvents=function(){this.closeBtn.addEventListener('click',function(e){e.preventDefault();this.close()}.bind(this));this.mask.addEventListener('click',function(e){e.preventDefault();this.close()}.bind(this));};Menu.prototype.open=function(){this.body.classList.add('has-active-menu');$( "#c-button--slide-top" ).addClass( "c-closethis" );
$( ".glyphicon" ).addClass( "rotate" );document.getElementById("bodycon").classList.add('has-'+this.options.type);this.menu.classList.add('is-active');this.mask.classList.add('is-active');this.disableMenuOpeners()};Menu.prototype.close=function(){this.body.classList.remove('has-active-menu');$( "#c-button--slide-top" ).removeClass( "c-closethis" );
$( ".glyphicon" ).removeClass( "rotate" );document.getElementById("bodycon").classList.remove('has-'+this.options.type);this.menu.classList.remove('is-active');this.mask.classList.remove('is-active');this.enableMenuOpeners()};Menu.prototype.disableMenuOpeners=function(){each(this.menuOpeners,function(item){item.disabled=!0})};Menu.prototype.enableMenuOpeners=function(){each(this.menuOpeners,function(item){item.disabled=!1})};window.Menu=Menu})(window);var slidetop=new Menu({wrapper:'#o-wrapper',type:'slide-top',menuOpenerClass:'.menu-icon-container',maskId:'#c-mask'});document.getElementById("c-button--slide-top").addEventListener("click",function(e){e.preventDefault;slidetop.open()});var id=new Date().getUTCMilliseconds();$(window).scroll(function(){var sc=$(window).scrollTop()
if(sc>0){$("#menu").addClass("slimm")
$("#menuspecial").addClass("slimm")
$("#logo2").addClass("slimm")
$("#menulist").addClass("slimm")
$("#menulistspecial").addClass("slimm")
$(".menu-icon-container").addClass("slimm")}else{$("#menu").removeClass("slimm")
$("#menuspecial").removeClass("slimm")
$("#logo2").removeClass("slimm")
$("#menulist").removeClass("slimm")
$("#menulistspecial").removeClass("slimm")
$(".menu-icon-container").removeClass("slimm")}})
