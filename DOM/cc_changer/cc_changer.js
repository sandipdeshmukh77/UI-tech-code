
function colorchanger() {
  var c='1234567890ABCDEF'
  var color='#'
for (var i = 0; i < 6; i++) {
  var r=Math.floor(Math.random()*17)
  color=color+c[r]
}
return color
}
function contentchanger() {
var name=['pune','mumbai','surat','thane','beed','aurangabad','amaravati']
var r=Math.floor(Math.random()*7)
return name[r]
}

var h1=document.querySelector('h1')
var p=document.querySelector('p')
var h2=document.querySelector('h2')
var ul=document.querySelector('ul')


function randomcontentcolor() {
  h1.style.color=colorchanger();
  h1.textContent=contentchanger();
  p.style.color=colorchanger();
  h2.style.color=colorchanger();
  ul.style.color=colorchanger();
}


h1.addEventListener('mouseover',randomcontentcolor)
p.addEventListener('mouseover',randomcontentcolor)
h2.addEventListener('mouseover',randomcontentcolor)
ul.addEventListener('mouseover',randomcontentcolor)
