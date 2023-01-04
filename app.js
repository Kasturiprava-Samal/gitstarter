var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[3]);
//items[3].textContent='Hello 2';
//items[3].style.fontWeight='bold';
items[2].style.backgroundColor = 'Green';

for(var i=0; i<items.length;i++){
    items[i].style.fontWeight='bold';
}