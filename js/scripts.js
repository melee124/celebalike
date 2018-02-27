$(document).ready(function() {
  $("#blanks form").submit(function() {
    var favfood = parseInt($("#favfood").val());
    var homeInput = $("input#home").val();
    var activity = $("input:radio[name=activity]:checked").val();
    var numpic = parseInt($("#numpic").val());
    event.preventDefault();

    var result;
    if (numpic <= 2 && favfood === 2) {
      $('#johnnyc').show();
    } else if (home === "house" && activity !== "reading") {
      $('#jaredl').show();
    } else if (numpic === 4 && favfood === 4) {
      $('#marilynm').show();
    } else {
      $('individual').show();
    }
    $("#output").text(result);
  });
});
