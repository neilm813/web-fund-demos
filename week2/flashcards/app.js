$(document).ready(function () {
  // Use the .on for dynamically added HTML elements (elements added from js)
  $("#flashcards-container").on(
    {
      mouseenter: function (event) {
        $(this).addClass("bg-warning");
      },
      mouseleave: function (event) {
        $(this).removeClass("bg-warning");
      },
    },
    ".card"
  );

  $("#flashcards-container").on("click", ".card", function (event) {
    $(this).find(".question").toggleClass("d-none");
    $(this).find(".answer").toggleClass("d-none");
  });

  $("#reset").click(function () {
    $(".question").removeClass("d-none");
    $(".answer").addClass("d-none");
  });

  class flashCard {
    constructor(question, answer) {
      this.question = question;
      this.answer = answer;
    }
  }

  /**
   * Pretend we got these flashcards and their info from a database. We can't
   * hand-write them into the HTML file since we got them from a database.
   */
  var flashCards = [
    new flashCard("What character is used to select by class.", "A period."),
    new flashCard(
      "What's the difference between parameters and arguments?",
      "Arguments are the actual data, parameters are the variable names for that data."
    ),
    new flashCard(
      "What characters are used to execute a function?",
      "Parenthesis."
    ),
  ];

  function addCardsToDOM(cards) {
    for (let i = 0; i < cards.length; i++) {
      var cardHtml = `<div class="card mr-3 mb-3">
        <div class="card-body question">${cards[i].question}</div>
        <div class="card-body answer text-success d-none">${cards[i].answer}</div>
      </div>`;

      $("#flashcards-container").append(cardHtml);
    }
  }

  addCardsToDOM(flashCards);

  function addCardsToDOM2(cards) {
    for (let i = 0; i < cards.length; i++) {
      var cardElem = $("<div>").addClass("card mr-3 mb-3");
      var cardBody = $("<div>").addClass("card-body").text(cards[i].question);
      cardElem.append(cardBody);
      $("#flashcards-container").append(cardElem);
    }
  }
});
