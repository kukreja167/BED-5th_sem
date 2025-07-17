const fs=require("fs");
const{write}=require("../IO/io.js");
async function writeUsers() {
    await write("lec_7/iowrite/iowrite.txt", users);
    console.log("Users written successfully");
}
writeUsers();
