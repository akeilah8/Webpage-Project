var userInput;
var photos = [];

$(".add").click(function() {
     userInput = $(".picture-url").val();
    photos.push(userInput);
 //for( let cartoons of photos) {
        $(".gallery").append("<img src=" + userInput + ">");
$("input:text").val("");
});
