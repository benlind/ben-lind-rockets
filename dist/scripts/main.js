"use strict";$(function(){$("#contact form").validate({rules:{name:{required:!0,minlength:2},email:{required:!0,email:!0},message:{required:!0,minlength:25}},messages:{name:{required:"You must enter a name.",minlength:"Your name must be at least 2 characters."},email:{required:"You must enter an email."},message:{required:"You must enter a message.",minlength:"Your message must be at least 25 characters."}},submitHandler:function(e){return $("input[type=submit]").attr("disabled","disabled"),$.ajax({type:"GET",url:"/contact.php",data:$(e).serialize(),timeout:3e3,dataType:"json",success:function(){$(e).fadeTo("medium",.15,function(){$(this).find(":input").attr("disabled","disabled"),$(this).find("label, :input").css("cursor","default"),$(e).parent().find(".alert-success").slideDown("medium")})},error:function(a){$("input[type=submit]").removeAttr("disabled");var t=a.responseJSON;$("input[type=submit]").attr("value","Send").removeClass("sending"),t.name&&$(e).find("#contactName").after('<label for="contactName" class="error">'+t.name+"</label>"),t.email&&$(e).find("#contactEmail").after('<label for="contactEmail" class="error">'+t.email+"</label>"),t.message&&$(e).find("#contactMessage").after('<label for="contactMessage" class="error">'+t.message+"</label>")}}),!1}})});