$(function() {

  // Validate contact form
  $('#contact form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 25
      }
    },

    messages: {
      name: {
        required: "You must enter a name.",
        minlength: "Your name must be at least 2 characters."
      },
      email: {
        required: "You must enter an email."
      },
      message: {
        required: "You must enter a message.",
        minlength: "Your message must be at least 25 characters."
      }
    },

    submitHandler: function(form) {
      console.log(form);
      $("input[type=submit]").attr("disabled", "disabled");
      $.ajax({
        type: "GET",
        url: "/contact.php",
        data: $(form).serialize(),
        timeout: 3000,
        dataType: 'json',

        success: function(d) {
          console.log("success");
          $(form).fadeTo("medium", 0.15, function() {
            $(this).find(':input').attr('disabled', 'disabled');
            $(this).find('label, :input').css('cursor','default');
            $(form).parent().find('.alert-success').slideDown("medium");
          });
        },

        error: function(e) {
          console.log("error", e);
          $("input[type=submit]").removeAttr("disabled");

          var data = e.responseJSON;

          $("input[type=submit]").attr("value", "Send").removeClass("sending");
          if(data.name)
            $(form).find("#contactName").after("<label for='contactName' class='error'>" + data.name + "</label>");
          if(data.email)
            $(form).find("#contactEmail").after("<label for='contactEmail' class='error'>" + data.email + "</label>");
          if(data.message)
            $(form).find("#contactMessage").after("<label for='contactMessage' class='error'>" + data.message + "</label>");
        }
      });
      return false;
    }
  });

});
