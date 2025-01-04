// Check off specific todos by clicking
$("li").click(function () {
  $(this).toggleClass("completed");
});

// click on X do delet todo
$("span").click(function (event) {
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation(); //stop event bubbling
});
