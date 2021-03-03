$(document).ready(function () {
  $.get({
    url: "https://icanhazdadjoke.com/search",
    dataType: "json",
    success: addJokesToDOM,
  });

  function addJokesToDOM(data) {
    console.log(data);

    var $allJokesRow = $("#unrated-jokes");
    var $column = $("<div>").addClass("col p-3 shadow border");
    $allJokesRow.append($column);

    for (let i = 0; i < data.results.length; i++) {
      var jokeObj = data.results[i];

      var $jokeContainer = $("<div>")
        .attr("id", jokeObj.id)
        .addClass("joke-container mb-3");
      var goodIcon = `<button class="good-icon btn btn-lg text-success">&#10003;</button>`;
      var badIcon = `<button class="bad-icon btn btn-lg text-danger">&#10005;</button>`;
      var jokeSpan = `<span class="h6">${jokeObj.joke}</span>`;
      // var $jokeSpan = $("<span>").text(jokeObj.joke);
      $jokeContainer.append(goodIcon, badIcon, jokeSpan);

      $column.append($jokeContainer);
    }
  }

  $(document).on("click", ".good-icon", function (event) {
    var $jokeContainer = $(this).parent(".joke-container");
    console.log($jokeContainer);

    $("#good-jokes").append($jokeContainer);
  });

  $(document).on("click", ".bad-icon", function (event) {
    var $jokeContainer = $(this).parent(".joke-container");
    console.log($jokeContainer);

    $("#bad-jokes").append($jokeContainer);
  });
});
