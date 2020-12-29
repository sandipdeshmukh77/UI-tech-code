//
// $('h1').click(function(){
//   alert('dont sleep we are watching you')
// })
//
// $('button:first').click(function(){
//   alert("hello !!! don'nt sleep" )
//   $(this).css('background','yellow')
// })
//  $('button:nth-of-type(2)').click(function(){
//    alert('dont sleep otherwise i will beat you')
//    $(this).css('background','orange')
//  })
//  $('button:last').click(function(){
//    alert('dont sleep otherwise i will kill you ')
//    $(this).css('background','red')
//  })

// var btn=document.querySelectorAll('button')[1]
// btn.addEventListener('click',function(){
//   alert('dont sleep otherwise i will kill you');
//   btn.style.background=('cyan');
// })
//
// $('input').keypress(function(x){
// if (x.which==13){
//   alert('you just press enter key and content is '+$(this).val())
// }
// })

// $('button:first').on('click',function(){
//   alert('hey dont click me')
// })
//
// $('button:last').on('dblclick',function(){
//   alert('hey dont double click on me')
// })

$('button').on('click',function(){
  $('div').slideToggle(2000);
})
