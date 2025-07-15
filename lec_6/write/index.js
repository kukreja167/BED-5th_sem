const fs=require("fs");
fs.writeFile("lec_6/Write.txt","Hello World",function(err){
    if(err){
        console.log(err);
    } else {
        console.log("File written successfully");
    }
});
fs.writeFile("lec_6/Write1.txt","This is Write1.txt file",function(err){
    if(err){
        console.log(err);
    } else {
        console.log("File written successfully");
    }
});