//how to add new element in the DOM
//1. create a new element --> createElement
//2. add content to the element --> innerHTML or innerText
//3. add the element in parent container --> appendChild or append
let Todo={
    id:12,
    title:"Todo_1"
}
let ul= document.querySelector(".todo-list");
function addTodo(todo){
    //1. create a new element
    let li= document.createElement("li");
    // setting attribite of the new lement
    li.setAttribute("id", String(`${todo.id}`));
    //2. add content to the element
    li.innerHTML=`<div>
                <input type="checkbox" id="checkbox">
                <h1> ${Todo.title}</h1>
                <div>
                    <button class="edit">✍️</button>
                    <button class="delete">❌</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>`;
    //3. add the element in parent container
    ul.appendChild(li);
}
addTodo(Todo);