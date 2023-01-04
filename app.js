// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[3]);
// //items[3].textContent='Hello 2';
// //items[3].style.fontWeight='bold';
// items[2].style.backgroundColor = 'Green';

// for(var i=0; i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

//Get Element by TAG Name
var li = document.getElementsByClassName('list-group-item');
console.log(li);
console.log(li[1]);
//li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor = 'yellow';

for(var i=0; i<items.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}