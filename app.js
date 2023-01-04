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
// var li = document.getElementsByClassName('list-group-item');
// console.log(li);
// console.log(li[1]);
// //li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i=0; i<items.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }

//query selector
var header1=document.querySelector('#main-header');
header1.style.borderBottom='solid 4px #ccc';
var input=document.querySelector('input');
input.value='Hello world'

var submit = document.querySelector('input[type="submit"]');
submit.Value="SEND"

var item =document.querySelector('.list-group-item:nth-child(2)');
console.log(item);
item.style.color='green';

//var lastItem=document.querySelector('.list-group-item:last-child');
//lastItem.style.color='blue';

var lastItem=document.qu


// Query selector all//
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent="hello";

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
    even[i].style.backgroundColor='#ccc';
}