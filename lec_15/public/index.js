const signup=document.querySelector("#signup");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
function adduser(email, password) {
let newuser={
email: email,
password: password
}   
fetch('/user', {
method: 'POST',
body: JSON.stringify(newuser),
headers: {
'Content-Type': 'application/json'  
}
}).then(response => {
    return response.json();
}).then(data => {
    console.log(data); 
    if (data.success) {
        alert(data.message);
        signup.reset(); // Reset the form after successful submission
    } else {
        alert( data.message);
    } 
}).catch((error) => {
    console.error('Error:', error);
});
}
signup.addEventListener("submit", function(e) {
e.preventDefault();
adduser(email.value, password.value);
});