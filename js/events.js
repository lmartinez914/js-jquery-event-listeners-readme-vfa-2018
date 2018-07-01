//define functions here

function getIt(){
  alert ('Hey!');
  
}
  function frameIt() {
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
      alert ('Your form is going to be submitted now.');
    });
  }
$(document).ready(function(){

// call functions here
$("p").on("click",getIt());
$("img").on("load",frameIt());
pressIt();
});
