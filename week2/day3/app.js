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

  $.get({
    url: "https://icanhazdadjoke.com/search",
    dataType: "json",
    success: addJokesToDOM,
  });

  function addJokesToDOM(data) {
    for (let i = 0; i < data.results.length; i++) {
      let jokeObj = data.results[i];
      let jokeParagraph = `<p>${jokeObj.joke}</p>`;
      // let jokeParagraph = "<p>" + jokeObj.joke + "</p>";

      $jokesDiv.append(jokeParagraph);
    }
  }
});
