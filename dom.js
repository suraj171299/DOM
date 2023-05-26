// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello'
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// GET ELEMENT BY ID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header')
// console.log(headerTitle);
// headerTitle.textContent = 'Hello'
// headerTitle.innerText = 'GoodBye'
// headerTitle.innerHTML = '<h3>Hello</h3>'
// header.style.borderBottom = 'solid 3px #000'


// GET ELEMENTS BY CLASSNAME

// var items = document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'HELLO2'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'

// // items.style.backgroundColor = '#f4f4f4'

// for(var i =0;i<items.length;i++){
//     items[i].style.backgroundColor = '#f4f4f4'
// }


// GET ELEMENTS BY TAGNAME

// var li = document.getElementsByTagName('li')
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'HELLO2'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'

// // items.style.backgroundColor = '#f4f4f4'

// for(var i =0;i<li.length;i++){
//     li[i].style.backgroundColor = '#f4f4f4'
// }




// QUERYSELECTOR //
// var header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px #ccc'

// var input = document.querySelector('input')
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]')
// submit.value = 'SEND'

// var item = document.querySelector('.list-group-item')
// item.style.color = 'red'

// var lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue'

// var secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'coral'



// QUERYSELECTORALL //

// var titles = document.querySelectorAll('.title')
// console.log(titles);

// var odd = document.querySelectorAll('li:nth-child(odd)')
// var even = document.querySelectorAll('li:nth-child(even)')

// for(var i =0;i<odd.length;i++){
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#ccc'
// }
// var color = document.getElementsByClassName('list-group-item')
// color[2].style.backgroundColor = 'green'

// var li = document.getElementsByTagName('li')
// for(var i = 0;i<li.length;i++){
//     li[i].style.fontWeight = 'bolder'
// }



// var list = document.getElementsByClassName('list-group-item')
// for(var i =0;i<list.length;i++){
//     list[i].style.backgroundColor = '#f4f4f4'
// }

// var lists = document.getElementsByTagName('li')
// for(var i =0;i<lists.length;i++){
//     lists[i].style.backgroundColor = '#ccc'
// }

// var l = document.querySelector('.list-group-item:nth-child(2)')
// // l.style.backgroundColor = 'green'

// // var m = document.querySelector('.list-group-item:nth-child(3)')
// // m.style.visibility = 'hidden'

// var a = document.querySelectorAll('.list-group-item')
// a[1].style.color = 'green'

// var b = document.querySelectorAll('li:nth-child(odd)')
// for(var i =0;i<b.length;i++){
//     b[i].style.backgroundColor = 'green'
// }







// TRAVERSING THE DOM

var itemList = document.querySelector('#items')
// parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentNode)

// parentElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentElement.parentElement.parentElement)

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow'

// firstCHild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent='Hello 1'

// lastCHild
// console.log(itemList.lastChild);
// // lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent='Hello 4'

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green'

// Create Elements

// Create div
var newDiv = document.createElement('div')

//Add class 
newDiv.className='hello'

// Add ID
newDiv.id = 'hello1'

// Add attribute
newDiv.setAttribute('title', 'Hello Div')

// Create text Node
var newDivText = document.createTextNode('Hello World')

// ADD text to DIV
newDiv.appendChild(newDivText)

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')
console.log(newDiv);

container.insertBefore(newDiv, h1)

var cont = document.querySelector('div .list-group')
var h2 = document.querySelector('div h2')

cont.insertBefore(newDiv, h2)