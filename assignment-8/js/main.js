$( document ).ready(function() {
    const body = $("body");
    const cards = body.find(".card");

    function onCardClick(event) {
      const target = $(event.currentTarget);
      target.toggleClass("flipped");
    }

    function flipCard(card) {
      if (!card.hasClass("flipped")) {
        card.addClass("flipped");
      }
    }

    function initDraggable() {
      const droppables = body.find(".item-img");
      const dropContainer = body.find("#game-save");
      const dropTarget = body.find("#panda-drop-target");

      //the overlapThreshold can be a percentage ("50%", for example, would only trigger when 50% or more of the surface area of either element overlaps) or a number of pixels (20 would only trigger when 20 pixels or more overlap), or 0 will trigger when any part of the two elements overlap.
      const overlapThreshold = "50%";

      let parentCard;

      Draggable.create(droppables, {
        bounds: window,
        onDrag: function(e) {
          if (this.hitTest(dropTarget, overlapThreshold)) {
            const target = $(this.target);
            parentCard = target.closest('.card');
            // this occurs when dropping target into drop area
            if (!target.hasClass("bad-food")) {
              dropContainer.addClass("panda-mouth-open");
              dropContainer.removeClass("panda-bad");
            } else {
              dropContainer.addClass("panda-bad");
              dropContainer.removeClass("panda-mouth-open");
            }
          }
        },
        onDragEnd: function(e) {
          if ($(this.target)|| !this.hitTest(dropTarget, overlapThreshold)) {
            //if there isn't a bad-food, send it back to starting position
            TweenLite.to(this.target, 0.2, {
              x: 0,
              y: 0
            });
          }
          flipCard(parentCard);
        },
      });
    }


    // events
    cards.on("click", onCardClick);

    // inits
    initDraggable();
});
