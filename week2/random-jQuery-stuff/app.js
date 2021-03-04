$(document).ready(function () {
  /**
   * This code corresponds with the commented out HTML
   */
  // $(".img-hover-flip").mouseenter(function () {
  //   var $this = $(this);
  //   var src = $this.attr("src");
  //   $this.attr("src", $this.attr("data-alt-src"));
  //   $this.attr("data-alt-src", src);
  // });

  /**
   * Front-end validations.
   */
  $("#input-word").keyup(function () {
    var isTooShort = $(this).val().length < 6;

    if (isTooShort) {
      $("#given-word").text("Word is too short!");
    } else {
      $("#given-word").text("");
    }
  });

  $("#reset").click(function () {
    $("#input-word").val("");
  });
});
