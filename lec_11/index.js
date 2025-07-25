//accesing dom elements
// using id
const res = document.getElementById("mydiv");
// console.log(res);
console.dir(res);
// using class
const h2 = document.getElementsByClassName("h2");
console.log(h2);
console.log(h2[0]);
// using tag name
const p = document.getElementsByTagName("p");
console.log(p);
// using query selector
const res2 = document.querySelector("p");
document.querySelectorAll("p");
console.log(res2);
//document properties
//1.accessing elment content and change it.
// *innerHTML
console.log(res.innerHTML); //getter
res.innerHTML = "<h1>hello world</h1>"; //setter
// *inner text
console.log(res.innerText); //getter
res.innerText = `hello world`; //setter
// *text content
console.log(res.textContent); //getter
res.textContent = `hello world`; //setter
//1. accessing attributes
console.log(res.getAttribute("id")); //getter   
res.setAttribute("id", "newId"); //setter
console.log(res.getAttribute("id")); //getter
const btn= document.querySelector(".btn");
// btn.addEventListener("click", function() {
//     res.setAttribute("class", "js"); //setter
// });
//2.only for classes
// *class list
let myh= document.querySelector(".myh");
console.log(myh.classList); //getter
myh.classList.add("hi"); //setter
myh.classList.remove("myh"); //setter
btn.addEventListener("click",()=> {
    myh.classList.toggle("jaiho"); //toggle class
});
const btn1 = document.querySelector(".btn1");
let myform = document.querySelector(".signup");
btn1.addEventListener("click", () => {
    myform.classList.toggle("hide"); //toggle class
});
//3. styles
