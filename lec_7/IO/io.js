const fs=require("fs");
function read(file){
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf8", function(err, data) {
            if (err) reject(err);
            let users = JSON.parse(data);
            resolve(users);
        });
    });
}
function write(file, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, JSON.stringify(content), function(err) {
            if (err) reject(err);
            resolve("File written successfully");
        });
    });
}
module.exports = { read , write };