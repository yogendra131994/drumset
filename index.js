// for click controls
document.querySelector(".buttons .w").addEventListener("click",function ()
{
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();
});

document.querySelector(".buttons .a").addEventListener("click",function ()
{
  var audio = new Audio('sounds/tom-2.mp3');
  audio.play();
});
document.querySelector(".buttons .s").addEventListener("click",function ()
{
  var audio = new Audio('sounds/tom-3.mp3');
  audio.play();
});
document.querySelector(".buttons .d").addEventListener("click",function ()
{
  var audio = new Audio('sounds/tom-4.mp3');
  audio.play();
});
document.querySelector(".buttons .j").addEventListener("click",function ()
{
  var audio = new Audio('sounds/snare.mp3');
  audio.play();
});
document.querySelector(".buttons .k").addEventListener("click",function ()
{
  var audio = new Audio('sounds/crash.mp3');
  audio.play();
});
document.querySelector(".buttons .l").addEventListener("click",function ()
{
  var audio = new Audio('sounds/kick-bass.mp3');
  audio.play();
});



document.addEventListener('keydown',function()
{
  var inp=event.key;
  if(inp==='w')
  {
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
  }
  else if(inp==='a')
  {
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
  }
  else if(inp==='s')
  {
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
  }
  else if(inp==='d')
  {
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
  }
  else if(inp==='j')
  {
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
  }
  else if(inp==='k')
  {
    var crash = new Audio('sounds/crash.mp3');
        crash.play();
  }
  else if(inp==='l')
  {
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
  }
});

// for keyboard controls
// document.addEventListener('keydown',function () {
//   switch(event.key) {
//
//   case 'w':
//     var tom1 = new Audio('sounds/tom-1.mp3');
//     tom1.play();
//     break;
//
//   case 'a':
//     var tom2 = new Audio('sounds/tom-2.mp3');
//     tom2.play();
//     break;
//
//   case 's':
//     var tom3 = new Audio('sounds/tom-3.mp3');
//     tom3.play();
//     break;
//
//   case 'd':
//
//     var tom4 = new Audio('sounds/tom-4.mp3');
//     tom4.play();
//     break;
//
//   case 'j':
//     var snare = new Audio('sounds/snare.mp3');
//     snare.play();
//     break;
//
//   case 'k':
//     var crash = new Audio('sounds/crash.mp3');
//     crash.play();
//     break;
//
//   case 'l':
//     var kick = new Audio('sounds/kick-bass.mp3');
//     kick.play();
//     break;
//
//   default:
//     // code block
// }});
