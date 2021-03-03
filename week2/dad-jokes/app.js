$(document).ready(function () {
  $.get({
    url: "https://icanhazdadjoke.com/search",
    dataType: "json",
    success: addJokesToDOM,
  });

  function addJokesToDOM(data) {
    console.log(data);

    var $allJokesRow = $("#row-all-jokes");
    var $column = $("<div>").addClass("col p-3 shadow border");
    $allJokesRow.append($column);

    for (let i = 0; i < data.results.length; i++) {
      var jokeObj = data.results[i];

      var $jokeParagraph = $("<p>").attr("id", jokeObj.id);
      $jokeParagraph.text(jokeObj.joke);
      $column.append($jokeParagraph);
    }
  }
});
