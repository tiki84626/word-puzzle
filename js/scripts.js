$(document).ready(function() {
  $("form").submit(function(event) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var sentenceArray = ($("input#sentence").val()).split("");

    for (i = 0; i < sentenceArray.length; i++) {
      for (j = 0; j < vowels.length; j++) {
        if (sentenceArray[i] === vowels[j]) {
          sentenceArray[i] = "-"
        };
      };
    };

    sentenceArray = sentenceArray.join("");

    event.preventDefault();

    $("#sentence-puzzle").text(sentenceArray);
    $("form").hide();
    $(".puzzle-output").show();
  });
});
