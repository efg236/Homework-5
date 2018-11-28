$( document ).ready(function() {
    const body = $("body");
    const cards = body.find(".card");

    cards.on("click", onCardClick)

    function onCardClick(event) {
      const target = $(event.currentTarget);
      target.toggleClass("flipped")
    }
});
