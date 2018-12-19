(function($) {

    $("#signup-form").submit(function(e) {
      //e.preventDefault();
      var name = e.target.name.value;
      var email = e.target.email.value;
      var password = e.target.password.value;
      var repassword = e.target.re_password.value;
      console.log(name,email,password,repassword);
        // $(this).toggleClass("zmdi-eye zmdi-eye-off");
        // var input = $($(this).attr("toggle"));
        // if (input.attr("type") == "password") {
        //   input.attr("type", "text");
        // } else {
        //   input.attr("type", "password");
        // }
      }
      );

})(jQuery);