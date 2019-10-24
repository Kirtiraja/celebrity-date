$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var animal = parseInt($("input:radio[name=animal]:checked").val());
    var art = parseInt($("input:radio[name=medium]:checked").val());
    var vacation = parseInt($("input:radio[name=vacation]:checked").val());

    if (animal + art + vacation <= 3) {
      $("#celebrity1").show();
      $("#celebrity2").hide();
      $("#celebrity3").hide();
    }
    else if (animal + art + vacation <= 6) {
      $("#celebrity2").show();
      $("#celebrity1").hide();
      $("#celebrity3").hide();
    }
    else {
      $("#celebrity3").show();
      $("#celebrity1").hide();
      $("#celebrity2").hide();
    }

  });
});
