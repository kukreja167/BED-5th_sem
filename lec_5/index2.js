// let p=new Promise((resolve, reject) => {
// resolve("Okay");
// });
// //console.log(p);
// p.then((data) => {
//     console.log(data);
//     console.log("promise completed");
// })
// .catch((err) => {  
//     console.log(err);
// });
let users=[
    {id: 1, name: "John", age: 20},
    {id: 2, name: "Jane", age: 17},
    {id: 3, name: "Doe", age: 22}
];
// Function to check if a user is eligible based on their ID
function isEligible(id){
return new Promise((resolve, reject) => {
let user=users.filter((user) => user.id === id)[0];
console.log(user);
if(!user) return "no user found";
if(user.age >= 18) {
return resolve( "eligible");
}
else {  
    return reject("not eligible");  
}
}
)};
 isEligible(1).then((data)=>{
    console.log(data);
 })
 .catch((err) => {
    console.log(err);
 });
console.log("hi");
console.log("ok");
