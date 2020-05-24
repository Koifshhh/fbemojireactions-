$(document).ready(function(){

  //** generate random number*//
  var getRndInteger = function(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
  };
  //* emoji array*/
  var fbReactions = ["like", "love", "happy", "wow", "sad", "angry"];

  var interval;

  $(window).on("focus", function(){
  //*when window is active*/
  interval = setInterval(function(){
    $(".particlesContainer").append(
      "<span class ='particle "+fbReactions[getRndInteger(0, fbReactions.length-1)] +"' ></span>"
    );

    $(".particle").toArray().forEach(function(particle){
      $(particle).animate({
        left:getRndInteger(0,$("body").width()),
        right:getRndInteger(0,$("body").width())
      },getRndInteger(10,30),function(){
          $(particle).animate({
            top:-100+"%",
            opacity:0
          },getRndInteger(5000,8000),function(){
              $(particle).remove();
          });//*inside animation*/

      });//**first animate function*/
    });


  },getRndInteger(400,600));
  });
  $(window).on("blur", function(){
  //*when window is inactive */
  clearInterval(interval);
  });
});
