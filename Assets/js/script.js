// Check off specific todos by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// click on X do delet todo
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation(); //stop event bubbling
});

$("input[type='text'").keypress(function (event) {
  if (event.which === 13) {
    var todoText = $(this).val(); // grabbing new todo text from input
    $(this).val("");
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
});
