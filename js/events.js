//define functions here

function getIT(){
  alert ('Hey!');
  
}
  function frameIT() {
    $("img").addClass("tasty");
  }
  function pressIt(){
    $("form").on("keydown",function(key) {
      if (key.which === 71 ) {
        alert ('You have pressed the G key');
      }
    });
  }
  
  function submitIt() {
    $("form").on("submit", function (){
      alert ('Your form will be submitted now.');
    });
  }
$(document).ready(function(){

// call functions here
$("p").on(click,getIt());
$("img").on("load",frameIt());
pressIt();
});
