const fs=require("fs");
let users=[{
    name:"Kavya",
    age:21,
    city:"Delhi"
},{
    name:"Aman",
    age:22,
    city:"Mumbai"
}
]
let newUser=[{
    name:"Riya",
    age:20,
    city:"Bangalore"
},{
    name:"Rahul",
    age:23,
    city:"Chennai"
}]
fs.writeFile("lec_7/Users.txt",JSON.stringify(users),function(err){
    if(err){
        console.log(err);
    } else {
        console.log("File written successfully");
    }
});
fs.appendFile("lec_7/Users1.txt",JSON.stringify(newUser),function(err){
    if(err){
        console.log(err);
    } else {
        console.log("File written successfully");
    }
});