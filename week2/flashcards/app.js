$(document).ready(function () {
  var paragraphs = $(".test");
  paragraphs.text("woaw");

  class flashCard {
    constructor(frontText, backText) {
      this.frontText = frontText;
      this.backText = backText;
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
        <div class="card-body">${cards[i].frontText}</div>
      </div>`;

      $("#flashcards-container").append(cardHtml);
    }
  }

  addCardsToDOM(flashCards);

  function addCardsToDOM2(cards) {
    for (let i = 0; i < cards.length; i++) {
      var cardElem = $("<div>").addClass("card mr-3 mb-3");
      var cardBody = $("<div>").addClass("card-body").text(cards[i].frontText);
      cardElem.append(cardBody);
      $("#flashcards-container").append(cardElem);
    }
  }
});
