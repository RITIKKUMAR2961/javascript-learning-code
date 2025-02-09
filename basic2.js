// compilation
//code execution

// why compilation

//How javaScript work code executes

//what is global exection  context
// what is local execution context
// closures

// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName="RITIK";
// console.log(firstName);

//--------------------------------------------------------------Global execution context------------------------

//Example 2

// console.log(this);
// // console.log(window);
// console.log(myFunction);
// console.log(fullName);

// function myFunction(){
//     console.log("Hii");
// }

// var firstName="RITIK";
// var lastName="Kumar";
// var fullName=firstName+" "+lastName;
// console.log(fullName);

//-----------------------hosting
// console.log(firstName);
// const firstName=78;

//-------------------------------------------------Function execution context----------------------

// let foo="Foo";
// console.log(foo);
// function getFullName(firstName,lastName){
//     console.log(arguments);
//     let myVar="var inside func";
//     console.log(myVar);
//     const FullName=firstName+" "+lastName;
//     return FullName;
// }
// const personName=getFullName("RITIK","KUMAR");
// console.log(personName);

// //argument is array like object

//-----lexical enviroment     Scope chain
// const lastName="Kumar";
// const printName=function(){
// const firstName="RIITK";
// console.log(firstName);
// console.log(lastName);
// }
// printName();

//-------------------------------------------------Clouser -----------------------
//example 1
// function fullName(firstName,lastName){
//     function printName(){
//         console.log(firstName,lastName);
//     }
//     return printName;
// }

// const ans=fullName("RITIK","Kumar");
// ans();

//-----------------------example 2

// function hello(x){
//     const a="var1A";
//     const b ="varB";
//     return function(){
//         console.log(x,a,b);

//     }
// }
// const ans=hello("arg");
// ans();

//--------------------example 3 --------------------

// function myFunction(power){
//     return function(number){
//         return number*power;
//     }
// }

// const cube=myFunction(3);
// const ans=cube(2);
// console.log(ans);

// function func(){
//     let count=0;
//      return function(){
//         if(count==0){
//             console.log("Function is called: ");
//         }
//         else{
//             console.log("Mai already ek bar call chuka hu: ");
//         }
//         count++;
//      }
// }

// const f=func();
// f();
// f();
// f();

//aync defer-----------------------------------------------------------------------DOM (Doocument object module)-------------------------

// console.log(window.document);

// console.dir(window.document);
// console.log(document);

//-----------------------------How to select element

//----------Select element using getElementById()

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

// ------------Select element using query selector   // querySelectorAll

// const mainHeading=document.querySelector("#main-heading");
// console.log(mainHeading);
// const header=document.querySelector(".header");
// console.log(header);

//-------------------------------------------------------------------------------change text----------------------------------------------------------

// const mainHeading=document.querySelector("#main-heading");
// console.log(typeof mainHeading.textContent);
// console.log(mainHeading.textContent);

//textContent properties;

// mainHeading.textContent="This is update statement";  // text changed

//innerText properties;

// const mainHeading=document.querySelector("#main-heading");
// console.log(mainHeading.innerText);
// mainHeading.innerText="hii how are you!";

//------------ ------------------------------------------change the style of the element---------------------------------

// const heading=document.querySelector("div.headline h2");
// console.log(typeof heading.style);
// console.log(heading.style);
// heading.style.backgroundColor="Black";
// heading.style.color="white";
// heading.style.border="2px solid red";

//----------------------------------------------get and set Attribute  method-------------------
// const link = document.querySelector("a");
// console.log(link);
// console.log(link.getAttribute("href").slice(1));
// link.setAttribute("href","www.google.com");
// console.log(link.getAttribute("href"));

//---------------------------get multiple elemets using getElement by class name   get multiple elements using querySelectorAll

// const navItems=document.getElementsByClassName("nav-item");   // HTML COLLECTION
// console.log(navItems[0]);

//-

// const navItems=document.querySelectorAll(".nav-item");          // NodeList
// console.log(navItems);

//loop

// const navItems=document.getElementsByTagName("a");   // HTML COLLECTION
// console.log(navItems);

//we cannot use forEach method to iterate through Html Collection

//array like object ---> indexing ,length properties
//simple loop
//for of loop
//forEach
// for (let index = 0; index < navItems.length; index++) {
//   const navIteam=navItems[index];
//   navIteam.style.color="white";
//   navIteam.style.backgroundColor="black";

// }

// for (const navIteam of navItems) {
//     navIteam.style.color="white";
//     navIteam.style.backgroundColor="black";
// }

//change in array

//-------------------------------------------------------------innerHTML----------------------------------------

// const headline =document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML="<h1>Inner html changed </h1>";
// headline.innerHTML+="<button class=\"btn\">Learn More </button>"
// console.log(headline);
// console.log(headline.innerHTML);

//--------------------------------------------------

// const rootNOde=document.getRootNode();
// // console.log(rootNOde.childNodes);
// const htmlElemetNode=rootNOde.childNodes[0];
// console.log(htmlElemetNode.childNodes);

// const headElementNode=htmlElemetNode.childNodes[0];
// console.log(headElementNode.nextSibling.nextSibling);
// console.log(headElementNode.parentNode);
// console.log(headElementNode.children);
// const title=headElementNode.children[0];
// console.log(title.);

// sibling

// const sectionTodo=document.querySelector(".todo-section");

// ------------------------------------------classList--------------=----------

// const todoSection = document.querySelector(".todo-section");

// todoSection.classList.add("bg-dark");

//add class --  classList.add("");

//remove class

// todoSection.classList.remove("abc");

//-----contains

// console.log(todoSection.classList.contains("abc"));

// toggle ....   if class is present in class list then its remove the class and if class is not exit then they add the class in class list

// todoSection.classList.toggle("abc");
// console.log(todoSection.classList);

const todeoList = document.querySelector(".todo-list");
console.log(todeoList);
todeoList.innerHTML += "<li>New Todo List</li>";
todeoList.innerHTML += "<li>tech Student</li>"; //performance isssue

//when you should use it , when you should not used innerHTML

//best way to add eleement in html document with the help of javaScript

//-------------------document.createElemet()
//append
//prepend
//remove

// const todeoList=document.querySelector(".todo-list li");
// const newTodoItem=document.createElement("li");
// const textNode=document.createTextNode("Hii");
// newTodoItem.append(textNode);
// newTodoItem.textContent="Hiii";
// console.log(newTodoItem);

// todeoList.append(newTodoItem);
// todeoList.prepend(newTodoItem);
// todeoList.remove();

//before
//after

// const todeoList=document.querySelector(".todo-list");
// const newTodoItem=document.createElement("li");
// const textNode=document.createTextNode("Hii");
// // todeoList.after(newTodoItem);
// todeoList.before(newTodoItem);

//---------------------------------------------------clone Node

// const todoList=document.querySelector(".todo-list");
// const newtotoList=document.createElement("li");
// newtotoList.textContent="New Todo List";
// const li2=newtotoList.cloneNode(true);
// console.log(newtotoList);
// todoList.append(newtotoList);
// todoList.prepend(li2);

//-------------------some old method to support poor iE

//appendChild
//insertBefore
//replaceChild
//removeChild

//----------------static list vs live list
//quertSelectorA;; hamein static list degi
// get ElementBySomething hamein live list degi

// const listItems=document.querySelectorAll(".todo-list li");
// const ul=document.querySelector(".todo-list");
// const listItems=document.getElementsByTagName("li");
// const sixthli=document.createElement("li");
// sixthli.textContent="item 6";

// ul.append(sixthli);
// console.log(listItems);

//------------------------------------------------how to get the dimension of element

// //height width;

// const sectionTodo=document.querySelector(".todo-section");

// const info=sectionTodo.getBoundingClientRect().width;
// //width height left right top bottom
// console.log(info);

//-----------------------------------------------------------------intro to event
//click
//button press
//mouse over

// event add karne ka 3 tarike hai

// const btn = document.querySelector(".btn-headline");
// console.dir(btn);
// btn.onclick = function () {
//   console.log("You Click me");
// };

//method ------------------------------addEventListener
// function clickMe(){
//     console.log("you called me");
// }
// btn.addEventListener("click",clickMe)

// btn.addEventListener("click",function clickME(){
//     console.log("you click me");
// })

//  btn.addEventListener("click",()=>{
//     console.log("hii how are you");
//  })

//-----------------------------------------this keyword

// const btn=document.querySelector(".btn-headline");

// btn.addEventListener("click",()=>{
//     console.log("You called me");
//     console.log(this);
// })

// btn.addEventListener("click",function(){
//     console.log("You called me");
//     console.log(this);
// })

// normal function mai this ki value currect node object hoga
//arror function mai this ki value window object hoga

// ------------------------------------------------multiple button have same event

// const btn1=document.querySelector("#one");
// btn1.addEventListener("click",function(){
//     console.log("you click me");
// })

// const multipleBtn=document.querySelectorAll(".my-buttons button");
// console.log(multipleBtn);

// for (const btn of multipleBtn) {
//     btn.addEventListener("click",function(){
//         console.log("you click me!!");
//         console.dir(this.textContent);
//     })
// }

// ------------------------------------------event object-----------------------

// const firstButton=document.querySelector("#one");
// firstButton.addEventListener("click",function(){
//     console.log(this);
// })

// jab bhi ksisi bhi element pe event listener add hoga
// js engine------ line by line execute karta hai
// browser ---------- js Engile +extra features
// browser ------------ js Engine +WebApi
//jb brower ki pata chala ki user ne event perform kia
//jp hum lister kar rahe hai
//browser (web api) ----- 2 kaam karega --
//1 --- callback function vo js engine ko dega
//2------callback function ka saath vo jo event hua hai uski information bhi dega
// ye info hame ek object ka form mai mielga

// const firstButton=document.querySelector("#one");
// firstButton.addEventListener("click",(e)=>{
//     console.log(e.target);
// })

// const buttons=document.querySelectorAll(".my-buttons button");
// console.log(buttons);
// for (let index = 0; index < buttons.length; index++) {
//         buttons[index].addEventListener("click",(e)=>{
//             console.log(e.currentTarget.textContent);
//         })

// }

//-------------------------------------little practise----------------------
// const Allbutton=document.querySelectorAll(".my-buttons button");
// for (const btn of Allbutton) {
//     btn.addEventListener("click",(e)=>{
//             const black=e.currentTarget.style.backgroundColor="black";
//             const white=e.currentTarget.style.color="white";

//     })
// }

//--------------------------------------------------------
// console.log("script start !!");

// const Allbutton=document.querySelectorAll(".my-buttons button");

// for (const btn of Allbutton) {
//     btn.addEventListener("click",(e)=>{
//             console.log(e.currentTarget);
//     })
// }

// console.log("script End!!");

//-------------------------------------------index2

// const mainButton=document.querySelector("button");
// const body=document.body;
// const colorCode=document.querySelector(".currentColor");

// function randomColorGenerator(){
// const red=Math.floor(Math.random()*256);
// const green=Math.floor(Math.random()*256);
// const blue=Math.floor(Math.random()*256);
// const randomColor=`rgb(${red},${green},${blue})`;
// return randomColor;
// }

// mainButton.addEventListener("click",()=>{
//      const randomColor=randomColorGenerator();
//      console.log(randomColor);
//      body.style.backgroundColor=randomColor;
//      colorCode.textContent=randomColor;

// })

// note : Math.random --- random float value dega
//        Math.random *10 -- random float value gega  1 -- 9---
//Math.floor(Math.random() *10)   --- int value 1--9

//-------------------------------------------------Event Bubbling   Capturing  delegation   index 3  ---

//event bubbling-------------

// console.log("Hello wold");

// const Parent=document.querySelector(".parent");
// const child=document.querySelector(".child");
// const grandParent=document.querySelector(".grandParent");
//----------------------------------Event Capturing-------------------------
// child.addEventListener("click",()=>{
//     console.log("Capture!! child");
// },true);
// Parent.addEventListener("click",()=>{
//     console.log("Capture!!  Parent");
// },true);
// grandParent.addEventListener("click",()=>{
//     console.log("Capture!! grandParent");
// },true);
// document.body.addEventListener("click",()=>{
//     console.log("Capture!! body");
// },true);

//----------------------------------event Bubbling------------------------
// not captured

// child.addEventListener("click",()=>{
//     console.log("bubble child");
// });
// Parent.addEventListener("click",(e)=>{
//     console.log("bubble on parent");
//     e.stopPropagation();
// });
// grandParent.addEventListener("click",()=>{
//     console.log("bubble grandParent");
// });
// document.body.addEventListener("click",()=>{
//     console.log("bubble body");
// });

// child.addEventListener("click",()=>{
//     console.log("Capture!! child");
// },true);
// Parent.addEventListener("click",()=>{
//     console.log("Capture!!  Parent");
// },true);
// grandParent.addEventListener("click",()=>{
//     console.log("Capture!! grandParent");
// },true);
// document.body.addEventListener("click",()=>{
//     console.log("Capture!! body");
// },true);

//----------------------------------event delegation----------------------------------

// const grandParent=document.querySelector(".grandParent");
// grandParent.addEventListener("click",(e)=>{
//     console.log("Something ");
//     console.log(e.target);
// })

//-----------------------------------todo list-----------------------------

// const todoForm=document.querySelector(".form-todo");
// const todoItems=document.querySelector(".todo-list");
// const todoInput=document.querySelector(".form-todo input[type='text']");

// function addTodoList(text){
//     todoItems.innerHTML+= `<li>
//     <span class="text">${text}</span>
//     <div class="todo-buttons">
//         <button class="todo-btn done">Done</button>
//         <button class="todo-btn remove">Remove</button>
//     </div>
// </li>`
// }

// todoForm.addEventListener("submit",(e)=>{
//     e.preventDefault();  // stop referencing
//     addTodoList(todoInput.value);
// })
// todoItems.addEventListener("click",(e)=>{
//     // check if user click on done button
//     // console.log(e.target.classList);
//     if(e.target.classList.contains("done")){
//         const lispam=e.target.parentNode.previousElementSibling;
//         lispam.style.textDecoration="line-through";
//     }
//     if(e.target.classList.contains("remove")){
//      const targetLi=e.target.parentNode.parentNode;
//      targetLi.remove();
//     }

// })

//-----------------------------------------------------------------------