const fs= require("fs");
const{read}=require("../IO/io.js");
async function readusers() {
    let users=await read("lec_7/users.txt");
    let users1=await read("lec_7/Users1.txt");
    console.log(users, users1);
}
readusers();