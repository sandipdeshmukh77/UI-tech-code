function colorchanger() {
var c='1234567890ABCDEF';
var color='#';
for (var i = 0; i < 6; i++) {
  var r=Math.floor(Math.random()*16)
  color=color+c[r]
}
return color
}

var myh1=document.querySelector('h1')
myh1.addEventListener('mouseover',function(){
  myh1.style.color=colorchanger();
  myh1.textContent='INDIA'
})

var myh1=document.querySelector('h1')
myh1.addEventListener('mouseout',function(){
  myh1.style.color=colorchanger();
  myh1.textContent='MAHARASHTRA'

})

var d=document.querySelector('button')
d.addEventListener('click',function(){
document.body.style.background=colorchanger();
});
