const fs=require("fs");
const content=process.argv[2];
const content2=process.argv[3];
if (!content || !content2) {
    console.log("Usage: node index.js <content1> <content2>");
    process.exit(1);
}

fs.writeFile("/Users/kavyakukreja_167/Desktop/BED-5th_sem/lec_6/Write.txt",content,function(err){
    if(err){
        console.log(err);
    } else {
        console.log("File written successfully");
    }
});
fs.writeFile("/Users/kavyakukreja_167/Desktop/BED-5th_sem/lec_6/Write1.txt",content2,function(err){
    if(err){
        console.log(err);
    } else {
        console.log("File written successfully");
    }
});