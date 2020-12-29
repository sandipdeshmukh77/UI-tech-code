
function getRandomColor() {
  var color = "#"
  for (i = 0; i < 6; i++) {
    var letter = '1234567890ABCDEF'
    var r = Math.floor(Math.random() * letter.length)
    color = color + letter[r]
  }

  return color

}

var h1=document.querySelector('h1')
var h2=document.querySelector('h2')
h2.textContent='thsi is modified'
h2.innerHTML='<em>'+h2.textContent+'</em>'

function changecolor(){
  h1.style.color=getRandomColor()
}
setInterval (changecolor,500)

var links=document.querySelectorAll('a')
for (link of links){
  link.textContent='sandibaba'
  link.style.color='green';
  link.style.background='black'
  link.setAttribute('href','https://www.google.com')
}
