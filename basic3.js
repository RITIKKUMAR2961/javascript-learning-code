//-----------------------------------------------------------------------------Asyncronous JavaScript

//synchronous programming vs asynchronous programming language

// console.log("script start");

// for(let i=0;i<3;i++){
//     console.log("insise for loop ");
// }

// console.log("Script end");

//asynchronus

//-------------------------------------------------------setTimeout----------------------

// kaam sa kaam min time lagega or usse bhi jadha lag sakta hai time

// console.log("script start");
// function hello(){
//     console.log("Hello world");
// }
// setTimeout(hello,1000);

// let total=0;
// for(let i=0;i<=1000000;i++){
//   total=total+i;
// }
// console.log("script end");

// setTimeout(()=>{
//     console.log("Hello wold");
// })

//1000ms=1sec    1 min=ms*60

// console.log("script start");

// setTimeout(()=>{
//     console.log("inside Timeout");
// },0);

// for(let i=0;i<=100;i++){
//     console.log(".........");
// }

// console.log("script end");

//clearTimeout

// console.log("script start");
// const id=setTimeout(()=>{
//     console.log("inside setTimeput");
// },1000);
// console.log("setTimeout id is "+id);
// console.log("clearing time out");
// clearTimeout(id);
// console.log("script End");

//---------------------------------------------setInterval--------------------

// console.log("script start");

// setInterval(()=>{
//     console.log(Math.random());
// },1000);

// console.log("scipt end");

///

// const body=document.body;
// const Button=document.querySelector(".btn");

// const id=setInterval(()=>{
//     const red=Math.floor(Math.random()*256);
//     const green=Math.floor(Math.random()*256);
//     const blue=Math.floor(Math.random()*256);
//     body.style.background=`rgb(${red},${green},${blue})`;
// },1000)
// Button.addEventListener("click",()=>{
//     clearInterval(id);
//     Button.textContent=body.style.background;
// })

//understand callback

// function myFunc(callback){
//     console.log("Function is doing task 1");
//     callback();
// }

// function myFunc2(){
//     console.log("Function is doing task 2");
// }

// myFunc(myFunc2);

// function getTwoNumber(number1,number2,callback){
//     console.log(number1,number2);
//     callback(number1,number2);
// }
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// getTwoNumber(2,5,addTwoNumbers);

// --------------callback ,callback hell, pyramid of dom------------

// const heading1=document.querySelector(".heading1");
// const heading2=document.querySelector(".heading2");
// const heading3=document.querySelector(".heading3");
// const heading4=document.querySelector(".heading4");
// const heading5=document.querySelector(".heading5");
// const heading6=document.querySelector(".heading6");
// const heading7=undefined;
//text           Delay     Color

//one            1s         Violet
//two            2s         purple
//three          2s         red
//four           1s         pink
//five           2s         green
//six            3s         blue
//seven          1s         brown

// callback hell
// setTimeout(()=>{
//        heading1.textContent="one";
//        heading1.style.color="violet";
//        setTimeout(()=>{
//         heading2.textContent="Two";
//         heading2.style.color="purple";
//         setTimeout(()=>{
//             heading3.textContent="Three";
//             heading3.style.color="red";
//             setTimeout(()=>{
//                 heading4.textContent="four";
//                 heading4.style.color="pink";
//                 setTimeout(()=>{
//                     heading5.textContent="five";
//                     heading5.style.color="green";
//                     setTimeout(()=>{
//                         heading6.textContent="six";
//                         heading6.style.color="blue";
//                  },3000)
//              },2000)
//          },1000)
//      },2000)
//  },2000)
// },1000)

//text           Delay     Color

//one            1s         Violet
//two            2s         purple
//three          2s         red
//four           1s         pink
//five           2s         green
//six            3s         blue
//seven          1s         brown
// const heading1=document.querySelector(".heading1");
// const heading2=document.querySelector(".heading2");
// const heading3=document.querySelector(".heading3");
// const heading4=document.querySelector(".heading4");
// const heading5=document.querySelector(".heading5");
// const heading6=document.querySelector(".heading6");
// const heading7=undefined;

// function changeText(element,text,color,time,onSuccessFullCallback,onFailureCallbackFunction){
//     setTimeout(()=>{
//            if(element){
//             console.log(element);
//               element.textContent=text;
//               element.style.color=color;
//              if(onSuccessFullCallback){
//                 onSuccessFullCallback();
//              }
//            }
//            else{
//            if(onFailureCallbackFunction){
//             onFailureCallbackFunction();
//            }
//            }
//     },time)
// }

// //call back hell     pyramid of dom      inversion of control problem

// changeText(heading1,"one","red",1000,()=>{
//     changeText(heading2,"two","yellow",2000,()=>{
//         changeText(heading3,"three"," purple",2000,()=>{
//             changeText(heading4,"four","pink",1000,()=>{
//                 changeText(heading5,"five","blue",1000,()=>{
//                     changeText(heading6,"six","brown",1000,()=>{
//                         changeText(heading7,"one","green",1000,()=>{},()=>{
//                             console.log("heading7 not exit");
//                         })
//                     },()=>{
//                         console.log("heading6 not exit");
//                     })
//                 },()=>{
//                     console.log("heading4 not exit");
//                 })
//             },()=>{
//                 console.log("heading4 not exit");
//             })
//         },()=>{
//             console.log("heading3 not exit");
//         })
//     },()=>{
//         console.log("heading2 not exit");
//     })
// },()=>{
//     console.log("heading1 not exit");
// });

//------------------------------------------intro promise------------------

//produce--------------------------------------

// const bucket=['coffee','chips','vegetables','rice']

// const firedRicePromise=new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
//         resolve("Fried rice"); // string
//         // resolve({value:"friedrice"}); // parse object
//         // resolve(['apple','banana']);   // parse array
//     }
//     else{
//         reject("Could not do it");
//         // reject(new Error("promise is not occur"))
//     }
// })

//produce  promise ko  create kiya

//consume

//how to consume

// firedRicePromise.then(
//     //jab promise resolve hoga
//     (myFriedRice)=>{
//      console.log("let its "+myFriedRice);
// },
//   // jab promise reject hoga
// (error)=>{console.log(error);})

// console.log("Script start");

// const bucket=['coffee','chips','vegetables','rice']

// const firedRicePromise=new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
//         resolve("Fried rice"); // string
//         // resolve({value:"friedrice"}); // parse object
//         // resolve(['apple','banana']);   // parse array
//     }
//     else{
//         reject("Could not do it");
//         // reject(new Error("promise is not occur"))
//     }
// })

// firedRicePromise.then((myFriedRice)=>{
// console.log("let its : "+myFriedRice);
// }).catch((error)=>{
//     console.log(error);
// })

// setTimeout(()=>{
//     console.log("hello world");
// },0)

// console.log("script end");

// function returning promise

const bucket = ["vegetables", "friedrice", "salt"];

function ricePromise() {
  return new Promise((ritik, roushan) => {
    if (
      bucket.includes("vegetables") &&
      bucket.includes("salt") &&
      bucket.includes("friedrice")
    ) {
      ritik("friedRice");
    } else {
      roushan("could not do it");
    }
  });
}

const pro = ricePromise()
  .then((fullfiled) => {
    console.log("let eats  " + fullfiled);
    return ricePromise();
  })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(pro);

// const heading1=document.querySelector(".heading1");
// const heading2=document.querySelector(".heading");
// const heading3=document.querySelector(".heading3");
// const heading4=document.querySelector(".heading4");
// const heading5=document.querySelector(".heading5");
// const heading6=document.querySelector(".heading6");

function changeTextColor(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject("Cound not do");
      }
    }, time);
  });
}

// const returnPromise=changeTextColor(heading1,"one","red",1000);

// // returnPromise.then(()=>{
// //     return changeTextColor(heading2,"Two","green",2000);
// // }).then(()=>{

// // })

// returnPromise.then(()=>changeTextColor(heading2,"two","green",1000)
// ).then(()=>changeTextColor(heading3,"thrree","pink",1000)
// ).then(()=>changeTextColor(heading4,"four","yellow",1000)
// ).then(()=>changeTextColor(heading5,"five","red",1000)
// ).then(()=>changeTextColor(heading6,"six","blue",1000)
// ).then(()=>changeTextColor(heading7,"two","green",1000)
// ).catch((erro)=>console.log(erro));

//-----------------------------------------------AJAX : Asynchronous javaScript and XML

//Basic Theroy

//AJAX - Asynchronous javaScript And XML

//HTTP request

//is a set of "web development techniques"
//using many web technologies on the "client-side"
//to create asynchronous web application

//with Ajax ,web application can send and retrive
//data from a server asynchronouly (in the background)
//without interfering with the display  and
//behavious of existing page

//We don't use data in XML formate anymore
// we use JSON now

//We  have 3 most common ways to create and send request to server

//1) xmlHTTPRequest (old way of doing)
//2) fetch API (new way of doing)
//3.) axios (this is thrid party library)

//json typicode
// const URL="https://jsonplaceholder.typicode.com/posts";
// const XHR=new XMLHttpRequest();
// // console.log(XHR);

// // step1     -- open()

// // Routes
// // All HTTP methods are supported
// // console.log(XHR.readyState);
// XHR.open("GET",URL);  // kon se rquest data ko fetch karni hai  GET POST PETCH DELECT
// // console.log(XHR.readyState);
// XHR.onreadystatechange=function(){
//     // console.log(XHR.readyState);
//     if(XHR.readyState===4){
//         // console.log(XHR);
//         console.log(XHR.response);
//     }
// }

// XHR.send();

// const URL="https://jsonplaceholder.typicode.com/posts";
// const xhr=new XMLHttpRequest();

// xhr.open("GET",URL);
// xhr.onreadystatechange=function(){
//     if(xhr.readyState===4){
//         console.log(typeof xhr.response);
//         const response=xhr.response;
//         const data=JSON.parse(response);
//         console.log(data);
//     }
// }

// xhr.send();

// const URL="https://jsonplaceholder.typicode.com/posts";
// const xhr=new XMLHttpRequest();

// xhr.open("GET",URL);
// xhr.onload=function(){
//     // console.log(xhr.readyState);
//     const response=xhr.response;
//     const data=JSON.parse(response);
//     console.log(data);
// }
// xhr.send();

//errro handling

// const URL="https://jsonplaceholder.typicode.com/posts";
// const XHR=new XMLHttpRequest();

// XHR.open("GET",URL);

// XHR.onload=function(){
//  if(XHR.status>=200&&XHR.status<300){
//     const response=XHR.response;
//     const data=JSON.parse(response);
//     console.log(data)

//  }
//  else{
//     console.log("something went Wrong");
//  }
// }
// // network related errro faced
// XHR.onerror=()=>{
//    console.log("network erro");
// }
// XHR.send();

// if internate is discoonected here also faces an error that is ERR_INTERNET_DISCONNECTED

// promise

// const URL="https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, URL) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, URL);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 3000) {
        resolve(xhr.response);
      } else {
        reject(new Error("ggg"));
      }
    };
    xhr.onerror = function () {
      console.log("Network errro");
    };
    xhr.send();
  });
}

// sendRequest("GET",URL).then(response=>{
//     const data=JSON.parse(response);
//     return data;
// })
// .then(data=>{
//     const id=data[3].id;
//     return id;
// }).then((id)=>{
//     const url=`${URL}/${id}`;
//     return sendRequest("GET",url);
// }).then((respose)=>{
//     const newData=JSON.parse(respose);
//     console.log(newData);

// }).catch(error=>{
//     console.log(error);
// })

//fetch-------------
// const URL="https://jsonplaceholder.typicode.com/posts";

// fetch(URL).then((resolve)=>{
//     if(resolve.ok){
//         return resolve.json()
//     }
//     else{
//         console.log("Something wrong");
//     }
// }).then((data)=>{
//       return data;
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//    console.log("som");
// })

//async await
// const URL="https://jsonplaceholder.typicode.com/posts";

// async function getPOst(){
//     const respone=await fetch(URL);
//     const data=await respone.json();
//    return data;
// }

// getPOst().then((data)=>{
//     console.log(data);
// }).catch((errro)=>{
//     console.log("ERR");
// })