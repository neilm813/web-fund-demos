// $ is the name of the jQuery function.

$(document).ready(function () {
  /* 
    Put all code in here. If you try to select an HTML element outside of this
    (before the document is loaded) JS / jQuery won't find it.
  */

  /**
   * Prefix var name with $ to remind ourselves that this is a jQuery selected
   * HTML object.
   */
  let $jokesDiv = $("#jokes");
  let $goodJokesDiv = $("#good-jokes");
  let $badJokesDiv = $("#bad-jokes");
  /**
   * If you select the element without jQuery, it will not have the helpful
   * jQuery methods available.
   */
  // let jokesDiv = document.getElementById("jokes");

  $.get({
    url: "https://icanhazdadjoke.com/search",
    dataType: "json",
    success: addJokesToDOM,
  });

  function addJokesToDOM(data) {
    let goodJokeBtnStr = `<button class="btn-good-joke btn fas fa-check text-success p-1"></button>`;

    let badJokeBtnStr = `<button class="btn-bad-joke btn fas fa-times text-danger p-1 mr-3"></button>`;

    for (let i = 0; i < data.results.length; i++) {
      let jokeObj = data.results[i];

      // jQuery version of document.createElement("div")
      // Chaining methods because each method is returning the element obj.
      let $jokeDiv = $("<div>")
        .append(goodJokeBtnStr, badJokeBtnStr, `<span>${jokeObj.joke}</span>`)
        .addClass("joke-container p-2");

      // Without chaining methods it would look like:
      // let $jokeDiv = $("<div>");
      // $jokeDiv.append(goodJokeBtnStr, badJokeBtnStr, `<span>${jokeObj.joke}</span>`);
      // $jokeDiv.addClass("p-2");

      $jokesDiv.append($jokeDiv);
    }
  }

  // Similar to .addEventListener. Need to use .on if the elements being
  // selected were dynamically added (not originally present in HTML file)
  $(document).on("click", ".btn-good-joke", function (event) {
    // event.target is the element that triggered the event

    let $jokeContainer = $(event.target).parent(".joke-container");

    $goodJokesDiv.append($jokeContainer);
  });

  $(document).on("click", ".btn-bad-joke", function (event) {
    // event.target is the element that triggered the event

    let $jokeContainer = $(event.target).parent(".joke-container");

    $badJokesDiv.append($jokeContainer);
  });

  // Combine the above into a single listener to avoid code repetition
  // $(document).on("click", ".btn-good-joke, .btn-bad-joke", moveJoke);

  // function moveJoke(event) {
  //   console.log("clicked");
  //   let $jokeContainer = $(event.target).parent(".joke-container");

  //   let $newParent = $badJokesDiv;

  //   if ($(event.target).hasClass("btn-good-joke")) {
  //     $newParent = $goodJokesDiv;
  //   }

  //   $newParent.append($jokeContainer);
  // }
});
