//I want to learn how to create a responsive  card

$(document).ready(function () {
    // Add a class on mouse enter in the card
    $(".card").on("mouseenter", function () {
      $(this).addClass("selected").siblings().removeClass("selected");
    });
  });