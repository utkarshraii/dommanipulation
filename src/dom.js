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
// var headertitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// console.log(headertitle);
// headertitle.textContent = "Hello"; // changes item lister to hello
// headertitle.innerText = "GoodBye"; // pays attention to style(only diff between textcontent and innertext)
// headertitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = "solid 3px #000"; // draws a black border

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

// TRAVERSING THE DOM //
// QUERY PARENT AND SIBLING //

// var itemList = document.querySelector("#items");
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement similar to parentNode
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

// childNode
// console.log(itemList.childNodes); //we get a node list
// text node represents white space
// childNode also includes white spaces but children prop doesnot

//children
// console.log(itemList.children); //outputs an html collection and not node list
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

//Firstchild
// console.log(itemList.firstChild); //returns text as it includes white spaces like childNodes

//FirstElementChild
// console.log(itemList.firstElementChild); //returns first element Li
// itemList.firstElementChild.textContent = "hello1";

//Lasttchild
// console.log(itemList.lastChild); //returns text as it includes white spaces like childNodes

//lastElementChild
// console.log(itemList.lastElementChild); //returns last element Li
// itemList.lastElementChild.textContent = "hello1";

//nextSibling
// console.log(itemList.nextSibling); //similar to childNode

//nextElementSibling - similar to children
// console.log(itemList.nextElementSibling); //returns null as it doesnot have any

//previousSibling -similar to childNode
// console.log(itemList.previousSibling);

//previousElementSibling -similar to children
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

// CREATEELEMENT //

// //create a div
// var newDiv = document.createElement("div");

// //add class
// newDiv.className = "hello";

// //add id
// newDiv.id = "hello1";

// //add title
// newDiv.setAttribute("title", "Hello Div");

// //create text node
// var newDivText = document.createTextNode("hello world");

// // add text to div
// newDiv.appendChild(newDivText);

// //add div to dom
// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");

// console.log(newDiv);

// newDiv.style.fontSize = "30px";
// container.insertBefore(newDiv, h1); //inserts before h1

// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);
// function buttonClick(e) {
//   console.log("button clicked");
//   document.getElementById("header-title").textContent = "Changed";
//   document.querySelector("#main").style.backgroundColor = "#f4f4f4";
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className);
//   console.log(e.target.classList);
//   var output = document.getElementById("output");
//   output.innerHTML = "<h3>" + e.target.id + "</h3>";
//   console.log(e.type);
//   console.log(e.clientX); //position of click from the window
//   console.log(e.clientY);
//   console.log(e.offsetX); // position of click from the actual element
//   console.log(e.altKey); // returns bool value if you have hold alt key or not
//   console.log(shiftKey);
//   console.log(ctrlKey);

// }

var button = document.getElementById("button");
var box = document.getElementById("box");
// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);
// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);
// box.addEventListener("mousemove", runEvent);
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector("form");
// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);

// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);
// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);
function runEvent(e) {
  console.log("EVENT TYPE : " + e.type);
  //   console.log(e.target.value);
  //   document.getElementById("output").innerHTML =
  //     "<h3>" + e.target.value + "</h3>";
  //   output.innerHTML =
  //     "<h3>MouseX: " + e.offsetX + "</h3><h3>MouseY: " + e.offsetY + "</h3>";
  //   document.body.style.backgroundColor =
  //     "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}
