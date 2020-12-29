var books=[]
var input=prompt('which operation do you want to perform [add|list|delete|exit]')
while (input != 'exit') {
  if (input=='add') {
    addbook();
  }
  else if (input=='list') {
    listbook();
  }
  else if (input=='delete') {
    deletebook();
  }
  else {
    alert('please enter valid option');
  }
  var input=prompt('which operation do you want to perform [add|list|delete|exit]')
}
console.log('thank you for using our application');

function addbook() {
  var name=prompt('enter the name of book')
  books.push(name);
}

function listbook() {
  console.log('list of available books');
  for (var book of books) {
    console.log(book);
  }
}

function deletebook() {
var name=prompt('enter the name of book to delete')
var db=books.indexOf(name)
if (db==-1) {
  console.log('the specified book not available in the library');
}
else {
  books.splice(db,1);
  console.log('the'+name+'book deleted from library ');
}

}
