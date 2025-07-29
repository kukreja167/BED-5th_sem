let edit=document.querySelector(".edit");
let del=document.querySelector(".delete");
//  console.log(edit);
// next element sibling
 console.log(edit.nextElementSibling)
 console.log(edit.previousElementSibling)
 console.log(edit.nextElementSibling.nextElementSibling)
 console.log(edit.parentElement.previousElementSibling)
 console.log(del.parentElement.parentElement.parentElement)
 let id=del.parentElement.parentElement.parentElement.getAttribute("id");
 console.log(id);
 
 

