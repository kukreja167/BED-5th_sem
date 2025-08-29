const signupForm = document.querySelector('#signup');
const signupName = document.querySelector('#signup-name');
const signupEmail = document.querySelector('#signup-email');
const signupPassword = document.querySelector('#signup-password');
const loginForm = document.querySelector('#login');
const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');



signupForm.addEventListener('submit', async function(e){
  e.preventDefault();
  const name = signupName.value;
  const email = signupEmail.value;
  const password = signupPassword.value;

  let response= await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
         name:name,
         email:email,
         password:password
         })
  })
    let data = await response.json();
    console.log(data);
if(data.success){
  alert("User registered successfully");
}
else{
    alert("Some error occured");
}
    
});
loginForm.addEventListener('submit', async function(e){
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;

  let response= await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
         email:email,
         password:password
         })
  })
    let data = await response.json();
    console.log(data);
if(data.success){
let token=data.token;
localStorage.setItem("token",token);
  alert("User logged in successfully");
  loginForm.reset();
}

    
});