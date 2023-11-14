// Document object model
// tree of nodes/elements created by browser
// javascript can be used to read/write/manipulate to the DOM
// object oriented representation
// TREE STRUCTURE
//                 document
//                 |
//             root element(html)
//             /                \
//            /                  \
//         element(head)       element(body)
//             |                 /         \
//         element(title)       /           \
//             |             element<a>   element<h1>
//         text-"my title"      |             |
//
//                            text-"my link"    text-"my header"
// EXAMINE THE DOCUMENT OBJECT
// will show all the different properties and methods attached to
// the object. ex:- url, doc.all, items,header(a very large tree of properties
// and methods )
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "Hello";
// console.log(document.forms[0]);
// console.log(document.links);
// all these methods outputs an empty html collection not an array
// but we can select element from the html collection like an array
// console.log(document.images); // we dont have any therefore empty collection

//GET ELEMENTSBYID //
// console.log(document.getElementById("header-title"));
var headertitle = document.getElementById("header-title");
var header = document.getElementById("main-header");
// console.log(headertitle);
// headertitle.textContent = "Hello"; // changes item lister to hello
// headertitle.innerText = "GoodBye"; // pays attention to style(only diff between textcontent and innertext)
// headertitle.innerHTML = "<h3>Hello</h3>";
header.style.borderBottom = "solid 3px #000"; // draws a black border

//GETELEMENTSBYCLASSNAME//
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// // items.style.backgroundColor = "#f4f4f4"; // this wont work because it is an html collection
// //therefore we need to loop through it

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

// GETELEMENTSBYTAGNAME //

// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// // items.style.backgroundColor = "#f4f4f4"; // this wont work because it is an html collection
// //therefore we need to loop through it

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

// QUERYSELECTOR //
// works like j query , but it is used only for 1 items, it only grabs the first one
//can use any css selector
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");
// input.value = "Hello world"; //selected only the first input and not submit
// // to select submit
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";
// var item = document.querySelector(".list-group-item");
// item.style.color = "red";
// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";
// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";

// QUERYSELECTORALL //
// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Hello";
// // set background color of alternate list to grey
// var odd = document.querySelectorAll("li:nth-child(odd)");
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
// }

// // set background color of even position  list to grey
// var even = document.querySelectorAll("li:nth-child(even)");
// for (var i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = "#ccc";
// }
