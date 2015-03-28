(function (define)
{

	"use strict";

	define([], function ()
	{

		//////////     MOBILE CHECK    //////////
		var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
		var android = /mobile|android/i.test (navigator.userAgent);

		if(iOS || android){
			$("html").addClass("isMobile");
			if(iOS) { $(".form-control").css("-webkit-appearance","caret"); }
			$("select.input-sm,select.input-lg ").css("line-height","1.3");
		}


		var toResize;
		$(window).resize(function (e)
		{
			clearTimeout(toResize);
			toResize = setTimeout(toCenter(), 500);

		});

		//////////     COCKPIT COLOR    //////////
		var cockpitColor=({
			"primary":"#0090d9",
			"info":"#B5D1D8",
			"success":"#2ECC71",
			"warning":"#FFCC33",
			"danger":"#E15258",
			"inverse":"#62707D",
			"theme":"#f35958",
			"theme-inverse":"#e26826",
			"palevioletred":"#372b32" ,
			"green":"#99CC00",
			"lightseagreen":"#1ABC9B",
			"purple":"#736086",
			"darkorange":"#f9ba46",
			"pink":"#d13a7a"
		});
		$.inColor= function(value, obj) {
			var foundVal;
			$.each(obj, function(key, val) {
				if (value === key) {
					foundVal =  val;
				}
			});
			return foundVal;
		};
		$.fillColor= function(obj) {
			var inColor=$.inColor(obj.data("color") || obj.data("toolscolor") || obj.data("counter-color") , cockpitColor);
			var codeColor= inColor || obj.data("color") || obj.data("toolscolor") || obj.data("counter-color") ;
			return codeColor;
		};
		$.rgbaColor=function( hex, opacity) {
			var bigint = parseInt(hex.replace("#",""), 16),
				r = (bigint >> 16) & 255,
				g = (bigint >> 8) & 255,
				b = bigint & 255;
			if(opacity || opacity<=1){
				return "rgba("+r + "," + g + "," + b+","+ ( opacity || 1 )+")";
			}else{
				return "rgb("+r + "," + g + "," + b+")";
			}
		};





		var Cnotific8 = function ()
			{
				//Demo notification guide
				setTimeout(function ()
				{
					$.notific8('Hi , you can use Username : <strong>jules</strong> and Password: <strong>jules123</strong> to  access account.', { sticky: false, horizontalEdge: "top", theme: "inverse", heading: "LOGIN DEMO", life:10000})
				}, 1000);


			},

			toCenter = function ()
			{
				var accWall = $(".account-wall");
				var mainH = $("#main").outerHeight();
				var accountH = accWall.outerHeight();
				var marginT = (mainH - accountH) / 2;
				if (marginT > 30) {
					accWall.css("margin-top", marginT - 15);
				} else {
					accWall.css("margin-top", 30);
				}
			},

			//////////     ICHECK     //////////
			createiCheck = function ()
			{


				$('.iCheck').each(function (i)
				{
					var data = $(this).data() , input = $(this).find("input") , li = $(this).find("li") , index = "cp" + i , insert_text, iCheckColor = [ "black", "red", "green", "blue", "aero", "grey", "orange", "yellow", "pink", "purple"], callCheck = data.style || "flat";
					if (data.color && data.style !== "polaris" && data.style !== "futurico") {
						var hasColor = $.inArray(data.color, iCheckColor);
						if (hasColor != -1 && hasColor < iCheckColor.length) {
							callCheck = callCheck + "-" + data.color;
						}
					}
					input.each(function (i)
					{
						var self = $(this), label = $(this).next(), label_text = label.html();
						self.attr("id", "iCheck-" + index + "-" + i);
						if (data.style == "line") {
							insert_text = '<div class="icheck_line-icon"></div><span>' + label_text + '</span>';
							label.remove();
							self.iCheck({ checkboxClass: 'icheckbox_' + callCheck, radioClass: 'iradio_' + callCheck, insert: insert_text  });
						} else {
							label.attr("for", "iCheck-" + index + "-" + i);
						}
					});
					if (data.style !== "line") {
						input.iCheck({ checkboxClass: 'icheckbox_' + callCheck, radioClass: 'iradio_' + callCheck });
					} else {
						li.addClass("line");
					}
				});
			},
			isCheckingUserLogin = function(isCheking)
			{
				var main = $("#main");

				if(isCheking == 'startChecking') {
					//scroll to top
					main.animate({
						scrollTop: 0
					}, 500);
					main.addClass("slideDown");
				} else if (isCheking == 'errorChecking') {

					setTimeout(function () { main.removeClass("slideDown") }, 3000);

				}
			},

			initMenu = function(){

				var _body = $("body");
				_body.removeClass("full-lg").addClass("leftMenu nav-collapse");


				// Menu Left
				var navMenu=$("nav#menu");
				navMenu.each(function(i) {
					var nav=$(this), data=nav.data();
					nav.mmenu({
						searchfield   :  data.search ? false : true,
						slidingSubmenus	: true
					},
					{
						pageSelector: "#wrapper"
					}).on( "closing.mm", function(){
						var highest=$(this).find("ul.mm-highest");
						highest.find(".mm-subclose").trigger('click');
						setTimeout(function () { closeSub() }, 200);
					});
				});

				$(".nav-mini").on('click',function(){
					$("body").toggleClass( "in" );
					closeSub();
					if($(window).width() < 991 ){
						navMenu.trigger( 'open.mm' );
					}
				});

				//////////     TOUCH TO OPEN CANVAS MENU      //////////
				var nav=document.getElementById("nav");
				if(nav){
					var wrapper= Hammer( nav );
					wrapper.on("dragright", function(event) {	// hold , tap, doubletap ,dragright ,swipe, swipeup, swipedown, swipeleft, swiperight
						if((event.gesture.deltaY<=7 && event.gesture.deltaY>=-7) && event.gesture.deltaX >100){
							$('nav#menu').trigger( 'open.mm' );
						}
					});
					wrapper.on("dragleft", function(event) {
						if((event.gesture.deltaY<=5 && event.gesture.deltaY>=-5) && event.gesture.deltaX <-100){
							$('nav#contact-right').trigger( 'open.mm' );
						}
					});
				}

				//////////     TOGGLE  OPEN LEFT CANVAS MENU      //////////
				_body.append('<div class="toggle-menu"/>');
				_body.on("click",".toggle-menu",function( e ) {
					e.stopImmediatePropagation();
					e.preventDefault();
					$('nav#menu').trigger( 'open.mm' );
				});

				// function Auto close sub menu
				function closeSub(){
					if(navMenu.hasClass("mm-vertical")){
						navMenu.find("li").each(function(i) {
							$(this).removeClass("mm-opened");
						});
					}else{
						navMenu.find("ul").each(function(i) {
							if(i==0){
								$(this).removeClass("mm-subopened , mm-hidden").addClass("mm-current");
							}else{
								$(this).removeClass("mm-opened , mm-subopened , mm-current  , mm-highest").addClass("mm-hidden");
							}
						});
					}
				}

			};



		return {
			isCheckingUserLogin             : isCheckingUserLogin,
			Cnotific8                       : Cnotific8,
			toCenter                        : toCenter,
			createiCheck                    : createiCheck,
			initMenu                        : initMenu
		};


	});
}(define));
