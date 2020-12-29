var name=prompt('enter your name')
var actor=prompt('enter your favorate actor')
var lucky=prompt('enter your lucky number')
var dish=prompt('enter your favorate dish')

namecondition=false
actorcondition=false
dishcondition=false
luckycondition=false

if (name[name.length-1] == 'p'){
  namecondition=true
}
if (actor[0]=='a') {
  actorcondition=true
}
if (lucky=9){
  luckycondition=true
}
if (dish.length>=6) {
  dishcondition=true
}
alert('thank you '+name+' for giving information')

if (namecondition && actorcondition && dishcondition && luckycondition) {
  console.log('hello agent '+name+' your next mission is ')
  console.log('kill the enemy which is taken shield in northern valley')
}
