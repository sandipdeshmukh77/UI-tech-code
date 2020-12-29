var snum=5
var num=Number(prompt('Guess the number'))
if (num>snum){
  alert('this is too high please guess again')
}
else if (num<snum) {
  alert('it is too low please guess again')
}
else {
  alert('congratulations your guess matched')
}
