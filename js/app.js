$(function () {
  function update() {
    $("h2")
      .first()
      .text("WIDHT: " + $(window).width() + "px.");
    $("h2")
      .last()
      .text("HEIGHT: " + $(window).height() + "px.");
  }

  update();

  $(window).resize(function () {
    update();
  });
});
