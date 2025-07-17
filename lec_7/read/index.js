const fs=require("fs");
fs.readFile("lec_7/users.txt","utf8",function(err,data){
    if(err) console.log(err);
    // console.log(data);
    else{
    let users=JSON.parse(data);
fs.readFile("lec_7/Users1.txt","utf8",function(err,data1){
        if(err) console.log(err);
        // console.log(data1);
        else{
        let newUsers=JSON.parse(data1);
        let combinedUsers = users.concat(newUsers);
        fs.writeFile("lec_7/Allusers.txt",JSON.stringify(combinedUsers),function(err){
            if(err) console.log(err);
            else console.log("Combined users written successfully");
        });
    }
        });
        
}});