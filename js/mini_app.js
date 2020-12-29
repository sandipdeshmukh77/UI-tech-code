var movies=[
{name:' bahubali ',isHit:'true',isWatched:'true'},
{name:' sanju ',isHit:'true',isWatched:'false'},
{name:' spider ',isHit:'false',isWatched:'true'}
]

movies.forEach(function(movie){
var  result=''
  if(movie.isWatched=='true'){
    result=result+'i Watched'
  }
  else{
    result=result+'i have not seen'
  }
  result=result+movie.name

if(movie.isHit=='true') {
    result=result+'and movie is hit!!!'
  }
  else {
    result=result+'and movie is flop'
  }
  console.log(result);
});
