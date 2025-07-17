const fs=require("fs");
const{read}=require("../IO/io.js");
const{write}=require("../IO/io.js");
async function readusers() {
    let users=await read("lec_7/users.txt");    
    let users1=await read("lec_7/Users1.txt");
    let combinedUsers = users.concat(users1);
    await write("lec_7/IO/Combined.txt", combinedUsers);
    console.log("Combined users written successfully");
}  
readusers();