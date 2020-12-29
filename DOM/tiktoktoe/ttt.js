var restartb=document.querySelector('#b');
var cells=document.querySelectorAll('td');
function clearallcells() {
  for (var cell of cells) {
  cell.textContent=''
  }
}
restartb.addEventListener('click',clearallcells)
function changeContent() {
  if (this.textContent==='') {
    this.textContent='X'
  }
  else if (this.textContent==='X') {
    this.textContent='O'
  }
  else {
    this.textContent=''
  }
}
for (var cell of cells) {
cell.addEventListener('click',changeContent)
}
