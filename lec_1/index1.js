const fs=require("fs");
const path = require("path");
console.log(fs);
console.log("starting...");
setImmediate(() => {
    console.log("setImmediate");
});
setTimeout(() => {
    console.log("settimeout");
},0);
fs.readFile("demo.txt", "utf-8", ( data) => {
console.log("File read complete");
setTimeout(() => {
   console.log("Timeout 2");

},0 );
setImmediate(() => {
   console.log("Immediate 2");
})
}
);
console.log("ending...")