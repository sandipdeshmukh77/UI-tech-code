var books=[]
var input=prompt('what operation do you want to perform [ add | list | exit ]')
while(input!= 'exit'){
  if (input=='add') {
    var name=prompt('enter the name of the book');
    books.push(name);
  }
else if (input=='list') {
  console.log(books);
}
else {
  alert('please enter valid option');
}
var input=prompt('what operation do you want to perform [ add | list | exit ]')
}
console.log('thank you using book management application');
