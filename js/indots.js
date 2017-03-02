!function(){$.extend($.validator.messages,{required:"Este campo es obligatorio",remote:"Please fix this field",email:"Ingresa una dirección de correo válida",url:"Ingresa una URL válida",date:"Ingresa una fecha válida",dateISO:"Ingresa una fecha válida (ISO)",number:"Ingresa un número válido",digits:"Solo se permiten números dígitos",creditcard:"Ingresa un número de tarjeta válido",equalTo:"Los valores deben coincidir",accept:"Please enter a value with a valid extension",maxlength:jQuery.validator.format("No ingreses más de {0} caracteres"),minlength:jQuery.validator.format("Ingresa al menos {0} caracteres"),rangelength:jQuery.validator.format("El texto debe tener entre {0} y {1} caracteres"),range:jQuery.validator.format("Ingresa un valor entre {0} y {1}"),max:jQuery.validator.format("Ingresa un valor menor o igual que {0}"),min:jQuery.validator.format("Ingresa un valor mayor o igual que {0}")}),$.validator.setDefaults({invalidHandler:function(a,e){var t=$(this);t.find(".form-message").removeClass(t.hasClass("success")?"success":"error").html("")},submitHandler:function(a){var e=$(a).serialize(),t=$(a).find("select, input, textarea, button"),i=$(a).find(".form-message"),s=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),n=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),o=function(a){var e=a?s:n;t.removeAttr("disabled"),i.removeClass(a?"error":"success"),i.addClass(a?"success":"error"),i.html(e)},r=$(a).attr("data-ajax-form");t.attr("disabled","disabled"),i.html(""),$(a).find(".button-wrapper .loader").length||$(a).find(".button-wrapper").addClass("disabled"),"undefined"!=typeof r&&r!==!1?$.ajax({url:$(a).attr("action"),method:"POST",data:e}).done(function(e){o(1===parseInt(e)),a.reset()}).fail(function(){o(!1)}).always(function(){t.removeAttr("disabled"),$(a).find(".button-wrapper").removeClass("disabled")}):a.submit()}})}(),function(){function a(a,e){var t='<div class="item"><div class="flash-indots-modal-item-photo cover" style="background-image: '+a.cover+'"></div><div class="flash-indots-modal-item-data"><h3 class="flash-indots-modal-item-title flash-indots-icon-title">'+a.title+'</h3><div class="flash-indots-modal-item-description">'+a.description+'</div><div class="flash-indots-modal-item-info"><div><span class="flash-indots-green-text">Formato</span>'+a.format+'</div><div><span class="flash-indots-green-text">Duración</span>'+a.duration+'</div><div><span class="flash-indots-green-text">Tiempo</span>'+a.lessonDuration+'</div><div><span class="flash-indots-green-text">Precio</span>'+a.price+'</div></div><form id="flash-indots-modal-form_'+a.index+'" class="flash-indots-modal-form" action="'+e.sendTo+'" accept-charset="utf-8" method="post"><div class="inputs-div"><input type="hidden" name="'+e.campaignName+'" value="'+a.campaignToken+'"><input type="hidden" name="'+e.thankName+'" value="'+a.thankUrl+'"><input type="hidden" name="'+e.fowardName+'" value="'+a.fowardData+'"><div class="input-wrapper"><input class="contact-input" type="text" id="name-flash-indots_'+a.index+'" name="'+e.textName+'" placeholder="Nombre"></div><div class="input-wrapper"><input class="contact-input" type="email" id="email-flash-indots_'+a.index+'" name="'+e.emailName+'" placeholder="Correo electrónico"></div><div class="form-message"></div></div><div class="button-wrapper"><button class="indots-button green" type="submit">Inscribirme</button><div class="loader indots-loader vertical-center"><div class="ball-pulse-sync"><div class="blue"></div><div class="blue"></div><div class="blue"></div></div></div></div></form></div></div>';return t}function e(e){var t={cover:$(this).find(".flash-indots-item-photo").css("background-image").replace('"',"'"),title:$(this).find(".flash-indots-item-name span").text(),description:$(this).attr("data-item-description"),format:$(this).attr("data-item-format"),duration:$(this).attr("data-item-duration"),lessonDuration:$(this).attr("data-item-lesson-duration"),price:$(this).attr("data-item-price"),index:e,campaignToken:$(this).attr("data-item-campaign-token"),thankUrl:$(this).attr("data-item-thank-url"),fowardData:$(this).attr("data-item-foward-data")},i={sendTo:"https://app.getresponse.com/add_subscriber.html",textName:"first_name",emailName:"email",campaignName:"campaign_token",thankName:"thankyou_url",fowardName:"forward_data"},s={};s[i.emailName]={required:!0,email:!0},s[i.hidenName]={required:!0},s[i.textName]={required:!0},r.append(a(t,i)),r.find("#flash-indots-modal-form_"+e).validate({rules:s})}function t(){r.slick({prevArrow:'<span class="slick-prev circle fa fa-angle-left"></span>',nextArrow:'<span class="slick-next circle fa fa-angle-right"></span>'})}function i(){o.open(),r.off("afterChange.slick",i),r.resize()}function s(){var a='<div class="remodal" data-remodal-id="flash-indots-modal"><div class="flash-indots-modal-header"><h2 class="flash-indots-modal-title flash-indots-icon-title">Flash InDots</h2><button data-remodal-action="close" class="remodal-close"></button></div><div class="flash-indots-modal-body"><div class="flash-indots-carousel"></div></div></div>';$("main").append(a),o=$('[data-remodal-id="flash-indots-modal"]').remodal(),r=$('[data-remodal-id="flash-indots-modal"] .flash-indots-carousel'),$(".flash-indots-items .flash-indots-item").each(e),t(),r.on("afterChange.slick",i),$(document).on("opened",'[data-remodal-id="flash-indots-modal"]',function(){r.slick("setPosition")})}function n(){r.on("afterChange.slick",i),r.slick("slickGoTo",$(this).index())}var o=null,r=null;$(".flash-indots-items").length&&(s(),$(".flash-indots-items").on("click",".flash-indots-item",n))}(),function(){function a(a){$(a.target).is("nav .menu-trigger")||$(a.target).is("nav .menu-container")||$(a.target).closest("nav .menu-container").length||!$("nav .menu-container").hasClass("active")||(a.preventDefault(),$("nav .menu-container").removeClass("active"),$("body").removeClass("noscroll"))}function e(){$("nav .menu-container").hasClass("active")?($("nav .menu-container").removeClass("active"),$("body").removeClass("noscroll")):($("nav .menu-container").addClass("active"),$("body").addClass("noscroll"))}var t=window.matchMedia("(max-width: 1064px)");t.matches?($("body")[0].addEventListener("touchstart",a,{passive:!1}),$("nav .menu-trigger").click(e)):($("body")[0].removeEventListener("touchstart",a,{passive:!1}),$("nav .menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",a,{passive:!1}),$("nav .menu-trigger").off("click"),$("body").removeClass("noscroll"),$("nav .menu-container").removeClass("active"),t.matches&&($("body")[0].addEventListener("touchmove",a,{passive:!1}),$("nav .menu-trigger").click(e))})}(),function(){$("#contact-form").validate({rules:{name:{required:!0},email:{required:!0,email:!0},message:{required:!0}}}),$("#footer-newsletter-form, #homepage-newsletter-form, #blog-newsletter-form").validate({rules:{email:{required:!0,email:!0}}})}();