var h1=document.querySelector('h1')
var p=document.querySelector('p')
var ul=document.querySelector('ul')
var h2=document.querySelector('h2')

function getRandomcolor() {
var color='#'
for (var i = 0; i < 6; i++) {
 var letter='1234567890ABCDEF'
 var r=Math.floor(Math.random()*16)
 color=color+letter[r]
}
return color
}
function changecolor(){
 h1.style.color=getRandomcolor()
 h2.style.color=getRandomcolor()
 p.style.color=getRandomcolor()
 ul.style.color=getRandomcolor()}
 setInterval(changecolor,1000)
