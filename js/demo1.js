var Books=[]
console.log('welcome to sam\'s book library');
var input = prompt('what operation do you want to perform [add|list|delete|exit]:');
while (input != 'exit') {
  if (input == "add") {
    addbook()
  } else if (input == "list") {
    listbook()
  } else if (input == "delete") {
    deletebook()
  } else {
    console.log('please enter valid option');
  }
   input = prompt('what operation do you want to perform [add|list|delete|exit]:');
}
console.log('thank you for using our application');

function addbook(){
  var newBook=prompt('enter the name of book do you want add:')
  Books.push(newBook)
}
function listbook(){
  console.log('list of available books:');
  for (book of Books){
    console.log(book);
  }
}
function deletebook(){
  var name=prompt('enter the name of book to delete:')
  var index=Books.indexOf(name)
  if(index==-1){
    console.log('book you enter is not available in list');
  }
  else{Books.splice(index,1)}
}
